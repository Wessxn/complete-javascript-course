/*
'use strict';

let hasDriversLicense = false; 
const passTest = true;

if(passTest) hasDrivesrLicense = true;
if(hasDriversLicense) console.log("yay bitch");

const interface = 'Audio';
const private = 321;
*/
/*
'use strict';

const calcAverage = (a,b,c) => (a + b + c) / 3;
const dolphinsAverage = calcAverage(85, 54, 41); 
const koalasAverage = calcAverage(23, 34, 27); 
console.log(dolphinsAverage, koalasAverage); 

const checkWinner = function(avgDolhins, avgKoalas){
if(avgDolhins >= 2 * avgKoalas){
    console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})!`);
} else if(avgKoalas >= 2 * avgDolhins){
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})!`);
} else{
    console.log("No one won")
}
}

checkWinner(dolphinsAverage, koalasAverage); 
*/

/* const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/
/*
const lewis = {
    firstName: 'Lewis', 
    lastName: 'Wesson',
    age: 2022 - 2001,
    friends: ["Joey", "Malcolm", "Kai", "Kim"]
};

console.log(lewis);

console.log(lewis.lastName);
console.log(lewis['lastName'])

const nameKey = 'Name';
console.log(lewis['first' + nameKey])
console.log(lewis['last' + nameKey])

const question = prompt('what do you want to know about Lewis?')

if(lewis[question]){
    console.log(lewis[question]);
} else {
    console.log(`Idk nigga`);
}

lewis.location = "Yokohama/New York City";
lewis['job'] = 'Vampire Slayer' 
console.log(lewis)

console.log(`${lewis.firstName} has ${lewis.friends.length} friends and her best friend is ${lewis.friends[0]}`);
*/

/*
const lewis = {
    firstName: 'Lewis', 
    lastName: 'Wesson',
    birthYear: 2001,
    friends: ["Joey", "Malcolm", "Kai", "Kim"],
    hasHuntingLicense: true, 
    location: "Yokohama",
    
    calcAge: function(){
        this.age = 2020 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
     return `${this.firstName} is a ${this.calcAge()} year old from ${this.location} who ${this.hasHuntingLicense ? 'does have a' : 'doesn\'t have a'} hunting license`
    }
}; 

console.log(lewis.getSummary());
*/

/*
const mark ={
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function(){
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI;
    }
};

const john ={
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function(){
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
};

console.log(mark.calcBMI(), john.calcBMI())

if(mark.calcBMI() > john.calcBMI()){
console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s ${john.BMI}`)
} else {
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s ${mark.BMI}`)
}
*/

const lewis = [
    'Lewis', 
    'Wesson',
    2022 - 2001,
    ["Joey", "Malcolm", "Kai", "Kim"]
];

/*
for (let index = lewis.length - 1; index >= 0; index--) {
    console.log(index, lewis[index]);
}

for(let exercise = 1; exercise < 4; exercise++){
    console.log(`Execrise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(` Exercise ${exercise}, Lifting weights rep ${rep}`);
    }
}*/

let dice = Math.trunc(Math.random() * 6) + 1; 

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1; 
}


