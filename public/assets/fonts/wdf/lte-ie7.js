/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'word-fm\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-wfm-home' : '&#x68;&#x6f;&#x6d;&#x65;',
			'icon-wfm-broadcast' : '&#x69;&#x6e;&#x74;&#x65;&#x72;&#x6e;&#x65;&#x74;',
			'icon-wfm-loading' : '&#x6c;&#x6f;&#x61;&#x64;&#x69;&#x6e;&#x67;',
			'icon-wfm-neutral' : '&#x6e;&#x6f;',
			'icon-wfm-heart' : '&#x6c;&#x69;&#x6b;&#x65;',
			'icon-wfm-monitor' : '&#x64;&#x65;&#x73;&#x6b;&#x74;&#x6f;&#x70;',
			'icon-wfm-mobile' : '&#x6d;&#x6f;&#x62;&#x69;&#x6c;&#x65;',
			'icon-wfm-coffee' : '&#x63;&#x6f;&#x66;&#x66;&#x65;&#x65;',
			'icon-wfm-smiley' : '&#x79;&#x65;&#x73;',
			'icon-wfm-shit' : '&#x73;&#x68;&#x69;&#x74;',
			'icon-wfm-sun' : '&#x6c;&#x69;&#x67;&#x68;&#x74;',
			'icon-wfm-moon' : '&#x64;&#x61;&#x72;&#x6b;',
			'icon-wfm-check-alt' : '&#x72;&#x69;&#x67;&#x68;&#x74;',
			'icon-wfm-x-altx-alt' : '&#x77;&#x72;&#x6f;&#x6e;&#x67;',
			'icon-wfm-magnifying-glass' : '&#x73;&#x65;&#x61;&#x72;&#x63;&#x68;',
			'icon-wfm-arrow-right-alt1' : '&#x6e;&#x65;&#x78;&#x74;',
			'icon-wfm-info' : '&#x69;&#x6e;&#x66;&#x6f;',
			'icon-wfm-layers' : '&#x73;&#x65;&#x63;&#x74;&#x69;&#x6f;&#x6e;&#x73;',
			'icon-wfm-stats-up' : '&#x70;&#x65;&#x72;&#x66;&#x6f;&#x72;&#x6d;&#x61;&#x6e;&#x63;&#x65;',
			'icon-wfm-help' : '&#x68;&#x65;&#x6c;&#x70;',
			'icon-wfm-bug' : '&#x62;&#x75;&#x67;',
			'icon-wfm-wrench' : '&#x73;&#x65;&#x74;&#x74;&#x69;&#x6e;&#x67;&#x73;',
			'icon-wfm-refresh' : '&#x72;&#x65;&#x6c;&#x6f;&#x61;&#x64;',
			'icon-wfm-lamp' : '&#x6c;&#x61;&#x6d;&#x70;',
			'icon-wfm-clipboard' : '&#x6e;&#x6f;&#x74;&#x65;&#x62;&#x6f;&#x6f;&#x6b;',
			'icon-wfm-clipboard-2' : '&#x6e;&#x6f;&#x74;&#x65;&#x62;&#x6f;&#x6f;&#x6b;&#x32;',
			'icon-wfm-calendar' : '&#x63;&#x61;&#x6c;&#x65;&#x6e;&#x64;&#x61;&#x72;',
			'icon-wfm-music' : '&#x6d;&#x75;&#x73;&#x69;&#x63;',
			'icon-wfm-share' : '&#x73;&#x6f;&#x63;&#x69;&#x61;&#x6c;',
			'icon-wfm-mail' : '&#x65;&#x6d;&#x61;&#x69;&#x6c;',
			'icon-wfm-flag' : '&#x66;&#x69;&#x6e;&#x69;&#x73;&#x68;&#x65;&#x64;',
			'icon-wfm-left-quote' : '&#x71;&#x75;&#x6f;&#x74;&#x65;&#x2d;&#x6c;',
			'icon-wfm-right-quote' : '&#x71;&#x75;&#x6f;&#x74;&#x65;&#x2d;&#x72;',
			'icon-wfm-moon-fill' : '&#x6d;&#x6f;&#x6f;&#x6e;',
			'icon-wfm-play' : '&#x70;&#x6c;&#x61;&#x79;',
			'icon-wfm-pause' : '&#x70;&#x61;&#x75;&#x73;&#x65;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-wfm-[^\s'"]+/);
		if (c) {
			addIcon(el, icons[c[0]]);
		}
	}
};