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
