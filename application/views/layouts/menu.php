<?php 
	use yii\helpers\Url;
?>
<div class="menu" >
	<div class="content">
		<a class="logo" href="/" aria-label="Врачебный офис, главная страница" title="На главную">
			<img src="/images/logo.svg" alt="Логотип">
		</a>
		<nav>
		<?php $controller = yii::$app->controller; ?>
			<!-- <a class="active" href=""><span>Цены</span></a> -->
			<a class="<?= ($controller->id == 'site' && $controller->action->id == 'service') ? 'active' : '' ?>" href="<?= Url::to(['/site/service']); ?>"><span>Услуги</span></a>
			<a class="<?= ($controller->id == 'catalog' && $controller->action->id == 'index') ? 'active' : '' ?>" href="<?= Url::to(['/catalog/index']); ?>"><span>Каталог продукции</span></a>
			<a class="<?= ($controller->id == 'site' && $controller->action->id == 'equipment') ? 'active' : '' ?>" href="<?= Url::to(['/site/equipment']); ?>"><span>Оборудование</span></a>
			<a class="<?= ($controller->id == 'site' && $controller->action->id == 'articles') ? 'active' : '' ?>" href="<?= Url::to(['/site/articles']); ?>"><span>Статьи</span></a>
			<a class="<?= ($controller->id == 'staff' && $controller->action->id == 'index') ? 'active' : '' ?>" href="<?= Url::to(['/staff']); ?>"><span>Персонал</span></a>
			<a class="<?= ($controller->id == 'site' && $controller->action->id == 'reviews') ? 'active' : '' ?>" href="<?= Url::to(['/site/reviews']); ?>"><span>Отзывы</span></a>
			<a class="<?= ($controller->id == 'site' && $controller->action->id == 'about') ? 'active' : '' ?>" href="<?= Url::to(['/site/about']); ?>"><span>О компании</span></a>
			<a class="<?= ($controller->id == 'site' && $controller->action->id == 'contacts') ? 'active' : '' ?>" href="<?= Url::to(['/site/contacts']); ?>"><span>Контакты</span></a>
		</nav>
		<div class="right-side">
			<a aria-label="Телефон для записи" title="+7 (3462) 98-03-03" href="tel:+73462980303" class="right-side__phone">+7 (3462) 98-03-03</a>
			<a title="Запись на прием" href="#order" class="right-side__order popup-with-zoom-anim">Запись на прием</a>
		</div>
	</div>
</div>
<div class="cart-modal mfp-hide zoom-anim-dialog" id="order">
	<form class=" order-form">
		<div class="cart-modal__title">Заявка</div>
		<div class="cart-modal-body">
			<p>Укажите свои контактные данные, Наш менеджер свяжется с вами и уточнит детали покупки:</p>
			<div class="cart-modal-form">
				<div class="inputs">
					<input type="text" name="name" placeholder="Ваше имя">
					<input type="text" name="phone" placeholder="Телефон">
					<input type="text" name="email" placeholder="E-mail">
				</div>
				<button class="submit">Отправить</button>
				<div class="clear"><div class="error-summary"></div></div>
				
			</div>
		</div>
	</form>
</div>