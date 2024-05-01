let age = 15;
if(age > 18){
    document.getElementById("demo").innerHTML="Welcome to Domn";

}else{
    document.getElementById("demo").innerHTML= "You are not welcome";
}

document.querySelector("p").innerHTML="Welcome to Dom";

document.querySelectorAll("p")[0].innerHTML="Welcome to Dom 1";
document.querySelectorAll("p")[1].innerHTML= "Welcome to Dom 2";

document.querySelector(".result").innerHTML="2 +2 =4";
 



function sum (){
    let num1 = document.querySelector("#num1").value;

    let num2 = document.querySelector("#num2").value;

    let total = +num1 + +num2;

    document.querySelector("#result").innerHTML = total;
}

function minus (){
    let num1 = document.querySelector("#num1").value;

    let num2 = document.querySelector("#num2").value;

    let total = +num1 - +num2;

    document.querySelector("#result").innerHTML = total;
}

function division (){
    let num1 = document.querySelector("#num1").value;

    let num2 = document.querySelector("#num2").value;

    let total = +num1 / +num2;

    document.querySelector("#result").innerHTML = total;
}

function product (){
    let num1 = document.querySelector("#num1").value;

    let num2 = document.querySelector("#num2").value;

    let total = +num1 * +num2;

    document.querySelector("#result").innerHTML = total;
}