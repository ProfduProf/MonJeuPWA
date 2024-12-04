// Écouteur pour le bouton "Se connecter"
document.getElementById("login-button").addEventListener("click", function () {
    // Cache la page principale
    document.getElementById("main-buttons").style.display = "none";

    // Affiche la home page
    document.getElementById("home-page").style.display = "block";
});

// Écouteur pour le bouton "S'inscrire" (temporaire)
document.getElementById("signup-button").addEventListener("click", function () {
    alert("Fonctionnalité d'inscription à venir.");
});


document.addEventListener("DOMContentLoaded", () => {
    const actionBtn = document.getElementById("action-btn");
    const progressBar = document.getElementById("progress-fill");
    let progress = 50; // Progression initiale en pourcentage
    const timerInterval = setInterval(updateProgress, 1000); // Simule la jauge qui se remplit

    // Met à jour la jauge toutes les secondes
    function updateProgress() {
        if (progress < 100) {
            progress += 5; // Incrémente la progression
            progressBar.style.width = progress + "%";

            if (progress >= 100) {
                actionBtn.textContent = "Ouvrir";
                actionBtn.style.backgroundColor = "#ffcce5"; // Rose pâle
            }
        }
    }

    // Gestion du clic sur le bouton
    actionBtn.addEventListener("click", () => {
        if (progress >= 100) {
            alert("Booster ouvert !");
            progress = 0; // Réinitialise la jauge
            progressBar.style.width = progress + "%";
            actionBtn.textContent = "Accélérer";
            actionBtn.style.backgroundColor = "#f0f0f0";
        } else {
            alert("Vous avez choisi d'accélérer !");
            progress += 20; // Accélère la progression
            if (progress > 100) progress = 100;
            progressBar.style.width = progress + "%";
        }
    });
});


// Liste des cartes (même structure que précédemment)
const cards = [
    { id: 1, name: "Ping", rarity: "commune", image: "Image_Ping.png" },
    { id: 2, name: "Pong", rarity: "commune", image: "Image_Pong.png" },
    { id: 3, name: "Ping V", rarity: "V", image: "Image_Ping_V.png" },
    { id: 4, name: "Salamalek", rarity: "commune", image: "Image_Salamalek.png" },
    { id: 5, name: "Flop Man", rarity: "rare", image: "Image_Eugene_Malicieux.png" },
    { id: 6, name: "Amin sans e Vmax", rarity: "Vmax", image: "Image_Amin_sans_e_Vmax.png" },
    { id: 7, name: "Ping V Gold", rarity: "Gold", image: "Image_Ping_V_Gold.png" },
];



// Cartes possédées (id des cartes possédées)
let ownedCards = [1, 2, 3, 4, 5, 6]; // Exemple




// Bouton Pokédex de la home page
document.getElementById("pokedex-btn").addEventListener("click", () => {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("pokedex-page").style.display = "block";
    displayPokedex();
});

// Bouton retour
document.getElementById("back-to-home").addEventListener("click", () => {
    document.getElementById("pokedex-page").style.display = "none";
    document.getElementById("home-page").style.display = "block";
});





function displayPokedex() {
    const pokedexContainer = document.getElementById("pokedex-container");
    pokedexContainer.innerHTML = ""; // Réinitialise l'affichage

    let ownedCount = 0;

    // Compteurs de rareté
    const rarityCount = {
        commune: 0,
        rare: 0,
        V: 0,
        Vmax:0,
        Gold: 0,
    };

    // Création des cartes
    cards.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("pokedex-card");

        if (ownedCards.includes(card.id)) {
            cardElement.innerHTML = `<img src="${card.image}" alt="${card.name}"><p>${card.name}</p>`;
            ownedCount++;
            rarityCount[card.rarity]++; // Incrémenter la rareté
        } else {
            cardElement.classList.add("unowned");
            cardElement.innerHTML = `<img src="default-card.png" alt="Carte inconnue"><p>???</p>`;
        }

        pokedexContainer.appendChild(cardElement);
    });

    // Met à jour les compteurs
    const pokedexCounter = document.getElementById("pokedex-counter");
    pokedexCounter.innerText = `${ownedCount} / ${cards.length} `;

    const rarityCounter = document.getElementById("rarity-counter");
    rarityCounter.innerHTML = Object.entries(rarityCount)
        .map(([rarity, count]) => `${rarity} : ${count}`)
        .join(" || ");
}
