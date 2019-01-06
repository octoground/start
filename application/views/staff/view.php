<?php
	use yii\helpers\Url;
	use app\helpers\FileHelper;
?>
<div class="staff-view">
	<div class="banner">
		<div class="content">
			<a href="<?= Url::to(['/staff/index']); ?>" class="back"><span class="fa fa-angle-left"></span> К списку работников</a>
			<div class="banner-row">
				<div class="left">
					<div class="img-wrap">
						<img src="<?= FileHelper::getImageThumb($model->staff_img_src, 300, 450); ?>">
					</div>
				</div>
				<div class="right">
					<div class="text">
						<div class="name"><strong><?= $model->surname; ?></strong>  <?= $model->name; ?></div>
						<div class="post"><?= $model->post; ?></div>
					</div>
					<div class="hrefs">
						<?php if (!empty($model->edu)): ?>
							<div class="href" data-scroll="edu">Образование</div>
						<?php endif; ?>
						<?php if (!empty($model->exp)): ?>
							<div class="href" data-scroll="exp">Профессиональный опыт</div>
						<?php endif; ?>
						<?php if (!empty($model->rew)): ?>
							<div class="href" data-scroll="rew">Награды</div>
						<?php endif; ?>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="content">
		<?php if (!empty($model->edu)): ?>
			<div class="block-text block-text--edu">
				<div class="title">Образование</div>
				<div> <?= $model->edu; ?> </div>
			</div>
		<?php endif; ?>
		<?php if (!empty($model->exp)): ?>
			<div class="block-text block-text--exp">
				<div class="title">ПРОФЕССИОНАЛЬНЫЙ ОПЫТ</div>
				<div> <?= $model->exp; ?> </div>
			</div>
		<?php endif; ?>
		<?php if (!empty($model->rew)): ?>
			<div class="block-text block-text--rew">
				<div class="title">НАГРАДЫ</div>
				<div> <?= $model->rew; ?> </div>
			</div>
		<?php endif; ?>

		<?php if($certs != "Empty"): ?>
			<section class="licenses">
				<div class="content">
					<div class="title">Сертификаты</div>
					<div class="licenses-body-slider">
					<?php foreach($certs as $key => $cert): ?>
							<a href="<?= $cert->img_src ?>" class="slide-block gallery-item">
								<img src="<?= $cert->img_src ?>" alt="" style="width: 100%">
							</a>
					<?php endforeach;?>
					</div>
				</div>
			</section>
		<?php endif;?>
	</div>
</div>