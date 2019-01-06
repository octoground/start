<?php

namespace app\controllers;

use app\models\ServiceCategory;
use Yii;
use yii\web\Controller;
use app\models\Article;
use app\models\Reviews;

class SiteController extends Controller
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
        return $this->render('index');
    }

    public function actionAbout()
    {
        return $this->render('about');
    }

    public function actionContacts()
    {
        return $this->render('contacts');
    }

    public function actionReviews()
    {
        $models = Reviews::find()->where(['status' => 1])->all();
        $servicies = ServiceCategory::find()->all();
        return $this->render('reviews', compact('models', 'servicies'));
    }
    public function actionAddReviews()
    {
        $model = new Reviews();
        $model->name = yii::$app->request->post('name');
        $model->surname = yii::$app->request->post('surname');
        $model->middle_name = yii::$app->request->post('surname2');
        $model->text = yii::$app->request->post('message');
        $model->rating = yii::$app->request->post('star');
        $model->service_category_id = yii::$app->request->post('category');
        $model->save();
        if($model->save()){
            return json_encode([
                'status' => 'success'
            ]);
        }else{

        }
    }

    public function actionReviewRender()
    {
        $service_category_id = yii::$app->request->post('data');
        if ($service_category_id == 0){
            $models = Reviews::find()->where(['status' => 1])->all();
        } else {
            $models = Reviews::find()
                ->andWhere(['service_category_id' => $service_category_id])
                ->andWhere(['status' => 1])
                ->all();
        }
        return $this->renderAjax('_reviews_render', [
            'models' => $models,
        ]);
    }

    public function actionArticles()
    {
        $models = Article::find()->all();
        return $this->render('articles', [
            'models' => $models,
        ]);
    }

    public function actionArticleView($id)
    {
        $model = Article::findOne($id);
        $other_models = Article::find()->andWhere(['<>', 'id', $id])->limit(2)->all();
        return $this->render('article-view', [
            'model' => $model,
            'other_models' => $other_models,
        ]);
    }

    public function actionService()
    {
        return $this->render('service');
    }

    public function actionEquipment()
    {
        return $this->render('equipment');
    }

}
