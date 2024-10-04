const check_button = document.getElementById('check');
// function check_pass(){
//     const password = document.getElementById('pass1');
//  const passwordRepeat = document.getElementById('pass2');
//  const form = document.getElementById('form'); 
//  const passwordPatern = /^(?=.*[A-Z])(?=.*\d)(A-Za-z\d){8,}$/
   
//  if (!passwordPatern.test(password))
//   {
//      var el= form.createElement("div");
//      el.innerHTML = "wrong password";
//    }
//  if(password!=passwordRepeat){
//     var el= form.createElement("div");
//      el.innerHTML = "wrong password";
//  }
// }
check_button.addEventListener("click", function() {
    alert("You clicked me");
 }​);​​​



//Login

//Post-запрос fetch
let user = {
    name: 'UserName',
    surname: 'UserSurname'
};

let loginForm = await fetch('/article/fetch/post/user', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
});

let result = await loginForm.json();
alert(result.message);


//Post-запрос Node.js
const https = require('https');
const data = JSON.stringify({
    todo: 'Login'
})
const options = {
    hostname: 'flaviocopes.com',
    port: 443,
    path: '/todos',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}
const req = https.request(options, (res) =>{
    console.log(`statusCode: ${res.statusCode}`)
    res.on('data', (d) => {
        process.stdout.write(d)
    })
})
req.on('error', (error) => {
    console.log(error)
})
req.write(data);
req.end()

//Get-запрос Node.js
const https = require('https')
const options2 = {
    hostname: 'flaviocopes.com',
    port: 443,
    path: '/todos',
    method: 'GET'
}
const req2 = https.request(options2, (res) =>{
    console.log(`statusCode: ${res.statusCode}`)
    res2.on('data', (d) =>{
        process.stdout.write(d)
    })
})
res2.on('error', (error) =>{
    console.error(error)
})
req.end()





