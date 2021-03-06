(function(f) {
    var g = false,
        k = false,
        n, h, a, m, i, l, e = 300,
        d = {
            overlay: true,
            expandOnFocus: false,
            transition: "fade",
            placeholder: "",
            maxWidth: "",
            maxHeight: "",
            onExpand: function() {},
            onMinimize: function() {}
        };
    var c = {
        init: function(q) {
            d = d || {};
            f.extend(true, d, d);
            f.extend(true, d, q);
            n = f(this);
            if (!n.is("textarea")) {
                f.error("Error initializing FSEditor Plugin. It can only work on <textarea> element.");
                return
            }
            var s = (f.trim(n.val()) !== "" ? n.val() : "");
            n.hide();
            var p = '<div class="fs-editor-wrapper">                     <div class="fs-editor"><a href="#" class="fs-icon"></a>                     <div class="fs-editable" contenteditable="true"></div>                     </div></div>';
            var o = f(p).insertAfter(this);
            a = o.find(".fs-editor");
            m = a.find(".fs-editable");
            i = a.find(".fs-icon");
            m.css("min-height", n.css("height")).parent(".fs-editor-wrapper").css("min-height", n.css("height"));
            f(window).on("keyup.fseditor", function(t) {
                if (t.keyCode == 27) {
                    g ? c.minimize() : ""
                }
            });
            if (d.expandOnFocus) {
                m.on("focus.fseditor", function() {
                    c.expand()
                })
            }
            i.on("click.fseditor.icon", function(t) {
                t.preventDefault();
                c[g ? "minimize" : "expand"]()
            });
            if (d.placeholder && n.val() == "") {
                c.placeholder()
            } else {
                if (n.val() != "") {
                    m.html(s)
                }
            }
            var r = a.closest("form");
            r.on("submit", function(t) {
                var u = m.html().replace(/<div>/gi, "<br>").replace(/<\/div>/gi, "");
                n.html(u == d.placeholder ? "" : u)
            });
            return this
        },
        showOverlay: function() {
            f('<div class="fs-editor-overlay" />').appendTo("body").fadeTo(d.transition == "" ? 0 : e, 1).click(function() {
                c.minimize()
            });
            return this
        },
        removeOverlay: function() {
            var o = f(".fs-editor-overlay");
            if (o.length) {
                o.fadeTo(d.transition == "" ? 0 : e, 0, function() {
                    f(this).remove()
                })
            }
            return this
        },
        expand: function() {
            if (d.transition == "fade") {
                a.fadeTo(0, 0)
            }
            d.maxWidth ? a.css("max-width", d.maxWidth) : "";
            d.maxHeight ? a.css("max-height", d.maxHeight) : "";
            if (d.overlay) {
                c.showOverlay()
            }
            f(window).on("resize.fseditor", function() {
                b(a)
            });
            a.addClass("expanded transition-" + d.transition);
            j.fx(d.transition);
            return this
        },
        minimize: function() {
            f(window).off("resize.fseditor", b(a));
            a.removeClass("expanded transition-" + d.transition).css({
                "max-width": "none",
                "max-height": "none"
            });
            if (d.transition == "fade") {
                a.fadeTo(0, 0)
            }
            if (d.overlay) {
                c.removeOverlay()
            }
            j.fx(d.transition);
            return this
        },
        placeholder: function() {
            if (typeof d.placeholder == "string") {
                m.addClass("placeholder").html(d.placeholder).on({
                    focus: function() {
                        if (!k && m.html() == d.placeholder) {
                            m.html("").removeClass("placeholder")
                        }
                    },
                    blur: function() {
                        if (!k && m.html() == "") {
                            m.html(d.placeholder).addClass("placeholder")
                        }
                    }
                });
                return this
            }
        },
        destroy: function() {
            c.removeOverlay();
            n.show().nextAll(".fs-editor-wrapper").remove();
            f(window).off("keyup.fseditor").off("resize.fseditor");
            return this
        }
    };
    var j = {
        fx: function(o) {
            b(a);
            switch (o) {
                case "fade":
                    (g ? c.fadeComplete("minimize") : a.fadeTo(e, 1, c.fadeComplete("expand")));
                    break;
                case "slide-in":
                    (g ? c.slideInComplete("minimize") : c.slideInComplete("expand"));
                    break;
                default:
                    (g ? c.noTransition("minimize") : c.noTransition("expand"));
                    break
            }
        },
        noTransition: function(o) {
            if (o == "expand") {
                if (!d.placeholder) {
                    m.focus()
                }
                a.css("opacity", 1);
                g = true;
                d.onExpand.call(this)
            } else {
                if (o == "minimize") {
                    if (!d.placeholder) {
                        m.focus()
                    }
                    g = false;
                    d.onMinimize.call(this)
                }
            }
            return
        },
        fadeComplete: function(o) {
            if (o == "expand") {
                if (!d.placeholder) {
                    m.focus()
                }
                g = true;
                d.onExpand.call(this)
            } else {
                if (o == "minimize") {
                    a.fadeTo(0, 1);
                    if (!d.placeholder) {
                        m.focus()
                    }
                    g = false;
                    d.onMinimize.call(this)
                }
            }
            return
        },
        slideInComplete: function(o) {
            if (o == "expand") {
                a.css({
                    top: -999,
                    opacity: 1
                }).animate({
                    top: 0 | (((f(window).height() - a.height()) / 2))
                }, e);
                g = true;
                d.onExpand.call(this)
            } else {
                if (o == "minimize") {
                    a.animate({
                        top: -999
                    }, e);
                    g = false;
                    d.onMinimize.call(this)
                }
            }
            return
        }
    };

    function b(o) {
        var p = 0 | (((f(window).height() - o.height()) / 2));
        var q = 0 | ((f(window).width() - o.width()) / 2);
        o.css({
            top: p,
            left: q
        })
    }
    f.fn.fseditor = function(o) {
        f.extend(c, j);
        if (c[o]) {
            return c[o].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof o === "object" || !o) {
                return c.init.apply(this, arguments)
            } else {
                f.error("Method " + o + " does not exist on jQuery.fseditor")
            }
        }
    }
})(jQuery);