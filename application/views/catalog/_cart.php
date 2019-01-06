<?php if (empty($products)): ?>
	<p style="padding: 50px;">Нет товаров</p>
	<?php else: ?>
	<?php foreach ($products as $product): ?>
		<div class="r">
			<div class="left">
				<div class="img-wrap">
					<img src="<?= $product->img_src; ?>">
				</div>
				<div class="title"><?= $product->title; ?></div>
			</div>
			<div class="right">
				<p class="counter-p"><?=$product->count; ?> шт.</p>
				<div class="price"><?= number_format($product->price, 0, '.', ' '); ?> Руб</div>
			</div>
		</div>
		<div class="hidden">
			<input type="text" name="product[][name]" value="<?= $product->title; ?>">
		</div>
	<?php endforeach; ?>
<?php endif; ?>