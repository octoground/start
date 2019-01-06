<?php 
	use yii\helpers\Url;
?>
<section class="feedback">
	<div class="content">
		<h5>ПОЛУЧИТЕ ПОДРОБНУЮ ИНФОРМАЦИЮ ПО ТЕЛЕФОНУ</h5>
		<p class="text">Наш сотрудник свяжется с Вами в рабочее время и проконсультирует по всем интересующим Вас вопросам.</p>
		<form class="feedback-form">
			<div class="df">
				<input type="text" name="name" placeholder="Ваше имя">
				<input type="text" name="phone" placeholder="Номер телефона">
				<div class="button-wrap">
					<button class="submit">Отправить</button>
					<label>
						<input type="checkbox" hidden name="agreement">
						<span>Я согласен (а) на обработку <br><a href="/files/agreement.pdf" target="_blank">персональных данных</a></span>
					</label>
				</div>
			</div>
			<div class="error-summary"></div>
		</form>
	</div>
</section>
<section class="map" id="map">
	<div class="block">
		<div class="c-wrap">
			<div class="c">
				<div class="title">КОНТАКТЫ</div>
				<div class="r"><br>
					<p>тел. <strong>+7 (3462) 98-03-03</strong></p>
					<p>тел. <strong>+7 (3462) 98-20-61</strong></p>
				</div>
				<div class="r">
					<p>
						Адрес<br>
						<strong>г. Сургут,ул. Энергетиков, 20.</strong>
					</p>
				</div>
				<div class="r">
					<p>
						E-mail:<br>
						<strong>vrach.office@yandex.ru</strong>
					</p>
				</div>
			</div>
			<div class="c">
				<div class="title">МЕНЮ</div>
				<nav>
					<?php $controller = yii::$app->controller; ?>
					<a class="<?= ($controller->id == 'site' && $controller->action->id == 'service') ? 'active' : '' ?>" href="<?= Url::to(['/site/service']); ?>"><span>Услуги</span></a>
					<a class="<?= ($controller->id == 'catalog' && $controller->action->id == 'index') ? 'active' : '' ?>" href="<?= Url::to(['/catalog/index']); ?>"><span>Каталог продукции</span></a>
					<a class="<?= ($controller->id == 'site' && $controller->action->id == 'equipment') ? 'active' : '' ?>" href="<?= Url::to(['/site/equipment']); ?>"><span>Оборудование</span></a>
					<a class="<?= ($controller->id == 'site' && $controller->action->id == 'articles') ? 'active' : '' ?>" href="<?= Url::to(['/site/articles']); ?>"><span>Статьи</span></a>
					<a class="<?= ($controller->id == 'staff' && $controller->action->id == 'index') ? 'active' : '' ?>" href="<?= Url::to(['/staff']); ?>"><span>Персонал</span></a>
					<a class="<?= ($controller->id == 'site' && $controller->action->id == 'reviews') ? 'active' : '' ?>" href="<?= Url::to(['/site/reviews']); ?>"><span>Отзывы</span></a>
					<a class="<?= ($controller->id == 'site' && $controller->action->id == 'about') ? 'active' : '' ?>" href="<?= Url::to(['/site/about']); ?>"><span>О компании</span></a>
					<a class="<?= ($controller->id == 'site' && $controller->action->id == 'contacts') ? 'active' : '' ?>" href="<?= Url::to(['/site/contacts']); ?>"><span>Контакты</span></a>
				</nav>
			</div>
		</div>
		<div class="bottom">
			<img src="/images/logo.svg" alt="Логотип">
			<p>© Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		</div>
	</div>
</section>
<div class="gc">
	<div class="content">
		<p>© Lorem ipsum dolor sit amet</p>
		<div>
			<a href="http://goldcarrot.ru" target="_blank">Создание сайта</a>
			 - Digital Agency Gold Carrot
		</div>
	</div>
</div>