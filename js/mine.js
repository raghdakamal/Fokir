




$(window).scroll(function(){
    
    var windowScroll  =$(window).scrollTop();
    var section2Offest =$(".section2").offset().top;
    
    if (windowScroll > section2Offest)
        {
          $(".topbar").css("backgroundColor","rgba(0,0,0,0.8)")
        }
    else
        {
            $(".topbar").css("backgroundColor","transparent")
        }
});


$("#btnUp").click(function(){
    
   // $(window).scrollTop('0');
    
    
    $("body").animate({scrollTop:'0'},2000);
})







       






