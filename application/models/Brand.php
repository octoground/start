<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "brand".
 *
 * @property integer $id
 * @property string $title
 *
 * @property Products[] $products
 */
class Brand extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'brand';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title'], 'required'],
            [['title'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Title',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getProducts()
    {
        return $this->hasMany(Products::className(), ['brand_id' => 'id']);
    }

    public function cookieIsset()
    {
        $data = Yii::$app->request->cookies->getValue('filter');
        if (isset($data['brands'])){
            $filters = $data['brands'];

            foreach ($filters as $filter) {
                if ($this->id == $filter) {
                    return true;
                }
            }
        }
        return false;
    }

}
