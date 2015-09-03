// ==UserScript==
// @name          Flat Darkness Development
// @namespace     https://github.com/iHydra
// @version       0.1.3
// @description   Custom theme for Hack Forums. Base theme by Sasori.
// @downloadURL   https://github.com/iHydra/flatdarkness/raw/master/flatdev.user.js
// @include       http://www.hackforums.net/*
// @include       http://hackforums.net/*
// @author        iHydra/Kondax/Sasori
// @resource      MainCSS https://github.com/iHydra/flatdarkness/raw/master/stylesheet_test.css?v=014
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
 * CSS Modification (jQuery/jS for multi-browser support)
 */

$(document).ready(function() {
	$('img[src$="hackforums.net/images/modern_bl/starstaff.png"]').attr('style','filter: hue-rotate(5deg) saturate(8); -webkit-filter: hue-rotate(5deg) saturate(8)');
	$('img[src$="hackforums.net/images/modern_bl/dismiss_notice.gif"]').attr('src','http://i.imgur.com/uxvQQDI.png');
	$('img[src$="hackforums.net/images/modern_bl/add_buddy.gif"]').attr('src','http://i.imgur.com/3d5FKNX.png');
	$('img[src$="hackforums.net/images/modern_bl/remove_buddy.gif"]').attr('src','http://i.imgur.com/zDwBkq5.png');
	$('img[src$="hackforums.net/images/modern_bl/add_ignore.gif"]').attr('src','http://i.imgur.com/u3NZbDu.png');
	$('img[src$="hackforums.net/images/modern_bl/remove_ignore.gif"]').attr('src','http://i.imgur.com/zDwBkq5.png');
	$('img[src$="/img/disable.png"]').attr('src','http://i.imgur.com/LXGekE9.png');
	$('img[src$="/img/enable.png"]').attr('src','http://i.imgur.com/YHDATSF.png');
	$('img[src$="hackforums.net/images/modern_bl/minioff.gif"]').attr('src','http://i.imgur.com/AP6vLRo.png').attr('style','padding-bottom: 2px;');
	$('img[src$="hackforums.net/images/modern_bl/miniofflock.gif"]').attr('src','http://i.imgur.com/AP6vLRo.png').attr('style','padding-bottom: 2px;');
	$('img[src$="http://hackforums.net/images/modern_bl/minion.gif"]').attr('src','http://i.imgur.com/Wsl1Gfc.png').attr('style','padding-bottom: 3px;');
	$('img[src$="hackforums.net/images/modern_bl/spinner_big.gif"]').attr('src','http://i.imgur.com/y3wDcUA.gif');
    $('span:contains("Moderated")').addClass("sevenpad");
    $('link[href*="star_ratings"]').remove();
    $('#pm_notice').removeClass("pm_alert").addClass("pm_alert2");
    $('.button').removeClass("button").addClass("button2");
});


/*
 * Javascript Editing
 */

$(document).ready(function(){
    $('.button2[name="previewpost"]').attr('accesskey','w'); // CHANGE "W" TO KEY YOU PREFER
    $('#quickreply_multiquote').remove(); // Removes MyBB Multiquote in quickreply - Disabled by Omni
});
