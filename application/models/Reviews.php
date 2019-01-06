<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "reviews".
 *
 * @property integer $id
 * @property string $name
 * @property string $surname
 * @property string $middle_name
 * @property string $text
 * @property integer $rating
 * @property integer $service_category_id
 *
 * @property ServiceCategory $serviceCategory
 */
class Reviews extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'reviews';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'surname', 'middle_name', 'text', 'rating', 'service_category_id'], 'required'],
            [['text'], 'string'],
            [['rating', 'service_category_id'], 'integer'],
            [['name', 'surname', 'middle_name'], 'string', 'max' => 255],
            [['service_category_id'], 'exist', 'skipOnError' => true, 'targetClass' => ServiceCategory::className(), 'targetAttribute' => ['service_category_id' => 'id']],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'surname' => 'Surname',
            'middle_name' => 'Middle Name',
            'text' => 'Text',
            'rating' => 'Rating',
            'service_category_id' => 'Service Category ID',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getServiceCategory()
    {
        return $this->hasOne(ServiceCategory::className(), ['id' => 'service_category_id']);
    }

}
