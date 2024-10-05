function previewImage(event) {
    const imagePreviewDiv = document.getElementById('imagePreview');
    imagePreviewDiv.innerHTML = ""; 

    const file = event.target.files[0]; 

    if (file) {
        const reader = new FileReader(); 
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result; 
            img.style.maxWidth = '100px'; 
            img.style.maxHeight = '100px'; 
            imagePreviewDiv.appendChild(img); 
            
            const label = document.querySelector('label[for="file"]');
            label.style.display = 'none'; 
        }
        reader.readAsDataURL(file); 
    }
}

// function validateEmail(email) {
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailPattern.test(email);
// }



function validatePassword() {
    const passwordField = document.getElementsByClassName('password')[0];
    const password = passwordField.value;
    const passwordPattern = /^(?=.*\d)(?=.*[A-Z][А-Я])[A-Za-zА-Яа-я\d]{8,}$/;

    const passwordRep = document.getElementById('pass2');
    const passwordRepeat = passwordRep.value;

    const error = document.getElementById("error-message");

    if (!passwordPattern.test(password)) {
        error.innerHTML = "Пароль должен содержать минимум 8 символов, включая 1 заглавную букву и 1 цифру.";
        return false;
    }

    if (password !== passwordRepeat) {
        error.innerHTML = "Пароли не совпадают";
        return false;
    }
    error.innerHTML = "";
    validateEmail(email);
    alert('Данные отправлены');
    return true;
}




function clearForm() {
    document.getElementById('loginForm').reset();
    document.getElementById('error-message').innerHTML = "";
}



// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end();
// })
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// })

//Запросы
// AXIOS

// function getAxios() {
//     const url = 'file:///C:/BackEnd/Dz_proj/NodeJS/nodejs/login.html';

//     axios.get(url)
//         .then(response => {
//             console.log('GET:', response.data);
//         })
//         .catch(error => {
//             console.error('Error (GET):', error);
//         });
// }

// getAxios(); 

// function postAxios() {
//     const url = 'file:///C:/BackEnd/Dz_proj/NodeJS/nodejs/login.html';

//     axios.post(url)
//         .then(response => {
//             console.log('POST:', response.data);
//         })
//         .catch(error => {
//             console.error('Error (POST):', error);
//         });
// }

// postAxios(); 


// //JS
// function getData() {
//     const url = 'file:///C:/BackEnd/Dz_proj/NodeJS/nodejs/login.html'; 
//     fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log('GET request data:', data);
//         })
//         .catch(error => {
//             console.error('There has been a problem with your fetch operation:', error);
//         });
// }

// getData(); 

// function postData() {
//     const url = 'file:///C:/BackEnd/Dz_proj/NodeJS/nodejs/login.html'; 
//     const data = {
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     };

//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log('POST request data:', data);
//         })
//         .catch(error => {
//             console.error('Error during POST:', error);
//         });
// }

// postData();