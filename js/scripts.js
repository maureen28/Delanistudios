$(document).ready(function () {
    $("p").click(function () {
        $(".feature-hidden").toggle("slow");
        $(".feature-showing").toggle("fast");
    });
});
$(document).ready(function () {
    $("p").click(function () {
        $(".feature2-hidden").toggle("slow");
        $(".feature2-showing").toggle("fast");
    });
});

$(document).ready(function () {
    $("p").click(function () {
        $(".feature3-hidden").toggle("slow");
        $(".feature3-showing").toggle("fast");
    });
});
       
$("#p1").hover(function(){
    $(".image").css("display","block")
},function(){
   $(".image4").css("display","none")
})

$("#p2").hover(function(){
    $(".image").css("display","block")
},function(){
   $(".image3").css("display","none")
})
$("#p3").hover(function(){
    $(".image").css("display","block")
},function(){
   $(".image2").css("display","none")
})
$("#p4").hover(function(){
    $(".image").css("display","block")
},function(){
   $(".image1").css("display","none")
})
$("#p5").hover(function(){
    $(".image").css("display","block")
},function(){
   $(".image5").css("display","none")
})
$("#p6").hover(function(){
    $(".image").css("display","block")
},function(){
   $(".image6").css("display","none")
})
$("#p7").hover(function(){
    $(".image").css("display","block")
},function(){
   $(".image7").css("display","none")
})
$("#p8").hover(function(){
    $(".image").css("display","block")
},function(){
   $(".image8").css("display","none")
})











function xx(){
    var message=(document).getElementById("message");

    if(email==="@"){
        alert("Successfully submitted");
        return false;    
    }else(message==enter){
        alert("name" + "we have received your message. Thank you fro reaching out to us.");
    }
}