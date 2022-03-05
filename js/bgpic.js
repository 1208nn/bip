setInterval(changeImg, 10000);
function changeImg() {
  var curIndex=Math.floor(Math.random() * 9);
  document.getElementById("bgpic").src = "./backgroung/"+curIndex+".jpg";
}
