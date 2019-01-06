<?php if (count($models)>0): ?>
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
<?php else: ?>
	<p style="padding: 15px;">Ничего не найдено</p>		
<?php endif; ?>