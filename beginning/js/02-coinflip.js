var x = Math.ceil((Math.random() * 100));
window.console.log(x);
var choice = window.prompt(" Please select  'Heads' / 'Tails' ");
var result;
(x < 50) ? 
result = true : 
result = false;
if(result && (choice == "Heads")) {
    window.document.write("You made the right choice...You WINNNNNN!");
}
else if(result && (choice == "Tails")) {
    window.document.write("Its okay try again later...You lost :(");
}
else if(!result && (choice == "Heads")) {
    window.document.write("Its okay try again later...You lost :(");
}
else if(!result && (choice == "Tails")) {
    window.document.write("You made the right choice...You WINNNNNN!");
}