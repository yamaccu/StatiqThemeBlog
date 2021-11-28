//jQuery

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