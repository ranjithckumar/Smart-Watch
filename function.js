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
    
    var messages=document.getElementById("chatlist");
    var textbox=document.getElementById("textbox"); 
    var button=document.getElementById("button");
    button.addEventListener("click",function(){
        var newMessage=document.createElement("li");
        newMessage.innerHTML=textbox.value; 
        // var newMessage=textbox.value;
        messages.appendChild(newMessage);
        textbox.value="";
        // document.getElementById("chatlist").innerHTML=newMessage;
        // console.log(newMessage);
    });
      
    var timer = document.getElementById('timer');
    var toggleBtn = document.getElementById('start');
    var resetBtn = document.getElementById('restart');
    
    var watch = new Stopwatch(timer);
    
    function start() {
      toggleBtn.textContent = 'Stop';
      watch.start();
    }
    
    function stop() {
      toggleBtn.textContent = 'Start';
      watch.stop();
    }
    
    toggleBtn.addEventListener('click', function() {
      watch.isOn ? stop() : start();
    });
    
    resetBtn.addEventListener('click', function() {
      watch.reset();
    })
    
    function Stopwatch(elem) {
        var time = 0;
        var offset;
        var interval;
      
        function update() {
          if (this.isOn) {
            time += delta();
          }
          
          elem.textContent = timeFormatter(time);
        }
      
        function delta() {
          var now = Date.now();
          var timePassed = now - offset;
      
          offset = now;
      
          return timePassed;
        }
      
        function timeFormatter(time) {
          time = new Date(time);
      
          var minutes = time.getMinutes().toString();
          var seconds = time.getSeconds().toString();
          var milliseconds = time.getMilliseconds().toString();
      
          if (minutes.length < 2) {
            minutes = '0' + minutes;
          }
      
          if (seconds.length < 2) {
            seconds = '0' + seconds;
          }
      
          while (milliseconds.length < 3) {
            milliseconds = '0' + milliseconds;
          }
      
          return minutes + ' : ' + seconds + ' . ' + milliseconds;
        }
      
        this.start = function() {
          interval = setInterval(update.bind(this), 10);
          offset = Date.now();
          this.isOn = true;
        };
      
        this.stop = function() {
          clearInterval(interval);
          interval = null;
          this.isOn = false;
        };
      
        this.reset = function() {
          time = 0;
          update();
        };
      
        this.isOn = false;
      }
});