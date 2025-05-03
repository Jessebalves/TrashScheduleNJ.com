console.log("This was printed using JavaScript");
//window.alert("This is a warning message!");
//window.alert("This is a second warning message to test");

//document.getElementById("my_h1").textContent = "This is a header defined in JavaScript"; 
document.getElementById("my_p").textContent = "This is a paragraph defined in JavaScript";

let street_address; 

document.getElementById("mySubmit").onclick = function(){
    street_address = document.getElementById("myText").value;
    console.log(street_address)
}

let x = 10;
console.log(x);

let age = 23;

if(age == 23){
    console.log("This works");
}
console.log("I am " + age + " years old");

console.log(typeof age);

let online = true;
console.log("Is Jesse online?" + online);

document.getElementById("my_p").textContent = age;


//Comments in javascript are just like comments in java!