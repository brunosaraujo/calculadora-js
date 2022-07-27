describe("Suite de testes de divisão", function() {
  var Calculadora = require('../../src/js/calculadora');

  it ('deve retornar 6 para 12 e 2', function() {
    expect(Calculadora.dividir(12, 2)).toEqual(6);
  });

  it ('deve retornar 3 para 9 e 3 no formato texto', function() {
    expect(Calculadora.dividir('9', '3')).toEqual(3);
  });

  it ('deve retornar 1.5 para 4.5 e 3', function() {
    expect(Calculadora.dividir(4.5, 3)).toEqual(1.5);
    expect(Calculadora.dividir('4.5', '3')).toEqual(1.5);
  });

  it ('deve retornar "Erro" ao dividir por zero', function() {
    expect(Calculadora.dividir(10, 0)).toEqual('Erro');
    expect(Calculadora.dividir(10, '0')).toEqual('Erro');
    expect(Calculadora.dividir(0, 20)).toEqual('Erro');
    expect(Calculadora.dividir('0', 10)).toEqual('Erro');
  });

  it ('deve retornar 0 quando valor 1 não for numérico', function() {
    expect(Calculadora.dividir(undefined, 10)).toEqual(0);
  });

  it ('deve retornar 0 quando valor 2 não for numérico', function() {
    expect(Calculadora.dividir(10, undefined)).toEqual(0);
  });
})