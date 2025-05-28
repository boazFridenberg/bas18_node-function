function getArrayFromServerAsync (size){
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let array = []
            let random = Math.floor(Math.random() * 10)
            if(random % 2 == 0){
                for(let i = 0; i < size; i++){
                array.push(Math.floor(Math.random() * 100))
                resolve(array)
            }
            }
            else{
                reject("error : " + random + " is not even")
            }
        }, 1000);
    })
    return p
}
getArrayFromServerAsync(10)
    .then((data) => { console.log(data) })
    .catch((err) => { console.log(err) })