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
console.log("Beginning of Month:"+startOfMonth);

//This gets the DayID associated with the start of the month
var startDay = startOfMonth.getDay();
console.log("Starting day: "+startDay);

const endOfMonth = new Date(year, month, 0);
console.log(endOfMonth);

var endDay = endOfMonth.getDay(); 
let counter = 0;

let first_day = 1; 
let weekOfMonth = 1; 

while(first_day < month_day){
    startDay = startDay + 1; 
    first_day = first_day + 1; 
    if(startDay==7){
        weekOfMonth = weekOfMonth + 1; 
        startDay = 0;
    }
}

console.log("Week of month: "+weekOfMonth);

//This will be printed in the console on JavaScript
console.log("Month: "+month)
console.log("Day of the month: "+month_day)
console.log("Year: "+year);
 
console.log("Current date:",dayMap.get(dayMapId), full_date);
document.getElementById("displayed_date").textContent= "Date: "+dayMap.get(dayMapId) + " "+full_date;

//This checks if the current date is a holiday
//If it is a holiday, is Holiday will be True, otherwise, it is False 
//New Years Eve
if (month == 1 && weekOfMonth == 1) {
    console.log("New Years Eve");

    //Variable associated with the start of month day number, example, this month starts with 3
    //meaning this month starts on a wednesday, so this varibale is 3
    let first_day_of_jan = startOfMonth.getDay();

    //Look through daymap, and get the name day associated the number assigned to first_day_of_jan variable, ex. 3 = wednesday
    let day_found = dayMap.get(first_day_of_jan);

    //Marks the table with an H on the corresponding day of a holiday
    //For example, if there is a holiday on Thursday this week
    //Thursday column should be filled with H all week
    console.log("This is what im testing: ",day_found);
    let new_string = "#"+ day_found + "";
    const holiday_dates = document.querySelectorAll(new_string);
    holiday_dates.forEach(holiday_dates => {
    holiday_dates.textContent = "H";})
    isHoliday = true;
}

    // Memorial Day
    else if (month == 5){
        console.log("Memorial Day");
        //console.log(endDay);
        while(endDay!=1){
            if(endDay ==0){
                endDay = 7; 
            }
            endDay = endDay - 1;
            counter = counter + 1; 
            //console.log(endDay);
        }
        if(month_day == 31 - counter){
            document.getElementById("com3").textContent="Happy Memorial Day!";
            document.getElementById("com2").textContent="No trash on Monday";
        }
       /* let day_found = "Monday";
        let new_string = "#"+ day_found + "";
        const holiday_dates = document.querySelectorAll(new_string);
        holiday_dates.forEach(holiday_dates => {
        holiday_dates.textContent = "H";})*/
        isHoliday = true; 
}

    // 4th of July / Independence Day 
    else if (month == 7) {
        console.log("Independence Day");

        //document.getElementById("com3").textContent="Happy 4th of July!";

        let startofJuly = new Date(year,6,1)
        let startOfJulyDay = startofJuly.getDay();
        let weekFound = 1; 

        //Full date associated with July 4th
        //testo is the variable associated with July 4th's DayID 
        let fourth = new Date(year, 6,4);
        let testo = fourth.getDay();

        console.log("Full date of first day in July",startofJuly);
        console.log("Starting day of July", startOfJulyDay);
        console.log("Fourth", fourth);
        console.log("Testo",testo);

        //we can hardcode this, because its only possible
        //for July 4th to either be in the 1st or 2nd week
        while(startOfJulyDay != testo){
            //marks the start of a new week, 7 = Sunday
            if(startOfJulyDay == 7){
                weekFound++; 
                startOfJulyDay = 0; 
            }
            startOfJulyDay++; 
        }

        console.log("Independence Day was found in week: ", weekFound);
        if(weekOfMonth == weekFound){
            let day_found = dayMap.get(testo);
            console.log(day_found);
            let new_string = "#"+ day_found + "";
            const holiday_dates = document.querySelectorAll(new_string);
            holiday_dates.forEach(holiday_dates => {
            holiday_dates.textContent = "H";})
        }

        //document.getElementById("com2").textContent="No trash on "+dayMap.get(testo);
        isHoliday = true;
}
		
	// Labor day
    else if (month == 9 && dayMapId == 1 && weekOfMonth == 1) {
        console.log("Labor Day");
        document.getElementById("com3").textContent="Happy Labor Day!";
        document.getElementById("com2").textContent="No trash on Monday";
        /*let day_found = "Monday";
        let new_string = "#"+ day_found + "";
        const holiday_dates = document.querySelectorAll(new_string);
        holiday_dates.forEach(holiday_dates => {
        holiday_dates.textContent = "H";})*/
        isHoliday = true;
}
    // Thanksgiving
    else if (month == 11 && weekOfMonth == 4) {
    	console.log("Happy Thanksgiving");
        document.getElementById("com3").textContent="Happy Thanksgiving!";
        let fourth = new Date(year, 11,25);
        console.log(fourth);
        let testo = date.getDay(fourth);
        document.getElementById("com2").textContent="No trash on "+dayMap.get(testo);
        isHoliday = true;
		}
    
    // Christmas 
   else if (month == 12 && month_day == 25) {
        console.log("Christmas");
        document.getElementById("com3").textContent="Merry Christmas!";
        let fourth = new Date(year, 11,25);
        let testo = date.getDay(fourth);
        document.getElementById("com2").textContent="No trash on "+dayMap.get(testo);
        isHoliday = true; 
   }

console.log("Checking if this month has a holiday: "+isHoliday);

let testo = "";

//function associated with form on index.html
document.getElementById('test_server').addEventListener('submit', async (a) => {
    a.preventDefault();
    const street_address = document.getElementById('address').value;
    /*console.log(street_address);
    console.log("Request should be sent now");*/


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
        let testo = data;
        console.log(testo);
    })
    .catch(error => {
        console.error('Error:', error);
    });

})

