<?php
//Ce code php permet de récupérer les données inscrites dans le formulaire de contact (pour le moment il n'est pas totalement fonctionnel)
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $destinataire = "fani.prft@gmail.com"; // Remplacez par votre adresse e-mail
    $sujet = "Nouveau message depuis le formulaire de contact";

    $nom = $_POST["name"];
    $telephone = $_POST["number"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $contenu = "Nom: $nom\nNuméro de téléphone: $telephone\nAdresse e-mail: $email\n\nMessage :\n$message";

    $headers = "From: $email\r\nReply-To: $email";

    if (mail($destinataire, $sujet, $contenu, $headers)) {
        http_response_code(200);
    } else {
        http_response_code(500);
    }
} else {
    http_response_code(405);
}
?>
