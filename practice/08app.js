//Q1
function printName(){
    console.log("boaz");
}
function f(callback){
    callback();
}
f(printName);

//Q2
function randomNum(){
    let x = Math.floor(Math.random() * 100) + 1;
    console.log(x);
}
function cool(callback) {
	callback();
}
cool(randomNum);

//Q3
function nice(callback) {
	callback(50);
}
function printNum(num) {
    console.log(num);
}
nice(printNum);

//Q4
function amazing(callback) {
	const num = callback(42, 128, 37, 81, 66);
	console.log("Num: " + num);
}
function f(a, b, c, d, e) {
    let arr = [a, b, c, d, e];
    let max = Math.max(...arr);
    return max;
}
amazing(f);

//Q5
/*function cool2(paintCallback) {
	paintCallback();
}*/

function colorBackground() {
    let color = ["red", "green", "yellow", "blue", "purple", "pink", "orange", "brown", "black", "white"];
    let randomColor = Math.floor(Math.random() * 10);
    document.body.style.backgroundColor = color[randomColor];
}
//cool2(colorBackground);

//Q6
/*function nice2(paintCallback) {
	paintCallback("Green");
}
function colorBack(color) {
    document.body.style.backgroundColor = color;
}
nice2(colorBack);*/

//Q7
/*
function amazing(paintCallback) {
	const paintedColor = paintCallback("Red", "Green", "Blue");
	document.write("Painted Color: " + paintedColor);
}
function colorBack(color1, color2, color3) {
    let colors = [color1, color2, color3];
    let randomColor = Math.floor(Math.random() * 3);
    document.body.style.backgroundColor = colors[randomColor];
    return colors[randomColor];
}
amazing(colorBack);*/

//Q8
let random = () => {
    let x = Math.floor(Math.random() * 100) + 1;
    console.log(x);
}
//setInterval(random, 1000);

//Q9
//setInterval(colorBackground, 1000);

//Q10
function randomArray() {
    let arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1);
    }
    console.log(arr);
}
setInterval(randomArray, 3000);

