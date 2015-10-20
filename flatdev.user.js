// ==UserScript==
// @name          Flat Darkness - Development
// @namespace     https://github.com/iHydra
// @version       DEV 1.5.0
// @description   Custom theme for Hack Forums. Base theme by Sasori.
// @include       http://www.hackforums.net/*
// @include       http://hackforums.net/*
// @author        iHydra/Kondax/Sasori
// @require       https://code.jquery.com/jquery-2.1.4.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.8.0/highlight.min.js
// @resource      MainCSS https://github.com/iHydra/flatdarkness/raw/master/stylesheet_dev.css?v=0519
// @resource      HLCSS https://github.com/isagalaev/highlight.js/raw/master/src/styles/monokai_sublime.css 
// @grant         GM_addStyle
// @grant         GM_getResourceText
// @run-at        document-start
// ==/UserScript==

/* INFORMATION - READ */
// You can change Highlighter Theme: https://github.com/isagalaev/highlight.js/tree/master/src/styles || Demo of Themes: https://highlightjs.org/static/demo/
// You can change the preview button shortcut key if you scroll down to USER EDITING.

/*
 * Copyright (c) 2011 Pete Boere (the-echoplex.net)
 * Free under terms of the MIT license: http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {
  $.fn.alterClass = function (removals, additions) {
    var self = this;
    if (removals.indexOf('*') === - 1) {
      self.removeClass(removals);
      return !additions ? self : self.addClass(additions);
    }
    var patt = new RegExp('\\s' +
    removals.replace(/\*/g, '[A-Za-z0-9-_]+').split(' ').join('\\s|\\s') +
    '\\s', 'g');
    self.each(function (i, it) {
      var cn = ' ' + it.className + ' ';
      while (patt.test(cn)) {
        cn = cn.replace(patt, ' ');
      }
      it.className = $.trim(cn);
    });
    return !additions ? self : self.addClass(additions);
  };
}) (jQuery);

var MainCSS = GM_getResourceText('MainCSS');
GM_addStyle(MainCSS);
var HLCSS = GM_getResourceText('HLCSS');
GM_addStyle(HLCSS);

/*
 * USER EDITING
 */

$(document).ready(function () {
     $('.button2[name="previewpost"]').attr('accesskey', 'w'); // CHANGE "W" TO KEY YOU PREFER - Chrome Only                  
});

/*
 * END OF USER EDITING
 */

$(window).load(function () { // Theme Color Scheme Changer
  var cp = $('<div class=\'cp\'/>');
  var select = $('<div class=\'select\'/>');
  $('body').append(cp, select);
  var colours = {
    'black': '#393939',
    'blue': '#619ECB',
    'green': '#7ECB61',
    'orange': '#D29C2D',
    'purple': '#724FAD',
    'red': '#CB6161',
    'darkblue': '#00528f',
    'darkgreen': '#35713F',
    'darkorange': '#9A782E',
    'darkpurple': '#4D2D5E',
    'darkred': '#641C1C'
  };
  if (!localStorage.getItem('theme'))
  localStorage.setItem('theme', 'cl-' + Object.keys(colours) [0]);
  $('body').addClass(localStorage.getItem('theme') ? localStorage.getItem('theme')  : 'cl-' + Object.keys(colours) [0]);
  $('.cp').css('background', colours[$('body').attr('class').split(' ') [0].substring(3, $('body').attr('class').split(' ') [0].length)]);
  $.each(colours, function (key, value) {
    select.append($('<div class=\'part\' style=\'background: ' + value + ' !important;\' cid=\'' + key + '\'/>'));
  });
  $('.cp').click(function () {
    $('.select').toggleClass('show');
  });
  $('.part').click(function () {
    var cl = 'cl-' + $(this).attr('cid');
    $('.cp').css('background', colours[$(this).attr('cid')]);
    $('body').alterClass('cl-*', cl);
    localStorage.setItem('theme', cl);
  });
});

/** Custom Functions **/

  $(document).ready(function() { // Highlight Syntax
  $('code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});

copyLink = function (element) { // Working on adding a copy url for Post # links
    var $temp = $("<input />");
    $("body").append($temp);
    $temp.val($(element).attr('href')).select();
    var result = false;
    try {
        result = document.execCommand("copy");
        console.log("Copy Success? " + result);
    } catch (err) {
        console.log("Copy error: " + err);
    }

    $temp.remove();
    return result;
}


/*
 * CSS Modification (jQuery/jS for multi-browser support)
 */

$(document).ready(function () {
  $('img[src$="hackforums.net/images/modern_bl/starstaff.png"]').attr('style', 'filter: hue-rotate(5deg) saturate(8); -webkit-filter: hue-rotate(5deg) saturate(8)'); // Staff Stars Color Change
  $('img[src$="hackforums.net/images/modern_bl/dismiss_notice.gif"]').attr('src', 'http://i.imgur.com/uxvQQDI.png'); // PM Notif Dismiss Icon
  $('img[src$="hackforums.net/images/modern_bl/add_buddy.gif"]').attr('src', 'http://i.imgur.com/3d5FKNX.png'); // Add Buddy Icon
  $('img[src$="hackforums.net/images/modern_bl/remove_buddy.gif"]').attr('src', 'http://i.imgur.com/zDwBkq5.png'); // Remove Buddy Icon
  $('img[src$="hackforums.net/images/modern_bl/add_ignore.gif"]').attr('src', 'http://i.imgur.com/u3NZbDu.png'); // Add Ignore Icon
  $('img[src$="hackforums.net/images/modern_bl/remove_ignore.gif"]').attr('src', 'http://i.imgur.com/zDwBkq5.png'); // Remove Ignore Icon
  $('img[src$="/img/disable.png"]').attr('src', 'http://i.imgur.com/LXGekE9.png'); // Disable icon for multi-page loader userscript(not included)
  $('img[src$="/img/enable.png"]').attr('src', 'http://i.imgur.com/YHDATSF.png'); // Enable icon for multi-page loader userscript(not included)
  $('img[src$="hackforums.net/images/modern_bl/minioff.gif"]').attr('src', 'http://i.imgur.com/AP6vLRo.png').attr('style', 'padding-bottom: 2px;'); // No Posts SF Icon
  $('img[src$="hackforums.net/images/modern_bl/miniofflock.gif"]').attr('src', 'http://i.imgur.com/AP6vLRo.png').attr('style', 'padding-bottom: 2px;'); // No Posts SF Icon Locked
  $('img[src$="hackforums.net/images/modern_bl/minion.gif"]').attr('src', 'http://i.imgur.com/Wsl1Gfc.png').attr('style', 'padding-bottom: 3px;'); // New Posts SF icon
  $('img[src$="http://hackforums.net/images/modern_bl/spinner_big.gif"]').attr('src', 'http://i.imgur.com/y3wDcUA.gif'); // Quick Reply Spinner Change
  $('span:contains("Moderated")').addClass('sevenpad'); // Padding fix
  $('link[href*="star_ratings"]').remove(); // Star Ratings Change
  $('#pm_notice').removeClass('pm_alert').addClass('pm_alert2'); // Group vs. PM Alert
  $('.button').removeClass('button').addClass('button2'); // Button fix
  $('div[id="quickreply_multiquote"]').remove(); // Remove Multiquote - Disabled by Omni and it's showing because of some CSS changes
    
  if(window.location.href == "http://hackforums.net/misc.php?action=buddypopup"){ // Buddy List Online Status Fix
      $('img[src$="hackforums.net/images/modern_bl/buddy_away.gif"]').attr('src', 'http://i.imgur.com/x7dAaGE.png').attr('style', ''); // Away Status
      $('img[src$="hackforums.net/images/modern_bl/buddy_online.gif"]').attr('src', 'http://i.imgur.com/lpKaTIB.png').attr('style', ''); // Online Status
      $('img[src$="hackforums.net/images/modern_bl/buddy_offline.gif"]').attr('src', 'http://i.imgur.com/EKt4fXk.png').attr('style', ''); // Offline Status  
  }else if(window.location.href == "http://hackforums.net/usercp.php?action=editlists"){
      $('img[src$="hackforums.net/images/modern_bl/buddy_away.gif"]').attr('src', 'http://i.imgur.com/x7dAaGE.png').attr('style', ''); // Away Status
      $('img[src$="hackforums.net/images/modern_bl/buddy_online.gif"]').attr('src', 'http://i.imgur.com/lpKaTIB.png').attr('style', ''); // Online Status
      $('img[src$="hackforums.net/images/modern_bl/buddy_offline.gif"]').attr('src', 'http://i.imgur.com/EKt4fXk.png').attr('style', ''); // Offline Status  
  }else{
      $('img[src$="hackforums.net/images/modern_bl/buddy_away.gif"]').attr('src', 'http://i.imgur.com/x7dAaGE.png').attr('style', 'position: absolute; padding-top: 4px;'); // Away Status
      $('img[src$="hackforums.net/images/modern_bl/buddy_online.gif"]').attr('src', 'http://i.imgur.com/lpKaTIB.png').attr('style', 'position: absolute; padding-top: 4px;'); // Online Status
      $('img[src$="hackforums.net/images/modern_bl/buddy_offline.gif"]').attr('src', 'http://i.imgur.com/EKt4fXk.png').attr('style', 'position: absolute; padding-top: 4px;'); // Offline Status
  }

  if(window.location.href == "http://hackforums.net/gauth.php"){
      $('span[class="float_right smalltext"]').attr('style','display: block !important'); // Gauth Reset Link Reveal
  }
    
  if(window.location.pathname == "/reputation.php"){
      $('a[href$="&show=positive"]').attr('style','font-size: 14px; background-color: #2DA546; border: 1px solid #2CC330; padding: 5px 10px 5px 10px; font-weight: bold; color: white;').after("<br/>"); // Positive Rep Box
      $('a[href$="&show=neutral"]').attr('style','font-size: 14px; background-color: #777777; border: 1px solid #949494; padding: 5px 10px 5px 10px; font-weight: bold; color: white;').after("<br/>"); // Neutral Rep Box
      $('a[href$="&show=negative"]').attr('style','font-size: 14px; background-color: #CC4444; border: 1px solid #FF5656; padding: 5px 10px 5px 10px; font-weight: bold; color: white;'); // Negative Rep Box
      $('strong[class="reputation_positive"]:contains("Positives")').remove(); // Legend Text Remove
      $('strong[class="reputation_neutral"]:contains("Neutrals")').remove(); // Legend Text Remove
      $('strong[class="reputation_negative"]:contains("Negatives")').remove(); // Legend Text Remove
      $('span[class="smalltext"]:contains("Total Reputation:")').find("br").remove(); // Received Rep Boxes Layout
      $('strong:contains("Total Reputation:")').before("<br/><br/>"); // Received Rep Boxes Layout
      $('span[class="repbox _plus"]').after("<br/><br/>"); // Received Rep Boxes Layout
  }

  $('img[src$="hackforums.net/images/modern_bl/groupimages/english/ub3r.png"]').attr('style', '-webkit-filter: hue-rotate(15deg); filter: hue-rotate(15deg);'); // Uber Userbar Color Change
  $('img[src$="hackforums.net/images/modern_bl/starub3r2.png"]').attr('style', '-webkit-filter: hue-rotate(15deg); filter: hue-rotate(15deg);'); // Uber Stars Color Change
  $('strong span[style="rgb(56, 56, 56)"]').addClass("closedGroup"); // Changes Closed Usergroup Color
  $('strong:contains("Post:") > a[href^="showthread.php?tid="]').attr('id','postLink').attr('style','padding-top: 3px; padding-right: 5px; display: inline-block;'); // Post # Centered  
  
});
