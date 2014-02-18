'use strict';

var $;

if(!process.browser){
  global.window = require('jsdom').jsdom('<html><head><title></title></head><body></body></html>').parentWindow;
  $ = require('jquery');
} else {
  $ = window.$;
}

module.exports = $;