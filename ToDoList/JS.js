var enter = new Promise(function (resolve, reject) {
    var input = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (input.value === 'admin' && password.value === 12345) {
        resolve('Login Authorised');
    } else {
        reject('Invalid Credentials');
    }
});


function validate() {
    enter
        .then(function (s) {
            alert(s);
            document.getElementById('form').setAttribute('onsubmit', true);
        })
        .catch(function (e) {
            alert(e);
            document.getElementById('form').setAttribute('onsubmit', false);
        }
        );
}