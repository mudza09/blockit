/* --------------------------------------------------------------------------
 * File        : config-theme.js
 * Author      : indonez
 * Author URI  : http://www.indonez.com
 *
 * Indonez Copyright 2020 All Rights Reserved.
 * -------------------------------------------------------------------------- 
 * javascript handle initialization
    1. Slideshow
    2. Modal iframe
    3. Counter
    4. Breadcrumb
    5. Mobile nav button
 * -------------------------------------------------------------------------- */

'use strict';

const HomepageApp = {
    //----------- 1. Slideshow -----------
    theme_slideshow: function() {
        const slideshow = UIkit.slideshow('.in-slideshow', {
            autoplay: true,
            autoplayInterval: 7000,
            pauseOnHover: false,
            animation: 'fade',
            minHeight: 480,
            maxHeight: 700
        });
    },
    //---------- 2. Modal iframe -----------
    theme_iframe: function() {
        const iframe = iframeConfig({
            videos: [
                {
                    id: 'video-1',                                       // video id (should not be the same as the next video)
                    url: 'https://www.youtube.com/embed/OJBxNA8cX-E'     // video embed url
                },
                {
                    id: 'video-2',                                       // video id (should not be the same as the next video)
                    url: 'https://www.youtube.com/embed/QglaLzo_aPk'     // video embed url
                }
            ]
        });
    },
    //---------- 3. Counter -----------
    theme_counter: function() {
        const counter = new counterUp({
            selector: '.count',
            start: 0,
            duration: 3200,
            intvalues: true,
            interval: 50
        });
        counter.start();
    },
    //---------- 4. Breadcrumb -----------
    theme_breadcrumb: function() {
        const breadcrumb = breadcrumbConfig({
            homeTitle : 'Home',                                            // home or root of your breadcrumb title
            truncate: true,                                                // truncate option in breadcrumb article if you think to long
            truncateTotal: 80                                              // the number of words you want to truncate
        });
    },
    //---------- 5. Mobile nav button -----------
    theme_mobilenav: function() {
        const mobileButton = mobilenavConfig({
            extraButton: true,
            buttons: [
                {
                    name: 'Download',                                      // button name
                    url: 'https://github.com/Mudza09/blockit/releases',    // button url
                    type: 'primary',                                       // button type (default, primary, secondary, danger, text)
                    icon: 'cloud-download-alt'                             // button icon, you can use all icons from here : https://fontawesome.com/icons?d=gallery&s=solid&m=free
                }
            ]
        });
    },
    theme_init: function() {
        HomepageApp.theme_slideshow();
        HomepageApp.theme_iframe();
        HomepageApp.theme_counter();
        HomepageApp.theme_breadcrumb();
        HomepageApp.theme_mobilenav();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    HomepageApp.theme_init();
});