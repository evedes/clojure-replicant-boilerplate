goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__30643){
var map__30644 = p__30643;
var map__30644__$1 = cljs.core.__destructure_map(map__30644);
var runtime = map__30644__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30644__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_30867 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_30867)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__30649 = runtime;
var G__30650 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_30867);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__30649,G__30650) : shadow.remote.runtime.shared.process.call(null, G__30649,G__30650));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__30652,res){
var map__30653 = p__30652;
var map__30653__$1 = cljs.core.__destructure_map(map__30653);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30653__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30653__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__30654 = res;
var G__30654__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30654,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__30654);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30654__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__30654__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__30659 = arguments.length;
switch (G__30659) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__30666,msg,handlers,timeout_after_ms){
var map__30667 = p__30666;
var map__30667__$1 = cljs.core.__destructure_map(map__30667);
var runtime = map__30667__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30667__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___30878 = arguments.length;
var i__5727__auto___30879 = (0);
while(true){
if((i__5727__auto___30879 < len__5726__auto___30878)){
args__5732__auto__.push((arguments[i__5727__auto___30879]));

var G__30880 = (i__5727__auto___30879 + (1));
i__5727__auto___30879 = G__30880;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__30676,ev,args){
var map__30677 = p__30676;
var map__30677__$1 = cljs.core.__destructure_map(map__30677);
var runtime = map__30677__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30677__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__30678 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__30681 = null;
var count__30682 = (0);
var i__30683 = (0);
while(true){
if((i__30683 < count__30682)){
var ext = chunk__30681.cljs$core$IIndexed$_nth$arity$2(null, i__30683);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__30881 = seq__30678;
var G__30882 = chunk__30681;
var G__30883 = count__30682;
var G__30884 = (i__30683 + (1));
seq__30678 = G__30881;
chunk__30681 = G__30882;
count__30682 = G__30883;
i__30683 = G__30884;
continue;
} else {
var G__30885 = seq__30678;
var G__30886 = chunk__30681;
var G__30887 = count__30682;
var G__30888 = (i__30683 + (1));
seq__30678 = G__30885;
chunk__30681 = G__30886;
count__30682 = G__30887;
i__30683 = G__30888;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__30678);
if(temp__5823__auto__){
var seq__30678__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30678__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__30678__$1);
var G__30890 = cljs.core.chunk_rest(seq__30678__$1);
var G__30891 = c__5525__auto__;
var G__30892 = cljs.core.count(c__5525__auto__);
var G__30893 = (0);
seq__30678 = G__30890;
chunk__30681 = G__30891;
count__30682 = G__30892;
i__30683 = G__30893;
continue;
} else {
var ext = cljs.core.first(seq__30678__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__30894 = cljs.core.next(seq__30678__$1);
var G__30895 = null;
var G__30896 = (0);
var G__30897 = (0);
seq__30678 = G__30894;
chunk__30681 = G__30895;
count__30682 = G__30896;
i__30683 = G__30897;
continue;
} else {
var G__30899 = cljs.core.next(seq__30678__$1);
var G__30900 = null;
var G__30901 = (0);
var G__30902 = (0);
seq__30678 = G__30899;
chunk__30681 = G__30900;
count__30682 = G__30901;
i__30683 = G__30902;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq30672){
var G__30673 = cljs.core.first(seq30672);
var seq30672__$1 = cljs.core.next(seq30672);
var G__30674 = cljs.core.first(seq30672__$1);
var seq30672__$2 = cljs.core.next(seq30672__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30673,G__30674,seq30672__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__30710,p__30711){
var map__30712 = p__30710;
var map__30712__$1 = cljs.core.__destructure_map(map__30712);
var runtime = map__30712__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30712__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__30713 = p__30711;
var map__30713__$1 = cljs.core.__destructure_map(map__30713);
var msg = map__30713__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30713__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__30715 = cljs.core.deref(state_ref);
var map__30715__$1 = cljs.core.__destructure_map(map__30715);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30715__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30715__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__30721,msg){
var map__30722 = p__30721;
var map__30722__$1 = cljs.core.__destructure_map(map__30722);
var runtime = map__30722__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30722__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__30740,key,p__30741){
var map__30743 = p__30740;
var map__30743__$1 = cljs.core.__destructure_map(map__30743);
var state = map__30743__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30743__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__30744 = p__30741;
var map__30744__$1 = cljs.core.__destructure_map(map__30744);
var spec = map__30744__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30744__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30744__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__30753,key,spec){
var map__30754 = p__30753;
var map__30754__$1 = cljs.core.__destructure_map(map__30754);
var runtime = map__30754__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30754__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___30931 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___30931 == null)){
} else {
var on_welcome_30932 = temp__5827__auto___30931;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_30932.cljs$core$IFn$_invoke$arity$0 ? on_welcome_30932.cljs$core$IFn$_invoke$arity$0() : on_welcome_30932.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__30758_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__30758_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__30759_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__30759_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__30760_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__30760_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__30761_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__30761_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__30762_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__30762_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__30769,key){
var map__30770 = p__30769;
var map__30770__$1 = cljs.core.__destructure_map(map__30770);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30770__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__30775,msg){
var map__30776 = p__30775;
var map__30776__$1 = cljs.core.__destructure_map(map__30776);
var runtime = map__30776__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30776__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__30799,p__30800){
var map__30803 = p__30799;
var map__30803__$1 = cljs.core.__destructure_map(map__30803);
var runtime = map__30803__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30803__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__30804 = p__30800;
var map__30804__$1 = cljs.core.__destructure_map(map__30804);
var msg = map__30804__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30804__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30804__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__30825 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__30827 = null;
var count__30828 = (0);
var i__30829 = (0);
while(true){
if((i__30829 < count__30828)){
var map__30837 = chunk__30827.cljs$core$IIndexed$_nth$arity$2(null, i__30829);
var map__30837__$1 = cljs.core.__destructure_map(map__30837);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30837__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__30982 = seq__30825;
var G__30983 = chunk__30827;
var G__30984 = count__30828;
var G__30985 = (i__30829 + (1));
seq__30825 = G__30982;
chunk__30827 = G__30983;
count__30828 = G__30984;
i__30829 = G__30985;
continue;
} else {
var G__30986 = seq__30825;
var G__30987 = chunk__30827;
var G__30988 = count__30828;
var G__30989 = (i__30829 + (1));
seq__30825 = G__30986;
chunk__30827 = G__30987;
count__30828 = G__30988;
i__30829 = G__30989;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__30825);
if(temp__5823__auto__){
var seq__30825__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30825__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__30825__$1);
var G__30994 = cljs.core.chunk_rest(seq__30825__$1);
var G__30995 = c__5525__auto__;
var G__30996 = cljs.core.count(c__5525__auto__);
var G__30997 = (0);
seq__30825 = G__30994;
chunk__30827 = G__30995;
count__30828 = G__30996;
i__30829 = G__30997;
continue;
} else {
var map__30839 = cljs.core.first(seq__30825__$1);
var map__30839__$1 = cljs.core.__destructure_map(map__30839);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30839__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__30999 = cljs.core.next(seq__30825__$1);
var G__31000 = null;
var G__31001 = (0);
var G__31002 = (0);
seq__30825 = G__30999;
chunk__30827 = G__31000;
count__30828 = G__31001;
i__30829 = G__31002;
continue;
} else {
var G__31003 = cljs.core.next(seq__30825__$1);
var G__31004 = null;
var G__31005 = (0);
var G__31006 = (0);
seq__30825 = G__31003;
chunk__30827 = G__31004;
count__30828 = G__31005;
i__30829 = G__31006;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
