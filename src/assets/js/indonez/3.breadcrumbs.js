/* breadcrumb.js | https://www.indonez.com | Indonez | MIT License */
(function() {
    const breadConfig = {
        homeTitle : 'Home',                                  // home or root of your breadcrumb title
        navbarList : '.uk-navbar-nav li',                    // your navbar list selector
        navbarActive : '.uk-navbar-nav li.uk-active',        // your active class selector for navbar
        breadSelector : '.uk-breadcrumb',                    // breadcrumb selector that use in HTML
        articleSelector : '.in-article',                     // article selector that use in HTML for article
        titleSelector : 'h2',                                // heading selector that used for main title of article
        blogTitle : 'blank for blockit demo',                // your HTML title in blog page/article must contain "blog" word
        truncate: false,                                     // truncate option in breadcrumb article if you think to long
        truncateTotal: 80                                    // the number of words you want to truncate
    }
    
    const breadWrapper = document.querySelector(breadConfig.breadSelector);
    const checkTitle = document.title.toLowerCase();
    const mobileWidth = window.matchMedia('(max-width: 960px)');

    // Truncate word of breadcrumb title function
    function truncateWord(str, num) {
        if (str.length <= num) {
            return str
        }
        return str.slice(0, num) + '...'
    }

    // Create breadcrumb function
    function createBreadcrumb() {
        const currentActive = document.querySelectorAll(breadConfig.navbarActive); 

        currentActive.forEach(function(el) {
            const breadTitle = el.childNodes[0].innerText;
            const createLi = document.createElement('li'); 

            createLi.innerHTML = `<a href="${el.children[0].attributes[0].textContent}">${breadTitle}</a>`; 
            breadWrapper.appendChild(createLi);
        })
    }

    // Create breadcrumb blog article function
    function createBreadcrumbArticle(homePath) {
        if (checkTitle.includes(breadConfig.blogTitle) && document.querySelector(breadConfig.articleSelector) !== null) {
            const articleTitle = document.querySelector(breadConfig.articleSelector).querySelector(breadConfig.titleSelector).innerText;
            const allLink = document.querySelectorAll('.uk-navbar-nav li a');

            breadWrapper.innerHTML = `<li><a href="${homePath.slice(location.pathname.lastIndexOf('/') + 1)}">${breadConfig.homeTitle}</a></li>`;
            breadTitle = breadConfig.truncate ? truncateWord(articleTitle, breadConfig.truncateTotal) : articleTitle;

            allLink.forEach(function(el) {
                if (el.innerText.toLowerCase() == breadConfig.blogTitle) {
                    el.parentNode.classList.add('uk-active');

                    const levelOne = document.createElement('li');
                    levelOne.innerHTML = `<a href="${el.parentNode.parentNode.parentNode.parentNode.querySelector('a')}">${el.parentNode.parentNode.parentNode.parentNode.querySelector('a').innerText}</a>`;

                    const levelTwo = document.createElement('li');
                    levelTwo.innerHTML = `<a href="${el}">${el.innerText}</a>`;

                    if (!(el.parentNode.parentNode.parentNode.parentNode.classList.contains('uk-container'))) {
                        el.parentNode.parentNode.parentNode.parentNode.classList.add('uk-active');
                        breadWrapper.appendChild(levelOne);
                    }
                    breadWrapper.appendChild(levelTwo);
                }
            })
            
            const articleBreadcrumb = document.createElement('li');
            articleBreadcrumb.innerHTML = `<span>${breadTitle}</span>`;

            breadWrapper.appendChild(articleBreadcrumb);

            if (mobileWidth.matches) {
                breadWrapper.children[breadWrapper.childNodes.length-1].remove();
            }
        }
    }

    // Create span in last child of breadcrumb function
    function createLastBreadcrumb() {
        const lastChild = breadWrapper.children[breadWrapper.childNodes.length-1];
        const titleText = lastChild.innerText;
        const createLi = document.createElement('li'); 

        if (lastChild) {
            lastChild.remove();
            createLi.innerHTML = `<span>${titleText}</span>`; 
            breadWrapper.appendChild(createLi);
        } 
    }

    // Check if breadcrumb present and run the all function
    if (breadWrapper !== null) {
        const homePath = document.querySelectorAll(breadConfig.navbarList)[0].getElementsByTagName('a')[0].pathname;
        breadWrapper.innerHTML = `<li><a href="${homePath.slice(location.pathname.lastIndexOf('/') + 1)}">${breadConfig.homeTitle}</a></li>`;

        createBreadcrumb();
        createBreadcrumbArticle(homePath);
        createLastBreadcrumb();
    }
})();