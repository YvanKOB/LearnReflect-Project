from flask import Blueprint, request, send_from_directory, jsonify
from flask_cors import CORS
import os
import subprocess
from werkzeug.utils import secure_filename
from config import Config
demucs_bp = Blueprint('demucs', __name__)
CORS(demucs_bp)



def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in Config.ALLOWED_EXTENSIONS

@demucs_bp.route('/process', methods=['POST'])
def process_audio():
    if 'audio' not in request.files:
        return jsonify({"error": "No file part"}), 400
    file = request.files['audio']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(Config.UPLOAD_FOLDER, filename)
        file.save(filepath)
        subprocess.run(['demucs', filepath])
        output_files = [f for f in os.listdir(Config.OUTPUT_FOLDER) if f.endswith('.wav')]
        return jsonify({"files": output_files})
    return jsonify({"error": "File type not allowed"}), 400

@demucs_bp.route('/download/<filename>', methods=['GET'])
def download_file(filename):
    return send_from_directory(Config.OUTPUT_FOLDER, filename, as_attachment=True)
