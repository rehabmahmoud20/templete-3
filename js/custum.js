

//   // custum header height
// $('.header').height($(window).height());
// $(window).resize(function(){
// $('.header').height($(window).height())
// })  

//nice scroll
// $("body").niceScroll({cursorcolor:"#dc4e41",
// cursorwidth:"8px",
// cursorborder:"1px solid #dc4e41",

// });
//navbar scroll
let off = $(".features").offset().top
  $(window).scroll(function(){
  let scroolT = $("html").scrollTop()
  if(scroolT > off -50){
    console.log("x")
    $('.navbar').addClass("navscroll")
  }else{
    $('.navbar').removeClass("navscroll")
  }
  })
  $(".navbar li a").click(function(){
    $('.navbar li a').removeClass("active")
    $(this).addClass('active')
  })
  // let x = $("." + $(".navbar ul li a").data("class")).offset().top
  // $(window).scroll(function(){
  //   let y = $("html").scrollTop()
  //   if(x > y){
  //     console.log("y")
  //     $(".navbar ul li a").addClass("x").next().removeClass("x")
  //   }else{
  //     $(".navbar ul li a").removeClass("x").prev().addClass("x")

  //   }
  //   })
  

//start arrow down
 $(".header .arrow-down i").click(function(){
  $("body,html").animate({
    scrollTop:$(".features").offset().top}

  ,1000)
 })

//  nice scroll
$(".navbar ul li a").click(function(){
  $("html").animate({
    scrollTop: $("." + $(this).data("class")).offset().top
  },1000)
})
 //header button
 $(".header .hire").click(function(){
  $("body,html").animate({
    scrollTop:$(".contacts").offset().top}

  ,2000)
 })

 //show more our projects
 let button=$(".show")
 let active = $(".hidden")
 
 button.click(function(){
  active.fadeIn(1000,function(){
    button.html("show less").click(function(){
      if(button.text() == "show less"){
        active.fadeOut()
          button.html("show More")
          
      }
    })
  })})

  //testimonial slider
  function showhide(){
  $(".slide:first").hasClass("active")? $(".testimonials .left").fadeOut():$(".testimonials .left").fadeIn(1000)
  $(".slide:last").hasClass("active")? $(".testimonials .right").fadeOut():$(".testimonials .right").fadeIn(1000)
  }showhide();

  // $(".testimonials i").click(function(){
  //   if($(this).hasClass("right")){
  //     $(".active").fadeOut(100,function(){
  //       $(this).removeClass("active").next().addClass("active").fadeIn()
  //       showhide();
  //     })
  //   }else{
  //     $(".active").fadeOut(100,function(){
  //       $(this).removeClass("active").prev().addClass("active").fadeIn()
  //       showhide();
  //     })
  //   }
  // })
  //my slider way
  $(".right").click(function(){
        $(".active").fadeOut(100,function(){
        $(this).removeClass("active").next().addClass("active").fadeIn()
        showhide();
      })
  
  })
  $(".left").click(function(){
    $(".active").fadeOut(100,function(){
    $(this).removeClass("active").prev().addClass("active").fadeIn()
    showhide();
  })

})
    
//ourteam hover
  $(".person").hover(function(){
    $("#" +$(this).data('value')).css("backgroundColor","#dc4e41")
  })
  $(".person").mouseleave(function(){
    $("#" +$(this).data('value')).css("backgroundColor","#9da1a5")
  })






  //arow up
  $('.arrow-up').click(function(){
    $('html,body').animate({
      scrollTop:$(".header").offset().top
    },2000)
  })


//side-nav-bar

  $(".sidebarbtn").click(function(){
    console.log("x")
    $(".links").toggleClass("active")
    $(".sidebarbtn ").toggleClass("toggle")
  })
  