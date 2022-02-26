var timeInterval = 10000;
setInterval(changeImg, timeInterval);
function changeImg() {
  if (curIndex == 4) {
    var curIndex = 0;
  } else {
    curIndex += 1;
  }
   document.getElementById("d1").style.backgroundImage = "URL("+arr[curIndex]+")";
}
</script>
