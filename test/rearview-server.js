'use strict';

var test = require('tap').test;
var Backbone = require('backbone');

var Rearview = require('../index');

var TestView = Rearview.extend({
  tmplFn: function(){
    return 'this is a test';
  }
});

test('returns html for the view', function(t){
  var testView = new TestView();
  var html = testView.render();
  t.equal(html, '<div>this is a test</div>', 'rendered server side');
  t.end();
});

test('triggers', function(t){
  var model = new (Backbone.Model.extend({}))();
  var MTestView = TestView.extend({model: model});
  var testView = new MTestView();
  var preRender = false;
  var postRender = false;
  var preServerRender = false;
  var postServerRender = false;
  var preClientRender = false;
  var postClientRender = false;
  var dataDirtied = false;
  var dataCleaned = false;

  testView.on('pre-render', function(){
    preRender = true;
  });

  testView.on('post-render', function(){
    postRender = true;
  });

  testView.on('pre-server-render', function(){
    preServerRender = true;
  });

  testView.on('post-server-render', function(){
    postServerRender = true;
  });

  testView.on('pre-client-render', function(){
    preClientRender = true;
  });

  testView.on('post-client-render', function(){
    postClientRender = true;
  });

  testView.on('data-dirtied', function(){
    dataDirtied = true;
  });

  testView.on('data-cleaned', function(){
    dataCleaned = true;
  });

  testView.render();
  model.set('test', 'test');
  t.ok(preRender, 'master pre-render fired');
  t.ok(postRender, 'master post-render fired');
  t.ok(preServerRender, 'pre server render fired');
  t.ok(postServerRender, 'post server render fied');
  t.ok(!preClientRender, 'pre client render did not fire');
  t.ok(!postClientRender, 'post client render did not fire');
  t.ok(dataDirtied, 'data dirtied fired');
  t.ok(dataCleaned, 'data cleaned fired');

  t.end();
});