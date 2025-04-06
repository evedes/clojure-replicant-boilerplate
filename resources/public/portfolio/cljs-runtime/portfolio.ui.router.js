goog.provide('portfolio.ui.router');
portfolio.ui.router.parse_qs_val = (function portfolio$ui$router$parse_qs_val(v){
var v__$1 = decodeURIComponent(v);
if(cljs.core.truth_(cljs.core.re_find(/^\d+$/,v__$1))){
return parseInt(v__$1,(10));
} else {
if(cljs.core.truth_(cljs.core.re_find(/^\d+\.\d+$/,v__$1))){
return parseFloat(v__$1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",v__$1)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",v__$1)){
return false;
} else {
return v__$1;

}
}
}
}
});
portfolio.ui.router.parse_key = (function portfolio$ui$router$parse_key(k){
if(cljs.core.truth_(cljs.core.re_find(/__/,k))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(portfolio.ui.router.parse_key,clojure.string.split.cljs$core$IFn$_invoke$arity$2(k,/__/));
} else {
if(cljs.core.truth_(cljs.core.re_find(/^\d+$/,k))){
return parseInt(k,(10));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);

}
}
});
/**
 * Parse a query string into a map with keyword keys. Query params that have no
 *   value (e.g. `...&key&other-key`) will be parsed with `true` as the value.
 */
portfolio.ui.router.parse_query_params = (function portfolio$ui$router$parse_query_params(query_string){
var G__46544 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(query_string,/&/);
var G__46544__$1 = (((G__46544 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,G__46544));
var G__46544__$2 = (((G__46544__$1 == null))?null:cljs.core.seq(G__46544__$1));
var G__46544__$3 = (((G__46544__$2 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
if(cljs.core.truth_(cljs.core.re_find(/=/,s))){
var vec__46553 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/=/);
var seq__46554 = cljs.core.seq(vec__46553);
var first__46555 = cljs.core.first(seq__46554);
var seq__46554__$1 = cljs.core.next(seq__46554);
var k = first__46555;
var v = seq__46554__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio.ui.router.parse_key(k),portfolio.ui.router.parse_qs_val(clojure.string.join.cljs$core$IFn$_invoke$arity$2("=",v))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio.ui.router.parse_key(s),true], null);
}
}),G__46544__$2));
if((G__46544__$3 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46544__$3);
}
});
portfolio.ui.router.get_location = (function portfolio$ui$router$get_location(url){
var vec__46565 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/#/);
var url__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46565,(0),null);
var hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46565,(1),null);
var vec__46568 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(url__$1,/\?/);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46568,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46568,(1),null);
var G__46572 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path], null);
var G__46572__$1 = ((typeof query === 'string')?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46572,new cljs.core.Keyword(null,"query-params","query-params",900640534),portfolio.ui.router.parse_query_params(query)):G__46572);
if(typeof hash === 'string'){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46572__$1,new cljs.core.Keyword(null,"hash","hash",-13781596),hash);
} else {
return G__46572__$1;
}
});
portfolio.ui.router.blank_QMARK_ = (function portfolio$ui$router$blank_QMARK_(v){
return (((v == null)) || (((v === false) || (((((cljs.core.coll_QMARK_(v)) && (cljs.core.empty_QMARK_(v)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,"")))))));
});
portfolio.ui.router.stringify_key = (function portfolio$ui$router$stringify_key(k){
if((k instanceof cljs.core.Keyword)){
return [(function (){var temp__5823__auto__ = cljs.core.namespace(k);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [ns,"/"].join('');
} else {
return null;
}
})(),cljs.core.name(k)].join('');
} else {
if(cljs.core.vector_QMARK_(k)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("__",cljs.core.map.cljs$core$IFn$_invoke$arity$2(portfolio.ui.router.stringify_key,k));
} else {
return k;

}
}
});
/**
 * Encode a map as a query string. Empty values (nil, empty strings, empty
 *   collections, false values) are omitted from the resulting string.
 */
portfolio.ui.router.encode_query_params = (function portfolio$ui$router$encode_query_params(params){
if(cljs.core.empty_QMARK_(params)){
return "";
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46629){
var vec__46632 = p__46629;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46632,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46632,(1),null);
var k__$1 = portfolio.ui.router.stringify_key(k);
if(v === true){
return k__$1;
} else {
if((v instanceof cljs.core.Keyword)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__$1),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent([(function (){var temp__5823__auto__ = cljs.core.namespace(v);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [ns,"/"].join('');
} else {
return null;
}
})(),cljs.core.name(v)].join('')))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__$1),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(v))].join('');

}
}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(portfolio.ui.router.blank_QMARK_,cljs.core.second),params)));
}
});
portfolio.ui.router.get_url = (function portfolio$ui$router$get_url(location){
var qs = portfolio.ui.router.encode_query_params(new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(location));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(location)),((cljs.core.empty_QMARK_(qs))?null:["?",qs].join('')),(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(location);
if(cljs.core.truth_(temp__5823__auto__)){
var hash = temp__5823__auto__;
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join('');
} else {
return null;
}
})()].join('');
});

//# sourceMappingURL=portfolio.ui.router.js.map
