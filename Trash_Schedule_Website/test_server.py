#imports
#used to send recieve requests and send back data
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
#Connects test_server.py to MYSQL database on
#MYSQL workbench
import mysql.connector


#This is code that connects us to our MYSQL database
dataBase = mysql.connector.connect(
    host='localhost',
    user = 'root',
    password = 'Rando15*'
    )    

cursor = dataBase.cursor()
cursor.execute("show databases")

print("Connection to MYSQL database running on Localhost...")
for x in cursor:
    print("Database found: ",x)
print("\n")


app = Flask(__name__)
CORS(app)

    
@app.route('/data', methods=['POST'])
def handle_data():
    data = request.get_json()
    # Process the data (e.g., save to a database, perform calculations)
    #This message will be sent to the front end(JavaScript)
    result = {'Message': 'This is a message sent from test_server.py', 'Received Data': data}

    #Our street address variable from JavaScript is passed to this file as dictionary, which is variable data
    #Therefore, we iterate through the dictionary and set a variable equal to
    #the dictionary value we passed from JavaScript (address)
    for key,value in data.items():
        #printed in Python terminal after form is sent from the frontend
        print("\n")
        print("Request received from Javascript!")
        print("The address supplied was: ",value)
        print("\n")
        random_variable = value

    return jsonify(random_variable)


#Main
if __name__ == '__main__':
    app.run(debug=True, port=5000)