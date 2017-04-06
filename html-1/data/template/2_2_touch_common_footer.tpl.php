<?php if(!defined('IN_DISCUZ')) exit('Access Denied'); ?>
<?php if(!empty($_G['setting']['pluginhooks']['global_footer_mobile'])) echo $_G['setting']['pluginhooks']['global_footer_mobile'];?><?php $useragent = strtolower($_SERVER['HTTP_USER_AGENT']);$clienturl = 'http://www.discuz.net/mobile.php?platform=android';?><?php if(strpos($useragent, 'iphone') !== false || strpos($useragent, 'ios') !== false) { $clienturl = 'http://www.discuz.net/mobile.php?platform=ios';?><?php } elseif(strpos($useragent, 'android') !== false) { $clienturl = 'http://www.discuz.net/mobile.php?platform=android';?><?php } elseif(strpos($useragent, 'windows phone') !== false) { $clienturl = 'http://www.discuz.net/mobile.php?platform=windowsphone';?><?php } ?>



<div id="mask" style="display:none;"></div>



<?php if(!$nofooter) { ?>
<div class="footer">
<div>
<?php if(!$_G['uid']) { ?>
<!--
<a href="forum.php">首页</a> | 
-->        
        <a href="member.php?mod=logging&amp;action=login" title="登录">登录</a> | <a href="<?php if($_G['setting']['regstatus']) { ?>member.php?mod=<?php echo $_G['setting']['regname'];?><?php } else { ?>javascript:;" style="color:#D7D7D7;<?php } ?>" title="<?php echo $_G['setting']['reglinkname'];?>">注册</a>
<?php } else { ?>
<a href="home.php?mod=space&amp;uid=<?php echo $_G['uid'];?>&amp;do=profile&amp;mycenter=1"><?php echo $_G['username'];?></a> , <a href="member.php?mod=logging&amp;action=logout&amp;formhash=<?php echo FORMHASH;?>" title="退出" class="dialog">退出</a>
<?php } ?>
<a href="<?php echo $_G['setting']['mobile']['simpletypeurl']['0'];?>" data-icon="bars" data-iconpos="top" data-ajax="false">标准版</a>
<a href="http://www.discuz.net" target="_blank">Discuz!</a>

    </div>
</div>
<?php } ?>


</div>
<!--/content-->


<div data-role="footer"   data-position="fixed" class="wxd_fixed">
  <div class="uiddiv ui-bar-b wxd_color_fff" data-role="navbar" >
    <ul>
      <li><a href="#" data-rel="back" data-icon="back" data-iconpos="top" data-direction="reverse"></a></li>
      <li><a href="<?php echo $nav;?>" data-icon="home" data-iconpos="top" data-ajax="false" ></a></li>
  <li><a href="forum.php?forumlist=1"  data-icon="bars" ></a></li>
      <li><a href="<?php echo $_G['setting']['mobile']['nomobileurl'];?>" title="电脑版" data-icon="grid" data-iconpos="top" data-ajax="false"></a></li>
    </ul>
  </div>
</div>




<div data-role="panel" data-position-fixed="true" data-theme="a" id="nav-panel" data-ajax="false" >
  <ul data-role="listview" data-theme="g" >
    <li data-icon="home" ><a href="forum.php?mod=portal"  > 首页 </a></li>
    <li data-icon="grid" ><a href="forum.php?forumlist=1"> <?php echo $_G['setting']['navs']['2']['navname'];?></a></li>
    <li><a href="forum.php?mod=guide"> 精彩热帖 </a></li>
    <li data-icon="star" ><a href="home.php?mod=space&amp;uid=<?php echo $_G['uid'];?>&amp;do=favorite&amp;view=me&amp;type=thread">我的收藏</a></li>
    <li data-icon="bars" ><a href="home.php?mod=space&amp;uid=<?php echo $_G['uid'];?>&amp;do=thread&amp;view=me">我的主题</a></li>
    <li data-icon="info" ><a href="home.php?mod=space&amp;do=pm">我的消息 </a></li>
    <li data-icon="gear" ><a href="home.php?mod=space"> 我的资料 </a></li>
    <?php if($_G['uid']) { ?>
<li data-icon="delete" > <a href="member.php?mod=logging&amp;action=logout&amp;formhash=<?php echo FORMHASH;?>" title="退出"  data-ajax="false">退出</a></li>
<?php } elseif($_G['connectguest']) { ?>
<li data-icon="delete" > <a href="member.php?mod=logging&amp;action=logout&amp;formhash=<?php echo FORMHASH;?>" title="退出"  data-ajax="false">退出</a></li>
    <?php } ?> 
  </ul>
</div>
<!-- /panel -->



</div>
<!--/page-->


</body>
</html><?php updatesession();?><?php if(defined('IN_MOBILE')) { output();?><?php } else { output_preview();?><?php } ?>


