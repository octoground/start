<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "cert".
 *
 * @property integer $id
 * @property string $img_src
 * @property integer $staff_id
 *
 * @property Staff $staff
 */
class Cert extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'cert';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['staff_img_src', 'staff_id'], 'required'],
            [['staff_id'], 'integer'],
            [['staff_img_src'], 'string', 'max' => 255],
            [['staff_id'], 'exist', 'skipOnError' => true, 'targetClass' => Staff::className(), 'targetAttribute' => ['staff_id' => 'id']],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'img_src' => 'Img Src',
            'staff_id' => 'Staff ID',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getStaff()
    {
        return $this->hasOne(Staff::className(), ['id' => 'staff_id']);
    }
}
