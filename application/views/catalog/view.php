<?php
	use yii\helpers\Url;
	use yii\helpers\StringHelper;
?>
<div class="catalog-view">
	<div class="content">
		<div class="title-row">
			<a href="<?= Url::to(['/catalog/index']); ?>" class="title">
				<span class="fa fa-angle-left"></span>
				Каталог продукции
			</a>
			<div class="right">
				<a href="<?= Url::to(['/cart/index']); ?>" class="cart-href">
					<div class="fa fa-shopping-cart"></div>
					<p>Корзина (<span><?= count(Yii::$app->request->cookies->getValue('cart')); ?></span>)</p>
				</a>
				<!-- <a href="<?= Url::to(['/catalog/compare']); ?>" class="fav-href">Список сравнения (1)</a> -->
			</div>
		</div>
		<div class="item-detailview">
			<div class="item-detailview-df">
				<div class="img-wrap">
					<img src="<?= $product->img_src; ?>" height="200">
				</div>
				<div class="description">
					<div class="description-row">
						<div class="description-row__title"><?= $product->title; ?></div>
						<div class="description-row__price"><?= number_format($product->price, 0, '.', ' '); ?> руб.</div>
					</div>
					<div class="text"> <?= $product->description; ?> </div>
					<div class="bottom">
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
					</div>
				</div>
			</div>
			<table class="item-detailview-table">
				<thead class="item-detailview-table-head">
					<th>
						<button class="toggler">
							<p>Характеристики</p>
							<div class="fa fa-angle-down"></div>
						</button>
					</th>
					<th>
						<!-- <button class="add-to-compare">Сравнить</button> -->
					</th>
				</thead>
			</table>
			<div class="item-detailview-table-body">
				<?php if (!empty($product->short_description)): ?>
					<?= $product->short_description ?>
				<?php endif; ?>
<!--				<table>-->
<!--					<tbody>-->
<!--						--><?php //$count_char = 0; ?>
<!--						--><?php //if (!empty($product->type)): $count_char++; ?>
<!--							<tr>-->
<!--								<td>Тип</td>-->
<!--								<td>--><?//= $product->type; ?><!--</td>-->
<!--							</tr>-->
<!--						--><?php //endif; ?>
<!---->
<!--						--><?php //if (!empty($product->count_channels)): $count_char++; ?>
<!--							<tr>-->
<!--								<td>Количество каналов</td>-->
<!--								<td>--><?//= $product->count_channels; ?><!--</td>-->
<!--							</tr>-->
<!--						--><?php //endif; ?>
<!---->
<!--						--><?php //if (!empty($product->count_stripes)): $count_char++; ?>
<!--							<tr>-->
<!--								<td>Количество полос</td>-->
<!--								<td>--><?//= $product->count_stripes; ?><!--</td>-->
<!--							</tr>-->
<!--						--><?php //endif; ?>
<!--							-->
<!--						--><?php //if (!empty($product->count_stripes)): $count_char++; ?>
<!--							<tr>-->
<!--								<td>Количество программ</td>-->
<!--								<td>--><?//= $product->count_programs; ?><!--</td>-->
<!--							</tr>-->
<!--						--><?php //endif; ?>
<!--							-->
<!--						--><?php //if (!empty($product->max_increase)): $count_char++; ?>
<!--							<tr>-->
<!--								<td>Максимальное усиление, dB</td>-->
<!--								<td>--><?//= $product->max_increase; ?><!--</td>-->
<!--							</tr>-->
<!--						--><?php //endif; ?>
<!--							-->
<!--						--><?php //if (!empty($product->freq)): $count_char++; ?>
<!--							<tr>-->
<!--								<td>Частотный диапазон, Гц</td>-->
<!--								<td>--><?//= $product->freq; ?><!--</td>-->
<!--							</tr>-->
<!--						--><?php //endif; ?>
<!--							-->
<!--						--><?php //if (!empty($product->vuzd)): $count_char++; ?>
<!--							<tr>-->
<!--								<td>ВУЗД, dB</td>-->
<!--								<td>--><?//= $product->vuzd; ?><!--</td>-->
<!--							</tr>-->
<!--						--><?php //endif; ?>
<!--							-->
<!--						--><?php //if (!empty($product->battery)): $count_char++; ?>
<!--							<tr>-->
<!--								<td>Тип батареи</td>-->
<!--								<td>--><?//= $product->battery; ?><!--</td>-->
<!--							</tr>-->
<!--						--><?php //endif; ?>
<!--						--><?php //if (!empty($product->signal_type)): $count_char++; ?>
<!--							<tr>-->
<!--								<td>Тип сигнала</td>-->
<!--								<td>--><?//= $product->signal_type; ?><!--</td>-->
<!--							</tr>-->
<!--						--><?php //endif; ?>
<!--						--><?php //if (!empty($product->function)): $count_char++; ?>
<!--							<tr>-->
<!--								<td>Функционал</td>-->
<!--								<td style="padding-left: 400px;"><span style="text-align: left;">--><?//= $product->function; ?><!--</span></td>-->
<!--							</tr>-->
<!--						--><?php //endif; ?>
<!--					</tbody>-->
<!--				</table>-->
<!--				--><?php //if ($count_char == 0): ?>
<!--					<style>-->
<!--						.item-detailview-table{-->
<!--							display: none;-->
<!--						}-->
<!--					</style>-->
<!--				--><?php //endif; ?>
			</div>
			<div class="similar-products">
				<p class="similar-products__title">Похожие предложения и аксессуары:</p>
				<div class="product-list">
					<?php foreach ($other_products as $product): ?>
						<div class="product">
							<a href="<?= Url::to(['/catalog/view', 'id' => $product->id]); ?>">
								<div class="img-wrap">
									<img src="<?= $product->img_src; ?>" alt="<?= $product->title; ?>" height="200">
								</div>
								<div class="title"><?= $product->title; ?></div>
							</a>
							<div class="pd">
								<div class="text"><?= StringHelper::truncate($product->description, 65, '...'); ?></div>
								<div class="price"><?= number_format($product->price, 0, '.', ' '); ?> руб</div>
								<a href="<?= Url::to(['/catalog/view', 'id' => $product->id]);?>" class="more">Подробнее</a>
							</div>
						</div>
					<?php endforeach; ?>
				</div>
			</div>
		</div>
	</div>
</div>