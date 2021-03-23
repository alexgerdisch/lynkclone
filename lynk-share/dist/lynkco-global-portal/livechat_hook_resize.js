$(function () {
    monitorIcon = setInterval(getLiveAssistChatIcon, refreshInterval);
});

var refreshInterval = 3000;

getLiveAssistChatIcon = function () {
    var img = $(".LPMimage");

    if (img.length == 0) {
        return;
    }

    var container = $(".LPMcontainer,.LPMoverlay");

    var items = container.children();

    if (items.length == 1) {
        getLoadCustomizeStyle(container, img);
    }
  
};

getLoadCustomizeStyle = function (container, img) {
    // set location
  let width = window ? window.innerWidth : 0;
  container.css({
    "outline":"none",
    "zIndex": "4"
  });
  if (width < 768) {
    img.css({
      "top": "auto",
      "left": "auto"
    })
  }else if(width < 992){
    img.css({
      "top": "-65px",
      "left": "-10px"
    })
  }else{
    img.css({
      "top": "-65px",
      "left": "-10px"
    })
  }
};