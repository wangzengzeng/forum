<?php if(!defined('IN_DISCUZ')) exit('Access Denied'); include template('common/mwt_frame'); ?><style>
.tl-fname {font-size:11px;color:#666;background:#eee;padding:0 7px;border-radius:300px;float:left;}
.tl-avatar {border-radius:300px;width:30px;height:30px;vertical-align:top}
.tl-author {margin:0 8px;display:inline-block;font-size:12px;color:#333;}
.tl-time   {float:left;font-size:11px;color:#999;}
.tl-img {max-width:80px;max-height:60px;}
</style><?php $limit=15;
$listarr = array();
$sql = 'SELECT a.tid,a.author,a.authorid,a.subject,a.dateline,a.views,a.replies,b.attachment,c.name as forum_name '.
       'FROM '.DB::table('forum_thread').' AS a LEFT JOIN '.DB::table('forum_threadimage').' AS b ON a.tid=b.tid '.
       'LEFT JOIN '.DB::table('forum_forum').' AS c ON a.fid=c.fid '.
       'WHERE a.closed=0 AND a.displayorder>=0';
//1. 新帖
$listarr[] = DB::fetch_all($sql.' ORDER BY dateline DESC LIMIT 0,'.$limit);
//2. 热贴
$listarr[] = DB::fetch_all($sql.' AND heats>0 ORDER BY heats DESC, dateline DESC LIMIT 0,'.$limit);
//3. 精华
$listarr[] = DB::fetch_all($sql.' AND digest>0 ORDER BY dateline DESC, digest DESC LIMIT 0,'.$limit);?><?php if(is_array($listarr)) foreach($listarr as $k => $list) { ?><div id="thread_div_<?php echo $k;?>" style="display:none;margin:0;" class="weui_cells"><?php if(is_array($list)) foreach($list as $m) { ?> 
<div class="weui_cell" style="display:block;">
  <div>
    <img src="<?php echo avatar($m[authorid],'middle',true);?>" class="tl-avatar">
    <span class="tl-author"><?php echo $m['author'];?><br><span class="tl-time"><?php echo date('Y-m-d H:i',$m['dateline']);?></span></span>
  </div>
  <div class="weui_cell_bd weui_cell_primary" onclick="require('common/location').viewthread('<?php echo $m['tid'];?>');">
     <?php if($m['attachment']!='') { ?>
     <table class="tablay"><tr>
       <td valign="top"><?php echo $m['subject'];?></td>
       <td width="80" align="center">
         <img src="<?php echo $_G['setting']['attachurl'];?>forum/<?php echo $m['attachment'];?>" class="tl-img">
       </td>
     </tr></table>
     <?php } else { ?>
     <?php echo $m['subject'];?>
     <?php } ?>
  </div>
  <div class="weui_cell_ft" style="font-size:13px;text-align:right;margin-top:2px;">
    <span class="tl-fname"><?php echo $m['forum_name'];?></span>
    <i class="icon icon-comment"></i> <?php echo $m['replies'];?>&nbsp;&nbsp;&nbsp;<i class="icon icon-preview"></i> <?php echo $m['views'];?>
  </div>
</div>
<?php } ?>
</div>
<?php } ?>

<script>
jQuery(document).ready(function($) {
require(["jsapp","mwt"],function(jsapp){
//jsapp.run('index/page');
jsapp.run('index/page2');
});
});
</script><?php include template('common/footer'); ?>