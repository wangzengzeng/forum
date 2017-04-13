<?php
/**
 *      [Discuz!] (C)2001-2099 Comsenz Inc.
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: phptpl.php 30694 2012-06-12 09:26:01Z zhengqingpeng $
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}
$tplyear = dgmdate(TIMESTAMP, 'Y');
$nowdate = dgmdate(TIMESTAMP);
$phptpl['emptyfile'] = <<<EOF
<?php
/**
 *	[$plugin[name]($plugin[identifier].{modulename})] (C)$tplyear-2099 Powered by $plugin[copyright].
 *	Version: $plugin[version]
 *	Date: $nowdate
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}
//==={code}===
?>
EOF;

$phptpl['baseclass'] = <<<EOF
class plugin_{modulename} {
	//TODO - Insert your code here
//==={code}===
}

EOF;

$phptpl['extendclass'] = <<<EOF

class plugin_{modulename}_{curscript} extends plugin_{modulename} {
	//TODO - Insert your code here
//==={code}===
}

EOF;

$phptpl['specialclass'] = <<<EOF

class threadplugin_$plugin[identifier] {

	public \$name = 'XXÖ÷Ìâ';			//Ö÷ÌâÀàÐÍÃû³Æ
	public \$iconfile = 'icon.gif';	//·¢²¼Ö÷ÌâÁ´½ÓÖÐµÄÇ°×ºÍ¼±ê
	public \$buttontext = '·¢²¼xxÖ÷Ìâ';	//·¢ÌûÊ±°´Å¥ÎÄ×Ö

	/**
	 * ·¢Ö÷ÌâÊ±Ò³ÃæÐÂÔöµÄ±íµ¥ÏîÄ¿
	 * @param Integer \$fid: °æ¿éID
	 * @return string Í¨¹ý return ·µ»Ø¼´¿ÉÊä³öµ½·¢ÌûÒ³ÃæÖÐ 
	 */
	public function newthread(\$fid) {
		//TODO - Insert your code here
		
		return 'TODO:newthread';
	}

	/**
	 * Ö÷Ìâ·¢²¼Ç°µÄÊý¾ÝÅÐ¶Ï 
	 * @param Integer \$fid: °æ¿éID
	 */
	public function newthread_submit(\$fid) {
		//TODO - Insert your code here
		
	}

	/**
	 * Ö÷Ìâ·¢²¼ºóµÄÊý¾Ý´¦Àí 
	 * @param Integer \$fid: °æ¿éID
	 * @param Integer \$tid: µ±Ç°Ìû×ÓID
	 */
	public function newthread_submit_end(\$fid, \$tid) {
		//TODO - Insert your code here
		
	}

	/**
	 * ±à¼­Ö÷ÌâÊ±Ò³ÃæÐÂÔöµÄ±íµ¥ÏîÄ¿
	 * @param Integer \$fid: °æ¿éID
	 * @param Integer \$tid: µ±Ç°Ìû×ÓID
	 * @return string Í¨¹ý return ·µ»Ø¼´¿ÉÊä³öµ½±à¼­Ö÷ÌâÒ³ÃæÖÐ 
	 */
	public function editpost(\$fid, \$tid) {
		//TODO - Insert your code here
		
		return 'TODO:editpost';
	}

	/**
	 * Ö÷Ìâ±à¼­Ç°µÄÊý¾ÝÅÐ¶Ï 
	 * @param Integer \$fid: °æ¿éID
	 * @param Integer \$tid: µ±Ç°Ìû×ÓID
	 */
	public function editpost_submit(\$fid, \$tid) {
		//TODO - Insert your code here
		
	}

	/**
	 * Ö÷Ìâ±à¼­ºóµÄÊý¾Ý´¦Àí 
	 * @param Integer \$fid: °æ¿éID
	 * @param Integer \$tid: µ±Ç°Ìû×ÓID
	 */
	public function editpost_submit_end(\$fid, \$tid) {
		//TODO - Insert your code here
		
	}

	/**
	 * »ØÌûºóµÄÊý¾Ý´¦Àí 
	 * @param Integer \$fid: °æ¿éID
	 * @param Integer \$tid: µ±Ç°Ìû×ÓID
	 */
	public function newreply_submit_end(\$fid, \$tid) {
		//TODO - Insert your code here
		
	}

	/**
	 * ²é¿´Ö÷ÌâÊ±Ò³ÃæÐÂÔöµÄÄÚÈÝ
	 * @param Integer \$tid: µ±Ç°Ìû×ÓID
	 * @return string Í¨¹ý return ·µ»Ø¼´¿ÉÊä³öµ½Ö÷ÌâÊ×ÌùÒ³ÃæÖÐ
	 */
	public function viewthread(\$tid) {
		//TODO - Insert your code here
		
		return 'TODO:viewthread';
	}
}

EOF;

$phptpl['methodtpl'] = <<<EOF
	/**
	 * @Methods describe
	 * @return {returncomment} type
	 */
	public function {methodName}() {
		//TODO - Insert your code here
		
		return {return};	//TODO modify your return code here
	}

EOF;

$phptpl['magic'] = <<<EOF
class magic_{name} {
	public \$version = '$plugin[version]';	//½Å±¾°æ±¾ºÅ
	public \$name = '{name}';				//µÀ¾ßÃû³Æ (¿ÉÌîÐ´ÓïÑÔ°üÏîÄ¿)
	public \$description = '{desc}';		//µÀ¾ßËµÃ÷ (¿ÉÌîÐ´ÓïÑÔ°üÏîÄ¿)
	public \$price = '20';	//µÀ¾ßÄ¬ÈÏ¼Û¸ñ
	public \$weight = '20';	//µÀ¾ßÄ¬ÈÏÖØÁ¿
	public \$useevent = 0;
	public \$targetgroupperm = false;
	public \$copyright = '<a href="http://www.comsenz.com" target="_blank">Comsenz Inc.</a>';	//°æÈ¨ (¿ÉÌîÐ´ÓïÑÔ°üÏîÄ¿)
	public \$magic = array();
	public \$parameters = array();

	/**
	 * ·µ»ØÉèÖÃÏîÄ¿
	 */
	public function getsetting(&\$magic) {
		//TODO - Insert your code here
	}

	/**
	 * ±£´æÉèÖÃÏîÄ¿
	 */
	public function setsetting(&\$magicnew, &\$parameters) {
		//TODO - Insert your code here
	}

	/**
	 * µÀ¾ßÊ¹ÓÃ
	 */
	public function usesubmit() {
		//TODO - Insert your code here
	}

	/**
	 * µÀ¾ßÏÔÊ¾
	 */
	public function show() {
		//TODO - Insert your code here
	}
}
EOF;
$phptpl['cron'] = <<<EOF
<?php
/**
 *	[$plugin[name]($plugin[identifier].{modulename})] (C)$tplyear-2099 Powered by $plugin[copyright].
 *	Version: $plugin[version]
 *	Date: $nowdate
 *	Warning: Don't delete this comment
 *
 *	cronname:{name}
 *	week:{weekday}
 *	day:{day}
 *	hour:{hour}
 *	minute:{minute}
 *	desc:{desc}
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

//TODO - Insert your code here
?>

EOF;
$phptpl['adv'] = <<<EOF
class adv_{name} {

	public \$version = '$plugin[version]';	//½Å±¾°æ±¾ºÅ
	public \$name = '{name}';				//¹ã¸æÀàÐÍÃû³Æ (¿ÉÌîÐ´ÓïÑÔ°üÏîÄ¿)
	public \$description = '{desc}';		//¹ã¸æÀàÐÍËµÃ÷ (¿ÉÌîÐ´ÓïÑÔ°üÏîÄ¿)
	public \$copyright = '<a href="http://www.comsenz.com" target="_blank">Comsenz Inc.</a>';	//°æÈ¨ (¿ÉÌîÐ´ÓïÑÔ°üÏîÄ¿)
	public \$targets = array('portal', 'home', 'member', 'forum', 'group', 'userapp', 'plugin', 'custom');	//¹ã¸æÀàÐÍÊÊÓÃµÄÍ¶·Å·¶Î§
	public \$imagesizes = array();	//¹ã¸æ¹æ¸ñÀý£ºarray('468x60', '658x60', '728x90', '760x90', '950x90')

	/**
	 * ·µ»ØÉèÖÃÏîÄ¿
	 */
	public function getsetting() {
		//TODO - Insert your code here
	}

	/**
	 * ±£´æÉèÖÃÏîÄ¿
	 */
	public function setsetting(&\$advnew, &\$parameters) {
		//TODO - Insert your code here
	}

	/**
	 * ¹ã¸æÏÔÊ¾Ê±µÄÔËÐÐ´úÂë
	 */
	public function evalcode() {
		//TODO - Insert your code here
	}

}
EOF;
$phptpl['task'] = <<<EOF
class task_{name} {

	public \$version = '$plugin[version]';	//½Å±¾°æ±¾ºÅ
	public \$name = '{name}';	//ÈÎÎñÃû³Æ (¿ÉÌîÐ´ÓïÑÔ°üÏîÄ¿)
	public \$description = '{desc}';	//ÈÎÎñËµÃ÷ (¿ÉÌîÐ´ÓïÑÔ°üÏîÄ¿)
	public \$copyright = '<a href="http://www.comsenz.com" target="_blank">Comsenz Inc.</a>';	//°æÈ¨ (¿ÉÌîÐ´ÓïÑÔ°üÏîÄ¿)
	public \$icon = '';		//Ä¬ÈÏÍ¼±ê
	public \$period = '';	//Ä¬ÈÏÈÎÎñ¼ä¸ôÖÜÆÚ
	public \$periodtype = 0;//Ä¬ÈÏÈÎÎñ¼ä¸ôÖÜÆÚµ¥Î»
	public \$conditions = array();	//ÈÎÎñ¸½¼ÓÌõ¼þ

	/**
	 * ÉêÇëÈÎÎñ³É¹¦ºóµÄ¸½¼Ó´¦Àí
	 */
	public function  preprocess(\$task) {
		//TODO - Insert your code here
	}

	/**
	 * ÅÐ¶ÏÈÎÎñÊÇ·ñÍê³É (·µ»Ø TRUE:³É¹¦ FALSE:Ê§°Ü 0:ÈÎÎñ½øÐÐÖÐ½ø¶ÈÎ´Öª»òÉÐÎ´¿ªÊ¼  ´óÓÚ0µÄÕýÊý:ÈÎÎñ½øÐÐÖÐ·µ»ØÈÎÎñ½ø¶È)
	 */
	public function csc(\$task = array()) {
		//TODO - Insert your code here
	}

	/**
	 * Íê³ÉÈÎÎñºóµÄ¸½¼Ó´¦Àí
	 */
	public function sufprocess(\$task) {
		//TODO - Insert your code here
	}

	/**
	 * ÈÎÎñÏÔÊ¾
	 */
	public function view() {
		//TODO - Insert your code here
	}

	/**
	 * ÈÎÎñ°²×°µÄ¸½¼Ó´¦Àí
	 */
	public function install() {
		//TODO - Insert your code here
	}

	/**
	 * ÈÎÎñÐ¶ÔØµÄ¸½¼Ó´¦Àí
	 */
	public function uninstall() {
		//TODO - Insert your code here
	}

	/**
	 * ÈÎÎñÉý¼¶µÄ¸½¼Ó´¦Àí
	 */
	public function upgrade() {
		//TODO - Insert your code here
	}
}
EOF;
$phptpl['secqaa'] = <<<EOF
class secqaa_{name} {

	public \$version = '$plugin[version]';	//½Å±¾°æ±¾ºÅ
	public \$name = '{name}';	//ÑéÖ¤ÎÊ´ðÃû³Æ (¿ÉÌîÐ´ÓïÑÔ°üÏîÄ¿)
	public \$description = '{desc}';	//ÑéÖ¤ÎÊ´ðËµÃ÷ (¿ÉÌîÐ´ÓïÑÔ°üÏîÄ¿)
	public \$copyright = '<a href="http://www.comsenz.com" target="_blank">Comsenz Inc.</a>';	//°æÈ¨ (¿ÉÌîÐ´ÓïÑÔ°üÏîÄ¿)
	public \$customname = '';

	/**
	 * ·µ»Ø°²È«ÎÊ´ðµÄ´ð°¸ºÍÎÊÌâ (\$question ÎªÎÊÌâ£¬º¯Êý·µ»ØÖµÎª´ð°¸)
	 */
	public function make(&\$question) {
		//TODO - Insert your code here
	}
}
EOF;
$phptpl['seccode'] = <<<EOF
class seccode_{name} {

	public \$version = '$plugin[version]';
	public \$name = '{name}';
	public \$description = '{desc}';
	public \$copyright = '<a href="http://www.comsenz.com" target="_blank">Comsenz Inc.</a>';
	public \$customname = '';

	/**
	 * ¼ì²éÊäÈëµÄÑéÖ¤Âë£¬·µ»Ø true ±íÊ¾Í¨¹ý
	 */
	public function check(\$value, \$idhash) {
		//TODO - Insert your code here
	}

	/**
	 * Êä³öÑéÖ¤Âë£¬echo Êä³öÄÚÈÝ½«ÏÔÊ¾ÔÚÒ³ÃæÖÐ
	 */
	public function make() {
		//TODO - Insert your code here
	}
}
EOF;
$phptpl['sqlcode'] = <<<EOFSQL

\$sql = <<<EOF
{sql}
EOF;

runquery(\$sql);
\$finish = true;
EOFSQL;
?>