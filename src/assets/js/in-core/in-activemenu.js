/*! in-activemenu.js | https://www.indonez.com | Indonez | MIT License */
(function () {    
    let path = location.pathname;
    let current = path.replace(path.charAt(0), '');
    let navbar = document.querySelectorAll('.uk-navbar-nav li');
    let dropdown = document.querySelectorAll(".uk-navbar-dropdown li");

    for (let i = 0, len = navbar.length; i < len; i++) {
        if (navbar[i].querySelectorAll('a')[0].getAttribute('href') == current) {
            navbar[i].className = "uk-active";
        }
        if (dropdown.length > 0) {
            let li = document.querySelector(".uk-navbar-dropdown").parentElement;
            for (let i = 0, len = dropdown.length; i < len; i++) {
                if (dropdown[i].querySelectorAll('a')[0].getAttribute('href') == current) {
                    li.className = "uk-active";
                }
            };
        }
    };
})();