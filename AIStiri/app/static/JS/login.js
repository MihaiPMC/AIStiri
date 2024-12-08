
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-password');
    
    toggleButton.addEventListener('click', function() {
        const input = this.previousElementSibling;
        
        // Toggle password visibility
        if (input.type === 'password') {
            input.type = 'text';
            this.classList.remove('fa-eye-slash');
            this.classList.add('fa-eye');
        } else {
            input.type = 'password';
            this.classList.remove('fa-eye');
            this.classList.add('fa-eye-slash');
        }
        
        // Add animation effect
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });

    // Handle login form submission
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Add your login logic here
        console.log('Login attempted with:', email);
        
        // After successful login, redirect to home
        // window.location.href = 'index.html';
    });
});