var navOpenBtn = document.querySelector('.open-button');
var navCloseBtn = document.querySelector('.open-button.close-button');
var navNotFixed = document.querySelector('.navigation');
var navListOpen = document.querySelector('.navlist-container');
var getOverlay = document.querySelector('.overlay');
var getNavlinks = document.querySelectorAll('.navlink');

/* Navigation */
function toggleNavlist(event) {
    if (navOpenBtn.classList.contains('close-button')) {
        navOpenBtn.classList.remove('close-button');
        getOverlay.classList.remove('overlay-visible');
        navListOpen.classList.remove('navlist-open');
    } else {
        navOpenBtn.classList.add('close-button');
        getOverlay.classList.add('overlay-visible');
        navListOpen.classList.add('navlist-open');
    }
}

navOpenBtn.addEventListener('click', toggleNavlist);
getOverlay.addEventListener('click', toggleNavlist);

for (var i = 0; i < getNavlinks.length; i++) {
        getNavlinks[i].addEventListener('click', toggleNavlist);
}

// Fixed menu
function fixedNav() {
  var currentPosition = window.pageYOffset;
  if (currentPosition <= 400) {
    document.body.style.paddingTop = 0;
    navNotFixed.classList.remove('nav-fixed');
  } else {
    document.body.style.paddingTop = navNotFixed.offsetHeight + 'px';
    navNotFixed.classList.add('nav-fixed');
  }
}

window.addEventListener('scroll', fixedNav);