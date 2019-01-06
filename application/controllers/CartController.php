<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;
use yii\helpers\ArrayHelper;
use app\models\Products;
class CartController extends Controller
{

    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }

    public function actionIndex()
    {
        $cookies = Yii::$app->request->cookies;
        $products_cookie = $cookies->getValue('cart', []);
        $products_cookie_map = ArrayHelper::map($products_cookie, 'id', 'count');
        $products = Products::find()->where(['id' => $products_cookie])->all();
        foreach ($products as $key => $value) {
            $value->count = $products_cookie_map[$value->id];
        }
        $total_price = 0;
        foreach ($products as $key => $value) {
            $total_price += $value->price * $value->count;
        }
        return $this->render('index', [
            'products' => $products,
            'total_price' => $total_price,
        ]);
    }

}
