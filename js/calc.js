// Função atualizar display
function atualizarDisplay(btn) {
  const display = document.getElementById("display"); // carreguei o input display em uma variavel local
  if (display.value.length === 9) return; //verificacao para impedir que sejam digitados mais de 9 numeros
  if (display.value === "0") display.value = btn.value;
  //caso o display esteja zerado, o primeiro numero vai subst. o zero
  else display.value += btn.value; //valor do botao adicionado ao value do display
}

// Função clear display
function limparDisplay() {
  document.getElementById("display").value = "0";
}

// Motor da calc

// operações
let operador = "";
let valor1 = 0;
function atualizarOperacao(btn) {
  const display = document.getElementById("display");
  operador = btn.value;
  valor1 = parseInt(display.value);
  display.value = 0;
}

// Igualdade
function calcularOperacao() {
  const display = document.getElementById("display");
  const valor2 = parseInt(display.value);
  valor1 = eval(valor1 + operador + valor2);
  display.value = valor1;
  operador = "";
}

// Teclado on
function manipularTeclado() {
  if (/[0-9]/.test(event.key)) atualizarDisplay({ value: event.key });
}
