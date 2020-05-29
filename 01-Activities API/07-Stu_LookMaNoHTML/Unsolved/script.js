var h1 = document.createElement("h1");
var h2 = document.createElement("h2");
var img = document.createElement("img");
var p = document.createElement("p");
var ul = document.createElement("ul");
var listTitle = document.createElement("h3");
var li0 = document.createElement("li");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");

h1.textContent = "Im an h1";
h2.textContent = "Im an h2";
p.textContent = "I am a caption, this is a placeholder image";
listTitle.textContent = "My favorite colors";
li0.textContent = "Black";
li1.textContent = "White";
li2.textContent = "Navy";
li3.textContent = "Teal";

h1.setAttribute("style", "margin:auto; textAllign:center; width:50%");
h2.setAttribute("style", "margin:auto; textAllign:center; width:50%");
img.setAttribute("src", "https://via.placeholder.com/150");
img.setAttribute("style", "margin:auto; width:50%");
p.setAttribute("style", "margin:auto; textAllign:center; width:50%");

document.body.appendChild(h1);
document.body.appendChild(h2);
document.body.appendChild(img);
document.body.appendChild(p);
document.body.appendChild(listTitle);
document.body.appendChild(li0);
document.body.appendChild(li1);
document.body.appendChild(li2);
document.body.appendChild(li3);
