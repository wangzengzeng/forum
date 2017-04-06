<?php if(!defined('IN_DISCUZ')) exit('Access Denied'); include template('common/mwt_frame'); include template('common/mwt_style'); ?><script src="<?php echo $_G['style']['directory'];?>/../../data/cache/common_smilies_var.js" type="text/javascript"></script>
<script>
var smileyroot = '<?php echo $_G['siteurl'];?>/static/image/smiley';
jQuery(document).ready(function($) {
require(["jsapp","mwt"],function(jsapp){
var tid = "<?php echo $_GET['tid'];?>";
jsapp.run("forum/viewthread",tid);
});
});
</script><?php if(is_array($postlist)) foreach($postlist as $post) { ?><div id="oripaper-del" style="display:none;"><?php echo $post['message'];?></div><?php break;?><?php } ?>
