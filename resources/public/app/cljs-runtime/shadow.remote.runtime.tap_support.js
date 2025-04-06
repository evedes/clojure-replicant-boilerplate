goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36720,p__36721){
var map__36731 = p__36720;
var map__36731__$1 = cljs.core.__destructure_map(map__36731);
var svc = map__36731__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36731__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36731__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36731__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36732 = p__36721;
var map__36732__$1 = cljs.core.__destructure_map(map__36732);
var msg = map__36732__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36732__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36732__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36732__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36732__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36796,p__36797){
var map__36799 = p__36796;
var map__36799__$1 = cljs.core.__destructure_map(map__36799);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36799__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36800 = p__36797;
var map__36800__$1 = cljs.core.__destructure_map(map__36800);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36800__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36813,p__36814){
var map__36817 = p__36813;
var map__36817__$1 = cljs.core.__destructure_map(map__36817);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36817__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36817__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36818 = p__36814;
var map__36818__$1 = cljs.core.__destructure_map(map__36818);
var msg = map__36818__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36818__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36828,tid){
var map__36829 = p__36828;
var map__36829__$1 = cljs.core.__destructure_map(map__36829);
var svc = map__36829__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36829__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36840 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36841 = null;
var count__36842 = (0);
var i__36843 = (0);
while(true){
if((i__36843 < count__36842)){
var vec__36886 = chunk__36841.cljs$core$IIndexed$_nth$arity$2(null, i__36843);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36886,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36886,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36924 = seq__36840;
var G__36925 = chunk__36841;
var G__36926 = count__36842;
var G__36927 = (i__36843 + (1));
seq__36840 = G__36924;
chunk__36841 = G__36925;
count__36842 = G__36926;
i__36843 = G__36927;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__36840);
if(temp__5823__auto__){
var seq__36840__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36840__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__36840__$1);
var G__36928 = cljs.core.chunk_rest(seq__36840__$1);
var G__36929 = c__5525__auto__;
var G__36930 = cljs.core.count(c__5525__auto__);
var G__36931 = (0);
seq__36840 = G__36928;
chunk__36841 = G__36929;
count__36842 = G__36930;
i__36843 = G__36931;
continue;
} else {
var vec__36894 = cljs.core.first(seq__36840__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36894,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36894,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36932 = cljs.core.next(seq__36840__$1);
var G__36933 = null;
var G__36934 = (0);
var G__36935 = (0);
seq__36840 = G__36932;
chunk__36841 = G__36933;
count__36842 = G__36934;
i__36843 = G__36935;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36833_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36833_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36834_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36834_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36835_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36835_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36836_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36836_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36909){
var map__36912 = p__36909;
var map__36912__$1 = cljs.core.__destructure_map(map__36912);
var svc = map__36912__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36912__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36912__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
