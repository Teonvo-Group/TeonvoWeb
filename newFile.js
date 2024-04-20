page2.forEach(function () {
  page2.addEventListener("mouseenter", function () {
    var bgimg = page2.getAttribute("data-img");
    page2.style.backgroundImage = 'url(${bgimg})';
  });
});
