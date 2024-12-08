function validatePasswords() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const warningMessage = document.getElementById('warning-message');

    if (password !== confirmPassword) {
        warningMessage.style.display = 'block';
        return false;
    } else {
        warningMessage.style.display = 'none';
        return true;
    }
}
