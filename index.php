<?php
require_once 'vendor/autoload.php';

$app = new Lime\App();

$app->bind("/", function() {
    return $this->render('dist/index.html');
});

$app->run();
