<?php if(!defined('IN_DISCUZ')) exit('Access Denied'); include template('common/mwt_frame'); ?><script>
jQuery(document).ready(function($) {
require(["jsapp","mwt"],function(jsapp){
jsapp.run("home/uc");
});
});
</script><?php include template('common/footer'); ?>