<?php if(!defined('IN_DISCUZ')) exit('Access Denied'); ?>
<link rel="stylesheet" href="<?php echo $_G['style']['directory'];?>/touch/static/libs/mwt/3.3/mwt_mobile.min.css" type="text/css">
<link rel="stylesheet" href="<?php echo $_G['style']['directory'];?>/touch/static/css/bigstyle.css" type="text/css">
<style>
  body,td,th,span,b,p,label,div,a,input,button,select,option {font-family: Arial,Tahoma,Verdana,'microsoft yahei';}
  .mwt-h5bar {
    background:<?php if(isset($_G['bigstyle_config']['head_bgcolor'])) { ?><?php echo $_G['bigstyle_config']['head_bgcolor'];?><?php } else { ?>#660000<?php } ?>;
  }
  .headbar td {
    background:<?php if(isset($_G['bigstyle_config']['head_bgcolor'])) { ?><?php echo $_G['bigstyle_config']['head_bgcolor'];?><?php } else { ?>#660000<?php } ?>;
    color:<?php if(isset($_G['bigstyle_config']['head_color'])) { ?><?php echo $_G['bigstyle_config']['head_color'];?><?php } else { ?>#fff;<?php } ?>
  }
  #ucbtn p {color:<?php if(isset($_G['bigstyle_config']['head_color'])) { ?><?php echo $_G['bigstyle_config']['head_color'];?><?php } else { ?>#fff;<?php } ?>}
  .headbar h1 {
    font-family:Arial,"microsoft yahei";font-size:18px;letter-spacing:0px;
    overflow: hidden;                                                                      
    white-space: nowrap;                                                                   
    text-overflow: ellipsis;
width:120px;
  }
  .spacebg {background:<?php if(isset($_G['bigstyle_config']['head_bgcolor'])) { ?><?php echo $_G['bigstyle_config']['head_bgcolor'];?><?php } else { ?>#660000<?php } ?>;color:#fff;}

  .footnav td {background:#fff;font-size:14px;}
  .foota {color:#999;text-decoration:none;}
  .foota.active {color:<?php if(isset($_G['bigstyle_config']['foot_color'])) { ?><?php echo $_G['bigstyle_config']['foot_color'];?><?php } else { ?>#660000<?php } ?>;}

  .bg {background:#f2f2f2;}
</style>
