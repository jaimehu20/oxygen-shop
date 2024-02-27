// MENU HAMBURGUESA
const displayMenu = document.querySelector('#displayMenu');
const hideMenu = document.querySelector('#hideMenu');
const mobileMenu = document.querySelector('#mobileMenu');
const menuOption = document.querySelectorAll('.navBar__menu__options');
const returnTopButton = document.querySelector('#returnToTop');

displayMenu.addEventListener("click", dropdownMenu);

function dropdownMenu() {
    displayMenu.style.display = "none";
    hideMenu.style.display = "block";
    hideMenu.style.right = "0.9em";
    hideMenu.style.top = "0.9em";
    mobileMenu.style.display = "block";
    mobileMenu.style.paddingTop = "2em";
    menuOption.forEach(element => {
        element.style.display = "block";
        element.style.paddingLeft = "2em";
        element.style.paddingBottom = "1em";
    });
}

hideMenu.addEventListener("click", hideDropdownMenu);
mobileMenu.addEventListener("click", hideDropdownMenu);

function hideDropdownMenu() {
    displayMenu.style.display = "block";
    hideMenu.style.display = "none";
    mobileMenu.style.display = "none";
}

// SCROLL-BAR
window.addEventListener("scroll", () => {
    let scrollIndex = window.scrollY;
    windowHeight = document.body.scrollHeight - window.innerHeight;
    let percent = (scrollIndex / windowHeight) * 100;
    document.querySelector('#scrollBar').style.width = percent + "%";

})

// RETURN TO TOP BUTTON
returnTopButton.addEventListener("click", returnTop);

function returnTop() {
    setTimeout(() => {
        window.scrollTo(0, 0)
    }, 200)
}