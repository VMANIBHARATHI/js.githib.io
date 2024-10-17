//  selecting element

//  based on ID

let idElement = document.getElementById("title");
console.log(idElement);

//  based on Class 

let classElements = document.getElementsByClassName('class');
console.log(classElements);

// based on tag name

let divElements = document.getElementsByTagName('div');
console.log(divElements);

// QuerySelector  first class name element  
let QueryElement = document.querySelector('.query1');
console.log(QueryElement); 

//Queryselector all elements 
let AllElements = document.querySelectorAll('.allQuery');
console.log(AllElements);

//  MANUPLATING the Elements...

const manipulatingBasedOnId = document.getElementById("change");
manipulatingBasedOnId.innerHTML = "<strong>Adding a new tag element</strong>";
manipulatingBasedOnId.style.color = "red";
manipulatingBasedOnId.contentEditable = "true";

//Creating an Element(Append)

let creatingNewElement = document.createElement("p");
creatingNewElement.textContent = 'added content in to the <p> tag';
manipulatingBasedOnId.appendChild(creatingNewElement);

// Create new parent element
let creatingparentElement = document.createElement("create");
creatingparentElement.id = "parent-id";
creatingparentElement.className = "parent-class";


//Removing an Element
let removingElement = document.getElementsByTagName("h3")[0];
removingElement.parentNode.removeChild(removingElement);



//  Attributes

//Get Attribute Value

let getClassAttr = document.getElementById("attribute")
getClassAttr.getAttribute("class"); 

let getId = document.getElementById("attribute")
getId.getAttribute("id"); 

//Set Attribute

let setClass = document.getElementById("attribute");
setClass.setAttribute("class","clsAttr");
setClass.setAttribute("title","class attribute set using external js");


let setCls = document.getElementsByClassName('class2')[0];
setCls.setAttribute("id","sci");
setCls.setAttribute("tabindex","2");

//Remove Attribute

setCls.removeAttribute("tabindex");
setClass.removeAttribute("title");

//  Events  

// Select the button and paragraph elements

let clickButton = document.getElementById('clickButton');
let clickMessage = document.getElementById('clickMessage');

// Add an event listener to handle the click event

clickButton.addEventListener('click', function() {
    clickMessage.textContent = 'Button was clicked!';
});
