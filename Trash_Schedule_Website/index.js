//window.alert("This is a warning message!");

//document.getElementById("my_h1").textContent = "This is a header defined in JavaScript"; 


const date = new Date(); 

//Dictionary - Not sure if this will be used
let myDictionary = new Map();
myDictionary.set(0, "Sunday");
myDictionary.set(1, "Monday");

console.log(myDictionary);

//day of the week 0-6 (Ex. Monday is 1)
const number_day = date.getDay();
//Actual day of the month (Ex. the 12th)
let month_day = date.getDate()
//Month number
let month = date.getMonth(); 
//Year number
const year = date.getFullYear();

//test numbers for holiday
//month = 7; 
//month_day = 4; 

const full_date = (String(month)+ "/" + String(month_day)+ "/" + String(year));

console.log(number_day);

console.log(month)
console.log(month_day)
console.log(year);
 
console.log("Current date:", full_date);

//button function
document.getElementById("mySubmit").onclick = function(){
    let street_address = document.getElementById("address").value;
    console.log(street_address);
    document.getElementById("com2").textContent="Address Entered: "+street_address; 
    document.getElementById("cmon").textContent= "Current Date: "+ full_date;
    if (month == 1 && month_day == 1) {
        console.log("New Years Eve");
        console.log(number_day);
        document.getElementById("com3").textContent="It is New Years Eve. No Trash for today.";
		}

    // Memorial Day(Test This)
    //else if (month == 5 && number_day == 2 && week_of_month == 4) {
        //	Console.log("Memorial Day");
    //	}

    // 4th of July / Independence Day (Good)
    else if (month == 7 && month_day == 4) {
        document.getElementById("com3").textContent="It is 4th of July. No Trash for today.";
		}
	// Labor day, month = september, number_day = monday, rando = week of month
	// (Test This)
    //else if (month == 9 && number_day == 2 && week_of_month == 1) {
        //	Console.log("Labor Day");
//		}
    // Thanksgiving (Good)
    //else if (month == 11 && number_day == 5 && week_of_month == 4) {
    //	Console.log("Happy Thanksgiving");
//		}
    // Christmas (Good)
    else if (month == 12 && month_day == 25) {
	    console.log("Christmas");
		}
}
