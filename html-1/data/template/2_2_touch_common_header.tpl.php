<?php if(!defined('IN_DISCUZ')) exit('Access Denied'); 
0
|| checktplrefresh('./template/wxd_mobile/touch/common/header.htm', './template/wxd_mobile/touch/common/header_common.htm', 1486905549, '2', './data/template/2_2_touch_common_header.tpl.php', './template/wxd_mobile', 'touch/common/header')
;?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Cache-control" content="<?php if($_G['setting']['mobile']['mobilecachetime'] > 0) { ?><?php echo $_G['setting']['mobile']['mobilecachetime'];?><?php } else { ?>no-cache<?php } ?>" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
<meta name="format-detection" content="telephone=no" />
<meta name="keywords" content="<?php if(!empty($metakeywords)) { echo dhtmlspecialchars($metakeywords); } ?>" />
<meta name="description" content="<?php if(!empty($metadescription)) { echo dhtmlspecialchars($metadescription); ?> <?php } ?>,<?php echo $_G['setting']['bbname'];?>" />
<title><?php if(!empty($navtitle)) { ?><?php echo $navtitle;?> -<?php } if(empty($nobbname)) { ?><?php echo $_G['setting']['bbname'];?> -<?php } ?>手机版 - Powered by Discuz!</title>
<link rel="stylesheet" href="./template/wxd_mobile/wxd_img/style.css" type="text/css" media="all">

<!--
<script src="<?php echo STATICURL;?>js/mobile/jquery-1.8.3.min.js?<?php echo VERHASH;?>" type="text/javascript"></script>
-->
<script src="./template/wxd_mobile/wxd_img/jquery.min.js" type="text/javascript"></script>

<script type="text/javascript">var STYLEID = '<?php echo STYLEID;?>', STATICURL = '<?php echo STATICURL;?>', IMGDIR = '<?php echo IMGDIR;?>', VERHASH = '<?php echo VERHASH;?>', charset = '<?php echo CHARSET;?>', discuz_uid = '<?php echo $_G['uid'];?>', cookiepre = '<?php echo $_G['config']['cookie']['cookiepre'];?>', cookiedomain = '<?php echo $_G['config']['cookie']['cookiedomain'];?>', cookiepath = '<?php echo $_G['config']['cookie']['cookiepath'];?>', showusercard = '<?php echo $_G['setting']['showusercard'];?>', attackevasive = '<?php echo $_G['config']['security']['attackevasive'];?>', disallowfloat = '<?php echo $_G['setting']['disallowfloat'];?>', creditnotice = '<?php if($_G['setting']['creditnotice']) { ?><?php echo $_G['setting']['creditnames'];?><?php } ?>', defaultstyle = '<?php echo $_G['style']['defaultextstyle'];?>', REPORTURL = '<?php echo $_G['currenturl_encode'];?>', SITEURL = '<?php echo $_G['siteurl'];?>', JSPATH = '<?php echo $_G['setting']['jspath'];?>';</script>
<!--
<script src="<?php echo STATICURL;?>js/mobile/common.js?<?php echo VERHASH;?>" type="text/javascript" charset="<?php echo CHARSET;?>"></script>
-->

<script src="./template/wxd_mobile/wxd_img/common.js?<?php echo VERHASH;?>" type="text/javascript" charset="<?php echo CHARSET;?>"></script>

<!--ios-->
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">



<link href="./template/wxd_mobile/wxd_img/jquery.mobile-1.3.2.min.css" rel="stylesheet" />
<script src="./template/wxd_mobile/wxd_img/jquery.mobile-1.3.2.min.js" type="text/javascript"></script>


<!-- veikei moible touch plus -->
<link href="./template/wxd_mobile/wxd_img/wxd_mobile_touch_plus.css" rel="stylesheet" />
<link href="./template/wxd_mobile/wxd_img/wxd_mobile_touch_plus_theme.css" rel="stylesheet" />


</head>

<body class="bg">
<?php if(!empty($_G['setting']['pluginhooks']['global_header_mobile'])) echo $_G['setting']['pluginhooks']['global_header_mobile'];?>

<div data-role="page" >
<div data-role="header" id="header" data-theme="b" data-position="fixed" class=" wxd_header cl wxd_fixed"   >
  <div class=" wxd_w_50 wxd_left wxd_menu"> 
    <?php if($_G['setting']['domain']['app']['mobile']) { ?> 
    <?php $nav = 'http://'.$_G['setting']['domain']['app']['mobile'];?> 
    <?php } else { ?> 
    <?php $nav = "forum.php";?> 
    <?php } ?> 
    <a href="#nav-panel" class="wxd_menu_icon"><img style="margin:0;" width="40" height="40" src="./template/wxd_mobile/wxd_img/images/wxd_menu.png" /> </a> <a title="<?php echo $_G['setting']['bbname'];?>" href="<?php echo $nav;?>" class="wxd_logo"><img width="120" height="40" src="./template/wxd_mobile/wxd_img/images/logo.png" /></a> </div>
  <div class=" wxd_w_50 wxd_right">
    <ul class="user_fun ">
      <li><a href="search.php?mod=forum" class="icon_search">搜索</a></li>
      <li><a href="forum.php?forumlist=1" class="icon_threadlist">版块列表</a></li>
      <li id="usermsg"><a href="<?php if($_G['uid']) { ?>home.php?mod=space&uid=<?php echo $_G['uid'];?>&do=profile&mycenter=1<?php } else { ?>member.php?mod=logging&action=login<?php } ?>" class="icon_userinfo">用户信息</a><?php if($_G['member']['newpm']) { ?><span class="icon_msg"></span><?php } ?></li>
    </ul>
  </div>
</div>
<!-- /heaad end --> 

<?php if($_G['basescript'] == 'forum' && (CURMODULE == 'forumdisplay' || CURMODULE == 'viewthread')) { ?> 
<?php } else { ?>
<div data-role="content" class="wxd_content ">
<!--
  <div data-role="navbar" data-iconpos="left"  class="uiddiv ui-bar-d wxd_color_fff">
-->  <div data-role="navbar" data-iconpos="left"  class="uiddiv ui-bar-d wxd_color_333">
    <ul>
      <?php if($_G['uid']) { ?> 
      <li><a href="home.php?mod=space&amp;uid=<?php echo $_G['uid'];?>&amp;do=thread&amp;view=me" data-icon="grid" data-transition="none" data-inline="true"  > 我的帖子</a></li>
      <li><a href="home.php?mod=space&amp;uid=<?php echo $_G['uid'];?>&amp;do=favorite&amp;view=me&amp;type=forum" data-icon="star" data-transition="none">收藏</a></li>
      <li><a href="home.php?mod=space&amp;do=pm" <?php if($_G['member']['newpm']) { ?>class="newMessage"<?php } ?> data-icon="info" data-transition="none"><?php if($_G['member']['newpm']) { ?>新短消息<?php } else { ?>消息<?php } ?></a></li>
      <?php } elseif($_G['connectguest']) { ?> 
      <?php } else { ?>
      <li><a href="member.php?mod=logging&amp;action=login" title="登录" data-transition="none" data-ajax="false">登录</a></li>
      <?php if($_G['setting']['regstatus']) { ?>
      <li><a href="member.php?mod=<?php echo $_G['setting']['regname'];?>" title="<?php echo $_G['setting']['reglinkname'];?>" data-transition="none" data-ajax="false"><?php echo $_G['setting']['reglinkname'];?></a></li>
      <?php } ?> 
      <?php if($_G['setting']['connect']['allow'] && !$_G['setting']['bbclosed']) { ?>
      <li><a href="<?php echo $_G['connect']['login_url'];?>&statfrom=login_simple" data-transition="none" data-ajax="false">使用QQ帐号登录</a></li>
      <?php } ?> 
      <?php } ?>
    </ul>
  </div>
</div>
<?php } ?> 

<div data-role="content" class="wxd_content"> 
