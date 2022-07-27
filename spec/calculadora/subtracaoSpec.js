describe("Suite de testes de subtração", function() {
  var Calculadora = require('../../src/js/calculadora');

  it ('deve retornar 5 para 8 e 3', function() {
    expect(Calculadora.subtrair(8, 3)).toEqual(5);
  });

  it ('deve retornar 12 para 9 e -3 no formato texto', function() {
    expect(Calculadora.subtrair('9', '-3')).toEqual(12);
  });

  it ('deve retornar -3.5 para 1.5 e 5', function() {
    expect(Calculadora.subtrair(1.5, 5)).toEqual(-3.5);
    expect(Calculadora.subtrair('1.5', '5')).toEqual(-3.5);
  });

  it ('deve retornar 0 quando valor 1 não for numérico', function() {
    expect(Calculadora.subtrair(undefined, 10)).toEqual(0);
  });

  it ('deve retornar 0 quando valor 2 não for numérico', function() {
    expect(Calculadora.subtrair(10, undefined)).toEqual(0);
  });
})