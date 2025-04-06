goog.provide('dumdom.core');
var module$node_modules$snabbdom$build$snabbdom_cjs=shadow.js.require("module$node_modules$snabbdom$build$snabbdom_cjs", {});
/**
 * A mapping from root DOM nodes to currently rendered virtual DOM trees. Used to
 *   reconcile (render component dom-node) to (patch old-vdom new-vdom)
 */
dumdom.core.current_nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * A counter used to assign unique ids to root elements
 */
dumdom.core.element_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
dumdom.core.rendering_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
/**
 * The snabbdom patch function used by render
 */
dumdom.core.patch = module$node_modules$snabbdom$build$snabbdom_cjs.init([module$node_modules$snabbdom$build$snabbdom_cjs.eventListenersModule,module$node_modules$snabbdom$build$snabbdom_cjs.attributesModule,module$node_modules$snabbdom$build$snabbdom_cjs.propsModule,module$node_modules$snabbdom$build$snabbdom_cjs.styleModule,module$node_modules$snabbdom$build$snabbdom_cjs.datasetModule]);
dumdom.core.set_root_id = (function dumdom$core$set_root_id(element){
return (element.dataset.dumdomId = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dumdom.core.element_id,cljs.core.inc));
});
dumdom.core.root_node = (function dumdom$core$root_node(element){
var G__49742 = element.dataset.dumdomId;
var fexpr__49741 = cljs.core.deref(dumdom.core.current_nodes);
return (fexpr__49741.cljs$core$IFn$_invoke$arity$1 ? fexpr__49741.cljs$core$IFn$_invoke$arity$1(G__49742) : fexpr__49741.call(null, G__49742));
});
dumdom.core.register_vnode = (function dumdom$core$register_vnode(element_id,vnode){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dumdom.core.current_nodes,cljs.core.assoc,element_id,vnode);
});
dumdom.core.unregister_vnode = (function dumdom$core$unregister_vnode(element_id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(dumdom.core.current_nodes,cljs.core.dissoc,element_id);
});
/**
 * Snabbdom will replace the element provided as the original target for patch.
 *   When rendering into a new DOM node, we therefore create an intermediate in it
 *   and use that as Snabbdom's root, to avoid destroying the provided root node.
 */
dumdom.core.init_node_BANG_ = (function dumdom$core$init_node_BANG_(element){
(element.innerHTML = "<div></div>");

dumdom.core.set_root_id(element);

return element.firstElementChild;
});
dumdom.core.purge_BANG_ = (function dumdom$core$purge_BANG_(){
return cljs.core.reset_BANG_(dumdom.core.current_nodes,cljs.core.PersistentArrayMap.EMPTY);
});
dumdom.core.create_vdom = (function dumdom$core$create_vdom(component,element_id,p__49748){
var map__49749 = p__49748;
var map__49749__$1 = cljs.core.__destructure_map(map__49749);
var handle_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49749__$1,new cljs.core.Keyword(null,"handle-event","handle-event",2098778308));
var temp__5823__auto__ = dumdom.element.inflate_hiccup(component);
if(cljs.core.truth_(temp__5823__auto__)){
var component__$1 = temp__5823__auto__;
var _STAR_handle_event_STAR__orig_val__49754 = dumdom.element._STAR_handle_event_STAR_;
var _STAR_handle_event_STAR__temp_val__49755 = (function (){var or__5002__auto__ = handle_event;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return dumdom.element._STAR_handle_event_STAR_;
}
})();
(dumdom.element._STAR_handle_event_STAR_ = _STAR_handle_event_STAR__temp_val__49755);

try{var G__49756 = (function (){var G__49757 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [element_id], null);
var G__49758 = cljs.core.PersistentArrayMap.EMPTY;
return (component__$1.cljs$core$IFn$_invoke$arity$2 ? component__$1.cljs$core$IFn$_invoke$arity$2(G__49757,G__49758) : component__$1.call(null, G__49757,G__49758));
})();
if((G__49756 == null)){
return null;
} else {
return cljs.core.clj__GT_js(G__49756);
}
}finally {(dumdom.element._STAR_handle_event_STAR_ = _STAR_handle_event_STAR__orig_val__49754);
}} else {
return null;
}
});
dumdom.core.set_event_handler_BANG_ = (function dumdom$core$set_event_handler_BANG_(f){
if(cljs.core.truth_((function (){var and__5000__auto__ = f;
if(cljs.core.truth_(and__5000__auto__)){
return (!(cljs.core.ifn_QMARK_(f)));
} else {
return and__5000__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Event handler must be a function",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),f], null));
} else {
}

return (dumdom.element._STAR_handle_event_STAR_ = f);
});
/**
 * Dispatch
 */
dumdom.core.dispatch_event_data = (function dumdom$core$dispatch_event_data(e,data){
if(cljs.core.truth_(dumdom.element._STAR_handle_event_STAR_)){
if(cljs.core.truth_(cljs.core.deref(dumdom.core.rendering_QMARK_))){
return requestAnimationFrame((function (){
return dumdom.element._STAR_handle_event_STAR_.call(null, e,data);
}));
} else {
return dumdom.element._STAR_handle_event_STAR_.call(null, e,data);
}
} else {
throw (new Error("Cannot dispatch custom event data without a global event handler. Call dumdom.core/set-event-handler!"));
}
});
goog.exportSymbol('dumdom.core.dispatch_event_data', dumdom.core.dispatch_event_data);
/**
 * Render the virtual DOM node created by the component into the specified DOM
 *   element, and mount it for fast future re-renders.
 */
dumdom.core.render = (function dumdom$core$render(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49797 = arguments.length;
var i__5727__auto___49798 = (0);
while(true){
if((i__5727__auto___49798 < len__5726__auto___49797)){
args__5732__auto__.push((arguments[i__5727__auto___49798]));

var G__49799 = (i__5727__auto___49798 + (1));
i__5727__auto___49798 = G__49799;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return dumdom.core.render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(dumdom.core.render.cljs$core$IFn$_invoke$arity$variadic = (function (component,element,p__49775){
var vec__49776 = p__49775;
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49776,(0),null);
cljs.core.reset_BANG_(dumdom.core.rendering_QMARK_,true);

if(cljs.core.truth_((function (){var and__5000__auto__ = new cljs.core.Keyword(null,"handle-event","handle-event",2098778308).cljs$core$IFn$_invoke$arity$1(opt);
if(cljs.core.truth_(and__5000__auto__)){
return (!(cljs.core.ifn_QMARK_(new cljs.core.Keyword(null,"handle-event","handle-event",2098778308).cljs$core$IFn$_invoke$arity$1(opt))));
} else {
return and__5000__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Called dumdom.core/render with a handle-event that is not a function",opt);
} else {
}

var current_node = (function (){var or__5002__auto__ = dumdom.core.root_node(element);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return dumdom.core.init_node_BANG_(element);
}
})();
var element_id = element.dataset.dumdomId;
var temp__5821__auto___49802 = dumdom.core.create_vdom(component,element_id,opt);
if(cljs.core.truth_(temp__5821__auto___49802)){
var vnode_49803 = temp__5821__auto___49802;
if(cljs.core.truth_(vnode_49803.key)){
} else {
(vnode_49803.key = "root-node");
}

(dumdom.core.patch.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.patch.cljs$core$IFn$_invoke$arity$2(current_node,vnode_49803) : dumdom.core.patch.call(null, current_node,vnode_49803));

dumdom.core.register_vnode(element_id,vnode_49803);
} else {
(element.innerHTML = "");

dumdom.core.unregister_vnode(element_id);
}

if(cljs.core.truth_(dumdom.component._STAR_render_eagerly_QMARK__STAR_)){
cljs.core.reset_BANG_(dumdom.component.eager_render_required_QMARK_,false);
} else {
}

return cljs.core.reset_BANG_(dumdom.core.rendering_QMARK_,false);
}));

(dumdom.core.render.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dumdom.core.render.cljs$lang$applyTo = (function (seq49765){
var G__49766 = cljs.core.first(seq49765);
var seq49765__$1 = cljs.core.next(seq49765);
var G__49767 = cljs.core.first(seq49765__$1);
var seq49765__$2 = cljs.core.next(seq49765__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49766,G__49767,seq49765__$2);
}));

/**
 * Like render, but without mounting the element for future updates. This should
 *   only be used when you don't expect to re-render the component into the same
 *   element. Subsequent calls to render into the same element will always cause a
 *   full rebuild of the DOM. This function does not acumulate state.
 */
dumdom.core.render_once = (function dumdom$core$render_once(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49804 = arguments.length;
var i__5727__auto___49805 = (0);
while(true){
if((i__5727__auto___49805 < len__5726__auto___49804)){
args__5732__auto__.push((arguments[i__5727__auto___49805]));

var G__49806 = (i__5727__auto___49805 + (1));
i__5727__auto___49805 = G__49806;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return dumdom.core.render_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(dumdom.core.render_once.cljs$core$IFn$_invoke$arity$variadic = (function (component,element,p__49787){
var vec__49788 = p__49787;
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49788,(0),null);
cljs.core.reset_BANG_(dumdom.core.rendering_QMARK_,true);

if(cljs.core.truth_((function (){var and__5000__auto__ = new cljs.core.Keyword(null,"handle-event","handle-event",2098778308).cljs$core$IFn$_invoke$arity$1(opt);
if(cljs.core.truth_(and__5000__auto__)){
return (!(cljs.core.ifn_QMARK_(new cljs.core.Keyword(null,"handle-event","handle-event",2098778308).cljs$core$IFn$_invoke$arity$1(opt))));
} else {
return and__5000__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Called dumdom.core/render-once with a handle-event that is not a function",opt);
} else {
}

var current_node_49807 = dumdom.core.init_node_BANG_(element);
var element_id_49808 = element.dataset.dumdomId;
var temp__5823__auto___49809 = dumdom.core.create_vdom(component,element_id_49808,opt);
if(cljs.core.truth_(temp__5823__auto___49809)){
var vnode_49810 = temp__5823__auto___49809;
(dumdom.core.patch.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.patch.cljs$core$IFn$_invoke$arity$2(current_node_49807,vnode_49810) : dumdom.core.patch.call(null, current_node_49807,vnode_49810));
} else {
}

if(cljs.core.truth_(dumdom.component._STAR_render_eagerly_QMARK__STAR_)){
cljs.core.reset_BANG_(dumdom.component.eager_render_required_QMARK_,false);
} else {
}

return cljs.core.reset_BANG_(dumdom.core.rendering_QMARK_,false);
}));

(dumdom.core.render_once.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dumdom.core.render_once.cljs$lang$applyTo = (function (seq49782){
var G__49783 = cljs.core.first(seq49782);
var seq49782__$1 = cljs.core.next(seq49782);
var G__49784 = cljs.core.first(seq49782__$1);
var seq49782__$2 = cljs.core.next(seq49782__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49783,G__49784,seq49782__$2);
}));

/**
 * Unmount an element previously mounted by dumdom.core/render
 */
dumdom.core.unmount = (function dumdom$core$unmount(element){
return dumdom.core.unregister_vnode(element.dataset.dumdomId);
});
dumdom.core.component = dumdom.component.component;
dumdom.core.component_QMARK_ = dumdom.component.component_QMARK_;
dumdom.core.render_string = dumdom.string.render;
dumdom.core.TransitionGroup = (function dumdom$core$TransitionGroup(opt,children){
return dumdom.component.TransitionGroup(dumdom.dom.el,opt,children);
});
dumdom.core.CSSTransitionGroup = (function dumdom$core$CSSTransitionGroup(opt,children){
return dumdom.component.CSSTransitionGroup(dumdom.dom.el,opt,children);
});

//# sourceMappingURL=dumdom.core.js.map
