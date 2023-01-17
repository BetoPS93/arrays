const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeNota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        /*const alunos = listaDeAlunosEMedias[0];
        const medias = listaDeAlunosEMedias[1];*/
        const [alunos, medias] = listaDeAlunosEMedias;
        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];
        console.log(`${aluno} está cadastrado! e sua média é: ${mediaAluno}`);
    } else {
        console.log(`${aluno} não encontrado!`);
    }
}

exibeNomeNota("Caio");
