function extract(callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            // console.log(response[0]);
            response.forEach(e => {
                for (const key in e) {
                    if (e.hasOwnProperty(key)) {
                        const ele = e[key];
                        var form = document.createElement('form');
                        form.setAttribute('id', 'a');
                        document.getElementById('rowid').appendChild(form);
                        var input = document.createElement('input');
                        input.setAttribute('type', 'checkbox');
                        // input.setAttribute('id', 'chk');
                        input.classList.add('form-check-input');
                        document.getElementById('a').appendChild(input);
                        var label = document.createElement('label');
                        label.classList.add('form-check-label');
                        document.getElementById('a').appendChild(label);
                        var b = document.createElement('BR');
                        document.getElementById('a').appendChild(b);
                        if (key == 'title') {
                            label.innerText = ele;
                            if (e['completed'] == true) {
                                input.setAttribute('checked', true);
                                input.setAttribute('disabled', true);
                            }
                        }
                        else {
                            document.getElementById('a').removeChild(input);
                            document.getElementById('a').removeChild(b);
                        };
                    }
                }
            });

        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
    callback();
}
function listen() {
    promise.then(function (s) { alert('boom'); }).catch(function (e) { console.log('Less'); })
}

var promise = new Promise(function (resolve, reject) {
    var count = 0;
    var obj = document.querySelectorAll('input[type=checkbox]');
    for (i in obj) {
        if (obj[i].checked == false) {
            obj[i].addEventListener('change', e => {
                count = count + 1;
                console.log(count);
            });
        }
    }
    if (count == 5) {
        resolve('Congrats');
    } else {
        reject('Meh');
    }
}); 