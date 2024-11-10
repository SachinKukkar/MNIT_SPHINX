from flask import Flask, jsonify, request
from google.cloud import vision
from google.oauth2 import service_account
import requests
from io import BytesIO
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

## google creds yahan daal diyo
credentials = service_account.Credentials.from_service_account_file(app.config['GOOGLE_APPLICATION_CREDENTIALS'])
vision_client = vision.ImageAnnotatorClient(credentials=credentials)

@app.route('/process_image', methods=['POST'])
def process_image():
    ## Image request here ->>
    data = request.get_json()
    image_url = data.get('image_url')
    
    if not image_url:
        return jsonify({'error': 'No image URL provided'}), 400

    ## Fetching the Image -->
    try:
        response = requests.get(image_url)
        response.raise_for_status()  # Check for HTTP errors
    except requests.exceptions.RequestException as e:
        return jsonify({'error': f'Error fetching image from URL: {e}'}), 500

    ## Sending to Google Vision API or wherever U want to -->
    image_content = response.content
    image = vision.Image(content=image_content)

    try:
        vision_response = vision_client.label_detection(image=image)
    except Exception as e:
        return jsonify({'error': f'Error processing image with Google Vision API: {e}'}), 500

    ## Store the output -->
    labels_data = {}
    for label in vision_response.label_annotations:
        labels_data[label.description] = label.score

    # Step 4: Return the response as JSON
    return jsonify({'labels': labels_data}), 200

if __name__ == '__main__':
    app.run(debug=True)
