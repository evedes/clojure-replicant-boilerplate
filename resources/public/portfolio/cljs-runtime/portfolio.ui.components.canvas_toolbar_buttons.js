goog.provide('portfolio.ui.components.canvas_toolbar_buttons');
/**
 * 
 */
portfolio.ui.components.canvas_toolbar_buttons.MenuButton = (function (){var G__50271 = (function (p__50273){
var map__50274 = p__50273;
var map__50274__$1 = cljs.core.__destructure_map(map__50274);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50274__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50274__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50274__$1,new cljs.core.Keyword(null,"title","title",636505583));
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50274__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50274__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50274__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50274__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var selected_QMARK___$1 = (function (){var or__5002__auto__ = menu;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return selected_QMARK_;
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.canvas-menu-button","span.canvas-menu-button",1483541186),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.boldable","button.button.boldable",34576834),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var or__5002__auto__ = title;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return text;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(selected_QMARK___$1)?"var(--highlight-color)":"var(--fg)"),new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(14),new cljs.core.Keyword(null,"padding","padding",1660304693),(cljs.core.truth_(icon)?(6):"6px 12px"),new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(icon)?(32):null),new cljs.core.Keyword(null,"height","height",1025178622),(32),new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK___$1)?"var(--toolbar-button-active)":"var(--toolbar-button)")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions], null),(cljs.core.truth_(icon)?phosphor.icons.render.cljs$core$IFn$_invoke$arity$variadic(icon,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null)], 0)):null),text], null),(function (){var G__50286 = menu;
if((G__50286 == null)){
return null;
} else {
return (portfolio.ui.components.popup_menu.PopupMenu.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.popup_menu.PopupMenu.cljs$core$IFn$_invoke$arity$1(G__50286) : portfolio.ui.components.popup_menu.PopupMenu.call(null, G__50286));
}
})()], null);
});
var G__50272 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas-toolbar-buttons/MenuButton"], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__50271,G__50272) : dumdom.core.component.call(null, G__50271,G__50272));
})();
portfolio.ui.components.canvas_toolbar_buttons.Button = portfolio.ui.components.canvas_toolbar_buttons.MenuButton;
/**
 * 
 */
portfolio.ui.components.canvas_toolbar_buttons.ButtonGroup = (function (){var G__50294 = (function (p__50296){
var map__50297 = p__50296;
var map__50297__$1 = cljs.core.__destructure_map(map__50297);
var buttons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50297__$1,new cljs.core.Keyword(null,"buttons","buttons",-1953831197));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.canvas-button-group","div.canvas-button-group",1622996814),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"gap","gap",80255254),(1)], null)], null),(function (){var iter__5480__auto__ = (function portfolio$ui$components$canvas_toolbar_buttons$iter__50302(s__50303){
return (new cljs.core.LazySeq(null,(function (){
var s__50303__$1 = s__50303;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__50303__$1);
if(temp__5823__auto__){
var s__50303__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50303__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__50303__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__50305 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__50304 = (0);
while(true){
if((i__50304 < size__5479__auto__)){
var button = cljs.core._nth(c__5478__auto__,i__50304);
cljs.core.chunk_append(b__50305,portfolio.ui.canvas.protocols.render_toolbar_button(button));

var G__50363 = (i__50304 + (1));
i__50304 = G__50363;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50305),portfolio$ui$components$canvas_toolbar_buttons$iter__50302(cljs.core.chunk_rest(s__50303__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50305),null);
}
} else {
var button = cljs.core.first(s__50303__$2);
return cljs.core.cons(portfolio.ui.canvas.protocols.render_toolbar_button(button),portfolio$ui$components$canvas_toolbar_buttons$iter__50302(cljs.core.rest(s__50303__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(buttons);
})()], null);
});
var G__50295 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas-toolbar-buttons/ButtonGroup"], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__50294,G__50295) : dumdom.core.component.call(null, G__50294,G__50295));
})();

//# sourceMappingURL=portfolio.ui.components.canvas_toolbar_buttons.js.map
