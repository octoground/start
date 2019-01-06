<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "products".
 *
 * @property integer $id
 * @property string $img_src
 * @property string $title
 * @property string $short_description
 * @property string $description
 * @property integer $category_id
 * @property integer $brand_id
 * @property integer $price
 * @property string $type
 * @property string $count_channels
 * @property string $count_stripes
 * @property string $count_programs
 * @property string $max_increase
 * @property string $freq
 * @property string $vuzd
 * @property string $battery
 *
 * @property Category $category
 * @property Brand $brand
 */
class Products extends \yii\db\ActiveRecord
{
    /**
    * used only for show count in cart
    * @var integer
    */
    public $count;
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'products';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            //[['img_src', 'title', 'short_description', 'description', 'category_id', 'brand_id', 'price', 'type', 'count_channels', 'count_stripes', 'count_programs', 'max_increase', 'freq', 'vuzd', 'battery'], 'required'],
            [['title', 'img_src', 'category_id', 'brand_id'], 'required'],
            [['short_description', 'description'], 'string'],
            [['category_id', 'brand_id', 'price'], 'integer'],
            [['img_src', 'title', 'type', 'count_channels', 'count_stripes', 'count_programs', 'max_increase', 'freq', 'vuzd', 'battery'], 'string', 'max' => 255],
            [['category_id'], 'exist', 'skipOnError' => true, 'targetClass' => Category::className(), 'targetAttribute' => ['category_id' => 'id']],
            [['brand_id'], 'exist', 'skipOnError' => true, 'targetClass' => Brand::className(), 'targetAttribute' => ['brand_id' => 'id']],
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
            'title' => 'Title',
            'short_description' => 'Short Description',
            'description' => 'Description',
            'category_id' => 'Category ID',
            'brand_id' => 'Brand ID',
            'price' => 'Price',
            'type' => 'Type',
            'count_channels' => 'Count Channels',
            'count_stripes' => 'Count Stripes',
            'count_programs' => 'Count Programs',
            'max_increase' => 'Max Increase',
            'freq' => 'Freq',
            'vuzd' => 'Vuzd',
            'battery' => 'Battery',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCategory()
    {
        return $this->hasOne(Category::className(), ['id' => 'category_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getBrand()
    {
        return $this->hasOne(Brand::className(), ['id' => 'brand_id']);
    }

    public function cookieIsset()
    {
        $data = Yii::$app->request->cookies->getValue('cart');
        if (isset($data)){
            foreach ($data as $datum) {
                if (isset($datum['id']) && $this->id == $datum['id']) {
                    return true;
                }
            }
        }
        return false;
    }

}
