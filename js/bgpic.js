var timeInterval = 10000;
setInterval(changeImg, timeInterval);
function changeImg() {
  var curIndex=Math.floor(Math.random() * 5);
  document.getElementById("bgpic").style.backgroundImage = "URL(./backgroung/"+curIndex+".jpg)";
}