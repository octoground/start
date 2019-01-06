<div class="filters">
	<div class="title">Фильтр</div>
	<?php // var_dump((Yii::$app->request->cookies->getValue('filter'))); ?>

	<?php foreach ($categories as $category): ?>
		<a href="" class="cat-title cat-title--main parent" id="<?= $category->id?>">
			<div class="cat-title-content">
				<p><?=$category->title;?></p>
				<div class="fa fa-angle-down"></div>
			</div>
		</a>
		<div class="filters-wrap">
			<?php foreach ($category->getChild() as $children): ?>
				<?php if ($children->getChild()): ?>
					<a href="" class="cat-title parent">
						<div class="cat-title-content">
							<p><?=$children->title;?></p>
							<div class="fa fa-angle-down"></div>
						</div>
					</a>
					<div class="filters-wrap">
						<?php foreach ($children->getChild() as $filter): ?>
							<a href="" class="cat-item my<?= ($filter->cookieIsset()) ? 'active' : '' ?>" data-id="<?= $filter->id; ?>">
								<p><?= $filter->title; ?></p>
								<button class="delete" data-id="<?= $filter->id; ?>">×</button>
							</a>
						<?php endforeach; ?>
					</div>
				<?php else: ?>
					<div class="filters-wrap" style="display: block;">
						<a href="" class="cat-title-item my chil <?= ($children->cookieIsset()) ? 'active' : '' ?>" data-id="<?= $children->id; ?>">
							<div class="cat-title-item-content" style="padding-left: 15px;">
								<p><?= $children->title; ?></p>
								<button class="delete cat-title-item__delete" data-id="<?= $children->id; ?>">×</button>
							</div>
						</a>
					</div>
				<?php endif; ?>
			<?php endforeach; ?>
		</div>
	<?php endforeach; ?>
	<div class="checkboxes">
		<div class="checkboxes__title">Бренды Аппаратов</div>
		<div class="wrap">
			<?php foreach ($brands as $brand): ?>
				<a href="" aria-label="<?= $brand->title; ?>" class="brand" data-id="<?= $brand->id; ?>">
					<p><?= $brand->title; ?></p>
					<input type="checkbox" hidden <?= ($brand->cookieIsset()) ? 'checked' : '' ?>>
					<span></span>
				</a>
			<?php endforeach; ?>
		</div>
	</div>
	<div class="price-range">
		<div class="price-range__title">Ценовой диапазон (Руб.)</div>
		<input type="text" class="price-range__input">
		<div class="inputs">
			<label>
				<p>От:</p>
				<input type="number" value="<?= $min_price; ?>" placeholder="<?= $min_price; ?>" min="<?= $min_price; ?>" max="<?= $max_price; ?>" class="price-range__from">
			</label>
			<label>
				<p>До:</p>
				<input type="number" value="<?= $max_price; ?>" placeholder="<?= $max_price; ?>" min="<?= $min_price; ?>" max="<?= $max_price; ?>" class="price-range__to">
			</label>
		</div>
	</div>
</div>
