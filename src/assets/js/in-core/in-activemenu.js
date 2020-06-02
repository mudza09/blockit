/* in-activemenu.js | https://www.indonez.com | Indonez | MIT License */
(function () {
    const   path = location.pathname.slice(location.pathname.lastIndexOf('/') + 1),
            navbar = document.querySelectorAll('.uk-navbar-nav li'),
            navbarMobile = document.querySelectorAll('.uk-nav-default li'),
            dropdown = document.querySelectorAll('.uk-navbar-dropdown li');

    if (location.pathname[location.pathname.length - 1] === '/') {
        navbar[0].classList.add('uk-active');
        navbarMobile[0].classList.add('uk-active');
    };

    navbar.forEach(function(el) {
        if (el.querySelectorAll('a')[0].getAttribute('href') === path) {
            el.classList.add('uk-active');
        }
    });

    navbarMobile.forEach(function(el) {
        if (el.querySelectorAll('a')[0].getAttribute('href') === path) {
            el.classList.add('uk-active');
        }
    });

    dropdown.forEach(function(el) {
        if (dropdown.length > 0 && el.querySelectorAll('a')[0].getAttribute('href') === path) {
            const   standard = el.parentElement.parentElement,
                    multiple = el.parentElement.parentElement.parentElement.parentElement;

            if (standard.parentElement.tagName === 'LI') {
                standard.parentElement.classList.add('uk-active');
            } else {
                multiple.parentElement.classList.add('uk-active');
            }
        }
    });
})();