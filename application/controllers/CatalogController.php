<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;
use yii\helpers\ArrayHelper;
use yii\web\Response;
use app\models\Brand;
use app\models\Category;
use app\models\Products;
use yii\data\Pagination;

class CatalogController extends Controller
{

    public $enableCsrfValidation = false;

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
        $brands = Brand::find()->all();
        $categories = Category::find()->andWhere(['parent_id' => null])->all();
        $initial_products = Products::find()->limit(15)->all();
        $all_products = Products::find()->all();
        $count_page = intval(count($all_products)/17)+1;

        $max_price = Products::find()->max('price');
        $min_price = Products::find()->min('price');
        if($count_page > 15){
            $count_page = 15;
        }
        return $this->render('index', [
            'brands' => $brands,
            'categories' => $categories,
            'initial_products' => $initial_products,
            'max_price' => $max_price,
            'min_price' => $min_price,
            'count_page' => $count_page,
        ]);
    }

    public function actionRenderProducts()
    {
        $data = yii::$app->request->post('data');


        if (isset($data['categories'])){
            $categories = $data['categories'];
        } else {
            $categories = [];
            $data['categories'] = [];
        }
        if (isset($data['brands'])){
            $brands = $data['brands'];
        } else {
            $brands = [];
            $data['brands'] = [];
        }
        $count_on_page = $data['countOnPage'];
        $current_page = $data['page'];
        $min_price = $data['price']['min'];
        $max_price = $data['price']['max'];

        if ($current_page == 1) {
            $offset = 0;
        } else {
            $offset = ($current_page-1) * $count_on_page;
        }

        $query = Products::find()
            ->andFilterWhere(['category_id' => $categories])
            ->andFilterWhere(['brand_id' => $brands])
            ->andWhere(['between', 'price', $min_price, $max_price]);

        $countQuery = clone $query;

        $products_count = $countQuery
            ->count();

        $products = $query
            ->limit($count_on_page)
            ->offset($offset)
            ->all();

//        $count_page = intval($products_count/17)+1;
        $count_page = intval($products_count/$count_on_page)+1;
        if($count_page > 15){
            $count_page = 15;
        }

        $cookies = Yii::$app->response->cookies;

        $cookies->add(new \yii\web\Cookie([
            'name' => 'filter',
            'value' => $data,
        ]));

        return $this->renderAjax('_products-list', [
            'products' => $products,
            'count_page' => $count_page,
            'current_page' => $current_page,
        ]);
    }

    public function actionView($id)
    {
        $product = Products::findOne($id);
        $other_products = Products::find()
            ->where(['category_id' => $product->category_id])
            ->orWhere(['category_id' => 9])
            ->limit(3)
            ->all();
        return $this->render('view', [
            'product' => $product,
            'other_products' => $other_products,
        ]);
    }

    public function actionCompare()
    {
        return $this->render('compare');
    }

    public function actionCartCookie()
    {
        $data = Yii::$app->request->post('data', []);
        $cookies = Yii::$app->response->cookies;
        $cookies->add(new \yii\web\Cookie([
            'name' => 'cart',
            'value' => $data,
        ]));
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
        \Yii::$app->response->format = Response::FORMAT_JSON;
        return [
            'html' => $this->renderAjax('_cart', ['products' => $products,]),
            'total_price' => number_format($total_price, 0, '.', ' '),
        ];
    }

}
