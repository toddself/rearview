'use strict';

var jsd = require('jsdom');
var html = '<html><head><title></title></head><body></body></html>';
global.window = jsd.jsdom(html).parentWindow;
module.exports = require('jquery');
