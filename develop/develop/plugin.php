<?php
/**
 *      [Discuz!] (C)2001-2099 Comsenz Inc.
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: plugin.php 30685 2012-06-12 03:31:31Z zhengqingpeng $
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

$action = in_array($_GET['action'], array('create', 'edit', 'list', 'ajax')) ? $_GET['action'] : 'list';

require_once DISCUZ_ROOT.'develop/plugin.lang.php';
if(in_array($action, array('create', 'edit'))) {
	$operations = array('regplugin', 'script', 'hook', 'modules', 'setting', 'language', 'export', 'style', 'check_identifier');
	$operation = $_GET['operation'] && in_array($_GET['operation'], $operations) ? $_GET['operation'] : 'regplugin';
	if($operation == 'check_identifier') {
		if($_GET['id']) {
			$result = dfsockopen('http://addon.discuz.com/api/developercheck.php?ac=addonid&id='.$_GET['id']);
		} else {
			$result = '';
		}
		exit($result);
	}
	$cur_operation[$operation] = 'class="a"';
	//»ñÈ¡Ö¸¶¨µÄ²å¼þ¼ÇÂ¼
	$plugin = array();
	$pluginid = intval($_GET['pluginid']);
	if($pluginid) {
		$plugin = DB::fetch_first('SELECT * FROM '.DB::table('common_plugin')." WHERE pluginid='$pluginid'");
		if($plugin) {
			$plugin['modules'] = unserialize($plugin['modules']);
		} else {
			$pluginid = 0;
			//ÕÒ²»µ½²å¼þÖØ¶¨Ïòµ½´´½¨²å¼þ
			$operation = 'regplugin';
			$action = 'create';
		}
	}
	if($operation != 'regplugin' && empty($plugin)) {
		devmessage('Ã»ÓÐÕÒµ½Ïà¹Ø²å¼þ', '', 'error');
	}
	//¼ÓÔØ¸÷²½Öè¶ÔÓ¦µÄ½Å±¾
	require_once DISCUZ_ROOT.'develop/include/'.$operation.'.php';
	
	include template('header', 0, 'develop/template/common');
	include template('plugin', 0, 'develop/template');
	include template('footer', 0, 'develop/template/common');
} else if($action == 'list') {
	require_once DISCUZ_ROOT.'develop/include/list.php';
} else if($action == 'ajax') {
	if($_GET['operation'] == 'gethook') {
		$sort = dhtmlspecialchars(preg_replace("/[^\[A-Za-z0-9_\]]/", '', $_GET['sort']));
		$page = dhtmlspecialchars(preg_replace("/[^\[A-Za-z0-9_\.\]]/", '', $_GET['page']));
		require_once DISCUZ_ROOT.'develop/include/hooklist.php';
		$hooklist = $_GET['type'] == 'mobile' ? $mobilehook : $generalhook;
		//Ò³ÃæÁÐ±í
		$hooks = $pagelist = array();
		if(isset($hooklist[$sort]) && !empty($hooklist[$sort])) {
			foreach($hooklist[$sort] as $key => $value) {
				if($key == 'lang') {
					continue;
				}
				$pagelist[$key] = isset($value['lang']) ? $value['lang'] : $key;
				if($page && $key == $page) {
					$hooks = $value;
				}
			}
		}
		include template('ajax', 0, 'develop/template');
	}
}
?>