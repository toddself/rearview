/* global test */

'use strict';

var assert = require('assert');
var Rearview = require('../index');

var TestView = Rearview.extend({
  tmplFn: function(){
    return 'this is a test';
  }
});

test('should render a template', function(){
  var testView = new TestView();
  var html = testView.render();
  assert.equal(html, '<div>this is a test</div>', 'rendered server side');
});