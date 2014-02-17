<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<div class="description"><p>Options for the baseview</p></div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/rearview/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/toddself/rearview/blob/master/index.js#L12">lineno 12</a>
</li>
</ul></dd>
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="_getSelector"><span class="type-signature">&lt;static> </span>_getSelector<span class="signature">($selector)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Returns the selector required</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>$selector</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="description last"></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/rearview/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/toddself/rearview/blob/master/index.js#L203">lineno 203</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">object</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="attachChild"><span class="type-signature">&lt;static> </span>attachChild<span class="signature">(View, Model, <span class="optional">$selector</span>, <span class="optional">options</span>)</span><span class="type-signature"> &rarr; {string}</span></h4>
</dt>
<dd>
<div class="description">
<p>Instantiates a child view and returns the HTML</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>View</code></td>
<td class="type">
<span class="param-type">object</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>The view to instantiate</p></td>
</tr>
<tr>
<td class="name"><code>Model</code></td>
<td class="type">
<span class="param-type">object</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>A model or a collection of data for the view</p></td>
</tr>
<tr>
<td class="name"><code>$selector</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>The selector to which the view should be attached</p></td>
</tr>
<tr>
<td class="name"><code>options</code></td>
<td class="type">
<span class="param-type">object</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>A key-pair list of options to additionally pass-in</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/rearview/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/toddself/rearview/blob/master/index.js#L227">lineno 227</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>The HTML representation of the view</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">string</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="attachChild"><span class="type-signature">&lt;static> </span>attachChild<span class="signature">(View, Model, <span class="optional">$selector</span>, <span class="optional">options</span>)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Creates child view(s) and generates the HTML. If this view has not yet
rendered, it caches them along with the selector to which they should
be attached. If the view is rendered, it attaches them after render</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>View</code></td>
<td class="type">
<span class="param-type">object</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>The view to instantiate</p></td>
</tr>
<tr>
<td class="name"><code>Model</code></td>
<td class="type">
<span class="param-type">object</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>A model of data for the view</p></td>
</tr>
<tr>
<td class="name"><code>$selector</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>The selector to which the view should be attached</p></td>
</tr>
<tr>
<td class="name"><code>options</code></td>
<td class="type">
<span class="param-type">object</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>A key-pair list of options to additionally pass-in</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/rearview/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/toddself/rearview/blob/master/index.js#L107">lineno 107</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>undefined</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">object</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="cleanData"><span class="type-signature">&lt;static> </span>cleanData<span class="signature">()</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Resets the dirty flag to false so the render method won't re-render
itself if there is already html in the <code>$el</code> object. Also triggers
the <code>data-cleaned</code> flag</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/rearview/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/toddself/rearview/blob/master/index.js#L61">lineno 61</a>
</li>
</ul></dd>
</dl>
<h5>Fires:</h5>
<ul>
<li><a href="global.html#event:data-cleaned">event:data-cleaned</a></li>
</ul>
<h5>Returns:</h5>
<div class="param-desc">
<p>undefined</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">object</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="close"><span class="type-signature">&lt;static> </span>close<span class="signature">()</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Should be called when the view is unattached from the DOM. Notifies its
parent it is closing and tells children views to close themselves (if present)</p>
<p>Calls <code>Backbone.View.remove</code> to handle event unbinding.</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/rearview/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/toddself/rearview/blob/master/index.js#L308">lineno 308</a>
</li>
</ul></dd>
</dl>
<h5>Fires:</h5>
<ul>
<li><a href="global.html#event:child:close">child:close</a></li>
<li><a href="global.html#event:view-closing">event:view-closing</a></li>
</ul>
<h5>Returns:</h5>
<div class="param-desc">
<p>undefined</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">object</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="dereferenceChild"><span class="type-signature">&lt;static> </span>dereferenceChild<span class="signature">(child_id)</span><span class="type-signature"> &rarr; {Undefed}</span></h4>
</dt>
<dd>
<div class="description">
<p>Stub method for overwriting. Allows the parent view to do something when
a child view has closed itself.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>child_id</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="description last"><p>The #id of the view</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/rearview/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/toddself/rearview/blob/master/index.js#L273">lineno 273</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>undefined</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Undefed</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="dirtyData"><span class="type-signature">&lt;static> </span>dirtyData<span class="signature">()</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Sets the dirty flag on the data which explains to the render method
to re-render the template even if it's already rendered. Also triggers
the <code>data-dirtied</code> event on the object</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/rearview/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/toddself/rearview/blob/master/index.js#L43">lineno 43</a>
</li>
</ul></dd>
</dl>
<h5>Fires:</h5>
<ul>
<li><a href="global.html#event:data-dirtied">event:data-dirtied</a></li>
</ul>
<h5>Returns:</h5>
<div class="param-desc">
<p>undefined</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">object</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="getTemplateFn"><span class="type-signature">&lt;static> </span>getTemplateFn<span class="signature">()</span><span class="type-signature"> &rarr; {function}</span></h4>
</dt>
<dd>
<div class="description">
<p>Returns the locally pre-compiled template function, or if the template is
a string, compiles it, sets the local instance and returns it back.</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/rearview/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/toddself/rearview/blob/master/index.js#L93">lineno 93</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>Compiled handlebars template instance</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">function</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="initialize"><span class="type-signature">&lt;static> </span>initialize<span class="signature">()</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Attach a bunch of listeners...</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/rearview/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/toddself/rearview/blob/master/index.js#L25">lineno 25</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>undefined</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">object</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="render"><span class="type-signature">&lt;static> </span>render<span class="signature">(data, merge)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Default render instance; gets template, serializes data and attaches
the rendered element to the cached <code>this.$el</code> reference.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>data</code></td>
<td class="type">
<span class="param-type">object</span>
</td>
<td class="description last"><p>object to be passed into serializeData</p></td>
</tr>
<tr>
<td class="name"><code>merge</code></td>
<td class="type">
<span class="param-type">boolean</span>
</td>
<td class="description last"><p>Extend or override local model data</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/rearview/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/toddself/rearview/blob/master/index.js#L490">lineno 490</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>Returns <code>this</code> for chaining.</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">object</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="serializeData"><span class="type-signature">&lt;static> </span>serializeData<span class="signature">(data, merge)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Returns the context for the template function that allows the view to be
rendered. Allows you to extend the model data with additional fields if
neeeded</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>data</code></td>
<td class="type">
<span class="param-type">object</span>
</td>
<td class="description last"><p>Data to either override or extend</p></td>
</tr>
<tr>
<td class="name"><code>merge</code></td>
<td class="type">
<span class="param-type">boolean</span>
</td>
<td class="description last"><p>Whether or not to extend this.model with passed in data</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/rearview/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/toddself/rearview/blob/master/index.js#L283">lineno 283</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>object to be passed into the template function</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">object</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="setParentView"><span class="type-signature">&lt;static> </span>setParentView<span class="signature">(parent)</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Sets a reference to the parent view on the child so the child can listen
to the parent appropriately</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>parent</code></td>
<td class="type">
<span class="param-type">object</span>
</td>
<td class="description last"><p>The parent view</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/rearview/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/toddself/rearview/blob/master/index.js#L149">lineno 149</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="setTemplate"><span class="type-signature">&lt;static> </span>setTemplate<span class="signature">(template_data)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Sets up the template for a given template</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>template_data</code></td>
<td class="type">
<span class="param-type">function</span>
</td>
<td class="description last"><p>A template function which accepts a context and returns a string which represents the compiled template merged with the context</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/rearview/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/toddself/rearview/blob/master/index.js#L79">lineno 79</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>undefined</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">object</span>
</dd>
</dl>
</dd>
</dl>
</article>
</section>
</div><div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/rearview/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/toddself/rearview/blob/master/index.js#L3">lineno 3</a>
</li>
</ul></dd>
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="extend"><span class="type-signature">&lt;static> </span>extend<span class="signature">(<span class="optional">arguments</span>)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Creates a new Backbone view based on the <code>baseViewOpts</code> and any optional
passed in options</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>arguments</code></td>
<td class="type">
<span class="param-type">object</span>
</td>
<td class="attributes">
&lt;optional><br>
&lt;repeatable><br>
</td>
<td class="description last"><p>Optional view defintion information</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/rearview/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/toddself/rearview/blob/master/index.js#L542">lineno 542</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>Backbone view</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">object</span>
</dd>
</dl>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->