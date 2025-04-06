goog.provide('portfolio.ui.components.menu_bar');
/**
 * 
 */
portfolio.ui.components.menu_bar.MenuBar = (function (){var G__50945 = (function (p__50947){
var map__50948 = p__50947;
var map__50948__$1 = cljs.core.__destructure_map(map__50948);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50948__$1,new cljs.core.Keyword(null,"title","title",636505583));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50948__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var illustration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50948__$1,new cljs.core.Keyword(null,"illustration","illustration",-48860973));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50948__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),(20),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),(10),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),(cljs.core.truth_(illustration)?phosphor.icons.render.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(illustration),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"small","small",2133478704),size))?(16):(24)),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(illustration)], null)], 0)):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"small","small",2133478704),size))?new cljs.core.Keyword(null,"h4","h4",2004862993):new cljs.core.Keyword(null,"h3","h3",2067611163)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),(8)], null)], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(phosphor.icons.render.cljs$core$IFn$_invoke$arity$variadic((function (){
phosphor.icons.load_icon_BANG_(new cljs.core.Keyword("phosphor.regular","caret-right","phosphor.regular/caret-right",-687644430),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 256 256"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"256",new cljs.core.Keyword(null,"height","height",1025178622),"256",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"points","points",-1486596883),"96 48 176 128 96 208",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null)], null));

return new cljs.core.Keyword("phosphor.regular","caret-right","phosphor.regular/caret-right",-687644430);
})()
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null)], 0)),(function (){var iter__5480__auto__ = (function portfolio$ui$components$menu_bar$iter__50958(s__50959){
return (new cljs.core.LazySeq(null,(function (){
var s__50959__$1 = s__50959;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__50959__$1);
if(temp__5823__auto__){
var s__50959__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50959__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__50959__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__50961 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__50960 = (0);
while(true){
if((i__50960 < size__5479__auto__)){
var map__50964 = cljs.core._nth(c__5478__auto__,i__50960);
var map__50964__$1 = cljs.core.__destructure_map(map__50964);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50964__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50964__$1,new cljs.core.Keyword(null,"url","url",276297046));
cljs.core.chunk_append(b__50961,(cljs.core.truth_(url)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"var(--subdued-link)"], null),new cljs.core.Keyword(null,"href","href",-793805698),url], null),text], null):text));

var G__50976 = (i__50960 + (1));
i__50960 = G__50976;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50961),portfolio$ui$components$menu_bar$iter__50958(cljs.core.chunk_rest(s__50959__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50961),null);
}
} else {
var map__50975 = cljs.core.first(s__50959__$2);
var map__50975__$1 = cljs.core.__destructure_map(map__50975);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50975__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50975__$1,new cljs.core.Keyword(null,"url","url",276297046));
return cljs.core.cons((cljs.core.truth_(url)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"var(--subdued-link)"], null),new cljs.core.Keyword(null,"href","href",-793805698),url], null),text], null):text),portfolio$ui$components$menu_bar$iter__50958(cljs.core.rest(s__50959__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(title);
})())], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(action)], null),phosphor.icons.render.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null)], 0))], null):null)], null);
});
var G__50946 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.menu-bar/MenuBar"], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__50945,G__50946) : dumdom.core.component.call(null, G__50945,G__50946));
})();

//# sourceMappingURL=portfolio.ui.components.menu_bar.js.map
