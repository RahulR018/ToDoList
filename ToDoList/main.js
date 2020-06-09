function grab() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            response.forEach(e => {
                var box=document.createElement('input');
                document.body.appendChild(box);
                document.getElementsByTagName("input")[0].setAttribute("type", "checkbox");
                var boxlabel= document.createElement('label');
                document.body.appendChild(boxlabel);
                document.getElementsByTagName('label')[0].setAttribute('value',response[0][3])
            });
        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}