/* in-breadcrumb.js | https://www.indonez.com | Indonez | MIT License */
(function() {
    const navbar = document.querySelectorAll('.uk-navbar-nav li');
    const breadWrap = document.getElementsByClassName('uk-breadcrumb');
    let breadChild;

    // Check if breadcrumb is present
    if (breadWrap.length > 0) {
        const homePath = navbar[0].getElementsByTagName('a')[0].pathname;
        const homeTitle = "Home";

        breadWrap[0].innerHTML = `<li><a href="${homePath.slice(location.pathname.lastIndexOf('/') + 1)}">${homeTitle}</a></li>`;

        navbar.forEach(function(el) {
            if (el.getAttribute('class', 'uk-active') === 'uk-active') {
                const createLi = document.createElement('li');
                const hrefLi = el.getElementsByTagName('a');
                const breadPath = hrefLi[0].pathname;
                breadChild = el.childNodes[0].innerText;

                if (hrefLi[0].pathname === hrefLi[0].pathname) {
                    createLi.innerHTML = `<a href="${hrefLi[0].href[hrefLi[0].href.length - 1]}">${breadChild}</a>`;
                } else if (hrefLi[0].href[hrefLi[0].href.length - 1] !== '#') {
                    createLi.innerHTML = `<a href="${breadPath.slice(location.pathname.lastIndexOf('/') + 1)}">${breadChild}</a>`;
                }

                breadWrap[0].insertBefore(createLi, breadWrap[0].firstElementChild.previousSibling);
            }
        });

        const allLi = document.querySelectorAll('.uk-breadcrumb li');
        const lastLi = allLi[allLi.length - 1];

        lastLi.innerHTML = `<span>${breadChild}</span>`;
    };
})();