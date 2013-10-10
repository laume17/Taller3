$(document).ready(function(){

	move();

});

function move() {

	//Hasta donde se va a mover
	var ancho = ($(".move").width()-($(".bear").width()/2))-20;
	//Variable que sabe quien es el oso (que clase es)
	var bear = $(".bear");

	//EL METODO ESTA DIVIDIDO EN DOS ANIMACIONES

	//Primera Animacion
	//- Mueve el oso a la derecha
	bear.animate({
		marginLeft: "+="+ancho
	}, 2000);

	//Segunda Animacion
	//- Mueve el oso a la izquierda
	//- Cuando acabe la animacion vuelve y llama el mismo método
	bear.animate({
		marginLeft: "-="+ancho
	}, 5000, function(){
		move();
	});


}


$(".links").click(function(){
	var imagen = $(this).parent().parent().find("img");
	var rutaDeImagen = imagen[0].src;

	var name = $(this).parent().find("h4");
	var nuevo = name[0].innerHTML;

	var nuevoHtml = "<img class='img-responsive' src='"+rutaDeImagen+"' />";


	$("#myModal .modal-body").html(nuevoHtml);
	$("#myModal .modal-title").html(nuevo);

	

	$('#myModal').modal();

})
