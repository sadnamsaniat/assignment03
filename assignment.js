// link here


// Solution of Problem-01
function kilometerToMeter(kilometer){
    var meter=kilometer*1000;
    return meter
}

var kilometer=3.5;
var meter=kilometerToMeter(kilometer);
console.log(meter);

// Solution of Problem-02
function budgetCalculator(watch, mobile, laptop){
    var watchCost= watch*50;
    var mobileCost= mobile*100;
    var laptopCost= laptop*500;

    var totalCost= watchCost+mobileCost+laptopCost;

    return totalCost;
}

var watch=2;
var mobile=3;
var laptop=1;
var budget=budgetCalculator(watch, mobile, laptop);
console.log(budget);


// Solution of Problem-03
function hotelCost(days){
    totalCost=0;
    if(days<=10){
        totalCost=days*100;
    }
    else if(days<=20){
        var firstCost=10*100;
        var remaining=days-10;
        var secondCost=remaining*80;
        totalCost=firstCost+secondCost;
    }
    else{
        var firstCost=10*100;
        var secondCost=10*80;
        var remaining=days-20;
        var thirdCost=remaining*50;
        totalCost=firstCost+secondCost+thirdCost;
    }
    return totalCost;
}

var days=22;
var totalCost=hotelCost(days);
console.log(totalCost);


// Solution of Problem-04
function megaFriend(names) {
    var largestWord=0;

    for (var i = 0; i < names.length; i++) {
        if (names[i].length > largestWord) { 
            largestWord = names[i].length;
            var largestName=names[i];
        }
    }
    return largestName;
}

var names=["Ana", "Ratul", "Zara", "Sadnam"]
var largestName=megaFriend(names);
console.log(largestName);