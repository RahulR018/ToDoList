function check(a, b, callback) {
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    if (user == 'admin' && pass== 12345) {
        callback();
    } else {
        alert('Access Denied');
        return false;
    }

}
function redirect() {
    return true;
}
// var input = document.getElementById('username');
// var password = document.getElementById('password');
// var button = document.getElementById('button');

// button.addEventListener('click', check(input, password, redirect));

// function check(name, pass, callback) {
//     if (name.value == "admin" && pass.value == 12345) {
//         callback();
//     } else {
//         alert('Access Denied');
//     }
// }
// function redirect() {
//     window.location.assign('Main.html');
// }
