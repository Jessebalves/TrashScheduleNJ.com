#imports
from flask import Flask, request, jsonify
from flask_cors import CORS
    

app = Flask(__name__)
CORS(app)
    
@app.route('/data', methods=['POST'])
def handle_data():
    data = request.get_json()
    # Process the data (e.g., save to a database, perform calculations)
    #This message will be sent to the front end(JavaScript)
    result = {'message': 'This is a message from Python', 'received_data': data}

    #Our street address variable from JavaScript is passed to this file as dictionary, which is variable data
    #Therefore, we iterate through the dictionary and set a variable equal to
    #the dictionary value we passed from JavaScript (address)
    for key,value in data.items():
        random_variable = value

    #This will be printed in the python program terminal 
    print("Request received from Javascript! The address is: ",random_variable)
    return jsonify(result)


if __name__ == '__main__':
    app.run(debug=True, port=5000)
