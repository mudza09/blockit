/* --------------------------------------------------------------------------
 * File        : config.js
 * Author      : indonez
 * Author URI  : http://www.indonez.com
 *
 * Indonez Copyright 2020 All Rights Reserved.
 * -------------------------------------------------------------------------- 
 * javascript handle initialization
    1. modal iframe
 * -------------------------------------------------------------------------- */

'use strict';

let slideshowApp = {
    //----------- 1. modal iframe -----------
    theme_iframe: function() {
        const youtube = new iframeVid({
            selector: '.in-iframe',
            url: 'https://www.youtube.com/embed/F3QpgXBtDeo',
            width: 900,
            height: 506
        });
    },
    theme_init: function () {
        slideshowApp.theme_iframe();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    slideshowApp.theme_init();
});