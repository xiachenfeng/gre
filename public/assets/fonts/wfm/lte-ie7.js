/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'word-fm\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-home' : '&#x77;&#x66;&#x6d;&#x2d;&#x68;&#x6f;&#x6d;&#x65;',
			'icon-broadcast' : '&#x77;&#x66;&#x6d;&#x2d;&#x69;&#x6e;&#x74;&#x65;&#x72;&#x6e;&#x65;&#x74;',
			'icon-loading' : '&#x77;&#x66;&#x6d;&#x2d;&#x6c;&#x6f;&#x61;&#x64;&#x69;&#x6e;&#x67;',
			'icon-neutral' : '&#x77;&#x66;&#x6d;&#x2d;&#x6e;&#x6f;',
			'icon-heart' : '&#x77;&#x66;&#x6d;&#x2d;&#x6c;&#x69;&#x6b;&#x65;',
			'icon-monitor' : '&#x77;&#x66;&#x6d;&#x2d;&#x64;&#x65;&#x73;&#x6b;&#x74;&#x6f;&#x70;',
			'icon-mobile' : '&#x77;&#x66;&#x6d;&#x2d;&#x6d;&#x6f;&#x62;&#x69;&#x6c;&#x65;',
			'icon-coffee' : '&#x77;&#x66;&#x6d;&#x2d;&#x63;&#x6f;&#x66;&#x66;&#x65;&#x65;',
			'icon-smiley' : '&#x77;&#x66;&#x6d;&#x2d;&#x79;&#x65;&#x73;',
			'icon-shit' : '&#x77;&#x66;&#x6d;&#x2d;&#x73;&#x68;&#x69;&#x74;',
			'icon-sun' : '&#x77;&#x66;&#x6d;&#x2d;&#x6c;&#x69;&#x67;&#x68;&#x74;',
			'icon-moon' : '&#x77;&#x66;&#x6d;&#x2d;&#x64;&#x61;&#x72;&#x6b;',
			'icon-check-alt' : '&#x77;&#x66;&#x6d;&#x2d;&#x72;&#x69;&#x67;&#x68;&#x74;',
			'icon-x-altx-alt' : '&#x77;&#x66;&#x6d;&#x2d;&#x77;&#x72;&#x6f;&#x6e;&#x67;',
			'icon-magnifying-glass' : '&#x77;&#x66;&#x6d;&#x2d;&#x73;&#x65;&#x61;&#x72;&#x63;&#x68;',
			'icon-arrow-right-alt1' : '&#x77;&#x66;&#x6d;&#x2d;&#x6e;&#x65;&#x78;&#x74;',
			'icon-info' : '&#x77;&#x66;&#x6d;&#x2d;&#x69;&#x6e;&#x66;&#x6f;',
			'icon-layers' : '&#x77;&#x66;&#x6d;&#x2d;&#x73;&#x65;&#x63;&#x74;&#x69;&#x6f;&#x6e;&#x73;',
			'icon-stats-up' : '&#x77;&#x66;&#x6d;&#x2d;&#x70;&#x65;&#x72;&#x66;&#x6f;&#x72;&#x6d;&#x61;&#x6e;&#x63;&#x65;',
			'icon-help' : '&#x77;&#x66;&#x6d;&#x2d;&#x68;&#x65;&#x6c;&#x70;',
			'icon-bug' : '&#x77;&#x66;&#x6d;&#x2d;&#x62;&#x75;&#x67;',
			'icon-wrench' : '&#x77;&#x66;&#x6d;&#x2d;&#x73;&#x65;&#x74;&#x74;&#x69;&#x6e;&#x67;&#x73;',
			'icon-refresh' : '&#x77;&#x66;&#x6d;&#x2d;&#x72;&#x65;&#x6c;&#x6f;&#x61;&#x64;',
			'icon-lamp' : '&#x77;&#x66;&#x6d;&#x2d;&#x6c;&#x61;&#x6d;&#x70;',
			'icon-calendar' : '&#x77;&#x66;&#x6d;&#x2d;&#x63;&#x61;&#x6c;&#x65;&#x6e;&#x64;&#x61;&#x72;',
			'icon-music' : '&#x77;&#x66;&#x6d;&#x2d;&#x6d;&#x75;&#x73;&#x69;&#x63;',
			'icon-share' : '&#x77;&#x66;&#x6d;&#x2d;&#x73;&#x6f;&#x63;&#x69;&#x61;&#x6c;',
			'icon-mail' : '&#x77;&#x66;&#x6d;&#x2d;&#x65;&#x6d;&#x61;&#x69;&#x6c;',
			'icon-flag' : '&#x77;&#x66;&#x6d;&#x2d;&#x66;&#x69;&#x6e;&#x69;&#x73;&#x68;&#x65;&#x64;',
			'icon-left-quote' : '&#x77;&#x66;&#x6d;&#x2d;&#x71;&#x75;&#x6f;&#x74;&#x65;&#x2d;&#x6c;',
			'icon-right-quote' : '&#x77;&#x66;&#x6d;&#x2d;&#x71;&#x75;&#x6f;&#x74;&#x65;&#x2d;&#x72;',
			'icon-moon-fill' : '&#x77;&#x66;&#x6d;&#x2d;&#x6d;&#x6f;&#x6f;&#x6e;',
			'icon-play' : '&#x77;&#x66;&#x6d;&#x2d;&#x70;&#x6c;&#x61;&#x79;',
			'icon-pause' : '&#x77;&#x66;&#x6d;&#x2d;&#x70;&#x61;&#x75;&#x73;&#x65;'
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
		c = c.match(/icon-[^\s'"]+/);
		if (c) {
			addIcon(el, icons[c[0]]);
		}
	}
};