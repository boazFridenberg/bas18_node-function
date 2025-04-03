function handleList(numbers, callback){
	callback(numbers);
}
function overrideList(numbers, callback){
    let newNumbers = callback(numbers)
    return newNumbers
}

//Q1
function printSquares(numbers){
    for(let i = 0; i < numbers.length; i++){
        console.log(numbers[i] * numbers[i]);
    }
}

handleList([1, 2, 3, 4], printSquares);

//Q2
function returnOnlyOdd(numbers){
    let oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2!== 0){
            oddNumbers.push(numbers[i]);
        }
    }
    return oddNumbers;
}
console.log(overrideList([3, 4, 7, 8, 9], returnOnlyOdd))

//Q3

