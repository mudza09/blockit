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
    theme_counter_1: function () {
        var counter = new counterUp({
            selector: '.in-counter1',
            start: 0,
            duration: 3200,
            intvalues: true,
            interval: 50
        });
        var observer = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true)
                counter.start();
        }, { threshold: [0] });
        observer.observe(document.querySelector('.in-counter1'));
        // counter.start();      
    },
    theme_counter_2: function () {
        var counter = new counterUp({
            selector: '.in-counter2',
            start: 0,
            duration: 3200,
            intvalues: true,
            interval: 50
        });
        var observer = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true)
                counter.start();
        }, { threshold: [0] });
        observer.observe(document.querySelector('.in-counter2'));    
        // counter.start();      
    },
    theme_counter_3: function () {
        var counter = new counterUp({
            selector: '.in-counter3',
            start: 0,
            duration: 3200,
            intvalues: true,
            interval: 50
        });
        var observer = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true)
                counter.start();
        }, { threshold: [0] });
        observer.observe(document.querySelector('.in-counter3'));    
        // counter.start();      
    },
    theme_counter_4: function () {
        var counter = new counterUp({
            selector: '.in-counter4',
            start: 0,
            duration: 3200,
            intvalues: true,
            interval: 50
        });
        var observer = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true)
                counter.start();
        }, { threshold: [0] });
        observer.observe(document.querySelector('.in-counter4'));    
        // counter.start();      
    },
    theme_counter_5: function () {
        var counter = new counterUp({
            selector: '.in-counter5',
            start: 0,
            duration: 3200,
            intvalues: true,
            interval: 50
        });
        var observer = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true)
                counter.start();
        }, { threshold: [0] });
        observer.observe(document.querySelector('.in-counter5'));    
        // counter.start();      
    },
    theme_counter_6: function () {
        var counter = new counterUp({
            selector: '.in-counter6',
            start: 0,
            duration: 3200,
            intvalues: true,
            interval: 50
        });
        var observer = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true)
                counter.start();
        }, { threshold: [0] });
        observer.observe(document.querySelector('.in-counter6'));    
        // counter.start();      
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