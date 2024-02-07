'use strict'
const display = document.getElementById('display')
const numeros = document.querySelectorAll('[id*=tecla]')
const operadores = document.querySelectorAll('[id*=operador]')
const inserirNumero
const selecionarOperador

numeros.forEach(numero => addEventListener('click', inserirNumero))
operadores.forEach(operador => addEventListener('click', selecionarOperador))
