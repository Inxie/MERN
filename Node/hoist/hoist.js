// Number 1
console.log(hello);                                   
var hello = 'world';                                 
// var hello;
// console.log(hello);
// hello = 'world';
// Result will be undefined, because hello hasn't yet been set to "world" before the console.log statement


// Number 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle;
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// needle = 'haystack';
// Result will be "magnet" because the console.log is inside the function and can't rise


// Number 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.="support method from-rainbow">log(brendan);
// var brendan;
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
//     }
// console.="support method from-rainbow">log(brendan);
// brendan = 'super cool';
// Result will be an error, because there's something wrong with the syntax in "console.="


// Number 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food;
// food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// Result will be undefined, then "half-chicken"
// Prediction wrong! Result was "chicken", then "half-chicken" because chicken WAS defined


// Number 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// var mean;
// mean();
// console.log(food);
// mean = function() {
//         food = "chicken";
//         console.log(food);
//         var food = "fish";
//         console.log(food);
//     }
// console.log(food);
// Result will be undefined, then undefined, then "chicken", then "fish", then "fish"
// Prediction wrong! There was an error at mean() because mean had not been defined.


// Number 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre;
// console.log(genre);
// genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// Result will be undefined, then "rock", then "r&b", then "disco"


// Number 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//         dojo = "seattle";
//         console.log(dojo);
//         var dojo = "burbank";
//         console.log(dojo);
//     }
// console.log(dojo);
// Result will be an error, because dojo is initially not set as a variable
// Prediction wrong! Did not need to have a var statement first, so just logged "san jose", then "seattle", then "burbank", then "san jose"


// Number 8 (Bonus)
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// Unsure of the result, but nothing should change in the order because only var gets hoisted
// Resulted in an error in the code, because dojo was not redefined in the else statement (refers back to scope)