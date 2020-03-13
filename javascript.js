
$('#navline,.nav-link').click(function(){
  $('.line').removeClass('init');
  $('#line-top').toggleClass('line-top').toggleClass('top-reverse');
  $('#line-mid').toggleClass('line-mid').toggleClass('mid-reverse');
  $('#line-bot').toggleClass('line-bot').toggleClass('bot-reverse');

  $('body, .nowimgindex-posi').toggleClass('nav-up').toggleClass('nav-down');//뒷배경 색 바뀜(분홍-->파랑)
  $('#menu-ul').toggleClass('menu-up').toggleClass('menu-down');//메뉴 리스트(visible)
  $('.nav-link').toggleClass('text-notshow').toggleClass('text-show');//메뉴 이름 보임(opacity)
  $('#Main, .nowimgindex-posi').toggleClass('main-visible').toggleClass('main-hidden');
});


$(function(){

  var prevpos = 0;

  $(window).on('scroll',function(){
    var initPos=$(this).scrollTop();
    var check =  $("#line-bot").offset().top;
    if(initPos>prevpos){
      var max = $(".animate_on_scroll").length;
       for(var i=0; i<max; i++){
             if($(".animate_on_scroll").eq(i).offset().top < check-75){
                   $(".animate_on_scroll").eq(i).addClass("opac");
                 }
               }
    var max_posi = $(".nowimgindex-posi").length;
    for(var j =0;j<max_posi;j++){
      var nowonebottom = $(".nowimgindex-posi").eq(j).offset().top+$(".nowimgindex-posi").eq(j).innerHeight();
      if(nowonebottom<check-110){
        $(".nowimgindex-posi").eq(j+1).addClass("posi");
      // nowimgindexMT($(".nowimgindex-posi").eq(j+1),j);
      if(j+1==2){
        $(".nowimgindex-posi").eq(j+1).addClass("posi2");
      }
      }
    }
}
else{
      var max= $(".opac").length;
          for(var i=0; i<max; i++){
            var BoxTop = $(".opac").eq(i).offset().top;
                 if(BoxTop > check-150){
                    $(".opac").eq(i).removeClass("opac");//0.4
                 }
               }
               var max_posi = $(".posi").length;
               for(var j =0;j<max_posi;j++){
                 var nowbottom = $(".posi").eq(j).offset().top+$(".posi").eq(j).innerHeight();
                 if(nowbottom>check+600){
                   $(".posi").eq(j).removeClass("posi");
                   if(j==1){
                     $(".posi2").removeClass("posi2");
                   }
                 }
               }
    }
    prevpos=initPos;
  });

// function nowimgindexMT(MTdocument,index){
//   MTdocument.style.marginTop = '2200px'+'760px'*index;
// }

  $(".nav-link").click(function(event){
     event.preventDefault();
     $('html,body').animate({scrollTop:$(this.hash).offset().top},400);//메뉴 위치 이동
   });

})
