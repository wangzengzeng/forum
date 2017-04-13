<?php
/**
 *      [Discuz!] (C)2001-2099 Comsenz Inc.
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: style.php 30638 2012-06-07 09:06:10Z zhengqingpeng $
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

if(!submitcheck('pluginsubmit')) {
	$extrastyle = $plugin['modules']['extra']['extrastyle'];
} else {
	$plugin['modules']['extra']['extrastyle'] = $_GET['extrastylenew'];
	//Ð´Èë²å¼þÐÅÏ¢
	C::t('common_plugin')->update($pluginid, array('modules' => serialize($plugin['modules'])));
	if($action == 'edit') {
		devmessage('ÑùÊ½¹ÜÀíÌí¼Ó³É¹¦', "develop.php?mod=plugins&action=edit&operation=$operation&pluginid=$pluginid", 'succeed');
	} else {
		dheader("location:develop.php?mod=plugins&action=edit&operation=export&pluginid=$pluginid");
	}
}

?>