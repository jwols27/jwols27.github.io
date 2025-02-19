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
    const locale = localStorage.getItem("locale") || "pt";
    carregarLocale(locale).then(_ => {
    });
});

function mudarLocale() {
    let locale = localStorage.getItem("locale") || "pt";
    locale = locale === "pt" ? "en" : "pt"
    localStorage.setItem("locale", locale);
    carregarLocale(locale).then(_ => {
    });
}