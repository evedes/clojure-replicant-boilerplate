goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__44791){
var map__44792 = p__44791;
var map__44792__$1 = cljs.core.__destructure_map(map__44792);
var m = map__44792__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44792__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44792__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44809_45202 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44810_45203 = null;
var count__44811_45204 = (0);
var i__44812_45205 = (0);
while(true){
if((i__44812_45205 < count__44811_45204)){
var f_45206 = chunk__44810_45203.cljs$core$IIndexed$_nth$arity$2(null, i__44812_45205);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45206], 0));


var G__45208 = seq__44809_45202;
var G__45209 = chunk__44810_45203;
var G__45210 = count__44811_45204;
var G__45211 = (i__44812_45205 + (1));
seq__44809_45202 = G__45208;
chunk__44810_45203 = G__45209;
count__44811_45204 = G__45210;
i__44812_45205 = G__45211;
continue;
} else {
var temp__5823__auto___45212 = cljs.core.seq(seq__44809_45202);
if(temp__5823__auto___45212){
var seq__44809_45214__$1 = temp__5823__auto___45212;
if(cljs.core.chunked_seq_QMARK_(seq__44809_45214__$1)){
var c__5525__auto___45215 = cljs.core.chunk_first(seq__44809_45214__$1);
var G__45216 = cljs.core.chunk_rest(seq__44809_45214__$1);
var G__45217 = c__5525__auto___45215;
var G__45218 = cljs.core.count(c__5525__auto___45215);
var G__45219 = (0);
seq__44809_45202 = G__45216;
chunk__44810_45203 = G__45217;
count__44811_45204 = G__45218;
i__44812_45205 = G__45219;
continue;
} else {
var f_45220 = cljs.core.first(seq__44809_45214__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45220], 0));


var G__45223 = cljs.core.next(seq__44809_45214__$1);
var G__45224 = null;
var G__45225 = (0);
var G__45226 = (0);
seq__44809_45202 = G__45223;
chunk__44810_45203 = G__45224;
count__44811_45204 = G__45225;
i__44812_45205 = G__45226;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45230 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45230], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45230)))?cljs.core.second(arglists_45230):arglists_45230)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44844_45259 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44845_45260 = null;
var count__44846_45261 = (0);
var i__44847_45262 = (0);
while(true){
if((i__44847_45262 < count__44846_45261)){
var vec__44860_45263 = chunk__44845_45260.cljs$core$IIndexed$_nth$arity$2(null, i__44847_45262);
var name_45264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44860_45263,(0),null);
var map__44863_45265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44860_45263,(1),null);
var map__44863_45266__$1 = cljs.core.__destructure_map(map__44863_45265);
var doc_45267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44863_45266__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44863_45266__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45264], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45268], 0));

if(cljs.core.truth_(doc_45267)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45267], 0));
} else {
}


var G__45271 = seq__44844_45259;
var G__45272 = chunk__44845_45260;
var G__45273 = count__44846_45261;
var G__45274 = (i__44847_45262 + (1));
seq__44844_45259 = G__45271;
chunk__44845_45260 = G__45272;
count__44846_45261 = G__45273;
i__44847_45262 = G__45274;
continue;
} else {
var temp__5823__auto___45275 = cljs.core.seq(seq__44844_45259);
if(temp__5823__auto___45275){
var seq__44844_45276__$1 = temp__5823__auto___45275;
if(cljs.core.chunked_seq_QMARK_(seq__44844_45276__$1)){
var c__5525__auto___45278 = cljs.core.chunk_first(seq__44844_45276__$1);
var G__45280 = cljs.core.chunk_rest(seq__44844_45276__$1);
var G__45281 = c__5525__auto___45278;
var G__45282 = cljs.core.count(c__5525__auto___45278);
var G__45283 = (0);
seq__44844_45259 = G__45280;
chunk__44845_45260 = G__45281;
count__44846_45261 = G__45282;
i__44847_45262 = G__45283;
continue;
} else {
var vec__44868_45285 = cljs.core.first(seq__44844_45276__$1);
var name_45286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44868_45285,(0),null);
var map__44871_45287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44868_45285,(1),null);
var map__44871_45288__$1 = cljs.core.__destructure_map(map__44871_45287);
var doc_45289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44871_45288__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44871_45288__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45286], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45290], 0));

if(cljs.core.truth_(doc_45289)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45289], 0));
} else {
}


var G__45292 = cljs.core.next(seq__44844_45276__$1);
var G__45293 = null;
var G__45294 = (0);
var G__45295 = (0);
seq__44844_45259 = G__45292;
chunk__44845_45260 = G__45293;
count__44846_45261 = G__45294;
i__44847_45262 = G__45295;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__44879 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__44880 = null;
var count__44881 = (0);
var i__44882 = (0);
while(true){
if((i__44882 < count__44881)){
var role = chunk__44880.cljs$core$IIndexed$_nth$arity$2(null, i__44882);
var temp__5823__auto___45297__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___45297__$1)){
var spec_45298 = temp__5823__auto___45297__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45298)], 0));
} else {
}


var G__45299 = seq__44879;
var G__45300 = chunk__44880;
var G__45301 = count__44881;
var G__45302 = (i__44882 + (1));
seq__44879 = G__45299;
chunk__44880 = G__45300;
count__44881 = G__45301;
i__44882 = G__45302;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__44879);
if(temp__5823__auto____$1){
var seq__44879__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__44879__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__44879__$1);
var G__45304 = cljs.core.chunk_rest(seq__44879__$1);
var G__45305 = c__5525__auto__;
var G__45306 = cljs.core.count(c__5525__auto__);
var G__45307 = (0);
seq__44879 = G__45304;
chunk__44880 = G__45305;
count__44881 = G__45306;
i__44882 = G__45307;
continue;
} else {
var role = cljs.core.first(seq__44879__$1);
var temp__5823__auto___45315__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___45315__$2)){
var spec_45316 = temp__5823__auto___45315__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45316)], 0));
} else {
}


var G__45318 = cljs.core.next(seq__44879__$1);
var G__45319 = null;
var G__45320 = (0);
var G__45321 = (0);
seq__44879 = G__45318;
chunk__44880 = G__45319;
count__44881 = G__45320;
i__44882 = G__45321;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__44935 = datafied_throwable;
var map__44935__$1 = cljs.core.__destructure_map(map__44935);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44935__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44935__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44935__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__44937 = cljs.core.last(via);
var map__44937__$1 = cljs.core.__destructure_map(map__44937);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44937__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44937__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44937__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__44938 = data;
var map__44938__$1 = cljs.core.__destructure_map(map__44938);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44938__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44938__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44938__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__44939 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__44939__$1 = cljs.core.__destructure_map(map__44939);
var top_data = map__44939__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44939__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__44944 = phase;
var G__44944__$1 = (((G__44944 instanceof cljs.core.Keyword))?G__44944.fqn:null);
switch (G__44944__$1) {
case "read-source":
var map__44949 = data;
var map__44949__$1 = cljs.core.__destructure_map(map__44949);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44949__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44949__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__44956 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__44956__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44956,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44956);
var G__44956__$2 = (cljs.core.truth_((function (){var fexpr__44968 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44968.cljs$core$IFn$_invoke$arity$1 ? fexpr__44968.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44968.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44956__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44956__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44956__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44956__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__44970 = top_data;
var G__44970__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44970,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44970);
var G__44970__$2 = (cljs.core.truth_((function (){var fexpr__44980 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44980.cljs$core$IFn$_invoke$arity$1 ? fexpr__44980.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44980.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44970__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44970__$1);
var G__44970__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44970__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44970__$2);
var G__44970__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44970__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44970__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44970__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44970__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45010 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45010,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45010,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45010,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45010,(3),null);
var G__45018 = top_data;
var G__45018__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45018,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45018);
var G__45018__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45018__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45018__$1);
var G__45018__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45018__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45018__$2);
var G__45018__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45018__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45018__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45018__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45018__$4;
}

break;
case "execution":
var vec__45029 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45029,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45029,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45029,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45029,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__44925_SHARP_){
var or__5002__auto__ = (p1__44925_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__45043 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45043.cljs$core$IFn$_invoke$arity$1 ? fexpr__45043.cljs$core$IFn$_invoke$arity$1(p1__44925_SHARP_) : fexpr__45043.call(null, p1__44925_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__45058 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45058__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45058,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45058);
var G__45058__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45058__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45058__$1);
var G__45058__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45058__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45058__$2);
var G__45058__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45058__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45058__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45058__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45058__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44944__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45100){
var map__45101 = p__45100;
var map__45101__$1 = cljs.core.__destructure_map(map__45101);
var triage_data = map__45101__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45101__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45101__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45101__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45101__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45101__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45101__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45101__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45101__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__45106 = phase;
var G__45106__$1 = (((G__45106 instanceof cljs.core.Keyword))?G__45106.fqn:null);
switch (G__45106__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45107 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45108 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45109 = loc;
var G__45110 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45128_45423 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45129_45424 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45130_45425 = true;
var _STAR_print_fn_STAR__temp_val__45131_45426 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45130_45425);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45131_45426);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45093_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45093_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45129_45424);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45128_45423);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45107,G__45108,G__45109,G__45110) : format.call(null, G__45107,G__45108,G__45109,G__45110));

break;
case "macroexpansion":
var G__45139 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45140 = cause_type;
var G__45141 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45142 = loc;
var G__45143 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45139,G__45140,G__45141,G__45142,G__45143) : format.call(null, G__45139,G__45140,G__45141,G__45142,G__45143));

break;
case "compile-syntax-check":
var G__45145 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45146 = cause_type;
var G__45147 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45148 = loc;
var G__45149 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45145,G__45146,G__45147,G__45148,G__45149) : format.call(null, G__45145,G__45146,G__45147,G__45148,G__45149));

break;
case "compilation":
var G__45151 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45152 = cause_type;
var G__45153 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45154 = loc;
var G__45155 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45151,G__45152,G__45153,G__45154,G__45155) : format.call(null, G__45151,G__45152,G__45153,G__45154,G__45155));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45158 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45159 = symbol;
var G__45160 = loc;
var G__45161 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45164_45436 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45165_45437 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45166_45438 = true;
var _STAR_print_fn_STAR__temp_val__45167_45439 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45166_45438);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45167_45439);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45098_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45098_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45165_45437);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45164_45436);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45158,G__45159,G__45160,G__45161) : format.call(null, G__45158,G__45159,G__45160,G__45161));
} else {
var G__45183 = "Execution error%s at %s(%s).\n%s\n";
var G__45184 = cause_type;
var G__45185 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45186 = loc;
var G__45187 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45183,G__45184,G__45185,G__45186,G__45187) : format.call(null, G__45183,G__45184,G__45185,G__45186,G__45187));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45106__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
