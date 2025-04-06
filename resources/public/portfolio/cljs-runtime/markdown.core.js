goog.provide('markdown.core');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__50275){
var map__50276 = p__50275;
var map__50276__$1 = cljs.core.__destructure_map(map__50276);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50276__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50276__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50276__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__50280 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__50281 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__50281);

try{var vec__50282 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__50285,transformer){
var vec__50287 = p__50285;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50287,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50287,(1),null);
var G__50290 = text;
var G__50291 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__50290,G__50291) : transformer.call(null, G__50290,G__50291));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__5002__auto__ = replacement_transformers;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50282,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50282,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__50280);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__5732__auto__ = [];
var len__5726__auto___50339 = arguments.length;
var i__5727__auto___50340 = (0);
while(true){
if((i__5727__auto___50340 < len__5726__auto___50339)){
args__5732__auto__.push((arguments[i__5727__auto___50340]));

var G__50341 = (i__5727__auto___50340 + (1));
i__5727__auto___50340 = G__50341;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(markdown.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.format.cljs$lang$applyTo = (function (seq50292){
var G__50293 = cljs.core.first(seq50292);
var seq50292__$1 = cljs.core.next(seq50292);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50293,seq50292__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__50298_50342 = cljs.core.seq(lines);
var chunk__50299_50343 = null;
var count__50300_50344 = (0);
var i__50301_50345 = (0);
while(true){
if((i__50301_50345 < count__50300_50344)){
var line_50346 = chunk__50299_50343.cljs$core$IIndexed$_nth$arity$2(null, i__50301_50345);
markdown.links.parse_reference_link(line_50346,references);


var G__50347 = seq__50298_50342;
var G__50348 = chunk__50299_50343;
var G__50349 = count__50300_50344;
var G__50350 = (i__50301_50345 + (1));
seq__50298_50342 = G__50347;
chunk__50299_50343 = G__50348;
count__50300_50344 = G__50349;
i__50301_50345 = G__50350;
continue;
} else {
var temp__5823__auto___50351 = cljs.core.seq(seq__50298_50342);
if(temp__5823__auto___50351){
var seq__50298_50352__$1 = temp__5823__auto___50351;
if(cljs.core.chunked_seq_QMARK_(seq__50298_50352__$1)){
var c__5525__auto___50353 = cljs.core.chunk_first(seq__50298_50352__$1);
var G__50354 = cljs.core.chunk_rest(seq__50298_50352__$1);
var G__50355 = c__5525__auto___50353;
var G__50356 = cljs.core.count(c__5525__auto___50353);
var G__50357 = (0);
seq__50298_50342 = G__50354;
chunk__50299_50343 = G__50355;
count__50300_50344 = G__50356;
i__50301_50345 = G__50357;
continue;
} else {
var line_50358 = cljs.core.first(seq__50298_50352__$1);
markdown.links.parse_reference_link(line_50358,references);


var G__50359 = cljs.core.next(seq__50298_50352__$1);
var G__50360 = null;
var G__50361 = (0);
var G__50362 = (0);
seq__50298_50342 = G__50359;
chunk__50299_50343 = G__50360;
count__50300_50344 = G__50361;
i__50301_50345 = G__50362;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__50306_50364 = cljs.core.seq(lines);
var chunk__50307_50365 = null;
var count__50308_50366 = (0);
var i__50309_50367 = (0);
while(true){
if((i__50309_50367 < count__50308_50366)){
var line_50368 = chunk__50307_50365.cljs$core$IIndexed$_nth$arity$2(null, i__50309_50367);
markdown.links.parse_footnote_link(line_50368,footnotes);


var G__50369 = seq__50306_50364;
var G__50370 = chunk__50307_50365;
var G__50371 = count__50308_50366;
var G__50372 = (i__50309_50367 + (1));
seq__50306_50364 = G__50369;
chunk__50307_50365 = G__50370;
count__50308_50366 = G__50371;
i__50309_50367 = G__50372;
continue;
} else {
var temp__5823__auto___50373 = cljs.core.seq(seq__50306_50364);
if(temp__5823__auto___50373){
var seq__50306_50374__$1 = temp__5823__auto___50373;
if(cljs.core.chunked_seq_QMARK_(seq__50306_50374__$1)){
var c__5525__auto___50375 = cljs.core.chunk_first(seq__50306_50374__$1);
var G__50376 = cljs.core.chunk_rest(seq__50306_50374__$1);
var G__50377 = c__5525__auto___50375;
var G__50378 = cljs.core.count(c__5525__auto___50375);
var G__50379 = (0);
seq__50306_50364 = G__50376;
chunk__50307_50365 = G__50377;
count__50308_50366 = G__50378;
i__50309_50367 = G__50379;
continue;
} else {
var line_50380 = cljs.core.first(seq__50306_50374__$1);
markdown.links.parse_footnote_link(line_50380,footnotes);


var G__50381 = cljs.core.next(seq__50306_50374__$1);
var G__50382 = null;
var G__50383 = (0);
var G__50384 = (0);
seq__50306_50364 = G__50381;
chunk__50307_50365 = G__50382;
count__50308_50366 = G__50383;
i__50309_50367 = G__50384;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__50310 = markdown.transformers.parse_metadata_headers(lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50310,(0),null);
var num_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50310,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadata,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(num_lines,lines)], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__50313 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__50314 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__50315 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__50316 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__50315);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__50316);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__50317 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50317,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50317,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__50323_50385 = lines__$1;
var vec__50324_50386 = G__50323_50385;
var seq__50325_50387 = cljs.core.seq(vec__50324_50386);
var first__50326_50388 = cljs.core.first(seq__50325_50387);
var seq__50325_50389__$1 = cljs.core.next(seq__50325_50387);
var line_50390 = first__50326_50388;
var more_50391 = seq__50325_50389__$1;
var state_50392 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__50323_50393__$1 = G__50323_50385;
var state_50394__$1 = state_50392;
while(true){
var vec__50330_50395 = G__50323_50393__$1;
var seq__50331_50396 = cljs.core.seq(vec__50330_50395);
var first__50332_50397 = cljs.core.first(seq__50331_50396);
var seq__50331_50398__$1 = cljs.core.next(seq__50331_50396);
var line_50399__$1 = first__50332_50397;
var more_50400__$1 = seq__50331_50398__$1;
var state_50401__$2 = state_50394__$1;
var line_50402__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_50401__$2))?"":line_50399__$1);
var state_50403__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_50401__$2))?transformer(html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_50401__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_50401__$2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_50401__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_50401__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_50400__$1))){
var G__50404 = more_50400__$1;
var G__50405 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transformer(html,line_50402__$2,cljs.core.first(more_50400__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_50403__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_50402__$2.trim()));
G__50323_50393__$1 = G__50404;
state_50394__$1 = G__50405;
continue;
} else {
transformer(html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_50403__$3))),line_50402__$2,"",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_50403__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__50314);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__50313);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__5732__auto__ = [];
var len__5726__auto___50406 = arguments.length;
var i__5727__auto___50407 = (0);
while(true){
if((i__5727__auto___50407 < len__5726__auto___50406)){
args__5732__auto__.push((arguments[i__5727__auto___50407]));

var G__50408 = (i__5727__auto___50407 + (1));
i__5727__auto___50407 = G__50408;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
}));

(markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq50333){
var G__50334 = cljs.core.first(seq50333);
var seq50333__$1 = cljs.core.next(seq50333);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50334,seq50333__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__5732__auto__ = [];
var len__5726__auto___50409 = arguments.length;
var i__5727__auto___50410 = (0);
while(true){
if((i__5727__auto___50410 < len__5726__auto___50409)){
args__5732__auto__.push((arguments[i__5727__auto___50410]));

var G__50411 = (i__5727__auto___50410 + (1));
i__5727__auto___50410 = G__50411;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
}));

(markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq50335){
var G__50336 = cljs.core.first(seq50335);
var seq50335__$1 = cljs.core.next(seq50335);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50336,seq50335__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__5732__auto__ = [];
var len__5726__auto___50412 = arguments.length;
var i__5727__auto___50413 = (0);
while(true){
if((i__5727__auto___50413 < len__5726__auto___50412)){
args__5732__auto__.push((arguments[i__5727__auto___50413]));

var G__50414 = (i__5727__auto___50413 + (1));
i__5727__auto___50413 = G__50414;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

(markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
}));

(markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq50337){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50337));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__5732__auto__ = [];
var len__5726__auto___50415 = arguments.length;
var i__5727__auto___50416 = (0);
while(true){
if((i__5727__auto___50416 < len__5726__auto___50415)){
args__5732__auto__.push((arguments[i__5727__auto___50416]));

var G__50417 = (i__5727__auto___50416 + (1));
i__5727__auto___50416 = G__50417;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

(markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html_with_meta,params);
}));

(markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq50338){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50338));
}));


//# sourceMappingURL=markdown.core.js.map
