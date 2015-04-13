// ==UserScript==
// @name          Flat Darkness Hack Forums Theme
// @namespace     https://github.com/TaylerKing
// @version       0.0.3
// @description   Custom theme for Hack Forums. Base theme by Sasori.
// @updateURL     https://raw.githubusercontent.com/iHydra/flatdarkness/master/flatdarkness.meta.js
// @downloadURL   https://raw.githubusercontent.com/iHydra/flatdarkness/master/flatdarkness.user.js
// @include       http://www.hackforums.net/*
// @include       http://hackforums.net/*
// @include       http://nsfw.hackforums.net/*
// @include       http://www.nsfw.hackforums.net/*
// @author        iHydra/Kondax/Sasori
// @resource      CustomCSS https://raw.githubusercontent.com/TaylerKing/flatdarkness/master/stylesheet_v.0.0.3.css
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// @grant         GM_addStyle
// @grant         GM_getResourceText
// @run-at        document-start
// ==/UserScript==
/*
 * Copyright (c) 2011 Pete Boere (the-echoplex.net)
 * Free under terms of the MIT license: http://www.opensource.org/licenses/mit-license.php
 */
(function ( $ ) {
$.fn.alterClass = function ( removals, additions ) {
	var self = this;
	if ( removals.indexOf( '*' ) === -1 ) {
		self.removeClass( removals );
		return !additions ? self : self.addClass( additions );
	}
	var patt = new RegExp( '\\s' + 
			removals.
				replace( /\*/g, '[A-Za-z0-9-_]+' ).
				split( ' ' ).
				join( '\\s|\\s' ) + 
			'\\s', 'g' );
	self.each( function ( i, it ) {
		var cn = ' ' + it.className + ' ';
		while ( patt.test( cn ) ) {
			cn = cn.replace( patt, ' ' );
		}
		it.className = $.trim( cn );
	});
	return !additions ? self : self.addClass( additions );
};
})( jQuery );

/*
 * Document Begins
 */
var ThemeCSS = GM_getResourceText ("CustomCSS");
GM_addStyle (ThemeCSS);
$(window).load(function(){
    var cp = $("<div class='cp'/>");
    var select = $("<div class='select'/>");
    $("body").append(cp, select);
    var colours = {'black': '#000', 'white': '#fff', 'blue': '#0C8CE8'};
    $("body").addClass(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'cl-' + Object.keys(colours)[0]);
    $.each(colours, function(key, value) {
        select.append($("<div class='part' style='background: " + value + " !important;' cid='" + key + "'/>"));
    });
    $(".cp").click(function(){
        $(".select").toggleClass("show");
    });
    $(".part").click(function(){
        var cl = "cl-" + $(this).attr('cid');
        $("body").alterClass('cl-*', cl);
        localStorage.setItem('theme', cl);
    });
});
