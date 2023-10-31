const overlay = document.getElementById('overlay');
const menubar = document.getElementById('menubar');
const navList = document.getElementById('nav-list');
const nav = document.querySelector('nav');

menubar.addEventListener('click', () => {
    nav.classList.contains('active-menu') ? closeMenu() : openMenu();
});

overlay.addEventListener('click', () => {
    nav.classList.contains('active-menu') ? closeMenu() : openMenu();
});

function openMenu() {
    nav.classList.add('active-menu');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
}

function closeMenu() {
    nav.classList.remove('active-menu');
    overlay.classList.add('opacity-0', 'pointer-events-none');
}