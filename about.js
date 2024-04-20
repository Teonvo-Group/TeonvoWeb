
const scroll = new LocomotiveScroll({
    el:document.querySelector('#main'),
    smooth:true,
    
});


var part = document.querySelectorAll(".part")
var page2 = document.querySelector("#page2")
  part.forEach(function(){
    page2.addEventListener("mouseenter",function(){
      var bgimg = part.getAttribute("data-img")
      page2.style.backgroundImage = 'url(${bgimg})'
    })
})
