$('code').each(function(i, block) { // Highlight Syntax
    hljs.highlightBlock(block);
});

$(window).scroll(function() { // Scroll to Top
    if ($(this).scrollTop() > 100) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
});
$('.scrollToTop').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
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

$('div.menu > ul').attr('style', 'text-align:center !important;');
$('img[src$="/images/modern_bl/starstaff.png"]').attr('style', 'filter: hue-rotate(5deg) saturate(8); -webkit-filter: hue-rotate(5deg) saturate(8)'); // Staff Stars Color Change
$('img[src$="/images/modern_bl/dismiss_notice.gif"]').attr('src', 'https://i.imgur.com/uxvQQDI.png'); // PM Notif Dismiss Icon
$('img[src$="/images/modern_bl/add_buddy.gif"]').attr('src', 'https://i.imgur.com/3d5FKNX.png'); // Add Buddy Icon
$('img[src$="/images/modern_bl/remove_buddy.gif"]').attr('src', 'https://i.imgur.com/zDwBkq5.png'); // Remove Buddy Icon
$('img[src$="/images/modern_bl/add_ignore.gif"]').attr('src', 'https://i.imgur.com/u3NZbDu.png'); // Add Ignore Icon
$('img[src$="/images/modern_bl/remove_ignore.gif"]').attr('src', 'https://i.imgur.com/zDwBkq5.png'); // Remove Ignore Icon
$('img[src$="/img/disable.png"]').attr('src', 'https://i.imgur.com/LXGekE9.png'); // Disable icon for multi-page loader userscript(not included)
$('img[src$="/img/enable.png"]').attr('src', 'https://i.imgur.com/YHDATSF.png'); // Enable icon for multi-page loader userscript(not included)
$('img[src$="/images/modern_bl/minioff.gif"]').attr('src', 'https://i.imgur.com/AP6vLRo.png').attr('style', 'padding-bottom: 2px;'); // No Posts SF Icon
$('img[src$="/images/modern_bl/miniofflock.gif"]').attr('src', 'https://i.imgur.com/AP6vLRo.png').attr('style', 'padding-bottom: 2px;'); // No Posts SF Icon Locked
$('img[src$="/images/modern_bl/minion.gif"]').attr('src', 'https://i.imgur.com/Wsl1Gfc.png').attr('style', 'padding-bottom: 3px;'); // New Posts SF icon
$('img[src$="/images/modern_bl/spinner_big.gif"]').attr('src', 'https://i.imgur.com/y3wDcUA.gif'); // Quick Reply Spinner Change
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
if ($("img[id*='multiquote_']").attr("src") === "https://hackforums.net/images/modern_bl/english/postbit_multiquote_on.gif") { // Multiquote IMG to CSS - By Snorlax
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
    GM_setValue("quotedPosts", quotedPosts);
    $(this).text($(this).text() == "MQ+" ? "MQ-" : "MQ+");
});
if (window.location.pathname == "showthread.php") {
    $(".trow1 .button").each(function() {
        var postId = $(this).parent().attr("id").match(/multiquote_link_([0-9]*)/)[1];
        if (GM_getValue("quotedPosts").indexOf(postId) >= 0) {
            $(this).text("MQ-");
            console.log(postId);
        }
    });
    $("body").on("click", "#quickreply_multiquote", function() {
        console.log("Clicked");
        quotedPosts = [];
        GM_setValue("quotedPosts", quotedPosts);
        $(".button").each(function() {
            $(this).text("MQ+");
            console.log("SET TO MQ+");
        });
    });
}
//$('.button2[name="previewpost"]').attr('accesskey', previewKey); // Preview Key Hotkey Shortcut
if (window.location.href == "https://hackforums.net/misc.php?action=buddypopup") { // Buddy List Online Status Fix
    console.log('buddypopup');
    $('img[src$="/images/modern_bl/buddy_away.gif"]').attr('src', 'https://i.imgur.com/x7dAaGE.png').attr('style', ''); // Away Status
    $('img[src$="/images/modern_bl/buddy_online.gif"]').attr('src', 'https://i.imgur.com/lpKaTIB.png').attr('style', ''); // Online Status
    $('img[src$="/images/modern_bl/buddy_offline.gif"]').attr('src', 'https://i.imgur.com/EKt4fXk.png').attr('style', ''); // Offline Status
} else if (window.location.href == "https://hackforums.net/usercp.php?action=editlists") {
    $('img[src$="/images/modern_bl/buddy_away.gif"]').attr('src', 'https://i.imgur.com/x7dAaGE.png').attr('style', 'vertical-align: top;'); // Away Status
    $('img[src$="/images/modern_bl/buddy_online.gif"]').attr('src', 'https://i.imgur.com/lpKaTIB.png').attr('style', 'vertical-align: top;'); // Online Status
    $('img[src$="/images/modern_bl/buddy_offline.gif"]').attr('src', 'https://i.imgur.com/EKt4fXk.png').attr('style', 'vertical-align: top;'); // Offline Status
} else {
    $('img[src$="/images/modern_bl/buddy_away.gif"]').attr('src', 'https://i.imgur.com/x7dAaGE.png').attr('style', 'position: absolute; padding-top: 4px;'); // Away Status
    $('img[src$="/images/modern_bl/buddy_online.gif"]').attr('src', 'https://i.imgur.com/lpKaTIB.png').attr('style', 'position: absolute; padding-top: 4px;'); // Online Status
    $('img[src$="/images/modern_bl/buddy_offline.gif"]').attr('src', 'https://i.imgur.com/EKt4fXk.png').attr('style', 'position: absolute; padding-top: 4px;'); // Offline Status
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
    $('span.largetext').append("<a class='bitButton' style='margin-left: 15px;' title='Send Private Message' href='" + sendToUID + "'>Send PM</a>");
}
if (window.location.pathname == "/editpost.php") {
    console.log("1");
    $('div[class="messageEditor"]').before('<textarea class="fullScreenEdit" style="display:none;"></textarea>');
    console.log("2");
    $('span[id="editor_item_color"]').after('<span id="fsButton" title="Fullscreen Editor" class="toolbar_button toolbar_normal toolbar_button_group_last"><a href="#" class="fs-icon"></a></span>');
    console.log("3");
}
/**if(window.location.pathname == "/editpost.php") {
        console.log("1");
        $('div[class="messageEditor"]').before('<textarea class="fullScreenEdit" style="display:none;"></textarea>');
        console.log("2");
        $('span[id="editor_item_color"]').after('<span id="fsButton" title="Fullscreen Editor" class="toolbar_button toolbar_normal toolbar_button_group_last"><a href="#" class="fs-icon"></a></span>');
        console.log("3");
    }**/
$('img[src$="/images/modern_bl/groupimages/english/ub3r.png"]').attr('style', '-webkit-filter: hue-rotate(15deg); filter: hue-rotate(15deg);'); // Uber Userbar Color Change
$('img[src$="/images/modern_bl/starub3r2.png"]').attr('style', '-webkit-filter: hue-rotate(15deg); filter: hue-rotate(15deg);'); // Uber Stars Color Change
$('strong span[style="rgb(56, 56, 56)"]').addClass("closedGroup"); // Changes Closed Usergroup Color
$('strong:contains("Post:") > a[href^="showthread.php?tid="]').attr('id', 'postLink').attr('style', 'padding-top: 3px; padding-right: 5px; display: inline-block;'); // Post # Centered
$('span[style="color:#383838"]').attr('style', 'color:#444444;'); // Closed Account Username Color Change
// }); REMOVED

function BBVideoColorReplace() { //BB Video and Color Icon Replace Delayer
    $('img[src="https://hackforums.net/jscripts/editor_themes/default/images/television.gif"]').attr('src', 'https://i.imgur.com/nhHILRQ.png'); // BB Editor - Video Embed
    $('img[src$="hackforums.net/jscripts/editor_themes/default/images/color.gif"]').attr('src', 'https://i.imgur.com/ZjMmUit.png'); // BB Editor - Color Picker
}
setTimeout(BBVideoColorReplace, 800);
/**
$(".fullScreenEdit").fseditor({
    overlay: true,  expandOnFocus: false,  transition: '',  placeholder: '',  maxWidth: '90%',  maxHeight: '100%',  onExpand: function() {},  onMinimize: function() {}
});**/
var now = new Date().getTime();
var page_load_time = now - performance.timing.navigationStart;
console.log("User-perceived page loading time: " + page_load_time);