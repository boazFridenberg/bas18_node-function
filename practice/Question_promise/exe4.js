function generateWorkingDayAfterDelayAsync (){
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let day = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
            let random = Math.floor(Math.random() * day.length)
            if(random == 5 || random == 6){
                reject("error : " + day + " is not a working day")
            }
            else{
                resolve("success : " + day + " is a working day")
            }
        }, 1000);
    })
}
generateWorkingDayAfterDelayAsync()
    .then((data) => { console.log(data) })
    .catch((err) => { console.log(err) })