/* in-breadcrumb.js | https://www.indonez.com | Indonez | MIT License */
(function() {
    const homeTitle = 'Home';
    const homePath = document.querySelectorAll('.uk-navbar-nav li')[0].getElementsByTagName('a')[0].pathname;
    const currentActive = document.querySelectorAll('.uk-navbar-nav li.uk-active');
    const breadWrapper = document.getElementsByClassName('uk-breadcrumb');
    let breadTitle;

    if (breadWrapper.length > 0) {
        breadWrapper[0].innerHTML = `<li><a href="${homePath.slice(location.pathname.lastIndexOf('/') + 1)}">${homeTitle}</a></li>`;

        currentActive.forEach(function(el) {
            const createLi = document.createElement('li');
            breadTitle = el.childNodes[0].innerText;

            createLi.innerHTML = `<a href="${el.children[0].attributes[0].textContent}">${breadTitle}</a>`; 
            breadWrapper[0].insertBefore(createLi, breadWrapper[0].firstElementChild.previousSibling);
        })
        
        breadWrapper[0].lastChild.innerHTML = `<span>${breadTitle}</span>`;
    }
})();