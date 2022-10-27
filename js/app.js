const openIcon = document.querySelector('.open__icon');
const closeIcon = document.querySelector('.close__icon');
const sideNav = document.querySelector('.navbar');
const body = document.querySelector('body');
const featuresDropdown = document.querySelector('#dropbtn-features');
const featuresLink = document.querySelector('#link-features');
const featuresArrow = document.querySelector('#arrow-features');
const featuresDropContent = document.querySelector('#drop-content-features');
const companyDropdown = document.querySelector('#dropbtn-company');
const companyLink = document.querySelector('#link-company');
const companyArrow = document.querySelector('#arrow-company');
const companyDropContent = document.querySelector('#drop-content-company');
const himg = document.querySelector('.hero__img');

let featuresDropStatus = false;
let companyDropStatus = false;



document.addEventListener('DOMContentLoaded', () => {
    if (screen.width >= 1024) {
        himg.src = './images/image-hero-desktop.png';
    } else {
        himg.src = './images/image-hero-mobile.png';
    }
});

function openNav() {
    sideNav.classList.add('navbar__open');
}

function closeNav() {
    sideNav.classList.remove('navbar__open');
}

function featuresDropOpen() {
    featuresArrow.setAttribute('src', '/images/icon-arrow-up.svg');
    featuresDropContent.classList.add('dropdown__content-open');
    featuresLink.style.color = 'hsl(0, 0%, 8%)';
    featuresArrow.style.filter = 'brightness(0%)';
    featuresDropStatus = true;
}

function featuresDropClose() {
    featuresArrow.setAttribute('src', '/images/icon-arrow-down.svg');
    featuresDropContent.classList.remove('dropdown__content-open');
    featuresLink.style.cssText = '';
    featuresArrow.style.cssText = '';
    featuresDropStatus = false;
}

function featuresDrop() {
    if (featuresDropStatus) {
        featuresDropClose();
    } else {
        featuresDropOpen();
    }
}

function companyDropOpen() {
    companyArrow.setAttribute('src', '/images/icon-arrow-up.svg');
    companyDropContent.classList.add('dropdown__content-open');
    companyLink.style.color = 'hsl(0, 0%, 8%)';
    companyArrow.style.filter = 'brightness(0%)';
    companyDropStatus = true;
}

function companyDropClose() {
    companyArrow.setAttribute('src', '/images/icon-arrow-down.svg');
    companyDropContent.classList.remove('dropdown__content-open');
    companyLink.style.cssText = '';
    companyArrow.style.cssText = '';
    companyDropStatus = false;
}

function companyDrop() {
    if (companyDropStatus) {
        companyDropClose();
    } else {
        companyDropOpen();
    }
}

function checkNav(e) {
    if (e.target == openIcon) {
        openNav();
    } else if (e.target == closeIcon) {
        featuresDropClose();
        companyDropClose();
        closeNav();
    } else if (e.target.parentNode == body) {
        featuresDropClose();
        companyDropClose();
        closeNav();
    }
}

featuresDropdown.addEventListener('click', featuresDrop);
companyDropdown.addEventListener('click', companyDrop);
document.addEventListener('click', checkNav);