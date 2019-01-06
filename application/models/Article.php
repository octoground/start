<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "article".
 *
 * @property integer $id
 * @property string $title
 * @property string $img_src
 * @property string $text_short
 * @property string $text_long
 */
class Article extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'article';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title', 'img_src', 'big_img', 'text_short', 'text_long'], 'required'],
            [['text_short', 'text_long'], 'string'],
            [['title', 'img_src', 'big_img'], 'string', 'max' => 255],
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
            'img_src' => 'Img Src',
            'text_short' => 'Text Short',
            'text_long' => 'Text Long',
        ];
    }
}
