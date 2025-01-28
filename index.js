let headings = document.getElementsByClassName("heading");
console.dir (headings);
console.log(headings);

let div = document.querySelectorAll("div");
console.log(div);

let boxex = document.querySelectorAll(".box");

let idx=1;
for(box of boxex){
    box.innerText = `this is box ${idx}`
    idx++;
}


let para = document.querySelector(".para");
console.log(para);
console.log(para.getAttribute("class"));
console.log(para.setAttribute("class" , "paragraph"));
console.log(para.getAttribute("class"));


let boxi = document.querySelector(".new-btn"); 
boxi.style.backgroundColor = "green";


let createButton = document.createElement("button");
createButton.innerText = "click me";

boxi.append(createButton);



let newHeading = document.createElement("h1");
newHeading.innerHTML=  "<i>This is the New Heading</i>";

document.querySelector("body").prepend(newHeading);

let para1 =  document.querySelector("p");
para1.remove();


let button1 = document.createElement("button");
button1.innerText = "click me";
button1.style.backgroundColor = "red";
button1.style.color = "white";

// document.body.prepend(button1);
document.querySelector("body").prepend(button1);

