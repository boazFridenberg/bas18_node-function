Q7()

function Q1() {
function allNumbers(a) {
for (let i = 0; i < a; i++) {
    process.stdout.write(i + ", ");
}
}
allNumbers(8);
console.log("\n")
allNumbers(1);
}

function Q2() {
    function between(a, b) {
        for (let i = a; i <= b; i++) {
            process.stdout.write(i + ", ");
        }
    }
    between(1, 8);
}

function Q3() {
    function sum(a, b) {
        console.log(a + b)
    }
    sum(5, 3);
}

function Q4() {
    function difference(a, b) {
        if(a > b)return a - b;
            else return b - a;
    }
    console.log(difference(5, 3));
}

function Q5() {
    function sumOfDigits(n) {
        let sum = 0;
        while(n!=0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        return sum;
    }
    console.log(sumOfDigits(78));
}

function Q6() {
    function sumOfDigits(n) {
        if(!(n > 99 && n < 1000)) {
            console.log("-1")
        } else {
        let sum = 0;
        while(n!=0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        return sum;
    }
    }
    console.log(sumOfDigits(451));
}

function Q7() {
    function numOfDigits(n){
        let count = 0;
        while(n!=0) {
            count++;
            n = Math.floor(n / 10);
        }
        return count;
    }
    console.log(numOfDigits(78623));
}


