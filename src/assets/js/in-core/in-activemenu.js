/* in-activemenu.js | https://www.indonez.com | Indonez | MIT License */
(function () {
    const path = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);
    const mediaquery = window.matchMedia( "(max-width: 960px)" );
    const navbar = document.querySelectorAll('.uk-navbar-nav li');
    const navbarMobile = document.querySelectorAll('.uk-nav-default li');
    const dropdown = document.querySelectorAll('.uk-navbar-dropdown li');
    const dropdownMobile = document.querySelectorAll('.uk-nav-sub li');

    // Add class active to navigation
    function addActive(element) {
        element.forEach(function(eachElement) {
            if (location.pathname[location.pathname.length - 1] === '/') {
                element[0].classList.add('uk-active');
            } else if (eachElement.querySelectorAll('a')[0].getAttribute('href') === path) {
                eachElement.classList.add('uk-active');
            }
        })
    };

    // Add class active to parent if currently in dropdown
    function addActiveParent(element) {
        element.forEach(function(eachElement) {
            if (element.length > 0 && eachElement.querySelectorAll('a')[0].getAttribute('href') === path) {
                const standard = eachElement.parentElement.parentElement;
                const multiple = eachElement.parentElement.parentElement.parentElement.parentElement;
                if (standard.parentElement.tagName === 'LI') {
                    standard.parentElement.classList.add('uk-active');
                } else if (standard.tagName === 'LI') {
                    standard.classList.add('uk-active');
                } else {
                    multiple.parentElement.classList.add('uk-active');
                }
            }
        })
    };

    if (mediaquery.matches) {
        addActive(navbarMobile);
        addActiveParent(dropdownMobile);
    };

    addActive(navbar);    
    addActiveParent(dropdown); 
})();