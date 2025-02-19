async function loadHTML(id, file) {
    const response = await fetch(`src/components/${file}`);
    document.getElementById(id).innerHTML = await response.text();
}

loadHTML("secao-eu", "secao-eu.html").then(_ => {
        const aniversario = new Date('2003/01/27');
        const idade = (new Date() - aniversario) / (1000 * 60 * 60 * 24 * 365);

        document.getElementById("minha-idade").textContent = Math.floor(idade).toLocaleString();
    }
);

loadHTML("unoesc", "article-unoesc.html").then(_ => {
});

loadHTML("maratona", "article-maratona.html").then(_ => {
});

loadHTML("julias-conversion-tool", "article-julias-conversion-tool.html").then(_ => {
});