goog.provide('dumdom.string');
dumdom.string.tag_name = (function dumdom$string$tag_name(node){
return new cljs.core.Keyword(null,"sel","sel",-1686154807).cljs$core$IFn$_invoke$arity$1(node);
});
dumdom.string.children = (function dumdom$string$children(node){
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node);
});
dumdom.string.attributes = (function dumdom$string$attributes(node){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__47969 = node;
var G__47969__$1 = (((G__47969 == null))?null:new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__47969));
if((G__47969__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__47969__$1);
}
})(),(function (){var G__47973 = node;
var G__47973__$1 = (((G__47973 == null))?null:new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__47973));
if((G__47973__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__47973__$1);
}
})(),(function (){var G__47975 = node;
var G__47975__$1 = (((G__47975 == null))?null:new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__47975));
var G__47975__$2 = (((G__47975__$1 == null))?null:new cljs.core.Keyword(null,"dataset","dataset",1159262238).cljs$core$IFn$_invoke$arity$1(G__47975__$1));
var G__47975__$3 = (((G__47975__$2 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47980){
var vec__47981 = p__47980;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47981,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47981,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["data-",cljs.core.name(k)].join(''),v], null);
}),G__47975__$2));
if((G__47975__$3 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47975__$3);
}
})(),(function (){var G__47985 = node;
var G__47985__$1 = (((G__47985 == null))?null:new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__47985));
var G__47985__$2 = (((G__47985__$1 == null))?null:new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(G__47985__$1));
var G__47985__$3 = (((G__47985__$2 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,cljs.core.second),G__47985__$2));
var G__47985__$4 = (((G__47985__$3 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47993){
var vec__47994 = p__47993;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47994,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47994,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["on",clojure.string.capitalize(k)].join(''),v], null);
}),G__47985__$3));
if((G__47985__$4 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47985__$4);
}
})()], 0));
});
dumdom.string.el_key = (function dumdom$string$el_key(node){
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(node);
});
dumdom.string.style = (function dumdom$string$style(node){
return new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(node));
});
dumdom.string.text_node_QMARK_ = (function dumdom$string$text_node_QMARK_(vnode){
return (new cljs.core.Keyword(null,"sel","sel",-1686154807).cljs$core$IFn$_invoke$arity$1(vnode) == null);
});
dumdom.string.comment_node_QMARK_ = (function dumdom$string$comment_node_QMARK_(vnode){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("!",dumdom.string.tag_name(vnode));
});
dumdom.string.text = (function dumdom$string$text(vnode){
return new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(vnode);
});
dumdom.string.kebab_case = (function dumdom$string$kebab_case(s){
return clojure.string.lower_case(clojure.string.replace(s,/([a-z])([A-Z])/,"$1-$2"));
});
dumdom.string.render_styles = (function dumdom$string$render_styles(styles){
if(typeof styles === 'string'){
return styles;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("; ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48011){
var vec__48012 = p__48011;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48012,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48012,(1),null);
return [dumdom.string.kebab_case(cljs.core.name(k)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),styles)));
}
});
dumdom.string.escape = (function dumdom$string$escape(s){
return clojure.string.replace(clojure.string.replace(s,/&(?!([a-z]+|#\d+);)/,"&amp;"),/\"/,"&quot;");
});
dumdom.string.attrs = (function dumdom$string$attrs(vnode){
var k = dumdom.string.el_key(vnode);
var attributes = (function (){var G__48031 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(dumdom.string.attributes(vnode),new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343));
if(cljs.core.truth_(k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48031,new cljs.core.Keyword(null,"data-dumdom-key","data-dumdom-key",-1601599388),dumdom.string.escape(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0))));
} else {
return G__48031;
}
})();
var style = dumdom.string.style(vnode);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48033){
var vec__48034 = p__48033;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48034,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48034,(1),null);
return [" ",cljs.core.name(k__$1),"=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"\""].join('');
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attributes,(cljs.core.truth_(style)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),dumdom.string.render_styles(style)], null):null)], 0))));
});
dumdom.string.self_closing = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, ["track",null,"br",null,"img",null,"area",null,"base",null,"hr",null,"col",null,"param",null,"input",null,"link",null,"source",null,"meta",null,"wbr",null,"embed",null], null), null);
dumdom.string.closing_tag = (function dumdom$string$closing_tag(tag_name){
if(cljs.core.truth_((dumdom.string.self_closing.cljs$core$IFn$_invoke$arity$1 ? dumdom.string.self_closing.cljs$core$IFn$_invoke$arity$1(tag_name) : dumdom.string.self_closing.call(null, tag_name)))){
return null;
} else {
return ["</",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name),">"].join('');
}
});
dumdom.string.dom_str = (function dumdom$string$dom_str(vnode){
if((((vnode == null)) || (dumdom.string.comment_node_QMARK_(vnode)))){
return "";
} else {
if(dumdom.string.text_node_QMARK_(vnode)){
return dumdom.string.text(vnode);
} else {
return ["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dumdom.string.tag_name(vnode)),dumdom.string.attrs(vnode),">",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs = dumdom.string.attributes(vnode);
if(cljs.core.contains_QMARK_(attrs,new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343))){
return new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343).cljs$core$IFn$_invoke$arity$1(attrs);
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dumdom.string.dom_str,dumdom.string.children(vnode)));
}
})()),dumdom.string.closing_tag(dumdom.string.tag_name(vnode))].join('');

}
}
});
dumdom.string.render = (function dumdom$string$render(var_args){
var args__5732__auto__ = [];
var len__5726__auto___48091 = arguments.length;
var i__5727__auto___48092 = (0);
while(true){
if((i__5727__auto___48092 < len__5726__auto___48091)){
args__5732__auto__.push((arguments[i__5727__auto___48092]));

var G__48093 = (i__5727__auto___48092 + (1));
i__5727__auto___48092 = G__48093;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return dumdom.string.render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(dumdom.string.render.cljs$core$IFn$_invoke$arity$variadic = (function (component,p__48059){
var vec__48060 = p__48059;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48060,(0),null);
var kmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48060,(1),null);
var component__$1 = dumdom.element.inflate_hiccup(component);
return dumdom.string.dom_str((function (){var G__48064 = (function (){var or__5002__auto__ = path;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var G__48065 = (function (){var or__5002__auto__ = kmap;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return (component__$1.cljs$core$IFn$_invoke$arity$2 ? component__$1.cljs$core$IFn$_invoke$arity$2(G__48064,G__48065) : component__$1.call(null, G__48064,G__48065));
})());
}));

(dumdom.string.render.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dumdom.string.render.cljs$lang$applyTo = (function (seq48050){
var G__48052 = cljs.core.first(seq48050);
var seq48050__$1 = cljs.core.next(seq48050);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48052,seq48050__$1);
}));


//# sourceMappingURL=dumdom.string.js.map
