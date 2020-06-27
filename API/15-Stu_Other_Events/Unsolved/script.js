var eventType = document.querySelector("#event-type");
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");
var x = document.getElementById("x");
var y = document.getElementById("y");
var key = document.getElementBkeyId("key");
var code = document.getElementById("code");
var status = document.getElementById("status");

eventType.addEventListener("change", function toggleDisplay(event) {
  var value = event.target.value;
  if (value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  } else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
});

x.addEventListener();
y.addEventListener();
key.addEventListener("keypress", function () {});
code.addEventListener();
status.addEventListener();

var key = event.key;
element.textContent += event.key;
