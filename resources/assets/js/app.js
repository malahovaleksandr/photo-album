'use strict';

var sayHello = require('./common/say-hello');

$(function () {
  // Поддрежка svg спрайтов в осталых браузерах :)
  svg4everybody();

  sayHello();
});