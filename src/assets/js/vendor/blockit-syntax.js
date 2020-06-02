/*! blockit-syntax.js | https://www.indonez.com | Indonez | MIT License */
let sectionName = location.pathname.slice(location.pathname.lastIndexOf('/') + 1).split('.html')[0];
let sectionArray = Array.from(document.getElementsByClassName('uk-section')).splice(2);
sectionArray.splice(sectionArray.length - 1);

for (let i = 0; i < sectionArray.length; i++) {
    let blockitSyntax = `
    <div class="uk-flex uk-flex-right in-blockit-syntax">
        <pre><code class="language-html">{{> section-${sectionName}-${i+1} }}</code></pre>
    </div>`
    sectionArray[i].children[0].insertAdjacentHTML("afterBegin", blockitSyntax)
};