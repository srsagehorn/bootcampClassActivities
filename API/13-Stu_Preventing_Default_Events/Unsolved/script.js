var cost = document.getElementById("cost");
var percent = document.getElementById("percent");
var submit = document.getElementById("submit");
var tipamt = document.getElementById("tip-amount");
var total = document.getElementById("new-total");

submit.addEventListener("click", function (event) {
  event.preventDefault();
  var price = parseInt(cost.value);
  var per = parseInt(percent.value);
  var tip = price * (per * 0.01);

  tipamt.textContent = tip.toFixed([2]);
  total.textContent = (tip + price).toFixed([2]);
});
