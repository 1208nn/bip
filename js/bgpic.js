setInterval(changeImg, 10000);
function changeImg() {
  var curIndex=Math.floor(Math.random() * 5);
  document.getElementById("bgpic").src = "./backgroung/"+curIndex+".jpg";
}