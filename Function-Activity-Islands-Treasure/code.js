var box1 = {
    silver : 10,
    gold : 5,
    platinum: 5
};
var box2 = {
    silver : 5,
    gold : 7,
    platinum: 8
};
var box3 = {
    silver : 7,
    gold : 3,
    platinum: 10
};
var box4 = {
    silver : 6,
    gold : 6,
    platinum: 12
};
var box5 = {
    silver : 3,
    gold : 12,
    platinum: 5
};
//PriceKg

var priceKg = {
    silver :400,
    gold: 40000,
    platinum:25000
};

var calcBoxValue = function(box) {
    var result = box.silver * priceKg.silver + box.gold * priceKg.gold + box.platinum * priceKg.platinum;
    return result;
};

var calcTotal = function(f , boxes){
    var result = f(boxes[0]) + f(boxes[1]) + f(boxes[2]);
    return "Take home : $"+ result + ".";
};

