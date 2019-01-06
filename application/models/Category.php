<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "category".
 *
 * @property integer $id
 * @property string $title
 * @property integer $parent_id
 *
 * @property Products[] $products
 */
class Category extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'category';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title'], 'required'],
            [['parent_id'], 'integer'],
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
            'parent_id' => 'Parent ID',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getProducts()
    {
        return $this->hasMany(Products::className(), ['category_id' => 'id']);
    }

    public function hasParent()
    {
        if ($this->parent_id == NULL) {
            return false;
        }
        return true;
    }

    public function getChild()
    {
        return self::find()->andWhere(['parent_id' => $this->id])->all();
    }
    
    public function cookieIsset()
    {
        $data = Yii::$app->request->cookies->getValue('filter');
        if (isset($data['categories'])){
            $filters = $data['categories'];

            foreach ($filters as $filter) {
                if ($this->id == $filter) {
                    return true;
                }
            }
        }
        return false;
    }

}
