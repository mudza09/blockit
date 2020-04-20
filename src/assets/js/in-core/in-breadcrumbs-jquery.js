/*! in-breadcrumbs-jquery | https://github.com/sutara79/jquery.breadcrumbs-generator | Yuusaku Miyazaki | MIT License */
(function(factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        factory(require('jquery'), window);
    } else {
        factory(jQuery, window);
    }
}(function($, window) {

    $.fn.breadcrumbsGenerator = function(option) {
        return this.each(function() {
            new $.breadcrumbsGenerator(this, option);
        });
    };

    $.breadcrumbsGenerator = function(elem, option) {
        this.elem = elem;
        this.option = this._setOption(option);
        this._main();
    };

    $.extend($.breadcrumbsGenerator.prototype, {
        _setOption: function(option) {
            return $.extend({
                sitemaps: '.uk-navbar-nav',
                index_type: 'index.html'
            }, option);
        },

        _main: function() {
            var target_path = window.location.pathname.split('/').pop();
            if (target_path == '') target_path = this.option.index_type;
            var target_elem = $(this.option.sitemaps).find('a[href*="' + target_path + '"]');

            var origin_elem = $(this.elem).children();
            $(this.elem).empty();

            var self = this;
            $(target_elem)
                .parentsUntil(this.option.sitemaps)
                .filter(':has(> a[href])')
                .each(function() {
                    $('<li>')
                        .append($(this).children('a').clone())
                        .prependTo(self.elem);
                });

            $(this.elem).prepend(origin_elem);

            $(this.elem)
                .find('a[href*="' + target_path + '"]')
                .each(function() {
                    $(this).parent().html('<span>' + $(this).text() + '</span>');
                });
        }
    });
}));
$('.uk-breadcrumb').breadcrumbsGenerator();