// sendEmail.js
function sendEmail(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    let params = {
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    emailjs.send("service_frng43o", "template_vofgwrq", params)
        .then(function(response) {
            alert("Correo enviado con éxito!");
        }, function(error) {
            alert("Error al enviar el correo: " + JSON.stringify(error));
        });
}

// Añadir el event listener al formulario
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', sendEmail);
});
