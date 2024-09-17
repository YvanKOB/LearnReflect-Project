from flask import Flask
from flask_cors import CORS
from ChatbotAI.Route import chatbot  # Import chatbot blueprint
from AudioEnchancerAI.Route import audio  # Import audio blueprint
from VideoFolder.Route import video  # Import video blueprint
import logging

# Setup logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

app = Flask(__name__)
CORS(app)

# Register blueprints
app.register_blueprint(chatbot, url_prefix='/chatbot')
app.register_blueprint(audio, url_prefix='/audio')
app.register_blueprint(video, url_prefix='/video')

@app.before_first_request
def startup_message():
    logging.info("Flask server is starting up...")

@app.after_request
def log_requests(response):
    logging.info(f"{request.method} {request.path} - {response.status}")
    return response

if __name__ == '__main__':
    logging.info("Starting Flask server...")
    app.run(debug=True)
