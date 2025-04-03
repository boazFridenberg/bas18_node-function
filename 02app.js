//Q1
let num1 = Math.random()
let num2 = Math.random()
let sol = num1 + num2
console.log(num1 + "+" + num2 + "=" + sol)
//Q2
let number1 = Math.floor(Math.random()*50)
let number2 = Math.floor(Math.random()*50)
let sol2 = number1 + number2
console.log(number1 + "+" + number2 + "=" + sol2)
//Q3
let number3 = Math.floor(Math.random()*50)
for (let i = 0; i < number3; i++) {
    console.log(i)
}
//Q4
let number4 = 0
let n = Math.floor(Math.random()*50)
for (let i = 0; i < n; i++){
    number4 += Math.floor(Math.random()*100)
}
console.log(number4)
//Q5
let numbers = []   
let n1 = Math.floor(Math.random()*10)
for (let i = 0; i < n1; i++){
    numbers[i] = Math.floor(Math.random()*100)
}
console.log(numbers)
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 == 0){
        console.log(numbers[i])
    }
}

