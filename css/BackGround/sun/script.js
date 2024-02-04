function startMove() {
    mouseIsDown = true;
  }
  
  function stopMove() {
    mouseIsDown = false;
    mouseIsDownDivision = false;
          var sky = document.getElementById("sun");
  }
  
  function startDraggingDivision() {
  
    mouseIsDownDivision = true;
  }
  
  function windowResize() {
    updateDimensions();
    var skyHeight = document.getElementById("horizon").clientHeight;
  
    
  
  
    // update to new sky height
    skyHeight = document.getElementById("sun").clientHeight;
    document.getElementById("waterDistance").style.height = myHeight - skyHeight;
     document.getElementById("division").style.top = skyHeight;
  }