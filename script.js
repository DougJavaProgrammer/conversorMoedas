var cotacaoDolar = 5.45;

function Converter() {
  var valorElemento = document.getElementById("valorUss");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmReal = valorEmDolarNumerico * cotacaoDolar;

  if (valor == "") {
    alert("Digite um valor");
  } else {
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "Valor convertido R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
}

function ConverterBr() {
  var valorElementoBr = document.getElementById("valorBr");
  var valorBr = valorElementoBr.value;
  var valorEmRealNumerico = parseFloat(valorBr);
  var valorEmDolar = valorEmRealNumerico * (1 / cotacaoDolar);
  valorEmDolar = valorEmDolar.toFixed(2);
  if (valorBr == "") {
    alert("Digite um valor");
  } else {
    var elementoValorConvertidoBr = document.getElementById(
      "valorConvertidoBr"
    );
    var valorConvertidoBr = "Valor convertido US$ " + valorEmDolar;
    elementoValorConvertidoBr.innerHTML = valorConvertidoBr;
  }
}