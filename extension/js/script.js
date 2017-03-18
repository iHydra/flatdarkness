// Copyright (c) 2011 Pete Boere (the-echoplex.net) Free under terms of the MIT license: https://www.opensource.org/licenses/mit-license.php
! function(s) { s.fn.alterClass = function(a, e) {
        var r = this;
        if (-1 === a.indexOf("*")) return r.removeClass(a), e ? r.addClass(e) : r;
        var n = new RegExp("\\s" + a.replace(/\*/g, "[A-Za-z0-9-_]+").split(" ").join("\\s|\\s") + "\\s", "g");
        return r.each(function(a, e) {
            for (var r = " " + e.className + " "; n.test(r);) r = r.replace(n, " ");
            e.className = s.trim(r) }), e ? r.addClass(e) : r } }(jQuery);

//var quotedColor = GM_getValue("quotedColor"); // Color for when quoted by someone - Keep inside quotes - if you enter hex code, put # as prefix. Ex: "#282828" vs. "teal"
//var showLogo = (GM_getValue("showLogo") === "true"); // true to show logo, false to hide logo
//var enableSFW = (GM_getValue("enableSFW") === "true"); // true to enable SFW, false to disable SFW (Safe For Work)
//var previewKey = GM_getValue("previewKey"); // ALT + {KEY} for Chrome || ALT + SHIFT + {KEY} for Firefox - More Info: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey
//var hideMenu = (GM_getValue("hideMenu") === "true"); // true to remove menu nav links, false to show.
//var showTime = (GM_getValue("showTime") === "true"); // Show HF MyBB Time (timezone set in User CP)
//var badges = (GM_getValue("badges") === "true"); // Badges Feature - false to disable feature. || **NOT DONE**
var quotedColor = '#00ffd2';
var showTime = false;
var hideMenu = false;
var showLogo = false;
var enableSFW = false;

var scrollTop = $('<a href=\"#\"/ title=\"Scroll to Top\"/ class=\"scrollToTop\"/></a>'); // Scroll To Top
$('body').append(scrollTop);
var scrollBottom = $('<a href=\"#\"/ title=\"Scroll to Bottom\"/ class=\"scrollToBottom\"/></a>'); // Scroll To Bottom
$('body').append(scrollBottom);

$('code').each(function(i, block) { // Highlight Syntax
    hljs.highlightBlock(block);
});

$(window).scroll(function() { // Scroll to Top
    if ($(this).scrollTop() > 350) {
        $('.scrollToTop').fadeIn();
        $('.scrollToBottom').fadeOut();
    } else {
        $('.scrollToTop').fadeOut();
        $('.scrollToBottom').fadeIn();
    }
});
$('.scrollToTop').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
});
$('.scrollToBottom').click(function() {
    $('html, body').animate({ scrollTop: $(document).height() }, 800);
    return false;
});

$.fn.textWidth = function(text, font) { // AUTO GROW INPUT
    if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
    $.fn.textWidth.fakeEl.text(text || this.val() || this.text() || this.attr('placeholder')).css('font', font || this.css('font'));
    return $.fn.textWidth.fakeEl.width();
};

$('.width-dynamic').on('input', function() {
    var inputWidth = $(this).textWidth();
    $(this).css({
        width: inputWidth
    });
}).trigger('input');


function inputWidth(elem, minW, maxW) {
    elem = $(this);
    console.log(elem);
}

var targetElem = $('.width-dynamic');

inputWidth(targetElem); // AutoGrowInput


var profileLink = $('#panel > strong:nth-child(1) > a:nth-child(1)').attr("href");
var UserID = profileLink.split("=")[2];
console.log(UserID);

/*function getBadgeList() {
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://ihydra.net/hf/flatdark/adminList.txt"+ "?t=" + Math.random(),
        onload: function(response){
            var reslines, templine, i, j, donorMap = {};
            reslines = response.responseText.split('\n');
        }
    });
} */

//$('div.menu > ul').attr('style', 'text-align:center !important;');
//$('img[src$="/starstaff.png"]').attr('style', 'filter: hue-rotate(5deg) saturate(8); -webkit-filter: hue-rotate(5deg) saturate(8)'); // Staff Stars Color Change
$('img[src$="/dismiss_notice.gif"]').attr('src', 'https://i.imgur.com/uxvQQDI.png'); // PM Notif Dismiss Icon
$('img[src$="/add_buddy.gif"]').attr('src', 'https://i.imgur.com/3d5FKNX.png'); // Add Buddy Icon
$('img[src$="/remove_buddy.gif"]').attr('src', 'https://i.imgur.com/zDwBkq5.png'); // Remove Buddy Icon
$('img[src$="/add_ignore.gif"]').attr('src', 'https://i.imgur.com/u3NZbDu.png'); // Add Ignore Icon
$('img[src$="/remove_ignore.gif"]').attr('src', 'https://i.imgur.com/zDwBkq5.png'); // Remove Ignore Icon
$('img[src$="/img/disable.png"]').attr('src', 'https://i.imgur.com/LXGekE9.png'); // Disable icon for multi-page loader userscript(not included)
$('img[src$="/img/enable.png"]').attr('src', 'https://i.imgur.com/YHDATSF.png'); // Enable icon for multi-page loader userscript(not included)
//$('img[src$="/minioff.gif"]').attr('src', 'https://i.imgur.com/AP6vLRo.png').attr('style', 'padding-bottom: 2px;'); // No Posts SF Icon
//$('img[src$="/miniofflock.gif"]').attr('src', 'https://i.imgur.com/AP6vLRo.png').attr('style', 'padding-bottom: 2px;'); // No Posts SF Icon Locked
//$('img[src$="/minion.gif"]').attr('src', 'https://i.imgur.com/Wsl1Gfc.png').attr('style', 'padding-bottom: 3px;'); // New Posts SF icon
$('img[src$="/spinner_big.gif"]').attr('src', 'https://i.imgur.com/y3wDcUA.gif'); // Quick Reply Spinner Change
$('span:contains("Moderated")').addClass('sevenpad'); // Padding fix
$('link[href*="star_ratings"]').remove(); // Star Ratings Change
$('#pm_notice').removeClass('pm_alert').addClass('pm_alert2'); // Group vs. PM Alert
$('div > code').dblclick(function() {
    $(this).select();
    var text = this,
        range, selection;
    if (document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
});
/**var quotedPosts = chrome.storage.sync.get("quotedPosts") === undefined ? [] : chrome.storage.sync.get("quotedPosts");
console.log(quotedPosts);**/
var quotedPosts;
chrome.storage.sync.get("quotedPosts", function(multiQuotes) {
    if(!chrome.runtime.error) {
        console.log(multiQuotes);
        quotedPosts = multiQuotes.quotedPosts;
        console.log(quotedPosts);
    }
});
if ($("img[id*='multiquote_']").attr("src$") === "/english/postbit_multiquote_on.gif") { // Multiquote IMG to CSS - By Snorlax
    $("img[id*='multiquote_']").hide().after("<button class='button' style='bottom: 7px;position: relative;cursor: pointer;outline: none;'>MQ-</button>");
} else {
    $("img[id*='multiquote_']").hide().after("<button class='button' style='bottom: 7px;position: relative;cursor: pointer;outline: none;'>MQ+</button>");
}
$(".trow1 .button").on("click", function() {
    var postId = $(this).parent().attr("id").match(/multiquote_link_([0-9]*)/)[1];
    if ($(this).text() == "MQ-") {
        quotedPosts.splice(quotedPosts.indexOf(postId), 1);
    } else {
        quotedPosts.push(postId);
        console.log(quotedPosts);
    }
    chrome.storage.sync.set({"quotedPosts": quotedPosts}, function() {});
    $(this).text($(this).text() == "MQ+" ? "MQ-" : "MQ+");
});
console.log(window.location.pathname);
if (window.location.pathname == "/showthread.php") {
    console.log("Showthread");
    $(".trow1 .button").each(function() {
        var that = this;
        var postId = $(this).parent().attr("id").match(/multiquote_link_([0-9]*)/)[1];
        /**if (chrome.storage.sync.get("quotedPosts").indexOf(postId) >= 0) {
            $(this).text("MQ-");
            console.log(postId);
        }**/
        chrome.storage.sync.get("quotedPosts", function(multiQuotes) {
            if(!chrome.runtime.error) {
                if(this.indexOf(postId) >= 0) {
                    that.text("MQ-");
                    console.log(postId);
                }
            }
        });
    });
    $("body").on("click", "#quickreply_multiquote", function() {
        console.log("Clicked");
        quotedPosts = [];
        chrome.storage.sync.set({"quotedPosts": quotedPosts}, function() {});
        $(".button").each(function() {
            $(this).text("MQ+");
            console.log("SET TO MQ+");
        });
    });
    $('a[id^="thread_options_"]').remove(); // Ignore, not part of the MQ, just need it in if showthread
    //$('a[href^="javascript:MyBB.whoPosted"]').addClass('popup_item');
}
//$('.button2[name="previewpost"]').attr('accesskey', previewKey); // Preview Key Hotkey Shortcut
if (window.location.href == "https://hackforums.net/misc.php?action=buddypopup") { // Buddy List Online Status Fix
    console.log('buddypopup');
    $('img[src$="/buddy_away.gif"]').attr('style', ''); // Away Status
    $('img[src$="/buddy_online.gif"]').attr('style', ''); // Online Status
    $('img[src$="/buddy_offline.gif"]').attr('style', ''); // Offline Status
}
if (window.location.href == "https://hackforums.net/usercp.php?action=editlists") {
    $('img[src$="/buddy_away.gif"]').attr('style', 'vertical-align: top;'); // Away Status
    $('img[src$="/buddy_online.gif"]').attr('style', 'vertical-align: top;'); // Online Status
    $('img[src$="/buddy_offline.gif"]').attr('style', 'vertical-align: top;'); // Offline Status
}
$("td[class*='trow'] input:checkbox").on("click", function() { // Mods & Staf Only - Highlight checkboxed rows - Conflicts with HFES for me, please test and report back
    console.log("something");
    var selector = $(this).closest("tr").find("td");
    if ($(this).is(":checked")) {
        selector.css("background", "#242424");
    } else {
        selector.css("background", "");
    }
});
if (window.location.pathname == "/gauth.php") {
    $('span[class="float_right smalltext"]').attr('style', 'display: block !important'); // Gauth Reset Link Reveal
}
if (window.location.pathname == "/reputation.php") {
    $('a[href$="&show=positive"]').attr('style', 'font-size: 14px; background-color: #2DA546; border: 1px solid #2CC330; padding: 5px 10px 5px 10px; font-weight: bold; color: white;').after("<br/>"); // Positive Rep Box
    $('a[href$="&show=neutral"]').attr('style', 'font-size: 14px; background-color: #777777; border: 1px solid #949494; padding: 5px 10px 5px 10px; font-weight: bold; color: white;').after("<br/>"); // Neutral Rep Box
    $('a[href$="&show=negative"]').attr('style', 'font-size: 14px; background-color: #CC4444; border: 1px solid #FF5656; padding: 5px 10px 5px 10px; font-weight: bold; color: white;'); // Negative Rep Box
    $('strong[class="reputation_positive"]:contains("Positives")').remove(); // Legend Text Remove
    $('strong[class="reputation_neutral"]:contains("Neutrals")').remove(); // Legend Text Remove
    $('strong[class="reputation_negative"]:contains("Negatives")').remove(); // Legend Text Remove
    $('span[class="smalltext"]:contains("Total Reputation:")').find("br").remove(); // Received Rep Boxes Layout
    $('strong:contains("Total Reputation:")').before("<br/><br/>"); // Received Rep Boxes Layout
    $('span[class^="repbox"]').after("<br/><br/>"); // Received Rep Boxes Layout
}
if (showLogo === true) { // Show Logo
    $('img[src="https://hackforums.net/images/modern_bl/logo_bl.gif"]').attr('src', 'https://i.imgur.com/fAzkq6w.png');
    $('img[src="https://hackforums.net/images/modern_pl/logo_pl.gif"]').attr('src', 'https://i.imgur.com/fAzkq6w.png');
    $('div[class="logo"]').removeClass("logo").attr('style', 'text-align:center');
}
if (enableSFW === true) { // Enable Safe-For-Work
    $('div[style="overflow:hidden; max-height:200px;"]').attr('class', 'sigArea');
    $('div[style="overflow:hidden; max-height:200px;"] img').attr('class', 'sigImage');
    $('td[class="post_avatar"]').attr('style', 'display:none;');
    var sigShow = $('<input type="button" class="button sigButton" value="toggle" style="position:relative; float:right;" />');
    $("table[id*='post_']").each(function() {
        src = $(this).find("tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(1) > div:nth-child(3) img").attr("src");
        if (src !== null) {
            $(this).find("tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(1) > div:nth-child(3) img").attr('style', 'display:none;');
            $(this).find("tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(1) > div:nth-child(3)").prepend('<input type="button" class="bitButton sigButton" value="toggle" style="position:relative; float:right; outline:none;" />');
        }
    });
    $('.sigButton').click(function() {
        $(this).parent().find('.sigImage').toggleClass("sigReveal");
        $(this).parent().toggleClass("sigResize");

    });
}
if (window.location.pathname != "/private.php") {
    var userName = $('div#panel > strong > a[href^="https://hackforums.net/member.php?action=profile&uid="]').text();
    if (!userName) userName = NULL;
    $('blockquote > cite:contains(' + userName + ')').css({ 'color': quotedColor, 'font-weight': 'bold', 'border-bottom': '1px dotted' + quotedColor });
}
if (window.location.pathname == "/private.php") {
    $('.quick_keys > form:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(1) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1)').attr("style", "border-bottom:0px !important;");
    $('#content > div.quick_keys > form > table > tbody > tr > td:nth-child(2) > table:nth-child(1) > tbody > tr > td > table > tbody > tr > td').attr("style", "border-bottom:0px !important;");
    //$('input.textbox').addClass('width-dynamic').css('max-width','1020px').css('min-width','250px'); // Input Textbox Auto-Scale to Text Entered
}
if (window.location.pathname == "/showstaff.php" || window.location.pathname == "/showmods.php") {
    $('head').append('<style>td.trow1:hover {background: none !important;}</style>');
    $('td[class="trow1"]').attr("style", "background: none; border: 0px !important;");
    $('div[style="width: 48%; min-height: 120px;float: left; border: 1px #4F3A6B solid; margin: 4px; padding: 2px;"]').attr("style", "").addClass("staffCard");
    $('div[style="width: 48%; float: left; border: 1px #4F3A6B solid; margin: 4px; padding: 2px;"]').attr("style", "").addClass("staffCard");
    $('td[class="trow1"][width="75%"]').attr("width", "90%").attr("style", "border: 0px !important").removeClass('trow1').addClass('staffCardParts').addClass('trow2');
    $('td[width="25%"]').attr("style", "").addClass('staffCardParts');
}
if (window.location.pathname == "/showgroups.php") {
    $('head').append('<style>td.trow1:hover {background: none !important;}</style>');
    $('td[class="trow1"]').attr("style", "background: none; border: 0px !important;");
    $('div[style="width: 46%; min-height:168px;float: left; border: 1px #4F3A6B solid; margin: 4px; padding: 2px;"]').attr("style", "").addClass("groupsCard");
    $('td[class="trow1"][width="75%"]').attr("width", "90%").attr("style", "border: 0px !important").removeClass('trow1').addClass('groupsCardParts').addClass('trow2');
    $('td[width="25%"]').attr("style", "").attr("valign", "middle").addClass('groupsCardParts');
    $('td[valign="bottom"]').attr("style", "background-color: #333; border-radius: 0px; vertical-align: baseline; font-size: 12px;");
    $('table[width="100%"]').attr("height", "100%").attr("cellpadding", "10");
}
if (window.location.pathname == "/newreply.php" || window.location.pathname == "/newthread.php") {
    $('table.tborder:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1)').attr("style", "border-bottom:0px !important;");
}
if (window.location.pathname == "/search.php") {
    $('#content > div.quick_keys > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > table > tbody > tr > td:nth-child(1)').attr("style", "border-bottom:0px !important;");
}
if (window.location.pathname == "/member.php") {
    $('.quick_keys > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1)').attr("style", "border-bottom:0px !important;");
    $('.quick_keys > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) > br:nth-child(1)').remove();
    var sendToUID = $('.quick_keys > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(2) > a:nth-child(1)').attr("href");
    $('span.largetext').after("<a class='bitButton' style='margin-left: 15px;' title='Send Private Message' href='" + sendToUID + "'><span style='color: rgba(0,0,0,0.0); text-shadow: none;'>.</span>Send PM<span style='color: rgba(0,0,0,0.0); text-shadow: none;'>.</span></a>");
    /**$('span.largetext > strong > span').dblclick(function () {
        $(this).select();
    });**/
}
if (window.location.pathname == "/editpost.php" || window.location.pathname == "/newreply.php") {
    $('div[class="messageEditor"]').before('<textarea class="fullScreenEdit" style="display:none;"></textarea>');
    $('span[id="editor_item_color"]').after('<span id="fsButton" title="Fullscreen Editor" class="toolbar_button toolbar_normal toolbar_button_group_last"><a href="#" class="tx-icon"></a></span>');
}
if (hideMenu === true) {
    $("div[class='menu']").hide();
}
if (showTime === false) {
    $("div[class='largetext']").hide();
}
/**if (badges === true) { // Badge System >> Displays an icon as an identfier
    var adminList = [1]; // Omniscient
    var staffList = [992020, 1292605, 1570078]; // King of Hearts, Skorp, Sam Winchester
    var mentorList = [4066, 330676, 1320406, 23809]; // Judge Dredd, Diabolic, Froggy, Viral Dragon
    var groupLeadersList = [992067, 1642244, 1406453, 1121882, 1191229, 1066501, 2052441, 431105, 80618, 370510, 55709, 1148878, 1961000, 1469364, 1812679, 664032, 1843672, 2110841, 561239]; // Nobility, Dubitus, Escrow, Avunit, Arrow, Moeseph, Billie Joe, The Grim, nokia2mon2, Alone Vampire, Glitch, Clique, Zexo, Prada, Ninetales, Water Aura, Infamy, Night Fury
    var devList = [561239, 2577525]; // iHydra, Hash G.
    for (var I = 0; I < devList.length; I++) {
        $("a[href='https://hackforums.net/member.php?action=profile&uid=" + devList[I] + "']").append('<img title="Developer of Flat Darkness" src="https://i.imgur.com/oH5ci89.png" style="position: relative;top: 3px; left: 2px; padding-left: 2px;">');
    }
    for (var I = 0; I < adminList.length; I++) {
        $("a[href='https://hackforums.net/member.php?action=profile&uid=" + adminList[I] + "']").append('<img title="Omniscient" src="https://i.imgur.com/xsUlRrE.png" style="position: relative;top: 3px;left: 2px; padding-left: 2px;">');
    }
    for (var I = 0; I < staffList.length; I++) {
        $("a[href='https://hackforums.net/member.php?action=profile&uid=" + staffList[I] + "']").append('<img title="HF Staff" src="https://i.imgur.com/UP5TYS4.png" style="position: relative;top: 3px;left: 2px; padding-left: 2px;">');
    }
    for (var I = 0; I < mentorList.length; I++) {
        $("a[href='https://hackforums.net/member.php?action=profile&uid=" + mentorList[I] + "']").append('<img title="HF Mentor" src="https://i.imgur.com/Tu5taXM.png" style="position: relative;top: 3px;left: 2px; padding-left: 2px;">');
    }
    for (var I = 0; I < groupLeadersList.length; I++) {
        $("a[href='https://hackforums.net/member.php?action=profile&uid=" + groupLeadersList[I] + "']").append('<img title="HF Group Leader" src="https://i.imgur.com/DvGiZJk.png" style="position: relative;top: 3px; left: 2px; padding-left: 2px;">');
    }
}**/
$('img[src$="/groupimages/english/ub3r.png"]').attr('style', '-webkit-filter: hue-rotate(15deg); filter: hue-rotate(15deg);'); // Uber Userbar Color Change
$('img[src$="/starub3r2.png"]').attr('style', '-webkit-filter: hue-rotate(15deg); filter: hue-rotate(15deg);'); // Uber Stars Color Change
$('img[src$="/starreg.png"]').attr('style','-webkit-filter: grayscale(1); filter: grayscale(1);'); // Groups and Reg Star
$('strong span[style="rgb(56, 56, 56)"]').addClass("closedGroup"); // Changes Closed Usergroup Color
//$('strong:contains("Post:") > a[href^="showthread.php?tid="]').attr('id', 'postLink').attr('style', 'padding-top: 3px; padding-right: 5px; display: inline-block;'); // Post # Centered
$('span[style="color:#383838"]').attr('style', 'color:#444444;'); // Closed Account Username Color Change
$('#message_new').textareafullscreen({
    overlay: true, // Overlay
    maxWidth: '90%', // Max width
    maxHeight: '98%', // Max height
});
$('.prefix').each(function () {
    var slicedPrefix = $(this).text().slice(1,-1);
    $(this).text(slicedPrefix);
});