goog.provide('portfolio.ui.components.hud');
portfolio.ui.components.hud.render_hud = (function portfolio$ui$components$hud$render_hud(var_args){
var args__5732__auto__ = [];
var len__5726__auto___50942 = arguments.length;
var i__5727__auto___50943 = (0);
while(true){
if((i__5727__auto___50943 < len__5726__auto___50942)){
args__5732__auto__.push((arguments[i__5727__auto___50943]));

var G__50944 = (i__5727__auto___50943 + (1));
i__5727__auto___50943 = G__50944;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return portfolio.ui.components.hud.render_hud.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(portfolio.ui.components.hud.render_hud.cljs$core$IFn$_invoke$arity$variadic = (function (p__50940,children){
var map__50941 = p__50940;
var map__50941__$1 = cljs.core.__destructure_map(map__50941);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50941__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50941__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hud.light","div.hud.light",1294929388),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"leaving-style","leaving-style",599773625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null),new cljs.core.Keyword(null,"mounted-style","mounted-style",783212842),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid var(--soft-separator)",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(8),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"rgb(170, 170, 170) 0 0 1px",new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"transition","transition",765692007),"opacity 0.25s"], null),style], 0))], null),(cljs.core.truth_(action)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),"right",new cljs.core.Keyword(null,"margin","margin",-995903681),(20)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.clickable","button.clickable",2112460976),cljs.core.PersistentArrayMap.EMPTY,phosphor.icons.render.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"color","color",1011675173),"var(--fg)"], null)], 0))], null)], null):null)], null),children);
}));

(portfolio.ui.components.hud.render_hud.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.ui.components.hud.render_hud.cljs$lang$applyTo = (function (seq50938){
var G__50939 = cljs.core.first(seq50938);
var seq50938__$1 = cljs.core.next(seq50938);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50939,seq50938__$1);
}));


//# sourceMappingURL=portfolio.ui.components.hud.js.map
