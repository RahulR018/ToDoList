function check(a, b, callback) {
    var name = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    if (name == 'admin' && pass == 12345) {
        callback();
    } else {
        alert('Access Denied');
        return false;
    }
}
function redirect() {
    return true;
}