function afficherMessage() {
    document.addEventListener('DOMContentLoaded', function() {
        // Récupérez le bouton par son ID
        var bouton = document.getElementById('monBouton');

        // Attachez un gestionnaire d'événement pour le clic sur le bouton
        bouton.addEventListener('click', function() {
            // Votre code JavaScript à exécuter après avoir cliqué sur le bouton
            alert("Votre message a bien été envoyé !");
        });
    });
}

afficherMessage()