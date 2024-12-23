const aniversario = new Date('2003/01/27');
const idade = (new Date() - aniversario) / (1000 * 60 * 60 * 24 * 365);

document.getElementById("minha-idade").textContent = `${Math.floor(idade)} anos`;

let ultimaImagem = -1;

const imagemAleatoria = () => {
    const imgArr = [
        "entrapta icon.jpg", "jacko.jpg", "marcille.png", "ramlethal.png", "pretty aqua closeup.png"
    ];

    const getImagemAleatoria = () => {
        const x = Math.floor(Math.random() * imgArr.length);
        ultimaImagem = ultimaImagem === x ? getImagemAleatoria() : x;
        return ultimaImagem;
    }

    const img = imgArr[getImagemAleatoria()];
    document.getElementById("eu-img").src = `assets/${img}`;
}