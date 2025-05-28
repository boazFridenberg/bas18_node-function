console.log("hello world");
for (let i = 0; i < 2;i++){
    console.log(i)
}
let cars = ["mazda", "subaru", "bmw"]
cars.push["mercedes"]
if (cars.includes("bmw")){
    console.log("yes")
}
else console.log("no")
console.log(cars)
let car = cars.pop()
console.log("car is: " + car)
let i = cars.indexOf("subaru")
console.log(i)
let num = Math.random() // 0<num<1
num *= 100 // 0<num<100
num = Math.floor(num)
let number = Math.floor(Math.random()*100) //בקצרה
console.log(num)
console.log(number)

function fullName(firstName, lastName) {
    console.log(firstName + "  ☀️  " + lastName)
}
fullName("david", "hamelech")

function averageThreeNumbers(n1, n2, n3) {
    let sum = n1 + n2 + n3
    let avg = sum / 3
    console.log(avg)
}
let numbers = []   
for (let i = 0; i < 10; i++){
    let num1 = Math.floor(Math.random()*10) 
	let num2 = Math.floor(Math.random()*10) 
	let num3 = Math.floor(Math.random()*10)
 	averageThreeNumbers(num1, num2, num3)
}
function maxFromThreeNunbers(n1, n2, n3) {
    let maxNum = Math.max(n1, n2, n3)
    console.log(maxNum)
}
for (let i = 0; i < 10; i++){
    let num1 = Math.floor(Math.random()*10) 
	let num2 = Math.floor(Math.random()*10) 
	let num3 = Math.floor(Math.random()*10)
 	maxFromThreeNunbers(num1, num2, num3)
}

//option 1
function count1(a){
    return a * (a + 1) / 2
}
//option 2
const count2 = (a) => a * (a + 1) / 2
//option 3
const count3 = function(a){
    return a * (a + 1) / 2
}

function compute(callback){
    let sol = callback(8, 7)
    console.log(sol)
}

compute(count1)
compute((a, b)=> a + b)

