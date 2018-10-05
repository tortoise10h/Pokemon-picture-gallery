// console.dir(document);
// console.log(document.getElementById("header-id"));
// let headerId = document.getElementById("student-name");
// console.log(headerId);
// headerId.textContent = "hello w";
// headerId.innerText = "goodbye";
// headerId.style.borderBottom = "3px solid #1abc9c";

//GET ELEMENT BY CLASSNAME

// let items = document.getElementsByClassName("card-body");
// items.textContent  = "red";
// for(var i = 0; i < items.length; i++){
//     items[i].style.background = "red";
// }

// let liTag = document.getElementsByTagName('li');
// console.log(liTag[1]);

//QUERYSELECTOR
// var temp = document.querySelector('.card-body');
// console.log(temp);
// var input = document.querySelector('input');
// input.value = "This is practice DOM";
// var submit = document.querySelector('input[type="submit"]');
// submit.value = "Send it!";
// var lastItem = document.querySelector('li:nth-child(2)');
// lastItem.style.background = "#1abc9c";

var odd = document.querySelectorAll('.list-group:nth-child(odd)');
var even = document.querySelectorAll('.list-group:nth-child(even)');

for(var i = 0; i <odd.length; i++){
    odd[i].style.background = "#f4f4f4";
}
for(var j = 0; j < even.length; j++){
    even[j].style.background = "blue";
    even[j].style.color = "red";
}