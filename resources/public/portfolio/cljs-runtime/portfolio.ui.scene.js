goog.provide('portfolio.ui.scene');
portfolio.ui.scene.atom_QMARK_ = (function portfolio$ui$scene$atom_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x);
}
});
portfolio.ui.scene.get_param_overrides = (function portfolio$ui$scene$get_param_overrides(state,scene){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene),new cljs.core.Keyword(null,"overrides","overrides",1738628867)], null));
});
portfolio.ui.scene.get_param_STAR_ = (function portfolio$ui$scene$get_param_STAR_(state,scene,param){
if(cljs.core.map_QMARK_(param)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([param,portfolio.ui.scene.get_param_overrides(state,scene)], 0));
} else {
return param;
}
});
portfolio.ui.scene.get_params = (function portfolio$ui$scene$get_params(state,scene){
if(cljs.core.map_QMARK_(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(scene))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49997){
var vec__49998 = p__49997;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49998,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49998,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,portfolio.ui.scene.get_param_STAR_(state,scene,v)], null);
}),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(scene)));
} else {
if(cljs.core.coll_QMARK_(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(scene))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49996_SHARP_){
return portfolio.ui.scene.get_param_STAR_(state,scene,p1__49996_SHARP_);
}),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(scene));
} else {
return portfolio.ui.scene.get_param_STAR_(state,scene,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(scene));

}
}
});
portfolio.ui.scene.get_param_data = (function portfolio$ui$scene$get_param_data(params){
return clojure.walk.postwalk((function (x){
if(portfolio.ui.scene.atom_QMARK_(x)){
return cljs.core.deref(x);
} else {
return x;
}
}),params);
});
portfolio.ui.scene.prep_scene_fn = (function portfolio$ui$scene$prep_scene_fn(state,scene){
var params = portfolio.ui.scene.get_params(state,scene);
var G__50006 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(scene,new cljs.core.Keyword(null,"component-params","component-params",-1900426525),portfolio.ui.code.code_str(params),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rendered-data","rendered-data",1076820229),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),portfolio.ui.scene.get_param_data(params),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene),new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336).cljs$core$IFn$_invoke$arity$1(scene)], null)], 0));
var G__50006__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(scene))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50006,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function (){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(scene);
})):G__50006);
if(cljs.core.truth_(new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(scene))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50006__$1,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__50012__delegate = function (rest__50003_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(scene),params,rest__50003_SHARP_);
};
var G__50012 = function (var_args){
var rest__50003_SHARP_ = null;
if (arguments.length > 0) {
var G__50013__i = 0, G__50013__a = new Array(arguments.length -  0);
while (G__50013__i < G__50013__a.length) {G__50013__a[G__50013__i] = arguments[G__50013__i + 0]; ++G__50013__i;}
  rest__50003_SHARP_ = new cljs.core.IndexedSeq(G__50013__a,0,null);
} 
return G__50012__delegate.call(this,rest__50003_SHARP_);};
G__50012.cljs$lang$maxFixedArity = 0;
G__50012.cljs$lang$applyTo = (function (arglist__50014){
var rest__50003_SHARP_ = cljs.core.seq(arglist__50014);
return G__50012__delegate(rest__50003_SHARP_);
});
G__50012.cljs$core$IFn$_invoke$arity$variadic = G__50012__delegate;
return G__50012;
})()
);
} else {
return G__50006__$1;
}
});
portfolio.ui.scene.sort_key = (function portfolio$ui$scene$sort_key(scene){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(scene),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(scene)], null);
});
portfolio.ui.scene.get_scene_atoms = (function portfolio$ui$scene$get_scene_atoms(p__50008){
var map__50009 = p__50008;
var map__50009__$1 = cljs.core.__destructure_map(map__50009);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50009__$1,new cljs.core.Keyword(null,"params","params",710516235));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(portfolio.ui.scene.atom_QMARK_,cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.identity,params));
});

//# sourceMappingURL=portfolio.ui.scene.js.map
