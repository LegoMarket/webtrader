define(["exports", "../websockets/binary_websockets", "../windows/windows", "../common/rivetsExtra", "lodash", "text!./login.html", "css!./login.css"], function(e, i, o, n, t, l) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.init = e.login = void 0;
    var a = r(i),
        u = r(o),
        d = r(n),
        s = (r(t), r(l));

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = null,
        f = null;

    function g() {
        var e = a.default.app_id,
            i = new URL(window.location.href).hostname.includes("binary.me") ? ".me" : ".com",
            o = "https://" + (a.default.server_url.includes("qa") ? a.default.server_url : "oauth.binary" + i) + "/oauth2/authorize?app_id=" + e + "&l=" + (local_storage.get("i18n") || {
                value: "en"
            }).value;
        window.location = o
    }
    e.login = g;
    var p = e.init = function() {
            if (c) c.moveToTop();
            else {
                var e = $(s.default).i18n();
                (c = u.default.createBlankWindow(e, {
                    title: "Log in",
                    resizable: !1,
                    collapsable: !1,
                    minimizable: !1,
                    maximizable: !1,
                    width: 548,
                    height: "auto",
                    close: function() {
                        c.dialog("destroy"), c.remove(), c = null
                    },
                    open: function() {},
                    destroy: function() {
                        f && f.unbind(), f = null
                    }
                })).parent().css("overflow", "visible"), v(e, c), c.dialog("open");
                var i = c.dialog("widget").offset();
                i.top = 120, c.dialog("option", "position", {
                    my: i.left,
                    at: i.top
                }), c.dialog("widget").css({
                    left: i.left + "px",
                    top: i.top + "px"
                }), c.dialog("widget").find(".ui-selectmenu-menu ul").css("max-height", "320px")
            }
        },
        v = function(e, i) {
            var o = {
                login_button_disabled: !1,
                login: function() {
                    o.login_button_disabled = !0, g()
                },
                onRegister: function() {
                    var e = getBinaryUrl("home");
                    window.open(e, "_blank")
                }
            };
            f = d.default.bind(e[0], o)
        };
    e.default = {
        init: p,
        login: g
    }
});
