FootNav = function(t) {
    function e(t) {
        return document.getElementById(t)
    }
    function o() {
        for (var t = -1,
        e = 0,
        o = window.location.href,
        n = 0; n < i.length; ++n) {
            var a = i[n],
            r = o.toLowerCase().indexOf(a.href.toLowerCase());
            r >= 0 && a.href.length >= e && (t = n, e = a.href.length)
        }
        return t
    }
    var i = [{
        icon: "icon icon-home",
        title: "首页",
        href: "forum.php?mobile=2"
    },
    {
        icon: "icon icon-topic",
        title: "论坛",
        href: "forum.php?forumlist=1&mobile=2"
    },
    {
        icon: "icon icon-ask",
        title: "发帖",
        href: "forum.php?newthread=1&mobile=2"
    },
    {
        icon: "icon icon-comment",
        title: "消息",
        href: "home.php?mod=space&do=pm&mobile=2"
    },
    {
        icon: "icon icon-user",
        title: "我的",
        href: "forum.php?uc=1&mobile=2"
    }];
    t && (i = t),
    this.init = function() {
        if (i && 0 != i.length) {
            for (var t = '<div class="mwt-h5bar footnav mwt-border-top" style="bottom:0;height:45px;z-index:1;position:fixed;background:#fff;"><table class="mwt-bar-tb"><tr>',
            n = 100 / i.length,
            a = 0; a < i.length; ++a) {
                var r = i[a];
                t += '<td width="' + n + '%" style="height:45px;"><a class="foota" data-i="0" name="footnav-btn" href="' + r.href + '"><i class="' + r.icon + '" style="display:block;margin-top:3px;"></i>' + r.title + "</a></td>"
            }
            t += "</tr></table></div>",
            e("footnavdiv").innerHTML = t,
            this.active(o())
        }
    },
    this.active = function(t) {
        var e = document.getElementsByName("footnav-btn");
        if (e && 0 != e.length && !(0 > t || t >= e.length)) for (var o = new RegExp("(\\s|^)active(\\s|$)"), i = 0; i < e.length; ++i) {
            var n = e[i];
            i == t ? n.className.match(o) || (n.className += " active") : n.className = n.className.replace(o, " ")
        }
    }
};