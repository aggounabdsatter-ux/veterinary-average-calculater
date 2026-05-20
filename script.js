function calculate() {

  let exam = parseFloat(document.getElementById("chimie_exam").value);
  let td = parseFloat(document.getElementById("chimie_td").value);
  let tp = parseFloat(document.getElementById("chimie_tp").value);

  let average = (exam * 0.6) + (td * 0.2) + (tp * 0.2);

  document.getElementById("result").innerText =
    "Chimie Average = " + average.toFixed(2);

}
