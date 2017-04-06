<?php if(!defined('IN_DISCUZ')) exit('Access Denied'); ?>
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Cache-control" content="<?php if($_G['setting']['mobile']['mobilecachetime'] > 0) { ?><?php echo $_G['setting']['mobile']['mobilecachetime'];?><?php } else { ?>no-cache<?php } ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
  <meta name="format-detection" content="telephone=no" />
  <meta name="keywords" content="<?php if(!empty($metakeywords)) { echo dhtmlspecialchars($metakeywords); } ?>" />
  <meta name="description" content="<?php if(!empty($metadescription)) { echo dhtmlspecialchars($metadescription); ?> <?php } ?>,<?php echo $_G['setting']['bbname'];?>" />
  <title><?php if(!empty($navtitle)) { ?><?php echo $navtitle;?> - <?php } if(empty($nobbname)) { ?> <?php echo $_G['setting']['bbname'];?> - <?php } ?> 手机版 - Powered by Discuz!</title>
  <script src="<?php echo $_G['style']['directory'];?>/touch/static/libs/requirejs/2.1.9/require.js" type="text/javascript"></script>
  <script src="<?php echo $_G['style']['directory'];?>/touch/static/libs/jquery/1.11.2/jquery.min.js" type="text/javascript"></script>
  <script src="<?php echo $_G['style']['directory'];?>/touch/static/libs/jquery/1.11.2/ajaxfileupload.js" type="text/javascript" charset="utf-8"></script>
  <script src="<?php echo $_G['style']['directory'];?>/touch/static/dist-20160916112152/base.js" type="text/javascript" charset="utf-8"></script>
</head>
<body>
</body>
</html>
  <script type="text/javascript">
var pageOpenAnimate="fadeIn";
    // dz环境参数
    var dz = {
        diylink : false,   //!< 是否启用模板自定义url(原生url无法使用模板时建议启用)
        bodyWidth: document.body.offsetWidth,
        bodyHeight: window.screen.availHeight,
        charset : '<?php echo CHARSET;?>',
        version : '<?php echo $_G['setting']['version'];?>',
        mobileapi : '<?php echo $_G['siteurl'];?>api/mobile/index.php',
        postseccheck: '<?php echo $_G['setting']['seccodedata']['rule']['post']['allow'];?>',

        uid : '<?php echo $_G['uid'];?>',
        groupid : '<?php echo $_G['groupid'];?>',
        username : '<?php echo $_G['username'];?>',
        avatar : '<?php echo avatar($_G['uid'],'',true);?>',
        bbname: '<?php echo $_G['setting']['bbname'];?>',
        sitename : '<?php echo $_G['setting']['sitename'];?>',
        siteurl  : '<?php echo $_G['siteurl'];?>',
sitelogo : '<?php echo $_G['siteurl'];?>static/image/mobile/images/logo.png',
        //scriptfilename: '<?php echo $_SERVER["SCRIPT_FILENAME"];?>',
        pluginpath : './source/plugin',
        mobile_plugins: [<?php if(is_array($_G['setting']['hookscriptmobile']['global']['common']['module'])) foreach($_G['setting']['hookscriptmobile']['global']['common']['module'] as $plugin => $im) { ?>'<?php echo $plugin;?>', <?php } ?>''],
        stylepath: '<?php echo $_G['style']['directory'];?>',
        securl: '<?php echo $_G['siteurl'];?>misc.php?mod=seccode&mobile=2',
        loginurl: '<?php echo $_G['siteurl'];?>member.php?mod=logging&action=login&mobile=2',
        hash: '<?php echo md5(substr(md5($_G[config][security][authkey]), 8).$_G[uid])?>'
    };
    // bigstyle 插件api
    var bigstyle_api = false;
    <?php if(isset($_G['bigstyle_config']['head_bgcolor'])) { ?>
    bigstyle_api = "<?php echo $_G['siteurl'];?>/source/plugin/bigstyle/index.php?version=4&module=";
    <?php } ?>

    function dz_avatar(uid) {
        var res = dz.avatar;
        var i = dz.avatar.indexOf('uid');
        if (i>0) {
            var prefix = dz.avatar.substr(0,i);
            return prefix+'uid='+uid+'&size=middle';
        }
        return "<?php echo $_G['style']['directory'];?>/touch/static/imgs/noavatar.jpg";
    }

    require.config({
        baseUrl: dz.stylepath+"/touch/static/dist-20160916112152/",
        packages: [
            {name:'mwt', location:'../libs/mwt/3.3', main:'mwt_mobile.min'}
        ]
    });
  </script>
