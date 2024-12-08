
document.addEventListener('DOMContentLoaded', () => {
    const MenuItems = document.getElementById("MenuItems");
    const menuIcon = document.querySelector(".menu-icon");
    const backIcon = document.querySelector(".back-icon");
    const overlay = document.getElementById('overlay');

    menuIcon.addEventListener('click', () => {
        MenuItems.classList.add('active');
        overlay.classList.add('active');
    });

    backIcon.addEventListener('click', () => {
        MenuItems.classList.remove('active');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
        MenuItems.classList.remove('active');
        overlay.classList.remove('active');
    });
});