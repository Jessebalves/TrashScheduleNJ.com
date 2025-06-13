#imports
#used to send recieve requests and send back data
from flask import Flask, request, jsonify, render_template # type: ignore
from flask_cors import CORS # type: ignore
#Connects test_server.py to MYSQL database on
#MYSQL workbench
import mysql.connector # type: ignore


#This is code that connects us to our MYSQL database
#These are the credentials of the MYSQL server we are connecting this python file to 
dataBase = mysql.connector.connect(
    host='localhost',
    user = 'root',
    password = 'Rando15*',
    database = 'mytestdb'
    )    

cursor = dataBase.cursor()
cursor.execute("show databases")
#myresult = cursor.fetchall()

print("Connection to MYSQL database running on Localhost...")
for x in cursor:
    print("Database found: ",x)
print("\n")

cursor.execute("SELECT * FROM addresses")
myresult = cursor.fetchall()
#print(myresult)
for x in myresult: 
    if x[0] == "ELM ST":
        print("Street Name: ", x[0])
        print("Low Range: ", x[1])
        print("High Range: ",x[2])
        print("Side: ",x[3])
        print("Zipcode: ",x[4])
        print("Ward:",x[-1])
        print("\n")

app = Flask(__name__)
CORS(app)

#This section of code is executed when you press the "check trash" button on the front end
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
    
    for x in myresult: 
        if x[0] == value:
            print("Street Name: ", x[0].lower())
            print("Low Range: ", x[1])
            print("High Range: ",x[2])
            print("Side: ",x[3])
            print("Zipcode: ",x[4])
            print("Ward:",x[-1])
            print("\n")


    return jsonify(random_variable)


#Main
if __name__ == '__main__':
    app.run(debug=True, port=5000)