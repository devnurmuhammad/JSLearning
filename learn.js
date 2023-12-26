"use strict"

const person = {
    firstname: "Nurmuhammad",
    lastname: 'Davletov',
    isMerried: false,
    weight: 70.9
};

console.log(person);

const check = confirm("Are you older than 18?")
console.log(check);

const place = prompt("Where are you now?", "");
console.log(place);

const age = +prompt("How old are you?", "");
console.log(typeof age);

const colours = [];
colours[0] = prompt("What is your favourite color?N1");
colours[1] = prompt("What is your favourite color?N2");
colours[2] = prompt("What is your favourite color?N3");

console.log(colours);
console.log(typeof colours);

const myname = 'Nurmuhammad';
const myjob = "Software Engineer";

console.log(`He's name ${myname}, he's a ${myjob}`);

function edu(subject, callback){
    console.log(`I am learning ${subject}`);
    callback();
}

function done(){
    console.log("Wow, great!");
}

edu("JavaScript", done);

const developer = {
    phone: "redmi",
    laptop:{
        lname: "acer",
        processor: "intel",
        ram: 8,
    },
    earphones: "Airpods 2.2"
}

const {lname, processor, ram} = developer.laptop;
console.log(lname, processor, ram);

for (let i in developer){
    if (typeof developer[i] === "object"){
        for (let j in developer[i]){
            console.log(`key: ${j} value: ${developer[i][j]}`);
        }
    } else{
        console.log(`key: ${i} value: ${developer[i]}`);
    }
}



console.log(Object.keys(developer.laptop));

delete developer.laptop.processor;
console.log(developer);

const arr = [1, 2, 3, 4, 5, 6];
arr.forEach(function(item, index){
    console.log(item, "\t", index);
});