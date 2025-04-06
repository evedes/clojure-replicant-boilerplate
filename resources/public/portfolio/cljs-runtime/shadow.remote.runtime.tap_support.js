goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__46513,p__46514){
var map__46516 = p__46513;
var map__46516__$1 = cljs.core.__destructure_map(map__46516);
var svc = map__46516__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46516__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46516__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46516__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__46517 = p__46514;
var map__46517__$1 = cljs.core.__destructure_map(map__46517);
var msg = map__46517__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46517__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46517__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46517__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46517__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__46527,p__46528){
var map__46530 = p__46527;
var map__46530__$1 = cljs.core.__destructure_map(map__46530);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46530__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__46531 = p__46528;
var map__46531__$1 = cljs.core.__destructure_map(map__46531);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46531__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__46537,p__46538){
var map__46539 = p__46537;
var map__46539__$1 = cljs.core.__destructure_map(map__46539);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46539__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46539__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__46540 = p__46538;
var map__46540__$1 = cljs.core.__destructure_map(map__46540);
var msg = map__46540__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46540__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__46545,tid){
var map__46546 = p__46545;
var map__46546__$1 = cljs.core.__destructure_map(map__46546);
var svc = map__46546__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46546__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__46558 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__46559 = null;
var count__46560 = (0);
var i__46561 = (0);
while(true){
if((i__46561 < count__46560)){
var vec__46581 = chunk__46559.cljs$core$IIndexed$_nth$arity$2(null, i__46561);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46581,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46581,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__46670 = seq__46558;
var G__46671 = chunk__46559;
var G__46672 = count__46560;
var G__46673 = (i__46561 + (1));
seq__46558 = G__46670;
chunk__46559 = G__46671;
count__46560 = G__46672;
i__46561 = G__46673;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__46558);
if(temp__5823__auto__){
var seq__46558__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46558__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__46558__$1);
var G__46674 = cljs.core.chunk_rest(seq__46558__$1);
var G__46675 = c__5525__auto__;
var G__46676 = cljs.core.count(c__5525__auto__);
var G__46677 = (0);
seq__46558 = G__46674;
chunk__46559 = G__46675;
count__46560 = G__46676;
i__46561 = G__46677;
continue;
} else {
var vec__46598 = cljs.core.first(seq__46558__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46598,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46598,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__46679 = cljs.core.next(seq__46558__$1);
var G__46680 = null;
var G__46681 = (0);
var G__46682 = (0);
seq__46558 = G__46679;
chunk__46559 = G__46680;
count__46560 = G__46681;
i__46561 = G__46682;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__46549_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__46549_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__46550_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__46550_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__46551_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__46551_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__46552_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__46552_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__46622){
var map__46623 = p__46622;
var map__46623__$1 = cljs.core.__destructure_map(map__46623);
var svc = map__46623__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46623__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46623__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
