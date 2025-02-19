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