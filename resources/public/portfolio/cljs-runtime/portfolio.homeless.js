goog.provide('portfolio.homeless');
portfolio.homeless.debounce = (function portfolio$homeless$debounce(f,ms){
var timer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function() { 
var G__46265__delegate = function (args){
var G__46248_46266 = cljs.core.deref(timer);
if((G__46248_46266 == null)){
} else {
clearTimeout(G__46248_46266);
}

return cljs.core.reset_BANG_(timer,setTimeout((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),ms));
};
var G__46265 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46272__i = 0, G__46272__a = new Array(arguments.length -  0);
while (G__46272__i < G__46272__a.length) {G__46272__a[G__46272__i] = arguments[G__46272__i + 0]; ++G__46272__i;}
  args = new cljs.core.IndexedSeq(G__46272__a,0,null);
} 
return G__46265__delegate.call(this,args);};
G__46265.cljs$lang$maxFixedArity = 0;
G__46265.cljs$lang$applyTo = (function (arglist__46273){
var args = cljs.core.seq(arglist__46273);
return G__46265__delegate(args);
});
G__46265.cljs$core$IFn$_invoke$arity$variadic = G__46265__delegate;
return G__46265;
})()
;
});
portfolio.homeless.get_words = (function portfolio$homeless$get_words(s){
if(cljs.core.truth_(cljs.core.not_empty(s))){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/[\- ]+/);
} else {
return null;
}
});
portfolio.homeless.__GT_title = (function portfolio$homeless$__GT_title(s){
return clojure.string.capitalize(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",portfolio.homeless.get_words(s)));
});
portfolio.homeless.title_case = (function portfolio$homeless$title_case(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,portfolio.homeless.get_words(s)));
});

//# sourceMappingURL=portfolio.homeless.js.map
