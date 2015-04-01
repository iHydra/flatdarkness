// ==UserScript==
// @name          Flat Darkness Hack Forums Theme
// @namespace     https://github.com/iHydra
// @version       1.1.4
// @description   Custom theme for Hack Forums.
// @updateURL     https://raw.githubusercontent.com/iHydra/flatdarkness/master/flatdarkness.meta.js
// @downloadURL   https://raw.githubusercontent.com/iHydra/flatdarkness/master/flatdarkness.user.js
// @include       http://www.hackforums.net/*
// @include       http://hackforums.net/*
// @include       http://nsfw.hackforums.net/*
// @include       http://www.nsfw.hackforums.net/*
// @author        iHydra
// @resource      CustomCSS113 https://raw.githubusercontent.com/iHydra/flatdarkness/master/stylesheet_v.1.1.3.css
// @grant         GM_addStyle
// @grant         GM_getResourceText
// @run-at        document-start
// ==/UserScript==

var ThemeCSS113 = GM_getResourceText ("CustomCSS113");
GM_addStyle (ThemeCSS113);
