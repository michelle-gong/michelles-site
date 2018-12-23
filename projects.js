function drawMissile() {
  document.getElementById('missiles').innerHTML = ""
  for(var i = 0 ; i < missiles.length ; i++ ) {
    document.getElementById('missiles').innerHTML += `<div class='missile' style='top:${missiles[i].top}px; left:${missiles[i].left}px;'></div>`;
  }
  
