//Q1
let delay = (callback, time) => setTimeout(callback, time);
let printName = () => console.log("boaz");
//delay(printName, 5000);

//Q2
function doubleNum(num, callback) {
    let double = num * 2;
    callback(double);
}
function printNum(num) {
    console.log(num);
}
doubleNum(5, printNum);

//Q3
function randomNum(callback) {
    for (let i = 0; i < 10; i++) {
        let x = Math.floor(Math.random() * 50) + 1;
        callback(x);
    }
}
function printEven(num) {
    if (num % 2 === 0) {
        console.log(num);
    }
}
//randomNum(printEven);

//Q4
function arrNames(callback) {
    let names = ["boaz", "yossi", "ani", "moshe", "avi"];
    callback(names);
}
function printNames(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].charAt(0) === "a") {
            console.log(arr[i]);
        }
    }
}
//arrNames(printNames);

//Q5
function delay(str, callback) {
    setTimeout(callback, str);
}