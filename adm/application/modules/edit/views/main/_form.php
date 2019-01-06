<?php
/** @var \app\models\Field[] $fields */
/** @var \app\modules\edit\models\DynamicModel $model */
/** @var \app\models\ImageCropperSettings $settingsCropper */
?>
<div class="row">
    <div class="col-lg-12">
        <?php $form = \yii\widgets\ActiveForm::begin(); ?>
        <?php foreach ($fields as $field): ?>
            <div class="form-group">
                <?php switch ($field->type->name) {
                    default:
                    case 'textInput':
//                                echo Html::label($field->alias, 'form-' . $field->name, ['class' => '']);
                        echo $form->field($model, $field->name)->textInput(['class' => 'form-control'])->label($field->alias);
                        break;
                    case 'textArea':
                        echo $form->field($model, $field->name)->textarea(['class' => 'form-control tiny-editor'])->label($field->alias);
                        break;
                    case 'textAreaNoEditor':
                        echo $form->field($model, $field->name)->textarea(['class' => 'form-control', 'rows' => 10])->label($field->alias);
                        break;
                    case 'uploadImage':
                        echo $this->render('templates/upload_image', [
                            'field' => $field,
                            'model' => $model,
                            'form' => $form,
                        ]);
                        break;
                    case 'imageCropper':
                        echo $this->render('templates/imageCropper', [
                            'field' => $field,
                            'model' => $model,
                            'form' => $form,
                            'settingsCropper' => $settingsCropper[$field->name],
                        ]);
                        break;
                    case 'datetime':
                        echo $form->field($model, $field->name)->textInput(['class' => 'form-control datetimepicker'])->label($field->alias);
                        break;
                    case 'date':
                        echo $form->field($model, $field->name)->textInput(['class' => 'form-control  datepicker'])->label($field->alias);
                        break;
                    case 'time':
                        echo $form->field($model, $field->name)->textInput(['class' => 'form-control  timepicker'])->label($field->alias);
                        break;
                    case 'boolean':
                        echo $form->field($model, $field->name)->dropDownList([0 => 'Нет', 1 => 'Да'], ['class' => 'form-control'])->label($field->alias);
                        break;
                    case 'dropDownList':
                        echo $form->field($model, $field->name)->dropDownList($model->getRelationArray($field->name), ['class' => 'form-control'])->label($field->alias);
                        break;
                } ?>
            </div>
        <?php endforeach; ?>
        <button type="submit" class="btn btn-default">Сохранить</button>
        <?php $form->end(); ?>
    </div>
</div>