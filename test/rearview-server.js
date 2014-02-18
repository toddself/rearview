'use strict';

var test = require('tap').test;
var Rearview = require('../index');

function makeTemplate(str){
  return function(ctx){
    var tmpl;
    Object.keys(ctx).forEach(function(key){
      var re = new RegExp('{{{'+key+'}}}');
      tmpl = str.replace(re, ctx[key]);
    });
    return tmpl;
  };
}

test('should render a simple template', function(t){

  var TestView = Rearview.extend({
    tmplFn: function(){
      return 'this is a test';
    }
  });

  var testView = new TestView();
  var html = testView.render();
  t.equal(html, '<div>this is a test</div>', 'rendered server side');
  t.end();
});
