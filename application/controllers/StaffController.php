<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;
use app\models\Staff;
use app\models\Cert;

class StaffController extends Controller
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
        $medicine_staff = Staff::find()->andWhere(['staff_category_id' => 1])->all();
        $common_staff = Staff::find()->andWhere(['staff_category_id' => 2])->all();

        return $this->render('index', [
            'medicine_staff' => $medicine_staff,
            'common_staff' => $common_staff,
        ]);
    }

    public function actionView($id)
    {
        $model = Staff::findOne($id);
        $cert = Cert::find()->where(['staff_id' => $id])->all();
        $cert = empty($cert) ? "Empty" : $cert;
        return $this->render('view', [
            'model' => $model,
            'certs' => $cert
        ]);
    }

}
