function validateEmail(email) { 
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

jQuery.noConflict();
(function( $ ) {
	$(function() {
	
		$(document).ready(function() {
	$('.formulario button').click(function(e) {
		var nombre = $('input[name="nombre"]').val();
		if (nombre == '' || nombre.length < 2) {
			alert("¿Cómo te llamas?");
			return false;
		}

		var email = $('input[name="email"]').val();
		if (!validateEmail(email)) {
			alert("Me falta tu email");
			return false;
		}


		return true;
	});
		});
	
	});
})(jQuery);
