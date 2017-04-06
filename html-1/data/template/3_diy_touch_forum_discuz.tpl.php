<?php if(!defined('IN_DISCUZ')) exit('Access Denied'); if($_GET['forumlist']) { ?>
  <?php include template('forum/forumlist'); } elseif($_GET['newthread']) { ?>
  <?php include template('forum/post'); } elseif($_GET['uc']) { ?>
  <?php include template('home/uc'); } elseif($_GET['setting']) { ?>
  <?php include template('home/setting'); } elseif($_GET['about']) { ?>
  <?php include template('home/about'); } elseif($_GET['forumdisplay']) { ?>
  <?php include template('discuz/forumdisplay'); } elseif($_GET['viewthread']) { ?>
  <?php include template('discuz/viewthread'); } elseif($_GET['portal']) { ?>
  <?php include template('discuz/portal'); } elseif($_GET['viewarticle']) { ?>
  <?php include template('discuz/viewarticle'); } else { ?>
  <?php include template('index'); } ?>

