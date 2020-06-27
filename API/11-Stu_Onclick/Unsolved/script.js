var increment = document.getElementById("increment");
var decrement = document.getElementById("decrement");
var countEl = document.getElementById("count");

var count = 0;

function setCountValue() {
  countEl.textContent = count;
}

var num = (count.textContent = 0);

increment.addEventListener("click", function () {
  count++;
  setCountValue();
});

decrement.addEventListener("click", function () {
  if (count > 0) {
    count--;
    setCountValue();
  }
});
