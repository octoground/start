<?php
use yii\helpers\Html;
use app\assets\AppAsset;
// AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <!-- Google Tag Manager --> 
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': 
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], 
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); 
})(window,document,'script','dataLayer','GTM-KSSGLJG');</script> 
    <!-- End Google Tag Manager -->
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=1250, maximum-scale=1" /> 
    <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon">
    <?= Html::csrfMetaTags() ?>
    <title>
        Врачебный офис +
        <?//= Html::encode($this->title) ?>
    </title>
    <meta property = "description" content = "" >
    <meta property = "og:title" content = "Врачебный офис +" >
    <meta property = "og:type" content = "article" >
    <meta property = "og:image" content = "">
    <meta property = "og:description" content = "">
    <?php $this->head() ?>
</head>
<?php 
    if (Yii::$app->request->cookies->getValue('cart')){
        $cookie_products = json_encode(Yii::$app->request->cookies->getValue('cart'));
    } else {
        $cookie_products = 'empty';
    }
?>
<body data-cart='<?= ($cookie_products) ? $cookie_products : 'empty'; ?>'>
    <!-- Google Tag Manager (noscript) --> 
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NJMS9WT" 
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> 
    <!-- End Google Tag Manager (noscript) -->
<style><?= file_get_contents(yii::getAlias('@webroot').'/static/css/bundle.css'); ?></style>
<?php $this->beginBody() ?>
    <div id="container">
        <?= $this->render('menu'); ?>
        <?= $content ?>
        <?= (Yii::$app->controller->action->id !== 'contacts') ? $this->render('footer') : ''; ?>
    </div>
<?php $this->endBody() ?>
<script><?= file_get_contents(yii::getAlias('@webroot').'/static/js/bundle.js'); ?></script>
</body>
</html>
<?php $this->endPage() ?>
