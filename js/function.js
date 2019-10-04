$(document).ready(function(){
    $(".musicApp").hide();
    $(".messages").hide();
    $(".timings").hide();

    $('#music').click(function(){
         $(".musicApp").show();
         $(".messages").hide();
         $(".timings").hide();
    });
    $("#message").click(function(){
        $(".messages").show();
        $(".musicApp").hide();
         $(".timings").hide();
    });
    $("#time").click(function Timer(a,b){
        $(".timings").show();
        $(".messages").hide();
        $(".musicApp").hide();
    });
    $("#msg #list1").on("click", function() {
        $("#msg #list1").html("OTP for Rapido verification" + "<hr>");
      });
      
      $("#msg #list2").on("click", function() {
        $("#msg #list2").html("Your account has recharged with INR 35.00" + "<hr>");
      });
      
      $("#msg #list3").on("click", function() {
        $("#msg #list3").html("ID:56056 Your order has been delivered " + "<hr>");
      });
    });
    function msg() {
        let messages = ["AD-RAPIDO", "JX-620005", "BH-CUREFIT"];
        document.querySelector("#msg #list1").innerHTML = messages[0] ;
        document.querySelector("#msg #list2").innerHTML = messages[1] ;
        document.querySelector("#msg #list3").innerHTML = messages[2] ;
      }
 





let watch = document.getElementsByClassName("digits")[0],
start = document.getElementById("start"),
stop = document.getElementById("stop"),
clear = document.getElementById("clear"),
seconds = 0,
minutes = 0,
hours = 0,
t;
    
    function add() {
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
          minutes = 0;
          hours++;
        }
      }
    
      watch.textContent =
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
        ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
        ":" +
        (seconds > 9 ? seconds : "0" + seconds);
    
      timer();
    }
    function timer() {
      t = setTimeout(add, 1000);
    }
    
    /* Start button */
    timerplay.onclick = timer;
    
    /* Stop button */
    stop.onclick = function() {
      clearTimeout(t);
    };
    
    /* Reset button */
    reset.onclick = function() {
      watch.textContent = "00:00:00";
      seconds = 0;
      minutes = 0;
      hours = 0;
    };
    $("#stop").on("click", function() {
      let lap = document.getElementById("timer").textContent;
      $(".lap").text(lap);
    });