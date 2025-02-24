// 1.
console.log("\n\nExercicio 1:")
const dobro = x => x*2;
console.log(dobro(7)); // 14
console.log(dobro(15)); // 30

// 2.
console.log("\n\nExercicio 2:")
const dividir = (a, b) => a/b
console.log(dividir(10, 2)); // 5
console.log(dividir(9, 3));  // 3

// 3.
console.log("\n\nExercicio 3:")
const mensagemBoasVindas = (nome) => `Seja bem-vindo, ${nome}` 
console.log(mensagemBoasVindas("Carlos")); // "Seja bem-vindo, Carlos!"
console.log(mensagemBoasVindas("Ana"));    // "Seja bem-vindo, Ana!"

// 4.
console.log("\n\nExercicio 4:")
const executarOperacao = (x,y,operacao) => operacao(x,y);
console.log(executarOperacao(6, 3, (a, b) => a - b)); // 3
console.log(executarOperacao(4, 5, (a, b) => a * b)); // 20

// 5.
console.log("\n\nExercicio 5:")
const precos = [100, 200, 300, 400];
const precosComDesconto = precos.map(num => num - (num * 0.10));
console.log(precosComDesconto); // [90, 180, 270, 360]

// 6.
console.log("\n\nExercicio 6:")
const idades = [12, 25, 17, 30, 14, 19];
const menoresDeIdade = idades.filter(idade => idade < 18);
console.log(menoresDeIdade); // [12, 17, 14]

// 7.
console.log("\n\nExercicio 7:")
const numeros = [2, 3, 4, 5];
const produto = numeros.reduce((total, num) => total * num, 1);
console.log(produto); // 120 (pois 2 * 3 * 4 * 5 = 120)
