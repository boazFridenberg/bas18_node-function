function getPizzaFromServerAsync (){
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let n = Math.floor(Math.random() * 10)
            if(n % 2 == 0){
                let pizza = 
                {
                    diameter: Math.floor(Math.random() * 40) + 10,
                    price: Math.floor(Math.random() * 60) + 20,
                    numOfToppings: Math.floor(Math.random() * 4)
                }
                resolve(pizza)
            }
            else{
                reject("error : " + n + " is not even")
            }
        }, 1000);
    })
    return p
}
getPizzaFromServerAsync()
    .then((data) => { console.log(data) })
    .catch((err) => { console.log(err) })