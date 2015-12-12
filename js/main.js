
var map;

$(window).load(function() {
"use trict";
var pos_inicio = $("#inicio").offset();
var pos_inicio_top = pos_inicio.top;


var pos_qsomos = $("#quienesSomos").offset();
var pos_qsomos_top = pos_qsomos.top;


var pos_trabajos = $("#trabajos").offset();
var pos_trabajos_top = pos_trabajos.top;


var pos_contacto = $("#contacto").offset();
var pos_contacto_top = pos_contacto.top;
//-------------------------------------------------------------

function activeMenus(){
	var MyScrollPage = $(window).scrollTop();

    // inicio menu
    if (MyScrollPage > pos_inicio_top) {
        
    }
    if (MyScrollPage < pos_inicio_top) {
      
    }
	
	//----------------------------------------------
	
	 // qsomos
    if (MyScrollPage > pos_qsomos_top-10) {
      //alert("quien soy");
      $("#navegacionLateral").addClass("entradaMenu");
      $(".tituloQuienesSomos").addClass("Entradatitulos");
      $("#contenidoCompletoQS").addClass("entradaArticulos");
      $("#contenidoQuienesSomos").addClass("entradaParrafoQS");


      $("#btnQuienesSomos .circuloGrande").addClass("circuloGrandeActivo");
      $("#btnQuienesSomos .circuloPequeno").addClass("circuloPequenoActivo");
      $("#btnQuienesSomos  .icono").css("margin-top","23%");
      $("#btnQuienesSomos .textoBotones").addClass("textoBotonesActivo");
      //
      $("#btnTrabajos .circuloGrande").removeClass("circuloGrandeActivo");
      $("#btnTrabajos .circuloPequeno").removeClass("circuloPequenoActivo");
      $("#btnTrabajos  .icono").css("margin-top","50%");
      $("#btnTrabajos .textoBotones").removeClass("textoBotonesActivo");
     //
     $("#btnContacto .circuloGrande").removeClass("circuloGrandeActivo");
      $("#btnContacto .circuloPequeno").removeClass("circuloPequenoActivo");
      $("#btnContacto  .icono").css("margin-top","50%");
      $("#btnContacto .textoBotones").removeClass("textoBotonesActivo");
     //
    }
	 if (MyScrollPage < pos_qsomos_top) {
      $("#navegacionLateral").removeClass("entradaMenu");
      /*$(".tituloQuienesSomos").removeClass("Entradatitulos");
      $("#contenidoCompletoQS").removeClass("entradaArticulos");
      $("#contenidoQuienesSomos").removeClass("entradaParrafoQS");*/
       $("#btnQuienesSomos .circuloGrande").removeClass("circuloGrandeActivo");
      $("#btnQuienesSomos .circuloPequeno").removeClass("circuloPequenoActivo");
      $("#btnQuienesSomos  .icono").css("margin-top","50%");
      $("#btnQuienesSomos .textoBotones").removeClass("textoBotonesActivo");
    }
	 // trabajos
    if (MyScrollPage > (pos_trabajos_top-10)) {
      $(".tituloTrabajos").addClass("Entradatitulos");
      $(".contenidoTrabajos").addClass("entradaTrabajos");

      $("#btnQuienesSomos .circuloGrande").removeClass("circuloGrandeActivo");
      $("#btnQuienesSomos .circuloPequeno").removeClass("circuloPequenoActivo");
      $("#btnQuienesSomos  .icono").css("margin-top","50%");
      $("#btnQuienesSomos .textoBotones").removeClass("textoBotonesActivo");
      //
      $("#btnTrabajos .circuloGrande").addClass("circuloGrandeActivo");
      $("#btnTrabajos .circuloPequeno").addClass("circuloPequenoActivo");
      $("#btnTrabajos  .icono").css("margin-top","23%");
      $("#btnTrabajos .textoBotones").addClass("textoBotonesActivo");
     //
     $("#btnContacto .circuloGrande").removeClass("circuloGrandeActivo");
      $("#btnContacto .circuloPequeno").removeClass("circuloPequenoActivo");
      $("#btnContacto  .icono").css("margin-top","50%");
      $("#btnContacto .textoBotones").removeClass("textoBotonesActivo");
     //
     
    }
	 if (MyScrollPage < (pos_trabajos_top)) {
     /* $(".tituloTrabajos").removeClass("Entradatitulos");
      $(".contenidoTrabajos").removeClass("entradaTrabajos");*/

      $("#btnTrabajos .circuloGrande").removeClass("circuloGrandeActivo");
      $("#btnTrabajos .circuloPequeno").removeClass("circuloPequenoActivo");
      $("#btnTrabajos  .icono").css("margin-top","50%");
      $("#btnTrabajos .textoBotones").removeClass("textoBotonesActivo");

    }
	// contacto
    if (MyScrollPage > pos_contacto_top-10) {
      $(".tituloContacto").addClass("Entradatitulos");
      $("#contenedorFormulario").addClass("entradaContactoForm");
      $("#contenedorMapa").addClass("entradaContactoMapa");

     $("#btnQuienesSomos .circuloGrande").removeClass("circuloGrandeActivo");
      $("#btnQuienesSomos .circuloPequeno").removeClass("circuloPequenoActivo");
      $("#btnQuienesSomos  .icono").css("margin-top","50%");
      $("#btnQuienesSomos .textoBotones").removeClass("textoBotonesActivo");
      //
      $("#btnTrabajos .circuloGrande").removeClass("circuloGrandeActivo");
      $("#btnTrabajos .circuloPequeno").removeClass("circuloPequenoActivo");
      $("#btnTrabajos  .icono").css("margin-top","50%");
      $("#btnTrabajos .textoBotones").removeClass("textoBotonesActivo");
     //
     $("#btnContacto .circuloGrande").addClass("circuloGrandeActivo");
      $("#btnContacto .circuloPequeno").addClass("circuloPequenoActivo");
      $("#btnContacto  .icono").css("margin-top","23%");
      $("#btnContacto .textoBotones").addClass("textoBotonesActivo");
     //
    }
	 if (MyScrollPage < pos_contacto_top) {
     /*$(".tituloContacto").removeClass("Entradatitulos");
      $("#contenedorFormulario").removeClass("entradaContactoForm");
      $("#contenedorMapa").removeClass("entradaContactoMapa");*/

     $("#btnContacto .circuloGrande").removeClass("circuloGrandeActivo");
      $("#btnContacto .circuloPequeno").removeClass("circuloPequenoActivo");
      $("#btnContacto  .icono").css("margin-top","50%");
      $("#btnContacto .textoBotones").removeClass("textoBotonesActivo");
    }
	}setInterval(activeMenus, 100);

  jQuery('img.svg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });
/***************************/

	mapa();

/**************************/

});

function mapa(){
	
	map = new GMaps({
        div: '#mapa',
		scrollwheel:false,
        lat: 6.246646,
        lng: -75.572332,
		zoom:18
      });
      map.drawOverlay({
        lat: map.getCenter().lat(),
        lng: map.getCenter().lng(),
        content: '<div class="overlay"><div class="overlay_arrow above"></div></div>',
        verticalAlign: 'center',
        horizontalAlign: 'center'
      });
map = new GMaps({
        div: '#mapaR',
    scrollwheel:false,
        lat: 6.246646,
        lng: -75.572332,
    zoom:18
      });
      map.drawOverlay({
        lat: map.getCenter().lat(),
        lng: map.getCenter().lng(),
        content: '<div class="overlay"><div class="overlay_arrow above"></div></div>',
        verticalAlign: 'center',
        horizontalAlign: 'center'
      });
	
}// fin mapa
$(document).ready(function() {
/***********------------------------------------**************/
"use strict";
 $('.itemNormal a, .itemsNavegacionLateral a, .itemsNavegacion li a').click(function(e){
        /*  alert("entro");*/
            e.preventDefault();
            var enlace  = $(this).attr('href');
            $('html, body').animate({
                scrollTop:$(enlace).offset().top
            }, 1000);
            });
      
/***********************************************************/

function altogeneral(){
      var alturanavg = $(window).height();
      /* var alto_menu = $(".menuResponsiveM").outerHeight();*/
      $("#menuResponsive").css("height", alturanavg);
      $("#inicio, #quienesSomos, #trabajos, #contacto").css("height", alturanavg);
      /*$(".mensajeEnviadoResponsiveM").css("height", alturanavg);*/
    }
    setTimeout(altogeneral, 50);
    setInterval(altogeneral, 100);
  $(window).resize(function(){
      altogeneral();
     
  });
  
/********************************************/ 
$(".itemTrabajo").click(function(){
 // alert("funciona");
var rutaImagen= $(this).find(".imagenTrabajo").attr("src");
$(".imagenGrande").fadeIn(500);
$(".imagenGrande img").attr("src",rutaImagen);
});
$(".salirContenedor").click(function(){
  $(".imagenGrande").fadeOut(500);
  });
/********************************/

$("#btnNavegacionResponsive").click(function(){
	$("#menuResponsive").animate({"left":"0"},500);
	});
$("#botonMenuCerrar").click(function(){
	$("#menuResponsive").animate({"left":"-71%"},500);
	});
$(".itemsNavegacion li").click(function(){
	$("#menuResponsive").animate({"left":"-71%"},500);
	});
/***********************************/

  });
