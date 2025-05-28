
function f1(){
    let a = 0;
    setInterval(() => {
        a++;
        console.log(a)
    }, 1000);
   
}
    
function f2(){
let arr = [1,2,3];
let random = Math.floor(Math.random() * 10);
try {
    if (random >= arr.length) {
        throw("Index out of bounds:" + random);
    }
    console.log(arr[random]);
}
catch (e) {
    console.log(e);
}
}

function f3(){

}

