/*
 * app.js
 * Copyright (C) 2012 blurrcat <blurrcat@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

(function ($) {
    $(document).bind("mobileinit", function() {
        $.mobile.allowCrossDomainPages = true;
        $.mobile.defaultPageTransition = "slide";
        $.mobile.page.prototype.options.addBackBtn = true;
        $.mobile.page.prototype.options.headerTheme = "d";
        $.mobile.page.prototype.options.footerTheme = "d";
        $.mobile.dialog.prototype.options.headerTheme = "d";
        $.mobile.listview.prototype.options.dividerTheme = "d";
    });

}(jQuery));
