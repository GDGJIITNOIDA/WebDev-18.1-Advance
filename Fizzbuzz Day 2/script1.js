window.onload = function()
{
    var num = document.getElementById('num')
    var run = document.getElementById('run')
    var list = document.getElementById('list')

    run.onclick = function () {
        var N = parseInt(num.value);
        var start =(new Date()).getTime();
        var li="";
        var c3=1;
        var c5=1;
        for( var i = 1; i<= N ; i++) {
            var k="<li>";
            if(c3 === 3) {

                k += "fizz"
                c3=0;
            }
            if (c5 === 5) {
                k += "buzz"
                c5=0;
            }
            if(k==="<li>") {
                k += i
            }
            k+="</li>"
            li+=k;
            c3++;
            c5++;

        }
        list.innerHTML = li;

        console.log((new Date()).getTime()-start)
    }
}
;

