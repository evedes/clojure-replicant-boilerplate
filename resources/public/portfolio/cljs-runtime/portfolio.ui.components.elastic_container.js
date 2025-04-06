goog.provide('portfolio.ui.components.elastic_container');
portfolio.ui.components.elastic_container.clean_up_after_transition = (function portfolio$ui$components$elastic_container$clean_up_after_transition(node,callback,ms){
return setTimeout((function (_){
(node.style.overflow = "auto");

(node.style.height = "auto");

node.setAttribute("data-ec-anim","done");

return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null, ));
}),ms);
});
portfolio.ui.components.elastic_container.enter = (function portfolio$ui$components$elastic_container$enter(var_args){
var args__5732__auto__ = [];
var len__5726__auto___50569 = arguments.length;
var i__5727__auto___50570 = (0);
while(true){
if((i__5727__auto___50570 < len__5726__auto___50569)){
args__5732__auto__.push((arguments[i__5727__auto___50570]));

var G__50571 = (i__5727__auto___50570 + (1));
i__5727__auto___50570 = G__50571;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return portfolio.ui.components.elastic_container.enter.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(portfolio.ui.components.elastic_container.enter.cljs$core$IFn$_invoke$arity$variadic = (function (p__50553){
var vec__50554 = p__50553;
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50554,(0),null);
return (function (node,callback,val){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("animating",node.getAttribute("data-ec-anim"))){
node.setAttribute("data-ec-anim","cancelled");

return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null, ));
} else {
node.setAttribute("data-ec-anim","animating");

(node.style.overflow = "hidden");

var target = node.getBoundingClientRect().height;
portfolio.ui.components.elastic_container.clean_up_after_transition(node,callback,(250));

(node.style.height = (0));

(node.style.transition = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(opt);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "height 0.25s ease-in";
}
})());

return window.requestAnimationFrame((function (){
return (node.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),"px"].join(''));
}));
}
});
}));

(portfolio.ui.components.elastic_container.enter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(portfolio.ui.components.elastic_container.enter.cljs$lang$applyTo = (function (seq50549){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50549));
}));

portfolio.ui.components.elastic_container.leave = (function portfolio$ui$components$elastic_container$leave(var_args){
var args__5732__auto__ = [];
var len__5726__auto___50573 = arguments.length;
var i__5727__auto___50574 = (0);
while(true){
if((i__5727__auto___50574 < len__5726__auto___50573)){
args__5732__auto__.push((arguments[i__5727__auto___50574]));

var G__50575 = (i__5727__auto___50574 + (1));
i__5727__auto___50574 = G__50575;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return portfolio.ui.components.elastic_container.leave.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(portfolio.ui.components.elastic_container.leave.cljs$core$IFn$_invoke$arity$variadic = (function (p__50562){
var vec__50563 = p__50562;
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50563,(0),null);
return (function (node,callback){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("animating",node.getAttribute("data-ec-anim"))){
node.setAttribute("data-ec-anim","cancelled");

return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null, ));
} else {
(node.style.transition = "none");

(node.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node.getBoundingClientRect().height),"px"].join(''));

(node.style.overflow = "hidden");

portfolio.ui.components.elastic_container.clean_up_after_transition(node,callback,(150));

(node.style.transition = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(opt);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "height 0.15s ease-out";
}
})());

return window.requestAnimationFrame((function (){
return (node.style.height = (0));
}));
}
});
}));

(portfolio.ui.components.elastic_container.leave.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(portfolio.ui.components.elastic_container.leave.cljs$lang$applyTo = (function (seq50560){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50560));
}));


//# sourceMappingURL=portfolio.ui.components.elastic_container.js.map
