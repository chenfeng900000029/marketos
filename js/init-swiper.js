//  轮播图	
! function() {
	var view = document.querySelector('#myslides')
	var controller = {
		view: null,
		swiper:null,
		swiperOptions:{
				loop: true,
				touchMoveStopPropagation: false,
				autoplayDisableOnInteraction: false,
				pagination: {
					el: '.swiper-pagination',
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				scrollbar: {
				},
				autoplay: {
					delay: 3000,
				},
			},
		init: function(view) {
			this.view = view
			this.initSwiper()
		},
		initSwiper: function() {
			this.swiper = new Swiper(view.querySelectorAll('.swiper-container'), 
			this.swiperOptions
			)
		}
	}
	controller.init(view)
}.call()