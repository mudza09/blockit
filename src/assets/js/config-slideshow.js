/* --------------------------------------------------------------------------
 * File        : config.js
 * Version     : 1.0
 * Author      : indonez
 * Author URI  : http://www.indonez.com
 *
 * Indonez Copyright 2020 All Rights Reserved.
 * -------------------------------------------------------------------------- 
 * javascript handle initialization
    1. uikit slideshow 
 * -------------------------------------------------------------------------- */

'use strict';

let slideshowApp = {
    //----------- 1. uikit slideshow -----------
    theme_slideshow: function () {
        let slideshow = UIkit.slideshow('.in-slideshow', {
            autoplay: true,
            autoplayInterval: 7000,
            animation: 'slide',
            minHeight: 280,
            maxHeight: 480
        });
    },
    theme_init: function () {
        slideshowApp.theme_slideshow();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    slideshowApp.theme_init();
});