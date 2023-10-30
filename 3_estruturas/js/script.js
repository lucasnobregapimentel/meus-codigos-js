// 1 - variáveis
let nome = 'Lucas';

console.log(nome);

nome = 'Lucas Nóbrega';

console.log(nome);

const idade = 14;

console.log(idade);

// idade = 15;

console.log(typeof nome);
console.log(typeof idade);

// 2 - mais sobre variáveis
// let 2teste = 'inválido';
// let @teste = 'inválido';

let a = 10, b = 20, c= 30;

console.log(a, b, c);

const nomecompleto = 'Lucas Nóbrega';

const nomeCompleto = 'João da Silva';

console.log(nomecompleto);

console.log(nomeCompleto);

let _teste = 'ok';

let $teste = 'ok';

console.log(_teste, $teste);

// 3 - prompt
// const age= prompt('Digite a sua idade:');
// console.log(`Você tem ${age} anos.`);

// 4 - alert
// alert("Testando");

// const z = 10;
// alert(`O número é ${z}`);

// 5 - Math
console.log(Math.max(5, 2, 1, 10));

console.log(Math.floor(5.14));

console.log(Math.ceil(5.14));

// 6 - console
// console.log('teste!');

// console.error("erro!");

// console.warn('aviso!');

// 7 - if
const m = 10;

if (m > 5) {
    console.log("M é maior que 5!");
}

const user = 'João';

if (user == 'João') {
    console.log(`Olá ${user}!`);
}

if (user === 'Maria') {
    console.log('Olá Maria!');
}

console.log(user == 'João', user === 'Maria');

// 8 - else
const loggedIn = false;

if (loggedIn) {
    console.log('Está autenticado!');
} else {
    console.log('Não está autenticado!');
}

const q = 10;
const w = 15;

if (q > 5 && w > 20) {
    console.log('Números mais altos');
} else {
    console.log('Os números não são mais altos');
}

// 9 - else if
if (1 > 2) {
    console.log('Teste');
} else if (2 > 3) {
    console.log('Teste 2');
} else if (5 > 1) {
    console.log('Agora sim!');
}

const userName = 'Lucas';
const age = 14;

if (userName === 'José') {
    console.log('Bem vindo José!');
} else if (userName === 'Lucas' && age === 14) {
    console.log('Olá Lucas, você tem 14 anos.');
} else {
    console.log('Nenhuma condição aceita!');
}

// 10 - while

let p = 0;

while (p < 5) {
    console.log(`Repetindo ${p}`);
    p = p + 1;
}

// loop infinito
// let x = 10;

// while (x > 5) {
//     console.log(`Imprimindo ${x}`);
// }

//  11 - do while
let o = 10;

do {
    console.log(`Valor de o: ${o}`);
    o--
} while (o > 1);

// 12 - for
for (let t = 0; t < 10; t++) {
    console.log('Repetindo algo...');
}

let r = 10;

for (r; r > 0; r = r - 1) {
    console.log(`O r está diminuindo: ${r}`);
}

// 13 - identação
for (let u = 0; u < 10; u++) {
if ((u * 2) > 10) {
console.log(`Maior que 10! ${u}`);
} else {
if (u / 2 === 0) {
console.log('deu 0');
}
}
}

// 14 - break
for (let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`);

    if (g === 15) {
        console.log('O g é 15!');
        break;
    }
}

// 15 - continue
for (let s = 0; s < 10; s += 1) {
    if (s % 2 === 0) {
        console.log('Número par!');
        continue
    }

    console.log(s);
}

// 16 - switch
const job = 'asd';

switch (job) {
    case 'Programador':
        console.log('Você é um programador!');
        break;
    case 'Advogado':
        console.log('Você é um advogado!');
        break;
    case 'Engenheiro':
        console.log('Você é um engenheiro!');
        break;
    default:
        console.log('Profissão não encontrada');
}

// switch "errado"
const l = 100;

switch (l) {
    case 200:
        console.log('L é 200');
    case 100:
        console.log('L é 100');
    case 10:
        console.log('L é 10');
    default:
        console.log('L não foi encontrado');
}
