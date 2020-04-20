/* --------------------------------------------------------------------------
 * File        : config-counter.js
 * Version     : 1.0
 * Author      : indonez
 * Author URI  : http://www.indonez.com
 *
 * Indonez Copyright 2020 All Rights Reserved.
 * -------------------------------------------------------------------------- 
 * javascript handle initialization
    1. Counter config
 * -------------------------------------------------------------------------- */

'use strict';

let counterApp = {
    //---------- 1. Counter config -----------
    theme_counter: function () {
        var counter = new counterUp({
            start: 0,
            duration: 2000,
            intvalues: true,
            interval: 50
        });
        counter.start();
    },
    // theme init
    theme_init: function () {
        counterApp.theme_counter();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    counterApp.theme_init();
});