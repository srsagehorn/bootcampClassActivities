var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var imageBox = document.querySelector("img");
var anchor = document.querySelector("a");
var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203",
];
var picNum = 0;

function setImg() {
  imageBox.setAttribute("src", images[picNum]);
  //   imageBox.createAttribute("href", images[picNum]);
  anchor.setAttribute("href", images[picNum]);
  anchor.setAttribute("target", "_balnk");
}
next.addEventListener("click", function () {
  picNum++;
  if (picNum == 4) {
    picNum = 0;
  }
  setImg();
});

prev.addEventListener("click", function () {
  picNum--;
  if (picNum == -1) {
    picNum = 3;
  }
  setImg();
});

setImg();
