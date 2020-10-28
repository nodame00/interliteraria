$(document).ready(function(){
 // var altura = $('.menu').offset().top;
  var altura = 56;
  var menu_opciones = $("#menu_opciones");
  var el = $("#EN");
  var ea = $("#EA");
  var n = $("#N");
  var r = $("#R");
  var p = $("#P");
  var m = $("#M");
  var mu = $("#Mu");
  var o = $("#O");


  $(window).on('scroll', function(){
    if ( $(window).scrollTop() > altura ){
      $("#div_menu").removeClass("bg-white");
      $("#div_menu").addClass("bg-dark menu-fixed");
      $('.menu').removeClass("bg-white");
      $('.menu').addClass("navbar-dark bg-dark"); 
      menu_opciones.css('background-color','#171818');
      el.addClass("a-color");
      ea.addClass("a-color");
      n.addClass("a-color");
      r.addClass("a-color");
      p.addClass("a-color");
      m.addClass("a-color");
      mu.addClass("a-color");
      o.addClass("a-color");

    } else {
      $("#div_menu").removeClass("bg-dark");
      $("#div_menu").addClass("bg-white");
      $(".menu").removeClass("navbar-dark bg-dark");
      $(".menu").addClass("navbar-light bg-white");
      menu_opciones.css('background-color','#FFFFFF');
      el.removeClass("a-color");
      ea.removeClass("a-color");
      n.removeClass("a-color");
      r.removeClass("a-color");
      p.removeClass("a-color");
      m.removeClass("a-color");
      mu.removeClass("a-color");
      o.removeClass("a-color");
    }
  });
  
});