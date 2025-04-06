goog.provide('portfolio.ui.components.sidebar');
/**
 * 
 */
portfolio.ui.components.sidebar.Sidebar = (function (){var G__51603 = (function (p__51605){
var map__51606 = p__51605;
var map__51606__$1 = cljs.core.__destructure_map(map__51606);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51606__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51606__$1,new cljs.core.Keyword(null,"title","title",636505583));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51606__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51606__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
var buttons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51606__$1,new cljs.core.Keyword(null,"buttons","buttons",-1953831197));
var slide_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51606__$1,new cljs.core.Keyword(null,"slide?","slide?",1648217264));
var search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51606__$1,new cljs.core.Keyword(null,"search","search",1564939822));
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51606__$1,new cljs.core.Keyword(null,"footer","footer",1606445390));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(slide_QMARK_)?(0):width),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),"0",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"transition","transition",765692007),"width 0.25s ease",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),(60)], null),new cljs.core.Keyword(null,"mounted-style","mounted-style",783212842),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null),new cljs.core.Keyword(null,"leaving-style","leaving-style",599773625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),(function (){var iter__5480__auto__ = (function portfolio$ui$components$sidebar$iter__51607(s__51608){
return (new cljs.core.LazySeq(null,(function (){
var s__51608__$1 = s__51608;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__51608__$1);
if(temp__5823__auto__){
var s__51608__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51608__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__51608__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__51610 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__51609 = (0);
while(true){
if((i__51609 < size__5479__auto__)){
var map__51611 = cljs.core._nth(c__5478__auto__,i__51609);
var map__51611__$1 = cljs.core.__destructure_map(map__51611);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51611__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51611__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51611__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
cljs.core.chunk_append(b__51610,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),text], null),phosphor.icons.render.cljs$core$IFn$_invoke$arity$variadic(icon,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"16px 8px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null)], 0))], null));

var G__51613 = (i__51609 + (1));
i__51609 = G__51613;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51610),portfolio$ui$components$sidebar$iter__51607(cljs.core.chunk_rest(s__51608__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51610),null);
}
} else {
var map__51612 = cljs.core.first(s__51608__$2);
var map__51612__$1 = cljs.core.__destructure_map(map__51612);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51612__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51612__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51612__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),text], null),phosphor.icons.render.cljs$core$IFn$_invoke$arity$variadic(icon,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"16px 8px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null)], 0))], null),portfolio$ui$components$sidebar$iter__51607(cljs.core.rest(s__51608__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,buttons));
})()], null),(cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h1","h1.h1",-1010377955),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.5rem"], null)], null),title], null):null),(cljs.core.truth_(search)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 20px"], null)], null),(portfolio.ui.components.auto_complete.AutoCompleter.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.auto_complete.AutoCompleter.cljs$core$IFn$_invoke$arity$1(search) : portfolio.ui.components.auto_complete.AutoCompleter.call(null, search))], null):null),portfolio.ui.components.browser.render_items.cljs$core$IFn$_invoke$arity$1(items)], null);
});
var G__51604 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.sidebar/Sidebar"], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__51603,G__51604) : dumdom.core.component.call(null, G__51603,G__51604));
})();

//# sourceMappingURL=portfolio.ui.components.sidebar.js.map
