goog.provide('portfolio.ui.components.code');
/**
 * 
 */
portfolio.ui.components.code.Code = (function (){var G__50907 = (function (p__50913){
var map__50914 = p__50913;
var map__50914__$1 = cljs.core.__destructure_map(map__50914);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50914__$1,new cljs.core.Keyword(null,"code","code",1586293142));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.language-clojure","pre.language-clojure",296125079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),code], null);
});
var G__50908 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.code/Code",new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"on-render","on-render",2096729391),(function (el){
if(cljs.core.truth_(window.Prism)){
return Prism.highlightElement(el);
} else {
return null;
}
})], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__50907,G__50908) : dumdom.core.component.call(null, G__50907,G__50908));
})();

//# sourceMappingURL=portfolio.ui.components.code.js.map
