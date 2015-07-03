// ==UserScript==
// @name          Flat Darkness Hack Forums Theme
// @namespace     https://github.com/iHydra
// @version       0.0.8
// @description   Custom theme for Hack Forums. Base theme by Sasori.
// @updateURL     https://github.com/iHydra/flatdarkness/raw/master/flatdarkness.meta.js
// @downloadURL   https://github.com/iHydra/flatdarkness/raw/master/flatdarkness.user.js
// @include       http://www.hackforums.net/*
// @include       http://hackforums.net/*
// @include       http://nsfw.hackforums.net/*
// @include       http://www.nsfw.hackforums.net/*
// @author        iHydra/Kondax/Sasori
// @resource      MainCSS https://github.com/iHydra/flatdarkness/raw/master/stylesheet_v.0.0.8.css
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


var MainCSS = GM_getResourceText ("MainCSS");
GM_addStyle (MainCSS);

$(window).load(function(){
    var cp = $("<div class='cp'/>");
    var select = $("<div class='select'/>");
    $("body").append(cp, select);
    var colours = {'black':'#393939', 'blue':'#619ECB', 'green':'#7ECB61', 'orange':'#D29C2D', 'purple':'#724FAD', 'red':'#CB6161'};
    if(!localStorage.getItem('theme')) 
    	localStorage.setItem('theme', 'cl-' + Object.keys(colours)[0]);
    $("body").addClass(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'cl-' + Object.keys(colours)[0]);
    $(".cp").css("background", colours[$("body").attr('class').split(" ")[0].substring(3, $("body").attr('class').split(" ")[0].length)]);
    $.each(colours, function(key, value) {
        select.append($("<div class='part' style='background: " + value + " !important;' cid='" + key + "'/>"));
    });
    $(".cp").click(function(){
        $(".select").toggleClass("show");
    });
    $(".part").click(function(){
        var cl = "cl-" + $(this).attr('cid');
        $(".cp").css("background", colours[$(this).attr('cid')]);
        $("body").alterClass('cl-*', cl);
        localStorage.setItem('theme', cl);
    });
});

/*
 *Javascript Editing
 */

$(document).ready(function(){
    $('span:contains("Moderated")').addClass("sevenpad");
});

$(document).ready(function(){
    $('link[href*="star_ratings"]').remove();
});

$(document).ready(function(){
    $('#pm_notice').removeClass("pm_alert").addClass("pm_alert2");
});

$(document).ready(function(){
    $('.button').removeClass("button").addClass("button2");
});
