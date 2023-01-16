const notas = [10, 6, 8];

notas.push(7, 10); //adiciona um valor ao vetor na última posição
notas.pop() //elimina o ultimo valor
let soma = 0

/*const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);*/

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

console.log(soma / notas.length)