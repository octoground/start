<?php

namespace app\modules\edit\models;

use Yii;

/**
 * This is the model class for table "tour_type".
 *
 * @property integer $id
 * @property string $name
 * @property string $color
 *
 * @property TourShedule[] $tourShedules
 */
class TourType extends \yii\db\ActiveRecord
{

    public static function getDb()
    {
        return \Yii::$app->dbFrontEnd;
    }
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'tour_type';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'color'], 'required'],
            [['name', 'color'], 'string', 'max' => 255],
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
            'color' => 'Color',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getTourShedules()
    {
        return $this->hasMany(TourShedule::className(), ['type_id' => 'id']);
    }
}
