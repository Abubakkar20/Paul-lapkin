// menu btn
$(document).ready(function(){

    $(".open-menu").click(function(){
        $(".menu-container").show();
    })

    $(".close-menu").click(function(){
        $(".menu-container").hide();
    })

    $(".menu-but").click(function(){
        $(".menu-container").hide();
    })
    
    $(".menu-container").click(function(){
        $(this).hide();
    })
//  scroll smoth
    $(".next-section a, .menu-container ul li a").on("click", function(){
        $("html, body").animate({
            scrollTop: $($.attr(this,"href")).offset().top
        }, 1500)
        return false;
    })

    // filter-mixitup
    var mixer = mixitup('.work-grid');

    new WOW({
        mobile: false, 
    }).init();
})
// wow animation
