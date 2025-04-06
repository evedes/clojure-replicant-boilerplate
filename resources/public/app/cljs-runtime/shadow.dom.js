goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_29159 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_29159(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_29166 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_29166(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__28189 = coll;
var G__28190 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__28189,G__28190) : shadow.dom.lazy_native_coll_seq.call(null, G__28189,G__28190));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__28215 = arguments.length;
switch (G__28215) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__28220 = arguments.length;
switch (G__28220) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__28227 = arguments.length;
switch (G__28227) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__28239 = arguments.length;
switch (G__28239) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__28245 = arguments.length;
switch (G__28245) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__28254 = arguments.length;
switch (G__28254) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e28273){if((e28273 instanceof Object)){
var e = e28273;
return console.log("didnt support attachEvent",el,e);
} else {
throw e28273;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__28297 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__28298 = null;
var count__28299 = (0);
var i__28300 = (0);
while(true){
if((i__28300 < count__28299)){
var el = chunk__28298.cljs$core$IIndexed$_nth$arity$2(null, i__28300);
var handler_29217__$1 = ((function (seq__28297,chunk__28298,count__28299,i__28300,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__28297,chunk__28298,count__28299,i__28300,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29217__$1);


var G__29220 = seq__28297;
var G__29221 = chunk__28298;
var G__29222 = count__28299;
var G__29223 = (i__28300 + (1));
seq__28297 = G__29220;
chunk__28298 = G__29221;
count__28299 = G__29222;
i__28300 = G__29223;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28297);
if(temp__5823__auto__){
var seq__28297__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28297__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28297__$1);
var G__29224 = cljs.core.chunk_rest(seq__28297__$1);
var G__29225 = c__5525__auto__;
var G__29226 = cljs.core.count(c__5525__auto__);
var G__29227 = (0);
seq__28297 = G__29224;
chunk__28298 = G__29225;
count__28299 = G__29226;
i__28300 = G__29227;
continue;
} else {
var el = cljs.core.first(seq__28297__$1);
var handler_29231__$1 = ((function (seq__28297,chunk__28298,count__28299,i__28300,el,seq__28297__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__28297,chunk__28298,count__28299,i__28300,el,seq__28297__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29231__$1);


var G__29232 = cljs.core.next(seq__28297__$1);
var G__29233 = null;
var G__29234 = (0);
var G__29235 = (0);
seq__28297 = G__29232;
chunk__28298 = G__29233;
count__28299 = G__29234;
i__28300 = G__29235;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__28330 = arguments.length;
switch (G__28330) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__28358 = cljs.core.seq(events);
var chunk__28359 = null;
var count__28360 = (0);
var i__28361 = (0);
while(true){
if((i__28361 < count__28360)){
var vec__28389 = chunk__28359.cljs$core$IIndexed$_nth$arity$2(null, i__28361);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28389,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28389,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29245 = seq__28358;
var G__29246 = chunk__28359;
var G__29247 = count__28360;
var G__29248 = (i__28361 + (1));
seq__28358 = G__29245;
chunk__28359 = G__29246;
count__28360 = G__29247;
i__28361 = G__29248;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28358);
if(temp__5823__auto__){
var seq__28358__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28358__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28358__$1);
var G__29252 = cljs.core.chunk_rest(seq__28358__$1);
var G__29253 = c__5525__auto__;
var G__29254 = cljs.core.count(c__5525__auto__);
var G__29255 = (0);
seq__28358 = G__29252;
chunk__28359 = G__29253;
count__28360 = G__29254;
i__28361 = G__29255;
continue;
} else {
var vec__28394 = cljs.core.first(seq__28358__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28394,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28394,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29256 = cljs.core.next(seq__28358__$1);
var G__29257 = null;
var G__29258 = (0);
var G__29259 = (0);
seq__28358 = G__29256;
chunk__28359 = G__29257;
count__28360 = G__29258;
i__28361 = G__29259;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__28399 = cljs.core.seq(styles);
var chunk__28400 = null;
var count__28401 = (0);
var i__28402 = (0);
while(true){
if((i__28402 < count__28401)){
var vec__28427 = chunk__28400.cljs$core$IIndexed$_nth$arity$2(null, i__28402);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28427,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28427,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29272 = seq__28399;
var G__29273 = chunk__28400;
var G__29274 = count__28401;
var G__29275 = (i__28402 + (1));
seq__28399 = G__29272;
chunk__28400 = G__29273;
count__28401 = G__29274;
i__28402 = G__29275;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28399);
if(temp__5823__auto__){
var seq__28399__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28399__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28399__$1);
var G__29276 = cljs.core.chunk_rest(seq__28399__$1);
var G__29277 = c__5525__auto__;
var G__29278 = cljs.core.count(c__5525__auto__);
var G__29279 = (0);
seq__28399 = G__29276;
chunk__28400 = G__29277;
count__28401 = G__29278;
i__28402 = G__29279;
continue;
} else {
var vec__28431 = cljs.core.first(seq__28399__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28431,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28431,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29280 = cljs.core.next(seq__28399__$1);
var G__29281 = null;
var G__29282 = (0);
var G__29283 = (0);
seq__28399 = G__29280;
chunk__28400 = G__29281;
count__28401 = G__29282;
i__28402 = G__29283;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__28446_29286 = key;
var G__28446_29287__$1 = (((G__28446_29286 instanceof cljs.core.Keyword))?G__28446_29286.fqn:null);
switch (G__28446_29287__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_29295 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_29295,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_29295,"aria-");
}
})())){
el.setAttribute(ks_29295,value);
} else {
(el[ks_29295] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__28492){
var map__28493 = p__28492;
var map__28493__$1 = cljs.core.__destructure_map(map__28493);
var props = map__28493__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28493__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__28494 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28494,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28494,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28494,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__28501 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__28501,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__28501;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__28511 = arguments.length;
switch (G__28511) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__28540){
var vec__28542 = p__28540;
var seq__28543 = cljs.core.seq(vec__28542);
var first__28544 = cljs.core.first(seq__28543);
var seq__28543__$1 = cljs.core.next(seq__28543);
var nn = first__28544;
var first__28544__$1 = cljs.core.first(seq__28543__$1);
var seq__28543__$2 = cljs.core.next(seq__28543__$1);
var np = first__28544__$1;
var nc = seq__28543__$2;
var node = vec__28542;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28552 = nn;
var G__28553 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28552,G__28553) : create_fn.call(null, G__28552,G__28553));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28555 = nn;
var G__28556 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28555,G__28556) : create_fn.call(null, G__28555,G__28556));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__28558 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28558,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28558,(1),null);
var seq__28561_29324 = cljs.core.seq(node_children);
var chunk__28562_29325 = null;
var count__28563_29326 = (0);
var i__28564_29327 = (0);
while(true){
if((i__28564_29327 < count__28563_29326)){
var child_struct_29328 = chunk__28562_29325.cljs$core$IIndexed$_nth$arity$2(null, i__28564_29327);
var children_29329 = shadow.dom.dom_node(child_struct_29328);
if(cljs.core.seq_QMARK_(children_29329)){
var seq__28616_29330 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29329));
var chunk__28618_29331 = null;
var count__28619_29332 = (0);
var i__28620_29333 = (0);
while(true){
if((i__28620_29333 < count__28619_29332)){
var child_29334 = chunk__28618_29331.cljs$core$IIndexed$_nth$arity$2(null, i__28620_29333);
if(cljs.core.truth_(child_29334)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29334);


var G__29335 = seq__28616_29330;
var G__29336 = chunk__28618_29331;
var G__29337 = count__28619_29332;
var G__29338 = (i__28620_29333 + (1));
seq__28616_29330 = G__29335;
chunk__28618_29331 = G__29336;
count__28619_29332 = G__29337;
i__28620_29333 = G__29338;
continue;
} else {
var G__29341 = seq__28616_29330;
var G__29342 = chunk__28618_29331;
var G__29343 = count__28619_29332;
var G__29344 = (i__28620_29333 + (1));
seq__28616_29330 = G__29341;
chunk__28618_29331 = G__29342;
count__28619_29332 = G__29343;
i__28620_29333 = G__29344;
continue;
}
} else {
var temp__5823__auto___29345 = cljs.core.seq(seq__28616_29330);
if(temp__5823__auto___29345){
var seq__28616_29346__$1 = temp__5823__auto___29345;
if(cljs.core.chunked_seq_QMARK_(seq__28616_29346__$1)){
var c__5525__auto___29347 = cljs.core.chunk_first(seq__28616_29346__$1);
var G__29348 = cljs.core.chunk_rest(seq__28616_29346__$1);
var G__29349 = c__5525__auto___29347;
var G__29350 = cljs.core.count(c__5525__auto___29347);
var G__29351 = (0);
seq__28616_29330 = G__29348;
chunk__28618_29331 = G__29349;
count__28619_29332 = G__29350;
i__28620_29333 = G__29351;
continue;
} else {
var child_29352 = cljs.core.first(seq__28616_29346__$1);
if(cljs.core.truth_(child_29352)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29352);


var G__29353 = cljs.core.next(seq__28616_29346__$1);
var G__29354 = null;
var G__29355 = (0);
var G__29356 = (0);
seq__28616_29330 = G__29353;
chunk__28618_29331 = G__29354;
count__28619_29332 = G__29355;
i__28620_29333 = G__29356;
continue;
} else {
var G__29358 = cljs.core.next(seq__28616_29346__$1);
var G__29359 = null;
var G__29360 = (0);
var G__29361 = (0);
seq__28616_29330 = G__29358;
chunk__28618_29331 = G__29359;
count__28619_29332 = G__29360;
i__28620_29333 = G__29361;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29329);
}


var G__29363 = seq__28561_29324;
var G__29364 = chunk__28562_29325;
var G__29365 = count__28563_29326;
var G__29366 = (i__28564_29327 + (1));
seq__28561_29324 = G__29363;
chunk__28562_29325 = G__29364;
count__28563_29326 = G__29365;
i__28564_29327 = G__29366;
continue;
} else {
var temp__5823__auto___29367 = cljs.core.seq(seq__28561_29324);
if(temp__5823__auto___29367){
var seq__28561_29368__$1 = temp__5823__auto___29367;
if(cljs.core.chunked_seq_QMARK_(seq__28561_29368__$1)){
var c__5525__auto___29369 = cljs.core.chunk_first(seq__28561_29368__$1);
var G__29371 = cljs.core.chunk_rest(seq__28561_29368__$1);
var G__29372 = c__5525__auto___29369;
var G__29373 = cljs.core.count(c__5525__auto___29369);
var G__29374 = (0);
seq__28561_29324 = G__29371;
chunk__28562_29325 = G__29372;
count__28563_29326 = G__29373;
i__28564_29327 = G__29374;
continue;
} else {
var child_struct_29375 = cljs.core.first(seq__28561_29368__$1);
var children_29380 = shadow.dom.dom_node(child_struct_29375);
if(cljs.core.seq_QMARK_(children_29380)){
var seq__28640_29382 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29380));
var chunk__28642_29383 = null;
var count__28643_29384 = (0);
var i__28644_29385 = (0);
while(true){
if((i__28644_29385 < count__28643_29384)){
var child_29387 = chunk__28642_29383.cljs$core$IIndexed$_nth$arity$2(null, i__28644_29385);
if(cljs.core.truth_(child_29387)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29387);


var G__29388 = seq__28640_29382;
var G__29389 = chunk__28642_29383;
var G__29390 = count__28643_29384;
var G__29391 = (i__28644_29385 + (1));
seq__28640_29382 = G__29388;
chunk__28642_29383 = G__29389;
count__28643_29384 = G__29390;
i__28644_29385 = G__29391;
continue;
} else {
var G__29392 = seq__28640_29382;
var G__29393 = chunk__28642_29383;
var G__29394 = count__28643_29384;
var G__29395 = (i__28644_29385 + (1));
seq__28640_29382 = G__29392;
chunk__28642_29383 = G__29393;
count__28643_29384 = G__29394;
i__28644_29385 = G__29395;
continue;
}
} else {
var temp__5823__auto___29396__$1 = cljs.core.seq(seq__28640_29382);
if(temp__5823__auto___29396__$1){
var seq__28640_29397__$1 = temp__5823__auto___29396__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28640_29397__$1)){
var c__5525__auto___29398 = cljs.core.chunk_first(seq__28640_29397__$1);
var G__29399 = cljs.core.chunk_rest(seq__28640_29397__$1);
var G__29400 = c__5525__auto___29398;
var G__29401 = cljs.core.count(c__5525__auto___29398);
var G__29402 = (0);
seq__28640_29382 = G__29399;
chunk__28642_29383 = G__29400;
count__28643_29384 = G__29401;
i__28644_29385 = G__29402;
continue;
} else {
var child_29403 = cljs.core.first(seq__28640_29397__$1);
if(cljs.core.truth_(child_29403)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29403);


var G__29404 = cljs.core.next(seq__28640_29397__$1);
var G__29405 = null;
var G__29406 = (0);
var G__29407 = (0);
seq__28640_29382 = G__29404;
chunk__28642_29383 = G__29405;
count__28643_29384 = G__29406;
i__28644_29385 = G__29407;
continue;
} else {
var G__29408 = cljs.core.next(seq__28640_29397__$1);
var G__29409 = null;
var G__29410 = (0);
var G__29411 = (0);
seq__28640_29382 = G__29408;
chunk__28642_29383 = G__29409;
count__28643_29384 = G__29410;
i__28644_29385 = G__29411;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29380);
}


var G__29412 = cljs.core.next(seq__28561_29368__$1);
var G__29413 = null;
var G__29414 = (0);
var G__29415 = (0);
seq__28561_29324 = G__29412;
chunk__28562_29325 = G__29413;
count__28563_29326 = G__29414;
i__28564_29327 = G__29415;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__28683 = cljs.core.seq(node);
var chunk__28685 = null;
var count__28686 = (0);
var i__28687 = (0);
while(true){
if((i__28687 < count__28686)){
var n = chunk__28685.cljs$core$IIndexed$_nth$arity$2(null, i__28687);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__29418 = seq__28683;
var G__29419 = chunk__28685;
var G__29420 = count__28686;
var G__29421 = (i__28687 + (1));
seq__28683 = G__29418;
chunk__28685 = G__29419;
count__28686 = G__29420;
i__28687 = G__29421;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28683);
if(temp__5823__auto__){
var seq__28683__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28683__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28683__$1);
var G__29424 = cljs.core.chunk_rest(seq__28683__$1);
var G__29425 = c__5525__auto__;
var G__29426 = cljs.core.count(c__5525__auto__);
var G__29427 = (0);
seq__28683 = G__29424;
chunk__28685 = G__29425;
count__28686 = G__29426;
i__28687 = G__29427;
continue;
} else {
var n = cljs.core.first(seq__28683__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__29429 = cljs.core.next(seq__28683__$1);
var G__29430 = null;
var G__29431 = (0);
var G__29432 = (0);
seq__28683 = G__29429;
chunk__28685 = G__29430;
count__28686 = G__29431;
i__28687 = G__29432;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__28714 = arguments.length;
switch (G__28714) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__28738 = arguments.length;
switch (G__28738) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__28747 = arguments.length;
switch (G__28747) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29469 = arguments.length;
var i__5727__auto___29470 = (0);
while(true){
if((i__5727__auto___29470 < len__5726__auto___29469)){
args__5732__auto__.push((arguments[i__5727__auto___29470]));

var G__29472 = (i__5727__auto___29470 + (1));
i__5727__auto___29470 = G__29472;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__28752_29479 = cljs.core.seq(nodes);
var chunk__28753_29480 = null;
var count__28754_29481 = (0);
var i__28755_29482 = (0);
while(true){
if((i__28755_29482 < count__28754_29481)){
var node_29488 = chunk__28753_29480.cljs$core$IIndexed$_nth$arity$2(null, i__28755_29482);
fragment.appendChild(shadow.dom._to_dom(node_29488));


var G__29492 = seq__28752_29479;
var G__29493 = chunk__28753_29480;
var G__29494 = count__28754_29481;
var G__29495 = (i__28755_29482 + (1));
seq__28752_29479 = G__29492;
chunk__28753_29480 = G__29493;
count__28754_29481 = G__29494;
i__28755_29482 = G__29495;
continue;
} else {
var temp__5823__auto___29496 = cljs.core.seq(seq__28752_29479);
if(temp__5823__auto___29496){
var seq__28752_29497__$1 = temp__5823__auto___29496;
if(cljs.core.chunked_seq_QMARK_(seq__28752_29497__$1)){
var c__5525__auto___29498 = cljs.core.chunk_first(seq__28752_29497__$1);
var G__29499 = cljs.core.chunk_rest(seq__28752_29497__$1);
var G__29500 = c__5525__auto___29498;
var G__29501 = cljs.core.count(c__5525__auto___29498);
var G__29502 = (0);
seq__28752_29479 = G__29499;
chunk__28753_29480 = G__29500;
count__28754_29481 = G__29501;
i__28755_29482 = G__29502;
continue;
} else {
var node_29503 = cljs.core.first(seq__28752_29497__$1);
fragment.appendChild(shadow.dom._to_dom(node_29503));


var G__29505 = cljs.core.next(seq__28752_29497__$1);
var G__29506 = null;
var G__29507 = (0);
var G__29508 = (0);
seq__28752_29479 = G__29505;
chunk__28753_29480 = G__29506;
count__28754_29481 = G__29507;
i__28755_29482 = G__29508;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq28751){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28751));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__28779_29514 = cljs.core.seq(scripts);
var chunk__28780_29515 = null;
var count__28781_29516 = (0);
var i__28782_29517 = (0);
while(true){
if((i__28782_29517 < count__28781_29516)){
var vec__28791_29518 = chunk__28780_29515.cljs$core$IIndexed$_nth$arity$2(null, i__28782_29517);
var script_tag_29519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28791_29518,(0),null);
var script_body_29520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28791_29518,(1),null);
eval(script_body_29520);


var G__29522 = seq__28779_29514;
var G__29523 = chunk__28780_29515;
var G__29524 = count__28781_29516;
var G__29525 = (i__28782_29517 + (1));
seq__28779_29514 = G__29522;
chunk__28780_29515 = G__29523;
count__28781_29516 = G__29524;
i__28782_29517 = G__29525;
continue;
} else {
var temp__5823__auto___29527 = cljs.core.seq(seq__28779_29514);
if(temp__5823__auto___29527){
var seq__28779_29528__$1 = temp__5823__auto___29527;
if(cljs.core.chunked_seq_QMARK_(seq__28779_29528__$1)){
var c__5525__auto___29530 = cljs.core.chunk_first(seq__28779_29528__$1);
var G__29531 = cljs.core.chunk_rest(seq__28779_29528__$1);
var G__29532 = c__5525__auto___29530;
var G__29533 = cljs.core.count(c__5525__auto___29530);
var G__29534 = (0);
seq__28779_29514 = G__29531;
chunk__28780_29515 = G__29532;
count__28781_29516 = G__29533;
i__28782_29517 = G__29534;
continue;
} else {
var vec__28795_29535 = cljs.core.first(seq__28779_29528__$1);
var script_tag_29536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28795_29535,(0),null);
var script_body_29537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28795_29535,(1),null);
eval(script_body_29537);


var G__29538 = cljs.core.next(seq__28779_29528__$1);
var G__29539 = null;
var G__29540 = (0);
var G__29541 = (0);
seq__28779_29514 = G__29538;
chunk__28780_29515 = G__29539;
count__28781_29516 = G__29540;
i__28782_29517 = G__29541;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__28799){
var vec__28800 = p__28799;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28800,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28800,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__28812 = arguments.length;
switch (G__28812) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__28815 = cljs.core.seq(style_keys);
var chunk__28816 = null;
var count__28817 = (0);
var i__28818 = (0);
while(true){
if((i__28818 < count__28817)){
var it = chunk__28816.cljs$core$IIndexed$_nth$arity$2(null, i__28818);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29567 = seq__28815;
var G__29568 = chunk__28816;
var G__29569 = count__28817;
var G__29570 = (i__28818 + (1));
seq__28815 = G__29567;
chunk__28816 = G__29568;
count__28817 = G__29569;
i__28818 = G__29570;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28815);
if(temp__5823__auto__){
var seq__28815__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28815__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28815__$1);
var G__29572 = cljs.core.chunk_rest(seq__28815__$1);
var G__29573 = c__5525__auto__;
var G__29574 = cljs.core.count(c__5525__auto__);
var G__29575 = (0);
seq__28815 = G__29572;
chunk__28816 = G__29573;
count__28817 = G__29574;
i__28818 = G__29575;
continue;
} else {
var it = cljs.core.first(seq__28815__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29576 = cljs.core.next(seq__28815__$1);
var G__29577 = null;
var G__29578 = (0);
var G__29579 = (0);
seq__28815 = G__29576;
chunk__28816 = G__29577;
count__28817 = G__29578;
i__28818 = G__29579;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k28823,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__28839 = k28823;
var G__28839__$1 = (((G__28839 instanceof cljs.core.Keyword))?G__28839.fqn:null);
switch (G__28839__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28823,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__28845){
var vec__28846 = p__28845;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28846,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28846,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28822){
var self__ = this;
var G__28822__$1 = this;
return (new cljs.core.RecordIter((0),G__28822__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28824,other28825){
var self__ = this;
var this28824__$1 = this;
return (((!((other28825 == null)))) && ((((this28824__$1.constructor === other28825.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28824__$1.x,other28825.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28824__$1.y,other28825.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28824__$1.__extmap,other28825.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k28823){
var self__ = this;
var this__5307__auto____$1 = this;
var G__28861 = k28823;
var G__28861__$1 = (((G__28861 instanceof cljs.core.Keyword))?G__28861.fqn:null);
switch (G__28861__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28823);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__28822){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__28862 = cljs.core.keyword_identical_QMARK_;
var expr__28863 = k__5309__auto__;
if(cljs.core.truth_((pred__28862.cljs$core$IFn$_invoke$arity$2 ? pred__28862.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__28863) : pred__28862.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__28863)))){
return (new shadow.dom.Coordinate(G__28822,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28862.cljs$core$IFn$_invoke$arity$2 ? pred__28862.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__28863) : pred__28862.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__28863)))){
return (new shadow.dom.Coordinate(self__.x,G__28822,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__28822),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__28822){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__28822,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__28830){
var extmap__5342__auto__ = (function (){var G__28870 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28830,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__28830)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28870);
} else {
return G__28870;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__28830),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__28830),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k28879,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__28894 = k28879;
var G__28894__$1 = (((G__28894 instanceof cljs.core.Keyword))?G__28894.fqn:null);
switch (G__28894__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28879,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__28896){
var vec__28897 = p__28896;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28897,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28897,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28878){
var self__ = this;
var G__28878__$1 = this;
return (new cljs.core.RecordIter((0),G__28878__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28880,other28881){
var self__ = this;
var this28880__$1 = this;
return (((!((other28881 == null)))) && ((((this28880__$1.constructor === other28881.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28880__$1.w,other28881.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28880__$1.h,other28881.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28880__$1.__extmap,other28881.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k28879){
var self__ = this;
var this__5307__auto____$1 = this;
var G__28912 = k28879;
var G__28912__$1 = (((G__28912 instanceof cljs.core.Keyword))?G__28912.fqn:null);
switch (G__28912__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28879);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__28878){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__28914 = cljs.core.keyword_identical_QMARK_;
var expr__28915 = k__5309__auto__;
if(cljs.core.truth_((pred__28914.cljs$core$IFn$_invoke$arity$2 ? pred__28914.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__28915) : pred__28914.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__28915)))){
return (new shadow.dom.Size(G__28878,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28914.cljs$core$IFn$_invoke$arity$2 ? pred__28914.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__28915) : pred__28914.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__28915)))){
return (new shadow.dom.Size(self__.w,G__28878,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__28878),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__28878){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__28878,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__28889){
var extmap__5342__auto__ = (function (){var G__28928 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28889,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__28889)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28928);
} else {
return G__28928;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__28889),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__28889),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__29869 = (i + (1));
var G__29870 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__29869;
ret = G__29870;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28949){
var vec__28951 = p__28949;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28951,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28951,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__28967 = arguments.length;
switch (G__28967) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__29901 = ps;
var G__29902 = (i + (1));
el__$1 = G__29901;
i = G__29902;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__28989 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28989,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28989,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28989,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__28995_30000 = cljs.core.seq(props);
var chunk__28996_30001 = null;
var count__28997_30002 = (0);
var i__28998_30003 = (0);
while(true){
if((i__28998_30003 < count__28997_30002)){
var vec__29023_30009 = chunk__28996_30001.cljs$core$IIndexed$_nth$arity$2(null, i__28998_30003);
var k_30010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29023_30009,(0),null);
var v_30011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29023_30009,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_30010);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_30010),v_30011);


var G__30039 = seq__28995_30000;
var G__30040 = chunk__28996_30001;
var G__30041 = count__28997_30002;
var G__30042 = (i__28998_30003 + (1));
seq__28995_30000 = G__30039;
chunk__28996_30001 = G__30040;
count__28997_30002 = G__30041;
i__28998_30003 = G__30042;
continue;
} else {
var temp__5823__auto___30044 = cljs.core.seq(seq__28995_30000);
if(temp__5823__auto___30044){
var seq__28995_30046__$1 = temp__5823__auto___30044;
if(cljs.core.chunked_seq_QMARK_(seq__28995_30046__$1)){
var c__5525__auto___30047 = cljs.core.chunk_first(seq__28995_30046__$1);
var G__30048 = cljs.core.chunk_rest(seq__28995_30046__$1);
var G__30049 = c__5525__auto___30047;
var G__30050 = cljs.core.count(c__5525__auto___30047);
var G__30051 = (0);
seq__28995_30000 = G__30048;
chunk__28996_30001 = G__30049;
count__28997_30002 = G__30050;
i__28998_30003 = G__30051;
continue;
} else {
var vec__29028_30056 = cljs.core.first(seq__28995_30046__$1);
var k_30057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29028_30056,(0),null);
var v_30058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29028_30056,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_30057);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_30057),v_30058);


var G__30087 = cljs.core.next(seq__28995_30046__$1);
var G__30088 = null;
var G__30089 = (0);
var G__30090 = (0);
seq__28995_30000 = G__30087;
chunk__28996_30001 = G__30088;
count__28997_30002 = G__30089;
i__28998_30003 = G__30090;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__29040 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29040,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29040,(1),null);
var seq__29044_30100 = cljs.core.seq(node_children);
var chunk__29046_30101 = null;
var count__29047_30102 = (0);
var i__29048_30103 = (0);
while(true){
if((i__29048_30103 < count__29047_30102)){
var child_struct_30105 = chunk__29046_30101.cljs$core$IIndexed$_nth$arity$2(null, i__29048_30103);
if((!((child_struct_30105 == null)))){
if(typeof child_struct_30105 === 'string'){
var text_30106 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30106),child_struct_30105].join(''));
} else {
var children_30107 = shadow.dom.svg_node(child_struct_30105);
if(cljs.core.seq_QMARK_(children_30107)){
var seq__29089_30108 = cljs.core.seq(children_30107);
var chunk__29091_30109 = null;
var count__29092_30110 = (0);
var i__29093_30111 = (0);
while(true){
if((i__29093_30111 < count__29092_30110)){
var child_30113 = chunk__29091_30109.cljs$core$IIndexed$_nth$arity$2(null, i__29093_30111);
if(cljs.core.truth_(child_30113)){
node.appendChild(child_30113);


var G__30118 = seq__29089_30108;
var G__30119 = chunk__29091_30109;
var G__30120 = count__29092_30110;
var G__30121 = (i__29093_30111 + (1));
seq__29089_30108 = G__30118;
chunk__29091_30109 = G__30119;
count__29092_30110 = G__30120;
i__29093_30111 = G__30121;
continue;
} else {
var G__30122 = seq__29089_30108;
var G__30123 = chunk__29091_30109;
var G__30124 = count__29092_30110;
var G__30125 = (i__29093_30111 + (1));
seq__29089_30108 = G__30122;
chunk__29091_30109 = G__30123;
count__29092_30110 = G__30124;
i__29093_30111 = G__30125;
continue;
}
} else {
var temp__5823__auto___30126 = cljs.core.seq(seq__29089_30108);
if(temp__5823__auto___30126){
var seq__29089_30127__$1 = temp__5823__auto___30126;
if(cljs.core.chunked_seq_QMARK_(seq__29089_30127__$1)){
var c__5525__auto___30128 = cljs.core.chunk_first(seq__29089_30127__$1);
var G__30130 = cljs.core.chunk_rest(seq__29089_30127__$1);
var G__30131 = c__5525__auto___30128;
var G__30132 = cljs.core.count(c__5525__auto___30128);
var G__30133 = (0);
seq__29089_30108 = G__30130;
chunk__29091_30109 = G__30131;
count__29092_30110 = G__30132;
i__29093_30111 = G__30133;
continue;
} else {
var child_30134 = cljs.core.first(seq__29089_30127__$1);
if(cljs.core.truth_(child_30134)){
node.appendChild(child_30134);


var G__30136 = cljs.core.next(seq__29089_30127__$1);
var G__30137 = null;
var G__30138 = (0);
var G__30139 = (0);
seq__29089_30108 = G__30136;
chunk__29091_30109 = G__30137;
count__29092_30110 = G__30138;
i__29093_30111 = G__30139;
continue;
} else {
var G__30140 = cljs.core.next(seq__29089_30127__$1);
var G__30141 = null;
var G__30142 = (0);
var G__30143 = (0);
seq__29089_30108 = G__30140;
chunk__29091_30109 = G__30141;
count__29092_30110 = G__30142;
i__29093_30111 = G__30143;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30107);
}
}


var G__30144 = seq__29044_30100;
var G__30145 = chunk__29046_30101;
var G__30146 = count__29047_30102;
var G__30147 = (i__29048_30103 + (1));
seq__29044_30100 = G__30144;
chunk__29046_30101 = G__30145;
count__29047_30102 = G__30146;
i__29048_30103 = G__30147;
continue;
} else {
var G__30148 = seq__29044_30100;
var G__30149 = chunk__29046_30101;
var G__30150 = count__29047_30102;
var G__30151 = (i__29048_30103 + (1));
seq__29044_30100 = G__30148;
chunk__29046_30101 = G__30149;
count__29047_30102 = G__30150;
i__29048_30103 = G__30151;
continue;
}
} else {
var temp__5823__auto___30153 = cljs.core.seq(seq__29044_30100);
if(temp__5823__auto___30153){
var seq__29044_30154__$1 = temp__5823__auto___30153;
if(cljs.core.chunked_seq_QMARK_(seq__29044_30154__$1)){
var c__5525__auto___30155 = cljs.core.chunk_first(seq__29044_30154__$1);
var G__30156 = cljs.core.chunk_rest(seq__29044_30154__$1);
var G__30157 = c__5525__auto___30155;
var G__30158 = cljs.core.count(c__5525__auto___30155);
var G__30159 = (0);
seq__29044_30100 = G__30156;
chunk__29046_30101 = G__30157;
count__29047_30102 = G__30158;
i__29048_30103 = G__30159;
continue;
} else {
var child_struct_30162 = cljs.core.first(seq__29044_30154__$1);
if((!((child_struct_30162 == null)))){
if(typeof child_struct_30162 === 'string'){
var text_30168 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30168),child_struct_30162].join(''));
} else {
var children_30169 = shadow.dom.svg_node(child_struct_30162);
if(cljs.core.seq_QMARK_(children_30169)){
var seq__29105_30188 = cljs.core.seq(children_30169);
var chunk__29107_30189 = null;
var count__29108_30190 = (0);
var i__29109_30191 = (0);
while(true){
if((i__29109_30191 < count__29108_30190)){
var child_30192 = chunk__29107_30189.cljs$core$IIndexed$_nth$arity$2(null, i__29109_30191);
if(cljs.core.truth_(child_30192)){
node.appendChild(child_30192);


var G__30193 = seq__29105_30188;
var G__30194 = chunk__29107_30189;
var G__30195 = count__29108_30190;
var G__30196 = (i__29109_30191 + (1));
seq__29105_30188 = G__30193;
chunk__29107_30189 = G__30194;
count__29108_30190 = G__30195;
i__29109_30191 = G__30196;
continue;
} else {
var G__30197 = seq__29105_30188;
var G__30198 = chunk__29107_30189;
var G__30199 = count__29108_30190;
var G__30200 = (i__29109_30191 + (1));
seq__29105_30188 = G__30197;
chunk__29107_30189 = G__30198;
count__29108_30190 = G__30199;
i__29109_30191 = G__30200;
continue;
}
} else {
var temp__5823__auto___30202__$1 = cljs.core.seq(seq__29105_30188);
if(temp__5823__auto___30202__$1){
var seq__29105_30203__$1 = temp__5823__auto___30202__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29105_30203__$1)){
var c__5525__auto___30204 = cljs.core.chunk_first(seq__29105_30203__$1);
var G__30205 = cljs.core.chunk_rest(seq__29105_30203__$1);
var G__30206 = c__5525__auto___30204;
var G__30207 = cljs.core.count(c__5525__auto___30204);
var G__30208 = (0);
seq__29105_30188 = G__30205;
chunk__29107_30189 = G__30206;
count__29108_30190 = G__30207;
i__29109_30191 = G__30208;
continue;
} else {
var child_30209 = cljs.core.first(seq__29105_30203__$1);
if(cljs.core.truth_(child_30209)){
node.appendChild(child_30209);


var G__30210 = cljs.core.next(seq__29105_30203__$1);
var G__30211 = null;
var G__30212 = (0);
var G__30213 = (0);
seq__29105_30188 = G__30210;
chunk__29107_30189 = G__30211;
count__29108_30190 = G__30212;
i__29109_30191 = G__30213;
continue;
} else {
var G__30215 = cljs.core.next(seq__29105_30203__$1);
var G__30216 = null;
var G__30217 = (0);
var G__30218 = (0);
seq__29105_30188 = G__30215;
chunk__29107_30189 = G__30216;
count__29108_30190 = G__30217;
i__29109_30191 = G__30218;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30169);
}
}


var G__30220 = cljs.core.next(seq__29044_30154__$1);
var G__30221 = null;
var G__30222 = (0);
var G__30223 = (0);
seq__29044_30100 = G__30220;
chunk__29046_30101 = G__30221;
count__29047_30102 = G__30222;
i__29048_30103 = G__30223;
continue;
} else {
var G__30224 = cljs.core.next(seq__29044_30154__$1);
var G__30225 = null;
var G__30226 = (0);
var G__30227 = (0);
seq__29044_30100 = G__30224;
chunk__29046_30101 = G__30225;
count__29047_30102 = G__30226;
i__29048_30103 = G__30227;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___30281 = arguments.length;
var i__5727__auto___30282 = (0);
while(true){
if((i__5727__auto___30282 < len__5726__auto___30281)){
args__5732__auto__.push((arguments[i__5727__auto___30282]));

var G__30283 = (i__5727__auto___30282 + (1));
i__5727__auto___30282 = G__30283;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq29133){
var G__29134 = cljs.core.first(seq29133);
var seq29133__$1 = cljs.core.next(seq29133);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29134,seq29133__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
