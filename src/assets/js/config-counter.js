/* --------------------------------------------------------------------------
 * File        : config-counter.js
 * Version     : 1.0
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
 * -------------------------------------------------------------------------- */

'use strict';

let counterApp = {
    //---------- 1. Counter config 1 -----------
    theme_counter_1: function () {
        var counter = new counterUp({
            selector: '.count-1',
            start: 0,
            duration: 3200,
            intvalues: true,
            interval: 50
        });
        var observer = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true)
                counter.start();
        }, { threshold: [0] });
        observer.observe(document.querySelector('.count-1'));
    },
    //---------- 2. Counter config 2 -----------
    theme_counter_2: function () {
        var counter = new counterUp({
            selector: '.count-2',
            start: 0,
            duration: 3200,
            intvalues: true,
            interval: 50
        });
        var observer = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true)
                counter.start();
        }, { threshold: [0] });
        observer.observe(document.querySelector('.count-2'));  
    },
    //---------- 3. Counter config 3 -----------
    theme_counter_3: function () {
        var counter = new counterUp({
            selector: '.count-3',
            start: 0,
            duration: 3200,
            intvalues: true,
            interval: 50
        });
        var observer = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true)
                counter.start();
        }, { threshold: [0] });
        observer.observe(document.querySelector('.count-3'));  
    },
    //---------- 4. Counter config 4 -----------
    theme_counter_4: function () {
        var counter = new counterUp({
            selector: '.count-4',
            start: 0,
            duration: 3200,
            intvalues: true,
            interval: 50
        });
        var observer = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true)
                counter.start();
        }, { threshold: [0] });
        observer.observe(document.querySelector('.count-4'));    
    },
    //---------- 5. Counter config 5 -----------
    theme_counter_5: function () {
        var counter = new counterUp({
            selector: '.count-5',
            start: 0,
            duration: 3200,
            intvalues: true,
            interval: 50
        });
        var observer = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true)
                counter.start();
        }, { threshold: [0] });
        observer.observe(document.querySelector('.count-5'));   
    },
    //---------- 6. Counter config 6 -----------
    theme_counter_6: function () {
        var counter = new counterUp({
            selector: '.count-6',
            start: 0,
            duration: 3200,
            intvalues: true,
            interval: 50
        });
        var observer = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true)
                counter.start();
        }, { threshold: [0] });
        observer.observe(document.querySelector('.count-6'));   
    },
    // theme init
    theme_init: function () {
        counterApp.theme_counter_1();
        counterApp.theme_counter_2();
        counterApp.theme_counter_3();
        counterApp.theme_counter_4();
        counterApp.theme_counter_5();
        counterApp.theme_counter_6();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    counterApp.theme_init();
});