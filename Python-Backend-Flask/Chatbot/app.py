import torch
from transformers import GPT2Tokenizer, GPT2LMHeadModel, Trainer, TrainingArguments, DataCollatorForLanguageModeling
from flask import Flask, request, jsonify
from flask_cors import CORS
import logging

# Setup logging
logging.basicConfig(filename='app.log', level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

app = Flask(__name__)
CORS(app)

# Load fine-tuned model and tokenizer
model_path = "./Model/fine_tuned_model"
tokenizer = GPT2Tokenizer.from_pretrained(model_path)
model = GPT2LMHeadModel.from_pretrained(model_path)

# Define Custom Dataset Class
class CustomDataset(torch.utils.data.Dataset):
    def __init__(self, encodings):
        self.encodings = encodings

    def __getitem__(self, idx):
        return {key: val[idx].clone().detach() for key, val in self.encodings.items()}

    def __len__(self):
        return len(self.encodings.input_ids)

# Save feedback for future fine-tuning
def save_feedback(response_text, feedback_score):
    with open('feedback_data.txt', 'a') as f:
        f.write(f"{response_text}\t{feedback_score}\n")
    logging.info('Feedback saved: Response: %s, Score: %d', response_text, feedback_score)

# Update model immediately with positive feedback
def update_model_immediately(response_text):
    encodings = tokenizer(
        [response_text],  # Wrap in a list to handle single example
        truncation=True,
        padding=True,
        max_length=128,
        return_tensors='pt'
    )
    
    dataset = CustomDataset(encodings)
    
    training_args = TrainingArguments(
        output_dir='./fine_tuned_model',
        num_train_epochs=1,  # Use 1 epoch for immediate updates
        per_device_train_batch_size=1,
        learning_rate=2e-5,
        save_steps=100,
        logging_dir='./logs',
        logging_steps=10,
        weight_decay=0.01
    )
    
    data_collator = DataCollatorForLanguageModeling(tokenizer=tokenizer, mlm=False)
    
    trainer = Trainer(
        model=model,
        args=training_args,
        train_dataset=dataset,
        data_collator=data_collator,
    )
    
    trainer.train()
    model.save_pretrained("fine_tuned_model")
    tokenizer.save_pretrained("fine_tuned_model")
    logging.info('Model updated with new feedback.')

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    input_text = data.get('message', '')

    # Check if input_text is empty
    if not input_text:
        logging.error('Empty message received.')
        return jsonify({"response": "Error: No input text provided."}), 400

    inputs = tokenizer(input_text, return_tensors='pt', truncation=True, padding=True)
    input_ids = inputs['input_ids']
    attention_mask = inputs['attention_mask']
    
    # Generate response with shorter length
    outputs = model.generate(
        input_ids,
        attention_mask=attention_mask,
        max_length=50,  # Shorter response length
        num_return_sequences=1,
        temperature=0.5,  # Lower temperature for more deterministic output
        top_k=30,  # Top-k sampling
        top_p=0.8,  # Top-p (nucleus) sampling
        no_repeat_ngram_size=2,
        do_sample=True
    )
    
    response_text = tokenizer.decode(outputs[0], skip_special_tokens=True)
    logging.info('Generated response: %s', response_text)
    
    return jsonify({"response": response_text})

@app.route('/feedback', methods=['POST'])
def feedback():
    data = request.json
    response_text = data.get('response', '')
    feedback_score = int(data.get('score', 0))  # Convert score to integer

    # Check if response_text is empty or score is invalid
    if not response_text or feedback_score not in [-1, 1]:
        logging.error('Invalid feedback data: Response: %s, Score: %d', response_text, feedback_score)
        return jsonify({"status": "error", "message": "Invalid feedback data"}), 400

    # Save the feedback
    save_feedback(response_text, feedback_score)
    
    # Update the model immediately if feedback is positive
    if feedback_score > 0:
        update_model_immediately(response_text)
    
    return jsonify({"status": "success"})

if __name__ == '__main__':
    app.run(debug=True)