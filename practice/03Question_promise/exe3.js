function generateCuteAnimalAfterDelayAsync(){
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let cuteAnimal = ["cat", "dog", "rabbit", "parrot", "scropion", "spider", "cockroach"]
            let number = Math.floor(Math.random() * cuteAnimal.length)
            if(number <= 3){
                resolve("success : " + cuteAnimal[number] + " is cute")
            }
            else{
                reject("error : " + cuteAnimal[number] + " is not cute")
            }
        }, 1000);
    })
}
generateCuteAnimalAfterDelayAsync()
    .then((data) => { console.log(data) })
    .catch((err) => { console.log(err) })
