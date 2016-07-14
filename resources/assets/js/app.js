'use strict';

// Избегаем конфликтов jquery и angular
$.noConflict();

// Тестовое приложение на angular
require('./controllers/test-app-controller');

var sayHello = require('./common/say-hello');

jQuery(function () {
  // Поддрежка svg спрайтов в отсталых браузерах :)
  svg4everybody();

  sayHello();
});