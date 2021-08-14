//create the distance object
var distances = {
    London_Paris: 286,
    London_Madrid: 1069,
    London_Berlin: 682,
    London_Amsterdam: 333,
    Berlin_Paris: 655,
    Berlin_Madrid: 1442,
    Berlin_Amsterdam: 407,
    Paris_Madrid: 791,
    Paris_Amsterdam: 316,
    Amsterdam_Madrid: 1099
};

//create the calcDistance  function
var calcDistance = function(city1, city2){
    return distances[city1 + "_" + city2] || distances[city2 + "_" + city1];
};

//create the cities array and the shuffle function
var cities = ["Paris", "Madrid", "Berlin", "Amsterdam"];

var shuffle = function(myArray){
    var result = [];
    while(myArray.length > 0){
        var randomIndex = Math.floor(myArray.length * Math.random());
        result.push(myArray[randomIndex]);
        myArray.splice(randomIndex, 1);
    }

    return result;
};

//create the generateTrip() function
var generateTrip = function(){

    var trip = shuffle(cities);

    trip.unshift("London");

    trip.push("London");

    console.log(trip);

    var result = "";

    var totalMiles = 0;

    trip.forEach(function(element, index){
        if(index !== trip.length - 1){
            var distance = calcDistance(element, trip[index + 1]);

            result += element + " -> " + distance + " miles -> ";

            totalMiles += distance;
        }else{
            result += element;
        }
    });

    console.log(result);
    console.log("Total distance to drive: " + totalMiles + " miles.");


};
generateTrip();
