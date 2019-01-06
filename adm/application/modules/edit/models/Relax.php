<?php

namespace app\modules\edit\models;

use Yii;

/**
 * This is the model class for table "relax".
 *
 * @property integer $id
 * @property string $name
 * @property string $image_banner
 * @property string $image_text
 * @property string $text_top
 * @property string $text_top_icon
 * @property string $text
 *
 */
class Relax extends \yii\db\ActiveRecord
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
        return 'relax';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'image_banner', 'image_text', 'text_top', 'text_top_icon', 'text'], 'required'],
            [['text_top', 'text'], 'string'],
            [['name', 'image_banner', 'image_text', 'text_top_icon'], 'string', 'max' => 255],
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
            'image_banner' => 'Image Banner',
            'image_text' => 'Image Text',
            'text_top' => 'Text Top',
            'text_top_icon' => 'Text Top Icon',
            'text' => 'Text',
        ];
    }
}
