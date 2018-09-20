window.onload = function()
{
    //faster version is script 1
    var num = document.getElementById('num')
    var run = document.getElementById('run')
    var list = document.getElementById('list')

    run.onclick = function () {
        var N = parseInt(num.value);
        var start =(new Date()).getTime();
        for( var i = 1; i< N ; i++) {
            if ((i % 3 == 0) && (i % 5 != 0)) {
                list.innerHTML += "<li>fizz</li>"
            }
            else if ((i % 5 == 0) && (i % 3 != 0)) {
                list.innerHTML += "<li>buzz</li>"
            }
            else if ((i % 3 == 0) && (i % 5 == 0)) {
                list.innerHTML += "<li>fizzbizz </li>"
            }
            else {
                list.innerHTML += "<li>" + i + "</li>"
            }


        }
        console.log((new Date()).getTime()-start)
    }
}
;

