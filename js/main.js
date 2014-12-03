$(function(){
  $('.menus .section').on('click',function(e){
    $(this).next('ul').toggleClass('open');
    e.preventDefault();
    return false;
  });
  var rssBtn=$('.RSS i');
  var rssLink=$('.RSS a');
  rssBtn.on('mouseenter',function(){
    rssBtn.css('color','#39ae86');
    rssLink.css('color','black');
  });
  rssBtn.on('mouseleave',function(){
    rssBtn.css('color','#66cdaa');
    rssLink.css('color','#767676');
  });
  rssLink.on('mouseenter',function(){
    rssBtn.css('color','#39ae86');
    rssLink.css('color','black');
  });
  rssLink.on('mouseleave',function(){
    rssBtn.css('color','#66cdaa');
    rssLink.css('color','#767676');
  });
  rssBtn.on('click',function(){
    window.location.href=rssLink.attr('href');
  });
});
