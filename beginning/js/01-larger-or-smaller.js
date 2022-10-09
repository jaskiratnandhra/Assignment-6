var x = parseInt(window.prompt(" Enter first number: "));
var y = parseInt(window.prompt(" Enter second number: "));

if (x > y){
    window.document.write(" The bigger number is " +x)
}
else if(y > x){
    window.document.write(" The bigger number is " +y)
}
else{
    window.document.write("Both number are equal")
}