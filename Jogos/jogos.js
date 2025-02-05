document.addEventListener("DOMContentLoaded", () => {
    const jogos = [
        {
            data: "20/01/2025",
            local: "Ginásio Barueri",
            timeCasa: { nome: "Basquete Barueri", escudo: "../Barueri site versão final/Jogos/jogos_img/barueri.png" },
            timeVisitante: { nome: "Continental", escudo: "../Barueri site versão final/Jogos/jogos_img/continental.png" },
            placar: "0 - 100"
        },
        {
            data: "25/01/2025",
            local: "Arena São Paulo",
            timeCasa: { nome: "Basquete Barueri", escudo: "../Barueri site versão final/Jogos/jogos_img/barueri.png" },
            timeVisitante: { nome: "Osasco", escudo: "../Barueri site versão final/Jogos/jogos_img/osasco.png" },
            placar: "Aguardando"
        }
    ];

    const container = document.getElementById("jogos-container");

    jogos.forEach(jogo => {
        const jogoCard = document.createElement("div");
        jogoCard.classList.add("jogo-card");

        jogoCard.innerHTML = `
            <div class="equipe">
                <img src="${jogo.timeCasa.escudo}" alt="${jogo.timeCasa.nome}">
            </div>
            <div class="jogo-info">
                <p><strong>${jogo.data} - ${jogo.local}</strong></p>
                <p>${jogo.placar}</p>
                <p>vs</p>
            </div>
            <div class="equipe">
                <img src="${jogo.timeVisitante.escudo}" alt="${jogo.timeVisitante.nome}">
            </div>
        `;

        container.appendChild(jogoCard);
    });
});