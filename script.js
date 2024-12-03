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




// Liste des cartes
const cards = [
    { id: 1, name: "Ping", rarity: "commune", image: "Images/Image_Ping.png" },
    { id: 2, name: "Pong", rarity: "commune", image: "Images/Image_Pong.png" },
    { id: 3, name: "Ping V", rarity: "V", image: "Images/Image_Ping_V.png" },
    { id: 4, name: "Ping V Gold", rarity: "Gold", image: "Images/Image_Ping_V_Gold.png" },
    { id: 5, name: "Salamalek", rarity: "commune", image: "Images/Image_Salamalek.png" },
    { id: 4, name: "Eugene Malice", rarity: "rare", image: "Images/Image_Eugene_Malicieuxd.png" }
];

// Fonction pour générer un booster aléatoire (5 cartes)
function generateBooster() {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
}

// Boosters de départ
const boosters = {
    left: generateBooster(),
    center: generateBooster(),
    right: generateBooster(),
};

