document.addEventListener('DOMContentLoaded', function() {
    const forgotPassForm = document.getElementById('forgotPassForm');
    
    forgotPassForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        
        // Send email using EmailJS
        emailjs.send("service_cblmt2r", "template_nzo8459", {
            to_email: email,
            reset_link: "https://yourdomain.com/reset-password?email=" + encodeURIComponent(email)
        })
        .then(function(response) {
            alert('Email trimis cu succes! Verifică căsuța de email pentru instrucțiuni.');
            window.location.href = 'login.html';
        }, function(error) {
            alert('A apărut o eroare. Te rugăm să încerci din nou.');
            console.log('EmailJS error:', error);
        });
    });
});