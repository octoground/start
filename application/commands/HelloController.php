<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\commands;
use yii\console\Controller;

/**
 * This command echoes the first argument that you have entered.
 *
 * This command is provided as an example for you to learn how to create console commands.
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class HelloController extends Controller
{
    /**
     * This command echoes what you have entered as the message.
     * @param string $message the message to be echoed.
     */
    public function actionIndex($message = 'hello world')
    {
        echo $message . "\n";
    }
    public function actionTest(){
        $filename = '/images/test.jpg';
        //die(print_r($_POST));
        $new_filename = '/images/test1.jpg';

        // получаем размеры изображения
        var_dump(getimagesize($filename));
        list($current_width, $current_height) = getimagesize(__Dir__.$filename);

        // координаты x и y оригинального изображение, где мы
        // будем вырезать фрагмент, по данным, берущимся из формы
        $x1    = $_POST['x1'];
        $y1    = $_POST['y1'];
        $x2    = $_POST['x2'];
        $y2    = $_POST['y2'];
        //$w     = $_POST['w'];
        //$h     = $_POST['h'];

        die(print_r($_POST));

        // финальные размеры изображения
        $crop_width = 100;
        $crop_height = 100;

        // создаём маленькое изображение
        $new = imagecreatetruecolor($crop_width, $crop_height);
        // создаём оригинальное изображение
        $current_image = imagecreatefromjpeg($filename);
        //вырезаем
        imagecopyresampled($new, $current_image, 0, 0, $x1, $y1, $crop_width, $crop_height);//$w, $h
        // создаём новое изображение
        imagejpeg($new, $new_filename, 95);
    }
}
