#imports
#used to send recieve requests and send back data
from flask import Flask, request, jsonify, render_template # type: ignore
from flask_cors import CORS # type: ignore
from waitress import serve #type: ignore
#Connects test_server.py to MYSQL database on
#MYSQL workbench
import mysql.connector # type: ignore
#import DB credentials from secret file to ensure security
from secrets import dataBase

#variable associated with queries in database
cursor = dataBase.cursor()
cursor.execute("show databases")

print("Connection to MYSQL database running on Localhost...")
#print databases found in SQL server
for x in cursor:
    print("Database found: ",x)
print("\n")

cursor.execute("SELECT * FROM addresses")
myresult = cursor.fetchall()

#Flask
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

        pieces = value.split()
        prepped_address = ''
        print(pieces)
        
        for i in range(1,len(pieces)-1):
            prepped_address += pieces[i] + ' '


        house_number = pieces[0]
        zip_code = pieces[-1]

        print("House number: ",house_number)
        print("Prepped address: ", prepped_address)
        print("Zipcode: ",zip_code)


    part2 = prepped_address.split()
    typeOf = part2[-1]
    fully_prepped= ""

    for item in part2:
        if item != typeOf:
            fully_prepped += item + " "
        else:
            continue

    #Conversion of "Road" to "RD", needed for string comparison
    if typeOf in ['street','St', 'STREET', 'ST','Street']:
        typeOf = "ST"
        #print("we hit this condition")
    elif typeOf in ['road','Rd', 'ROAD', 'RD','Road']:
        typeOf = "RD"
    elif typeOf in ['boulevard','Blvd', 'BOULEVARD', 'BLVD','Boulevard']:
        typeOf = "BLVD"
    elif typeOf in ['avenue','Ave', 'AVENUE', 'AVE','Avenue']:
        typeOf = "AVE"
    elif typeOf in ['place','Pl', 'PLACE', 'PL','Place']:
        typeOf = "PL"

    fully_prepped += typeOf
    ward_number = 0

    for x in myresult:
        if fully_prepped.upper() == x[0]+"":
            if x[1] > int(house_number):
                continue
            elif int(house_number) > x[2]:
                continue
            if int(house_number) % 2 == 0 and x[3] == "E":
                print("Ward:",x[-1])
                ward_number += x[-1]
                print("\n")
            elif int(house_number) % 2 !=0 and x[3] == "O":
                print("Ward: ",x[-1])
                ward_number += x[-1]
        
    #Return back to the front end
    if 0 < ward_number:
        return jsonify(ward_number)
    else:
        return jsonify('error')


#Main
if __name__ == '__main__':
    serve(app, host = "127.0.0.1", port= 5000)
