document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
        // Verifica se o reCAPTCHA foi preenchido
        if (grecaptcha.getResponse() === '') {
            event.preventDefault();
            alert('Por favor, verifique o reCAPTCHA.');
        } else {
            // Exibe a mensagem de agradecimento
            alert('Obrigado pelo seu contato! Retornaremos o mais rápido possível.');
        }
    });
});
