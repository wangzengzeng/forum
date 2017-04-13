/* conf.js, (c) 2016 mawentao */

define("ajax", ["require"],
function(e) {
    var i = {},
    t = {},
    a = "";
    return t.getAjaxUrl = function(e) {
        return dz.mobileapi + "?" + e
    },
    t.getFormHash = function() {
        return a
    },
    t.ajaxrequest = function(e, i, t, n, o) {
        jQuery.ajax({
            url: i,
            type: e,
            dataType: "json",
            data: t,
            async: o ? !1 : !0,
            complete: function(e) {},
            success: function(e) {
                e.Variables && e.Variables.formhash && (a = e.Variables.formhash),
                n(e)
            },
            error: function(e, i, t) {
                var a = "Error(" + e.readyState + ") : " + i;
                console.log(a),
                MWT.alert("啊哦~~页面发生了错误，刷新下看看~~")
            }
        })
    },
    t.post3 = function(e, i, t, a) {
        jQuery.ajax({
            url: e,
            type: "post",
            dataType: "xml",
            data: i,
            async: a ? !1 : !0,
            complete: function(e) {},
            success: function(e) {
                t(e)
            },
            error: function(e, i, t) {
                var a = "Error(" + e.readyState + ") : " + i;
                console.log(a),
                MWT.alert("啊哦~~页面发生了错误，刷新下看看~~")
            }
        })
    },
    t.post2 = function(e, i, a, n) {
        bigstyle_api || MWT.alert("请安装BigStyle模板配套插件");
        var o = bigstyle_api + e;
        t.ajaxrequest("post", o, i, a, n)
    },
    t.post = function(e, i, a, n) {
        var o = t.getAjaxUrl(e);
        t.ajaxrequest("post", o, i, a, n)
    },
    t.get = function(e, i, a, n, o) {
        var r = t.getAjaxUrl(i);
        t.ajaxrequest("get", r, a, n, o)
    },
    t.loadcache = function(e, t, a) {
        i[e] ? t(i[e]) : this.post(e, {},
        function(a) {
            i[e] = a,
            t(a)
        },
        a)
    },
    t.unsetcache = function(e) {
        i[e] = null
    },
    t.clearcache = function() {
        i = {}
    },
    t
}),
define("conf", ["require", "ajax"],
function(e) {
    var i, t = e("ajax"),
    a = {
        loglevel: 3,
        version: "1.9.0",
        plugin_type: 0,
        plugin_version: 0,
        default_forum_icon: dz.siteurl + "/template/bigstyle/touch/static/imgs/default_forum.png",
        copyright: "Comsenz Inc.",
        applink: "http://www.discuz.net/mobile.php?platform=ios",
        hotforums: {
            source: 1,
            forums: []
        },
        banners: [{
            image: dz.siteurl + "/template/bigstyle/touch/static/imgs/banner01.jpg",
            href: dz.siteurl
        },
        {
            image: dz.siteurl + "/template/bigstyle/touch/static/imgs/banner02.jpg",
            href: dz.siteurl
        },
        {
            image: dz.siteurl + "/template/bigstyle/touch/static/imgs/banner03.jpg",
            href: dz.siteurl
        }],
        uclist: [{
            icon: "icon icon-log",
            iconcolor: "#029C01",
            title: "我的资料",
            href: "home.php?mod=space&do=profile&mobile=2"
        },
        "-", {
            icon: "icon icon-topic",
            iconcolor: "#D9534F",
            title: "我的帖子",
            href: "home.php?mod=space&do=thread&mobile=2"
        },
        {
            icon: "icon icon-favor",
            iconcolor: "#E85E0D",
            title: "我的收藏",
            href: "home.php?mod=space&do=favorite&mobile=2"
        },
        "-", {
            icon: "icon icon-setting",
            iconcolor: "#086EA2",
            title: "设置",
            href: "forum.php?setting=1&mobile=2"
        }],
        portal: {
            title: "新闻",
            default_pic: dz.siteurl + "/template/bigstyle/touch/static/imgs/default_pic.png"
        },
        adapi: "http://139.196.29.35:8888/api/bigstyle/getad"
    },
    n = {};
    return n.get = function() {
        return bigstyle_api ? (i || t.post2("config", {},
        function(e) {
            e.data && (i = e.data, a.banners = i.banners, a.default_forum_icon = i.default_forum_icon, i.uclist && (a.uclist = i.uclist), i.copyright && (a.copyright = i.copyright), i.applink && (a.applink = i.applink), i.hotforums && (a.hotforums = i.hotforums), a.adapi = "", i.adapi && (a.adapi = i.adapi), i.plugin_type && (a.plugin_type = i.plugin_type), i.plugin_version && (a.plugin_version = parseFloat(i.plugin_version)), i.portal && (i.portal.title && (a.portal.title = i.portal.title), i.portal.default_pic && (a.portal.default_pic = i.portal.default_pic)))
        },
        !0), a) : a
    },
    n
}),
define("common/location", ["require"],
function(e) {
    var i = {};
    return i.back = function(e) {
        window.history.length > 1 ? window.history.back() : e && (window.location = e)
    },
    i.forumdisplay = function(e) {
        dz.diylink ? window.location = "forum.php?forumdisplay=1&fid=" + e + "&mobile=2": window.location = "forum.php?mod=forumdisplay&fid=" + e + "&mobile=2"
    },
    i.viewthread = function(e) {
        dz.diylink ? window.location = "forum.php?viewthread=1&tid=" + e + "&mobile=2": window.location = "forum.php?mod=viewthread&tid=" + e + "&mobile=2"
    },
    i.viewarticle = function(e) {
        dz.diylink ? window.location = "forum.php?viewarticle=1&aid=" + e + "&mobile=2": window.location = "portal.php?mod=view&aid=" + e + "&mobile=2"
    },
    i
}),
define("data/forum", ["require", "ajax"],
function(e) {
    function i() {
        l.loadcache("version=4&module=forumindex",
        function(e) {
            n = {};
            for (var i = 0; i < e.Variables.forumlist.length; ++i) {
                var a = e.Variables.forumlist[i];
                if (n[a.fid] = {
                    fid: a.fid,
                    name: a.name,
                    threads: a.threads,
                    posts: a.posts,
                    todayposts: a.todayposts,
                    icon: a.icon ? a.icon: bigstyle_conf.default_forum_icon
                },
                a.sublist && a.sublist.length > 0) {
                    n[a.fid].sublist = [];
                    for (var o = 0; o < a.sublist.length; ++o) {
                        var r = a.sublist[o];
                        n[a.fid].sublist.push(r.fid),
                        n[r.fid] = {
                            fid: r.fid,
                            name: r.name,
                            threads: r.threads,
                            posts: r.posts,
                            todayposts: r.todayposts,
                            icon: r.icon ? r.icon: bigstyle_conf.default_forum_icon
                        }
                    }
                }
            }
            t(e)
        },
        !0)
    }
    function t(e) {
        if (o = '<option value="0">请选择版块</option>', e && e.Variables.catlist) for (var i = 0; i < e.Variables.catlist.length; ++i) {
            var t = e.Variables.catlist[i];
            if (t.forums && t.forums.length) {
                o += '<optgroup label="' + t.name + '">';
                for (var a = 0; a < t.forums.length; ++a) {
                    var r = t.forums[a],
                    l = n[r];
                    if (l && (o += '<option value="' + l.fid + '">' + l.name + "</option>", l.sublist && l.sublist.length > 0)) for (var d = 0; d < l.sublist.length; ++d) {
                        var s = l.sublist[d],
                        c = n[s];
                        c && (o += '<option value="' + c.fid + '">&nbsp;&nbsp;&nbsp;&nbsp;' + c.name + "</option>")
                    }
                }
            }
        }
    }
    function a() {
        l.loadcache("version=4&module=forumnav",
        function(e) {
            if (r = {},
            e.Variables.forums) for (var i = 0; i < e.Variables.forums.length; ++i) {
                var t = e.Variables.forums[i];
                if (r[t.fid] = [], t.threadtypes && t.threadtypes.types) for (var a in t.threadtypes.types) {
                    var n = {
                        tid: a,
                        name: t.threadtypes.types[a]
                    };
                    r[t.fid].push(n)
                }
            }
        },
        !0)
    }
    var n, o, r, l = e("ajax"),
    d = {};
    return d.getForumInfo = function(e) {
        return n || i(),
        n[e]
    },
    d.getHotForums = function() {
        var e = [],
        i = [],
        t = bigstyle_conf.hotforums;
        if (0 == t.source && t.forums && t.forums.length > 0) i = t.forums;
        else {
            var a = "version=4&module=hotforum";
            l.loadcache(a,
            function(e) {
                if (e.Variables.data && e.Variables.data.length) for (var t = 0; t < e.Variables.data.length; ++t) {
                    var a = e.Variables.data[t];
                    i.push(a.fid)
                }
            },
            !0)
        }
        for (var o = 0; o < i.length; ++o) {
            var r = i[o],
            s = d.getForumInfo(r);
            s && s.icon && e.push(s)
        }
        if (0 == e.length) for (var r in n) if (e.push(n[r]), e.length > 2) break;
        return e
    },
    d.getAllForumIds = function() {
        var e = [];
        n || i();
        for (var t in n) e.push(t);
        return e
    },
    d.getForumSelectOptions = function() {
        return o || i(),
        o
    },
    d.getForumThreadTypes = function(e) {
        return r || a(),
        r[e] ? r[e] : []
    },
    d.getForumMap = function() {
        return n || i(),
        n
    },
    d
}),
define("data/thread", ["require", "data/forum", "ajax"],
function(e) {
    var i = e("data/forum"),
    t = e("ajax"),
    a = {};
    return a.getNewThreads = function() {
        var e = i.getForumMap(),
        t = 0,
        n = 0;
        for (var o in e) {
            var r = e[o],
            l = parseInt(r.threads);
            l > n && (t = o, n = l)
        }
        return a.getLastPostThreadsOfForum(t, 1)
    },
    a.getHotThreads = function() {
        var e = i.getForumMap(),
        t = 0,
        n = 0;
        for (var o in e) {
            var r = e[o],
            l = parseInt(r.threads);
            l > n && (t = o, n = l)
        }
        return a.getHotThreadsOfForum(t, 1)
    },
    a.getLastPostThreadsOfForum = function(e, i) {
        var n = [],
        o = "version=4&module=forumdisplay&fid=" + e + "&page=" + i + "&filter=lastpost&orderby=lastpost";
        return MWT.show_loading(),
        t.post(o, {},
        function(e) {
            MWT.hide_loading(),
            n = a.getParseThreadRes(e)
        },
        !0),
        n
    },
    a.getHotThreadsOfForum = function(e, i) {
        var n = [],
        o = "version=4&module=forumdisplay&fid=" + e + "&page=" + i + "&filter=heat&orderby=heats";
        return MWT.show_loading(),
        t.post(o, {},
        function(e) {
            MWT.hide_loading(),
            n = a.getParseThreadRes(e)
        },
        !0),
        n
    },
    a.getParseThreadRes = function(e) {
        var i = [];
        if (!e.Variables.forum_threadlist.length) return i;
        for (var t = e.Variables.forum_threadlist.length,
        a = 0; t > a; ++a) {
            var n = e.Variables.forum_threadlist[a];
            if (! (n.displayorder > 0)) {
                var o = dz_avatar(n.authorid),
                r = '<div name="topthread" data-tid="' + n.tid + '" class="weui_cell" style="display:block;"><div style="font-size:12px;"><img src="' + o + '" style="border-radius:300px;width:30px;height:30px;vertical-align:top"><span style="margin:0 8px;display:inline-block;font-size:12px;color:#333;">' + n.author + '<br><span style="float:left;font-size:11px;color:#999;">' + n.lastpost + '</span></span></div><div class="weui_cell_bd weui_cell_primary">' + n.subject + '</div><div class="weui_cell_ft" style="font-size:13px;"><i class="icon icon-comment"></i> ' + n.replies + '&nbsp;&nbsp;&nbsp;<i class="icon icon-preview"></i> ' + n.views + "</div></div>";
                i.push(r)
            }
        }
        return i
    },
    a
}),
define("index/index_tab", ["require", "data/thread", "common/location"],
function(e) {
    var i = e("data/thread"),
    t = function(t, a) {
        function n(e) {
            a && a(o, e)
        }
        var o;
        this.init = function() {
            var e = new MWT.TabPanel({
                title: "最新帖子",
                body: '<div id="' + t + '-tabbody-1"></div>'
            });
            e.on("show",
            function() {
                o = 1,
                n(1)
            });
            var i = new MWT.TabPanel({
                title: "热门帖子",
                body: '<div id="' + t + '-tabbody-2"></div>'
            });
            i.on("show",
            function() {
                o = 2,
                n(1)
            });
            var a = new MWT.TabWidget({
                render: t,
                panels: [e, i],
                headerStyle: ""
            });
            a.show().active(0)
        },
        this.show_list = function(a, n, r) {
            var l = [],
            d = (dz.bodyWidth - 80, 0);
            a.Variables.data && a.Variables.data.length && (d = a.Variables.data.length);
            for (var s = 0; d > s; ++s) {
                var c = a.Variables.data[s],
                u = dz_avatar(c.authorid),
                p = '<div name="topthread" data-tid="' + c.tid + '" class="weui_cell" style="display:block;"><div style="font-size:12px;"><img src="' + u + '" style="border-radius:300px;width:30px;height:30px;vertical-align:top"><span style="margin:0 8px;display:inline-block;font-size:12px;color:#333;">' + c.author + '<br><span style="float:left;font-size:11px;color:#999;">' + c.dateline + '</span></span></div><div class="weui_cell_bd weui_cell_primary">' + c.subject + '</div><div class="weui_cell_ft" style="font-size:13px;"><i class="icon icon-comment"></i> ' + c.replies + '&nbsp;&nbsp;&nbsp;<i class="icon icon-preview"></i> ' + c.views + "</div></div>";
                l.push(p)
            }
            var m = t + "-tabbody-" + o,
            f = 1 == n ? m: m + "-" + n;
            1 == n && 0 == l.length && (l = 1 == o ? i.getNewThreads() : i.getHotThreads());
            var v = '<div style="background:#fff;"><div class="weui_cells" style="margin:0;">' + l.join("") + "</div></div>";
            jQuery("#" + f).html(v),
            jQuery("[name=topthread]").unbind("click").click(function() {
                var i = jQuery(this).data("tid");
                e("common/location").viewthread(i)
            })
        }
    };
    return t
}),
define("common/copyright", ["require"],
function(e) {
    var i = {};
    return i.footer = function() {
        var e = '<div style="text-align:center;font-size:13px;padding:15px 0;"><div style="display:inline-block;"><a href="' + dz.siteurl + 'forum.php?mobile=1&amp;simpletype=no" style="color:#666;">标准版</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="javascript:;" style="color:#bbb;">触屏版</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="' + dz.siteurl + 'forum.php?mobile=no" style="color:#666;">电脑版</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="' + bigstyle_conf.applink + '" style="color:#666;">客户端</a></div><p style="color:#666;">&copy; ' + bigstyle_conf.copyright + "</p></div>";
        return e
    },
    i
}),
define("member/login", ["require", "ajax"],
function(e) {
    var i = e("ajax"),
    t = {};
    return t.login = function() {
        window.location = dz.loginurl
    },
    t.logout = function() {
        var e = i.getFormHash();
        e && "" != e || i.post("version=4&module=profile", {},
        function(i) {
            e = i.Variables.formhash
        },
        !0);
        var t = "version=4&module=login&action=logout&formhash=" + e;
        i.post(t, {},
        function(e) {
            MWT.toast({
                msg: "您已退出登录"
            },
            function() {
                window.location = "forum.php?uc=1"
            })
        })
    },
    t
}),
define("common/sidebar", ["require", "member/login"],
function(e) {
    function i() {
        a = new MWT.SideBar({
            render: "uc-sidebar",
            width: "200px;",
            bodyStyle: "background:rgba(0,0,0,0.9);padding:0 0 20px 0;z-index:1;",
            pagebody: '<div id="uc-sidebar-div"></div>'
        }),
        a.on("open", t)
    }
    function t() {
        var i = dz.avatar,
        t = dz.username;
        0 == dz.uid && (t = "点击登录<br><span>登录后可使用更多功能哦~</span>");
        var a = '<div id="uc-sidebar-btn" class="spacebg mwt-border-bottom" style="background:inherit;color:#fff;padding:20px 0;"><img src="' + i + '"><p>' + t + "</p></div>",
        n = bigstyle_conf.uclist;
        a += '<div class="weui_cells weui_cells_access noline" style="background:inherit;margin-top:0;">';
        for (var o = 0; o < n.length; ++o) {
            var r = n[o];
            r.title && (a += '<a class="weui_cell noline" href="' + r.href + '" style="background:inherit;padding:5px;"> <div class="weui_cell_hd"><i class="' + r.icon + '" style="color:' + r.iconcolor + ';font-size:22px;padding:7px;display:block;margin-right:6px;"></i></div><div class="weui_cell_bd weui_cell_primary"><p style="font-family:\'microsoft yahei\';color:#d9d9d9;">' + r.title + "</p></div></a>")
        }
        a += "</div>",
        jQuery("#uc-sidebar-div").html(a),
        jQuery("#uc-sidebar-btn").click(function() {
            0 == dz.uid && e("member/login").login()
        })
    }
    var a, n = {};
    return n.open = function() {
        a || i(),
        a.open()
    },
    n
}),
define("common/header", ["require", "common/sidebar"],
function(e) {
    var i = {};
    return i.createHeader = function(i) {
        i.position = "top",
        i.cls = "headbar",
        i.height || (i.height = 40);
        for (var t = [], a = 0; a < i.items.length; ++a) {
            var n = i.items[a];
            switch (n) {
            case "back":
                t.push({
                    type:
                    "back",
                    width: 40,
                    style: "font-size:20px;margin-top:5px;display:inline-block;"
                });
                break;
            case "home":
                t.push({
                    icon:
                    "icon icon-home",
                    width: 40,
                    iconStyle: "font-size:18px;margin-top:5px;display:inline-block;",
                    handler: function() {
                        window.location = "forum.php?mobile=2"
                    }
                });
                break;
            case "search":
                t.push({
                    icon:
                    "icon icon-search",
                    width: 40,
                    iconStyle: "font-size:18px;margin-top:5px;display:inline-block;",
                    handler: function() {
                        window.location = "search.php?mod=forum&mobile=2"
                    }
                });
                break;
            case "uc":
                t.push({
                    icon:
                    "icon icon-user",
                    width: 40,
                    iconStyle: "font-size:18px;margin-top:5px;display:inline-block;",
                    handler: function() {
                        e("common/sidebar").open()
                    }
                });
                break;
            default:
                t.push(n)
            }
        }
        return i.items = t,
        new MWT.H5Navbar(i)
    },
    i.getHeaderIconStyle = function() {
        return "font-size:20px;margin-top:5px;"
    },
    i
}),
define("ad/adengine", ["require"],
function(e) {
    var i = {};
    return i.adtag = function() {
        var e = '<span class="adtag">广告</span>';
        return e
    },
    i.getad = function(e, i) {
        var t = bigstyle_conf.adapi;
        if (t && "" != t) {
            var a = {
                adtype: e,
                site: dz.siteurl,
                bbname: dz.bbname,
                sitename: dz.sitename
            };
            jQuery.ajax({
                url: t,
                type: "post",
                dataType: "json",
                data: a,
                success: function(e) {
                    if (e.data) {
                        var t = e.data;
                        i && i(t)
                    }
                }
            })
        }
    },
    i.run = function(e) {
        for (e();;) setTimeout(e, 3e5)
    },
    i
}),
define("ad/global_full_ad", ["require", "ajax", "./adengine"],
function(e) {
    function i() {
        a.getad(1,
        function(e) {
            var i = dz.bodyHeight - 135,
            a = '<a href="' + e.adurl + '" class="ad"><img src="' + e.adimg + '" style="width:100%;height:' + i + 'px;"></a>';
            jQuery("#global_full_ad_div").html(a),
            t.open()
        })
    }
    var t, a = (e("ajax"), e("./adengine")),
    n = {};
    return n.init = function() {
        var e = dz.bodyHeight - 140;
        t = new MWT.H5Dialog({
            render: "global_full_ad",
            top: 50,
            animate: "addialog zoomIn",
            height: e,
            body: '<div id="global_full_ad_div"></div><div style="position:absolute;bottom:1px;right:1px;">' + a.adtag() + "</div>"
        }),
        t.create(),
        setTimeout(i, 5e3)
    },
    n
}),
define("ad/horizontal_ad", ["require", "ajax", "./adengine"],
function(e) {
    function i() {
        a.getad(2,
        function(e) {
            var i = '<div style="position:relative;line-height:0;height:60px;"><a href="' + e.adurl + '" class="ad"><img src="' + e.adimg + '" style="width:100%;height:60px;"></a><div style="position:absolute;bottom:12px;right:2px;">' + a.adtag() + "</div></div>";
            jQuery("#" + t).html(i)
        })
    }
    var t, a = (e("ajax"), e("./adengine")),
    n = {};
    return n.init = function(e) {
        t = e,
        i()
    },
    n
}),
define("common/backtop", ["require"],
function(e) {
    var i = {};
    return i.init = function(e) {
        var i = e ? e: 10,
        t = MWT.create_div("mwt-backtop-div"),
        a = '<a href="javascript:;" id="bktopbtn" style="display:block;border-radius:400px;width:30px;height:30px;line-height:30px;text-align:center;background:rgba(0,0,0,0.4)"><i class="icon icon-up" style="color:#fff;font-size:16px;"></i></a>';
        jQuery("#" + t).html(a).css({
            position: "fixed",
            bottom: i + "px",
            right: "10px",
            display: "none"
        }),
        jQuery(window).scroll(function() {
            0 != jQuery(this).scrollTop() ? jQuery("#" + t).fadeIn("fast") : jQuery("#" + t).fadeOut("fast")
        }),
        jQuery("#bktopbtn").click(function() {
            jQuery("body,html").animate({
                scrollTop: 0
            },
            500)
        })
    },
    i
}),
define("index/page", ["require", "common/location", "./index_tab", "ajax", "common/copyright", "common/header", "data/forum", "ad/global_full_ad", "ad/horizontal_ad", "data/forum", "common/backtop"],
function(e) {
    function i() {
        var i = '<div style="margin:40px 0 45px;background-color:#f2f2f2;"><div id="indexbannerdiv" style="width:100%;height:160px;background:#eee;"></div><div id="indexhotdiv" style="background:#fff;"></div><div id="herad-div"></div><div id="indexbodydiv" style="margin-top:10px;"></div>' + e("common/copyright").footer() + '</div><div id="headdiv" style="position:fixed;top:0;left:0;right:0;"></div>';
        jQuery("body").append(i).css("background", "#f2f2f2");
        var l = e("common/header").createHeader({
            render: "headdiv",
            items: ["uc", {
                label: "<h1>" + dz.bbname + "</h1>"
            },
            "search"]
        });
        l.create(),
        t(),
        r = e("data/forum").getAllForumIds(),
        o = new d("indexbodydiv", n),
        o.init(),
        a(),
        e("ad/global_full_ad").init(),
        e("ad/horizontal_ad").init("herad-div")
    }
    function t() {
        for (var e = [], i = 0; i < bigstyle_conf.banners.length; ++i) {
            var t = bigstyle_conf.banners[i];
            e.push({
                url: t.image,
                handler: function(e) {
                    window.location = bigstyle_conf.banners[e].href
                }
            })
        }
        var a = new MWT.Slide({
            render: "indexbannerdiv",
            autoplay: 0,
            images: e
        });
        a.create()
    }
    function a() {
        var i = e("data/forum").getHotForums();
        if (0 != i.length) {
            var t = '<div class="weui_cells_title mwt-border-bottom" style="margin:0;">热门版块</div><div id="indexhotdiv-f"></div>';
            jQuery("#indexhotdiv").html(t);
            for (var a = i.length < 4 ? i.length: 4, n = [], o = 0; a > o; ++o) {
                var r = i[o],
                t = '<div name="ffsasdw" data-fid="' + r.fid + '"><img src="' + r.icon + '" style="width:30px;height:30px;"><br><span style="font-size:14px;">' + r.name + "</span></div>";
                n.push({
                    html: t
                })
            }
            var d = new MWT.TabBox({
                render: "indexhotdiv-f",
                size: "1x" + a,
                border: !1,
                cellStyle: "text-align:center;padding:5px 0;line-height:20px;",
                items: n
            });
            d.on("show",
            function() {
                jQuery("[name=ffsasdw]").click(function() {
                    var e = jQuery(this).data("fid");
                    l.forumdisplay(e)
                })
            }),
            d.show()
        }
    }
    function n(e, i) {
        var t = "version=4",
        a = 20;
        switch (e) {
        case 1:
            var n = (i - 1) * a;
            t += "&module=newthreads&fids=" + r.join(",") + "&start=" + n + "&limit=" + a;
            break;
        case 2:
            t += "&module=hotthread";
            break;
        default:
            return
        }
        MWT.show_loading(),
        s.post(t, {},
        function(t) {
            MWT.hide_loading();
            var n = 1 == e ? a: parseInt(t.Variables.perpage);
            o.show_list(t, i, n)
        })
    }
    var o, r, l = e("common/location"),
    d = e("./index_tab"),
    s = e("ajax"),
    c = {};
    return c.open = function(t) {
        i(),
        e("common/backtop").init(50)
    },
    c
}),
define("index/page2", ["require", "common/location", "./index_tab", "ajax", "common/copyright", "common/header", "data/forum", "data/forum", "common/backtop", "ad/global_full_ad", "ad/horizontal_ad"],
function(e) {
    function i() {
        var i = '<div style="margin:40px 0 45px;background-color:#f2f2f2;"><div id="indexbannerdiv" style="width:100%;height:160px;background:#eee;"></div><div id="indexhotdiv" style="background:#fff;"></div><div id="herad-div"></div><div id="indexbodydiv" style="margin-top:10px;"></div>' + e("common/copyright").footer() + '</div><div id="headdiv" style="position:fixed;top:0;left:0;right:0;"></div>';
        jQuery("body").append(i).css("background", "#f2f2f2");
        var o = e("common/header").createHeader({
            render: "headdiv",
            items: ["uc", {
                label: "<h1>" + dz.bbname + "</h1>"
            },
            "search"]
        });
        o.create(),
        t(),
        n = e("data/forum").getAllForumIds(),
        a();
        var r = new MWT.TabPanel({
            title: "最新帖子",
            body: '<div id="new_thread_list_div" class="weui_cells" style="margin:0;"></div>'
        });
        r.on("show",
        function() {
            var e = document.getElementById("thread_div_0");
            e && "" != e.innerHTML && (jQuery("#new_thread_list_div").html(e.innerHTML), e.innerHTML = "")
        });
        var l = new MWT.TabPanel({
            title: "热门帖子",
            body: '<div id="hot_thread_list_div" class="weui_cells" style="margin:0;"></div>'
        });
        l.on("show",
        function() {
            var e = document.getElementById("thread_div_1");
            e && "" != e.innerHTML && (jQuery("#hot_thread_list_div").html(e.innerHTML), e.innerHTML = "")
        });
        var d = new MWT.TabPanel({
            title: "精华帖子",
            body: '<div id="best_thread_list_div" class="weui_cells" style="margin:0;"></div>'
        });
        d.on("show",
        function() {
            var e = document.getElementById("thread_div_2");
            e && "" != e.innerHTML && (jQuery("#best_thread_list_div").html(e.innerHTML), e.innerHTML = "")
        });
        var s = new MWT.TabWidget({
            render: "indexbodydiv",
            panels: [r, l, d],
            border: !1,
            justify: !0,
            style: "border-radius:4px;",
            headerStyle: ""
        });
        s.show().active(0)
    }
    function t() {
        for (var e = [], i = 0; i < bigstyle_conf.banners.length; ++i) {
            var t = bigstyle_conf.banners[i];
            e.push({
                url: t.image,
                handler: function(e) {
                    window.location = bigstyle_conf.banners[e].href
                }
            })
        }
        var a = new MWT.Slide({
            render: "indexbannerdiv",
            autoplay: 0,
            images: e
        });
        a.create()
    }
    function a() {
        var i = e("data/forum").getHotForums();
        if (0 != i.length) {
            var t = '<div class="weui_cells_title mwt-border-bottom" style="margin:0;">热门版块</div><div id="indexhotdiv-f"></div>';
            jQuery("#indexhotdiv").html(t);
            for (var a = i.length < 4 ? i.length: 4, n = [], r = 0; a > r; ++r) {
                var l = i[r],
                t = '<div name="ffsasdw" data-fid="' + l.fid + '"><img src="' + l.icon + '" style="width:30px;height:30px;"><br><span style="font-size:14px;">' + l.name + "</span></div>";
                n.push({
                    html: t
                })
            }
            var d = new MWT.TabBox({
                render: "indexhotdiv-f",
                size: "1x" + a,
                border: !1,
                cellStyle: "text-align:center;padding:5px 0;line-height:20px;",
                items: n
            });
            d.on("show",
            function() {
                jQuery("[name=ffsasdw]").click(function() {
                    var e = jQuery(this).data("fid");
                    o.forumdisplay(e)
                })
            }),
            d.show()
        }
    }
    var n, o = e("common/location"),
    r = (e("./index_tab"), e("ajax"), {});
    return r.open = function(t) {
        i(),
        e("common/backtop").init(50),
        e("ad/global_full_ad").init(),
        e("ad/horizontal_ad").init("herad-div")
    },
    r
}),
define("forum/forumlist", ["require", "ajax", "common/copyright", "common/header", "ad/horizontal_ad", "common/location", "common/backtop"],
function(e) {
    function i() {
        var i = '<div style="margin:40px 0 45px;"><div id="ad-div"></div><div id="forumlistdiv"></div>' + e("common/copyright").footer() + "</div>";
        jQuery("body").append(i).css("background", "#f2f2f2");
        var a = e("common/header").createHeader({
            items: ["uc", {
                label: "<h1>论坛</h1>"
            },
            "search"]
        });
        a.create(),
        t(),
        e("ad/horizontal_ad").init("ad-div")
    }
    function t() {
        n.post("version=4&module=forumindex", {},
        function(e) {
            a(e.Variables.catlist, e.Variables.forumlist)
        })
    }
    function a(i, t) {
        for (var a = {},
        n = 0; n < t.length; ++n) {
            var o = t[n];
            a[o.fid] = n
        }
        for (var r = "",
        n = 0; n < i.length; ++n) {
            var l = i[n].name,
            d = 0 == n ? 'style="margin:0;"': "";
            r += '<div style="background:#fff;"><div class="weui_cells_title mwt-border-bottom" ' + d + ">" + l + '</div><div class="weui_cells">';
            for (var s = 0; s < i[n].forums.length; ++s) {
                var c = i[n].forums[s],
                u = a[c],
                p = t[u],
                m = p.icon ? p.icon: bigstyle_conf.default_forum_icon;
                r += '<div name="fmdiv" data-fid="' + c + '" data-fname="' + p.name + '" class="weui_cell"><div class="weui_cell_hd"><img src="' + m + '" style="width:40px;height:40px;margin-right:10px;display:block"></div><div class="weui_cell_bd weui_cell_primary">' + p.name + '<br><span style="font-size:13px;">主题:' + p.threads + " | 帖子:" + p.posts + '</span></div><div class="weui_cell_ft"><span style="border-radius:300px;background:#666;color:#fff;font-size:12px;padding:5px 10px;">今日: ' + p.todayposts + "</span></div></div>"
            }
            r += "</div></div>"
        }
        jQuery("#forumlistdiv").html(r),
        jQuery("[name=fmdiv]").click(function() {
            var i = jQuery(this).data("fid");
            e("common/location").forumdisplay(i)
        })
    }
    var n = e("ajax"),
    o = {};
    return o.open = function(t) {
        i(),
        e("common/backtop").init(50)
    },
    o
}),
define("forum/thread_tab", ["require", "common/location"],
function(e) {
    var i = function(i, t) {
        function a(e) {
            t && t(n, e)
        }
        var n;
        this.init = function() {
            var e = new MWT.TabPanel({
                title: "全部",
                body: '<div id="' + i + '-tabbody-1"></div>'
            });
            e.on("show",
            function() {
                n = 1,
                a(1)
            });
            var t = new MWT.TabPanel({
                title: "最新",
                body: '<div id="' + i + '-tabbody-2"></div>'
            });
            t.on("show",
            function() {
                n = 2,
                a(1)
            });
            var o = new MWT.TabPanel({
                title: "精华",
                body: '<div id="' + i + '-tabbody-3"></div>'
            });
            o.on("show",
            function() {
                n = 3,
                a(1)
            });
            var r = new MWT.TabPanel({
                title: "热门",
                body: '<div id="' + i + '-tabbody-4"></div>'
            });
            r.on("show",
            function() {
                n = 4,
                a(1)
            });
            var l = new MWT.TabWidget({
                render: i,
                panels: [e, t, o, r],
                headerStyle: ""
            });
            l.show().active(0)
        },
        this.show_list = function(t) {
            for (var o = [], r = (dz.bodyWidth - 80, t.Variables.forum_threadlist.length), l = 0; r > l; ++l) {
                var d = t.Variables.forum_threadlist[l];
                if (! (d.displayorder > 0)) {
                    var s = dz_avatar(d.authorid),
                    c = '<div name="topthread" data-tid="' + d.tid + '" class="weui_cell" style="display:block;"><div style="font-size:12px;"><img src="' + s + '" style="border-radius:300px;width:30px;height:30px;vertical-align:top"><span style="margin:0 8px;display:inline-block;font-size:12px;color:#333;">' + d.author + '<br><span style="float:left;font-size:11px;color:#999;">' + d.lastpost + '</span></span></div><div class="weui_cell_bd weui_cell_primary">' + d.subject + '</div><div class="weui_cell_ft" style="font-size:13px;"><i class="icon icon-comment"></i> ' + d.replies + '&nbsp;&nbsp;&nbsp;<i class="icon icon-preview"></i> ' + d.views + "</div></div>";
                    o.push(c)
                }
            }
            var u = parseInt(t.Variables.page),
            p = i + "-tabbody-" + n,
            m = 1 == u ? p: p + "-" + u,
            f = '<div style="background:#fff;"><div class="weui_cells" style="margin:0;">' + o.join("") + "</div></div>";
            if (has_next_page(u, t.Variables.forum.threads, t.Variables.tpp, r)) {
                var v = u + 1;
                f += '<div id="' + p + "-" + v + '"><button id="' + p + '-nbtn" data-page="' + v + '" class="nextbtn">点击加载下一页</button></div>'
            }
            jQuery("#" + m).html(f),
            jQuery("#" + p + "-nbtn").unbind("click").click(function() {
                var e = jQuery(this).data("page");
                a(e)
            }),
            jQuery("[name=topthread]").unbind("click").click(function() {
                var i = jQuery(this).data("tid");
                e("common/location").viewthread(i)
            })
        }
    };
    return i
}),
define("forum/forumdisplay", ["require", "common/location", "common/header", "ajax", "./thread_tab", "common/copyright", "common/header", "ad/horizontal_ad", "common/backtop"],
function(e) {
    function i() {
        var i = '<div style="margin:40px 0 45px;"><div id="ad-div"></div><div id="forumlist-topdiv-' + n + '"></div><div id="formtabdiv-' + n + '" style="margin-top:.77em;"></div>' + e("common/copyright").footer() + "</div>";
        jQuery("body").append(i).css("background", "#f2f2f2");
        var a = e("common/header").createHeader({
            items: ["back", "home", {
                label: '<h1 id="forumpagetitle-' + n + '">论坛</h1>'
            },
            {
                width: 40
            },
            {
                icon: "icon icon-ask",
                iconStyle: d,
                width: 40,
                handler: function() {
                    window.location = "forum.php?mod=post&action=newthread&fid=" + n
                }
            }]
        });
        a.create(),
        u = !0,
        o = new c("formtabdiv-" + n, t),
        o.init(),
        e("ad/horizontal_ad").init("ad-div")
    }
    function t(e, i) {
        var t = "version=4&module=forumdisplay&fid=" + n + "&page=" + i;
        switch (e) {
        case 2:
            t += "&filter=lastpost&orderby=lastpost";
            break;
        case 3:
            t += "&filter=digest&digest=1";
            break;
        case 4:
            t += "&filter=heat&orderby=heats"
        }
        MWT.show_loading(),
        s.post(t, {},
        function(e) {
            MWT.hide_loading(),
            u && (u = !1, a(e)),
            o.show_list(e)
        })
    }
    function a(e) {
        var i = e.Variables.forum;
        jQuery("#forumpagetitle-" + n).html(i.name);
        var t = i.icon ? i.icon: bigstyle_conf.default_forum_icon,
        a = '<div name="fmdiv" data-fname="' + i.name + '" class="weui_cell"><div class="weui_cell_hd"><img src="' + t + '" style="width:40px;height:40px;margin-right:10px;display:block"></div><div class="weui_cell_bd weui_cell_primary">' + i.name + '<br><span style="font-size:13px;">主题:' + i.threads + " | 帖子:" + i.posts + '</span></div><div class="weui_cell_ft"><span name="fav-forum-btn" data-fid="' + n + '" style="border-radius:300px;background:#f1f1f1;color:#DA5D0C;font-size:12px;padding:5px 10px;"><i class="icon icon-favor"></i> 收藏</span></div></div>';
        if (e.Variables.sublist.length > 0) {
            for (var o = [], l = dz.bodyWidth - 120, d = 0; d < e.Variables.sublist.length; ++d) {
                var c = e.Variables.sublist[d],
                u = '<div name="subforum" data-fid="' + c.fid + '" class="weui_cell"><div class="weui_cell_bd weui_cell_primary"><span class="text-block-nowrap" style="width:' + l + 'px">' + c.name + '</span></div><div class="weui_cell_ft" style="font-size:13px;"><span style="font-size:12px;">今日: ' + c.todayposts + "</span></div></div>";
                o.push(u)
            }
            a += '<div style="background:#fff;"><div class="weui_cells_title mwt-border-bottom">子版块</div><div class="weui_cells">' + o.join("") + "</div></div>"
        }
        if (e.Variables.forum_threadlist.length > 0) {
            for (var p = [], l = dz.bodyWidth - 80, d = 0; d < e.Variables.forum_threadlist.length; ++d) {
                var c = e.Variables.forum_threadlist[d];
                if (0 != c.displayorder) {
                    var u = '<div name="topthread" data-tid="' + c.tid + '" class="weui_cell"><div class="weui_cell_bd weui_cell_primary"><span class="text-block-nowrap" style="width:' + l + 'px">' + c.subject + '</span></div><div class="weui_cell_ft" style="font-size:13px;"><i class="icon icon-preview"></i> ' + c.views + "</div></div>";
                    p.push(u)
                }
            }
            p.length > 0 && (a += '<div style="background:#fff;"><div class="weui_cells_title mwt-border-bottom">置顶</div><div class="weui_cells">' + p.join("") + "</div></div></div>")
        }
        jQuery("#forumlist-topdiv-" + n).html(a),
        e.Variables.sublist.length > 0 && jQuery("[name=subforum]").click(function() {
            var e = jQuery(this).data("fid");
            r.forumdisplay(e)
        }),
        jQuery("[name=fav-forum-btn]").click(function() {
            var e = jQuery(this).data("fid"),
            i = "version=4&module=favforum&id=" + e + "&formhash=" + s.getFormHash();
            s.post(i, {},
            function(e) {
                e.Message && "favorite_do_success" == e.Message.messageval ? MWT.toast({
                    msg: "已收藏"
                }) : "favorite_repeat" == e.Message.messageval ? MWT.toast({
                    msg: "已收藏"
                }) : MWT.alert({
                    msg: e.Message.messagestr
                })
            })
        })
    }
    var n, o, r = e("common/location"),
    l = e("common/header"),
    d = l.getHeaderIconStyle(),
    s = e("ajax"),
    c = e("./thread_tab"),
    u = !0,
    p = {};
    return p.open = function(t, a) {
        n = a,
        i(),
        e("common/backtop").init(10)
    },
    p
}),
define("common/seccode", ["require"],
function(e) {
    var i = {};
    return i.create = function(e, i) {
        var t = i ? i: "",
        a = dz.securl + "&update=" + time(),
        n = '<img id="sec-' + e + '" src="' + a + '" style="cursor:pointer;' + t + '">';
        jQuery("#" + e).html(n),
        jQuery("#sec-" + e).click(function() {
            var e = dz.securl + "&update=" + time();
            jQuery(this).attr("src", e)
        })
    },
    i
}),
define("common/smiley", ["require"],
function(e) {
    function i(e) {
        for (var i = o[e], e = i.substr(1), t = smilies_type["_" + e], n = smileyroot + "/" + t[1], r = smilies_array[e][1], l = 9, d = 100 / l + "%", s = '<table style="windth:100%"><tr>', c = 0; c < r.length; ++c) {
            var u = r[c],
            p = '<img src="' + n + "/" + u[2] + '" style="width:20px;height:20px;padding:10px;" name="smileybtn" data-code="' + u[1] + '"/>';
            c > 0 && c % l == 0 && (s += "</tr><tr>"),
            s += '<td width="' + d + '" align="center">' + p + "</td>"
        }
        for (; c % l;) s += '<td width="' + d + '"></td>',
        ++c;
        s += "</tr></table>",
        jQuery("#smiley-panel-div").html(s),
        jQuery("[name=smileybtn]").unbind("click").click(function() {
            var e = jQuery(this).data("code");
            a.value += e
        })
    }
    function t() {
        var e = [];
        for (var t in smilies_type) {
            var a = smilies_type[t];
            2 == a.length && (e.push({
                label: '<span style="padding:0 3px;">' + a[0] + "</span>",
                width: "auto;",
                handler: i
            }), o.push(t))
        }
        var n = new MWT.ScrollBar({
            render: "smiley-bar-div",
            items: e
        });
        n.create(),
        n.active(0)
    }
    var a, n, o = [],
    r = {};
    return r.open = function(e) {
        0 == bigstyle_conf.plugin_type,
        a = mwt.$(e),
        n || (n = new MWT.SideBar({
            render: "siderbottom",
            position: "bottom",
            height: "240px",
            bodyStyle: "background-color:#fff;padding:0;",
            pagebody: '<div id="smiley-bar-div" class="mwt-border-bottom" style="padding:0 5px;"></div><div id=\'smiley-panel-div\'></div>'
        }), n.on("open", t)),
        n.open()
    },
    r
}),
define("forum/newthread", ["require", "common/header", "ajax", "data/forum", "common/copyright", "common/header", "common/seccode", "common/smiley", "member/login", "common/location"],
function(e) {
    function i() {
        l = new MWT.Form,
        l.addField("subject", new MWT.TextField({
            render: "titlediv",
            value: "",
            placeholder: "标题",
            errmsg: "标题不能超过35个字符",
            style: "width:" + (dz.bodyWidth - 50) + "px",
            checkfun: function(e) {
                return e.length <= 35
            }
        })),
        l.addField("message", new MWT.TextField({
            type: "textarea",
            render: "contentdiv",
            style: "width:100%;height:150px;",
            value: "",
            placeholder: "说点什么吧~",
            errmsg: "内容不能超过1000个字符",
            checkfun: function(e) {
                return e.length <= 1024
            }
        }));
        var i = "none";
        "0" != dz.postseccheck && (i = "flex", l.addField("seccodeverify", new MWT.TextField({
            render: "secdiv",
            value: "",
            placeholder: "验证码",
            style: "width:120px;",
            errmsg: "内容不能超过1000个字符",
            checkfun: function(e) {
                return e.length <= 1024
            }
        })));
        var n = '<div class="weui_cells weui_cells_form" style="margin-top:40px;"><div class="weui_cell weui_cell_select"><div class="weui_cell_bd weui_cell_primary"><select class="weui_select" id="forumsel"></select></div></div><div class="weui_cell weui_cell_select" id="typeseldiv" style="display:none;"><div class="weui_cell_bd weui_cell_primary"><select class="weui_select" id="typesel"></select></div></div><div class="weui_cell"><div class="weui_cell_bd weui_cell_primary" id="titlediv"></div></div><div class="weui_cell" style="padding-bottom:0;"><div class="weui_cell_bd weui_cell_primary" id="contentdiv"></div></div><div class="weui_cell" style="padding:5px 15p"><div class="weui_cell_bd weui_cell_primary" style="text-align:right;"><i id="smilebtn" class="fa fa-smile-o" style="font-size:19px;margin-right:15px;"></i><i id="picbtn" class="icon icon-pic" style="font-size:18px;"></i><form method="POST" enctype="multipart/form-data" style="display:none"><input id="picup-newth" name="Filedata" class="weui_uploader_input" type="file" accept="image/jpg,image/jpeg,image/png,image/gif"></form></div></div><div style="padding:5px 15px;"><div class="weui_cell_bd weui_cell_primary"><div class="weui_uploader"><div class="weui_uploader_bd"><ul id="attaul" class="weui_uploader_files mwt-imgup-ul" style="display:block;"></ul></div></div></div></div><div class="weui_cell weui_vcode" style="display:' + i + '"><div class="weui_cell_bd weui_cell_primary" id="secdiv"></div><div class="weui_cell_ft" id="secimg"></div></div></div>' + e("common/copyright").footer();
        jQuery("body").append(n).css("background", "#f2f2f2");
        var o = e("common/header").createHeader({
            items: ["back", "home", {
                label: "<h1>发新帖</h1>"
            },
            {
                label: "",
                width: 30
            },
            {
                label: "发帖",
                width: 50,
                handler: p.submit
            }]
        });
        o.create(),
        l.create(),
        e("common/seccode").create("secimg", "width:150px;"),
        l.reset(),
        a(),
        jQuery("#attaul").html(),
        jQuery("#picup-newth").change(t),
        jQuery("#picbtn").click(function() {
            mwt.$("picup-newth").click()
        }),
        jQuery("#smilebtn").click(function() {
            e("common/smiley").open("contentdivtxt");
        })
    }
    function t() {
        mwt.show_loading("上传图片..."),
        jQuery.ajaxFileUpload({
            url: s.getAjaxUrl("version=4&module=forumupload&type=image&inajax=yes&infloat=yes&simple=2"),
            secureuri: !1,
            fileElementId: "picup-newth",
            data: {
                uid: dz.uid,
                hash: dz.hash
            },
            timeout: 3e4,
            complete: function(e) {
                mwt.hide_loading(),
                jQuery("#picup-newth").change(t)
            },
            success: function(e, i) {
                var t = e.body.innerHTML,
                a = t.split("|"),
                n = a[3];
                u[n] = {
                    description: ""
                };
                var o = "data/attachment/forum/" + a[5],
                r = '<li id="upimg-' + n + '"><img src="' + o + '" style="max-width:90px;max-height:90px;"><i name="upimg-del" data-idx="' + a[3] + '" class="fa fa-minus-circle"></i></li>';
                jQuery("#attaul").append(r),
                jQuery('[name="upimg-del"]').unbind("click").click(function() {
                    var e = jQuery(this).data("idx");
                    jQuery("#upimg-" + e).html(""),
                    delete u[e]
                })
            },
            error: function(e, i, t) {
                mwt.alert(t)
            }
        })
    }
    function a() {
        var e = c.getForumSelectOptions();
        jQuery("#forumsel").html(e),
        0 != r && set_select_value("forumsel", r),
        n(),
        jQuery("#forumsel").unbind("change").change(n)
    }
    function n() {
        jQuery("#typesel").html('<option value="0">请选择主题分类</option>');
        var e = get_select_value("forumsel"),
        i = c.getForumThreadTypes(e);
        if (i && i.length) {
            for (var t = '<option value="0">请选择主题分类</option>',
            a = 0; a < i.length; ++a) {
                var n = i[a];
                t += '<option value="' + n.tid + '">' + n.name + "</option>"
            }
            jQuery("#typesel").html(t),
            jQuery("#typeseldiv").show()
        } else jQuery("#typesel").html('<option value="0">请选择主题分类</option>'),
        jQuery("#typeseldiv").hide()
    }
    var o, r, l, d, s = (e("common/header"), e("ajax")),
    c = e("data/forum"),
    u = {},
    p = {};
    return p.open = function(t, a, n) {
        return 0 == dz.uid ? void e("member/login").login() : (r = a ? a: 0, o || i(), void(d = n ? n: null))
    },
    p.submit = function() {
        var i = l.getData();
        if (i.message = get_text_value("contentdivtxt"), i.fid = get_select_value("forumsel"), i.typeid = get_select_value("typesel"), i.attachnew = u, 0 == i.fid) return void MWT.alert("请选择版块");
        i.formhash = s.getFormHash(),
        i.posttime = time(),
        i.topicsubmit = "yes";
        var t = "version=4&module=newthread&extra=&inajax=1";
        s.post(t, i,
        function(t) {
            return t.Message && t.Message.messagestr ? "post_newthread_succeed" == t.Message.messageval ? void MWT.toast({
                msg: "发帖成功"
            },
            function() {
                e("common/location").forumdisplay(i.fid)
            }) : void MWT.alert({
                msg: t.Message.messagestr
            }) : (MWT.alert("服务端异常,请刷新页面重试"), void console.log(t))
        })
    },
    p
}),
define("forum/sendreply", ["require", "common/header", "ajax", "common/copyright", "common/seccode", "common/smiley"],
function(e) {
    function i() {
        n = new MWT.Form,
        n.addField("message", new MWT.TextField({
            type: "textarea",
            render: "contentdiv",
            style: "width:100%;height:200px;",
            value: "",
            placeholder: "说点什么吧~",
            errmsg: "内容不能超过1000个字符",
            checkfun: function(e) {
                return e.length <= 1024
            }
        }));
        var i = "none";
        "0" != dz.postseccheck && (i = "flex", n.addField("seccodeverify", new MWT.TextField({
            render: "secdiv",
            value: "",
            placeholder: "验证码",
            style: "width:120px;",
            errmsg: "内容不能超过1000个字符",
            checkfun: function(e) {
                return e.length <= 1024
            }
        }))),
        t = new MWT.H5Page({
            render: "page-reply-" + a,
            header: l.createHeader({
                items: [{
                    icon: "icon icon-left",
                    iconStyle: "font-size:20px;margin-top:5px;",
                    width: 40,
                    handler: function() {
                        t.close()
                    }
                },
                {
                    label: "<h1>发表回复</h1>"
                },
                {
                    label: "回复",
                    width: 40,
                    handler: s.submit
                }]
            }),
            bodyStyle: "background-color:#f2f2f2;padding:0;",
            pagebody: '<div class="weui_cells weui_cells_form" style="margin-top:0;"><div class="weui_cell"><div class="weui_cell_bd weui_cell_primary" id="contentdiv"></div></div><div class="weui_cell" style="padding:5px 15p"><div class="weui_cell_bd weui_cell_primary" style="text-align:right;"><i id="smilebtn" class="fa fa-smile-o" style="font-size:19px;margin-right:15px;"></i></div></div><div class="weui_cell weui_vcode" style="display:' + i + '"><div class="weui_cell_bd weui_cell_primary" id="secdiv"></div><div class="weui_cell_ft" id="secimg"></div></div></div>' + e("common/copyright").footer()
        }),
        t.on("open",
        function() {
            n.create(),
            e("common/seccode").create("secimg", "width:150px;"),
            n.reset(),
            jQuery("#smilebtn").unbind("click").click(function() {
                e("common/smiley").open("contentdivtxt")
            })
        })
    }
    var t, a, n, o, r, l = e("common/header"),
    d = e("ajax"),
    s = {};
    return s.open = function(e, n, l, d) {
        a = n ? n: 0,
        o = l,
        0 != a && (t || i(), r = d ? d: null, t.setAnimate(e).open())
    },
    s.submit = function() {
        var e = n.getData();
        e.message = get_text_value("contentdivtxt"),
        e.formhash = o;
        var i = "version=4&module=sendreply&replysubmit=yes&extra=&inajax=1&tid=" + a;
        d.post(i, e,
        function(e) {
            return e.Message && e.Message.messagestr ? "post_reply_succeed" == e.Message.messageval ? void MWT.toast({
                msg: "回复成功"
            },
            function() {
                t.close(),
                r && r()
            }) : void MWT.alert({
                msg: e.Message.messagestr
            }) : (MWT.alert("服务端异常,请刷新页面重试"), void console.log(e))
        })
    },
    s
}),
define("forum/viewthread", ["require", "common/header", "ajax", "common/copyright", "./sendreply", "ad/horizontal_ad", "common/backtop"],
function(e) {
    function i(e) {
        var i = dz.siteurl + "/forum.php?mod=topicadmin&action=moderate&optgroup=3&modsubmit=yes&mobile=2&handlekey=moderateform&inajax=1",
        t = {
            frommodcp: "",
            formhash: c.getFormHash(),
            fid: e,
            reason: "手机版主题操作",
            "moderate[]": l,
            "operations[]": "delete"
        };
        c.post3(i, t,
        function(i) {
            var t = jQuery("root", i).text();
            MWT.alert(t,
            function() {
                window.location = "forum.php?mod=forumdisplay&fid=" + e + "&mobile=2"
            })
        })
    }
    function t() {
        var i = '<div style="line-height:40px;">&nbsp;</div><div id="ad-div"></div><div id="vth-topdiv-' + l + '" style="background:#fff;"></div><div style="background:#fff;margin-bottom:5px;"><div class="weui_cells_title mwt-border-bottom">相关回复</div><div id="vthdiv-' + l + '" style="min-height:50px;"></div></div>' + e("common/copyright").footer() + '<div style="line-height:45px;">&nbsp;</div><div id="headdiv" style="position:fixed;top:0;left:0;right:0;"></div><div id="footdiv" style="position:fixed;bottom:0;left:0;right:0;background:#fff;">';
        jQuery("body").append(i).css("background", "#f2f2f2");
        var t = s.createHeader({
            render: "headdiv",
            items: ["back", "home", {
                label: '<h1 id="threadtitle' + l + '">查看帖子</h1>'
            },
            {
                label: "",
                width: 40
            },
            {
                label: "",
                width: 40
            }]
        });
        t.create();
        var n = new MWT.H5Navbar({
            render: "footdiv",
            position: "bottom",
            cls: "footbar mwt-border-top",
            height: 45,
            items: [{
                icon: "icon icon-comment",
                label: "回复",
                handler: function() {
                    e("./sendreply").open("slideRight", l, d,
                    function() {
                        a(1)
                    })
                }
            },
            {
                icon: "icon icon-favor",
                label: "收藏",
                handler: function() {
                    var e = "version=4&module=favthread&id=" + l + "&formhash=" + c.getFormHash();
                    c.post(e, {},
                    function(e) { ! e.Message || "favorite_do_success" != e.Message.messageval && "favorite_repeat" != e.Message.messageval ? MWT.alert({
                            msg: e.Message.messagestr
                        }) : MWT.toast({
                            msg: "已收藏"
                        })
                    })
                }
            }]
        });
        n.create(),
        u = !0,
        a(1),
        e("ad/horizontal_ad").init("ad-div")
    }
    function a(e) {
        var i = "version=4&module=viewthread&tid=" + l + "&page=" + e;
        MWT.show_loading(),
        c.post(i, {},
        function(i) {
            d = i.Variables.formhash,
            MWT.hide_loading(),
            u && (u = !1, n(i)),
            r(i, e)
        })
    }
    function n(e) {
        var t = e.Variables.thread,
        a = '<div class="mwt-border-bottom"><table class="tablay"><tr><td style="padding:2px 5px;"><span style="font-size:18px;color:#333;">' + t.subject + '</span><br><span style="float:right;display:block;color:#aaa;font-size:12px;padding-right:5px;"><i class="icon icon-preview"></i> ' + t.views + '&nbsp;&nbsp;&nbsp;<i class="icon icon-comment"></i> ' + t.replies + "</span></tr></table></div>",
        n = e.Variables.postlist[0],
        o = dz_avatar(n.authorid),
        r = [],
        d = [];
        if (n.attachments) for (var s in n.attachments) {
            var c = n.attachments[s];
            if (c.url) if ("1" == c.isimage) {
                var u = '<img src="' + c.url + c.attachment + '">';
                r.push(u)
            } else {
                var p = c.filename;
                "Untitled" == p && (p = "点击下载附件");
                var m = '<a href="' + c.url + c.attachment + '" style="color:#2366A8;text-decoration:underline;font-size:13px;">' + p + " (" + c.attachsize + ", 下载: " + c.downloads + ")</a>";
                d.push(m)
            }
        }
        var f = "";
        1 == dz.groupid && (f = '<br><a href="javascript:;" name="threaddel" data-fid="' + e.Variables.fid + '">删除</a>'),
        a += '<div><div class="weui_cell" style="padding:5px;"><div class="weui_cell_hd"><img src="' + o + '" style="border-radius:300px;width:30px;height:30px;vertical-align:top;"></div><div class="weui_cell_bd weui_cell_primary"><span style="margin:0 8px;display:inline-block;font-size:12px;color:#333;">' + n.author + '<br><span style="float:left;font-size:11px;color:#999;">' + n.dateline + '</span></span></div><div class="weui_cell_ft" style="font-size:11px;color:#aaa">楼主' + f + '</div></div><div style="padding:5px;word-break:break-all;" class="content-div"><div id="submessage">' + n.message + "</div><br>" + r.join("") + d.join("<br>") + "</div></div>",
        jQuery("#vth-topdiv-" + l).html(a);
        var v = jQuery("#oripaper").html();
        "" != v && jQuery("#submessage").html(v),
        jQuery("[name=threaddel]").click(function() {
            var e = jQuery(this).data("fid");
            MWT.confirm({
                msg: "确定删除该主题吗？"
            },
            function() {
                i(e)
            })
        })
    }
    function o(e) {
        var i = dz_avatar(e.authorid),
        t = '<div class="mwt-border-bottom"><div class="weui_cell" style="padding:5px;"><div class="weui_cell_hd"><img src="' + i + '" style="border-radius:300px;width:30px;height:30px;vertical-align:top;"></div><div class="weui_cell_bd weui_cell_primary"><span style="margin:0 8px;display:inline-block;font-size:12px;color:#333;">' + e.author + '<br><span style="float:left;font-size:11px;color:#999;">' + e.dateline + '</span></span></div><div class="weui_cell_ft" style="font-size:11px;color:#aaa">' + e.number + '楼</div></div><div style="padding:5px;" class="content-div">' + e.message + "</div></div>";
        return t
    }
    function r(e, i) {
        for (var t = [], n = e.Variables.postlist.length, r = 0; n > r; ++r) {
            var d = e.Variables.postlist[r];
            1 != d.number && t.push(o(d))
        }
        var s = "vthdiv-" + l,
        c = 1 == i ? s: s + "-" + i,
        u = t.join("");
        if (has_next_page(i, e.Variables.thread.replies, e.Variables.ppp, n)) {
            var p = i + 1;
            u += '<div id="' + s + "-" + p + '"><button id="' + s + '-nbtn" data-page="' + p + '" class="nextbtn">点击加载下一页</button></div>'
        }
        1 == i && "" == u && (u = '<p align="center" style="color:#aaa;font-size:13px;margin-top:5px;">暂无回复</p>'),
        jQuery("#" + c).html(u),
        jQuery("#" + s + "-nbtn").unbind("click").click(function() {
            var e = jQuery(this).data("page");
            a(e)
        })
    }
    var l, d, s = e("common/header"),
    c = (s.getHeaderIconStyle(), e("ajax")),
    u = !0,
    p = {};
    return p.open = function(i, a) {
        l = a,
        t(),
        e("common/backtop").init(50)
    },
    p
}),
define("common/exmsg", ["require"],
function(e) {
    var i = {};
    return i.error = function(e) {
        var i = '<table class="tablay"><tr><td style="text-align:center;vertical-align:middle;padding-top:10px;" width="70"><i class="fa fa-warning" style="font-size:40px;color:#999;"></i></td><td style="vertical-align:middle;color:#999;padding-top:10px;">' + e + "</td></tr></table>";
        return i
    },
    i.portal_disable = function() {
        var e = '<center style="color:#999;"><p><i class="fa fa-frown-o" style="font-size:40px;margin-top:20px;"></i></p>您访问的站点未开启门户功能</center>';
        return e
    },
    i
}),
define("portal/channel_panel", ["require", "./index"],
function(e) {
    var i, t = {};
    return t.init = function(t) {
        i = new MWT.H5Page({
            render: "channelfpdiv",
            animate: "slideTop",
            header: new MWT.H5Navbar({
                position: "top",
                cls: "float_pannel mwt-border-bottom",
                bodyStyle: "background:#fff",
                height: 40,
                items: [{
                    label: '<span style="font-size:16px;">选择频道</span>',
                    width: 100
                },
                {
                    label: ""
                },
                {
                    icon: "icon icon-delete",
                    iconStyle: "font-size:16px;",
                    width: 40,
                    handler: function() {
                        i.close()
                    }
                }]
            }),
            bodyStyle: "background-color:#fff;padding:0;",
            pagebody: "<div id='channelfp-bodydiv'></div>"
        });
        for (var a = [], n = 0; n < t.length; ++n) {
            var o = t[n];
            a.push({
                html: '<table class="tablay"><tr><td style="height:80px;vertical-align:middle;padding:0 5px;">' + o.label + "</td></tr></table>",
                handler: function(t) {
                    i.close(),
                    e("./index").active_channel(t)
                }
            })
        }
        var r = 4,
        l = Math.ceil(t.length / r),
        d = new MWT.TabBox({
            render: "channelfp-bodydiv",
            size: l + "x" + r,
            border: !0,
            cellStyle: "text-align:center;",
            items: a
        });
        i.on("open",
        function() {
            d.show()
        })
    },
    t.open = function() {
        i.open()
    },
    t
}),
define("portal/channel_body", ["require", "common/exmsg", "ajax", "common/location"],
function(e) {
    function i(t, a, n, r, l) {
        n = parseInt(n),
        r = parseInt(r),
        l = parseInt(l);
        for (var d = [], s = 0; s < a.length; ++s) {
            var c = a[s],
            u = "" != c.pic ? c.pic: bigstyle_conf.portal.default_pic,
            p = '<div name="articlebk-' + t + '" data-aid="' + c.aid + '" class="weui_cell" style="display:block;"><table class="articletab"><tr><td rowspan="3" width="100"><img src="' + u + '"></td><td><div class="title">' + c.title + '</div></td></tr><tr><td><div class="summary">' + c.summary + '</div></td></tr><tr><td align="right"><span class="date">' + c.dateline + "</span></td></tr></table></div>";
            d.push(p)
        }
        var p = '<div class="weui_cells" style="margin:0;">' + d.join("") + "</div>",
        m = Math.ceil(r / l);
        if (m > n) {
            var f = n + 1;
            p += '<div id="articlelist-' + t + "-" + f + '"><button id="artlist-nbtn-' + t + '" data-page="' + f + '" class="nextbtn">点击加载下一页</button></div>'
        } else p += '<p align="center" style="font-size:12px;color:#999;padding:10px 0;">没有更多文章了</p>';
        jQuery("#articlelist-" + t + "-" + n).html(p),
        jQuery("[name=articlebk-" + t + "]").unbind("click").click(function() {
            var i = jQuery(this).data("aid");
            e("common/location").viewarticle(i)
        }),
        m > n && jQuery("#artlist-nbtn-" + t).unbind("click").click(function() {
            var e = jQuery(this).data("page");
            MWT.show_loading(),
            o.post2("portal&action=articlelist&catid=" + t, {
                page: e
            },
            function(e) {
                return MWT.hide_loading(),
                0 != e.retcode ? void MWT.alert(e.retmsg) : void i(t, e.data.root, e.data.page, e.data.totalProperty, e.data.perpage)
            })
        })
    }
    function t(e, t, a, n, o) {
        for (var r = [], l = [], d = 0; d < t.length; ++d) {
            var s = t[d];
            "" != s.pic && a > 0 ? (r.push({
                url: s.pic,
                title: s.title,
                href: "portal.php?mod=view&aid=" + s.aid + "&mobile=2"
            }), --a) : l.push(s)
        }
        if (r.length > 0) {
            var c = '<div id="banner-' + e + '" style="height:180px;"></div><div id="articlelist-' + e + '-1"></div><div style="height:50px;"></div>';
            jQuery("#channelbodydiv-" + e).html(c);
            var u = new MWT.Slide({
                render: "banner-" + e,
                autoplay: 0,
                images: r
            });
            u.create()
        } else jQuery("#channelbodydiv-" + e).html('<div id="articlelist-' + e + '-1"></div><div style="height:60px;"></div>');
        i(e, l, 1, n, o)
    }
    function a(e) {
        var i = jQuery("#channelbodydiv-" + e);
        MWT.show_loading(),
        o.post2("portal&action=articlelist&catid=" + e, {},
        function(a) {
            return MWT.hide_loading(),
            0 != a.retcode ? void i.html(n.error(a.retmsg)) : 0 == a.data.root.length ? void i.html('<p align="center" style="color:#999;padding-top:10px;">该频道下没有您可看的文章</p>') : void t(e, a.data.root, 3, a.data.totalProperty, a.data.perpage)
        })
    }
    var n = e("common/exmsg"),
    o = e("ajax"),
    r = {},
    l = {};
    return r.show_channel = function(e) {
        jQuery("[name=channelbodydiv]").hide(),
        jQuery("#channelbodydiv-" + e).show(),
        l[e] || (a(e), l[e] = !0)
    },
    r
}),
define("portal/index", ["require", "common/exmsg", "common/location", "./channel_panel", "ajax", "./channel_body", "common/header", "ad/global_full_ad", "common/backtop"],
function(e) {
    function i(i) {
        var t = d[i];
        e("./channel_body").show_channel(t.catid)
    }
    function t(e) {
        d = [];
        for (var t = [], a = 0, o = 0; o < e.length; ++o) {
            var l = e[o],
            u = 10 + 15 * l.catname.length;
            d.push({
                catid: l.catid,
                label: l.catname,
                width: u,
                handler: i
            }),
            t.push('<div name="channelbodydiv" id="channelbodydiv-' + l.catid + '"></div>'),
            l.catid == s && (a = o)
        }
        jQuery("#portal-div").html(t.join("")),
        n = new MWT.ScrollBar({
            render: "channelbar-div",
            items: d
        }),
        n.create(),
        r.init(d),
        c.active_channel(a)
    }
    function a() {
        var i = '<div id="channelbar-div" style="position:fixed;top:40px;left:0;right:45px;height:35px;background:#fff;" class="mwt-border-bottom"></div><div id="downbtndiv" class="mwt-border-bottom"style="position:fixed;top:40px;right:0;width:45px;height:35px;line-height:35px;text-align:center;background:#fff;"><i class="icon icon-down" style="color:#666;" id="channellistdownbtn"></i></div><div id="portal-div" style="margin-top:75px;position:relative;"></div>';
        jQuery("body").append(i),
        jQuery("#channellistdownbtn").click(function() {
            r.open()
        });
        var a = e("common/header").createHeader({
            render: "headdiv",
            items: ["uc", {
                label: "<h1>" + bigstyle_conf.portal.title + "</h1>"
            },
            "search"]
        });
        if (a.create(), bigstyle_conf.plugin_type < 2) {
            var n = o.portal_disable();
            jQuery("#channelbar-div").hide(),
            jQuery("#downbtndiv").hide(),
            jQuery("#portal-div").html(n)
        } else l.post2("portal&action=channellist", {},
        function(e) {
            0 != e.retcode ? (jQuery("#channelbar-div").hide(), jQuery("#downbtndiv").hide(), jQuery("#portal-div").html(o.error(e.retmsg))) : t(e.data)
        })
    }
    var n, o = e("common/exmsg"),
    r = (e("common/location"), e("./channel_panel")),
    l = e("ajax"),
    d = [],
    s = 0,
    c = {};
    return c.active_channel = function(e) {
        n.active(e)
    },
    c.open = function(i, t) {
        s = t,
        a(),
        e("ad/global_full_ad").init(),
        e("common/backtop").init(50)
    },
    c
}),
define("portal/comment", ["require", "ajax"],
function(e) {
    function i(e, n, o, r) {
        n = parseInt(n),
        o = parseInt(o),
        r = parseInt(r);
        for (var l = [], d = 0; d < e.length; ++d) {
            var s = e[d],
            c = dz_avatar(s.uid),
            u = "0" == s.uid ? "游客(" + s.postip + ")": s.username,
            p = '<div class="weui_cell" style="display:block;"><table class="tablay"><tr><td width="40" rowspan="2" style="vertical-align:top;"><img src="' + c + '" style="width:30px;height:30px;border-radius:300px;"></td><td><span style="color:#0e90d2;font-size:13px;">' + u + '</span><span style="color:#999;font-size:12px;float:right;">' + date("Y-m-d H:i", s.dateline) + '</span></td></tr><tr><td style="color:#000;font-size:15px;">' + s.message + "</td></tr></table></div>";
            l.push(p)
        }
        var p = l.join(""),
        m = Math.ceil(o / r);
        if (m > n) {
            var f = n + 1;
            p += '<div id="article-comment-' + f + '"><button id="comments-nbtn" data-page="' + f + '" class="nextbtn">点击查看更多</button></div>'
        }
        jQuery("#article-comment-" + n).html(p),
        m > n && jQuery("#comments-nbtn").unbind("click").click(function() {
            var e = jQuery(this).data("page");
            MWT.show_loading(),
            a.post2("portal&action=comments", {
                aid: t,
                page: e
            },
            function(e) {
                MWT.hide_loading(),
                i(e.data.root, e.data.page, e.data.totalProperty, e.data.perpage)
            })
        })
    }
    var t, a = e("ajax"),
    n = {};
    return n.query = function(e, n) {
        t = e,
        a.post2("portal&action=comments", {
            aid: t,
            page: n
        },
        function(e) {
            if (0 == e.data.root.length && 1 == n) {
                var t = "<p align='center' style='font-size:13px;color:#999;line-height:50px;'>还没有人评论哦~~<p>";
                jQuery("#article-comment-1").html(t)
            } else i(e.data.root, e.data.page, e.data.totalProperty, e.data.perpage)
        })
    },
    n
}),
define("portal/view", ["require", "common/exmsg", "ajax", "common/header", "./comment", "./comment", "common/backtop"],
function(e) {
    function i(e) {
        var i = '<p style="font-size:20px;padding:0 10px;">' + e.title + '</p><span style="font-size:13px;color:#999;">' + date("Y-m-d", e.dateline) + "&nbsp;&nbsp;" + e.author + "</span>";
        jQuery("#article-title").html(i)
    }
    function t(e) {
        for (var i = "",
        t = 0; t < e.length; ++t) i += e[t].content;
        jQuery("#article-content").html(i)
    }
    function a(e) {
        if (0 != e.length) {
            for (var i = '<div class="weui_cells_title"><span class="blocktitle" style="margin-left:5px;">相关阅读</span></div><div class="weui_cells">',
            t = 0; t < e.length; ++t) {
                var a = e[t],
                n = "" != a.pic ? a.pic: bigstyle_conf.portal.default_pic;
                i += '<div class="weui_cell" name="relatedart" data-aid="' + a.aid + '"><div class="weui_cell_hd"><img src="' + n + '" style="width:40px;height:30px;margin-right:10px;"></div><div class="weui_cell_bd weui_cell_primary" style="font-size:15px;color:#333;">' + a.title + '<span style="font-size:13px;color:#999;display:inline-block;">' + date("Y-m-d", a.dateline) + "</span></div></div>"
            }
            i += "</div>",
            jQuery("#article-related").html(i),
            jQuery("[name=relatedart]").unbind("click").click(function() {
                var e = jQuery(this).data("aid");
                window.location = "portal.php?mod=view&aid=" + e + "&mobile=2"
            })
        }
    }
    function n() {
        var n = '<div id="viewarticle-div" style="margin:40px 0 40px;"><div id="article-title" style="text-align:center;padding:10px 0;background:#fff" class="mwt-border-bottom"></div><div id="article-content" style="background:#fff;"></div><div id="article-related"></div><div class="weui_cells_title"><span class="blocktitle" style="margin-left:5px;">文章评论</span></div><div class="weui_cells"><div id="article-comment-1"></div></div></div><div id="headdiv" style="position:fixed;top:0;left:0;right:0;"></div><div id="footdiv" style="position:fixed;bottom:0;left:0;right:0;"></div>';
        jQuery("body").append(n);
        var s = e("common/header").createHeader({
            render: "headdiv",
            items: ["back", "home", {
                label: "<h1>查看文章</h1>"
            },
            {
                label: "",
                width: 40
            },
            {
                label: "",
                width: 40
            }]
        });
        s.create();
        var c = new MWT.H5Navbar({
            render: "footdiv",
            position: "bottom",
            cls: "footbar mwt-border-top",
            height: 45,
            items: [{
                icon: "icon icon-comment",
                label: "评论",
                handler: function() {
                    MWT.prompt({
                        title: "评论文章",
                        top: 50,
                        multiLine: !0
                    },
                    o)
                }
            }]
        });
        bigstyle_conf.plugin_version >= 1.8 && c.create(),
        MWT.show_loading(),
        d.post2("portal&action=viewarticle", {
            aid: r
        },
        function(n) {
            MWT.hide_loading(),
            0 != n.retcode ? jQuery("#viewarticle-div").html(l.error(n.retmsg)) : (i(n.data.article), t(n.data.contents), a(n.data.related_articles), e("./comment").query(r, 1))
        })
    }
    function o(i) {
        d.post2("portal&action=comment", {
            aid: r,
            message: i
        },
        function(i) {
            0 != i.retcode ? MWT.alert(i.retmsg) : (MWT.toast({
                msg: "评论成功",
                time: 1500
            },
            function() {}), e("./comment").query(r, 1))
        })
    }
    var r, l = e("common/exmsg"),
    d = e("ajax"),
    s = {};
    return s.open = function(i, t) {
        r = t,
        n(),
        e("common/backtop").init()
    },
    s
}),
define("data/notice", ["ajax"],
function() {
    function e() {
        var e = "version=4&module=mynotelist";
        i.post(e, {},
        function(e) {
            a = e.Variables.list
        },
        !0)
    }
    var i = require("ajax"),
    t = {},
    a = [];
    return t.getlist = function() {
        return 0 == a.length && e(),
        a
    },
    t
}),
define("home/space_pm", ["require", "ajax", "common/header", "common/copyright", "data/notice"],
function(e) {
    function i() {
        a = new MWT.H5Page({
            header: e("common/header").createHeader({
                items: [{
                    label: "<h1>消息</h1>"
                }]
            }),
            bodyStyle: "background-color:#f2f2f2;padding:0;",
            pagebody: '<div id="mynotelistdiv"></div>' + e("common/copyright").footer()
        }),
        a.on("open", t)
    }
    function t() {
        var i = e("data/notice").getlist();
        if (0 == i) return void jQuery("#mynotelistdiv").html("暂无消息");
        for (var t = '<div class="weui_cells" style="margin-top:0;">',
        a = 0; a < i.length; ++a) {
            var n = i[a];
            if (n.notevar && n.notevar.tid) {
                var o = "<b>" + n.notevar.actorusername + "</b> 回复了您的帖子 " + n.notevar.subject;
                t += '<div name="topthread" data-tid="' + n.notevar.tid + '" class="weui_cell"><div class="weui_cell_bd weui_cell_primary"><p><i class="fa fa-circle" style="font-size:11px;color:#666;width:18px;"></i>' + o + "</p></div></div>"
            }
        }
        t += "</div>",
        jQuery("#mynotelistdiv").html(t),
        jQuery("[name=topthread]").unbind("click").click(function() {
            var e = jQuery(this).data("tid");
            window.location = "forum.php?mod=viewthread&tid=" + e
        })
    }
    var a, n = (e("ajax"), {});
    return n.open = function(e) {
        a || i(),
        a.setAnimate(e).open()
    },
    n
}),
define("home/uc", ["require", "ajax", "common/copyright", "member/login"],
function(e) {
    function i() {
        a = new MWT.H5Page({
            bodyStyle: "background-color:#f2f2f2;padding:0 0 45px;",
            pagebody: '<div id="ucdiv"></div>' + e("common/copyright").footer()
        }),
        a.on("open", t)
    }
    function t() {
        var i = dz.avatar,
        t = dz.username;
        0 == dz.uid && (t = "点击登录<br><span>登录后可使用更多功能哦~</span>");
        var a = '<div id="ucbtn" class="spacebg"><img src="' + i + '"><p>' + t + "</p></div>",
        n = bigstyle_conf.uclist;
        a += '<div class="weui_cells weui_cells_access">';
        for (var o = 0; o < n.length; ++o) {
            var r = n[o];
            a += r.title ? '<a class="weui_cell" href="' + r.href + '"> <div class="weui_cell_hd"><i class="' + r.icon + '" style="background:' + r.iconcolor + ';color:#fff;font-size:16px;padding:7px;border-radius:300px;display:block;margin-right:10px;"></i></div><div class="weui_cell_bd weui_cell_primary"><p style="font-family:\'microsoft yahei\';">' + r.title + '</p></div><div class="weui_cell_ft"></div></a>': '</div><div class="weui_cells weui_cells_access">'
        }
        a += "</div>",
        jQuery("#ucdiv").html(a),
        jQuery("#ucbtn").click(function() {
            0 == dz.uid && e("member/login").login()
        })
    }
    var a, n = (e("ajax"), {});
    return n.open = function(e) {
        a || i(),
        a.setAnimate(e).open()
    },
    n
}),
define("home/space_profile", ["require", "common/header", "ajax", "common/header"],
function(e) {
    function i() {
        var i = '<div id="uc-profile-body" style="padding-top:20px;"></div><div id="headdiv" style="position:fixed;top:0;left:0;right:0;"></div>';
        jQuery("body").append(i).css("background", "#f2f2f2");
        var a = e("common/header").createHeader({
            render: "headdiv",
            items: ["back", {
                label: "<h1>我的资料</h1>"
            },
            "home"]
        });
        a.create(),
        t()
    }
    function t() {
        var e = "version=4&module=profile";
        o.post(e, {},
        function(e) {
            var i = e.Variables.space,
            t = "",
            n = [["用户名", i.username], ["用户组", i.group.grouptitle], ["管理组", i.admingroup.grouptitle], ["注册时间", i.regdate]];
            t += a(n),
            n = [["主题数", i.threads], ["回帖数", i.posts], ["积分", i.credits]];
            for (var o in e.Variables.extcredits) {
                var r = e.Variables.extcredits[o],
                l = e.Variables.space["extcredits" + o];
                n.push([r.title, l])
            }
            t += a(n),
            jQuery("#uc-profile-body").html(t)
        })
    }
    function a(e) {
        for (var i = "<div class='weui_cells'>",
        t = 0; t < e.length; ++t) {
            var a = e[t];
            i += '<div class="weui_cell"><div class="weui_cell_bd weui_cell_primary"><p>' + a[0] + '</p></div><div class="weui_cell_ft">' + a[1] + "</div></div>"
        }
        return i += "</div>"
    }
    var n = e("common/header"),
    o = (n.getHeaderIconStyle(), e("ajax")),
    r = {};
    return r.open = function(e) {
        i()
    },
    r
}),
define("home/space_thread", ["require", "common/location", "common/header", "ajax"],
function(e) {
    function i() {
        o = new MWT.H5Page({
            render: "uc-mythread",
            header: l.createHeader({
                items: [{
                    icon: "icon icon-left",
                    iconStyle: "font-size:20px;margin-top:5px;",
                    width: 40,
                    handler: function() {
                        r.back("forum.php?forumlist=1")
                    }
                },
                {
                    label: '<h1 id="mythreadtitle">我的帖子</h1>'
                },
                {
                    label: "",
                    width: 40
                }]
            }),
            bodyStyle: "background-color:#f2f2f2;padding:0;",
            pagebody: '<div class="weui_cells" id="uc-mythreads-div" style="margin-top:0;"></div>'
        }),
        o.on("open",
        function() {
            var e = "version=4&module=profile";
            d.post(e, {},
            function(e) {
                s = e.Variables.space.threads,
                jQuery("#mythreadtitle").html("我的帖子(" + s + ")"),
                t(1)
            })
        })
    }
    function t(e) {
        var i = "version=4&module=mythread&page=" + e;
        d.post(i, {},
        function(i) {
            n(i, e)
        })
    }
    function a(e) {
        var i = dz_avatar(e.authorid),
        t = '<div name="topthread" data-tid="' + e.tid + '" class="weui_cell" style="display:block;"><div style="font-size:12px;"><img src="' + i + '" style="border-radius:300px;width:30px;height:30px;vertical-align:top"><span style="margin:0 8px;display:inline-block;font-size:12px;color:#333;">' + e.author + '<br><span style="float:left;font-size:11px;color:#999;">' + e.dateline + '</span></span></div><div class="weui_cell_bd weui_cell_primary">' + e.subject + '</div><div class="weui_cell_ft" style="font-size:13px;"><i class="icon icon-comment"></i> ' + e.replies + '&nbsp;&nbsp;&nbsp;<i class="icon icon-preview"></i> ' + e.views + "</div></div>";
        return t
    }
    function n(e, i) {
        for (var n = [], o = e.Variables.data.length, l = 0; o > l; ++l) n.push(a(e.Variables.data[l]));
        var d = "uc-mythreads-div",
        c = 1 == i ? d: d + "-" + i,
        u = n.join("");
        if (has_next_page(i, s, e.Variables.perpage, o)) {
            var p = i + 1;
            u += '<div id="' + d + "-" + p + '"><button id="' + d + '-nbtn" data-page="' + p + '" class="nextbtn">点击加载下一页</button></div>'
        }
        jQuery("#" + c).html(u),
        jQuery("#" + d + "-nbtn").unbind("click").click(function() {
            var e = jQuery(this).data("page");
            t(e)
        }),
        jQuery("[name=topthread]").unbind("click").click(function() {
            var e = jQuery(this).data("tid");
            r.viewthread(e)
        })
    }
    var o, r = e("common/location"),
    l = e("common/header"),
    d = e("ajax"),
    s = 0,
    c = {};
    return c.open = function(e) {
        o || i(),
        o.setAnimate(e).open()
    },
    c
}),
define("home/space_favorite", ["require", "common/location", "common/header", "ajax"],
function(e) {
    function i() {
        var e = "uc-mythreads-div",
        i = new MWT.TabPanel({
            title: "帖子收藏",
            body: '<div id="myfav-tab-1"></div>'
        });
        i.on("show",
        function() {
            d = 1,
            a(1)
        });
        var t = new MWT.TabPanel({
            title: "版块收藏",
            body: '<div id="myfav-tab-2"></div>'
        });
        t.on("show",
        function() {
            d = 2,
            a(1)
        });
        var n = new MWT.TabWidget({
            render: e,
            panels: [i, t],
            headerStyle: ""
        });
        n.show().active(0)
    }
    function t() {
        l = new MWT.H5Page({
            render: "uc-myfavor",
            header: c.createHeader({
                items: [{
                    icon: "icon icon-left",
                    iconStyle: "font-size:20px;margin-top:5px;",
                    width: 40,
                    handler: function() {
                        s.back("forum.php?forumlist=1")
                    }
                },
                {
                    label: '<h1 id="myfavtitle">我的收藏</h1>'
                },
                {
                    label: "",
                    width: 40
                }]
            }),
            bodyStyle: "background-color:#f2f2f2;padding:0;",
            pagebody: '<div class="weui_cells" id="uc-mythreads-div" style="margin-top:0;"></div>'
        }),
        l.on("open",
        function() {
            i()
        })
    }
    function a(e) {
        var i = "";
        switch (d) {
        case 1:
            i = "version=4&module=myfavthread&page=" + e;
            break;
        case 2:
            i = "version=4&module=myfavforum&page=" + e
        }
        u.post(i, {},
        function(i) {
            r(i, e)
        })
    }
    function n(e) {
        var i = dz_avatar(e.authorid),
        t = date("Y-m-d H:i", e.dateline),
        a = '<div name="topthread" data-tid="' + e.id + '" class="weui_cell" style="display:block;"><div style="font-size:12px;"><img src="' + i + '" style="border-radius:300px;width:30px;height:30px;vertical-align:top"><span style="margin:0 8px;display:inline-block;font-size:12px;color:#333;">' + e.author + '<br><span style="float:left;font-size:11px;color:#999;">' + t + '</span></span></div><div class="weui_cell_bd weui_cell_primary">' + e.title + '</div><div class="weui_cell_ft" style="font-size:13px;"><i class="icon icon-comment"></i> ' + e.replies + "</div></div>";
        return a
    }
    function o(e) {
        var i = '<div name="fmdiv" data-fid="' + e.id + '" class="weui_cell"><div class="weui_cell_bd weui_cell_primary">' + e.title + '<br><span style="font-size:13px;">主题:' + e.threads + " | 帖子:" + e.posts + '</span></div><div class="weui_cell_ft"><span style="border-radius:300px;background:#666;color:#fff;font-size:12px;padding:5px 10px;">今日: ' + e.todayposts + "</span></div></div>";
        return i
    }
    function r(e, i) {
        var t = [],
        r = e.Variables.list.length;
        switch (d) {
        case 1:
            for (var l = 0; r > l; ++l) t.push(n(e.Variables.list[l]));
            break;
        case 2:
            for (var l = 0; r > l; ++l) t.push(o(e.Variables.list[l]))
        }
        var c = "myfav-tab-" + d,
        u = 1 == i ? c: c + "-" + i,
        p = t.join("");
        if (has_next_page(i, e.Variables.count, e.Variables.perpage, r)) {
            var m = i + 1;
            p += '<div id="' + c + "-" + m + '"><button id="' + c + '-nbtn" data-page="' + m + '" class="nextbtn">点击加载下一页</button></div>'
        }
        jQuery("#" + u).html(p),
        jQuery("#" + c + "-nbtn").unbind("click").click(function() {
            var e = jQuery(this).data("page");
            a(e)
        }),
        jQuery("[name=topthread]").unbind("click").click(function() {
            var e = jQuery(this).data("tid");
            s.viewthread(e)
        }),
        jQuery("[name=fmdiv]").unbind("click").click(function() {
            var e = jQuery(this).data("fid");
            s.forumdisplay(e)
        })
    }
    var l, d, s = e("common/location"),
    c = e("common/header"),
    u = e("ajax"),
    p = {};
    return p.open = function(e) {
        l || t(),
        l.setAnimate(e).open()
    },
    p
}),
define("setting/index", ["require", "member/login", "common/location", "common/header", "ajax", "common/copyright"],
function(e) {
    function i() {
        t = new MWT.H5Page({
            render: "uc-setting",
            header: n.createHeader({
                items: [{
                    icon: "icon icon-left",
                    iconStyle: "font-size:20px;margin-top:5px;",
                    width: 40,
                    handler: function() {
                        a.back("forum.php?forumlist=1")
                    }
                },
                {
                    label: '<h1 id="mythreadtitle">设置</h1>'
                },
                {
                    label: "",
                    width: 40
                }]
            }),
            bodyStyle: "background-color:#f2f2f2;padding:0;",
            pagebody: '<div id="uc-setting-div"></div>' + e("common/copyright").footer()
        }),
        t.on("open",
        function() {
            var e = [[{
                title: "关于",
                href: "forum.php?about=1"
            }]];
            0 != dz.uid && e.push([{
                title: "退出登录",
                href: "javascript:require('member/login').logout();"
            }]);
            for (var i = "",
            t = 0; t < e.length; ++t) {
                var a = e[t];
                i += '<div class="weui_cells weui_cells_access">';
                for (var n = 0; n < a.length; ++n) {
                    var o = a[n];
                    i += '<a class="weui_cell" href="' + o.href + '"> <div class="weui_cell_bd weui_cell_primary"><p style="font-family:\'microsoft yahei\';">' + o.title + '</p></div><div class="weui_cell_ft"></div></a>'
                }
                i += "</div>"
            }
            jQuery("#uc-setting-div").html(i)
        })
    }
    e("member/login");
    var t, a = e("common/location"),
    n = e("common/header"),
    o = (e("ajax"), {});
    return o.open = function(e) {
        t || i(),
        t.setAnimate(e).open()
    },
    o
}),
define("setting/about", ["require", "common/location", "common/header", "ajax"],
function(e) {
    function i() {
        a = new MWT.H5Page({
            render: "uc-setting-about",
            header: o.createHeader({
                items: [{
                    icon: "icon icon-left",
                    iconStyle: "font-size:20px;margin-top:5px;",
                    width: 40,
                    handler: function() {
                        n.back("forum.php?forumlist=1")
                    }
                },
                {
                    label: "<h1>关于</h1>"
                },
                {
                    label: "",
                    width: 40
                }]
            }),
            bodyStyle: "background-color:#f2f2f2;padding:0;",
            pagebody: '<center><br><img src="' + dz.sitelogo + '" style="max-width:80px;max-height:80px;margin-bottom:10px;"><br><span>版本: ' + bigstyle_conf.version + '</span></center><div style="position:absolute;bottom:10px;text-align:center;width:100%;font-size:13px;color:#666;">&copy; ' + bigstyle_conf.copyright + '<p style="margin-top:4px;font-size:13px;color:#666;">theme by: <a href="http://addon.discuz.com/?@bigstyle.template" target="_blank"  style="text-decoration:underline;color:#666;">bigstyle</a></p></div>'
        }),
        a.on("open",
        function() {
            t()
        })
    }
    function t() {}
    var a, n = e("common/location"),
    o = e("common/header"),
    r = (o.getHeaderIconStyle(), e("ajax"), {});
    return r.open = function(e) {
        a || i(),
        a.setAnimate(e).open()
    },
    r
}),
define("log", ["require", "conf"],
function(e) {
    function i(e, i) {
        var t = "[" + e + "] " + i;
        console.log(t)
    }
    var t = e("conf").get(),
    a = {};
    return a.debug = function(e) {
        t.loglevel >= 3 && i("DEBUG", e)
    },
    a.info = function(e) {
        t.loglevel >= 2 && i("INFO", e)
    },
    a.warn = function(e) {
        t.loglevel >= 1 && i("WARN", e)
    },
    a.uplog = function(e) {
        var i = "http://139.196.29.35:8888/api/bigstyle/pv";
        jQuery.ajax({
            url: i,
            type: "post",
            dataType: "json",
            data: {
                logstr: e
            },
            async: !0
        })
    },
    a
});
var bigstyle_conf, log;
define("jsapp", ["require", "conf", "index/page", "index/page2", "forum/forumlist", "forum/forumdisplay", "forum/newthread", "forum/viewthread", "portal/index", "portal/view", "home/space_pm", "home/uc", "home/space_profile", "home/space_thread", "home/space_favorite", "setting/index", "setting/about", "log"],
function(e) {
    bigstyle_conf = e("conf").get();
    var i = {
        "index/page": e("index/page"),
        "index/page2": e("index/page2"),
        "forum/forumlist": e("forum/forumlist"),
        "forum/forumdisplay": e("forum/forumdisplay"),
        "forum/newthread": e("forum/newthread"),
        "forum/viewthread": e("forum/viewthread"),
        "portal/index": e("portal/index"),
        "portal/view": e("portal/view"),
        "home/space_pm": e("home/space_pm"),
        "home/uc": e("home/uc"),
        "home/space_profile": e("home/space_profile"),
        "home/space_thread": e("home/space_thread"),
        "home/space_favorite": e("home/space_favorite"),
        "setting/index": e("setting/index"),
        "setting/about": e("setting/about")
    },
    t = {};
    return t.run = function(t, a) {
        var n = isset(i[t]) ? t: "index/page";
        if (!in_array("mobile", dz.mobile_plugins)) {
            var o = "请安装并启用 <b style='color:red;'>掌上论坛</b> 插件(1.4.7版本及以上)";
            throw jQuery("body").html(o),
            new Error("请安装并启用掌上论坛插件(1.4.7版本及以上)")
        }
        log = e("log"),
        log.debug("dz: " + JSON.stringify(dz)),
        log.debug("bigstyle_conf: " + JSON.stringify(bigstyle_conf));
        var r = [dz.siteurl, "Discuz_" + dz.version + "_" + dz.charset, dz.bbname, dz.username + "(#" + dz.uid + ")", bigstyle_conf.version, n, window.location.href];
        log.uplog(r.join("||")),
        i[n].open(pageOpenAnimate, a)
    },
    t
});