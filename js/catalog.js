$(document).ready(function(){

	var filter = {
		categories: [],
		brands: [],
		price: {
			min: $(".price-range__from").val(),
			max: $(".price-range__to").val(),
		},
		sort: 'default',
		countOnPage: 15,
		page: 1,
	};

	console.log(filter)

	function checkCookieFilter()
	{
		$(".checkboxes .brand").each(function(){
			var checkbox = $(this).find('input');
			if (checkbox.is(':checked')){
				filter.brands.push($(this).data('id'));
			}
		});

		$(".cat-item, .cat-title-item").each(function(){
			var _this = $(this);
			if (_this.hasClass('active')){
				filter.categories.push(_this.data('id'));
			}
		});

		console.log('checkCookieFilter()', filter)
		if (filter.categories.length) {
			setTimeout(function(){
				$(".cat-title--main").click();
				$('.cat-title--main').next().find('.cat-title').click();
			}, 100)
		}
	}

	checkCookieFilter();

	function checkCatExist(id){
		for (var i = 0; i <= filter.categories.length; i++){
			if (filter.categories[i] === id){
				filter.page = 1;
				return true;
			}
		}
		return false
	}

	function checkBrandExist(id){
		for (var i = 0; i <= filter.brands.length; i++){
			if (filter.brands[i] === id){
				filter.page = 1;
				return true;
			}
		}
		return false
	}
	if (filter.categories.length || filter.brands.length){
		renderProducts();
	}
	function renderProducts(){
		console.log('start render products');
		$(".products-list .cover").fadeIn();
		$.ajax({
			url: '/catalog/render-products',
			type: "POST",
			data: {
				data: filter,
			},
			success: function(data){
				console.log('ajax success', data);
				$(".products-list .list").html(data);
			},
			error: function(data){
				console.log('ajax error', data);
				$(".products-list .list").html(data.responseText);
			},
			complete: function(data){
				$(".products-list .cover").fadeOut();
			}
		})
	}

	//раскрытие категории в фильтрах
	$(".catalog-page .filters .cat-title").on("click", function(e){
		e.preventDefault();
		$(this)
			.toggleClass("active")
			.next().slideToggle("fast");
	});

	//удаление выбранной категории в фильтрах
	$(".catalog-page .filters .cat-item .delete, .catalog-page .filters .cat-title-item .delete").on("click", function(e){
		e.preventDefault();
		e.stopPropagation();
		if ($(this).hasClass("cat-title-item__delete")){
			$(this).parent().parent().removeClass("active");
		} else {
			$(this).parent().removeClass("active");
		}
		var id = $(this).data('id');
		console.log("delete", id)
		if (checkCatExist(id)) {
			filter.categories.splice(filter.categories.indexOf(id), 1);
			console.log('cat removed', filter.categories)
			renderProducts();
		}
	});

	//добавление категории в фильтрах
	$(".catalog-page .filters .cat-item, .catalog-page .filters .cat-title-item").on("click", function(e){
		e.preventDefault();
		$(this).addClass("active");
		var id = $(this).data('id');
		if (!checkCatExist(id)) {
			filter.categories.push(id)
			console.log('cat added', filter.categories)
			renderProducts();
		}
	});

	//чекбоксы брендов в фильтрах
	$(".catalog-page .filters .checkboxes .brand").on("click", function(e){
		e.preventDefault();
		var inputSelector = $(this).find('input');
		inputSelector.prop("checked", !(inputSelector.is(':checked')));
		var id = $(this).data(id).id;
		if (!checkBrandExist(id)) {
			filter.brands.push(id)
			console.log('brand added', filter.brands)
		} else {
			filter.brands.splice(filter.brands.indexOf(id), 1);
			console.log('brand removed', filter.brands)
		}
		renderProducts();
	});

	//range input price
	$(".price-range__input").ionRangeSlider({
    	type: "double",
    	min: $(".price-range__from").val(),
    	max: $(".price-range__to").val(),
    	onFinish: function(data){
    		$(".price-range__from").val(data.from);
    		$(".price-range__to").val(data.to);
    		filter.price.min = data.from
    		filter.price.max = data.to
    		console.log('price updated', filter.price)
			setTimeout(function(){
				renderProducts();
			}, 250);
    	}
	});

	var catalogPriceSlider = $(".price-range__input").data("ionRangeSlider");

	$(".price-range__from").on("input", function(){
		catalogPriceSlider.update({
			from: $(this).val(),
		});
		filter.price.min = $(this).val()
		console.log('price updated', filter.price)				
		renderProducts();
	});

	$(".price-range__to").on("input", function(){
		catalogPriceSlider.update({
			to: $(this).val(),
		});
		filter.price.max = $(this).val()		
		console.log('price updated', filter.price)
		renderProducts();

	});
	//end range input price

	//change page
	$(document).on("click", ".pagination .set-page", function(e){
		e.preventDefault();
		$(".pagination .set-page").removeClass('chosen');
		$(this).addClass("chosen")
		filter.page = $(this).data("id");
		console.log('page updated', filter.page)
		renderProducts();	
		$("html, body").animate({
			scrollTop: $(".catalog-page").offset().top
		}, 250);
	})

	//change count on page
	$('.select-count-on-pages').on("change", function(){
		filter.countOnPage = $(this).val();
		filter.page = 1;

		console.log('countOnPage updated', filter.countOnPage)
		renderProducts();
	})

	//delete chosen filter
	$(".chosen-filters .block button").on("click", function(){
		$(this).parents(".block").remove();
	});

	//add product to compare

	var compareProducts = [];

	function checkCompareExist(id){
		for (var i = 0; i <= compareProducts.length; i++){
			if (compareProducts[i] === id){
				return true;
			}
		}
		return false
	}

	$(document).on("click", ".add-to-compare", function(){
		var id = $(this).data('id')
		if ($(this).text() == "Сравнить"){
			$(this).html("В списке сравнения <i class='fa fa-check'></i>")
		} else {
			$(this).html("Сравнить");
		}
	});




	//add product to cart
	cart = [];
	var dataCart = $("body").data("cart")
	if (dataCart == "empty"){
		cart = [];
	} else {
		cart = dataCart;
		$(".cart-href span").html(cart.length)
	}
	console.log('cart', cart);

	function checkCartExist(id){
		for (var i = 0; i <= cart.length; i++){
			if (cart[i].id == id){
				return true;
			}
		}
		return false
	}

	function updateCartCookie(){
		$.ajax({
			url: "/catalog/cart-cookie",
			type: "POST",
			data: {
				data: cart
			},
			success: function(data){
				$(".cart-href span").html(cart.length);
				$(".cart-modal .list").html(data.html);
				$(".cart-page-bottom-total strong span").html(data.total_price)
				$(".cart-modal-form").goldCarrotForm({
					url: '/mail/cart.php'
				})
			},
			error: function()
			{
				alert("Внутренняя ошибка сервера. Товар не добавлен в корзину")
			},
		})
	}

	updateCartCookie();

	function deleteFromCart(id)
	{
		var index123;
		cart.forEach(function(elem, i, arr){
			console.log('elem', elem)
			console.log('id', id)
			if (id == +elem.id){
				index123 = i;
				console.log('true', index123);
			}
		});
		console.log('index', index123)
		cart.splice(index123, 1);
	}

	$(document).on("click", ".add-to-cart", function(){
		var id = $(this).data('id');
		if ($(this).hasClass("added") && checkCartExist(id)){
			$(this)
				.removeClass("added")
				.html('<p>В корзину</p><span class="fa fa-shopping-cart"></span>');
			deleteFromCart(id);
			console.log('product deleted', cart)
		} else {
			$(this)
				.addClass("added")
				.html('<p>Убрать из корзины</p><span class="fa fa-times"></span>');
			cart.push({
				id: id,
				count: 1,
			});
			console.log('product added', cart)
		}
		updateCartCookie();
	});

	$(document).on("click", ".arrs .fa", function(){
		var input_val = $(this).parents('.counter').find('.product_count_input').val();
		var id = $(this).data('id');
		if ($(this).hasClass("fa-angle-up")){
			$(this).parents('.counter').find('.product_count_input').val(parseInt(input_val)+1);
		} else {
			$(this).parents('.counter').find('.product_count_input').val(parseInt(input_val)-1);
		}
		if ($(this).parents('.counter').find('.product_count_input').val() == 0) {
			$(this).parents('.counter').find('.product_count_input').val(1);
		}
		var new_input_val = $(this).parents('.counter').find('.product_count_input').val();
		cart.forEach(function(elem, i, arr){
			if (elem.id == id){
				elem.count = new_input_val;
			}
		});
		updateCartCookie();
	});

	$(document).on("click", ".cart-page-center .delete", function(e){
		var id = $(this).data('id');
		deleteFromCart(id);
		console.log(cart)
		$(this).parents(".cart-page-center-row").remove();
		updateCartCookie();
	});

	//item view detail table toggler
	$(".item-detailview-table .toggler").on("click", function(e){
		$(".item-detailview-table-body").slideToggle('fast');
		$(this).find('.fa').toggleClass('fa-rotate-180')
	});



});