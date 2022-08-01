
var humbergericon = document.getElementById("humbergericon");

humbergericon.onclick = function () {
  if(sidemenu.style.left== "5px")
  {
    sidemenu.style.left = "-100%";
  }
  else
    {
    sidemenu.style.left = "5px";
  }
}

window.onresize = function(){
  if (window.innerWidth >= 768) 
  {
    sidemenu.style.left = "5px";
  }
  else
  {
    sidemenu.style.left = "-100%";
  }
}

//jQuery

/*
$(function(){
  $(".menu").click(function()
  {
    if(sidemenu.style.left== "5px")
    {
      sidemenu.style.left = "-100%";
    }
    else
    {
      sidemenu.style.left = "5px";
    }
  });

  $(window).resize(function()
  {
    if ($(window).width() >= 768) 
    {
      sidemenu.style.left = "5px";
    }
    else
    {
      sidemenu.style.left = "-100%";
    }
  });
});


window.onload = function () {
  var humbergericon = document.getElementById("humbergericon");
  humbergericon.onclick = function () {
    if(sidemenu.style.left== "5px")
    {
      sidemenu.style.left = "-100%";
    }
    else
      {
      sidemenu.style.left = "5px";
    }
  }
}

function resizeWindow(){
  if (window.innerWidth >= 768) 
  {
    sidemenu.style.left = "5px";
  }
  else
  {
    sidemenu.style.left = "-100%";
  }
}

    */