<?php if(!defined('IN_DISCUZ')) exit('Access Denied'); hookscriptoutput('discuz');?>
<?php if($_G['setting']['mobile']['mobilehotthread'] && $_GET['forumlist'] != 1) { dheader('Location:forum.php?mod=guide&view=hot');exit;?><?php } include template('common/header'); if($_GET['visitclient']) { } else { ?>

<!-- header start -->
<?php if($showvisitclient) { } ?>


<?php if(!empty($_G['setting']['pluginhooks']['index_top_mobile'])) echo $_G['setting']['pluginhooks']['index_top_mobile'];?>


<!-- main forumlist start -->

<div data-role="content" style="margin-top:10px;">
 
<!--
  <ul data-role="listview" data-theme="d" data-divider-theme="b"  data-count-theme="c" data-inset="true" >
-->
  <ul data-role="listview" data-theme="d" data-divider-theme="b"  data-count-theme="c" ><?php if(is_array($catlist)) foreach($catlist as $key => $cat) { ?><li data-role="list-divider" role="heading">
<div class="subforumshow cl" href="#sub_forum_<?php echo $cat['fid'];?>">
<span class="o y"><img width="50" height="22" src="./template/wxd_mobile/wxd_img/images/collapsed_<?php if(!$_G['setting']['mobile']['mobileforumview']) { ?>yes<?php } else { ?>no<?php } ?>.png"></span>
<a href="javascript:;" class="wxd_color_fff"><?php echo $cat['name'];?></a>
        </div>
</li>



    
    <li >
    	<div id="sub_forum_<?php echo $cat['fid'];?>" class="wxd_sub_forum">
                <ul  data-role="listview" data-theme="d"><?php if(is_array($cat['forums'])) foreach($cat['forums'] as $forumid) { $forum=$forumlist[$forumid];?>                    <li data-role="list-divider" class="wxd_bg_none wxd_pic_hd "  <?php if(strstr($z,$forum['fid'])) { ?>data-icon="star" data-theme="e"<?php } else { ?>data-theme="c"<?php } ?> data-icon="true" >

                          <?php if($forum['icon']) { ?> 
                          <?php echo $forum['icon'];?> 
                          <?php } else { ?> 
                          <a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $forum['fid'];?>">
                          <img  src="./template/wxd_mobile/wxd_img/images/forum<?php if($forum['folder']) { ?>_new<?php } ?>.gif" /> 
                          </a>
  <?php } ?> 

                        <a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $forum['fid'];?>" class="<?php if($forum_favlist[$forumid]) { ?>xi1<?php } ?> a">
<p style="font-size:1.125em;padding:0; margin:7px 0 7px 0;letter-spacing:1px;">          
                            <strong><?php echo $forum['name'];?></strong>
                            </p>

                            <p><span style="color:#aaa;">主题 <?php echo $forum['threads'];?> / <?php echo $forum['posts'];?>  | <?php echo $forum['lastpost']['dateline'];?></span></p>
<?php if($_GET['simpletype']!='yes' && $forum['description']) { ?>
<p style="color:#aaa;"><?php echo cutstr($forum['description'], 500); ?></p>
<?php } ?>

<span class="ui-li-count"   style="font-size:14px;"><?php echo $forum['todayposts'];?></span>
</a>
                    </li>
<?php } ?>
                </ul>
     	</div>       
</li>
<?php } ?>
  </ul>
    
    

</div>


<!-- main forumlist end -->
<?php if(!empty($_G['setting']['pluginhooks']['index_middle_mobile'])) echo $_G['setting']['pluginhooks']['index_middle_mobile'];?>

<!--
<script type="text/javascript">JQuery.noConflict();</script>
-->

<?php } ?>


<script type="text/javascript">
(function() {
<?php if(!$_G['setting']['mobile']['mobileforumview']) { ?>
$('.wxd_sub_forum').css('display', 'block');
<?php } else { ?>
$('.wxd_sub_forum').css('display', 'none');
<?php } ?>
$('.subforumshow').on('click', function() {
var obj = $(this);
var subobj = $(obj.attr('href'));
if(subobj.css('display') == 'none') {
subobj.css('display', 'block');
obj.find('img').attr('src', './template/wxd_mobile/wxd_img/images/collapsed_yes.png');
} else {
subobj.css('display', 'none');
obj.find('img').attr('src', './template/wxd_mobile/wxd_img/images/collapsed_no.png');
}
});
 })();
</script><?php include template('common/footer'); ?>