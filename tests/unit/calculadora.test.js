const calculadora = require("../../models/calculadora.js");

test("Espero que 2+ banana seja error", () => {
  const resultado = calculadora.somar(2, "banana");
  expect(resultado).toBe("Error");
});

test("Espero que 105+50 seja 155", () => {
  const resultado = calculadora.somar(105, 50);
  expect(resultado).toBe(155);
});

test("Espero que 10 / 0 seja Gere Erro", () => {
  const reDividir = calculadora.dividir(10, 0);
  expect(reDividir).toBe("Error");
});
test("Espero que 10 / 10 seja 1", () => {
  const reDividir = calculadora.dividir(10, 10);
  expect(reDividir).toBe(1);
});

test("espero que 80 - 5 seja 75", () => {
  const reSubtrair = calculadora.subtrair(80, 5);
  expect(reSubtrair).toBe(75);
});

//test("espero que 1 seja 1",()=>{
// expect(1).toBe(1);
//})

//exemplos que pode ser utilizado
//test("teste de teste",()=>{
// console.log("Teste 1")
//})
//---------------------------------------------//
//test("teste de teste",function(){
// console.log("Esta chamando")
//})
//--------------------------------------------//
//test("teste de teste",callbackFunction)
//function callbackFunction(){
//console.log('chamou');
//}
