// Variables  
const phoneScreenSize = 600;

let burgerMenu = document.getElementById('burger-menu');
let burgerBtn = document.getElementById('burger');
let clickHeader = document.querySelector('header');
let clickContainer = document.querySelector('.container');
let clickBurgerItem = document.getElementsByClassName('burger-item');

// Function Show Burger Menu
const ShowBurgerMenu = () => {
    if (burgerMenu.style.display == "none" || burgerMenu.style.display == "") {
        burgerMenu.style.display = "flex";
    } else {
        burgerMenu.style.display = "none";
    }
}

// Function Hide Burger Menu
const HideBurgerMenu = () => {
    burgerMenu.style.display = "none"
}

// Add Event Lister for click 
burgerBtn.addEventListener('click', ShowBurgerMenu);
clickHeader.addEventListener('click', HideBurgerMenu);
clickContainer.addEventListener('click', HideBurgerMenu);
for (const element of clickBurgerItem) {
    element.addEventListener('click', HideBurgerMenu);
} 
// Hide hamburger menu on resize page
window.addEventListener('resize', function(event) {
    let sizeScreen = screen.width;
    if (sizeScreen > phoneScreenSize) {
        burgerMenu.style.display = "none";
    }
}, true)
