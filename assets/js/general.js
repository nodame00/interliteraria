$(document).ready(function(){
 // var altura = $('.menu').offset().top;
  var altura = 56;
  var menu_opciones = $("#menu_opciones");
  var menu_opciones_2 = $("#menu_opciones_2");
  var el = $("#EN");
  var ea = $("#EA");
  var n = $("#N");
  var r = $("#R");
  var p = $("#P");
  var m = $("#M");
  var mu = $("#Mu");
  var o = $("#O");
  var pr = $("#Pr");
  var dir = $("#Dir");
  var mini_01 = $("#mini_01");
  var mini_02 = $("#mini_02");
  var card_01 = $("#card_01");
  var card_02 = $("#card_02");

  var ed = $("#ed_001");

  mini_02.click(function(){
    console.log(1);
    if(card_02.css("display") == "none"){
      card_01.removeClass("visible");
      card_01.addClass("oculto");

      card_02.removeClass("oculto");
      card_02.addClass("visible");

      $(window).scrollTop(450);
    }
  });

  mini_01.click(function(){
    if(card_01.css("display") == "none"){
      card_02.removeClass("visible");
      card_02.addClass("oculto");

      card_01.removeClass("oculto");
      card_01.addClass("visible");
      
      $(window).scrollTop(450);
    }
    
  });

  ed.click(function(){
    $(window).scrollTop(450);
  });

  $(window).on('scroll', function(){
    if ( $(window).scrollTop() > altura ){
      $("#div_menu").removeClass("bg-white");
      $("#div_menu").addClass("bg-dark menu-fixed");
      $('.menu').removeClass("bg-white");
      $('.menu').addClass("navbar-dark bg-dark"); 
      menu_opciones.css('background-color','#171818');
      menu_opciones_2.css('background-color','#171818');
      el.addClass("a-color");
      ea.addClass("a-color");
      n.addClass("a-color");
      r.addClass("a-color");
      p.addClass("a-color");
      m.addClass("a-color");
      mu.addClass("a-color");
      o.addClass("a-color");
      pr.addClass("a-color");
      dir.addClass("a-color");

    } else {
      $("#div_menu").removeClass("bg-dark");
      $("#div_menu").addClass("bg-white");
      $(".menu").removeClass("navbar-dark bg-dark");
      $(".menu").addClass("navbar-light bg-white");
      menu_opciones.css('background-color','#FFFFFF');
      menu_opciones_2.css('background-color','#FFFFFF');
      el.removeClass("a-color");
      ea.removeClass("a-color");
      n.removeClass("a-color");
      r.removeClass("a-color");
      p.removeClass("a-color");
      m.removeClass("a-color");
      mu.removeClass("a-color");
      o.removeClass("a-color");
      pr.removeClass("a-color");
      dir.removeClass("a-color");

    }
  });
  




});