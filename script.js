var videosContainer = document.getElementsByClassName("videos")[0];
var menu = document.getElementsByClassName("menu")[0];
var menuOptions = menu.getElementsByClassName("options")[0];

//
var window_width = window.innerWidth;
var close_icon = document.getElementsByClassName("close-icon")[0];
var options_a = document.getElementsByClassName("add-question-btn")[0];
// var voice_container = document.getElementById("voice-container");
// var video_container = document.getElementById("video-container");
//
// Start Small Video Click Event
var playButton = document.getElementsByClassName("play")[0];
playButton.onclick = function() {
  document.getElementById("firstVi").muted = false;
  playButton.style.display = "none";
  // playInitialMenu();
  document.getElementById("ads").muted = false;
  document.getElementById("ads").currentTime = 0;
  document.getElementById("ads").play();
  document.getElementById("ads").style.display = "block";
  document.getElementsByClassName("video-mask")[0].style.borderRadius = "12px";
  // document.getElementsByClassName("firstVi")[0].style.display = "none";
  document.getElementById("firstVi").pause();
  document.getElementById("firstVi").style.display="none";
  document.getElementsByClassName("video-mask")[0].style.width = "100%";
  document.getElementsByClassName("video-mask")[0].style.height = "600px";
  document.getElementsByClassName("video-mask")[0].style.position = "fixed";
   document.getElementById('ads').addEventListener('ended',myHandler,false);
     function myHandler(e) {
         // What you want to do after the event
  document.getElementById("firstVi").style.display = "block";
  options_a.style.display="block";
  menuOptions.style.display="block";
         document.getElementById("ads").style.display = "none";
         document.getElementById("firstVi").play();
         document.getElementById("firstVi").currentTime = 0;
     }
  var all = document.getElementsByClassName("myV");
  for (var i = 0; i < all.length; i++) {
    all[i].style.borderRadius = "0";
  }

  close_icon.style.display = "flex";
  setTimeout(function() {
    menu.style.display = "block";
    // menuOptions.style.display = "block";
  }, 0);
  if (window_width <= 450) {
    document
      .getElementsByClassName("video-mask")[0]
      .classList.add("mobile-view");
  }
};

// Start Close Event
close_icon.onclick = () => {
  // Start Original Size
  document.getElementsByClassName("video-mask")[0].style.width = "120px";
  document.getElementsByClassName("video-mask")[0].style.height = "120px";
  document.getElementsByClassName("video-mask")[0].style.borderRadius = "100%";
  document.getElementsByClassName("video-mask")[0].style.position = "fixed";
  // End Original Size
  playButton.style.display = "block";
  close_icon.style.display = "none";
  menu.style.display = "none";
  menuOptions.style.display = "none";
  document.getElementById("ads").muted = true;
  document.getElementById("ads").style.display = "none";
  // voice_container.style.display = "none";
  // video_container.style.display = "none";

  // Start Show Video In Case Open Sub When Closing
  document.getElementById("firstVi").style.display = "block";
  document.getElementById("firstVi").play();
  document.getElementById("firstVi").muted = true;
  // End Show Video In Case Open Sub When Closing

  if (window_width <= 450) {
    document
      .getElementsByClassName("video-mask")[0]
      .classList.remove("mobile-view");
  }
};
// End Close Event
