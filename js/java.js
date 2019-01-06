$(document).ready(function()
{
	function renderMap(){
		console.log('render map');
		$.ajax({
			url: 'http://api-maps.yandex.ru/2.1/?lang=ru_RU',
			success: function(data){
				ymaps.ready(init);
			}
		});
	}

	function init(){
	    var myMap, 
	    myPlacemark;
		myMap = new ymaps.Map("map", {
			center: [61.241708, 73.390976],
			zoom: 15,
		});
		var nameMark="Врачебный офис+";
		myPlacemark = new ymaps.Placemark([61.241708, 73.400976], {
				balloonContent: nameMark,
			}, {
				iconLayout: 'default#image',
				iconImageHref: '/images/foot.png',
				iconImageSize: [93, 114],
				iconImageOffset: [-28, -68],
				hideIconOnBalloonOpen: true
			}
		); 
		myMap.geoObjects.add(myPlacemark);
		myMap.controls.remove('searchControl');
		myMap.behaviors.disable('scrollZoom');
	}

	var mapRendered = false;

	$(window).scroll(function(){
		var scrollTop = $(this).scrollTop();
		var menu = $(".menu").offset().top;
		if (scrollTop >= menu && !mapRendered) {
			renderMap();
			mapRendered = !mapRendered;
		}
	})


	$('.popup-with-zoom-anim').magnificPopup({
	    type: 'inline',
	    fixedContentPos: false,
	    fixedBgPos: false,
	    overflowY: 'auto',
	    closeBtnInside: true,
	    preloader: false,
	    midClick: true,
	    removalDelay: 300,
	    mainClass: 'my-mfp-zoom-in'
	});

	$(".article-view .up").on("click", function(){
		$("html, body").animate({
			scrollTop: 0,
		}, 500)
	});

	$(".service-tabs .tab").on("click", function(){
		if (!$(this).hasClass("active")){
			$(".service-tabs .tab").removeClass("active");
			$(this).addClass("active");
			$(".service-content").hide();
			$(".service-content-"+$(this).data('id')).fadeIn('fast');
		}
	})

	$('.staff-view .hrefs .href').on("click", function(){
		$("html, body").animate({
			scrollTop: $(".block-text--"+$(this).data('scroll')).offset().top-100
		}, 500)
	})

	$(".reviews-page .reviews-page-top .left select").on("change", function(){
		var _this = $(this);
		$.ajax({
			type: "POST",
			url: '/site/review-render',
			data: {
				data: _this.val(),
			},
			success: function(data){
				$(".reviews-page .reviews-wrap .list").html(data)
			},
		})
	});

	$('.add-review-form .fa-star').on("click", function(){
		var id = $(this).data('id');
		$(".add-review-form .fa-star").removeClass("active");
		for (var k = 1; k <= id; k++){
			$(".add-review-form .fa-star-"+k).addClass("active");
		}
		$('.add-review-form__rating').val(id);
	});
	$(".add-review-form").goldCarrotForm({
		url: '/mail/review.php',
	})

	$(document).on("click", ".feedback-form button", function(e){
		e.preventDefault();
		var checkbox = $(this).parent().find('input[type="checkbox"]');
		if (checkbox.is(':checked')){
			$(this).parents(".feedback-form").submit();
			return true;
		} else {
			$(this).parents(".feedback-form").find(".error-summary").html("Необходимо принять условия пользовательского соглашения")
			return false;
		}
	});
	$(".feedback-form").goldCarrotForm({
		url: '/mail/feedback.php',
		attributes: {
			agreement: {
				label: 'Соглашение на обработку персональных данных',
				rules: 'required',
			}
		}
	});

	$(".contact-feedback-form").goldCarrotForm({
		url: '/mail/feedback.php',
	})
	$(".order-form").goldCarrotForm({
		url: '/mail/feedback.php',
	})

	$(".license .blocks").magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
		delegate: 'a',
	    fixedContentPos: false,
	    fixedBgPos: false,		
	})
	$('.gallery-item').magnificPopup({
	  type: 'image',
	  gallery:{
	    enabled:true
	  }
	});
	$('.licenses-body-slider').slick({
		  dots: false,
		  arrows: true,
		  infinite: false,
		  speed: 1000,
		  slidesToShow: 3,
		  slidesToScroll: 2,
	}); 



});
