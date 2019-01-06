<?php

namespace app\modules\edit\models;

use Yii;

/**
 * This is the model class for table "relax_schedule".
 *
 * @property integer $id
 * @property integer $country_id
 * @property integer $month
 * @property integer $type_id
 *
 * @property Country $country
 * @property Relax $typeRelax
 */
class RelaxSchedule extends \yii\db\ActiveRecord
{
    public static function getDb()
    {
        return \Yii::$app->dbFrontEnd;
    }
    public $countries_array = null;

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'relax_schedule';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['country_id', 'month', 'type_id'], 'required'],
            [['country_id', 'month', 'type_id'], 'integer'],
            [['country_id'], 'exist', 'skipOnError' => true, 'targetClass' => Country::className(), 'targetAttribute' => ['country_id' => 'id']],
            [['type_id'], 'exist', 'skipOnError' => true, 'targetClass' => TourType::className(), 'targetAttribute' => ['type_id' => 'id']],
            ['countries', 'safe']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'country_id' => 'Country ID',
            'month' => 'Month',
            'type_id' => 'Type ID',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCountry()
    {
        return $this->hasOne(Country::className(), ['id' => 'country_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getTypeRelax()
    {
        return $this->hasOne(Relax::className(), ['id' => 'type_id']);
    }

    public function getCountries()
    {
        if ($this->countries_array === null) {
            $this->countries_array = self::find()->where(['month' => $this->month, 'type_id' => $this->type_id])->select('country_id')->asArray()->column();
        }
        return $this->countries_array;
    }

    public function setCountries($value)
    {
        $this->countries_array = $value;
    }



    public function saveCountries()
    {
        self::deleteAll(['month' => $this->month, 'type_id' => $this->type_id]);
        foreach ($this->countries_array as $country) {
            $model = new self(['month' => $this->month, 'type_id' => $this->type_id, 'country_id' => $country]);
            $model->insert();
        }
        return true;
    }

}
