goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___37946 = arguments.length;
var i__5727__auto___37947 = (0);
while(true){
if((i__5727__auto___37947 < len__5726__auto___37946)){
args__5732__auto__.push((arguments[i__5727__auto___37947]));

var G__37949 = (i__5727__auto___37947 + (1));
i__5727__auto___37947 = G__37949;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37574){
var G__37575 = cljs.core.first(seq37574);
var seq37574__$1 = cljs.core.next(seq37574);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37575,seq37574__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37576 = cljs.core.seq(sources);
var chunk__37577 = null;
var count__37578 = (0);
var i__37579 = (0);
while(true){
if((i__37579 < count__37578)){
var map__37586 = chunk__37577.cljs$core$IIndexed$_nth$arity$2(null, i__37579);
var map__37586__$1 = cljs.core.__destructure_map(map__37586);
var src = map__37586__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37586__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37586__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37586__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37586__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37587){var e_37951 = e37587;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37951);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37951.message)].join('')));
}

var G__37953 = seq__37576;
var G__37954 = chunk__37577;
var G__37955 = count__37578;
var G__37956 = (i__37579 + (1));
seq__37576 = G__37953;
chunk__37577 = G__37954;
count__37578 = G__37955;
i__37579 = G__37956;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37576);
if(temp__5823__auto__){
var seq__37576__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37576__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37576__$1);
var G__37957 = cljs.core.chunk_rest(seq__37576__$1);
var G__37958 = c__5525__auto__;
var G__37959 = cljs.core.count(c__5525__auto__);
var G__37960 = (0);
seq__37576 = G__37957;
chunk__37577 = G__37958;
count__37578 = G__37959;
i__37579 = G__37960;
continue;
} else {
var map__37588 = cljs.core.first(seq__37576__$1);
var map__37588__$1 = cljs.core.__destructure_map(map__37588);
var src = map__37588__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37588__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37588__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37588__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37588__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37589){var e_37961 = e37589;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37961);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37961.message)].join('')));
}

var G__37963 = cljs.core.next(seq__37576__$1);
var G__37964 = null;
var G__37965 = (0);
var G__37966 = (0);
seq__37576 = G__37963;
chunk__37577 = G__37964;
count__37578 = G__37965;
i__37579 = G__37966;
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
var seq__37590 = cljs.core.seq(js_requires);
var chunk__37592 = null;
var count__37593 = (0);
var i__37594 = (0);
while(true){
if((i__37594 < count__37593)){
var js_ns = chunk__37592.cljs$core$IIndexed$_nth$arity$2(null, i__37594);
var require_str_37968 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37968);


var G__37969 = seq__37590;
var G__37970 = chunk__37592;
var G__37971 = count__37593;
var G__37972 = (i__37594 + (1));
seq__37590 = G__37969;
chunk__37592 = G__37970;
count__37593 = G__37971;
i__37594 = G__37972;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37590);
if(temp__5823__auto__){
var seq__37590__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37590__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37590__$1);
var G__37973 = cljs.core.chunk_rest(seq__37590__$1);
var G__37974 = c__5525__auto__;
var G__37975 = cljs.core.count(c__5525__auto__);
var G__37976 = (0);
seq__37590 = G__37973;
chunk__37592 = G__37974;
count__37593 = G__37975;
i__37594 = G__37976;
continue;
} else {
var js_ns = cljs.core.first(seq__37590__$1);
var require_str_37977 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37977);


var G__37978 = cljs.core.next(seq__37590__$1);
var G__37979 = null;
var G__37980 = (0);
var G__37981 = (0);
seq__37590 = G__37978;
chunk__37592 = G__37979;
count__37593 = G__37980;
i__37594 = G__37981;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37597){
var map__37598 = p__37597;
var map__37598__$1 = cljs.core.__destructure_map(map__37598);
var msg = map__37598__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37598__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37598__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37599(s__37600){
return (new cljs.core.LazySeq(null,(function (){
var s__37600__$1 = s__37600;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__37600__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__37605 = cljs.core.first(xs__6383__auto__);
var map__37605__$1 = cljs.core.__destructure_map(map__37605);
var src = map__37605__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37605__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37605__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__37600__$1,map__37605,map__37605__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37598,map__37598__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37599_$_iter__37601(s__37602){
return (new cljs.core.LazySeq(null,((function (s__37600__$1,map__37605,map__37605__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37598,map__37598__$1,msg,info,reload_info){
return (function (){
var s__37602__$1 = s__37602;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__37602__$1);
if(temp__5823__auto____$1){
var s__37602__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37602__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__37602__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__37604 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__37603 = (0);
while(true){
if((i__37603 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__37603);
cljs.core.chunk_append(b__37604,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37984 = (i__37603 + (1));
i__37603 = G__37984;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37604),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37599_$_iter__37601(cljs.core.chunk_rest(s__37602__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37604),null);
}
} else {
var warning = cljs.core.first(s__37602__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37599_$_iter__37601(cljs.core.rest(s__37602__$2)));
}
} else {
return null;
}
break;
}
});})(s__37600__$1,map__37605,map__37605__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37598,map__37598__$1,msg,info,reload_info))
,null,null));
});})(s__37600__$1,map__37605,map__37605__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37598,map__37598__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37599(cljs.core.rest(s__37600__$1)));
} else {
var G__37985 = cljs.core.rest(s__37600__$1);
s__37600__$1 = G__37985;
continue;
}
} else {
var G__37986 = cljs.core.rest(s__37600__$1);
s__37600__$1 = G__37986;
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
var seq__37609_37988 = cljs.core.seq(warnings);
var chunk__37610_37989 = null;
var count__37611_37990 = (0);
var i__37612_37991 = (0);
while(true){
if((i__37612_37991 < count__37611_37990)){
var map__37616_37992 = chunk__37610_37989.cljs$core$IIndexed$_nth$arity$2(null, i__37612_37991);
var map__37616_37993__$1 = cljs.core.__destructure_map(map__37616_37992);
var w_37994 = map__37616_37993__$1;
var msg_37995__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37616_37993__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37616_37993__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37616_37993__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37616_37993__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37998)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37996),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37997),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37995__$1)].join(''));


var G__37999 = seq__37609_37988;
var G__38000 = chunk__37610_37989;
var G__38001 = count__37611_37990;
var G__38002 = (i__37612_37991 + (1));
seq__37609_37988 = G__37999;
chunk__37610_37989 = G__38000;
count__37611_37990 = G__38001;
i__37612_37991 = G__38002;
continue;
} else {
var temp__5823__auto___38003 = cljs.core.seq(seq__37609_37988);
if(temp__5823__auto___38003){
var seq__37609_38004__$1 = temp__5823__auto___38003;
if(cljs.core.chunked_seq_QMARK_(seq__37609_38004__$1)){
var c__5525__auto___38005 = cljs.core.chunk_first(seq__37609_38004__$1);
var G__38006 = cljs.core.chunk_rest(seq__37609_38004__$1);
var G__38007 = c__5525__auto___38005;
var G__38008 = cljs.core.count(c__5525__auto___38005);
var G__38009 = (0);
seq__37609_37988 = G__38006;
chunk__37610_37989 = G__38007;
count__37611_37990 = G__38008;
i__37612_37991 = G__38009;
continue;
} else {
var map__37617_38010 = cljs.core.first(seq__37609_38004__$1);
var map__37617_38011__$1 = cljs.core.__destructure_map(map__37617_38010);
var w_38012 = map__37617_38011__$1;
var msg_38013__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37617_38011__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38014 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37617_38011__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38015 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37617_38011__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38016 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37617_38011__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38016)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38014),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38015),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38013__$1)].join(''));


var G__38019 = cljs.core.next(seq__37609_38004__$1);
var G__38020 = null;
var G__38021 = (0);
var G__38022 = (0);
seq__37609_37988 = G__38019;
chunk__37610_37989 = G__38020;
count__37611_37990 = G__38021;
i__37612_37991 = G__38022;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37596_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37596_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37618){
var map__37619 = p__37618;
var map__37619__$1 = cljs.core.__destructure_map(map__37619);
var msg = map__37619__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37619__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37619__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37621 = cljs.core.seq(updates);
var chunk__37623 = null;
var count__37624 = (0);
var i__37625 = (0);
while(true){
if((i__37625 < count__37624)){
var path = chunk__37623.cljs$core$IIndexed$_nth$arity$2(null, i__37625);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37789_38025 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37793_38026 = null;
var count__37794_38027 = (0);
var i__37795_38028 = (0);
while(true){
if((i__37795_38028 < count__37794_38027)){
var node_38030 = chunk__37793_38026.cljs$core$IIndexed$_nth$arity$2(null, i__37795_38028);
if(cljs.core.not(node_38030.shadow$old)){
var path_match_38031 = shadow.cljs.devtools.client.browser.match_paths(node_38030.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38031)){
var new_link_38032 = (function (){var G__37828 = node_38030.cloneNode(true);
G__37828.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38031),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37828;
})();
(node_38030.shadow$old = true);

(new_link_38032.onload = ((function (seq__37789_38025,chunk__37793_38026,count__37794_38027,i__37795_38028,seq__37621,chunk__37623,count__37624,i__37625,new_link_38032,path_match_38031,node_38030,path,map__37619,map__37619__$1,msg,updates,reload_info){
return (function (e){
var seq__37831_38033 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37833_38034 = null;
var count__37834_38035 = (0);
var i__37835_38036 = (0);
while(true){
if((i__37835_38036 < count__37834_38035)){
var map__37841_38037 = chunk__37833_38034.cljs$core$IIndexed$_nth$arity$2(null, i__37835_38036);
var map__37841_38038__$1 = cljs.core.__destructure_map(map__37841_38037);
var task_38039 = map__37841_38038__$1;
var fn_str_38040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37841_38038__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37841_38038__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38042 = goog.getObjectByName(fn_str_38040,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38041)].join(''));

(fn_obj_38042.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38042.cljs$core$IFn$_invoke$arity$2(path,new_link_38032) : fn_obj_38042.call(null, path,new_link_38032));


var G__38044 = seq__37831_38033;
var G__38045 = chunk__37833_38034;
var G__38046 = count__37834_38035;
var G__38047 = (i__37835_38036 + (1));
seq__37831_38033 = G__38044;
chunk__37833_38034 = G__38045;
count__37834_38035 = G__38046;
i__37835_38036 = G__38047;
continue;
} else {
var temp__5823__auto___38048 = cljs.core.seq(seq__37831_38033);
if(temp__5823__auto___38048){
var seq__37831_38049__$1 = temp__5823__auto___38048;
if(cljs.core.chunked_seq_QMARK_(seq__37831_38049__$1)){
var c__5525__auto___38050 = cljs.core.chunk_first(seq__37831_38049__$1);
var G__38051 = cljs.core.chunk_rest(seq__37831_38049__$1);
var G__38052 = c__5525__auto___38050;
var G__38053 = cljs.core.count(c__5525__auto___38050);
var G__38054 = (0);
seq__37831_38033 = G__38051;
chunk__37833_38034 = G__38052;
count__37834_38035 = G__38053;
i__37835_38036 = G__38054;
continue;
} else {
var map__37846_38055 = cljs.core.first(seq__37831_38049__$1);
var map__37846_38056__$1 = cljs.core.__destructure_map(map__37846_38055);
var task_38057 = map__37846_38056__$1;
var fn_str_38058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37846_38056__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37846_38056__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38060 = goog.getObjectByName(fn_str_38058,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38059)].join(''));

(fn_obj_38060.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38060.cljs$core$IFn$_invoke$arity$2(path,new_link_38032) : fn_obj_38060.call(null, path,new_link_38032));


var G__38061 = cljs.core.next(seq__37831_38049__$1);
var G__38062 = null;
var G__38063 = (0);
var G__38064 = (0);
seq__37831_38033 = G__38061;
chunk__37833_38034 = G__38062;
count__37834_38035 = G__38063;
i__37835_38036 = G__38064;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38030);
});})(seq__37789_38025,chunk__37793_38026,count__37794_38027,i__37795_38028,seq__37621,chunk__37623,count__37624,i__37625,new_link_38032,path_match_38031,node_38030,path,map__37619,map__37619__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38031], 0));

goog.dom.insertSiblingAfter(new_link_38032,node_38030);


var G__38065 = seq__37789_38025;
var G__38066 = chunk__37793_38026;
var G__38067 = count__37794_38027;
var G__38068 = (i__37795_38028 + (1));
seq__37789_38025 = G__38065;
chunk__37793_38026 = G__38066;
count__37794_38027 = G__38067;
i__37795_38028 = G__38068;
continue;
} else {
var G__38069 = seq__37789_38025;
var G__38070 = chunk__37793_38026;
var G__38071 = count__37794_38027;
var G__38072 = (i__37795_38028 + (1));
seq__37789_38025 = G__38069;
chunk__37793_38026 = G__38070;
count__37794_38027 = G__38071;
i__37795_38028 = G__38072;
continue;
}
} else {
var G__38073 = seq__37789_38025;
var G__38074 = chunk__37793_38026;
var G__38075 = count__37794_38027;
var G__38076 = (i__37795_38028 + (1));
seq__37789_38025 = G__38073;
chunk__37793_38026 = G__38074;
count__37794_38027 = G__38075;
i__37795_38028 = G__38076;
continue;
}
} else {
var temp__5823__auto___38077 = cljs.core.seq(seq__37789_38025);
if(temp__5823__auto___38077){
var seq__37789_38078__$1 = temp__5823__auto___38077;
if(cljs.core.chunked_seq_QMARK_(seq__37789_38078__$1)){
var c__5525__auto___38079 = cljs.core.chunk_first(seq__37789_38078__$1);
var G__38080 = cljs.core.chunk_rest(seq__37789_38078__$1);
var G__38081 = c__5525__auto___38079;
var G__38082 = cljs.core.count(c__5525__auto___38079);
var G__38083 = (0);
seq__37789_38025 = G__38080;
chunk__37793_38026 = G__38081;
count__37794_38027 = G__38082;
i__37795_38028 = G__38083;
continue;
} else {
var node_38084 = cljs.core.first(seq__37789_38078__$1);
if(cljs.core.not(node_38084.shadow$old)){
var path_match_38085 = shadow.cljs.devtools.client.browser.match_paths(node_38084.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38085)){
var new_link_38087 = (function (){var G__37848 = node_38084.cloneNode(true);
G__37848.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38085),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37848;
})();
(node_38084.shadow$old = true);

(new_link_38087.onload = ((function (seq__37789_38025,chunk__37793_38026,count__37794_38027,i__37795_38028,seq__37621,chunk__37623,count__37624,i__37625,new_link_38087,path_match_38085,node_38084,seq__37789_38078__$1,temp__5823__auto___38077,path,map__37619,map__37619__$1,msg,updates,reload_info){
return (function (e){
var seq__37850_38089 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37852_38090 = null;
var count__37853_38091 = (0);
var i__37854_38092 = (0);
while(true){
if((i__37854_38092 < count__37853_38091)){
var map__37860_38093 = chunk__37852_38090.cljs$core$IIndexed$_nth$arity$2(null, i__37854_38092);
var map__37860_38094__$1 = cljs.core.__destructure_map(map__37860_38093);
var task_38095 = map__37860_38094__$1;
var fn_str_38096 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37860_38094__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38097 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37860_38094__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38098 = goog.getObjectByName(fn_str_38096,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38097)].join(''));

(fn_obj_38098.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38098.cljs$core$IFn$_invoke$arity$2(path,new_link_38087) : fn_obj_38098.call(null, path,new_link_38087));


var G__38100 = seq__37850_38089;
var G__38101 = chunk__37852_38090;
var G__38102 = count__37853_38091;
var G__38103 = (i__37854_38092 + (1));
seq__37850_38089 = G__38100;
chunk__37852_38090 = G__38101;
count__37853_38091 = G__38102;
i__37854_38092 = G__38103;
continue;
} else {
var temp__5823__auto___38104__$1 = cljs.core.seq(seq__37850_38089);
if(temp__5823__auto___38104__$1){
var seq__37850_38105__$1 = temp__5823__auto___38104__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37850_38105__$1)){
var c__5525__auto___38106 = cljs.core.chunk_first(seq__37850_38105__$1);
var G__38107 = cljs.core.chunk_rest(seq__37850_38105__$1);
var G__38108 = c__5525__auto___38106;
var G__38109 = cljs.core.count(c__5525__auto___38106);
var G__38110 = (0);
seq__37850_38089 = G__38107;
chunk__37852_38090 = G__38108;
count__37853_38091 = G__38109;
i__37854_38092 = G__38110;
continue;
} else {
var map__37861_38111 = cljs.core.first(seq__37850_38105__$1);
var map__37861_38112__$1 = cljs.core.__destructure_map(map__37861_38111);
var task_38113 = map__37861_38112__$1;
var fn_str_38114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37861_38112__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37861_38112__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38116 = goog.getObjectByName(fn_str_38114,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38115)].join(''));

(fn_obj_38116.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38116.cljs$core$IFn$_invoke$arity$2(path,new_link_38087) : fn_obj_38116.call(null, path,new_link_38087));


var G__38117 = cljs.core.next(seq__37850_38105__$1);
var G__38118 = null;
var G__38119 = (0);
var G__38120 = (0);
seq__37850_38089 = G__38117;
chunk__37852_38090 = G__38118;
count__37853_38091 = G__38119;
i__37854_38092 = G__38120;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38084);
});})(seq__37789_38025,chunk__37793_38026,count__37794_38027,i__37795_38028,seq__37621,chunk__37623,count__37624,i__37625,new_link_38087,path_match_38085,node_38084,seq__37789_38078__$1,temp__5823__auto___38077,path,map__37619,map__37619__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38085], 0));

goog.dom.insertSiblingAfter(new_link_38087,node_38084);


var G__38121 = cljs.core.next(seq__37789_38078__$1);
var G__38122 = null;
var G__38123 = (0);
var G__38124 = (0);
seq__37789_38025 = G__38121;
chunk__37793_38026 = G__38122;
count__37794_38027 = G__38123;
i__37795_38028 = G__38124;
continue;
} else {
var G__38125 = cljs.core.next(seq__37789_38078__$1);
var G__38126 = null;
var G__38127 = (0);
var G__38128 = (0);
seq__37789_38025 = G__38125;
chunk__37793_38026 = G__38126;
count__37794_38027 = G__38127;
i__37795_38028 = G__38128;
continue;
}
} else {
var G__38129 = cljs.core.next(seq__37789_38078__$1);
var G__38130 = null;
var G__38131 = (0);
var G__38132 = (0);
seq__37789_38025 = G__38129;
chunk__37793_38026 = G__38130;
count__37794_38027 = G__38131;
i__37795_38028 = G__38132;
continue;
}
}
} else {
}
}
break;
}


var G__38133 = seq__37621;
var G__38134 = chunk__37623;
var G__38135 = count__37624;
var G__38136 = (i__37625 + (1));
seq__37621 = G__38133;
chunk__37623 = G__38134;
count__37624 = G__38135;
i__37625 = G__38136;
continue;
} else {
var G__38137 = seq__37621;
var G__38138 = chunk__37623;
var G__38139 = count__37624;
var G__38140 = (i__37625 + (1));
seq__37621 = G__38137;
chunk__37623 = G__38138;
count__37624 = G__38139;
i__37625 = G__38140;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37621);
if(temp__5823__auto__){
var seq__37621__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37621__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37621__$1);
var G__38141 = cljs.core.chunk_rest(seq__37621__$1);
var G__38142 = c__5525__auto__;
var G__38143 = cljs.core.count(c__5525__auto__);
var G__38144 = (0);
seq__37621 = G__38141;
chunk__37623 = G__38142;
count__37624 = G__38143;
i__37625 = G__38144;
continue;
} else {
var path = cljs.core.first(seq__37621__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37863_38146 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37867_38147 = null;
var count__37868_38148 = (0);
var i__37869_38149 = (0);
while(true){
if((i__37869_38149 < count__37868_38148)){
var node_38150 = chunk__37867_38147.cljs$core$IIndexed$_nth$arity$2(null, i__37869_38149);
if(cljs.core.not(node_38150.shadow$old)){
var path_match_38151 = shadow.cljs.devtools.client.browser.match_paths(node_38150.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38151)){
var new_link_38152 = (function (){var G__37896 = node_38150.cloneNode(true);
G__37896.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38151),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37896;
})();
(node_38150.shadow$old = true);

(new_link_38152.onload = ((function (seq__37863_38146,chunk__37867_38147,count__37868_38148,i__37869_38149,seq__37621,chunk__37623,count__37624,i__37625,new_link_38152,path_match_38151,node_38150,path,seq__37621__$1,temp__5823__auto__,map__37619,map__37619__$1,msg,updates,reload_info){
return (function (e){
var seq__37897_38153 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37899_38154 = null;
var count__37900_38155 = (0);
var i__37901_38156 = (0);
while(true){
if((i__37901_38156 < count__37900_38155)){
var map__37905_38157 = chunk__37899_38154.cljs$core$IIndexed$_nth$arity$2(null, i__37901_38156);
var map__37905_38158__$1 = cljs.core.__destructure_map(map__37905_38157);
var task_38159 = map__37905_38158__$1;
var fn_str_38160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37905_38158__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37905_38158__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38162 = goog.getObjectByName(fn_str_38160,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38161)].join(''));

(fn_obj_38162.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38162.cljs$core$IFn$_invoke$arity$2(path,new_link_38152) : fn_obj_38162.call(null, path,new_link_38152));


var G__38163 = seq__37897_38153;
var G__38164 = chunk__37899_38154;
var G__38165 = count__37900_38155;
var G__38166 = (i__37901_38156 + (1));
seq__37897_38153 = G__38163;
chunk__37899_38154 = G__38164;
count__37900_38155 = G__38165;
i__37901_38156 = G__38166;
continue;
} else {
var temp__5823__auto___38167__$1 = cljs.core.seq(seq__37897_38153);
if(temp__5823__auto___38167__$1){
var seq__37897_38168__$1 = temp__5823__auto___38167__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37897_38168__$1)){
var c__5525__auto___38169 = cljs.core.chunk_first(seq__37897_38168__$1);
var G__38170 = cljs.core.chunk_rest(seq__37897_38168__$1);
var G__38171 = c__5525__auto___38169;
var G__38172 = cljs.core.count(c__5525__auto___38169);
var G__38173 = (0);
seq__37897_38153 = G__38170;
chunk__37899_38154 = G__38171;
count__37900_38155 = G__38172;
i__37901_38156 = G__38173;
continue;
} else {
var map__37906_38174 = cljs.core.first(seq__37897_38168__$1);
var map__37906_38175__$1 = cljs.core.__destructure_map(map__37906_38174);
var task_38176 = map__37906_38175__$1;
var fn_str_38177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37906_38175__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37906_38175__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38179 = goog.getObjectByName(fn_str_38177,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38178)].join(''));

(fn_obj_38179.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38179.cljs$core$IFn$_invoke$arity$2(path,new_link_38152) : fn_obj_38179.call(null, path,new_link_38152));


var G__38180 = cljs.core.next(seq__37897_38168__$1);
var G__38181 = null;
var G__38182 = (0);
var G__38183 = (0);
seq__37897_38153 = G__38180;
chunk__37899_38154 = G__38181;
count__37900_38155 = G__38182;
i__37901_38156 = G__38183;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38150);
});})(seq__37863_38146,chunk__37867_38147,count__37868_38148,i__37869_38149,seq__37621,chunk__37623,count__37624,i__37625,new_link_38152,path_match_38151,node_38150,path,seq__37621__$1,temp__5823__auto__,map__37619,map__37619__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38151], 0));

goog.dom.insertSiblingAfter(new_link_38152,node_38150);


var G__38185 = seq__37863_38146;
var G__38186 = chunk__37867_38147;
var G__38187 = count__37868_38148;
var G__38188 = (i__37869_38149 + (1));
seq__37863_38146 = G__38185;
chunk__37867_38147 = G__38186;
count__37868_38148 = G__38187;
i__37869_38149 = G__38188;
continue;
} else {
var G__38191 = seq__37863_38146;
var G__38193 = chunk__37867_38147;
var G__38194 = count__37868_38148;
var G__38195 = (i__37869_38149 + (1));
seq__37863_38146 = G__38191;
chunk__37867_38147 = G__38193;
count__37868_38148 = G__38194;
i__37869_38149 = G__38195;
continue;
}
} else {
var G__38197 = seq__37863_38146;
var G__38198 = chunk__37867_38147;
var G__38199 = count__37868_38148;
var G__38200 = (i__37869_38149 + (1));
seq__37863_38146 = G__38197;
chunk__37867_38147 = G__38198;
count__37868_38148 = G__38199;
i__37869_38149 = G__38200;
continue;
}
} else {
var temp__5823__auto___38201__$1 = cljs.core.seq(seq__37863_38146);
if(temp__5823__auto___38201__$1){
var seq__37863_38203__$1 = temp__5823__auto___38201__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37863_38203__$1)){
var c__5525__auto___38204 = cljs.core.chunk_first(seq__37863_38203__$1);
var G__38205 = cljs.core.chunk_rest(seq__37863_38203__$1);
var G__38206 = c__5525__auto___38204;
var G__38207 = cljs.core.count(c__5525__auto___38204);
var G__38208 = (0);
seq__37863_38146 = G__38205;
chunk__37867_38147 = G__38206;
count__37868_38148 = G__38207;
i__37869_38149 = G__38208;
continue;
} else {
var node_38209 = cljs.core.first(seq__37863_38203__$1);
if(cljs.core.not(node_38209.shadow$old)){
var path_match_38210 = shadow.cljs.devtools.client.browser.match_paths(node_38209.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38210)){
var new_link_38211 = (function (){var G__37907 = node_38209.cloneNode(true);
G__37907.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38210),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37907;
})();
(node_38209.shadow$old = true);

(new_link_38211.onload = ((function (seq__37863_38146,chunk__37867_38147,count__37868_38148,i__37869_38149,seq__37621,chunk__37623,count__37624,i__37625,new_link_38211,path_match_38210,node_38209,seq__37863_38203__$1,temp__5823__auto___38201__$1,path,seq__37621__$1,temp__5823__auto__,map__37619,map__37619__$1,msg,updates,reload_info){
return (function (e){
var seq__37908_38212 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37910_38213 = null;
var count__37911_38214 = (0);
var i__37912_38215 = (0);
while(true){
if((i__37912_38215 < count__37911_38214)){
var map__37917_38216 = chunk__37910_38213.cljs$core$IIndexed$_nth$arity$2(null, i__37912_38215);
var map__37917_38217__$1 = cljs.core.__destructure_map(map__37917_38216);
var task_38218 = map__37917_38217__$1;
var fn_str_38219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37917_38217__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37917_38217__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38221 = goog.getObjectByName(fn_str_38219,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38220)].join(''));

(fn_obj_38221.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38221.cljs$core$IFn$_invoke$arity$2(path,new_link_38211) : fn_obj_38221.call(null, path,new_link_38211));


var G__38223 = seq__37908_38212;
var G__38224 = chunk__37910_38213;
var G__38225 = count__37911_38214;
var G__38226 = (i__37912_38215 + (1));
seq__37908_38212 = G__38223;
chunk__37910_38213 = G__38224;
count__37911_38214 = G__38225;
i__37912_38215 = G__38226;
continue;
} else {
var temp__5823__auto___38227__$2 = cljs.core.seq(seq__37908_38212);
if(temp__5823__auto___38227__$2){
var seq__37908_38228__$1 = temp__5823__auto___38227__$2;
if(cljs.core.chunked_seq_QMARK_(seq__37908_38228__$1)){
var c__5525__auto___38229 = cljs.core.chunk_first(seq__37908_38228__$1);
var G__38230 = cljs.core.chunk_rest(seq__37908_38228__$1);
var G__38231 = c__5525__auto___38229;
var G__38232 = cljs.core.count(c__5525__auto___38229);
var G__38233 = (0);
seq__37908_38212 = G__38230;
chunk__37910_38213 = G__38231;
count__37911_38214 = G__38232;
i__37912_38215 = G__38233;
continue;
} else {
var map__37919_38234 = cljs.core.first(seq__37908_38228__$1);
var map__37919_38235__$1 = cljs.core.__destructure_map(map__37919_38234);
var task_38236 = map__37919_38235__$1;
var fn_str_38237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37919_38235__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37919_38235__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38239 = goog.getObjectByName(fn_str_38237,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38238)].join(''));

(fn_obj_38239.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38239.cljs$core$IFn$_invoke$arity$2(path,new_link_38211) : fn_obj_38239.call(null, path,new_link_38211));


var G__38240 = cljs.core.next(seq__37908_38228__$1);
var G__38241 = null;
var G__38242 = (0);
var G__38243 = (0);
seq__37908_38212 = G__38240;
chunk__37910_38213 = G__38241;
count__37911_38214 = G__38242;
i__37912_38215 = G__38243;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38209);
});})(seq__37863_38146,chunk__37867_38147,count__37868_38148,i__37869_38149,seq__37621,chunk__37623,count__37624,i__37625,new_link_38211,path_match_38210,node_38209,seq__37863_38203__$1,temp__5823__auto___38201__$1,path,seq__37621__$1,temp__5823__auto__,map__37619,map__37619__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38210], 0));

goog.dom.insertSiblingAfter(new_link_38211,node_38209);


var G__38244 = cljs.core.next(seq__37863_38203__$1);
var G__38245 = null;
var G__38246 = (0);
var G__38247 = (0);
seq__37863_38146 = G__38244;
chunk__37867_38147 = G__38245;
count__37868_38148 = G__38246;
i__37869_38149 = G__38247;
continue;
} else {
var G__38248 = cljs.core.next(seq__37863_38203__$1);
var G__38249 = null;
var G__38250 = (0);
var G__38251 = (0);
seq__37863_38146 = G__38248;
chunk__37867_38147 = G__38249;
count__37868_38148 = G__38250;
i__37869_38149 = G__38251;
continue;
}
} else {
var G__38252 = cljs.core.next(seq__37863_38203__$1);
var G__38253 = null;
var G__38254 = (0);
var G__38255 = (0);
seq__37863_38146 = G__38252;
chunk__37867_38147 = G__38253;
count__37868_38148 = G__38254;
i__37869_38149 = G__38255;
continue;
}
}
} else {
}
}
break;
}


var G__38256 = cljs.core.next(seq__37621__$1);
var G__38257 = null;
var G__38258 = (0);
var G__38259 = (0);
seq__37621 = G__38256;
chunk__37623 = G__38257;
count__37624 = G__38258;
i__37625 = G__38259;
continue;
} else {
var G__38260 = cljs.core.next(seq__37621__$1);
var G__38261 = null;
var G__38262 = (0);
var G__38263 = (0);
seq__37621 = G__38260;
chunk__37623 = G__38261;
count__37624 = G__38262;
i__37625 = G__38263;
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__37922){
var map__37923 = p__37922;
var map__37923__$1 = cljs.core.__destructure_map(map__37923);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37923__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37924,done,error){
var map__37925 = p__37924;
var map__37925__$1 = cljs.core.__destructure_map(map__37925);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37925__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37926,done,error){
var map__37927 = p__37926;
var map__37927__$1 = cljs.core.__destructure_map(map__37927);
var msg = map__37927__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37927__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37927__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37927__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37928){
var map__37929 = p__37928;
var map__37929__$1 = cljs.core.__destructure_map(map__37929);
var src = map__37929__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37929__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37930 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37930) : done.call(null, G__37930));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37931){
var map__37932 = p__37931;
var map__37932__$1 = cljs.core.__destructure_map(map__37932);
var msg__$1 = map__37932__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37932__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e37933){var ex = e37933;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37934){
var map__37935 = p__37934;
var map__37935__$1 = cljs.core.__destructure_map(map__37935);
var env = map__37935__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37935__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37936){
var map__37937 = p__37936;
var map__37937__$1 = cljs.core.__destructure_map(map__37937);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37937__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37937__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__37942){
var map__37944 = p__37942;
var map__37944__$1 = cljs.core.__destructure_map(map__37944);
var svc = map__37944__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37944__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
