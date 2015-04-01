// ==UserScript==
// @name          Flat Darkness Hack Forums Theme
// @namespace     https://github.com/iHydra
// @version       0.0.2
// @description   Custom theme for Hack Forums. Base theme by Sasori.
// @updateURL     https://raw.githubusercontent.com/iHydra/flatdarkness/master/flatdarkness.meta.js
// @downloadURL   https://raw.githubusercontent.com/iHydra/flatdarkness/master/flatdarkness.user.js
// @include       http://www.hackforums.net/*
// @include       http://hackforums.net/*
// @include       http://nsfw.hackforums.net/*
// @include       http://www.nsfw.hackforums.net/*
// @author        iHydra/Sasori
// @resource      CustomCSS https://raw.githubusercontent.com/iHydra/flatdarkness/master/stylesheet_v.0.0.2.css
// @grant         GM_addStyle
// @grant         GM_getResourceText
// @run-at        document-start
// ==/UserScript==

var ThemeCSS = GM_getResourceText ("CustomCSS");
GM_addStyle (ThemeCSS);
