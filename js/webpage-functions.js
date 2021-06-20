//variables
var greeting = "Hello ", name = "";
var num1, num2, total, reply;

//custom user greeting
alert(greeting);
name = prompt("what is your name?");
alert(greeting + name + "!" + " Welcome!");

//prompt the user for numbers to calculate
do{
    num1 = prompt("Please enter a number", "0");
    num2 = prompt("Please enter a second number", "0");

    //calulating the sum of both numbers
    var number1 = parseInt(num1);
    var number2 = parseInt(num2);

    function calTotal(number1, number2) {
        var totals = number1 + number2;
        return totals;
    }

    total = calTotal(number1, number2);
    alert("The sum of your two number is: " + total);

    if (total >= 10) {
        alert("That is a big number!");
    } else if (total < 10) {
        alert("That is a small number");
    } else {
        alert("Sorry, something went wrong. Please enter valid numbers.");
    }
    reply = prompt("would you like to add numbers again? (yes/no)")
} while (reply == "yes");

//thank you message
alert("Thank you for using the program and stopping by!")