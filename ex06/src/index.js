function myNes() {
    var myStorage = {
        "car": {
            "inside": {
                "glove box": "maps",
                "passenger seat": "crumbs",
            },
            "outside": {
                "trunk": "jack"
            }
        }
    };
    // Only change code below this line
    myStorage.car.inside["gloveBoxContent"] = "maps";
    return myStorage.car.inside.gloveBoxContent;
    // Only change code above this line
}    

console.log(myNes());
module.exports = myNes;
