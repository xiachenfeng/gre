/*
 * app.js
 * Copyright (C) 2012 blurrcat <blurrcat@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
var DEBUG = true;
(function ($, document, Lawnchair) {
    "use strict";
    /*
    App log
     */
    /*
    Go page actions
     */
    function GoPage(states, config) {
        var $go = $("#go");
        function get_lists() {
            var cur_list_id = states.current_list_id,
                result = [],
                i,
                temp;
            for (i = 0; i < config.intervals.length; i++) {
                temp = cur_list_id - config.intervals[i];
                if (temp >= 0) {
                    result.push(temp + 1);
                }
            }
            return result;
        }
        // find out which lists should go in this session
        this.show_lists = function () {
            var dialog = ich.go_list_tpl({
                lists: get_lists().join(", ")
            });
        };


    }
    /*
    JQM handling
     */
    $(document).bind("mobileinit", function () {
        $.mobile.allowCrossDomainPages = true;
        $.mobile.defaultPageTransition = "slide";
        $.mobile.page.prototype.options.addBackBtn = true;
        $.mobile.page.prototype.options.headerTheme = "d";
        $.mobile.page.prototype.options.footerTheme = "d";
        $.mobile.dialog.prototype.options.headerTheme = "d";
        $.mobile.listview.prototype.options.dividerTheme = "d";
    });
    // install app
    if ($.jStorage.get("installed")) {
        console.log("App Installed!");
    } else {
        $.jStorage.flush();
        console.log("App first load; Loading dictionary..");
        $.jStorage.set("states", {
            current_list_id: 0,
            finished_lists: []
        });
        $.jStorage.set("config", {
            intervals: [0, 1, 2, 4]
        });
        $.getJSON("data/words.json", function (data) {
            var list_num = data.list_count, i, j, l, name, list, word_dict;
            for (i = 0; i < list_num; i++) {
                name = "list_" + i;
                list = data[name];
                word_dict = {
                    "_seen": false,
                    "_last_seen": null
                };
                for (j = 0, l = list.length; j < l; j++) {
                    word_dict[list[j][0]] = {
                        "def_cn": list[j][1],
                        "_seen": 0
                    };
                }
                $.jStorage.set(name, word_dict);
            }
            $.jStorage.set("installed", true);
            console.log("Dict loaded(" +
                $.jStorage.storageSize() / 1024 + "kb)");
        });
    }

    $(document).bind("pagebeforechange", function (e, data) {
        // inject word definitions
        if (typeof data.toPage === "string") {
            var url = $.mobile.path.parseUrl(data.toPage);
            if (url.hash === "#go/") {

            }
        }
    });

}(jQuery, document, ich));
