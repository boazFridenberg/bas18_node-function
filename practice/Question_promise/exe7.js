function generateStrongPasswordAsync (){
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
        let password = [];
            let check = [false, false, false];

        let chars = "abcdefghijklmnopqrtuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (let i = 0; i < 6; i++) {
            password.push(chars.charAt(Math.floor(Math.random() * chars.length)));
            if (password[i] >= 'a' && password[i] <= 'z') {
                check[0] = true;
            }   
            else if (password[i] >= 'A' && password[i] <= 'Z') {
                check[1] = true;
            }
            else if (password[i] >= '0' && password[i] <= '9') {
                check[2] = true;
            }
            }
        if (check[0] && check[1] && check[2]) {
            resolve(password.join(''));
        }
        else {
            reject("error : password is not strong: "+ password.join(''));
            }
        }, 1000);
    })
    return p
}
generateStrongPasswordAsync()
    .then((data) => { console.log(data) })
    .catch((err) => { console.log(err) })