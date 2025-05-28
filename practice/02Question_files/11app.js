//Q1
// console.log("start");
// function currentTime() {
//     let date = new Date();
//     let time = date.toLocaleTimeString();
//     console.log("Current time is: " + time);
// }

// currentTime();


// console.log("end");
//Q2
// console.log("start");
// setTimeout(() => {
//     console.log("13:42");
// }, 3000);
// console.log("end");
//Q3
// console.log("start");
// setTimeout(() => {
//     let random = Math.floor(Math.random() * 100);
//     console.log(random);
// }, 3000);
// setTimeout(() => {
//     let random = Math.floor(Math.random() * 100);
//     console.log(random);
// }, 5000);
// setTimeout(() => {
//     let random = Math.floor(Math.random() * 100);
//     console.log(random);
// }, 7000);
// console.log("end");
//Q4
// const div = document.createElement("div");
// const inputtag = document.createElement("input");
// setInterval(() => {
//     let random = Math.floor(Math.random() * inputtag.value);

//     div.innerHTML = random;
// }
// , 1000);
// document.body.appendChild(div);
// document.body.appendChild(inputtag);
//Q5
// setInterval(() => {
//   let random = Math.floor(Math.random() * 100);
//     console.log(random);
// }
// , 1000);

//Q7
function getRandomAfterDelay(callback){
setTimeout(() => {
    let x = callback();
    console.log(x);
}
, 5000);
}
function getRandom(){
    return Math.floor(Math.random() * 100);
}
getRandomAfterDelay(getRandom);
    