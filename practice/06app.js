//callback


//Q1
function sumList(numbers){
    let sum = 0
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i]
    }
    return sum   
    }


//Q2
function avgList(numbers){
    let sum = 0
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i]
    }
    return sum / numbers.length
}


//Q3
function handleList(numbers, callback){
    callback(numbers)
}
handleList([1, 5, 6], avgList)
handleList([1, 5, 6], sumList)

//Q4
function printOnlyEven(numbers){
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 === 0){
        console.log(numbers[i])
        }
    }
}
//Q5    
handleList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], printOnlyEven)

//Q6
function returnOnlyEven(numbers){
    let filternumbers = []
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 == 0){
            filternumbers.push(numbers[i])
        }
    }
    return filternumbers
}

//Q7
function overrideList(numbers, callback){
    let newNumbers = callback(numbers)
    return newNumbers
}
console.log(overrideList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], returnOnlyEven))

//Q8
function returnBiggerThan10(numbers){
    let filteredNumbers = []
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > 10){
            filteredNumbers.push(numbers[i])
        }
    }
    return filteredNumbers
}

//Q9

console.log(overrideList([5, 28, 4, 15], returnBiggerThan10))
