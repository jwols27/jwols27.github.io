const aniversario = new Date('2003/01/27');
const idade = (new Date() - aniversario) / (1000 * 60 * 60 * 24 * 365);

document.getElementById("minha-idade").textContent = `${Math.floor(idade)} anos`;


const imgArr = [
    "entrapta icon.jpg", "jacko.jpg", "marcille.png", "ramlethal.png", "pretty aqua closeup.png"
];
let imgDisp = imgArr.slice();

const imagemAleatoria = () => {
    const x = Math.floor(Math.random() * imgDisp.length);
    let img = "eu.png";

    if (imgDisp.length > 0) {
        img = imgDisp[x];
        imgDisp.splice(x, 1);
    } else {
        imgDisp = imgArr.slice();
    }

    document.getElementById("eu-img").src = `src/assets/${img}`;
}