var aTags = document.querySelectorAll("a");
var imgs = document.querySelectorAll("img");
var h4 = document.querySelectorAll("h4");
var imgPaths = [
  "images/image_1.jpg",
  "images/image_2.jpg",
  "images/image_3.jpg",
];
var aHrefs = ["google.com", "wikipedia.com", "amazon.com"];

for (i = 0; i < aTags.length; i++) {
  aTags[i].setAttribute("href", aHrefs[i]);
}

for (i = 0; i < imgs.length; i++) {
  imgs[i].setAttribute("src", imgPaths[i]);
}

for (i = 0; i < h4.length; i++) {
  h4[i].setAttribute("style", "color : red");
  h4[i].innerText = "picture";
}
