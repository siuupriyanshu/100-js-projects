const billAmt = document.getElementById("bill");
const tipAmt = document.getElementById("tip");
const total = document.getElementById("total");
const btnEl = document.getElementById("calculate");

function calculateTotal() {
  const billValue = parseFloat(billAmt.value);
  const tipValue = parseFloat(tipAmt.value);
  const totalValue = billValue * (1 + tipValue / 100);
  total.innerText = totalValue.toFixed(2);
}
