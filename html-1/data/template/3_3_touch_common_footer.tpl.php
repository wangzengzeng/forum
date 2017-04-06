<?php if(!defined('IN_DISCUZ')) exit('Access Denied'); include template('common/mwt_style'); ?><div id="footnavdiv"></div>
<script src="<?php echo $_G['style']['directory'];?>/touch/static/dist-20160916112152/footnav.js" type="text/javascript" charset="utf-8"></script>
<?php if($_G['bigstyle_config']['footnav']) { ?>
<script>
  var navlist= <?php echo $_G['bigstyle_config']['footnav'];?>;
  var footnav=new FootNav(navlist);
  footnav.init();
</script>
<?php } else { ?>
<script>
  var footnav=new FootNav();
  footnav.init();
</script>
<?php } $useragent = strtolower($_SERVER['HTTP_USER_AGENT']);$clienturl = ''?><?php if(strpos($useragent, 'iphone') !== false || strpos($useragent, 'ios') !== false) { $clienturl = $_G['cache']['mobileoem_data']['iframeUrl'] ? $_G['cache']['mobileoem_data']['iframeUrl'].'&platform=ios' : 'http://www.d
iscuz.net/mobile.php?platform=ios';?><?php } elseif(strpos($useragent, 'android') !== false) { $clienturl = $_G['cache']['mobileoem_data']['iframeUrl'] ? $_G['cache']['mobileoem_data']['iframeUrl'].'&platform=android' : 'http://w
ww.discuz.net/mobile.php?platform=android';?><?php } elseif(strpos($useragent, 'windows phone') !== false) { $clienturl = $_G['cache']['mobileoem_data']['iframeUrl'] ? $_G['cache']['mobileoem_data']['iframeUrl'].'&platform=windowsphone' : 'htt
p://www.discuz.net/mobile.php?platform=windowsphone';?><?php } updatesession();?><?php if(defined('IN_MOBILE')) { ?>
    <?php output();?><?php } else { ?>
    <?php output_preview();?><?php } ?>
