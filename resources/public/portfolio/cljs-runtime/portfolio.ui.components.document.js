goog.provide('portfolio.ui.components.document');
/**
 * 
 */
portfolio.ui.components.document.Document = (function (){var G__50470 = (function (p__50472){
var map__50473 = p__50472;
var map__50473__$1 = cljs.core.__destructure_map(map__50473);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50473__$1,new cljs.core.Keyword(null,"title","title",636505583));
var sections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50473__$1,new cljs.core.Keyword(null,"sections","sections",-886710106));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.document.dark.contrast","div.document.dark.contrast",-1889138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h1","h1.h1",-1010377955),title], null),(function (){var iter__5480__auto__ = (function portfolio$ui$components$document$iter__50476(s__50477){
return (new cljs.core.LazySeq(null,(function (){
var s__50477__$1 = s__50477;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__50477__$1);
if(temp__5823__auto__){
var s__50477__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50477__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__50477__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__50479 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__50478 = (0);
while(true){
if((i__50478 < size__5479__auto__)){
var section = cljs.core._nth(c__5478__auto__,i__50478);
cljs.core.chunk_append(b__50479,(function (){var G__50483 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(section);
var G__50483__$1 = (((G__50483 instanceof cljs.core.Keyword))?G__50483.fqn:null);
switch (G__50483__$1) {
case "markdown":
return (portfolio.ui.components.markdown.Markdown.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.markdown.Markdown.cljs$core$IFn$_invoke$arity$1(section) : portfolio.ui.components.markdown.Markdown.call(null, section));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50483__$1)].join('')));

}
})());

var G__50490 = (i__50478 + (1));
i__50478 = G__50490;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50479),portfolio$ui$components$document$iter__50476(cljs.core.chunk_rest(s__50477__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50479),null);
}
} else {
var section = cljs.core.first(s__50477__$2);
return cljs.core.cons((function (){var G__50485 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(section);
var G__50485__$1 = (((G__50485 instanceof cljs.core.Keyword))?G__50485.fqn:null);
switch (G__50485__$1) {
case "markdown":
return (portfolio.ui.components.markdown.Markdown.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.markdown.Markdown.cljs$core$IFn$_invoke$arity$1(section) : portfolio.ui.components.markdown.Markdown.call(null, section));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50485__$1)].join('')));

}
})(),portfolio$ui$components$document$iter__50476(cljs.core.rest(s__50477__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(sections);
})()], null);
});
var G__50471 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.document/Document"], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__50470,G__50471) : dumdom.core.component.call(null, G__50470,G__50471));
})();

//# sourceMappingURL=portfolio.ui.components.document.js.map
