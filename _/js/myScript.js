$(function(){$("#Home a:contains('Home')").parent().addClass("active"),$("#about a:contains('About Myself')").parent().addClass("active"),$("#gallery a:contains('Gallery')").parent().addClass("active"),$("#ContactMe a:contains('Contact')").parent().addClass("active"),$("img.thumbnail").on("click",function(){$("#modal").modal({show:"true"});var a=this.src.substr(0,this.src.length-5)+".JPEG";$("#modalimage").attr("src",a),$("#modalimage").on("click",function(){$("#modal").modal("hide")})}),$("#myCarousel").carousel({interval:"3000"}),$(document).ready(function(){$("#blogPosts").rssfeed("http://shannonsait.wordpress.com/feed/",{limit:7})})});
