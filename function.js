$(document).ready(function(){
    $(".musicApp").hide();
    $(".messages").hide();
    $(".timings").hide();

    $('#music').click(function(){
        // document.getElementsByClassName("musicApp").style.dispaly='none';
        // document.getElementsByClassName("messages").style.dispaly='block';
        // document.getElementsByClassName("timings").style.dispaly='block';
         $(".musicApp").show();
         $(".messages").hide();
         $(".timings").hide();
    });
    $("#message").click(function(){
        $(".messages").show();
        $(".musicApp").hide();
         $(".timings").hide();
    });
    $("#time").click(function(){
        $(".timings").show();
        $(".messages").hide();
        $(".musicApp").hide();
    });
});
