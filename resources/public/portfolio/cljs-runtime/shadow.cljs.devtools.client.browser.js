goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___48431 = arguments.length;
var i__5727__auto___48432 = (0);
while(true){
if((i__5727__auto___48432 < len__5726__auto___48431)){
args__5732__auto__.push((arguments[i__5727__auto___48432]));

var G__48433 = (i__5727__auto___48432 + (1));
i__5727__auto___48432 = G__48433;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq47706){
var G__47707 = cljs.core.first(seq47706);
var seq47706__$1 = cljs.core.next(seq47706);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47707,seq47706__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__47721 = cljs.core.seq(sources);
var chunk__47722 = null;
var count__47723 = (0);
var i__47724 = (0);
while(true){
if((i__47724 < count__47723)){
var map__47739 = chunk__47722.cljs$core$IIndexed$_nth$arity$2(null, i__47724);
var map__47739__$1 = cljs.core.__destructure_map(map__47739);
var src = map__47739__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47739__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47739__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47739__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47739__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47745){var e_48434 = e47745;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48434);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48434.message)].join('')));
}

var G__48435 = seq__47721;
var G__48436 = chunk__47722;
var G__48437 = count__47723;
var G__48438 = (i__47724 + (1));
seq__47721 = G__48435;
chunk__47722 = G__48436;
count__47723 = G__48437;
i__47724 = G__48438;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__47721);
if(temp__5823__auto__){
var seq__47721__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47721__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__47721__$1);
var G__48439 = cljs.core.chunk_rest(seq__47721__$1);
var G__48440 = c__5525__auto__;
var G__48441 = cljs.core.count(c__5525__auto__);
var G__48442 = (0);
seq__47721 = G__48439;
chunk__47722 = G__48440;
count__47723 = G__48441;
i__47724 = G__48442;
continue;
} else {
var map__47746 = cljs.core.first(seq__47721__$1);
var map__47746__$1 = cljs.core.__destructure_map(map__47746);
var src = map__47746__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47746__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47746__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47746__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47746__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47751){var e_48443 = e47751;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48443);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48443.message)].join('')));
}

var G__48444 = cljs.core.next(seq__47721__$1);
var G__48445 = null;
var G__48446 = (0);
var G__48447 = (0);
seq__47721 = G__48444;
chunk__47722 = G__48445;
count__47723 = G__48446;
i__47724 = G__48447;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__47772 = cljs.core.seq(js_requires);
var chunk__47773 = null;
var count__47774 = (0);
var i__47775 = (0);
while(true){
if((i__47775 < count__47774)){
var js_ns = chunk__47773.cljs$core$IIndexed$_nth$arity$2(null, i__47775);
var require_str_48450 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48450);


var G__48451 = seq__47772;
var G__48452 = chunk__47773;
var G__48453 = count__47774;
var G__48454 = (i__47775 + (1));
seq__47772 = G__48451;
chunk__47773 = G__48452;
count__47774 = G__48453;
i__47775 = G__48454;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__47772);
if(temp__5823__auto__){
var seq__47772__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47772__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__47772__$1);
var G__48455 = cljs.core.chunk_rest(seq__47772__$1);
var G__48456 = c__5525__auto__;
var G__48457 = cljs.core.count(c__5525__auto__);
var G__48458 = (0);
seq__47772 = G__48455;
chunk__47773 = G__48456;
count__47774 = G__48457;
i__47775 = G__48458;
continue;
} else {
var js_ns = cljs.core.first(seq__47772__$1);
var require_str_48459 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48459);


var G__48460 = cljs.core.next(seq__47772__$1);
var G__48461 = null;
var G__48462 = (0);
var G__48463 = (0);
seq__47772 = G__48460;
chunk__47773 = G__48461;
count__47774 = G__48462;
i__47775 = G__48463;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__47805){
var map__47806 = p__47805;
var map__47806__$1 = cljs.core.__destructure_map(map__47806);
var msg = map__47806__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47806__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47806__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47810(s__47811){
return (new cljs.core.LazySeq(null,(function (){
var s__47811__$1 = s__47811;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__47811__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__47817 = cljs.core.first(xs__6383__auto__);
var map__47817__$1 = cljs.core.__destructure_map(map__47817);
var src = map__47817__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47817__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47817__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__47811__$1,map__47817,map__47817__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__47806,map__47806__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47810_$_iter__47812(s__47813){
return (new cljs.core.LazySeq(null,((function (s__47811__$1,map__47817,map__47817__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__47806,map__47806__$1,msg,info,reload_info){
return (function (){
var s__47813__$1 = s__47813;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__47813__$1);
if(temp__5823__auto____$1){
var s__47813__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47813__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__47813__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__47815 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__47814 = (0);
while(true){
if((i__47814 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__47814);
cljs.core.chunk_append(b__47815,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__48469 = (i__47814 + (1));
i__47814 = G__48469;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47815),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47810_$_iter__47812(cljs.core.chunk_rest(s__47813__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47815),null);
}
} else {
var warning = cljs.core.first(s__47813__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47810_$_iter__47812(cljs.core.rest(s__47813__$2)));
}
} else {
return null;
}
break;
}
});})(s__47811__$1,map__47817,map__47817__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__47806,map__47806__$1,msg,info,reload_info))
,null,null));
});})(s__47811__$1,map__47817,map__47817__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__47806,map__47806__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47810(cljs.core.rest(s__47811__$1)));
} else {
var G__48470 = cljs.core.rest(s__47811__$1);
s__47811__$1 = G__48470;
continue;
}
} else {
var G__48471 = cljs.core.rest(s__47811__$1);
s__47811__$1 = G__48471;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__47818_48472 = cljs.core.seq(warnings);
var chunk__47819_48473 = null;
var count__47820_48474 = (0);
var i__47821_48475 = (0);
while(true){
if((i__47821_48475 < count__47820_48474)){
var map__47824_48476 = chunk__47819_48473.cljs$core$IIndexed$_nth$arity$2(null, i__47821_48475);
var map__47824_48477__$1 = cljs.core.__destructure_map(map__47824_48476);
var w_48478 = map__47824_48477__$1;
var msg_48479__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47824_48477__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47824_48477__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47824_48477__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47824_48477__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48482)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48480),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48481),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48479__$1)].join(''));


var G__48483 = seq__47818_48472;
var G__48484 = chunk__47819_48473;
var G__48485 = count__47820_48474;
var G__48486 = (i__47821_48475 + (1));
seq__47818_48472 = G__48483;
chunk__47819_48473 = G__48484;
count__47820_48474 = G__48485;
i__47821_48475 = G__48486;
continue;
} else {
var temp__5823__auto___48487 = cljs.core.seq(seq__47818_48472);
if(temp__5823__auto___48487){
var seq__47818_48488__$1 = temp__5823__auto___48487;
if(cljs.core.chunked_seq_QMARK_(seq__47818_48488__$1)){
var c__5525__auto___48489 = cljs.core.chunk_first(seq__47818_48488__$1);
var G__48490 = cljs.core.chunk_rest(seq__47818_48488__$1);
var G__48491 = c__5525__auto___48489;
var G__48492 = cljs.core.count(c__5525__auto___48489);
var G__48493 = (0);
seq__47818_48472 = G__48490;
chunk__47819_48473 = G__48491;
count__47820_48474 = G__48492;
i__47821_48475 = G__48493;
continue;
} else {
var map__47825_48494 = cljs.core.first(seq__47818_48488__$1);
var map__47825_48495__$1 = cljs.core.__destructure_map(map__47825_48494);
var w_48496 = map__47825_48495__$1;
var msg_48497__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47825_48495__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47825_48495__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47825_48495__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47825_48495__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48500)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48498),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48499),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48497__$1)].join(''));


var G__48501 = cljs.core.next(seq__47818_48488__$1);
var G__48502 = null;
var G__48503 = (0);
var G__48504 = (0);
seq__47818_48472 = G__48501;
chunk__47819_48473 = G__48502;
count__47820_48474 = G__48503;
i__47821_48475 = G__48504;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__47797_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__47797_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__47836){
var map__47837 = p__47836;
var map__47837__$1 = cljs.core.__destructure_map(map__47837);
var msg = map__47837__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47837__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47837__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__47841 = cljs.core.seq(updates);
var chunk__47843 = null;
var count__47844 = (0);
var i__47845 = (0);
while(true){
if((i__47845 < count__47844)){
var path = chunk__47843.cljs$core$IIndexed$_nth$arity$2(null, i__47845);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48220_48508 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48224_48509 = null;
var count__48225_48510 = (0);
var i__48226_48511 = (0);
while(true){
if((i__48226_48511 < count__48225_48510)){
var node_48512 = chunk__48224_48509.cljs$core$IIndexed$_nth$arity$2(null, i__48226_48511);
if(cljs.core.not(node_48512.shadow$old)){
var path_match_48513 = shadow.cljs.devtools.client.browser.match_paths(node_48512.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48513)){
var new_link_48514 = (function (){var G__48265 = node_48512.cloneNode(true);
G__48265.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48513),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48265;
})();
(node_48512.shadow$old = true);

(new_link_48514.onload = ((function (seq__48220_48508,chunk__48224_48509,count__48225_48510,i__48226_48511,seq__47841,chunk__47843,count__47844,i__47845,new_link_48514,path_match_48513,node_48512,path,map__47837,map__47837__$1,msg,updates,reload_info){
return (function (e){
var seq__48281_48516 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48283_48517 = null;
var count__48284_48518 = (0);
var i__48285_48519 = (0);
while(true){
if((i__48285_48519 < count__48284_48518)){
var map__48289_48521 = chunk__48283_48517.cljs$core$IIndexed$_nth$arity$2(null, i__48285_48519);
var map__48289_48522__$1 = cljs.core.__destructure_map(map__48289_48521);
var task_48523 = map__48289_48522__$1;
var fn_str_48524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48289_48522__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48289_48522__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48526 = goog.getObjectByName(fn_str_48524,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48525)].join(''));

(fn_obj_48526.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48526.cljs$core$IFn$_invoke$arity$2(path,new_link_48514) : fn_obj_48526.call(null, path,new_link_48514));


var G__48527 = seq__48281_48516;
var G__48528 = chunk__48283_48517;
var G__48529 = count__48284_48518;
var G__48530 = (i__48285_48519 + (1));
seq__48281_48516 = G__48527;
chunk__48283_48517 = G__48528;
count__48284_48518 = G__48529;
i__48285_48519 = G__48530;
continue;
} else {
var temp__5823__auto___48531 = cljs.core.seq(seq__48281_48516);
if(temp__5823__auto___48531){
var seq__48281_48532__$1 = temp__5823__auto___48531;
if(cljs.core.chunked_seq_QMARK_(seq__48281_48532__$1)){
var c__5525__auto___48533 = cljs.core.chunk_first(seq__48281_48532__$1);
var G__48534 = cljs.core.chunk_rest(seq__48281_48532__$1);
var G__48535 = c__5525__auto___48533;
var G__48536 = cljs.core.count(c__5525__auto___48533);
var G__48537 = (0);
seq__48281_48516 = G__48534;
chunk__48283_48517 = G__48535;
count__48284_48518 = G__48536;
i__48285_48519 = G__48537;
continue;
} else {
var map__48290_48539 = cljs.core.first(seq__48281_48532__$1);
var map__48290_48540__$1 = cljs.core.__destructure_map(map__48290_48539);
var task_48541 = map__48290_48540__$1;
var fn_str_48542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48290_48540__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48290_48540__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48544 = goog.getObjectByName(fn_str_48542,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48543)].join(''));

(fn_obj_48544.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48544.cljs$core$IFn$_invoke$arity$2(path,new_link_48514) : fn_obj_48544.call(null, path,new_link_48514));


var G__48545 = cljs.core.next(seq__48281_48532__$1);
var G__48546 = null;
var G__48547 = (0);
var G__48548 = (0);
seq__48281_48516 = G__48545;
chunk__48283_48517 = G__48546;
count__48284_48518 = G__48547;
i__48285_48519 = G__48548;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48512);
});})(seq__48220_48508,chunk__48224_48509,count__48225_48510,i__48226_48511,seq__47841,chunk__47843,count__47844,i__47845,new_link_48514,path_match_48513,node_48512,path,map__47837,map__47837__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48513], 0));

goog.dom.insertSiblingAfter(new_link_48514,node_48512);


var G__48549 = seq__48220_48508;
var G__48550 = chunk__48224_48509;
var G__48551 = count__48225_48510;
var G__48552 = (i__48226_48511 + (1));
seq__48220_48508 = G__48549;
chunk__48224_48509 = G__48550;
count__48225_48510 = G__48551;
i__48226_48511 = G__48552;
continue;
} else {
var G__48553 = seq__48220_48508;
var G__48554 = chunk__48224_48509;
var G__48555 = count__48225_48510;
var G__48556 = (i__48226_48511 + (1));
seq__48220_48508 = G__48553;
chunk__48224_48509 = G__48554;
count__48225_48510 = G__48555;
i__48226_48511 = G__48556;
continue;
}
} else {
var G__48557 = seq__48220_48508;
var G__48558 = chunk__48224_48509;
var G__48559 = count__48225_48510;
var G__48560 = (i__48226_48511 + (1));
seq__48220_48508 = G__48557;
chunk__48224_48509 = G__48558;
count__48225_48510 = G__48559;
i__48226_48511 = G__48560;
continue;
}
} else {
var temp__5823__auto___48561 = cljs.core.seq(seq__48220_48508);
if(temp__5823__auto___48561){
var seq__48220_48562__$1 = temp__5823__auto___48561;
if(cljs.core.chunked_seq_QMARK_(seq__48220_48562__$1)){
var c__5525__auto___48563 = cljs.core.chunk_first(seq__48220_48562__$1);
var G__48564 = cljs.core.chunk_rest(seq__48220_48562__$1);
var G__48565 = c__5525__auto___48563;
var G__48566 = cljs.core.count(c__5525__auto___48563);
var G__48567 = (0);
seq__48220_48508 = G__48564;
chunk__48224_48509 = G__48565;
count__48225_48510 = G__48566;
i__48226_48511 = G__48567;
continue;
} else {
var node_48568 = cljs.core.first(seq__48220_48562__$1);
if(cljs.core.not(node_48568.shadow$old)){
var path_match_48569 = shadow.cljs.devtools.client.browser.match_paths(node_48568.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48569)){
var new_link_48570 = (function (){var G__48295 = node_48568.cloneNode(true);
G__48295.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48569),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48295;
})();
(node_48568.shadow$old = true);

(new_link_48570.onload = ((function (seq__48220_48508,chunk__48224_48509,count__48225_48510,i__48226_48511,seq__47841,chunk__47843,count__47844,i__47845,new_link_48570,path_match_48569,node_48568,seq__48220_48562__$1,temp__5823__auto___48561,path,map__47837,map__47837__$1,msg,updates,reload_info){
return (function (e){
var seq__48296_48571 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48298_48572 = null;
var count__48299_48573 = (0);
var i__48300_48574 = (0);
while(true){
if((i__48300_48574 < count__48299_48573)){
var map__48310_48576 = chunk__48298_48572.cljs$core$IIndexed$_nth$arity$2(null, i__48300_48574);
var map__48310_48577__$1 = cljs.core.__destructure_map(map__48310_48576);
var task_48578 = map__48310_48577__$1;
var fn_str_48579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48310_48577__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48310_48577__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48581 = goog.getObjectByName(fn_str_48579,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48580)].join(''));

(fn_obj_48581.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48581.cljs$core$IFn$_invoke$arity$2(path,new_link_48570) : fn_obj_48581.call(null, path,new_link_48570));


var G__48582 = seq__48296_48571;
var G__48583 = chunk__48298_48572;
var G__48584 = count__48299_48573;
var G__48585 = (i__48300_48574 + (1));
seq__48296_48571 = G__48582;
chunk__48298_48572 = G__48583;
count__48299_48573 = G__48584;
i__48300_48574 = G__48585;
continue;
} else {
var temp__5823__auto___48587__$1 = cljs.core.seq(seq__48296_48571);
if(temp__5823__auto___48587__$1){
var seq__48296_48588__$1 = temp__5823__auto___48587__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48296_48588__$1)){
var c__5525__auto___48589 = cljs.core.chunk_first(seq__48296_48588__$1);
var G__48590 = cljs.core.chunk_rest(seq__48296_48588__$1);
var G__48591 = c__5525__auto___48589;
var G__48592 = cljs.core.count(c__5525__auto___48589);
var G__48593 = (0);
seq__48296_48571 = G__48590;
chunk__48298_48572 = G__48591;
count__48299_48573 = G__48592;
i__48300_48574 = G__48593;
continue;
} else {
var map__48311_48594 = cljs.core.first(seq__48296_48588__$1);
var map__48311_48595__$1 = cljs.core.__destructure_map(map__48311_48594);
var task_48596 = map__48311_48595__$1;
var fn_str_48597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48311_48595__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48311_48595__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48599 = goog.getObjectByName(fn_str_48597,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48598)].join(''));

(fn_obj_48599.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48599.cljs$core$IFn$_invoke$arity$2(path,new_link_48570) : fn_obj_48599.call(null, path,new_link_48570));


var G__48600 = cljs.core.next(seq__48296_48588__$1);
var G__48601 = null;
var G__48602 = (0);
var G__48603 = (0);
seq__48296_48571 = G__48600;
chunk__48298_48572 = G__48601;
count__48299_48573 = G__48602;
i__48300_48574 = G__48603;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48568);
});})(seq__48220_48508,chunk__48224_48509,count__48225_48510,i__48226_48511,seq__47841,chunk__47843,count__47844,i__47845,new_link_48570,path_match_48569,node_48568,seq__48220_48562__$1,temp__5823__auto___48561,path,map__47837,map__47837__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48569], 0));

goog.dom.insertSiblingAfter(new_link_48570,node_48568);


var G__48604 = cljs.core.next(seq__48220_48562__$1);
var G__48605 = null;
var G__48606 = (0);
var G__48607 = (0);
seq__48220_48508 = G__48604;
chunk__48224_48509 = G__48605;
count__48225_48510 = G__48606;
i__48226_48511 = G__48607;
continue;
} else {
var G__48608 = cljs.core.next(seq__48220_48562__$1);
var G__48609 = null;
var G__48610 = (0);
var G__48611 = (0);
seq__48220_48508 = G__48608;
chunk__48224_48509 = G__48609;
count__48225_48510 = G__48610;
i__48226_48511 = G__48611;
continue;
}
} else {
var G__48612 = cljs.core.next(seq__48220_48562__$1);
var G__48613 = null;
var G__48614 = (0);
var G__48615 = (0);
seq__48220_48508 = G__48612;
chunk__48224_48509 = G__48613;
count__48225_48510 = G__48614;
i__48226_48511 = G__48615;
continue;
}
}
} else {
}
}
break;
}


var G__48616 = seq__47841;
var G__48617 = chunk__47843;
var G__48618 = count__47844;
var G__48619 = (i__47845 + (1));
seq__47841 = G__48616;
chunk__47843 = G__48617;
count__47844 = G__48618;
i__47845 = G__48619;
continue;
} else {
var G__48620 = seq__47841;
var G__48621 = chunk__47843;
var G__48622 = count__47844;
var G__48623 = (i__47845 + (1));
seq__47841 = G__48620;
chunk__47843 = G__48621;
count__47844 = G__48622;
i__47845 = G__48623;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__47841);
if(temp__5823__auto__){
var seq__47841__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47841__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__47841__$1);
var G__48624 = cljs.core.chunk_rest(seq__47841__$1);
var G__48625 = c__5525__auto__;
var G__48626 = cljs.core.count(c__5525__auto__);
var G__48627 = (0);
seq__47841 = G__48624;
chunk__47843 = G__48625;
count__47844 = G__48626;
i__47845 = G__48627;
continue;
} else {
var path = cljs.core.first(seq__47841__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48328_48628 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48332_48629 = null;
var count__48333_48630 = (0);
var i__48334_48631 = (0);
while(true){
if((i__48334_48631 < count__48333_48630)){
var node_48632 = chunk__48332_48629.cljs$core$IIndexed$_nth$arity$2(null, i__48334_48631);
if(cljs.core.not(node_48632.shadow$old)){
var path_match_48633 = shadow.cljs.devtools.client.browser.match_paths(node_48632.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48633)){
var new_link_48634 = (function (){var G__48371 = node_48632.cloneNode(true);
G__48371.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48633),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48371;
})();
(node_48632.shadow$old = true);

(new_link_48634.onload = ((function (seq__48328_48628,chunk__48332_48629,count__48333_48630,i__48334_48631,seq__47841,chunk__47843,count__47844,i__47845,new_link_48634,path_match_48633,node_48632,path,seq__47841__$1,temp__5823__auto__,map__47837,map__47837__$1,msg,updates,reload_info){
return (function (e){
var seq__48372_48635 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48374_48636 = null;
var count__48375_48637 = (0);
var i__48376_48638 = (0);
while(true){
if((i__48376_48638 < count__48375_48637)){
var map__48380_48639 = chunk__48374_48636.cljs$core$IIndexed$_nth$arity$2(null, i__48376_48638);
var map__48380_48640__$1 = cljs.core.__destructure_map(map__48380_48639);
var task_48641 = map__48380_48640__$1;
var fn_str_48642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48380_48640__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48380_48640__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48644 = goog.getObjectByName(fn_str_48642,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48643)].join(''));

(fn_obj_48644.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48644.cljs$core$IFn$_invoke$arity$2(path,new_link_48634) : fn_obj_48644.call(null, path,new_link_48634));


var G__48645 = seq__48372_48635;
var G__48646 = chunk__48374_48636;
var G__48647 = count__48375_48637;
var G__48648 = (i__48376_48638 + (1));
seq__48372_48635 = G__48645;
chunk__48374_48636 = G__48646;
count__48375_48637 = G__48647;
i__48376_48638 = G__48648;
continue;
} else {
var temp__5823__auto___48649__$1 = cljs.core.seq(seq__48372_48635);
if(temp__5823__auto___48649__$1){
var seq__48372_48650__$1 = temp__5823__auto___48649__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48372_48650__$1)){
var c__5525__auto___48651 = cljs.core.chunk_first(seq__48372_48650__$1);
var G__48652 = cljs.core.chunk_rest(seq__48372_48650__$1);
var G__48653 = c__5525__auto___48651;
var G__48654 = cljs.core.count(c__5525__auto___48651);
var G__48655 = (0);
seq__48372_48635 = G__48652;
chunk__48374_48636 = G__48653;
count__48375_48637 = G__48654;
i__48376_48638 = G__48655;
continue;
} else {
var map__48381_48656 = cljs.core.first(seq__48372_48650__$1);
var map__48381_48657__$1 = cljs.core.__destructure_map(map__48381_48656);
var task_48658 = map__48381_48657__$1;
var fn_str_48659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48381_48657__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48381_48657__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48662 = goog.getObjectByName(fn_str_48659,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48660)].join(''));

(fn_obj_48662.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48662.cljs$core$IFn$_invoke$arity$2(path,new_link_48634) : fn_obj_48662.call(null, path,new_link_48634));


var G__48663 = cljs.core.next(seq__48372_48650__$1);
var G__48664 = null;
var G__48665 = (0);
var G__48666 = (0);
seq__48372_48635 = G__48663;
chunk__48374_48636 = G__48664;
count__48375_48637 = G__48665;
i__48376_48638 = G__48666;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48632);
});})(seq__48328_48628,chunk__48332_48629,count__48333_48630,i__48334_48631,seq__47841,chunk__47843,count__47844,i__47845,new_link_48634,path_match_48633,node_48632,path,seq__47841__$1,temp__5823__auto__,map__47837,map__47837__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48633], 0));

goog.dom.insertSiblingAfter(new_link_48634,node_48632);


var G__48667 = seq__48328_48628;
var G__48668 = chunk__48332_48629;
var G__48669 = count__48333_48630;
var G__48670 = (i__48334_48631 + (1));
seq__48328_48628 = G__48667;
chunk__48332_48629 = G__48668;
count__48333_48630 = G__48669;
i__48334_48631 = G__48670;
continue;
} else {
var G__48671 = seq__48328_48628;
var G__48672 = chunk__48332_48629;
var G__48673 = count__48333_48630;
var G__48674 = (i__48334_48631 + (1));
seq__48328_48628 = G__48671;
chunk__48332_48629 = G__48672;
count__48333_48630 = G__48673;
i__48334_48631 = G__48674;
continue;
}
} else {
var G__48675 = seq__48328_48628;
var G__48676 = chunk__48332_48629;
var G__48677 = count__48333_48630;
var G__48678 = (i__48334_48631 + (1));
seq__48328_48628 = G__48675;
chunk__48332_48629 = G__48676;
count__48333_48630 = G__48677;
i__48334_48631 = G__48678;
continue;
}
} else {
var temp__5823__auto___48679__$1 = cljs.core.seq(seq__48328_48628);
if(temp__5823__auto___48679__$1){
var seq__48328_48680__$1 = temp__5823__auto___48679__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48328_48680__$1)){
var c__5525__auto___48681 = cljs.core.chunk_first(seq__48328_48680__$1);
var G__48682 = cljs.core.chunk_rest(seq__48328_48680__$1);
var G__48683 = c__5525__auto___48681;
var G__48684 = cljs.core.count(c__5525__auto___48681);
var G__48685 = (0);
seq__48328_48628 = G__48682;
chunk__48332_48629 = G__48683;
count__48333_48630 = G__48684;
i__48334_48631 = G__48685;
continue;
} else {
var node_48686 = cljs.core.first(seq__48328_48680__$1);
if(cljs.core.not(node_48686.shadow$old)){
var path_match_48687 = shadow.cljs.devtools.client.browser.match_paths(node_48686.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48687)){
var new_link_48688 = (function (){var G__48383 = node_48686.cloneNode(true);
G__48383.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48687),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48383;
})();
(node_48686.shadow$old = true);

(new_link_48688.onload = ((function (seq__48328_48628,chunk__48332_48629,count__48333_48630,i__48334_48631,seq__47841,chunk__47843,count__47844,i__47845,new_link_48688,path_match_48687,node_48686,seq__48328_48680__$1,temp__5823__auto___48679__$1,path,seq__47841__$1,temp__5823__auto__,map__47837,map__47837__$1,msg,updates,reload_info){
return (function (e){
var seq__48384_48689 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48386_48690 = null;
var count__48387_48691 = (0);
var i__48388_48692 = (0);
while(true){
if((i__48388_48692 < count__48387_48691)){
var map__48392_48693 = chunk__48386_48690.cljs$core$IIndexed$_nth$arity$2(null, i__48388_48692);
var map__48392_48694__$1 = cljs.core.__destructure_map(map__48392_48693);
var task_48695 = map__48392_48694__$1;
var fn_str_48696 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48392_48694__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48392_48694__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48698 = goog.getObjectByName(fn_str_48696,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48697)].join(''));

(fn_obj_48698.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48698.cljs$core$IFn$_invoke$arity$2(path,new_link_48688) : fn_obj_48698.call(null, path,new_link_48688));


var G__48699 = seq__48384_48689;
var G__48700 = chunk__48386_48690;
var G__48701 = count__48387_48691;
var G__48702 = (i__48388_48692 + (1));
seq__48384_48689 = G__48699;
chunk__48386_48690 = G__48700;
count__48387_48691 = G__48701;
i__48388_48692 = G__48702;
continue;
} else {
var temp__5823__auto___48704__$2 = cljs.core.seq(seq__48384_48689);
if(temp__5823__auto___48704__$2){
var seq__48384_48705__$1 = temp__5823__auto___48704__$2;
if(cljs.core.chunked_seq_QMARK_(seq__48384_48705__$1)){
var c__5525__auto___48706 = cljs.core.chunk_first(seq__48384_48705__$1);
var G__48707 = cljs.core.chunk_rest(seq__48384_48705__$1);
var G__48708 = c__5525__auto___48706;
var G__48709 = cljs.core.count(c__5525__auto___48706);
var G__48710 = (0);
seq__48384_48689 = G__48707;
chunk__48386_48690 = G__48708;
count__48387_48691 = G__48709;
i__48388_48692 = G__48710;
continue;
} else {
var map__48393_48711 = cljs.core.first(seq__48384_48705__$1);
var map__48393_48712__$1 = cljs.core.__destructure_map(map__48393_48711);
var task_48713 = map__48393_48712__$1;
var fn_str_48714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48393_48712__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48393_48712__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48716 = goog.getObjectByName(fn_str_48714,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48715)].join(''));

(fn_obj_48716.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48716.cljs$core$IFn$_invoke$arity$2(path,new_link_48688) : fn_obj_48716.call(null, path,new_link_48688));


var G__48718 = cljs.core.next(seq__48384_48705__$1);
var G__48719 = null;
var G__48720 = (0);
var G__48721 = (0);
seq__48384_48689 = G__48718;
chunk__48386_48690 = G__48719;
count__48387_48691 = G__48720;
i__48388_48692 = G__48721;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48686);
});})(seq__48328_48628,chunk__48332_48629,count__48333_48630,i__48334_48631,seq__47841,chunk__47843,count__47844,i__47845,new_link_48688,path_match_48687,node_48686,seq__48328_48680__$1,temp__5823__auto___48679__$1,path,seq__47841__$1,temp__5823__auto__,map__47837,map__47837__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48687], 0));

goog.dom.insertSiblingAfter(new_link_48688,node_48686);


var G__48722 = cljs.core.next(seq__48328_48680__$1);
var G__48723 = null;
var G__48724 = (0);
var G__48725 = (0);
seq__48328_48628 = G__48722;
chunk__48332_48629 = G__48723;
count__48333_48630 = G__48724;
i__48334_48631 = G__48725;
continue;
} else {
var G__48726 = cljs.core.next(seq__48328_48680__$1);
var G__48727 = null;
var G__48728 = (0);
var G__48729 = (0);
seq__48328_48628 = G__48726;
chunk__48332_48629 = G__48727;
count__48333_48630 = G__48728;
i__48334_48631 = G__48729;
continue;
}
} else {
var G__48730 = cljs.core.next(seq__48328_48680__$1);
var G__48731 = null;
var G__48732 = (0);
var G__48733 = (0);
seq__48328_48628 = G__48730;
chunk__48332_48629 = G__48731;
count__48333_48630 = G__48732;
i__48334_48631 = G__48733;
continue;
}
}
} else {
}
}
break;
}


var G__48734 = cljs.core.next(seq__47841__$1);
var G__48735 = null;
var G__48736 = (0);
var G__48737 = (0);
seq__47841 = G__48734;
chunk__47843 = G__48735;
count__47844 = G__48736;
i__47845 = G__48737;
continue;
} else {
var G__48738 = cljs.core.next(seq__47841__$1);
var G__48739 = null;
var G__48740 = (0);
var G__48741 = (0);
seq__47841 = G__48738;
chunk__47843 = G__48739;
count__47844 = G__48740;
i__47845 = G__48741;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__48402){
var map__48403 = p__48402;
var map__48403__$1 = cljs.core.__destructure_map(map__48403);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48403__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__48404,done,error){
var map__48405 = p__48404;
var map__48405__$1 = cljs.core.__destructure_map(map__48405);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48405__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__48406,done,error){
var map__48407 = p__48406;
var map__48407__$1 = cljs.core.__destructure_map(map__48407);
var msg = map__48407__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48407__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48407__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48407__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__48409){
var map__48410 = p__48409;
var map__48410__$1 = cljs.core.__destructure_map(map__48410);
var src = map__48410__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48410__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__48411 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__48411) : done.call(null, G__48411));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__48412){
var map__48413 = p__48412;
var map__48413__$1 = cljs.core.__destructure_map(map__48413);
var msg__$1 = map__48413__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48413__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e48414){var ex = e48414;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__48415){
var map__48416 = p__48415;
var map__48416__$1 = cljs.core.__destructure_map(map__48416);
var env = map__48416__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48416__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__48422){
var map__48423 = p__48422;
var map__48423__$1 = cljs.core.__destructure_map(map__48423);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48423__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48423__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__48424){
var map__48425 = p__48424;
var map__48425__$1 = cljs.core.__destructure_map(map__48425);
var svc = map__48425__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48425__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
