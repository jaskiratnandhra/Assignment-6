var x;
do{
    x = Math.round(Math.random());
    (x ==0) ? window.document.write("Heads " + "<br>") : window.document.write("Tails" + "<br>");
}while (x == 0)