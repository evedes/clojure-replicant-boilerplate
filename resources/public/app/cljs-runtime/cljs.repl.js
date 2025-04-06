goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35067){
var map__35068 = p__35067;
var map__35068__$1 = cljs.core.__destructure_map(map__35068);
var m = map__35068__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35068__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35068__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35090_35547 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35091_35548 = null;
var count__35092_35549 = (0);
var i__35093_35550 = (0);
while(true){
if((i__35093_35550 < count__35092_35549)){
var f_35551 = chunk__35091_35548.cljs$core$IIndexed$_nth$arity$2(null, i__35093_35550);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35551], 0));


var G__35552 = seq__35090_35547;
var G__35553 = chunk__35091_35548;
var G__35554 = count__35092_35549;
var G__35555 = (i__35093_35550 + (1));
seq__35090_35547 = G__35552;
chunk__35091_35548 = G__35553;
count__35092_35549 = G__35554;
i__35093_35550 = G__35555;
continue;
} else {
var temp__5823__auto___35556 = cljs.core.seq(seq__35090_35547);
if(temp__5823__auto___35556){
var seq__35090_35557__$1 = temp__5823__auto___35556;
if(cljs.core.chunked_seq_QMARK_(seq__35090_35557__$1)){
var c__5525__auto___35559 = cljs.core.chunk_first(seq__35090_35557__$1);
var G__35560 = cljs.core.chunk_rest(seq__35090_35557__$1);
var G__35561 = c__5525__auto___35559;
var G__35562 = cljs.core.count(c__5525__auto___35559);
var G__35563 = (0);
seq__35090_35547 = G__35560;
chunk__35091_35548 = G__35561;
count__35092_35549 = G__35562;
i__35093_35550 = G__35563;
continue;
} else {
var f_35564 = cljs.core.first(seq__35090_35557__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35564], 0));


var G__35565 = cljs.core.next(seq__35090_35557__$1);
var G__35566 = null;
var G__35567 = (0);
var G__35568 = (0);
seq__35090_35547 = G__35565;
chunk__35091_35548 = G__35566;
count__35092_35549 = G__35567;
i__35093_35550 = G__35568;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35573 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35573], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35573)))?cljs.core.second(arglists_35573):arglists_35573)], 0));
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
var seq__35124_35576 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35125_35577 = null;
var count__35126_35578 = (0);
var i__35127_35579 = (0);
while(true){
if((i__35127_35579 < count__35126_35578)){
var vec__35163_35580 = chunk__35125_35577.cljs$core$IIndexed$_nth$arity$2(null, i__35127_35579);
var name_35581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35163_35580,(0),null);
var map__35166_35582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35163_35580,(1),null);
var map__35166_35583__$1 = cljs.core.__destructure_map(map__35166_35582);
var doc_35584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35166_35583__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35166_35583__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35581], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35585], 0));

if(cljs.core.truth_(doc_35584)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35584], 0));
} else {
}


var G__35593 = seq__35124_35576;
var G__35594 = chunk__35125_35577;
var G__35595 = count__35126_35578;
var G__35596 = (i__35127_35579 + (1));
seq__35124_35576 = G__35593;
chunk__35125_35577 = G__35594;
count__35126_35578 = G__35595;
i__35127_35579 = G__35596;
continue;
} else {
var temp__5823__auto___35597 = cljs.core.seq(seq__35124_35576);
if(temp__5823__auto___35597){
var seq__35124_35598__$1 = temp__5823__auto___35597;
if(cljs.core.chunked_seq_QMARK_(seq__35124_35598__$1)){
var c__5525__auto___35599 = cljs.core.chunk_first(seq__35124_35598__$1);
var G__35600 = cljs.core.chunk_rest(seq__35124_35598__$1);
var G__35601 = c__5525__auto___35599;
var G__35602 = cljs.core.count(c__5525__auto___35599);
var G__35603 = (0);
seq__35124_35576 = G__35600;
chunk__35125_35577 = G__35601;
count__35126_35578 = G__35602;
i__35127_35579 = G__35603;
continue;
} else {
var vec__35176_35604 = cljs.core.first(seq__35124_35598__$1);
var name_35605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35176_35604,(0),null);
var map__35179_35606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35176_35604,(1),null);
var map__35179_35607__$1 = cljs.core.__destructure_map(map__35179_35606);
var doc_35608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35179_35607__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35179_35607__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35605], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35609], 0));

if(cljs.core.truth_(doc_35608)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35608], 0));
} else {
}


var G__35610 = cljs.core.next(seq__35124_35598__$1);
var G__35611 = null;
var G__35612 = (0);
var G__35613 = (0);
seq__35124_35576 = G__35610;
chunk__35125_35577 = G__35611;
count__35126_35578 = G__35612;
i__35127_35579 = G__35613;
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

var seq__35186 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35187 = null;
var count__35188 = (0);
var i__35189 = (0);
while(true){
if((i__35189 < count__35188)){
var role = chunk__35187.cljs$core$IIndexed$_nth$arity$2(null, i__35189);
var temp__5823__auto___35619__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___35619__$1)){
var spec_35621 = temp__5823__auto___35619__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35621)], 0));
} else {
}


var G__35624 = seq__35186;
var G__35625 = chunk__35187;
var G__35626 = count__35188;
var G__35627 = (i__35189 + (1));
seq__35186 = G__35624;
chunk__35187 = G__35625;
count__35188 = G__35626;
i__35189 = G__35627;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__35186);
if(temp__5823__auto____$1){
var seq__35186__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35186__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__35186__$1);
var G__35629 = cljs.core.chunk_rest(seq__35186__$1);
var G__35630 = c__5525__auto__;
var G__35631 = cljs.core.count(c__5525__auto__);
var G__35632 = (0);
seq__35186 = G__35629;
chunk__35187 = G__35630;
count__35188 = G__35631;
i__35189 = G__35632;
continue;
} else {
var role = cljs.core.first(seq__35186__$1);
var temp__5823__auto___35633__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___35633__$2)){
var spec_35638 = temp__5823__auto___35633__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35638)], 0));
} else {
}


var G__35639 = cljs.core.next(seq__35186__$1);
var G__35640 = null;
var G__35641 = (0);
var G__35642 = (0);
seq__35186 = G__35639;
chunk__35187 = G__35640;
count__35188 = G__35641;
i__35189 = G__35642;
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
var map__35265 = datafied_throwable;
var map__35265__$1 = cljs.core.__destructure_map(map__35265);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35265__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35265__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35265__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35266 = cljs.core.last(via);
var map__35266__$1 = cljs.core.__destructure_map(map__35266);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35266__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35266__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35266__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35267 = data;
var map__35267__$1 = cljs.core.__destructure_map(map__35267);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35267__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35267__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35267__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35268 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35268__$1 = cljs.core.__destructure_map(map__35268);
var top_data = map__35268__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35268__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35303 = phase;
var G__35303__$1 = (((G__35303 instanceof cljs.core.Keyword))?G__35303.fqn:null);
switch (G__35303__$1) {
case "read-source":
var map__35305 = data;
var map__35305__$1 = cljs.core.__destructure_map(map__35305);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35305__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35305__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35306 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35306__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35306,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35306);
var G__35306__$2 = (cljs.core.truth_((function (){var fexpr__35319 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35319.cljs$core$IFn$_invoke$arity$1 ? fexpr__35319.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35319.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35306__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35306__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35306__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35306__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35321 = top_data;
var G__35321__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35321,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35321);
var G__35321__$2 = (cljs.core.truth_((function (){var fexpr__35329 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35329.cljs$core$IFn$_invoke$arity$1 ? fexpr__35329.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35329.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35321__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35321__$1);
var G__35321__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35321__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35321__$2);
var G__35321__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35321__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35321__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35321__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35321__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35349 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35349,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35349,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35349,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35349,(3),null);
var G__35353 = top_data;
var G__35353__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35353,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35353);
var G__35353__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35353__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35353__$1);
var G__35353__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35353__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35353__$2);
var G__35353__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35353__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35353__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35353__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35353__$4;
}

break;
case "execution":
var vec__35371 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35371,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35371,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35371,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35371,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35252_SHARP_){
var or__5002__auto__ = (p1__35252_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__35389 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35389.cljs$core$IFn$_invoke$arity$1 ? fexpr__35389.cljs$core$IFn$_invoke$arity$1(p1__35252_SHARP_) : fexpr__35389.call(null, p1__35252_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__35391 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35391__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35391,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35391);
var G__35391__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35391__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35391__$1);
var G__35391__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35391__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35391__$2);
var G__35391__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35391__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35391__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35391__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35391__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35303__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35409){
var map__35412 = p__35409;
var map__35412__$1 = cljs.core.__destructure_map(map__35412);
var triage_data = map__35412__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35412__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35412__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35412__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35412__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35412__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35412__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35412__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35412__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35426 = phase;
var G__35426__$1 = (((G__35426 instanceof cljs.core.Keyword))?G__35426.fqn:null);
switch (G__35426__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35437 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35438 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35439 = loc;
var G__35440 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35443_35687 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35444_35688 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35445_35689 = true;
var _STAR_print_fn_STAR__temp_val__35446_35690 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35445_35689);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35446_35690);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35405_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35405_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35444_35688);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35443_35687);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35437,G__35438,G__35439,G__35440) : format.call(null, G__35437,G__35438,G__35439,G__35440));

break;
case "macroexpansion":
var G__35458 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35459 = cause_type;
var G__35460 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35461 = loc;
var G__35462 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35458,G__35459,G__35460,G__35461,G__35462) : format.call(null, G__35458,G__35459,G__35460,G__35461,G__35462));

break;
case "compile-syntax-check":
var G__35465 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35466 = cause_type;
var G__35467 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35468 = loc;
var G__35469 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35465,G__35466,G__35467,G__35468,G__35469) : format.call(null, G__35465,G__35466,G__35467,G__35468,G__35469));

break;
case "compilation":
var G__35475 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35476 = cause_type;
var G__35477 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35478 = loc;
var G__35479 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35475,G__35476,G__35477,G__35478,G__35479) : format.call(null, G__35475,G__35476,G__35477,G__35478,G__35479));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35489 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35490 = symbol;
var G__35491 = loc;
var G__35492 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35496_35703 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35497_35704 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35498_35705 = true;
var _STAR_print_fn_STAR__temp_val__35499_35706 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35498_35705);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35499_35706);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35408_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35408_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35497_35704);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35496_35703);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35489,G__35490,G__35491,G__35492) : format.call(null, G__35489,G__35490,G__35491,G__35492));
} else {
var G__35516 = "Execution error%s at %s(%s).\n%s\n";
var G__35517 = cause_type;
var G__35518 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35519 = loc;
var G__35520 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35516,G__35517,G__35518,G__35519,G__35520) : format.call(null, G__35516,G__35517,G__35518,G__35519,G__35520));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35426__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
