// script.js
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menuModal = document.getElementById('menu-modal');

    menuIcon.addEventListener('click', function () {
        menuModal.style.left = '0';
    });

    menuModal.addEventListener('click', function () {
        menuModal.style.left = '-300px';
    });
});
