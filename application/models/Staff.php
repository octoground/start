<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "staff".
 *
 * @property integer $id
 * @property string $surname
 * @property string $name
 * @property string $post
 * @property string $edu
 * @property string $exp
 * @property string $rew
 * @property integer $staff_category_id
 * @property string $img_src
 *
 * @property StaffCategory $staffCategory
 */
class Staff extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'staff';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['surname', 'name', 'post', 'edu', 'exp', 'rew', 'staff_category_id', 'img_src'], 'required'],
            [['edu', 'exp', 'rew'], 'string'],
            [['staff_category_id'], 'integer'],
            [['surname', 'name', 'post', 'staff_img_src'], 'string', 'max' => 255],
            [['staff_category_id'], 'exist', 'skipOnError' => true, 'targetClass' => StaffCategory::className(), 'targetAttribute' => ['staff_category_id' => 'id']],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'surname' => 'Surname',
            'name' => 'Name',
            'post' => 'Post',
            'edu' => 'Edu',
            'exp' => 'Exp',
            'rew' => 'Rew',
            'staff_category_id' => 'Staff Category ID',
            'img_src' => 'Img Src',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getStaffCategory()
    {
        return $this->hasOne(StaffCategory::className(), ['id' => 'staff_category_id']);
    }
}
