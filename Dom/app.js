document.write("<h1>Java Sceipt Content</h1> ")

//par (i)
var get = document.getElementById("main-content");
//par (ii)
console.log(get.children);

//par (iii)
var rander = document.getElementsByClassName("render")
for (i = 0; i < rander.length; i++) {

    document.write(rander[i].innerHTML + "<br>");

}

//par (iv)


var firstName = document.getElementById("first-name");
firstName.value = "Uzma";

//par (v)

var lastName = document.getElementById("last-name");
lastName.value = "Uzzi"

var email = document.getElementById("email");
email.value = "uuzzi0216@gmail.com";


//Question no:1

var main = document.getElementById("form-content");
document.write("Node Type of form content " + main.nodeType);


var last = document.childNodes[1].childNodes[1].childNodes[0].childNodes[1];
console.log(last)
document.write("<br> node type of last name " + last);

var lastChange = document.childNodes[1].childNodes[1].childNodes[0].childNodes[2].childNodes[1].innerHTML = "Last Name: Uzzi ";
document.write("<br>"+lastChange)


var frst = document.getElementById("main-content")
var frstChild = frst.firstChild; 
var lstChild = frst.lastChild
console.log(frstChild, lstChild);


var lastid = document.getElementById("lastName");
var frstsb = lastid.nextSibling;
var prsb = lastid.previousSibling;
console.log(frstsb,prsb);


var email = document.getElementById("email");
var prnt = email.parentNode;
var typ = prnt.nodeType;
console.log(prnt,typ);