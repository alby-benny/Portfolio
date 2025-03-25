document.addEventListener("DOMContentLoaded", function () {
    const navBar = document.querySelector(".main-header-content-nav-bar");
    const navMenu = document.querySelector(".main-header-nav");
    const themeToggle = document.querySelector(".main-header-theme-toggle");

    navBar.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        themeToggle.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const navBar = document.querySelector(".main-header-content-nav-bar");
    const contentLeft = document.querySelector(".main-header-content-left");

    navBar.addEventListener("click", function () {
        contentLeft.classList.toggle("active");
    });
});

let lastScrollTop = 0;
const header = document.querySelector(".main-header");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down - hide header
        header.style.top = "-60px";
    } else {
        // Scrolling up - show header
        header.style.top = "0";
    }
    
    lastScrollTop = scrollTop;
});

