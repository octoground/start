<?php
/** @var \app\models\Article $model */
/** @var \app\models\Article[] $other_models */

use yii\helpers\Url;
use app\helpers\FileHelper;
?>
<div class="article-view">
	<div class="content">
		<a href="<?= Url::to(['/site/articles']); ?>" class="top-link">
			<span class="fa fa-angle-left"></span>
			К статьям
		</a>
		<div class="block">
			<div class="top">
				<div class="img-wrap">
                    <img src="<?= $model->big_img ?>" alt="<?= $model->title;?>">
				</div>
				<div class="right">
                    <?php if (count($other_models) > 0): ?>
						<div class="right__title">Другие статьи:</div>
						<?php foreach ($other_models as $other_model): ?>
							<div class="r">
								<div class="r__title"><?= $other_model->title;?></div>
								<div class="r__text"><?= $other_model->text_short;?></div>
								<a href="<?= Url::to(['/site/article-view', 'id' => $other_model->id]); ?>" class="r__more">Подробнее</a>
							</div>
						<?php endforeach; ?>
					<?php endif; ?>
				</div>
			</div>
			<div class="text">
				<div class="article__title"><?= $model->title;?></div>
				<div>
					<?= $model->text_long; ?>
				</div>
			</div>
			<div class="up">Наверх <span class="fa fa-angle-up"></span></div>
		</div>
	</div>
</div>