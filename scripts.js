$(document).ready(function(){
	/* Menú Cortina al 100% */
	$('#cerrar').hide();
	
	$('#abrir').click(function() {
		$('aside#menu-movil').animate({
			right: 0
		}, 300,'easeOutExpo');
		
		$('#abrir').hide();
		$('#cerrar').show();
		
		event.preventDefault();
	});
	
	$('#cerrar, #to-contact').click(function() {
		$('aside#menu-movil').animate({
			right: '-100%'
		},300,'easeOutExpo');
		
		$('#cerrar').hide();
		$('#abrir').show();
		
		event.preventDefault();
	});
	
	
	
	/* Testimonios */
	$('.slick-testimonios').slick({
		slidesToShow: 2,
  		slidesToScroll: 2,
  		autoplay: true,
  		autoplaySpeed: 6000,
		dots: false,
  		infinite: true,
  		speed: 250,
  		fade: false,
  		cssEase: 'ease',
		pauseOnHover: true,
		arrows: false
	});
	
	
	
	/* Beneficios */
	$('.slick-beneficios').slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
  		autoplay: true,
  		autoplaySpeed: 6000,
		dots: false,
  		infinite: true,
  		speed: 250,
  		fade: false,
  		cssEase: 'ease',
		pauseOnHover: true,
		arrows: true
	});
	
	
	
	/* Consultor */
	$('.slick-consultor').slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
  		autoplay: true,
  		autoplaySpeed: 5000,
		dots: false,
  		infinite: true,
  		speed: 250,
  		fade: false,
  		cssEase: 'ease',
		pauseOnHover: true,
		arrows: true
	});
	
	
	
	/* ScrollDown */
	$('#to-contact, .to-servicios, #to-trabaja').bind('click',function(event){
		var $anchor = $(this);  
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000,'easeOutExpo');
		event.preventDefault();
	});
	
	
	
	/* Test */
	
		var sobreviviendo = 0;
		var despertando = 0;
		var desarrollando = 0;
		
		/* Pregunta 1 */
		$('figure#pregunta-01').show(300);
		$('figure#pregunta-02, figure#pregunta-03, figure#pregunta-04, figure#pregunta-05, figure#pregunta-06, figure#pregunta-07').hide();
	
		/* Pregunta 1 hacia Pregunta 2 */
		$('#si-01').click(function() {
			$('figure#pregunta-02').show(300);
			$('figure#pregunta-01, figure#pregunta-03, figure#pregunta-04, figure#pregunta-05, figure#pregunta-06, figure#pregunta-07').hide();
			
			sobreviviendo++;
			despertando++;
			
			event.preventDefault();
		});
		$('#no-01').click(function() {
			$('figure#pregunta-02').show(300);
			$('figure#pregunta-01, figure#pregunta-03, figure#pregunta-04, figure#pregunta-05, figure#pregunta-06, figure#pregunta-07').hide();
			
			desarrollando++;
			
			event.preventDefault();
		});
	
		/* Pregunta 2 hacia Pregunta 3 */
		$('#si-02').click(function() {
			$('figure#pregunta-03').show(300);
			$('figure#pregunta-01, figure#pregunta-02, figure#pregunta-04, figure#pregunta-05, figure#pregunta-06, figure#pregunta-07').hide();
			
			sobreviviendo++;
			
			event.preventDefault();
		});
		$('#no-02').click(function() {
			$('figure#pregunta-03').show(300);
			$('figure#pregunta-01, figure#pregunta-02, figure#pregunta-04, figure#pregunta-05, figure#pregunta-06, figure#pregunta-07').hide();
			
			despertando++;
			desarrollando++;
			
			event.preventDefault();
		});
	
		/* Pregunta 3 hacia Pregunta 4 */
		$('#si-03').click(function() {
			$('figure#pregunta-04').show(300);
			$('figure#pregunta-01, figure#pregunta-02, figure#pregunta-03, figure#pregunta-05, figure#pregunta-06, figure#pregunta-07').hide();
			
			desarrollando++;
			
			event.preventDefault();
		});
		$('#no-03').click(function() {
			$('figure#pregunta-04').show(300);
			$('figure#pregunta-01, figure#pregunta-02, figure#pregunta-03, figure#pregunta-05, figure#pregunta-06, figure#pregunta-07').hide();
			
			sobreviviendo++;
			despertando++;
			
			event.preventDefault();
		});
	
		/* Pregunta 4 hacia Pregunta 5 */
		$('#si-04').click(function() {
			$('figure#pregunta-05').show(300);
			$('figure#pregunta-01, figure#pregunta-02, figure#pregunta-03, figure#pregunta-04, figure#pregunta-06, figure#pregunta-07').hide();
			
			despertando++;
			desarrollando++;
			
			event.preventDefault();
		});
		$('#no-04').click(function() {
			$('figure#pregunta-05').show(300);
			$('figure#pregunta-01, figure#pregunta-02, figure#pregunta-03, figure#pregunta-04, figure#pregunta-06, figure#pregunta-07').hide();
			
			sobreviviendo++;
			
			event.preventDefault();
		});
	
		/* Pregunta 5 hacia Pregunta 6 */
		$('#si-05').click(function() {
			$('figure#pregunta-06').show(300);
			$('figure#pregunta-01, figure#pregunta-02, figure#pregunta-03, figure#pregunta-04, figure#pregunta-05, figure#pregunta-07').hide();
			
			despertando++;
			desarrollando++;
			
			event.preventDefault();
		});
		$('#no-05').click(function() {
			$('figure#pregunta-06').show(300);
			$('figure#pregunta-01, figure#pregunta-02, figure#pregunta-03, figure#pregunta-04, figure#pregunta-05, figure#pregunta-07').hide();
			
			sobreviviendo++;
			
			event.preventDefault();
		});
	
		/* Pregunta 6 hacia Pregunta 7 */
		$('#si-06').click(function() {
			$('figure#pregunta-07').show(300);
			$('figure#pregunta-01, figure#pregunta-02, figure#pregunta-03, figure#pregunta-04, figure#pregunta-05, figure#pregunta-06').hide();
			
			sobreviviendo++;
			
			if(sobreviviendo == 6){ $('#resultado-01').show(150); }
			if(sobreviviendo == 6){ $('.to-valoracion').css('display','block'); }
			
			if(sobreviviendo != 6){ $('#resultado-01').show(150); }
			if(sobreviviendo != 6){ $('.to-valoracion').css('display','block'); }
			
			if(despertando != 6){ $('#resultado-01').show(150); }
			if(despertando != 6){ $('.to-valoracion').css('display','block'); }
			
			if(desarrollando != 6){ $('#resultado-01').show(150); }
			if(desarrollando != 6){ $('.to-valoracion').css('display','block'); }
			
			event.preventDefault();
		});
		$('#no-06').click(function() {
			$('figure#pregunta-07').show(300);
			$('figure#pregunta-01, figure#pregunta-02, figure#pregunta-03, figure#pregunta-04, figure#pregunta-05, figure#pregunta-06').hide();
			
			despertando++;
			desarrollando++;
			
			if(despertando == 6){
				$('#resultado-02').show(150);
				$('.to-valoracion').css('display','block');
			}
			
			if(desarrollando == 6){
				$('#resultado-03').show(150);
				$('.to-valoracion').css('display','block');
			}
			
			event.preventDefault();
		});
});