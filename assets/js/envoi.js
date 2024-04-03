function envoyerEmail() {
    let nom = document.getElementById("name").value;
    let telephone = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let xhr = new XMLHttpRequest();
    let url = "envoi.php";
    let params = "nom=" + nom + "&telephone=" + telephone + "&email=" + email + "&message=" + message;
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert("Le message a été envoyé avec succès !");
            } else {
                alert("Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer plus tard.");
            }
        }
    };
    xhr.send(params);
}