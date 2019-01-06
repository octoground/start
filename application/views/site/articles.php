<?php

/** @var \app\models\Article[] $models */
use yii\helpers\Url;
use app\helpers\FileHelper;
?>
<div class="content articles-page">
	<div class="blocks">
        <?php foreach ($models as $model): ?>
			<?php

			?>
			<div class="block">

				<div class="img-wrap">
<!--					<img src="--><?//= FileHelper::getSize($model->img_src) ? FileHelper::getImageThumb($model->img_src, 300, 289) : $model->img_src; ?><!--" height="--><?//= FileHelper::getSize($model->img_src) ? "" : FileHelper::getSize($model->img_src, true)?><!--">-->
					<img src="<?=$model->img_src?>" height="289">
<!--					<img src="--><?//=$model->img_src?><!--" height="289">-->
				</div>
				<div class="pd">
					<div class="title"><?= $model->title;?></div>
					<?php
						$string = strip_tags($model->text_long);
						$string = substr($string, 0, 200);
						$string = rtrim($string, "!,.-");
						$string = substr($string, 0, strrpos($string, ' '));
					?>
					<div class="text"><?= empty($string) ? " " : $string."..." ?></div>
					<a href="<?= Url::to(['/site/article-view', 'id' => $model->id]); ?>" class="more">Подробнее</a>
				</div>
			</div>
		<?php endforeach; ?>
	</div>
</div>
