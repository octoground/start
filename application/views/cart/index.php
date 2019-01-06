<div class="cart-page">
	<div class="content">
		<?php if (empty($products)): ?>
			<div class="cart-page-top">
				<p class="cart-page-top__left" style="text-align: center;">Корзина пуста</p>
			</div>
		<?php else: ?>
			<div class="cart-page-top">
				<p class="cart-page-top__left">Товары в корзине</p>
			</div>
			<div class="cart-page-center">
				<div class="cart-page-center-head cart-page-center-row">
					<div class="left">
						<div class="col col-1">Фото</div>
						<div class="col col-2">Наименование</div>
					</div>
					<div class="right">
						<div class="col col-3">Количество</div>
						<div class="col col-4">Цена</div>
					</div>
				</div>
				<?php foreach($products as $key => $product): ?>
					<div class="cart-page-center-body cart-page-center-row">
						<div class="left">
							<div class=" col col-1">
								<div class="img-wrap">
									<img src="<?= $product->img_src; ?>">
								</div>
							</div>
							<div class="product-name col col-2"><?= $product->title; ?></div>
						</div>
						<div class="right">
							<div class="col col-3">
								<div class="counter">
									<input type="text" pattern="\d+" name="product[][count]" value="<?= $product->count; ?>" class="product_count_input">
									<div class="arrs">
										<div class="fa fa-angle-up" data-id="<?=$product->id;?>"></div>
										<div class="fa fa-angle-down" data-id="<?=$product->id;?>"></div>
									</div>
								</div>
							</div>
							<div class="col col-4">
								<div class="df">
									<div class="price"><?= number_format($product->price, 0, '.', ' '); ?> Руб</div>
									<button class="delete" data-id="<?= $product->id; ?>"><img src="/images/cart-delete.png" alt="delete"></button>
								</div>
							</div>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
			<div class="cart-page-bottom">
				<div class="cart-page-bottom-total">
					<span>Итого:</span>
					<strong><span><?= number_format($total_price, 0, '.', ' '); ?></span> РУБ</strong>
				</div>
				<button class="cart-page-bottom__button fcall-cart-modal popup-with-zoom-anim" href="#cart-modal">Заказать товары</button>
			</div>
		<?php endif; ?>
	</div>
</div>
	<div class="cart-modal mfp-hide zoom-anim-dialog" id="cart-modal">
		<form class="cart-modal-form">
			<div class="cart-modal__title">Заказ товаров</div>
			<div class="cart-modal-body">
				<p>Ваш заказ:</p>
				<div class="list"></div>
				<p>Укажите свои контактные данные, Наш менеджер свяжется с вами и уточнит детали <br>покупки:</p>
				<div class="cart-modal-form">
					<div class="inputs">
						<input type="text" name="name" placeholder="Ваше имя">
						<input type="text" name="phone" placeholder="Телефон">
						<input type="text" name="email" placeholder="E-mail">
					</div>
					<button class="submit">Отправить</button>
					<div class="clear"></div>
					<div class="error-summary"></div>
				</div>
			</div>
		</form>
	</div>