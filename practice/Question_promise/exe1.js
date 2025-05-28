function generate7BoomAfterDelayAsync(min, max){
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let number = min + Math.floor(Math.random() * (max - min))
            if (number % 7 == 0 || number % 10 == 7) {
                resolve("success : " + number + " is 7Boom")
            }
            else {
                reject("error : " + number + " is not 7Boom")
            }
        }, 1000);
    });
    return p;
}
generate7BoomAfterDelayAsync(10, 100)
    .then((data) => { console.log(data) })
    .catch((err) => { console.log(err) });



