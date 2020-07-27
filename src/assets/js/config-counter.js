/* --------------------------------------------------------------------------
 * File        : config-counter.js
 * Author      : indonez
 * Author URI  : http://www.indonez.com
 *
 * Indonez Copyright 2020 All Rights Reserved.
 * -------------------------------------------------------------------------- 
 * javascript handle initialization
    1. Counter config 1
    2. Counter config 2
    3. Counter config 3
    4. Counter config 4
    5. Counter config 5
    6. Counter config 6
    7. Counter config 7
 * -------------------------------------------------------------------------- */

'use strict';

let counterApp = {
    //---------- 1. Counter config 1 -----------
    theme_counter_1: function () {
        let counter = new counterUp({
            selector: '.count-1',
            start: 0,
            duration: 3200,
            intvalues: true,
            interval: 50
        });
        counter.start();
    },
    //---------- 2. Counter config 2 -----------
    theme_counter_2: function () {
        let counter = new counterUp({
            selector: '.count-2',
            start: 0,
            duration: 3200,
            intvalues: true,
            interval: 50
        });
        counter.start();
    },
    //---------- 3. Counter config 3 -----------
    theme_counter_3: function () {
        let counter = new counterUp({
            selector: '.count-3',
            start: 0,
            duration: 3200,
            intvalues: true,
            interval: 50
        });
        counter.start();
    },
    //---------- 4. Counter config 4 -----------
    theme_counter_4: function () {
        let counter = new counterUp({
            selector: '.count-4',
            start: 0,
            duration: 3200,
            intvalues: true,
            interval: 50
        });
        counter.start();
    },
    //---------- 5. Counter config 5 -----------
    theme_counter_5: function () {
        let counter = new counterUp({
            selector: '.count-5',
            start: 0,
            duration: 3200,
            intvalues: true,
            interval: 50
        });
        counter.start();
    },
    //---------- 6. Counter config 6 -----------
    theme_counter_6: function () {
        let counter = new counterUp({
            selector: '.count-6',
            start: 0,
            duration: 3200,
            intvalues: true,
            interval: 50
        });
        counter.start();
    },
    //---------- 7. Counter config 7 -----------
    theme_counter_7: function () {
        let counter = new counterUp({
            selector: '.count-7',
            start: 0,
            duration: 3200,
            intvalues: true,
            interval: 50
        });
        counter.start();
    },
    // theme init
    theme_init: function () {
        counterApp.theme_counter_1();
        counterApp.theme_counter_2();
        counterApp.theme_counter_3();
        counterApp.theme_counter_4();
        counterApp.theme_counter_5();
        counterApp.theme_counter_6();
        counterApp.theme_counter_7();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    counterApp.theme_init();
});