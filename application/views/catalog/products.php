<?php 
	use yii\helpers\Url;
	use app\helpers\FileHelper;
	use yii\helpers\StringHelper;
	use yii\widgets\LinkPager;
?>
<div class="products">
	<div class="products-head">
		<div class="block">
			<p>Сортировка: </p>
			<select>
				<option>По умолчанию</option>
			</select>
		</div>
		<div class="block block--pages ">
			<p>На странице: </p>
			<select class="select-count-on-pages">
				<option value="5">По 5</option>
				<option value="10">По 10</option>
				<option value="15" selected>По 15</option>
			</select>
		</div>
	</div>
	<div class="chosen-filters">
<!-- 		<p class="chosen-filters__title">Выбранные фильтры:</p>
			<?php for ($i=1; $i<=3; $i++): ?>
				<div class="block">
					<p>Слуховые аппараты: Заушные</p>
					<button title="Удалить"><img src="/images/chosen-filter-close.png" alt="Удалить"></button>
				</div>
				<div class="block">
					<p>Бренды: Widex</p>
					<button title="Удалить"><img src="/images/chosen-filter-close.png" alt="Удалить"></button>
				</div>
				<div class="block">
					<p>Цена: 16000-95000</p>
					<button title="Удалить"><img src="/images/chosen-filter-close.png" alt="Удалить"></button>
				</div>
			<?php endfor; ?>
		<div class="clear"></div> -->
	</div>
	<div class="products-list">
		<div class="cover">
			<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
		</div>
		<div class="list">
			<?php foreach ($initial_products as $product): ?>
				<div class="product">
					<a href="<?= Url::to(['/catalog/view', 'id' => $product->id]); ?>">
						<div class="img-wrap">
<!--							<img src="--><?//= FileHelper::getImageThumb($product->img_src, 300, 210) ?><!--" alt="--><?//= $product->title; ?><!--">-->
							<img src="<?= $product->img_src ?>" alt="<?= $product->title; ?>" height="200">
						</div>
						<div class="title"><?= $product->title; ?></div>
					</a>
					<div class="pd">
						<div class="text"><?= StringHelper::truncate($product->description, 65, '...'); ?></div>
						<div class="price"><?= number_format($product->price, 0, '.', ' '); ?> руб</div>
						<?php if ($product->cookieIsset()): ?>
							<button class="add-to-cart added" data-id="<?= $product->id; ?>">
								<p>Убрать из корзины</p>
								<span class="fa fa-times"></span>
							</button>
						<?php else: ?>
							<button class="add-to-cart" data-id="<?= $product->id; ?>">
								<p>В корзину</p>
								<span class="fa fa-shopping-cart"></span>
							</button>
						<?php endif; ?>
						<!-- <button class="add-to-compare" data-id="<?= $product->id; ?>">Сравнить</button> -->
					</div>
				</div>
			<?php endforeach; ?>

			<div class="pagination">
				<?php for ($i=1; $i<=$count_page; $i++) : ?>
					<a href="" class="set-page <?= ($i==1) ? 'chosen' : ''; ?>" data-id="<?= $i; ?>"><?= $i; ?></a>
				<?php endfor; ?>
			</div>
		</div>
	</div>
</div>