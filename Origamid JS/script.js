//addEventListener('scroll', function(){console.log('fala aí')});
/*
function ola(){
    console.log('fala aí');
}
addEventListener('click', ola);
*/
//pode ter funcao anônima como argumento


// 'use strict';  mostra que é um erro isso de carro3 na linha 120, isso só funciona na 1 linha de código

function terceiraIdade(idade){
    if(typeof idade != 'number'){
        return 'Não é um número';
    }
    else if(idade>60){ 
        return  true       // 'É idoso';
    }
    else return false;
}
console.log(terceiraIdade(70)); // 70 é um ARGUMENTO
var idade = 2e3; // 2 e 000 = 2000
var soma = '10' + 10;  //concatena, 1010
var soma2 = +'10' + 10 // agora sim dá 20

var substr = "10" - '5' // substrai, 5, multiply too
console.log(isNaN(soma));
var frase = `hello world ${idade * 2}` // tem que ser com `` pra dar certo
console.log(frase);

// O + ou - atrás, torna ele número e positivo ou negativo
var numero = '23';
console.log(-numero);
console.log(+numero);
var boolean = true; 
console.log(-boolean + numero); // 1 ou -1 se for true, 0 se for false

if(true){
    console.log('é verdadeiro');
}

console.log(!!numero); // verifica se uma variável é true; se for undefined, NaN, false é false daí

// objects

var object = {
    nome: 'André',
    mudarNome() {
        return this.nome= "Mateus";
    },
    outraForma: function(){
        return this.nome = "Pedro";
    },
    eoutra(nome){
       return nome= "Tiago";
    }
}

console.log(object.outraForma());
console.log(object.mudarNome());

var menu = {
    width: 1000,
    height: 500,
    backgroundColor: '#84e'
}

menu.backgroundColor = '#000';
menu.color = 'blue';

console.log(menu.hasOwnProperty('width')); // se tem tal propriedade

// EXERCÍCIOS 

var meusDados = { 
    nome: 'Tiago', 
    sobrenome: 'de Souza', 
    idade: 18,
    email: 'tiagodesouza12310@gmail.com',

    mostrarNome() {
        console.log(this.nome + ' ' + this.sobrenome)
    }
}

meusDados.mostrarNome();
meusDados.nome = "Pedro";

let nome = "Mateusa";
console.log(nome.length)
console.log(nome.charAt(1));
console.log(nome.replaceAll("a",'')); // ou replace normal
console.log(nome) // continua sendo Mateus né

var altura = 20.4;
console.log(altura.toFixed()); // arredonda
console.log(altura.toString()); 

var btn = document.querySelector('.btn');
btn.classList.add('blue');
btn.innerHTML = 'ola';

btn.addEventListener('click', function(){
    console.log('clicou');
})

let abacate = 'bom diaa';
console.log(abacate.indexOf('a'));

var condicao = (1.8 > altura) ? "é alto" : "É normal ou baixo";
console.log(condicao);

//                          ESCOPO

var oiii = true;
var bbb = true;

if ((oiii && bbb) == true){ // show fazer isso
    carro3 = true; // isso é um erro, é uma variável global sem var, let, nada.
    console.log('Funciona!!!');
}
console.log(carro3) 
var trueFalse = (oiii && bbb) // se os dois forem true, retorna true
console.log(trueFalse);

// VAR NÃO RESPEITA BLOCO, vc declara dentro de uma function e ainda dá para acessá-la fora dela
// por isso q tem o let e const
{
    var carro2 = 'fusca';
    var ano = 2018;
}
console.log(carro2);
console.log(ano);

for(var i=0; i<10; i++){} // esse var vai vazar, vai aparecer fora do loop
for(let i=0; i<10; i++){} // aqui é só no bloco q vai ter esse i

const pedra = 2018;
// pedra = 343; não dá
console.log(pedra)

// então fica assim: primeiro usa const, se não usa let; e caso precisar usa var