<div class="reviews-page">
	<div class="content">
		<div class="reviews-page-top">
			<div class="left">
				<p>Выберите категорию отзыва для просмотра:</p>
				<select>
					<option value="0">Все</option>
					<option value="1">Медицинские услуги</option>
					<option value="2">Социальные услуги</option>
					<option value="3">Слухопротезирование</option>
					<option value="4">Логопедические услуги</option>
				</select>
			</div>
			<button class="add-review popup-with-zoom-anim" href="#add-review">Оставить отзыв</button>
		</div>
		<div class="reviews-wrap">
			<div class="list">
				<?php foreach ($models as $model): ?>
					<div class="block">
						<div class="df">
							<div>
								<div class="name">
									<span><?= $model->name; ?></span>
									<?= $model->surname.' '.$model->middle_name; ?>
								</div>
								<div class="type"><?=($model->serviceCategory->title); ?> </div>
							</div>
							<div class="rating">
								<?php for ($i = 1; $i <= 5; $i++): ?>
									<div class="fa fa-star<?= ($i > $model->rating) ? '-o' : ''; ?>"></div>
								<?php endfor; ?>
							</div>
						</div>
						<hr>
						<div class="text">
							<p><?= $model->text; ?></p>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
<!-- 			<ul class="pagination">
				<li class="prev disabled">
					<span>«</span>
				</li>
				<li class="active">
					<a href="/realty/index?page=1&amp;per-page=12" data-page="0">1</a>
				</li>
				<li>
					<a href="/realty/index?page=2&amp;per-page=12" data-page="1">2</a>
				</li>
				<li>
					<a href="/realty/index?page=3&amp;per-page=12" data-page="2">3</a>
				</li>
				<li>
					<a href="/realty/index?page=4&amp;per-page=12" data-page="3">4</a>
				</li>
				<li>
					<a href="/realty/index?page=10&amp;per-page=12" data-page="9">10</a>
				</li>
				<li class="next">
					<a href="/realty/index?page=2&amp;per-page=12" data-page="1">»</a>
				</li>
			</ul> -->
		</div>
	</div>
</div>
<div class="content std-modal zoom-anim-dialog mfp-hide" id="add-review">
	<div class="std-modal__title">Добавление отзыва</div>
	<form class="add-review-form">
		<div class="add-review-select">
			<p class="add-review-form__p">Выберите услугу, которой вы воспользовались <br> в нашем центре*</p>
			<select name="category">
				<?php foreach($servicies as $key => $service): ?>
					<option value=" <?= $service->id?> "> <?=$service->title ?> </option>
				<?php endforeach;?>

			</select>
		</div>
		<p class="add-review-form__p">Ваше ФИО</p>
		<div class="inputs">
			<input type="text" placeholder="Имя" name="name">
			<input type="text" placeholder="Фамилия" name="surname">
			<input type="text" placeholder="Отчество" name="surname2">
		</div>
		<p class="add-review-form__p">Место для ваших слов. Помогите другим людям составить мнение о нас!</p>
		<textarea name="text" placeholder="Сообщение"></textarea>
		<div class="add-review-form-bottom">
			<div class="rating">
				<p class="add-review-form__p">Общая оценка*:</p>
				<div class="stars">
                    <div class="fa fa-star fa-star-1" data-id="1"></div>
                    <div class="fa fa-star fa-star-2" data-id="2"></div>
                    <div class="fa fa-star fa-star-3" data-id="3"></div>
                    <div class="fa fa-star fa-star-4" data-id="4"></div>
                    <div class="fa fa-star fa-star-5" data-id="5"></div>
                </div>
                <input type="hidden" class="add-review-form__rating" id="reviews-rating" name="rating" value="0">
			</div>
			<button class="submit" id="reviews">Отправить</button>
		</div>
		<div class="error-summary"></div>
	</form>
</div>