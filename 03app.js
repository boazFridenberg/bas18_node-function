Q7()

function Q1(){
    let numbers = []
    for (let i = 0; i < 10; i++){
        numbers[i] = Math.floor(Math.random()*10)
    }
    console.log(numbers)
    console.log(numbers[2])
    console.log(numbers.slice(1, 9).join(" "))
    let indexToRemove = Math.floor(Math.random() * 10);
    numbers.splice(indexToRemove, 1);
    console.log(numbers);
    for (let i =0; i < 10; i += 2){
        process.stdout.write(numbers[i] + ",")
    }
    console.log("\n")
    for (let i = 1; i < 9; i += 2){
        process.stdout.write(numbers[i] + ",")
    }
    console.log("\n")
    for (let i =0; i < 10; i++){
        if (numbers[i] % 2 == 0){
            process.stdout.write(numbers[i] + ",")
        }
    }
}   
function Q2(){
    let list = []
    let sum = 0
    list = ["apple", "banana", "melon", "avokado", "Blackberry"]
    console.log(list)
    for (let i = 0; i < list.length; i++){
        process.stdout.write(list[i].length + ",")
        sum += list[i].length
    }
    console.log("\n" + sum)
}
function Q3() {
    let list = []
    let sum = 0
    for (let i = 0; i < 10; i++){
        list[i] = Math.floor(Math.random()*100 -50)
        sum += list[i]
    }
    console.log(list)
    console.log(sum)
    console.log(sum / list.length)
}
function Q4() {
    let songs = []
    songs = ["love", "one", "amazing"]
    console.log(songs)
    songs.splice(1, 1)
    console.log(songs)
    songs.push("day", "beutiful")
    console.log(songs.slice(1, 3).join(" "))
}
function Q7(){
    let numbers = []
    for (let i = 0; i < 100; i++){
        numbers.push(Math.floor(Math.random()*100)) 
    }
    for (let i = 0; i < 100; i++){
        process.stdout.write(numbers[i] + "|")
    }
    console.log("\n")
    for (let i = 99; i >= 0; i--){
        process.stdout.write(numbers[i] + ",")
    }
    console.log("\n")
    let sum = 0
    for (let i = 0; i < 100; i++){
        sum += numbers[i]
    }
    console.log("\nSum: " + sum)
    console.log("\n")
    let average = sum / 100
    console.log("Average: " + average)
    console.log("\n")
    for (let i =0; i < 100; i++){
        if (numbers[i] % 2 == 0){
            process.stdout.write(numbers[i] + ",")
        }
    }
    console.log("\n")
    for (let i =0; i < 100; i++){
        if (numbers[i] % 2 != 0){
            process.stdout.write(numbers[i] + ",")
        }
    }
    console.log("\n")
    let count = 0
    for (let i =0; i < 100; i++){
        if (numbers[i] % 7 == 0){
            count++
        }
    }
    console.log("Count of numbers divisible by 7: " + count)
    console.log("\n")
    let max = numbers[0]
    for (let i = 1; i < 100; i++){
        if (numbers[i] > max){
            max = numbers[i]
        }
    }
    console.log("Max: " + max)
    console.log("\n")
    let min = numbers[0]
    for (let i = 1; i < 100; i++){
        if (numbers[i] < min){
            min = numbers[i]
        }
    }
    console.log("Min: " + min)
    console.log("\n")
    for (let i = 0; i < 100; i++){
        if (numbers[i] >= average){
            process.stdout.write(numbers[i] + ",")
        }
    }
    console.log("\n")
}
