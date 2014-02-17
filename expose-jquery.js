'use strict';

if(!process.browser){
  var $ = require('cheerio');
  var noop = function () {};
  $.prototype.off = noop;
  $.prototype.on = noop;
} else {
  $ = window.$;
}

module.exports = $;

