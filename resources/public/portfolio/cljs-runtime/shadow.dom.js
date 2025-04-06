goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_40513 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_40513(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_40514 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_40514(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__39667 = coll;
var G__39668 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__39667,G__39668) : shadow.dom.lazy_native_coll_seq.call(null, G__39667,G__39668));
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
var G__39688 = arguments.length;
switch (G__39688) {
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
var G__39704 = arguments.length;
switch (G__39704) {
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
var G__39712 = arguments.length;
switch (G__39712) {
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
var G__39715 = arguments.length;
switch (G__39715) {
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
var G__39727 = arguments.length;
switch (G__39727) {
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
var G__39737 = arguments.length;
switch (G__39737) {
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
}catch (e39745){if((e39745 instanceof Object)){
var e = e39745;
return console.log("didnt support attachEvent",el,e);
} else {
throw e39745;

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
var seq__39748 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__39749 = null;
var count__39750 = (0);
var i__39751 = (0);
while(true){
if((i__39751 < count__39750)){
var el = chunk__39749.cljs$core$IIndexed$_nth$arity$2(null, i__39751);
var handler_40553__$1 = ((function (seq__39748,chunk__39749,count__39750,i__39751,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__39748,chunk__39749,count__39750,i__39751,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40553__$1);


var G__40554 = seq__39748;
var G__40555 = chunk__39749;
var G__40556 = count__39750;
var G__40557 = (i__39751 + (1));
seq__39748 = G__40554;
chunk__39749 = G__40555;
count__39750 = G__40556;
i__39751 = G__40557;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__39748);
if(temp__5823__auto__){
var seq__39748__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39748__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__39748__$1);
var G__40558 = cljs.core.chunk_rest(seq__39748__$1);
var G__40559 = c__5525__auto__;
var G__40560 = cljs.core.count(c__5525__auto__);
var G__40561 = (0);
seq__39748 = G__40558;
chunk__39749 = G__40559;
count__39750 = G__40560;
i__39751 = G__40561;
continue;
} else {
var el = cljs.core.first(seq__39748__$1);
var handler_40566__$1 = ((function (seq__39748,chunk__39749,count__39750,i__39751,el,seq__39748__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__39748,chunk__39749,count__39750,i__39751,el,seq__39748__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40566__$1);


var G__40568 = cljs.core.next(seq__39748__$1);
var G__40569 = null;
var G__40570 = (0);
var G__40571 = (0);
seq__39748 = G__40568;
chunk__39749 = G__40569;
count__39750 = G__40570;
i__39751 = G__40571;
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
var G__39765 = arguments.length;
switch (G__39765) {
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
var seq__39772 = cljs.core.seq(events);
var chunk__39773 = null;
var count__39774 = (0);
var i__39775 = (0);
while(true){
if((i__39775 < count__39774)){
var vec__39800 = chunk__39773.cljs$core$IIndexed$_nth$arity$2(null, i__39775);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39800,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39800,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40590 = seq__39772;
var G__40591 = chunk__39773;
var G__40592 = count__39774;
var G__40593 = (i__39775 + (1));
seq__39772 = G__40590;
chunk__39773 = G__40591;
count__39774 = G__40592;
i__39775 = G__40593;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__39772);
if(temp__5823__auto__){
var seq__39772__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39772__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__39772__$1);
var G__40594 = cljs.core.chunk_rest(seq__39772__$1);
var G__40595 = c__5525__auto__;
var G__40596 = cljs.core.count(c__5525__auto__);
var G__40597 = (0);
seq__39772 = G__40594;
chunk__39773 = G__40595;
count__39774 = G__40596;
i__39775 = G__40597;
continue;
} else {
var vec__39807 = cljs.core.first(seq__39772__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39807,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39807,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40598 = cljs.core.next(seq__39772__$1);
var G__40599 = null;
var G__40600 = (0);
var G__40601 = (0);
seq__39772 = G__40598;
chunk__39773 = G__40599;
count__39774 = G__40600;
i__39775 = G__40601;
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
var seq__39810 = cljs.core.seq(styles);
var chunk__39811 = null;
var count__39812 = (0);
var i__39813 = (0);
while(true){
if((i__39813 < count__39812)){
var vec__39821 = chunk__39811.cljs$core$IIndexed$_nth$arity$2(null, i__39813);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39821,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39821,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40605 = seq__39810;
var G__40606 = chunk__39811;
var G__40607 = count__39812;
var G__40608 = (i__39813 + (1));
seq__39810 = G__40605;
chunk__39811 = G__40606;
count__39812 = G__40607;
i__39813 = G__40608;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__39810);
if(temp__5823__auto__){
var seq__39810__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39810__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__39810__$1);
var G__40609 = cljs.core.chunk_rest(seq__39810__$1);
var G__40610 = c__5525__auto__;
var G__40611 = cljs.core.count(c__5525__auto__);
var G__40612 = (0);
seq__39810 = G__40609;
chunk__39811 = G__40610;
count__39812 = G__40611;
i__39813 = G__40612;
continue;
} else {
var vec__39828 = cljs.core.first(seq__39810__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39828,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39828,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40614 = cljs.core.next(seq__39810__$1);
var G__40615 = null;
var G__40616 = (0);
var G__40617 = (0);
seq__39810 = G__40614;
chunk__39811 = G__40615;
count__39812 = G__40616;
i__39813 = G__40617;
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
var G__39835_40621 = key;
var G__39835_40622__$1 = (((G__39835_40621 instanceof cljs.core.Keyword))?G__39835_40621.fqn:null);
switch (G__39835_40622__$1) {
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
var ks_40630 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_40630,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_40630,"aria-");
}
})())){
el.setAttribute(ks_40630,value);
} else {
(el[ks_40630] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__39863){
var map__39864 = p__39863;
var map__39864__$1 = cljs.core.__destructure_map(map__39864);
var props = map__39864__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39864__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__39865 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39865,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39865,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39865,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__39868 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__39868,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__39868;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__39870 = arguments.length;
switch (G__39870) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__39873){
var vec__39874 = p__39873;
var seq__39875 = cljs.core.seq(vec__39874);
var first__39876 = cljs.core.first(seq__39875);
var seq__39875__$1 = cljs.core.next(seq__39875);
var nn = first__39876;
var first__39876__$1 = cljs.core.first(seq__39875__$1);
var seq__39875__$2 = cljs.core.next(seq__39875__$1);
var np = first__39876__$1;
var nc = seq__39875__$2;
var node = vec__39874;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39887 = nn;
var G__39888 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39887,G__39888) : create_fn.call(null, G__39887,G__39888));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39889 = nn;
var G__39890 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39889,G__39890) : create_fn.call(null, G__39889,G__39890));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__39894 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39894,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39894,(1),null);
var seq__39897_40732 = cljs.core.seq(node_children);
var chunk__39898_40733 = null;
var count__39899_40734 = (0);
var i__39900_40735 = (0);
while(true){
if((i__39900_40735 < count__39899_40734)){
var child_struct_40740 = chunk__39898_40733.cljs$core$IIndexed$_nth$arity$2(null, i__39900_40735);
var children_40741 = shadow.dom.dom_node(child_struct_40740);
if(cljs.core.seq_QMARK_(children_40741)){
var seq__39932_40742 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40741));
var chunk__39934_40743 = null;
var count__39935_40744 = (0);
var i__39936_40745 = (0);
while(true){
if((i__39936_40745 < count__39935_40744)){
var child_40748 = chunk__39934_40743.cljs$core$IIndexed$_nth$arity$2(null, i__39936_40745);
if(cljs.core.truth_(child_40748)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40748);


var G__40752 = seq__39932_40742;
var G__40753 = chunk__39934_40743;
var G__40754 = count__39935_40744;
var G__40755 = (i__39936_40745 + (1));
seq__39932_40742 = G__40752;
chunk__39934_40743 = G__40753;
count__39935_40744 = G__40754;
i__39936_40745 = G__40755;
continue;
} else {
var G__40757 = seq__39932_40742;
var G__40758 = chunk__39934_40743;
var G__40759 = count__39935_40744;
var G__40760 = (i__39936_40745 + (1));
seq__39932_40742 = G__40757;
chunk__39934_40743 = G__40758;
count__39935_40744 = G__40759;
i__39936_40745 = G__40760;
continue;
}
} else {
var temp__5823__auto___40762 = cljs.core.seq(seq__39932_40742);
if(temp__5823__auto___40762){
var seq__39932_40763__$1 = temp__5823__auto___40762;
if(cljs.core.chunked_seq_QMARK_(seq__39932_40763__$1)){
var c__5525__auto___40765 = cljs.core.chunk_first(seq__39932_40763__$1);
var G__40769 = cljs.core.chunk_rest(seq__39932_40763__$1);
var G__40770 = c__5525__auto___40765;
var G__40771 = cljs.core.count(c__5525__auto___40765);
var G__40772 = (0);
seq__39932_40742 = G__40769;
chunk__39934_40743 = G__40770;
count__39935_40744 = G__40771;
i__39936_40745 = G__40772;
continue;
} else {
var child_40774 = cljs.core.first(seq__39932_40763__$1);
if(cljs.core.truth_(child_40774)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40774);


var G__40776 = cljs.core.next(seq__39932_40763__$1);
var G__40777 = null;
var G__40778 = (0);
var G__40779 = (0);
seq__39932_40742 = G__40776;
chunk__39934_40743 = G__40777;
count__39935_40744 = G__40778;
i__39936_40745 = G__40779;
continue;
} else {
var G__40787 = cljs.core.next(seq__39932_40763__$1);
var G__40788 = null;
var G__40789 = (0);
var G__40790 = (0);
seq__39932_40742 = G__40787;
chunk__39934_40743 = G__40788;
count__39935_40744 = G__40789;
i__39936_40745 = G__40790;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40741);
}


var G__40811 = seq__39897_40732;
var G__40812 = chunk__39898_40733;
var G__40813 = count__39899_40734;
var G__40814 = (i__39900_40735 + (1));
seq__39897_40732 = G__40811;
chunk__39898_40733 = G__40812;
count__39899_40734 = G__40813;
i__39900_40735 = G__40814;
continue;
} else {
var temp__5823__auto___40820 = cljs.core.seq(seq__39897_40732);
if(temp__5823__auto___40820){
var seq__39897_40822__$1 = temp__5823__auto___40820;
if(cljs.core.chunked_seq_QMARK_(seq__39897_40822__$1)){
var c__5525__auto___40823 = cljs.core.chunk_first(seq__39897_40822__$1);
var G__40825 = cljs.core.chunk_rest(seq__39897_40822__$1);
var G__40826 = c__5525__auto___40823;
var G__40827 = cljs.core.count(c__5525__auto___40823);
var G__40828 = (0);
seq__39897_40732 = G__40825;
chunk__39898_40733 = G__40826;
count__39899_40734 = G__40827;
i__39900_40735 = G__40828;
continue;
} else {
var child_struct_40834 = cljs.core.first(seq__39897_40822__$1);
var children_40836 = shadow.dom.dom_node(child_struct_40834);
if(cljs.core.seq_QMARK_(children_40836)){
var seq__39944_40838 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40836));
var chunk__39946_40839 = null;
var count__39947_40840 = (0);
var i__39948_40841 = (0);
while(true){
if((i__39948_40841 < count__39947_40840)){
var child_40844 = chunk__39946_40839.cljs$core$IIndexed$_nth$arity$2(null, i__39948_40841);
if(cljs.core.truth_(child_40844)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40844);


var G__40846 = seq__39944_40838;
var G__40847 = chunk__39946_40839;
var G__40848 = count__39947_40840;
var G__40849 = (i__39948_40841 + (1));
seq__39944_40838 = G__40846;
chunk__39946_40839 = G__40847;
count__39947_40840 = G__40848;
i__39948_40841 = G__40849;
continue;
} else {
var G__40850 = seq__39944_40838;
var G__40851 = chunk__39946_40839;
var G__40852 = count__39947_40840;
var G__40853 = (i__39948_40841 + (1));
seq__39944_40838 = G__40850;
chunk__39946_40839 = G__40851;
count__39947_40840 = G__40852;
i__39948_40841 = G__40853;
continue;
}
} else {
var temp__5823__auto___40859__$1 = cljs.core.seq(seq__39944_40838);
if(temp__5823__auto___40859__$1){
var seq__39944_40860__$1 = temp__5823__auto___40859__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39944_40860__$1)){
var c__5525__auto___40861 = cljs.core.chunk_first(seq__39944_40860__$1);
var G__40862 = cljs.core.chunk_rest(seq__39944_40860__$1);
var G__40863 = c__5525__auto___40861;
var G__40864 = cljs.core.count(c__5525__auto___40861);
var G__40865 = (0);
seq__39944_40838 = G__40862;
chunk__39946_40839 = G__40863;
count__39947_40840 = G__40864;
i__39948_40841 = G__40865;
continue;
} else {
var child_40866 = cljs.core.first(seq__39944_40860__$1);
if(cljs.core.truth_(child_40866)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40866);


var G__40867 = cljs.core.next(seq__39944_40860__$1);
var G__40868 = null;
var G__40869 = (0);
var G__40870 = (0);
seq__39944_40838 = G__40867;
chunk__39946_40839 = G__40868;
count__39947_40840 = G__40869;
i__39948_40841 = G__40870;
continue;
} else {
var G__40871 = cljs.core.next(seq__39944_40860__$1);
var G__40872 = null;
var G__40873 = (0);
var G__40874 = (0);
seq__39944_40838 = G__40871;
chunk__39946_40839 = G__40872;
count__39947_40840 = G__40873;
i__39948_40841 = G__40874;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40836);
}


var G__40876 = cljs.core.next(seq__39897_40822__$1);
var G__40877 = null;
var G__40878 = (0);
var G__40879 = (0);
seq__39897_40732 = G__40876;
chunk__39898_40733 = G__40877;
count__39899_40734 = G__40878;
i__39900_40735 = G__40879;
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
var seq__39966 = cljs.core.seq(node);
var chunk__39967 = null;
var count__39968 = (0);
var i__39969 = (0);
while(true){
if((i__39969 < count__39968)){
var n = chunk__39967.cljs$core$IIndexed$_nth$arity$2(null, i__39969);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__40902 = seq__39966;
var G__40903 = chunk__39967;
var G__40904 = count__39968;
var G__40905 = (i__39969 + (1));
seq__39966 = G__40902;
chunk__39967 = G__40903;
count__39968 = G__40904;
i__39969 = G__40905;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__39966);
if(temp__5823__auto__){
var seq__39966__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39966__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__39966__$1);
var G__40907 = cljs.core.chunk_rest(seq__39966__$1);
var G__40908 = c__5525__auto__;
var G__40909 = cljs.core.count(c__5525__auto__);
var G__40910 = (0);
seq__39966 = G__40907;
chunk__39967 = G__40908;
count__39968 = G__40909;
i__39969 = G__40910;
continue;
} else {
var n = cljs.core.first(seq__39966__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__40911 = cljs.core.next(seq__39966__$1);
var G__40912 = null;
var G__40913 = (0);
var G__40914 = (0);
seq__39966 = G__40911;
chunk__39967 = G__40912;
count__39968 = G__40913;
i__39969 = G__40914;
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
var G__39981 = arguments.length;
switch (G__39981) {
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
var G__39989 = arguments.length;
switch (G__39989) {
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
var G__39995 = arguments.length;
switch (G__39995) {
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
var len__5726__auto___40942 = arguments.length;
var i__5727__auto___40943 = (0);
while(true){
if((i__5727__auto___40943 < len__5726__auto___40942)){
args__5732__auto__.push((arguments[i__5727__auto___40943]));

var G__40947 = (i__5727__auto___40943 + (1));
i__5727__auto___40943 = G__40947;
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
var seq__40016_40961 = cljs.core.seq(nodes);
var chunk__40017_40962 = null;
var count__40018_40963 = (0);
var i__40019_40964 = (0);
while(true){
if((i__40019_40964 < count__40018_40963)){
var node_40970 = chunk__40017_40962.cljs$core$IIndexed$_nth$arity$2(null, i__40019_40964);
fragment.appendChild(shadow.dom._to_dom(node_40970));


var G__40983 = seq__40016_40961;
var G__40984 = chunk__40017_40962;
var G__40986 = count__40018_40963;
var G__40987 = (i__40019_40964 + (1));
seq__40016_40961 = G__40983;
chunk__40017_40962 = G__40984;
count__40018_40963 = G__40986;
i__40019_40964 = G__40987;
continue;
} else {
var temp__5823__auto___40993 = cljs.core.seq(seq__40016_40961);
if(temp__5823__auto___40993){
var seq__40016_40998__$1 = temp__5823__auto___40993;
if(cljs.core.chunked_seq_QMARK_(seq__40016_40998__$1)){
var c__5525__auto___41000 = cljs.core.chunk_first(seq__40016_40998__$1);
var G__41003 = cljs.core.chunk_rest(seq__40016_40998__$1);
var G__41004 = c__5525__auto___41000;
var G__41005 = cljs.core.count(c__5525__auto___41000);
var G__41006 = (0);
seq__40016_40961 = G__41003;
chunk__40017_40962 = G__41004;
count__40018_40963 = G__41005;
i__40019_40964 = G__41006;
continue;
} else {
var node_41012 = cljs.core.first(seq__40016_40998__$1);
fragment.appendChild(shadow.dom._to_dom(node_41012));


var G__41014 = cljs.core.next(seq__40016_40998__$1);
var G__41015 = null;
var G__41016 = (0);
var G__41017 = (0);
seq__40016_40961 = G__41014;
chunk__40017_40962 = G__41015;
count__40018_40963 = G__41016;
i__40019_40964 = G__41017;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq40015){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40015));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__40020_41022 = cljs.core.seq(scripts);
var chunk__40021_41024 = null;
var count__40022_41026 = (0);
var i__40023_41027 = (0);
while(true){
if((i__40023_41027 < count__40022_41026)){
var vec__40030_41030 = chunk__40021_41024.cljs$core$IIndexed$_nth$arity$2(null, i__40023_41027);
var script_tag_41031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40030_41030,(0),null);
var script_body_41032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40030_41030,(1),null);
eval(script_body_41032);


var G__41035 = seq__40020_41022;
var G__41036 = chunk__40021_41024;
var G__41037 = count__40022_41026;
var G__41038 = (i__40023_41027 + (1));
seq__40020_41022 = G__41035;
chunk__40021_41024 = G__41036;
count__40022_41026 = G__41037;
i__40023_41027 = G__41038;
continue;
} else {
var temp__5823__auto___41039 = cljs.core.seq(seq__40020_41022);
if(temp__5823__auto___41039){
var seq__40020_41041__$1 = temp__5823__auto___41039;
if(cljs.core.chunked_seq_QMARK_(seq__40020_41041__$1)){
var c__5525__auto___41042 = cljs.core.chunk_first(seq__40020_41041__$1);
var G__41043 = cljs.core.chunk_rest(seq__40020_41041__$1);
var G__41044 = c__5525__auto___41042;
var G__41045 = cljs.core.count(c__5525__auto___41042);
var G__41046 = (0);
seq__40020_41022 = G__41043;
chunk__40021_41024 = G__41044;
count__40022_41026 = G__41045;
i__40023_41027 = G__41046;
continue;
} else {
var vec__40037_41048 = cljs.core.first(seq__40020_41041__$1);
var script_tag_41049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40037_41048,(0),null);
var script_body_41050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40037_41048,(1),null);
eval(script_body_41050);


var G__41051 = cljs.core.next(seq__40020_41041__$1);
var G__41052 = null;
var G__41053 = (0);
var G__41054 = (0);
seq__40020_41022 = G__41051;
chunk__40021_41024 = G__41052;
count__40022_41026 = G__41053;
i__40023_41027 = G__41054;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__40040){
var vec__40041 = p__40040;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40041,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40041,(1),null);
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
var G__40045 = arguments.length;
switch (G__40045) {
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
var seq__40046 = cljs.core.seq(style_keys);
var chunk__40047 = null;
var count__40048 = (0);
var i__40049 = (0);
while(true){
if((i__40049 < count__40048)){
var it = chunk__40047.cljs$core$IIndexed$_nth$arity$2(null, i__40049);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__41112 = seq__40046;
var G__41113 = chunk__40047;
var G__41114 = count__40048;
var G__41115 = (i__40049 + (1));
seq__40046 = G__41112;
chunk__40047 = G__41113;
count__40048 = G__41114;
i__40049 = G__41115;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__40046);
if(temp__5823__auto__){
var seq__40046__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40046__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__40046__$1);
var G__41116 = cljs.core.chunk_rest(seq__40046__$1);
var G__41117 = c__5525__auto__;
var G__41118 = cljs.core.count(c__5525__auto__);
var G__41119 = (0);
seq__40046 = G__41116;
chunk__40047 = G__41117;
count__40048 = G__41118;
i__40049 = G__41119;
continue;
} else {
var it = cljs.core.first(seq__40046__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__41121 = cljs.core.next(seq__40046__$1);
var G__41122 = null;
var G__41123 = (0);
var G__41124 = (0);
seq__40046 = G__41121;
chunk__40047 = G__41122;
count__40048 = G__41123;
i__40049 = G__41124;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k40054,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__40062 = k40054;
var G__40062__$1 = (((G__40062 instanceof cljs.core.Keyword))?G__40062.fqn:null);
switch (G__40062__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40054,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__40063){
var vec__40064 = p__40063;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40064,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40064,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40053){
var self__ = this;
var G__40053__$1 = this;
return (new cljs.core.RecordIter((0),G__40053__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40055,other40056){
var self__ = this;
var this40055__$1 = this;
return (((!((other40056 == null)))) && ((((this40055__$1.constructor === other40056.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40055__$1.x,other40056.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40055__$1.y,other40056.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40055__$1.__extmap,other40056.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k40054){
var self__ = this;
var this__5307__auto____$1 = this;
var G__40068 = k40054;
var G__40068__$1 = (((G__40068 instanceof cljs.core.Keyword))?G__40068.fqn:null);
switch (G__40068__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40054);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__40053){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__40069 = cljs.core.keyword_identical_QMARK_;
var expr__40070 = k__5309__auto__;
if(cljs.core.truth_((pred__40069.cljs$core$IFn$_invoke$arity$2 ? pred__40069.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__40070) : pred__40069.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__40070)))){
return (new shadow.dom.Coordinate(G__40053,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40069.cljs$core$IFn$_invoke$arity$2 ? pred__40069.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__40070) : pred__40069.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__40070)))){
return (new shadow.dom.Coordinate(self__.x,G__40053,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__40053),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__40053){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__40053,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__40057){
var extmap__5342__auto__ = (function (){var G__40073 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40057,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__40057)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40073);
} else {
return G__40073;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__40057),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__40057),null,cljs.core.not_empty(extmap__5342__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k40077,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__40083 = k40077;
var G__40083__$1 = (((G__40083 instanceof cljs.core.Keyword))?G__40083.fqn:null);
switch (G__40083__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40077,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__40084){
var vec__40085 = p__40084;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40085,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40085,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40076){
var self__ = this;
var G__40076__$1 = this;
return (new cljs.core.RecordIter((0),G__40076__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40078,other40079){
var self__ = this;
var this40078__$1 = this;
return (((!((other40079 == null)))) && ((((this40078__$1.constructor === other40079.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40078__$1.w,other40079.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40078__$1.h,other40079.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40078__$1.__extmap,other40079.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k40077){
var self__ = this;
var this__5307__auto____$1 = this;
var G__40092 = k40077;
var G__40092__$1 = (((G__40092 instanceof cljs.core.Keyword))?G__40092.fqn:null);
switch (G__40092__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40077);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__40076){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__40093 = cljs.core.keyword_identical_QMARK_;
var expr__40094 = k__5309__auto__;
if(cljs.core.truth_((pred__40093.cljs$core$IFn$_invoke$arity$2 ? pred__40093.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__40094) : pred__40093.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__40094)))){
return (new shadow.dom.Size(G__40076,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40093.cljs$core$IFn$_invoke$arity$2 ? pred__40093.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__40094) : pred__40093.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__40094)))){
return (new shadow.dom.Size(self__.w,G__40076,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__40076),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__40076){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__40076,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__40080){
var extmap__5342__auto__ = (function (){var G__40103 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40080,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__40080)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40103);
} else {
return G__40103;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__40080),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__40080),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
var G__41248 = (i + (1));
var G__41249 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__41248;
ret = G__41249;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40138){
var vec__40140 = p__40138;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40140,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40140,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__40151 = arguments.length;
switch (G__40151) {
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
var G__41264 = ps;
var G__41265 = (i + (1));
el__$1 = G__41264;
i = G__41265;
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
var vec__40195 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40195,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40195,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40195,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__40199_41275 = cljs.core.seq(props);
var chunk__40200_41276 = null;
var count__40201_41277 = (0);
var i__40202_41278 = (0);
while(true){
if((i__40202_41278 < count__40201_41277)){
var vec__40232_41279 = chunk__40200_41276.cljs$core$IIndexed$_nth$arity$2(null, i__40202_41278);
var k_41280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40232_41279,(0),null);
var v_41281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40232_41279,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_41280);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_41280),v_41281);


var G__41283 = seq__40199_41275;
var G__41284 = chunk__40200_41276;
var G__41285 = count__40201_41277;
var G__41286 = (i__40202_41278 + (1));
seq__40199_41275 = G__41283;
chunk__40200_41276 = G__41284;
count__40201_41277 = G__41285;
i__40202_41278 = G__41286;
continue;
} else {
var temp__5823__auto___41287 = cljs.core.seq(seq__40199_41275);
if(temp__5823__auto___41287){
var seq__40199_41288__$1 = temp__5823__auto___41287;
if(cljs.core.chunked_seq_QMARK_(seq__40199_41288__$1)){
var c__5525__auto___41289 = cljs.core.chunk_first(seq__40199_41288__$1);
var G__41290 = cljs.core.chunk_rest(seq__40199_41288__$1);
var G__41291 = c__5525__auto___41289;
var G__41292 = cljs.core.count(c__5525__auto___41289);
var G__41293 = (0);
seq__40199_41275 = G__41290;
chunk__40200_41276 = G__41291;
count__40201_41277 = G__41292;
i__40202_41278 = G__41293;
continue;
} else {
var vec__40245_41294 = cljs.core.first(seq__40199_41288__$1);
var k_41295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40245_41294,(0),null);
var v_41296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40245_41294,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_41295);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_41295),v_41296);


var G__41299 = cljs.core.next(seq__40199_41288__$1);
var G__41300 = null;
var G__41301 = (0);
var G__41302 = (0);
seq__40199_41275 = G__41299;
chunk__40200_41276 = G__41300;
count__40201_41277 = G__41301;
i__40202_41278 = G__41302;
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
var vec__40263 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40263,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40263,(1),null);
var seq__40266_41305 = cljs.core.seq(node_children);
var chunk__40268_41306 = null;
var count__40269_41307 = (0);
var i__40270_41308 = (0);
while(true){
if((i__40270_41308 < count__40269_41307)){
var child_struct_41309 = chunk__40268_41306.cljs$core$IIndexed$_nth$arity$2(null, i__40270_41308);
if((!((child_struct_41309 == null)))){
if(typeof child_struct_41309 === 'string'){
var text_41310 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41310),child_struct_41309].join(''));
} else {
var children_41311 = shadow.dom.svg_node(child_struct_41309);
if(cljs.core.seq_QMARK_(children_41311)){
var seq__40324_41312 = cljs.core.seq(children_41311);
var chunk__40326_41313 = null;
var count__40327_41314 = (0);
var i__40328_41315 = (0);
while(true){
if((i__40328_41315 < count__40327_41314)){
var child_41316 = chunk__40326_41313.cljs$core$IIndexed$_nth$arity$2(null, i__40328_41315);
if(cljs.core.truth_(child_41316)){
node.appendChild(child_41316);


var G__41318 = seq__40324_41312;
var G__41319 = chunk__40326_41313;
var G__41320 = count__40327_41314;
var G__41321 = (i__40328_41315 + (1));
seq__40324_41312 = G__41318;
chunk__40326_41313 = G__41319;
count__40327_41314 = G__41320;
i__40328_41315 = G__41321;
continue;
} else {
var G__41322 = seq__40324_41312;
var G__41323 = chunk__40326_41313;
var G__41324 = count__40327_41314;
var G__41325 = (i__40328_41315 + (1));
seq__40324_41312 = G__41322;
chunk__40326_41313 = G__41323;
count__40327_41314 = G__41324;
i__40328_41315 = G__41325;
continue;
}
} else {
var temp__5823__auto___41326 = cljs.core.seq(seq__40324_41312);
if(temp__5823__auto___41326){
var seq__40324_41327__$1 = temp__5823__auto___41326;
if(cljs.core.chunked_seq_QMARK_(seq__40324_41327__$1)){
var c__5525__auto___41328 = cljs.core.chunk_first(seq__40324_41327__$1);
var G__41329 = cljs.core.chunk_rest(seq__40324_41327__$1);
var G__41330 = c__5525__auto___41328;
var G__41331 = cljs.core.count(c__5525__auto___41328);
var G__41332 = (0);
seq__40324_41312 = G__41329;
chunk__40326_41313 = G__41330;
count__40327_41314 = G__41331;
i__40328_41315 = G__41332;
continue;
} else {
var child_41333 = cljs.core.first(seq__40324_41327__$1);
if(cljs.core.truth_(child_41333)){
node.appendChild(child_41333);


var G__41334 = cljs.core.next(seq__40324_41327__$1);
var G__41335 = null;
var G__41336 = (0);
var G__41337 = (0);
seq__40324_41312 = G__41334;
chunk__40326_41313 = G__41335;
count__40327_41314 = G__41336;
i__40328_41315 = G__41337;
continue;
} else {
var G__41338 = cljs.core.next(seq__40324_41327__$1);
var G__41339 = null;
var G__41340 = (0);
var G__41341 = (0);
seq__40324_41312 = G__41338;
chunk__40326_41313 = G__41339;
count__40327_41314 = G__41340;
i__40328_41315 = G__41341;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41311);
}
}


var G__41342 = seq__40266_41305;
var G__41343 = chunk__40268_41306;
var G__41344 = count__40269_41307;
var G__41345 = (i__40270_41308 + (1));
seq__40266_41305 = G__41342;
chunk__40268_41306 = G__41343;
count__40269_41307 = G__41344;
i__40270_41308 = G__41345;
continue;
} else {
var G__41346 = seq__40266_41305;
var G__41347 = chunk__40268_41306;
var G__41348 = count__40269_41307;
var G__41349 = (i__40270_41308 + (1));
seq__40266_41305 = G__41346;
chunk__40268_41306 = G__41347;
count__40269_41307 = G__41348;
i__40270_41308 = G__41349;
continue;
}
} else {
var temp__5823__auto___41350 = cljs.core.seq(seq__40266_41305);
if(temp__5823__auto___41350){
var seq__40266_41352__$1 = temp__5823__auto___41350;
if(cljs.core.chunked_seq_QMARK_(seq__40266_41352__$1)){
var c__5525__auto___41353 = cljs.core.chunk_first(seq__40266_41352__$1);
var G__41354 = cljs.core.chunk_rest(seq__40266_41352__$1);
var G__41355 = c__5525__auto___41353;
var G__41356 = cljs.core.count(c__5525__auto___41353);
var G__41357 = (0);
seq__40266_41305 = G__41354;
chunk__40268_41306 = G__41355;
count__40269_41307 = G__41356;
i__40270_41308 = G__41357;
continue;
} else {
var child_struct_41359 = cljs.core.first(seq__40266_41352__$1);
if((!((child_struct_41359 == null)))){
if(typeof child_struct_41359 === 'string'){
var text_41360 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41360),child_struct_41359].join(''));
} else {
var children_41361 = shadow.dom.svg_node(child_struct_41359);
if(cljs.core.seq_QMARK_(children_41361)){
var seq__40382_41362 = cljs.core.seq(children_41361);
var chunk__40384_41363 = null;
var count__40385_41364 = (0);
var i__40386_41365 = (0);
while(true){
if((i__40386_41365 < count__40385_41364)){
var child_41366 = chunk__40384_41363.cljs$core$IIndexed$_nth$arity$2(null, i__40386_41365);
if(cljs.core.truth_(child_41366)){
node.appendChild(child_41366);


var G__41368 = seq__40382_41362;
var G__41369 = chunk__40384_41363;
var G__41370 = count__40385_41364;
var G__41371 = (i__40386_41365 + (1));
seq__40382_41362 = G__41368;
chunk__40384_41363 = G__41369;
count__40385_41364 = G__41370;
i__40386_41365 = G__41371;
continue;
} else {
var G__41372 = seq__40382_41362;
var G__41373 = chunk__40384_41363;
var G__41374 = count__40385_41364;
var G__41375 = (i__40386_41365 + (1));
seq__40382_41362 = G__41372;
chunk__40384_41363 = G__41373;
count__40385_41364 = G__41374;
i__40386_41365 = G__41375;
continue;
}
} else {
var temp__5823__auto___41376__$1 = cljs.core.seq(seq__40382_41362);
if(temp__5823__auto___41376__$1){
var seq__40382_41377__$1 = temp__5823__auto___41376__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40382_41377__$1)){
var c__5525__auto___41378 = cljs.core.chunk_first(seq__40382_41377__$1);
var G__41379 = cljs.core.chunk_rest(seq__40382_41377__$1);
var G__41380 = c__5525__auto___41378;
var G__41381 = cljs.core.count(c__5525__auto___41378);
var G__41382 = (0);
seq__40382_41362 = G__41379;
chunk__40384_41363 = G__41380;
count__40385_41364 = G__41381;
i__40386_41365 = G__41382;
continue;
} else {
var child_41383 = cljs.core.first(seq__40382_41377__$1);
if(cljs.core.truth_(child_41383)){
node.appendChild(child_41383);


var G__41384 = cljs.core.next(seq__40382_41377__$1);
var G__41385 = null;
var G__41386 = (0);
var G__41387 = (0);
seq__40382_41362 = G__41384;
chunk__40384_41363 = G__41385;
count__40385_41364 = G__41386;
i__40386_41365 = G__41387;
continue;
} else {
var G__41389 = cljs.core.next(seq__40382_41377__$1);
var G__41390 = null;
var G__41391 = (0);
var G__41392 = (0);
seq__40382_41362 = G__41389;
chunk__40384_41363 = G__41390;
count__40385_41364 = G__41391;
i__40386_41365 = G__41392;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41361);
}
}


var G__41394 = cljs.core.next(seq__40266_41352__$1);
var G__41395 = null;
var G__41396 = (0);
var G__41397 = (0);
seq__40266_41305 = G__41394;
chunk__40268_41306 = G__41395;
count__40269_41307 = G__41396;
i__40270_41308 = G__41397;
continue;
} else {
var G__41399 = cljs.core.next(seq__40266_41352__$1);
var G__41400 = null;
var G__41401 = (0);
var G__41402 = (0);
seq__40266_41305 = G__41399;
chunk__40268_41306 = G__41400;
count__40269_41307 = G__41401;
i__40270_41308 = G__41402;
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
var len__5726__auto___41429 = arguments.length;
var i__5727__auto___41430 = (0);
while(true){
if((i__5727__auto___41430 < len__5726__auto___41429)){
args__5732__auto__.push((arguments[i__5727__auto___41430]));

var G__41431 = (i__5727__auto___41430 + (1));
i__5727__auto___41430 = G__41431;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq40437){
var G__40438 = cljs.core.first(seq40437);
var seq40437__$1 = cljs.core.next(seq40437);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40438,seq40437__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
