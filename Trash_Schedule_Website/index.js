//Variable associated with current date
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
const dayMapId = date.getDay();

//Actual day of the month (Ex. the 12th)
let month_day = date.getDate();

//Month number (Ex. March is 3)
let month = date.getMonth()+1; 

//Year number (Ex. 2025)
const year = date.getFullYear();

//Combining all the date variables to create a Full date string (Ex. 4/12/2025)
const full_date = (String(month)+ "/" + String(month_day)+ "/" + String(year));

//Start day of the given month(Ex. Tuesday May 1st, 2025)
const startOfMonth = new Date(year, month - 1, 1);
const endOfMonth = new Date(year, month, 0);
console.log("Beginning of Month:"+startOfMonth);
console.log(endOfMonth);

//This gets the DayID associated with the start of the month
var startDay = startOfMonth.getDay();
var endDay = endOfMonth.getDay(); 
let counter = 0;

//If start day is not sunday, we count until until start day is equal to 7, indicating its the first sunday in the month
//This means a start of a new week

if(month == 5 || month == 9 || month == 11){
    while(startDay > 0 && startDay < 7){
        //console.log(startDay);
        counter += 1; 
        startDay = startDay + 1; 
}
}

console.log("Counter: ",counter);
console.log("Start day: "+startDay);

//Adjusted date is the number of days passed since the first sunday in the month
var adjustedDate = month_day - counter; 
console.log("Adjusted Date: ",adjustedDate);
//console.log("Week of month unrounded: ",month_day/7);

//Variable associated with the week of the given month
var weekOfMonth = Math.ceil(adjustedDate / 7);
var testWeekofMonth = (adjustedDate/7);
console.log("Week of the month:", weekOfMonth);
console.log(testWeekofMonth);

//This will be printed in the console on JavaScript
console.log("Month: "+month)
console.log("Day of the month: "+month_day)
console.log("Year: "+year);
 
console.log("Current date:",dayMap.get(dayMapId), full_date);
document.getElementById("displayed_date").textContent= "Date: "+dayMap.get(dayMapId) + " "+full_date;
let countervari = 3; 

//This checks if the current date is a holiday
//If it is a holiday, is Holiday will be True, otherwise, it is False 
//New Years Eve
if (month == 1 && weekOfMonth == 1) {
    console.log("New Years Eve");
    let testo_day = dayMap.get(startDay);
    let new_string = "#"+ testo_day + "";
    if(adjustedDate + startDay > 7){
        console.log("Not a holiday"); 
    }
    else{
        const holiday_dates = document.querySelectorAll(new_string);
        holiday_dates.forEach(holiday_dates => {
        holiday_dates.textContent = "H";})
        isHoliday = true;
    }
}

    // Memorial Day
    else if (month == 5 && weekOfMonth == 4){
        console.log("Memorial Day");
        let day_found = "Monday";
        let new_string = "#"+ day_found + "";
        const holiday_dates = document.querySelectorAll(new_string);
        holiday_dates.forEach(holiday_dates => {
        holiday_dates.textContent = "H";})
        isHoliday = true; 
}

    // 4th of July / Independence Day 
    else if (month == 7 && weekOfMonth == 1) {
        console.log("Independence Day");
        isHoliday = true;
}
		
	// Labor day, month = september, dayMapId = monday, rando = week of month
    else if (month == 9 && weekOfMonth == 1) {
        console.log("Labor Day");
        let day_found = "Monday";
        let new_string = "#"+ day_found + "";
        const holiday_dates = document.querySelectorAll(new_string);
        holiday_dates.forEach(holiday_dates => {
        holiday_dates.textContent = "H";})
        isHoliday = true;
}
    // Thanksgiving
    else if (month == 11 && weekOfMonth == 4) {
    	console.log("Happy Thanksgiving");
        let day_found = "Thursday";
        let new_string = "#"+ day_found + "";
        const holiday_dates = document.querySelectorAll(new_string);
        holiday_dates.forEach(holiday_dates => {
        holiday_dates.textContent = "H";})
        isHoliday = true;
		}
    
    // Christmas (Good)
   else if (month == 12) {
        console.log("Christmas");
        isHoliday = true; 
   }

console.log("Checking if the week contains a holiday: "+isHoliday);

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