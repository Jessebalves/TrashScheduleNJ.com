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
    database = 'trashschedule'
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
"""for x in myresult: 
    if x[0] == "ELM ST":
        print("Street Name: ", x[0])
        print("Low Range: ", x[1])
        print("High Range: ",x[2])
        print("Side: ",x[3])
        print("Zipcode: ",x[4])
        print("Ward:",x[-1])
        print("\n")"""

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

        pieces = value.split()
        prepped_address = ''
        print(pieces)

        #Send error message back to front end if the user input is shorter than 4 words
        #the input from the front end should be something like "142 Elm Street 07208"
        #if len(pieces) < 4: 
        #    return jsonify('error')
        
        for i in range(1,len(pieces)-1):
            prepped_address += pieces[i] + ' '


        house_number = pieces[0]
        zip_code = pieces[-1]

        print("House number: ",house_number)
        print("Prepped address: ", prepped_address)
        print("Zipcode: ",zip_code)

    print("What im testing:", prepped_address)

    part2 = prepped_address.split()
    typeOf = part2[-1]
    print("Testing: ", part2)

    fully_prepped= ""

    for item in part2:
        if item != typeOf:
            fully_prepped += item + " "
        else:
            continue

    #add to this
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
    print(typeOf)
    #print("LOOK: ", fully_prepped)

    #does not account for addressed that have "E" or "W" in the beginning 
    fully_prepped += typeOf

    print(fully_prepped.upper())

    #new_string = prepped_address.upper()
    ward_number = 0

    for x in myresult:
        if fully_prepped.upper() == x[0]+"":
            if x[1] > int(house_number):
                continue
            elif int(house_number) > x[2]:
                continue
            if int(house_number) % 2 == 0 and x[3] == "E":
                print("We finally hit this condition")
                print("Street Name: ", x[0].lower())
                print("Low Range: ", x[1])
                print("High Range: ",x[2])
                print("Side: ",x[3])
                print("Zipcode: ",x[4])
                print("Ward:",x[-1])
                ward_number += x[-1]
                print("\n")
            elif int(house_number) % 2 !=0 and x[3] == "O":
                print("Ward: ",x[-1])
                ward_number += x[-1]
                print(ward_number)
        

    if 0 < ward_number:
        return jsonify(ward_number)
    else:
        return jsonify('error')


#Main
if __name__ == '__main__':
    from waitress import serve
    serve(app, debug = False, host = "127.0.0.1", port= 5000)
    #app.run(debug=False, port=5000)