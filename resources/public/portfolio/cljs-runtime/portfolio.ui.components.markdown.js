goog.provide('portfolio.ui.components.markdown');
portfolio.ui.components.markdown.langs = new cljs.core.PersistentArrayMap(null, 2, ["clj","clojure","cljs","clojure"], null);
portfolio.ui.components.markdown.autolink = (function portfolio$ui$components$markdown$autolink(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",(function (){var iter__5480__auto__ = (function portfolio$ui$components$markdown$autolink_$_iter__50418(s__50419){
return (new cljs.core.LazySeq(null,(function (){
var s__50419__$1 = s__50419;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__50419__$1);
if(temp__5823__auto__){
var s__50419__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50419__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__50419__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__50421 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__50420 = (0);
while(true){
if((i__50420 < size__5479__auto__)){
var w = cljs.core._nth(c__5478__auto__,i__50420);
cljs.core.chunk_append(b__50421,(cljs.core.truth_(cljs.core.re_find(/^https?:\/\/[^\s]+$/,w))?["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"](",cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),")"].join(''):w));

var G__50454 = (i__50420 + (1));
i__50420 = G__50454;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50421),portfolio$ui$components$markdown$autolink_$_iter__50418(cljs.core.chunk_rest(s__50419__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50421),null);
}
} else {
var w = cljs.core.first(s__50419__$2);
return cljs.core.cons((cljs.core.truth_(cljs.core.re_find(/^https?:\/\/[^\s]+$/,w))?["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"](",cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),")"].join(''):w),portfolio$ui$components$markdown$autolink_$_iter__50418(cljs.core.rest(s__50419__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/ /));
})());
});
portfolio.ui.components.markdown.space_lists = (function portfolio$ui$components$markdown$space_lists(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50423_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",p1__50423_SHARP_);
}),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__50422_SHARP_){
return cljs.core.boolean$(cljs.core.re_find(/^(-|\d+\.) /,p1__50422_SHARP_));
}),clojure.string.split_lines(s))));
});
/**
 * Removes line breaks in brackets, which causes markdown-clj to not recognize
 *   them as links.
 */
portfolio.ui.components.markdown.unbreak_links = (function portfolio$ui$components$markdown$unbreak_links(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function portfolio$ui$components$markdown$unbreak_links_$_iter__50424(s__50425){
return (new cljs.core.LazySeq(null,(function (){
var s__50425__$1 = s__50425;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__50425__$1);
if(temp__5823__auto__){
var s__50425__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50425__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__50425__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__50427 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__50426 = (0);
while(true){
if((i__50426 < size__5479__auto__)){
var vec__50428 = cljs.core._nth(c__5478__auto__,i__50426);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50428,(0),null);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50428,(1),null);
cljs.core.chunk_append(b__50427,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),(function (){var G__50432 = link;
if((G__50432 == null)){
return null;
} else {
return clojure.string.replace(G__50432,/\n/," ");
}
})()].join(''));

var G__50455 = (i__50426 + (1));
i__50426 = G__50455;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50427),portfolio$ui$components$markdown$unbreak_links_$_iter__50424(cljs.core.chunk_rest(s__50425__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50427),null);
}
} else {
var vec__50433 = cljs.core.first(s__50425__$2);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50433,(0),null);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50433,(1),null);
return cljs.core.cons([cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),(function (){var G__50437 = link;
if((G__50437 == null)){
return null;
} else {
return clojure.string.replace(G__50437,/\n/," ");
}
})()].join(''),portfolio$ui$components$markdown$unbreak_links_$_iter__50424(cljs.core.rest(s__50425__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/(\[[^\]]+\]\([^\)]+\))/)));
})());
});
portfolio.ui.components.markdown.render_markdown = (function portfolio$ui$components$markdown$render_markdown(s){
return markdown.core.md__GT_html(portfolio.ui.components.markdown.unbreak_links(portfolio.ui.components.markdown.autolink(portfolio.ui.components.markdown.space_lists(s))));
});
/**
 * 
 */
portfolio.ui.components.markdown.Markdown = (function (){var G__50438 = (function (p__50440){
var map__50441 = p__50440;
var map__50441__$1 = cljs.core.__destructure_map(map__50441);
var markdown__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50441__$1,new cljs.core.Keyword(null,"markdown","markdown",1227225089));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.md","div.md",1540365753),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),portfolio.ui.components.markdown.render_markdown(markdown__$1)], null)], null)], null);
});
var G__50439 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.markdown/Markdown",new cljs.core.Keyword(null,"on-render","on-render",2096729391),(function (el,props){
var seq__50442 = cljs.core.seq(el.querySelectorAll("pre"));
var chunk__50443 = null;
var count__50444 = (0);
var i__50445 = (0);
while(true){
if((i__50445 < count__50444)){
var pre = chunk__50443.cljs$core$IIndexed$_nth$arity$2(null, i__50445);
var code_50456 = pre.firstElementChild;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("CODE",code_50456.tagName)){
(pre.className = ["language-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = (function (){var G__50451 = code_50456.className;
return (portfolio.ui.components.markdown.langs.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.markdown.langs.cljs$core$IFn$_invoke$arity$1(G__50451) : portfolio.ui.components.markdown.langs.call(null, G__50451));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return code_50456.className;
}
})())].join(''));

if(cljs.core.truth_(window.Prism)){
Prism.highlightElement(pre);
} else {
}
} else {
}


var G__50457 = seq__50442;
var G__50458 = chunk__50443;
var G__50459 = count__50444;
var G__50460 = (i__50445 + (1));
seq__50442 = G__50457;
chunk__50443 = G__50458;
count__50444 = G__50459;
i__50445 = G__50460;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__50442);
if(temp__5823__auto__){
var seq__50442__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50442__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__50442__$1);
var G__50461 = cljs.core.chunk_rest(seq__50442__$1);
var G__50462 = c__5525__auto__;
var G__50463 = cljs.core.count(c__5525__auto__);
var G__50464 = (0);
seq__50442 = G__50461;
chunk__50443 = G__50462;
count__50444 = G__50463;
i__50445 = G__50464;
continue;
} else {
var pre = cljs.core.first(seq__50442__$1);
var code_50465 = pre.firstElementChild;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("CODE",code_50465.tagName)){
(pre.className = ["language-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = (function (){var G__50453 = code_50465.className;
return (portfolio.ui.components.markdown.langs.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.markdown.langs.cljs$core$IFn$_invoke$arity$1(G__50453) : portfolio.ui.components.markdown.langs.call(null, G__50453));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return code_50465.className;
}
})())].join(''));

if(cljs.core.truth_(window.Prism)){
Prism.highlightElement(pre);
} else {
}
} else {
}


var G__50466 = cljs.core.next(seq__50442__$1);
var G__50467 = null;
var G__50468 = (0);
var G__50469 = (0);
seq__50442 = G__50466;
chunk__50443 = G__50467;
count__50444 = G__50468;
i__50445 = G__50469;
continue;
}
} else {
return null;
}
}
break;
}
})], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__50438,G__50439) : dumdom.core.component.call(null, G__50438,G__50439));
})();

//# sourceMappingURL=portfolio.ui.components.markdown.js.map
