const date = new Date(); 

//Dictionary
let dayDictionary = new Map();
dayDictionary.set(0, "Sunday");
dayDictionary.set(1, "Monday");
dayDictionary.set(2, "Tuesday");
dayDictionary.set(3, "Wednesday");
dayDictionary.set(4, "Thursday");
dayDictionary.set(5, "Friday");
dayDictionary.set(6, "Saturday")

console.log(dayDictionary);

//day of the week 0-6 (Ex. Monday is 1)
const number_day = date.getDay();

//Actual day of the month (Ex. the 12th)
let month_day = date.getDate();

//Month number (Ex. March is 3)
let month = date.getMonth()+1; 

//Year number (Ex. 2025)
const year = date.getFullYear();

//Combining all the date variables to create a Full date string (Ex. 4/12/2025)
const full_date = (String(month)+ "/" + String(month_day)+ "/" + String(year));

console.log(number_day);

//This will be printed in the console on JavaScript
console.log(month)
console.log(month_day)
console.log(year);
 
console.log("Current date:", full_date);
document.getElementById("displayed_date").textContent= "Current Date: "+ full_date;

//Associated with changing table elements to "H" when it is a Holiday
const holiday_dates = document.querySelectorAll('#Monday');
holiday_dates.forEach(holiday_dates => {
    holiday_dates.textContent = "H";
    console.log("This should appear 3 times");
})

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


    //document.getElementById("com2").textContent="Address Entered: "+street_address; 
    //document.getElementById("cmon").textContent= "Current Date: "+ full_date;
    
 //   if (month == 1 && month_day == 1) {
 //       console.log("New Years Eve");
  //      console.log(number_day);
 //       document.getElementById("com3").textContent="It is New Years Eve. No Trash for today.";
//		}

    // Memorial Day(Test This)
    //else if (month == 5 && number_day == 2 && week_of_month == 4) {
        //	Console.log("Memorial Day");
    //	}

    // 4th of July / Independence Day (Good)
//    else if (month == 7 && month_day == 4) {
  //      document.getElementById("com3").textContent="It is 4th of July. No Trash for today.";
		
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
 //   else if (month == 12 && month_day == 25) {
//	    console.log("Christmas");
//