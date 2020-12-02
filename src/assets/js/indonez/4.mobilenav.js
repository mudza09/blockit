/* mobilenav.js | https://www.indonez.com | Indonez | MIT License */
const mnavConfig = {
    extraButton: true,
    buttons: [
        {
            name: '',                // button name
            url: '',                 // button url
            type: 'primary',         // button type (default, primary, secondary, danger, text)
            icon: 'sign-in-alt'      // button icon, you can use all icons from here : https://fontawesome.com/icons?d=gallery&s=solid&m=free
        }
    ],
}

const mainNav = document.querySelector('.uk-navbar-nav');

if (mainNav !== null) {    
    const mobileNav = mainNav.cloneNode(true);
    const mobileNavChild = mobileNav.querySelectorAll('ul.uk-nav');

    // Remove the current class in main navigation
    mobileNav.classList.remove('uk-navbar-nav','uk-visible@m');
    mobileNav.classList.add('uk-nav-default','uk-nav-parent-icon');
    mobileNav.setAttribute('data-uk-nav','');

    // Add uk-parent class to li that have children
    Array.from(mobileNav.children).forEach(function(e) {
        if (e.children.length == 2) {
            e.classList.add('uk-parent')
            e.querySelectorAll('.fa-chevron-down')[0].remove()  
        }
    });

    // Remove parent wrapper function
    const unwrap = node => node.replaceWith(...node.childNodes);

    // Remove the parent wrapper if have dropdown
    mobileNavChild.forEach(function(e) {    
        e.classList.remove('uk-nav','uk-navbar-dropdown-nav')
        e.classList.add('uk-nav-sub')
        unwrap(e.parentElement)

        if (e.querySelector('a.uk-disabled') !== null) {
            unwrap(e.parentElement.parentElement)
            unwrap(e.parentElement)
            e.querySelector('a.uk-disabled').parentElement.parentElement.remove()
        }  
    });

    // button url function
    function buttonUrl(index) {
        let urlValue;
        mnavConfig.buttons[index].url.length > 0 
            ? urlValue = mnavConfig.buttons[index].url 
            : urlValue = signinEle.querySelector('a').pathname.substr(1); 
        return urlValue;
    }

    // button name function
    function buttonName(index) {
        let nameValue;
        mnavConfig.buttons[index].name.length > 0 
            ? nameValue = mnavConfig.buttons[index].name 
            : nameValue = signinEle.querySelector('a').innerText;
        return nameValue;
    }

    // button icon function
    function buttonIcon(index) {
        let iconTag;
        mnavConfig.buttons[index].icon !== undefined && mnavConfig.buttons[index].icon.length > 0
            ? iconTag = `<i class="fas fa-${mnavConfig.buttons[index].icon} uk-margin-small-left"></i>`
            : iconTag = '';
        return iconTag;
    }

    // Optional, used if want add signin button
    const signinEle = document.querySelector('.in-optional-nav');
    let signinBtn = '';
    
    // check condition of extraButton true or false
    if (mnavConfig.extraButton && signinEle !== null && signinEle.children.length > 0) {
        mnavConfig.buttons.forEach(function(e, i) {
            signinBtn += `<a href="${buttonUrl(i)}" class="uk-button uk-button-${mnavConfig.buttons[i].type} uk-border-rounded uk-align-center">${buttonName(i)}${buttonIcon(i)}</a>`;
        })
    }

    // Mobile navigation wrapper
    const mobileNavWrap = `
    <div class="uk-navbar-item in-mobile-nav uk-hidden@m">
        <a class="uk-button" href="#modal-full" data-uk-toggle><i class="fas fa-bars"></i></a>
    </div>
    <div id="modal-full" class="uk-modal-full" data-uk-modal>
        <div class="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle" data-uk-height-viewport>
            <a class="uk-modal-close-full uk-button"><i class="fas fa-times"></i></a>
            <div class="uk-width-large uk-padding-large">
                ${mobileNav.outerHTML}
                ${signinBtn}
            </div>
        </div>
    </div>
    `

    // Append mobileNavWrap into the end of uk-navbar-nav
    mainNav.insertAdjacentHTML('afterend', mobileNavWrap);
}