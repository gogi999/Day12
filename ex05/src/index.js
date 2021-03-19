// Only change code below this line
var myPetsArray = [
    {
        anymalType: "Dog",
        name: [
            "Pujdo"
        ]
    },
    {
        anymalType: "Cat",
        name: [
            "Maca"
        ]
    },
    {
        anymalType: "Bird",
        name: [
            "Tweety"
        ]
    }
]

function myPetsFunction(pets) {
    return pets[1].name[0];
}    
// Only change code above this line

console.log(myPetsFunction(myPetsArray)); // Change this line
module.exports = myPetsFunction;
module.exports = myPetsArray;
