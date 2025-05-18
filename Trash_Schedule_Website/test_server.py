    # server.py
from flask import Flask, request, jsonify
from flask_cors import CORS
    
app = Flask(__name__)
CORS(app)
    
@app.route('/data', methods=['POST'])
def handle_data():
    data = request.get_json()
    # Process the data (e.g., save to a database, perform calculations)
    result = {'message': 'This is a message from Python', 'received_data': data}
    for key,value in data.items():
        random_variable = value
    print("Request received from Javascript! The address is: ",random_variable)
    return jsonify(result)
    
if __name__ == '__main__':
    app.run(debug=True, port=5000)
