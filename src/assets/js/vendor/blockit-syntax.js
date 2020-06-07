/*! blockit-syntax.js | https://www.indonez.com | Indonez | MIT License */
const path = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);
const sectionName = location.pathname.slice(location.pathname.lastIndexOf('/') + 1).split('.html')[0];
const sectionArray = Array.from(document.getElementsByClassName('uk-section')).splice(2);
sectionArray.splice(sectionArray.length - 1);

if (path === "getting-started.html") {
    const getStarted = document.getElementsByTagName('code');
    for (let i = 0; i < getStarted.length; i++) {
        const codeText = getStarted[i].childNodes;
        const codeSanitize = codeText[0].textContent.replace(/        /g,"");

        getStarted[i].innerHTML = codeSanitize;
        console.log(codeSanitize)
    }
} else {
    for (let i = 0; i < sectionArray.length; i++) {
        const blockitSyntax = `
        <div class="uk-flex uk-flex-right in-blockit-syntax">
            <pre class="uk-display-inline"><code class="language-js-templates">{{> section-${sectionName}-${i+1} }}</code></pre>
        </div>`
        sectionArray[i].children[0].insertAdjacentHTML("afterBegin", blockitSyntax)
    };
}