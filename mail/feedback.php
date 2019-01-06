<?php

/**
 * Класс для отправки письма клиенту и в CRM GoldCarrot
 *
 * Class MailSender
 */
class MailSender
{
    /**
     * Тема письма
     */
    const MAIL_SUBJECT = "Заявка с сайта врачебный офис (обратная связь)";

    /**
     * Код формы, можно взять в CRM
     */
    const CRM_FORM_ID = null;

    /**
     * Почты на которые ьудет отправляться письма
     * @var array
     */
    private $emails = array(
        'admin@goldcarrot.ru',
        'vrach.office@yandex.ru'
    );
    /**
     * Название параметров пришедших из формы
     * @var array
     */
    private $data_keys = array(
        self::NAME_PARAM => 'name',
        self::PHONE_PARAM => 'phone',
        self::EMAIL_PARAM => 'email',
        self::TEXT_PARAM => 'text',
    );
    /**
     * Получение верстки сообщения письма
     * @return string
     */

    private function getMessage()
    {
        $message = '';
        $message .= '<div>-------------------------------------------------------------</div> </br></br> ';
        $message .= isset($this->data[self::NAME_PARAM]) ? '<div>Имя: ' . $this->data[self::NAME_PARAM] . '</div>' : '';
        $message .= isset($this->data[self::PHONE_PARAM]) ? '<div>Телефон: ' . $this->data[self::PHONE_PARAM] . '</div>' : '';
        $message .= isset($this->data[self::EMAIL_PARAM]) ? '<div>Email: ' . $this->data[self::EMAIL_PARAM] . '</div>' : '';
        $message .= isset($this->data[self::TEXT_PARAM]) ? '<div>Комментарий: ' . $this->data[self::TEXT_PARAM] . '</div>' : '';
        $message .= '<div>-------------------------------------------------------------</div> </br></br> ';
        return $message;
    }



    /** ****************** СТРОКИ НИЖЕ НЕ РЕДАКТИРОВАТЬ !!!!!! !!!!!! !!!!!!************************************************* */
    /**
     * Путь к php скрипту - обработчику форм в CRMке
     */
    const CRM_URL = 'http://crm.goldcarrot.ru/sites/main/send-form';
    /**
     * Служебное название параметра. НЕ ТРОГАТЬ!!!
     */
    const NAME_PARAM = 'name';
    /**
     * Служебное название параметра. НЕ ТРОГАТЬ!!!
     */
    const PHONE_PARAM = 'phone';
    /**
     * Служебное название параметра. НЕ ТРОГАТЬ!!!
     */
    const EMAIL_PARAM = 'email';
    /**
     * Служебное название параметра. НЕ ТРОГАТЬ!!!
     */
    const TEXT_PARAM = 'text';
    /**
     * Хранилище параметров
     * @var array
     */
    private $data;

    /**
     * MailSender constructor.
     */
    public function __construct()
    {
        $result = array(
            self::NAME_PARAM => $this->getParam($this->data_keys[self::NAME_PARAM]),
            self::PHONE_PARAM => $this->getParam($this->data_keys[self::PHONE_PARAM]),
            self::EMAIL_PARAM => $this->getParam($this->data_keys[self::EMAIL_PARAM]),
            self::TEXT_PARAM => $this->getParam($this->data_keys[self::TEXT_PARAM]),
        );
        $this->data = array_filter(array_merge($result, array_diff_key($_POST, array_flip($this->data_keys))));
    }

    /**
     * Получение параметра из массива $_POST
     * @param $name
     * @return string
     */
    private function getParam($name)
    {
        return isset($_POST[$name]) ? $_POST[$name] : '';
    }

    /**
     * Отправка формы в CRM
     */
    public function sendCRMForm()
    {
        return true;
        // if ($curl = curl_init()) {
        //     curl_setopt($curl, CURLOPT_URL, self::CRM_URL);
        //     curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        //     curl_setopt($curl, CURLOPT_POST, true);
        //     curl_setopt($curl, CURLOPT_POSTFIELDS, array_merge(array('form_id' => self::CRM_FORM_ID), $this->data));
        //     curl_exec($curl);
        //     curl_close($curl);
        // }
    }

    /**
     * Отправка писем на почты
     *
     * @return bool
     */
    public function send()
    {
        $sent = true;
        if (empty($this->data[self::NAME_PARAM])) {
            return false;
        }
        foreach ($this->emails as $email) {
            if (!mail($email, self::MAIL_SUBJECT, $this->getMessage(), implode("\r\n", $this->getHeaders()))) {
                $sent = false;
            }
        }
        return $sent;
    }

    /**
     * Получение заголовков письма
     * @return array
     */
    private function getHeaders()
    {
        $headers = array();
        $headers[] = "MIME-Version: 1.0";
        $headers[] = "Content-type: text/html; charset=utf-8";
        $headers[] = "From: admin <admin@goldcarrot.ru>";
        $headers[] = "Subject: " . self::MAIL_SUBJECT;
        $headers[] = 'X-Mailer: PHP/' . phpversion();
        return $headers;
    }
}


$mailSender = new MailSender();

//Отправляем форму в CRMку
$mailSender->sendCRMForm();


header("Content-type: text/html; charset=utf-8");
//если письмо отправилось то выводим что все ок
if ($mailSender->send()) {
    echo json_encode(array(
        'status' => 'ok',
    ));
} else {
    //иначе 500 ошибку показываем
    header('HTTP/1.1 500 Internal Server Error');
}
