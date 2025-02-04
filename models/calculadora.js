function somar(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    return "Error";
  }
  return n1 + n2;
}

function subtrair(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    return "Error";
  }
  return n1 - n2;
}

function dividir(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    return "Error";
  } else if (n2 == 0) {
    return "Error";
  }
  return n1 / n2;
}

function multiplicar(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    return "Error";
  }
  return n1 * n2;
}

exports.somar = somar;
exports.subtrair = subtrair;
exports.dividir = dividir;
exports.multiplicar = multiplicar;
