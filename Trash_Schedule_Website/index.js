const date = new Date(); 
let isHoliday = false; 

//Map (Numbers, Days of the Week)
let dayMap = new Map();
dayMap.set(0, "Sunday");
dayMap.set(1, "Monday");
dayMap.set(2, "Tuesday");
dayMap.set(3, "Wednesday");
dayMap.set(4, "Thursday");
dayMap.set(5, "Friday");
dayMap.set(6, "Saturday")

//day of the week 0-6 (Ex. Monday is 1)
//const number_day = date.getDay();
let number_day = 5; 

//Actual day of the month (Ex. the 12th)
//let month_day = date.getDate();
let month_day = 1; 

//Month number (Ex. March is 3)
//let month = date.getMonth()+1; 
let month = 1; 

//Year number (Ex. 2025)
const year = date.getFullYear();

//Combining all the date variables to create a Full date string (Ex. 4/12/2025)
const full_date = (String(month)+ "/" + String(month_day)+ "/" + String(year));

///var d = new Date();
//var datey = 26;
//var day = 5;

//Variable associated with the week of the given month
var weekOfMonth = Math.ceil((month_day - 1 - month) / 7)+1;
console.log("Week of the month:", weekOfMonth);

//This will be printed in the console on JavaScript
console.log("Month: "+month)
console.log("Day of the month: "+month_day)
console.log("Year: "+year);
 
console.log("Current date:", full_date);
document.getElementById("displayed_date").textContent= "Current Date: "+ full_date;

//This checks if the current date is a holiday
//If it is a holiday, is Holiday will be True, otherwise, it is False 
//New Years Eve
if (month == 1 && month_day == 1) {
          console.log("New Years Eve");
          isHoliday = true;
}

    // Memorial Day
    else if (month == 5 && number_day == 2 && week_of_month == 4) {
        Console.log("Memorial Day");
        isHoliday = true;
}

    // 4th of July / Independence Day (Good)
    else if (month == 7 && month_day == 4) {
        console.log("Independence Day");
        isHoliday = true;
}
		
	// Labor day, month = september, number_day = monday, rando = week of month
    else if (month == 9 && number_day == 2 && week_of_month == 1) {
        console.log("Labor Day");
        isHoliday = true;
}
    // Thanksgiving (Good)
    else if (month == 11 && number_day == 5 && week_of_month == 4) {
    	console.log("Happy Thanksgiving");
        isHoliday = true;
		}
    
    // Christmas (Good)
   else if (month == 12 && month_day == 25) {
        console.log("Christmas");
        isHoliday = true;
   }

console.log("Checking if it is a holiday: "+isHoliday);

//If it is a Holiday, this will mark table entries associated with that day with an "X"
if(isHoliday == true){
    let day_found = dayMap.get(number_day);
    let new_string = "#"+ day_found + "";
    const holiday_dates = document.querySelectorAll(new_string);
    holiday_dates.forEach(holiday_dates => {
    holiday_dates.textContent = "H";
    console.log("This should appear 3 times");
})
}

//function associated with form on index.html
document.getElementById('test_server').addEventListener('submit', async (a) => {
    a.preventDefault();
    const street_address = document.getElementById('address').value;
    console.log(street_address);
    console.log("Request should be sent now");


    fetch('http://localhost:5000/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ key: street_address })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Successful',data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

})