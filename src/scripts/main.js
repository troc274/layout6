$(document).ready(function(){
	$('.sl1').owlCarousel({
		nav:true,
		loop: true,
		items: 1,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
	});
	$('.sl2').owlCarousel({
		nav:true,
		loop: true,
		items: 1,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
		responsive: {
			1000:{
				nav: false,
				dots: true,
			}
		}
	});
	$('.sl3').owlCarousel({
		nav:true,
		loop: true,
		items: 1,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
		responsive: {
			600:{
				items: 4
			},
			1000:{
				items: 6,
			}
		}
	});
  });
