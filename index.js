'use strict';

/**
 * @namespace RearView
 */

var Backbone = require('backbone');
var $ = require('./expose-jquery');
var deepestMerge = require('deepest-merge');
Backbone.$ = $;

/**
 * Options for the baseview
 * @type {object}
 * @namespace BaseView
 */
var baseViewOpts = exports.baseViewOpts = {
  tmplFn: null,
  childrenViews: [],
  _childHTMLCache: [],
  parentView: null,
  _dirtiedData: false,
  extendContext: {},

  /**
   * Attach a bunch of listeners...
   * @method initialize
   * @memberOf BaseView
   * @return {object} undefined
   */
   initialize: function () {
    if (this.model) {
      this.listenTo(this.model, 'change', this.dirtyData);
    } else if (this.collection) {
      this.listenTo(this.collection, 'add', this.dirtyData);
      this.listenTo(this.collection, 'reset', this.dirtyData);
      this.listenTo(this.collection, 'remove', this.dirtyData);
    }
  },

  /**
   * Sets the dirty flag on the data which explains to the render method
   * to re-render the template even if it's already rendered. Also _ges
   * the `data-dirtied` event on the object
   * @method dirtyData
   * @fires data-dirtied
   * @memberOf BaseView
   * @return {object} undefined
   */
  dirtyData: function () {
    this._dirtiedData = true;
    /**
     * @event data-dirtied
     * @type {boolean}
     */
    this.trigger('data-dirtied');
  },

  /**
   * Resets the dirty flag to false so the render method won't re-render
   * itself if there is already html in the `$el` object. Also triggers
   * the `data-cleaned` flag
   * @method cleanData
   * @memberOf BaseView
   * @fires data-cleaned
   * @return {object} undefined
   */
  cleanData: function () {
    this._dirtiedData = false;
    /**
     * @event data-cleaned
     * @type {boolean}
     */
    this.trigger('data-cleaned');
  },

  /**
   * Sets up the template for a given template
   * @method setTemplate
   * @memberOf BaseView
   * @param  {function} template_data A template function which accepts a context and returns a string which represents the compiled template merged with the context
   * @return {object}           undefined
   */
  setTemplate: function (template_data) {
    if (typeof template_data !== 'function') {
      throw new Error('You must provide compiled template');
    }
    this.tmplFn = template_data;
  },

  /**
   * Returns the locally pre-compiled template function, or if the template is
   * a string, compiles it, sets the local instance and returns it back.
   * @method getTemplateFn
   * @memberOf BaseView
   * @return {function} Compiled handlebars template instance
   */
  getTemplateFn: function () {
    if (typeof this.tmplFn !== 'function') {
      throw new Error('You must provide a compiled handlerbars template.');
    }
    return this.tmplFn;
  },

  /**
   * Creates child view(s) and generates the HTML. If this view has not yet
   * rendered, it caches them along with the selector to which they should
   * be attached. If the view is rendered, it attaches them after render
   * @method attachChild
   * @memberOf BaseView
   * @param  {object} View        The view to instantiate
   * @param  {object} Model       A model of data for the view
   * @param  {string} [$selector] The selector to which the view should be attached
   * @param  {object} [options]   A key-pair list of options to additionally pass-in
   * @return {object}          undefined
   */
  attachChildren: function (View, dataObj, $selector, options) {
    var that = this;
    var acc = [];

    // This looks ugly, but since Backbone.Collection inherits `forEach` from
    // underscore, it's not available directly on the instance so `hasOwnProperty`
    // fails here, so we need to detect if it's a backbone collection separately
    // and only if it's not AND there's no `forEach`, wrap it in an array
    // so we can `forEach`, but this will still cause errors on `undefined` and
    // `null`, so we have to handle those especially.

    if(typeof dataObj === null || typeof dataObj === 'undefined'){
      dataObj = [];
    }

    if(typeof dataObj.forEach !== 'function'){
      dataObj = [dataObj];
    }

    dataObj.forEach(function(model){
      acc.push(that._generateChildView(View, model, options));
    });

    if(this._elementRendered()){
      this._getSelector($selector).html(acc.join(''));
    } else {
      this._addChildToCache($selector,  acc.join(''));
    }
  },

  /**
   * Sets a reference to the parent view on the child so the child can listen
   * to the parent appropriately
   * @memberOf BaseView
   * @method setParentView
   * @param {object} parent The parent view
   */
  setParentView: function (parent) {
    this.parentView = parent;
    this.listenTo(parent, 'child:close', this.close);
  },

  /**
   * Creates a new child object and attaches it to the cache
   * so that the children views can be easily attached during the parent's
   * render phase
   * @private
   * @method  _addChildToCache
   * @memberOf BaseView
   * @param  {string} attachPoint The selector that $.html() should be run on
   * @param  {string} view        The HTML representing the child
   * @return {object}             undefined
   */
  _addChildToCache: function (attachPoint, view) {
    this._childHTMLCache.push({selector: attachPoint, html: view});
  },

  /**
   * Attaches the children views to the rendered parent view and clears
   * the cache
   * @private
   * @method  _attachCachedChildren
   * @memberOf BaseView
   * @return {object} undefined
   */
  _attachCachedChildren: function(){
    var that = this;
    this._childHTMLCache.forEach(function(child){
      that._getSelector(child.selector).html(child.html);
    });
    this._clearChildCache();
  },

  /**
   * Clear out the child cache
   * @private
   * @method _clearChildCache
   * @memberOf BaseView
   * @return {object} undefined
   */
  _clearChildCache: function(){
    this._childHTMLCache = [];
  },

  /**
   * Returns the selector required
   * @method _getSelector
   * @memberOf BaseView
   * @param  {string} $selector
   * @return {object}
   */
  _getSelector: function (selector) {
    // if we are trying to attach children to an inner selector
    // the template needs to placed into the this.$el instance first
    // or there will be nothing to attach to
    if(!this._elementRendered()){
      this.render();
    }

    var $selector = this.$el;
    if (typeof selector === 'string') {
      $selector = this.$(selector);
    } else if (selector instanceof $) {
      $selector = selector;
    }
    return $selector;
  },

  /**
   * Instantiates a child view and returns the HTML
   * @method attachChild
   * @memberOf BaseView
   * @param  {object} View        The view to instantiate
   * @param  {object} Model       A model or a collection of data for the view
   * @param  {string} [$selector] The selector to which the view should be attached
   * @param  {object} [options]   A key-pair list of options to additionally pass-in
   * @return {string}             The HTML representation of the view
   */
  _generateChildView: function (Viewobject, Model, options) {
    var viewData = {};

    if (Model instanceof Backbone.Collection) {
      viewData.collection = Model;
    } else {
      viewData.model = Model;
    }

    if (typeof options === 'undefined') {
      options = {};
    }

    var view = new Viewobject(viewData, options);
    this.listenTo(view, 'view-closing', this._dereferenceChild);
    view.setParentView(this);
    return view.render();
  },

  /**
   * Automatically called when closing a child view. Stops listening to the
   * child view and removes it from the list of children views. Calls
   * user-defined dereferenceChild
   * @private
   * @memberOf BaseView
   * @method  _dereferenceChild
   * @param  {object} child Child view object (passed as `this` from child)
   * @return {object}       undefined
   */
  _dereferenceChild: function (child) {
    var idx = this.childrenViews.indexOf(child);
    this.stopListening(child);
    this.childrenViews.splice(idx, 1);
    this.dereferenceChild(child);
  },

  /**
   * Stub method for overwriting. Allows the parent view to do something when
   * a child view has closed itself.
   * @method dereferenceChild
   * @memberOf BaseView
   * @param  {string} child_id The #id of the view
   * @return {Undefed}         undefined
   */
  dereferenceChild: function () {},

  /**
   * Returns the context for the template function that allows the view to be
   * rendered. Allows you to extend the model data with additional fields if
   * neeeded
   * @method serializeData
   * @memberOf BaseView
   * @param  {object}  data  Data to either override or extend
   * @param  {boolean} merge Whether or not to extend this.model with passed in data
   * @return {object}        object to be passed into the template function
   */
  serializeData: function (data, merge) {
    if (typeof data === 'undefined') {
      if (this.model) {
        data = this.model.toJSON();
      } else {
        data = {};
      }
    } else{
      if (typeof merge !== 'undefined' && this.model){
        data = deepestMerge(this.model.toJSON(), data);
      }
    }
    return data;
  },

  /**
   * Should be called when the view is unattached from the DOM. Notifies its
   * parent it is closing and tells children views to close themselves (if present)
   *
   * Calls `Backbone.View.remove` to handle event unbinding.
   * @memberOf BaseView
   * @method close
   * @fires child:close
   * @fires view-closing
   * @return {object} undefined
   */
  close: function () {
    if (this.childrenViews.length > 0) {
      /**
       * Tell all child views to close and clean themselves up
       *
       * @event child:close
       * @type {boolean}
       */
      this.trigger('child:close');
    }

    if (this.parentView !== null) {
      /**
       * @event view-closing
       * @type {boolean}
       */
      this.trigger('view-closing', this);
    }

    this.remove();
  },

  /**
   * pre/post render methods for particular contexts
   * @private
   * @memberOf BaseView
   * @method _preClientRender
   * @fires pre-client-render
   * @return {object} undefined
   */
  _preClientRender: function () {
    if (typeof this.preClientRender === 'function') {
      this.preClientRender();
    }
    /**
     * @event pre-client-render
     * @type {boolean}
     */
    this.trigger('pre-client-ender');
  },

  /**
   * pre/post render methods for particular contexts
   * @private
   * @memberOf BaseView
   * @fires post-client-render
   * @method _postClientRender
   * @return {object} undefined
   */
  _postClientRender: function () {
    if (typeof this.postClientRender === 'function') {
      this.postClientRender();
    }
    /**
     * @event post-client-render
     * @type {boolean}
     */
    this.trigger('post-client-render');
  },

  /**
   * pre/post render methods for particular contexts
   * @private
   * @memberOf BaseView
   * @method _preServerRender
   * @fires pre-server-render
   * @return {object} undefined
   */
  _preServerRender: function () {
    if (typeof this.preServerRender === 'function') {
      this.preServerRender();
    }
    /**
     * @event pre-server-render
     * @type {boolean}
     */
    this.trigger('pre-server-render');
  },

  /**
   * pre/post render methods for particular contexts
   * @private
   * @memberOf BaseView
   * @fires post-server-render
   * @method _postServerRender
   * @return {object} undefined
   */
  _postServerRender: function () {
    if (typeof this.postServerRender === 'function') {
      this.postServerRender();
    }
    /**
     * @event post-server-render
     * @type {boolean}
     */
    this.trigger('post-server-render');
  },

  /**
   * pre/post render methods for particular contexts
   * @private
   * @memberOf BaseView
   * @method _preRender
   * @fires pre-rensder
   * @return {object} undefined
   */
  _preRender: function () {
    if (typeof this.preRender === 'function') {
      this.preRender();
    }
    /**
     * @event pre-render
     * @type {boolean}
     */
    this.trigger('pre-render');
  },

  /**
   * pre/post render methods for particular contexts
   * @private
   * @memberOf BaseView
   * @method _postRender
   * @fires post-render
   * @return {object} undefined
   */
  _postRender: function () {
    if (typeof this.postRender === 'function') {
      this.postRender();
    }
    /**
     * @event post-render
     * @type boolean
     */
    this.trigger('post-render');
  },

  /**
   * Determines if the element was already rendered (like on the server)
   * We determine this by looking to see if `this.$el` has any elements in it
   * prior to actually attaching our template to the DOM. Since attaching the
   * template uses `.html()` it will wholesale replace any existing contents
   * so the presence of HTML within the element is a valid test
   * @method _elementRendered
   * @memberOf BaseView
   * @private
   * @return {boolean} If the element was rendered or not
   */
  _elementRendered: function () {
    if (this.$el.html() === '') {
      return false;
    } else {
      return true;
    }
  },

  /**
   * Another in series of stupid jquery hacks
   * @method  getHTML
   * @returns {string} HTML for view
   */
  getHTML: function(){
    return this.$el[0].outerHTML;
  },

  /**
   * Default render instance; gets template, serializes data and attaches
   * the rendered element to the cached `this.$el` reference.
   * @memberOf BaseView
   * @method render
   * @param  {object} data   object to be passed into serializeData
   * @param  {boolean} merge Extend or override local model data
   * @return {string}        Returns the HTML string generated by the render
   */
  render: function (data, merge) {
    var el;
    var serializedData;

    // see if we are going to extend the internal data model/collection
    if (Object.keys(this.extendContext).length > 0) {
      if (typeof data === 'undefined') {
        data = {};
      }
      data = deepestMerge(this.extendContext, data);
      merge = true;
    }

    if (process.browser) {
      this._preClientRender();
    } else {
      this._preServerRender();
    }

    this._preRender();

    if (!this._elementRendered() || this._dirtiedData) {
      serializedData = this.serializeData(data, merge);
      el = this.getTemplateFn()(serializedData);
      this.$el.html(el);
      this.cleanData();
    }

    if(this._childHTMLCache.length > 0){
      this._attachCachedChildren();
    }

    if (process.browser) {
      this._postClientRender();
    } else {
      this._postServerRender();
    }

    this._postRender();
    return this.getHTML();
  }
};

/**
 * Creates a new Backbone view based on the `baseViewOpts` and any optional
 * passed in options
 * @method  extend
 * @memberOf RearView
 * @param {...object} [arguments] Optional view defintion information
 * @returns {object} Backbone view
 */
exports.extend = function(){
  var args = Array.prototype.slice.call(arguments);
  args.unshift(baseViewOpts);
  return Backbone.View.extend(deepestMerge.apply(null, args));
};