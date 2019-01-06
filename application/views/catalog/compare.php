<?php
	use yii\helpers\Url;
?>
<div class="compare-view">
	<div class="content">
		<div class="title-row">
			<a href="<?= Url::to(['/catalog/index']); ?>" class="title">
				<span class="fa fa-angle-left"></span>
				Каталог продукции
			</a>
			<div class="right">
				<a href="" class="cart-href">
					<div class="fa fa-shopping-cart"></div>
					<p>Корзина (1 товар)</p>
				</a>
				<a class="fav-href disabled">Список сравнения (1)</a>
			</div>
		</div>
		<table class="compare-view-table">
			<thead>
				<th colspan="4">СРАВНЕНИЕ ТОВАРОВ <span>(Максимальное количество товаров в списке - 3)</span></th>
			</thead>
			<tbody>
				<tr>
					<td>Наименование</td>
					<td><strong>Widex Super 440</strong></td>
					<td><strong>Widex Super 440</strong></td>
					<td><strong>Widex Super 440</strong></td>
				</tr>
				<tr>
					<td>Фото</td>
					<td><img src="/images/product-table.jpg"></td>
					<td><img src="/images/product-table.jpg"></td>
					<td><img src="/images/product-table.jpg"></td>
				</tr>
				<tr>
					<td>Тип</td>
					<td>заушный с выносным ресивером, сверхмощный</td>
					<td>заушный с выносным ресивером, сверхмощный</td>
					<td>заушный с выносным ресивером, сверхмощный</td>
				</tr>
				<tr>
					<td>Количество каналов</td>
					<td>5</td>
					<td>5</td>
					<td>5</td>
				</tr>
				<tr>
					<td>Количество полос</td>
					<td>5</td>
					<td>5</td>
					<td>5</td>
				</tr>
				<tr>
					<td>Количество программ</td>
					<td>3</td>
					<td>3</td>
					<td>3</td>
				</tr>
				<tr>
					<td>Максимальное усиление</td>
					<td>67/78</td>
					<td>67/78</td>
					<td>67/78</td>
				</tr>
				<tr>
					<td>Частотный диапазон, Гц</td>
					<td>100-7100</td>
					<td>100-7100</td>
					<td>100-7100</td>
				</tr>
				<tr>
					<td>ВУЗД, dB</td>
					<td>123</td>
					<td>123</td>
					<td>123</td>
				</tr>
				<tr>
					<td>Тип батареи:</td>
					<td>675</td>
					<td>675</td>
					<td>675</td>
				</tr>
				<tr>
					<td>&nbsp;</td>
					<td>
						<button class="add-to-cart">
							<p>В корзину</p>
							<span class="fa fa-shopping-cart"></span>
						</button>
						<button class="remove-from-compare">Удалить из списка</button>
					</td>
					<td>
						<button class="add-to-cart">
							<p>В корзину</p>
							<span class="fa fa-shopping-cart"></span>
						</button>
						<button class="remove-from-compare">Удалить из списка</button>
					</td>
					<td>
						<button class="add-to-cart">
							<p>В корзину</p>
							<span class="fa fa-shopping-cart"></span>
						</button>
						<button class="remove-from-compare">Удалить из списка</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>