'use strict';

global.window = require('jsdom').jsdom('<html><head><title></title></head><body></body></html>').parentWindow;
module.exports = require('jquery');