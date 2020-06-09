// var input = document.getElementById('username').value;
// var password = document.getElementById('password').value;
// var button = document.getElementById('button');

// button.addEventListener('click',check(input,password,redirect));

// function check(name, pass, callback) {
//     if (name== 'admin' && pass.value == 12345) {
//         callback();
//     } else {
//         alert('Access Denied');
//     }
// }
// function redirect() {
//     window.location.assign('../Main.html')
// }
var input = document.getElementById('username');
var password = document.getElementById('password');
var button = document.getElementById('button');

button.addEventListener('click', check(input, password, redirect));

function check(name, pass, callback) {
    if (name.value == "admin" && pass.value == 12345) {
        callback();
    } else {
        alert('Access Denied');
    }
}
function redirect() {
    window.location.assign('Main.html');
}
