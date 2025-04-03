Q15()

function Q1() {
    const square = (a) => a * a
    console.log(square(7))
}

function Q2() {
    const add = (a, b) => a + b
    console.log(add(3, 5))
}

function Q3() {
    const isEven = (num) => num % 2 === 0
    console.log(isEven(10))
    console.log(isEven(7))
}

function Q4() {
    const average = (a, b, c) => (a + b + c) / 3
    console.log(average(3, 5, 7))
    console.log(average(1, 2, 3))
}

function Q5() {
    const toUpperCase = (str) => str.toUpperCase()
    console.log(toUpperCase("hello"))
}

function Q6() {
    const containsWord = (str, word) => str.includes(word)
    console.log(containsWord("Hello World", "World"))
    console.log(containsWord("Hello World", "Earth"))
}

function Q7() {
    const printToN = (n) => {
        for (let i = 1; i <= n; i++) {
            process.stdout.write(i + ", ")
        }
    }
    printToN(5)
}

function Q8() {
    const sumArray = (arr) => {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum
    }
    console.log(sumArray([5, 4, 3, 2, 1]))
}

function Q9() {
    const timesTen = (times) => times * 10
    console.log(timesTen(10))
}

function Q10() {
    const firstChar = (str) => str.charAt(0)
    console.log(firstChar("helloworld"))
}

function Q11() {
    const isGreater = (a, b) => a > b
    console.log(isGreater(5, 8))
    console.log(isGreater(8, 5))
}

function Q12() {
    const isPositive = (a) => a > 0
    console.log(isPositive(5))
    console.log(isPositive(-3))
}

function Q13() {
    const random100 = () => Math.floor(Math.random()*100)
    console.log(random100()) 
}

function Q14() {
    const reversName = (str1, str2) => str2 + " " + str1
    console.log(reversName("boaz", "fridenberg"))
}

function Q15() {
    const filterEvents = (arr) => {
        let newArr;
        for(let i = 0; i > arr.length; i++)
           if(arr[i] % 2 === 0)newArr = arr[i]
    }

    console.log(filterEvents([5, 4, 3, 2, 1]))

    console.log(filterEvents([1, 2, 3, 4, 5]))
    console.log(filterEvents([6, 7, 8, 9, 10]))
}
