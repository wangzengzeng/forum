<?php if(!defined('IN_DISCUZ')) exit('Access Denied'); hookscriptoutput('forumdisplay');?><?php include template('common/header'); ?><!-- header start -->

<script type="text/javascript">
$("div.pg").addClass("ui-bar ui-bar-d");
$("div.pg > a").attr("data-ajax","false").attr("data-transition","none");
$("div.pg > strong").wrap("<a href=# data-theme='b' style=\"color:#fff;\"><span></span></a>");
</script>


<div data-role="header" role="banner">
  <div class="ui-bar ui-bar-c postBtn2 threadHead" data-position="inline">
    <div data-role="controlgroup" data-type="horizontal" > 
      <?php if($_G['forum']['type'] != 'sub') { ?> 
      <a href="forum.php" title="<?php echo $_G['setting']['navs']['2']['navname'];?>" data-icon="home" data-role="button" data-theme="c" data-transition="none">首页</a> <a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['forum']['fid'];?>" data-icon="arrow-r" data-role="button" data-theme="c" data-transition="none"><?php echo $_G['forum']['name'];?></a> 
      <?php } else { ?> 
      <?php if($_G['forum']['status'] != 3) { ?> 
      <a href="forum.php" data-icon="home" data-transition="none"><?php echo $_G['setting']['navs']['2']['navname'];?></a>

      <a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['forum']['fid'];?>" data-icon="arrow-r" data-role="button" data-theme="b" data-transition="none"><?php echo $_G['forum']['name'];?></a> <a href="<?php echo $upnavlink;?>" data-icon="arrow-u" data-transition="none"><?php echo strip_tags($_G['forum']['name']) ? strip_tags($_G['forum']['name']) : $_G['forum']['name'];?></a> 
      <?php } else { ?> 
      <a href="group.php" data-icon="grid" data-role="button" data-theme="a" data-transition="none"><?php echo $_G['setting']['navs']['3']['navname'];?></a> 
      <?php } ?> 
      <?php } ?> 
    </div>
    <span class="disPosts"> 
    <a href="home.php?mod=spacecp&amp;ac=favorite&amp;type=forum&amp;id=<?php echo $_G['fid'];?>"  data-role="button" data-theme="e" data-transition="none">收藏</a>    
    <a href="<?php if($_G['group']['allowpost']) { ?>forum.php?mod=post&action=newthread&fid=<?php echo $_G['fid'];?><?php } else { if($_G['uid']) { ?>forum.php?mod=post&action=newthread&fid=<?php echo $_G['fid'];?><?php } else { ?>member.php?mod=logging&action=login<?php } } ?>" class="wxd_color_fff" data-role="button" data-theme="b" data-transition="none">发帖</a>
    </span> 
    </div>
</div>

<!-- header end -->


    <?php if(($_G['forum']['threadtypes'] && $_G['forum']['threadtypes']['listable']) || $_G['forum']['threadsorts']) { ?>
    <div id="wxd_thread_type" class="wxd_thread_type" style="display:block">
        <?php if($_G['forum']['threadtypes']) { ?>                        
            <a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?><?php if($_GET['archiveid']) { ?>&amp;archiveid=<?php echo $_GET['archiveid'];?><?php } ?>" class="<?php if($_GET['filter'] != 'typeid') { ?>a<?php } ?>">全部</a>
            <?php if(is_array($_G['forum']['threadtypes']['types'])) foreach($_G['forum']['threadtypes']['types'] as $id => $name) { ?>                 <a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?>&amp;filter=typeid&amp;typeid=<?php echo $id;?><?php echo $forumdisplayadd['typeid'];?>" <?php if($_GET['filter'] == 'typeid' && $_GET['typeid'] == $id) { ?> class="a"<?php } ?>><?php echo $name;?></a>
            <?php } ?>
        <?php } ?>

        <?php if($_G['forum']['threadsorts']) { ?>                        
            <?php if(is_array($_G['forum']['threadsorts']['types'])) foreach($_G['forum']['threadsorts']['types'] as $id => $name) { ?>                <a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?>&amp;filter=sortid&amp;sortid=<?php echo $id;?><?php echo $forumdisplayadd['sortid'];?>" class="<?php if($_GET['sortid'] == $id) { ?>a<?php } ?>"><?php echo $name;?></a>
            <?php } ?>            
        <?php } ?>
    </div>
    <?php } ?>


<?php if(!empty($_G['setting']['pluginhooks']['forumdisplay_top_mobile'])) echo $_G['setting']['pluginhooks']['forumdisplay_top_mobile'];?>




<!-- main threadlist start -->

<?php if($subexists && $_G['page'] == 1) { ?>
<div data-role="content">
                <ul data-role="listview" data-divider-theme="b" data-inset="true">
                    <li data-role="list-divider" role="heading">
                        子版块
                    </li>
                    <?php if(is_array($sublist)) foreach($sublist as $sub) { ?>                    <li data-theme="c">
                        <a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $sub['fid'];?>" class="block_a" data-transition="none"><?php echo $sub['name'];?></a>
                    </li>
                    <?php } ?>
                </ul>
</div>
<?php } if(!$subforumonly) { ?>

    <?php if(empty($_G['forum']['picstyle']) || $_G['cookie']['forumdefstyle']) { ?>
    
    	<ul class="threadlist">

            <?php if($_G['forum_threadcount']) { if(is_array($_G['forum_threadlist'])) foreach($_G['forum_threadlist'] as $key => $thread) { if(!$_G['setting']['mobile']['mobiledisplayorder3'] && $thread['displayorder'] > 0) { continue;?><?php } ?>
                	<?php if($thread['displayorder'] > 0 && !$displayorder_thread) { ?>
                <?php $displayorder_thread = 1;?>                    <?php } if($thread['moved']) { $thread[tid]=$thread[closed];?><?php } ?>
<li data-theme="d" >
<?php if(!empty($_G['setting']['pluginhooks']['forumdisplay_thread_mobile'][$key])) echo $_G['setting']['pluginhooks']['forumdisplay_thread_mobile'][$key];?>
                    <a href="forum.php?mod=viewthread&amp;tid=<?php echo $thread['tid'];?>&amp;extra=<?php echo $extra;?>" <?php echo $thread['highlight'];?> >
<?php echo $thread['subject'];?>
<span class="by"><?php echo $thread['author'];?> - <?php echo $thread['dateline'];?></span>
</a>
<span class="num"><?php echo $thread['replies'];?></span>
<?php if(in_array($thread['displayorder'], array(1, 2, 3, 4))) { ?>
<span class="icon_top"><img width="23" height="24" src="./template/wxd_mobile/wxd_img/images/icon_top.png"></span>
<?php } elseif($thread['digest'] > 0) { ?>
<span class="icon_top"><img  width="23" height="24" src="./template/wxd_mobile/wxd_img/images/icon_digest.png"></span>
<?php } elseif($thread['attachment'] == 2 && $_G['setting']['mobile']['mobilesimpletype'] == 0) { ?>
<span class="icon_tu"><img width="23" height="24" src="./template/wxd_mobile/wxd_img/images/icon_tu.png"></span>
<?php } ?>
</li>
                <?php } ?>
            <?php } else { ?>
<li>本版块或指定的范围内尚无主题</li>
<?php } ?>
</ul>
        <?php } else { ?>               

    	<ul data-role="listview" class="threadlist wxd_threadlist " >

            <?php if($_G['forum_threadcount']) { if(is_array($_G['forum_threadlist'])) foreach($_G['forum_threadlist'] as $key => $thread) { if(!$_G['setting']['mobile']['mobiledisplayorder3'] && $thread['displayorder'] > 0) { continue;?><?php } ?>
                	<?php if($thread['displayorder'] > 0 && !$displayorder_thread) { ?>
                <?php $displayorder_thread = 1;?>                    <?php } if($thread['moved']) { $thread[tid]=$thread[closed];?><?php } ?>
<li data-theme="d" data-icon="false" class="wxd_pic_thread">
                 <a  href="forum.php?mod=viewthread&amp;tid=<?php echo $thread['tid'];?>&amp;extra=<?php echo $extra;?>"  >   
                    <?php if($thread['cover']) { ?>
                    <img src="<?php echo $thread['coverpath'];?>"   class="wxd_shadow_3"/>
                    <?php } else { ?>
                    <img  src="./template/wxd_mobile/wxd_img/images/wxd_nopic.png" class="wxd_shadow_3"/>
                    <?php } ?>
                             
<?php if(!empty($_G['setting']['pluginhooks']['forumdisplay_thread_mobile'][$key])) echo $_G['setting']['pluginhooks']['forumdisplay_thread_mobile'][$key];?>
                    <h2 class="wxd_pic_thread_title"><?php echo $thread['subject'];?></h2>
                    <span class="by"><?php echo $thread['author'];?> - <?php echo $thread['dateline'];?></span><span class="ui-li-count" ><?php echo $thread['replies'];?></span>
                  </a>
</li>
                <?php } ?>
            <?php } else { ?>
<li>本版块或指定的范围内尚无主题</li>
<?php } ?>
</ul>

        <?php } ?>

<!--
<div class="wxd_btn">
</div>
-->

<?php echo $multipage;?>


<?php } ?>


<!-- main threadlist end -->
<?php if(!empty($_G['setting']['pluginhooks']['forumdisplay_bottom_mobile'])) echo $_G['setting']['pluginhooks']['forumdisplay_bottom_mobile'];?>
<div class="pullrefresh" style="display:none;"></div><?php include template('common/footer'); ?>