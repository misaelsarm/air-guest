let menu = document.getElementById('menu');

let navLinks = document.getElementById('nav-bar-links')


menu.addEventListener('click', showMenu);
let opened = false;
function showMenu() {
    opened = !opened
    navLinks.classList.toggle('active');
    for (let i = 0; i < menu.children.length; i++) {
        menu.children[i].classList.toggle('menu-active');
        if (opened) {
            menu.children[0].style.transform = 'rotate(-60deg) translate(-10px, 5px)';
            menu.children[1].style.display = 'none';
            menu.children[2].style.transform = 'rotate(60deg)';
        } else {
            menu.children[0].style.transform = 'rotate(0)';
            menu.children[1].style.display = 'block';
            menu.children[2].style.transform = 'rotate(0)';
        }
    }
}


console.log(menu.children[0]);