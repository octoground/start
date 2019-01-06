<div class="map-contacts" id="map-contacts">
	<div class="block">
		<div class="title">Контакты</div>
		<div class="r">
			<div class="r__title">Адрес</div>
			<p><strong>Юридический:</strong>  628404, Российская Федерация, Тюменская область, Ханты-Мансийский автономный округ – Югра, город Сургут, улица Григория Кукуевицкого, дом 13/1.</p>
			<p><strong>Фактический:</strong>  628404, Российская Федерация, Тюменская область, Ханты-Мансийский автономный округ – Югра, город Сургут, улица энергетиков , дом 20.</p>
		</div>
		<div class="r">
			<div class="r__title">Телефон</div>
			<p>
				<strong>1.</strong>  +7 (3462) 98-03-03<br>
				<strong>2.</strong>  +7 (3462) 98-20-61
			</p>
		</div>
		<div class="r">
			<div class="r__title">Электронная почта</div>
			<p><strong>vrach.office@yandex.ru</strong></p>
		</div>
	</div>
</div>
<div class="content contact-feedback">
	<div class="contact-feedback__title">Обратная связь</div>
	<form class="contact-feedback-form">
		<div class="wrap">
			<input name="name" type="text" placeholder="Ваше имя">
			<input name="phone" type="text" placeholder="Телефон">
			<input name="email" type="text" placeholder="Электронная почта">
		</div>
		<textarea name="text" placeholder="Сообщение"></textarea>
		<button class="submit">Отправить</button>
		<div class="clear"></div>
		<div class="error-summary"></div>
	</form>
</div>
<div class="contact-footer">
	<img src="/images/logo.svg" alt="Logo">
	<p>© Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
<script src="http://api-maps.yandex.ru/2.1/?lang=ru_RU"></script>
<script>
	ymaps.ready(init);

	function init(){
	    var myMap, 
	    myPlacemark;
		myMap = new ymaps.Map("map-contacts", {
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
</script>