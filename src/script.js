// Localization

async function carregarLocale(lang) {
    const res = await fetch("src/lang.json");
    const localizacao = await res.json();

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (localizacao[lang] && localizacao[lang][key]) {
            element.textContent = localizacao[lang][key];
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const locale = localStorage.getItem("locale") ?? "pt";
    carregarLocale(locale).then(_ => {
    });
});

function mudarLocale() {
    let locale = localStorage.getItem("locale") ?? "pt";
    locale = locale === "pt" ? "en" : "pt"
    localStorage.setItem("locale", locale);
    carregarLocale(locale).then(_ => {
    });
}

// Scripting
const aniversario = new Date('2003/01/27');
const idade = (new Date() - aniversario) / (1000 * 60 * 60 * 24 * 365);

document.getElementById("minha-idade").textContent = Math.floor(idade).toLocaleString();

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