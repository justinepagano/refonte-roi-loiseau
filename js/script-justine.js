$(document).ready(function(){
    $(".liste").click(function(){
        const value = $(this).attr("data-filter");
        if (value == "tous"){
            $(".itemBox").show("1000")
        }
        else{
            $(".itemBox").not("."+value).hide("1000");
            $(".itemBox").filter("."+value).show("1000");
        }
    })
    $(".liste").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
})