//------------------------------------------Function used to find week associated with date passed into the function----------------------------------------->
function getCurrentWeekNumber(datePassedIn){
    let x = 1; 
    let Jan1st = new Date(date.getFullYear(),0,x);
    let starto = Jan1st.getDay();
    let foundDay = false; 


    let testo = Jan1st.getMonth(); 
    let testo0 = datePassedIn.getMonth(); 
    let testo1 = Jan1st.getDate();
    let testo2 = datePassedIn.getDate(); 

    while(foundDay == false){
        if(testo == testo0 && testo1 == testo2){
            foundDay = true; 
            break;
        }
        x++; 
        Jan1st = new Date(datePassedIn.getFullYear(),0,x);
        testo = Jan1st.getMonth();
        testo1 = Jan1st.getDate(); 
    }

    let weekNumber = 1; 
    let starto1 = 1; 
    //console.log(starto);
    //console.log("Number of days found:", x);

    while(starto1 <= x){
        if(starto == 7){
            weekNumber++;
            starto = 0;  
        }

        starto++; 
        starto1++; 
    }

    //console.log("Week of year:",weekNumber); 
    return weekNumber;
}
//Variable associated with current date
const date = new Date(); 
let isHoliday = false; 

//Variable associated with current week in the year, ex Jun 17 is the 25th week in the year
currentWeekInYear = getCurrentWeekNumber(date);
//console.log(date);
console.log("Week number in year: ",currentWeekInYear);
console.log("Current Date:",date);


//--------------MDW (Found on last Monday of May)------------->
let endOfMay = new Date(date.getFullYear(), 4, 31);
let counta = 31; 
console.log("Last day in May: ", endOfMay);
let dayNameMay = endOfMay.getDay(); 
console.log("Cmon for all the marbles: ", dayNameMay);

while(dayNameMay != 1){
    if(dayNameMay == 0){ 
        dayNameMay = 6;
        counta--; 
    }
    counta--;
    dayNameMay--;
}
console.log("Memorial day falls on:", counta);
MDW = new Date(date.getFullYear(), 4, counta);
console.log(MDW);
weekMdwWasFound = getCurrentWeekNumber(MDW);


//-------4th of July / Independence Day----------------->
const fourthOfJulyDay = new Date(date.getFullYear(), 6,4);
//console.log(fourthOfJulyDay);
weekJuly4thWasFound = getCurrentWeekNumber(fourthOfJulyDay);


//Labor Day (Found on first Monday of September)---------->
let startOfSeptember = new Date(date.getFullYear(), 8, 1);
let SeptemberNameDay = startOfSeptember.getDay();
console.log(startOfSeptember);
console.log(SeptemberNameDay);
let septemberCounter = 1; 

while(SeptemberNameDay != 1){
    if(SeptemberNameDay==7){
        SeptemberNameDay = 0;
    }
    septemberCounter++;
    SeptemberNameDay++; 
}
console.log("Labor day was found on September", septemberCounter);
LaborDay = new Date(date.getFullYear(), 8, septemberCounter);
console.log(LaborDay);
weekLaborDayWasFound = getCurrentWeekNumber(LaborDay);




//-------Thanksgiving----------------------------------->
let ThursdaysSeen = 0;
let NovDay = 1;
let startOfNov = new Date(date.getFullYear(),10,1);
let NovemberDay = startOfNov.getDay();  
//console.log("Nov: ",startOfNov,"\nDay",NovemberDay);

while(ThursdaysSeen < 4){
    if(NovemberDay == 7){
        NovemberDay = 0; 
    }
    if(NovemberDay == 4){
        ThursdaysSeen++;
    }
        NovemberDay++;
        NovDay++; 
}
//console.log("Day Thanksgiving falls on: ",NovDay);
let Thanksgiving = new Date(date.getFullYear(), 10, NovDay);
let weekThanksgivingWasFound = getCurrentWeekNumber(Thanksgiving);
//console.log(weekThanksgivingWasFound);


//-------Christmas-----------------------------------> 
const Christmas = new Date(date.getFullYear(),11,25);
//console.log("Christmas",Christmas);
weekChristmasWasFound = getCurrentWeekNumber(Christmas);
//console.log("Week numba:"+weekChristmasWasFound);


//End of year New Years Check
let endOfDecember = new Date(date.getFullYear(), 11, 31);
let endOfDecemberDay = endOfDecember.getDay();
let endOfDecemberDayCopy = endOfDecemberDay; 

//console.log(endOfDecemberDay);
let DecemberCounter = 31; 

while(endOfDecemberDay != 0){
    DecemberCounter--; 
    endOfDecemberDay--;
}

//console.log(DecemberCounter);
let LastSundayInYear = new Date(date.getFullYear(), 11, DecemberCounter);
let LastWeekInYear = getCurrentWeekNumber(LastSundayInYear);
//console.log(LastWeekInYear);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

//Creating variables for date logic 
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
console.log("Starting day: "+startDay+" "+ dayMap.get(startDay));

const endOfMonth = new Date(year, month, 0);
console.log("End day: ", endOfMonth);

var endDay = endOfMonth.getDay(); 
let counter = 0;

let first_day = 1; 
let weekOfMonth = 1; 

//while loop used to find week in the current month
while(first_day < month_day){
    startDay = startDay + 1; 
    first_day = first_day + 1; 
    if(startDay==7){
        weekOfMonth = weekOfMonth + 1; 
        startDay = 0;
    }
}
console.log("Week of month: "+weekOfMonth);
console.log("Month: "+month+"\nDay of the month: "+month_day+"\nYear: "+year);
console.log("Current date:",dayMap.get(dayMapId), full_date);
document.getElementById("displayed_date").textContent= "Date: "+dayMap.get(dayMapId) + " "+full_date;






//------------------------------------------Holiday Check----------------------------------------------------------------------------------------------------------------------------------------->
//This checks if the current date is a holiday
//If it is a holiday, is Holiday will be True, otherwise, it is False 
//New Years Eve
if (currentWeekInYear == 1) {
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
    document.getElementById("com3").textContent="New Years!";
    isHoliday = true;
}

    // Memorial Day (Mdw)
    else if (currentWeekInYear == weekMdwWasFound){
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
            //document.getElementById("com2").textContent="No trash on Monday";
        }

        let MDW_Date = 31 - counter;
        let MDW_Week = 1; 
        let first_day_of_may = 1; 
        let firstDayMay = startOfMonth.getDay();
        //console.log("What im looking at: ", MDW_Date, firstDayMay);

        while(first_day_of_may < MDW_Date){
            if(firstDayMay == 7){
                MDW_Week++;
                firstDayMay = 0; 
            }
            firstDayMay++; 
            first_day_of_may++; 
        }

        if(currentWeekInYear == weekMdwWasFound){
            let day_found = "Monday";
            let new_string = "#"+ day_found + "";
            const holiday_dates = document.querySelectorAll(new_string);
            holiday_dates.forEach(holiday_dates => {
            holiday_dates.textContent = "H";})
            
        }

        isHoliday = true; 
}

    // 4th of July / Independence Day 
    else if (currentWeekInYear == weekJuly4thWasFound) {
        console.log("Independence Day");
        //document.getElementById("com3").textContent="Happy 4th of July!";

        let startofJuly = new Date(year,6,1)
        let startOfJulyDay = startofJuly.getDay();
        let weekFound = 1; 

        //Full date associated with July 4th
        //testo is the variable associated with July 4th's DayID 
        let fourth = new Date(year, 6,4);
        let testo = fourth.getDay();

        //console.log("Full date of first day in July",startofJuly);
        //console.log("Starting day of July", startOfJulyDay);
        //console.log("Fourth", fourth);
        //console.log("Testo",testo);

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

        //console.log("Independence Day was found in week: ", weekFound);
        if(currentWeekInYear == weekJuly4thWasFound){
            let day_found = dayMap.get(testo);
            console.log(day_found);
            let new_string = "#"+ day_found + "";
            const holiday_dates = document.querySelectorAll(new_string);
            holiday_dates.forEach(holiday_dates => {
            holiday_dates.textContent = "H";})
            document.getElementById("com3").textContent="Independence Day!";
        }

        //document.getElementById("com2").textContent="No trash on "+dayMap.get(testo);
        isHoliday = true;
}
		
	// Labor day
    else if (currentWeekInYear == weekLaborDayWasFound) {
        console.log("Labor Day");
        //document.getElementById("com3").textContent="Happy Labor Day!";
        //document.getElementById("com2").textContent="No trash on Monday";

        let startOfSept = startOfMonth.getDay(); 
        let weekFoundSeptember = 1; 
        //console.log(startOfSept);

        while(startOfSept != 1){
            if(startOfSept == 7){
                weekFoundSeptember++;
                startOfSept = 0;
            }
            startOfSept++; 
        }

        if(currentWeekInYear == weekLaborDayWasFound){
            let day_found = "Monday";
            let new_string = "#"+ day_found + "";
            const holiday_dates = document.querySelectorAll(new_string);
            holiday_dates.forEach(holiday_dates => {
            holiday_dates.textContent = "H";})
            document.getElementById("com3").textContent="Labor Day!";
        }

        isHoliday = true;
}
    // Thanksgiving
    else if (currentWeekInYear == weekThanksgivingWasFound) {
    	console.log("Happy Thanksgiving");
        //document.getElementById("com3").textContent="Happy Thanksgiving!";


        let fourth = new Date(year, 10,25);
        console.log(fourth);

        //let ThursdaysSeen = 0; 
        let WeekFoundInNov = 1; 
        //let startOfNov = startOfMonth.getDay(); 
        console.log("Cmon: ",startOfNov);

        while(ThursdaysSeen < 4){
            if(startOfNov == 7){
                WeekFoundInNov++; 
                startOfNov = 0; 
            }
            if(startOfNov == 4){
                ThursdaysSeen++;
            }
            startOfNov++;
        }


        if(currentWeekInYear == weekThanksgivingWasFound){
            let day_found = "Thursday";
            let new_string = "#"+ day_found + "";
            const holiday_dates = document.querySelectorAll(new_string);
            holiday_dates.forEach(holiday_dates => {
            holiday_dates.textContent = "H";})
            document.getElementById("com3").textContent="Thanksgiving!";
        }

        //let testo = date.getDay(fourth);
        //document.getElementById("com2").textContent="No trash on "+dayMap.get(testo);
        isHoliday = true;
		}
    
    // Christmas 
   else if (currentWeekInYear == weekChristmasWasFound) {
        console.log("Christmas");
        //document.getElementById("com3").textContent="Merry Christmas!";


        //variables associated with full date of christmas that year
        //and testo is equal to the name day christmas falls on 
        let fourth = new Date(year, 11,25);
        let testo = fourth.getDay();


        //variables needed to find the week
        //christmas falls on 
        let dayNumba = startOfMonth.getDay(); 
        let first = 1; 
        let christmas = 25;
        let weekFoundDecember = 1; 

        
        while(first < christmas){
            if(dayNumba == 7){
                weekFoundDecember++;
                dayNumba = 0; 
            }
            dayNumba++;
            first++; 
        }


        console.log("Christmas falls on a:", dayMap.get(testo));
        console.log("Chrismas was found in week: ",weekFoundDecember);
        isHoliday = true; 

        //mark up the table with an H
        if(currentWeekInYear == weekChristmasWasFound){
            let day_found = dayMap.get(testo);
            let new_string = "#"+ day_found + "";
            const holiday_dates = document.querySelectorAll(new_string);
            holiday_dates.forEach(holiday_dates => {
            holiday_dates.textContent = "H";})
            document.getElementById("com3").textContent="Christmas!";
        }
   }
   else if(25 < DecemberCounter && currentWeekInYear == LastWeekInYear){ 
            let day_found = dayMap.get(endOfDecemberDayCopy+1);
            let new_string = "#"+ day_found + "";
            const holiday_dates = document.querySelectorAll(new_string);
            holiday_dates.forEach(holiday_dates => {
            holiday_dates.textContent = "H";})
            document.getElementById("com3").textContent="New Years Eve!";
   }

console.log("Checking if this Week has a holiday: "+isHoliday);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------>

//Variables associated elements within the rows in the Trash Table
let garbageTable = document.getElementsByClassName("Garbage");
let paperTable = document.getElementsByClassName("Paper")
let metalTable = document.getElementsByClassName("Metal")


//---------------------------------------------------------Code snipped associated with submit button------------------------------------------------------------------->

//function associated with form on index.html
document.getElementById('test_server').addEventListener('submit', async (a) => {
    a.preventDefault();
    const street_address = document.getElementById('address').value;
    //console.log(street_address);
    //console.log("Request should be sent now");


    fetch('http://localhost:5000/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ key: street_address })
    })
    .then(response => response.json())
    .then(data => {

        if(data == "error"){
            console.log("Error occured")
        }

        else{
        console.log('Successful',data);
        let testo = data;
        console.log("Ward number recieved from back end: ", testo);

        //Paper and Metal Check
        if (currentWeekInYear%2==0){ // if-statement checks for an even or odd week. 2024 calendar says odd weeks are metal/plastic
            if(paperTable[3].innerHTML != "H"){
                paperTable[3].innerHTML = "X";
            }
        }
        else{
           if(metalTable[3].innerHTML != "H"){ //odd weeks are paper even weeks are metals/plastic next week (1/1/2024) should be week 1 and should X on metal
                metalTable[3].innerHTML = "X";
            } 
        }

        //Garbage Check w
        if(data < 4){
            //let garbageTable = document.getElementsByClassName("Garbage")
            for (i = 0; i < garbageTable.length; i++){
                if (garbageTable[i].innerHTML == "H"){
                    continue //skip if holiday is already marked with isHolday
                }
                else{
                    garbageTable[i].innerHTML = "-";
                }
            }
            if (garbageTable[1].innerHTML != "H"){ // if marked with '-' meaning if not marked with H write X otherwise leave alone.
                garbageTable[1].innerHTML = "X";
            }
            if (garbageTable[4].innerHTML != "H"){ // if marked with '-' meaning if not marked with H write X otherwise leave alone.
                garbageTable[4].innerHTML = "X";
            }
        }
        else if(data > 3){// checks if ward is 4, 5, or 6 then marks table days for trash Tuesday & Friday
            //let garbageTable = document.getElementsByClassName("Garbage")
            for (i = 0; i < garbageTable.length; i++){
                if(garbageTable[i].innerHTML == "H"){
                    continue
                }
                else{
                    garbageTable[i].innerHTML = "-";
                }
            }


            if(garbageTable[2].innerHTML != "H"){
                garbageTable[2].innerHTML = "X";
            }

            if(garbageTable[5].innerHTML != "H"){
                garbageTable[5].innerHTML = "X";
            }

        }
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

})


//---------------------------------------------------------Code snipped associated with reset button------------------------------------------------------------------->
document.getElementById("test_server").addEventListener('reset', async(b) =>{
    b.preventDefault();
    for (i = 0; i < garbageTable.length; i++){
        if(garbageTable[i].innerHTML == "H"){
            continue
        }
        else{
            garbageTable[i].innerHTML = "-";
            paperTable[i].innerHTML = "-";
            metalTable[i].innerHTML = "-";
        }
        }
    let consto = document.getElementById("address").value = "";
    console.log(consto); 
})
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------->