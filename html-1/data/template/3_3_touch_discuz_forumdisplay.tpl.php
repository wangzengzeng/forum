<?php if(!defined('IN_DISCUZ')) exit('Access Denied'); include template('common/mwt_frame'); include template('common/mwt_style'); ?><script>
jQuery(document).ready(function($) {
require(["jsapp","mwt"],function(jsapp){
var fid = "<?php echo $_GET['fid'];?>";
jsapp.run('forum/forumdisplay',fid);
});
});
</script>
