/*! in-breadcrumb.js | https://www.indonez.com | Indonez | MIT License */
(function () {
    let navbar = document.querySelectorAll('.uk-navbar-nav li');
    let homePath = navbar[0].getElementsByTagName('a')[0].pathname;
    let breadPath = '';
    let breadChild = '';

    if (document.getElementsByClassName('uk-breadcrumb').length > 0) {
        document.getElementsByClassName('uk-breadcrumb')[0].innerHTML = '<li><a href="' + homePath.slice(location.pathname.lastIndexOf('/') + 1) + '">' + navbar[0].innerText + '</a></li>';

        for (let i = 0, len = navbar.length; i < len; i++) {
            if (navbar[i].getAttribute('class', 'uk-active') === 'uk-active') {
                let breadcrumb = document.getElementsByClassName('uk-breadcrumb')[0];
                let li = document.createElement('li');
                breadPath = navbar[i].getElementsByTagName('a')[0].pathname;
                breadChild = navbar[i].innerText;

                if (navbar[i].getElementsByTagName('a')[0].pathname === navbar[i].getElementsByTagName('a')[0].pathname) {
                    li.innerHTML = '<a href="' + navbar[i].getElementsByTagName('a')[0].href[navbar[i].getElementsByTagName('a')[0].href.length - 1] + '">' + breadChild + '</a>';

                }
                if (navbar[i].getElementsByTagName('a')[0].href[navbar[i].getElementsByTagName('a')[0].href.length - 1] !== '#') {
                    li.innerHTML = '<a href="' + breadPath.replace(breadPath.charAt(0), '') + '">' + breadChild + '</a>';
                }

                breadcrumb.insertBefore(li, breadcrumb.firstElementChild.previousSibling);
            }
        };

        let allList = document.querySelectorAll('.uk-breadcrumb li');
        let lastList = allList[allList.length - 1];

        lastList.innerHTML = '<span>' + breadChild + '</span>'
    };
})();