	<?php
	use yii\helpers\Url;
?>
<div class="catalog-page" >
	<div class="content">
	<?php 
        $cookies = Yii::$app->response->cookies;
        
	?>
		<div class="title-row">
			<p class="title">Каталог продукции</p>
			<div class="right">
				<a href="<?= Url::to(['/cart/index']); ?>" class="cart-href">
					<div class="fa fa-shopping-cart"></div>
					<p>Корзина (<span><?= count(Yii::$app->request->cookies->getValue('cart')); ?></span>)</p>
				</a>
				<!-- <a href="<?= Url::to(['/catalog/compare']); ?>" class="fav-href">Список сравнения (0)</a> -->
			</div>
		</div>
		<div>
			<?= $this->render('filters', [
            	'brands' => $brands,
            	'categories' => $categories,
            	'min_price' => $min_price,
            	'max_price' => $max_price,
        	]); ?>
			<?= $this->render('products', [
				'initial_products' => $initial_products,
				'count_page' => $count_page,
				//'pages' => $pages
			]); ?>
			<div class="clear"></div>
		</div>
	</div>

</div>