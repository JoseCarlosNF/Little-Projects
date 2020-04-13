function bin2dec(binary) {
  return parseInt(binary, 2).toString(10);
}

function dec2bin(decimal_integer) {
  return decimal_integer.toString(2);
}

function convert() {
  let input_mode = document.getElementById("input").childNodes[0].data;
  let input_number = Number(document.getElementById("input-1").value);

  if (input_mode == "Decimal") {
    document.getElementById("input-2").value = dec2bin(input_number);
  }
  if (input_mode == "Binary") {
    document.getElementById("input-2").value = bin2dec(input_number);
  }
}

function changeMode() {
  let mode = document.getElementById("input").childNodes[0].data;

  let aux = document.getElementById("input-1").value;
  document.getElementById("input-1").value = document.getElementById(
    "input-2"
  ).value;
  document.getElementById("input-2").value = aux;

  // Sáida em Binario
  if (mode == "Binary") {
    document.getElementById("input").childNodes[0].data = "Decimal";
    document.getElementById("output").childNodes[0].data = "Binary";
  }

  // Sáida em Decimal
  if (mode == "Decimal") {
    document.getElementById("input").childNodes[0].data = "Binary";
    document.getElementById("output").childNodes[0].data = "Decimal";
  }
}
