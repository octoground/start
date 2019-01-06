<?php 
use yii\helpers\Url;
use app\helpers\FileHelper;
use yii\helpers\StringHelper;
use yii\widgets\LinkPager;
?>
<?php if (empty($products)): ?>
	<p>Ничего не найдено</p>
<?php else : ?>
	<?php foreach ($products as $product): ?>
		<div class="product">
			<a href="<?= Url::to(['/catalog/view', 'id' => $product->id]); ?>">
				<div class="img-wrap">
<!--					<img src="--><?//= FileHelper::getImageThumb($product->img_src, 300, 210) ?><!--" alt="--><?//= $product->title; ?><!--">-->
					<img src="<?= $product->img_src ?>" alt="<?= $product->title; ?>" height="200">
				</div>
				<div class="title"><?= $product->title; ?></div>
			</a>
			<div class="pd">
				<div class="text"><?= StringHelper::truncate($product->description, 65, '...'); ?></div>
				<div class="price"><?= number_format($product->price); ?> руб</div>
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
				<button class="add-to-compare">Сравнить</button>
			</div>
		</div>
	<?php endforeach; ?>
	<div class="pagination">
		<?php for ($i=1; $i<=$count_page; $i++) : ?>
			<a href="" class="set-page <?= ($i == $current_page) ? 'chosen' : ''; ?>" data-id="<?= $i; ?>"><?= $i; ?></a>
		<?php endfor; ?>
	</div>
<?php endif; ?>