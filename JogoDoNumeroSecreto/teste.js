function olaMundo() {
  console.log("Olá, mundo!");
}

function nome() {
  nome = prompt("Digite seu nome");
  console.log(nome);
}
function dobro() {
  let num = parseInt(prompt("Digite um número"));
  let dobro = num * 2;
  alert("O dobro de " + num + " é " + dobro + "!");
}

function maior() {
  let num1 = parseInt(prompt("Digite o primeiro número"));
  let num2 = parseInt(prompt("Digite o segundo número"));
  if (num1 > num2) {
    alert("O maior número é " + num1 + "!");
  } else {
    alert("O maior número é " + num2 + "!");
  }
}

function quadrado() {
  let num = prompt("Digite um número");
  let quadrado = num * num;
  alert("O quadrado de " + num + " é " + quadrado + "!");
}

function calculadoraIMC() {
  let peso = parseInt(prompt("Digite seu peso!"));
  let altura = parseInt(prompt("Digite sua altura!"));
  let imc = peso / (altura * altura);
  alert(`Seu IMC é de ${imc}`);
}

function mostrarTabuada() {
  let num = parseInt(prompt("Digite um número"));
  let tabuada = "";
  for (let i = 0; i <= 10; i++) {
    tabuada += `${num} x ${i} = ${num * i}\n`;
  }
  alert(tabuada);
}
