<?php
	use yii\helpers\Url;
	use app\helpers\FileHelper;
?>
<div class="staff-page">
	<div class="staff-page-banner">
		<h1>В компании ООО «Врачебный офис+» работают высококвалифицированные <br>специалисты, являющиеся настоящими профессионалами своего дела. </h1>
	</div>
	<div class="content">
		<div class="title">
			<div class="top">персонал</div>
			<div class="bot">ОБЩИЙ</div>
		</div>
		<div class="blocks">
			<?php foreach ($common_staff as $model): ?>
				<a href="<?= Url::to(['/staff/view', 'id' => $model->id]); ?>" class="block">
					<div class="img-wrap">
						<img src="<?= FileHelper::getImageThumb($model->staff_img_src, 300, 450); ?>">
					</div>
					<div class="text">
						<div class="name"><span><?= $model->surname; ?></span> <?= $model->name; ?></div>
						<div class="desc"><?= $model->post; ?></div>
<!--						<div class="alo">Подробнее</div>-->
					</div>
				</a>
			<?php endforeach; ?>
		</div>
		<div class="title">
			<div class="top">персонал</div>
			<div class="bot">Врачебный (Медицинский)</div>
		</div>
		<div class="blocks">
			<?php foreach ($medicine_staff as $model): ?>
				<a href="<?= Url::to(['/staff/view', 'id' => $model->id]); ?>" class="block">
					<div class="img-wrap">

						<?php if($model->id == 3): ?>
							<img src="<?= $model->staff_img_src ?>" alt="<?= $model->surname; ?> <?= $model->name; ?>">
							<?php else: ?>
							<img src="<?= FileHelper::getImageThumb($model->staff_img_src, 300, 450); ?>" alt="<?= $model->surname; ?> <?= $model->name; ?>">
						<?php endif;?>

					</div>
					<div class="text">
						<div class="name"><span><?= $model->surname; ?></span> <?= $model->name; ?></div>
						<div class="desc"><?= $model->post; ?></div>
<!--						<div class="alo">Подробнее</div>-->
					</div>
				</a>
			<?php endforeach; ?>
		</div>
	</div>
</div>