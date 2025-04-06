goog.provide('portfolio.ui.components.tab_bar');
/**
 * 
 */
portfolio.ui.components.tab_bar.TabBar = (function (){var G__50949 = (function (p__50951){
var map__50952 = p__50951;
var map__50952__$1 = cljs.core.__destructure_map(map__50952);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50952__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = (function portfolio$ui$components$tab_bar$iter__50953(s__50954){
return (new cljs.core.LazySeq(null,(function (){
var s__50954__$1 = s__50954;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__50954__$1);
if(temp__5823__auto__){
var s__50954__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50954__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__50954__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__50956 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__50955 = (0);
while(true){
if((i__50955 < size__5479__auto__)){
var map__50957 = cljs.core._nth(c__5478__auto__,i__50955);
var map__50957__$1 = cljs.core.__destructure_map(map__50957);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50957__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50957__$1,new cljs.core.Keyword(null,"url","url",276297046));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50957__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
cljs.core.chunk_append(b__50956,(cljs.core.truth_(selected_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"2px solid var(--highlight-color)",new cljs.core.Keyword(null,"color","color",1011675173),"var(--highlight-color)"], null)], null),title], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px",new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null),new cljs.core.Keyword(null,"href","href",-793805698),url], null),title], null)));

var G__50963 = (i__50955 + (1));
i__50955 = G__50963;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50956),portfolio$ui$components$tab_bar$iter__50953(cljs.core.chunk_rest(s__50954__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50956),null);
}
} else {
var map__50962 = cljs.core.first(s__50954__$2);
var map__50962__$1 = cljs.core.__destructure_map(map__50962);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50962__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50962__$1,new cljs.core.Keyword(null,"url","url",276297046));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50962__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
return cljs.core.cons((cljs.core.truth_(selected_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"2px solid var(--highlight-color)",new cljs.core.Keyword(null,"color","color",1011675173),"var(--highlight-color)"], null)], null),title], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px",new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null),new cljs.core.Keyword(null,"href","href",-793805698),url], null),title], null)),portfolio$ui$components$tab_bar$iter__50953(cljs.core.rest(s__50954__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(tabs);
})()], null)], null);
});
var G__50950 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.tab-bar/TabBar"], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__50949,G__50950) : dumdom.core.component.call(null, G__50949,G__50950));
})();

//# sourceMappingURL=portfolio.ui.components.tab_bar.js.map
