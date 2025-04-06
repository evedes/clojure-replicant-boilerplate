goog.provide('portfolio.ui.components.canvas');
portfolio.ui.components.canvas.get_iframe = (function portfolio$ui$components$canvas$get_iframe(canvas_el){
var G__50977 = canvas_el;
if((G__50977 == null)){
return null;
} else {
return G__50977.querySelector(".canvas");
}
});
portfolio.ui.components.canvas.get_iframe_document = (function portfolio$ui$components$canvas$get_iframe_document(canvas_el){
var G__50978 = canvas_el;
var G__50978__$1 = (((G__50978 == null))?null:portfolio.ui.components.canvas.get_iframe(G__50978));
var G__50978__$2 = (((G__50978__$1 == null))?null:G__50978__$1.contentWindow);
if((G__50978__$2 == null)){
return null;
} else {
return G__50978__$2.document;
}
});
portfolio.ui.components.canvas.get_iframe_body = (function portfolio$ui$components$canvas$get_iframe_body(canvas_el){
var G__50979 = canvas_el;
var G__50979__$1 = (((G__50979 == null))?null:portfolio.ui.components.canvas.get_iframe_document(G__50979));
if((G__50979__$1 == null)){
return null;
} else {
return G__50979__$1.body;
}
});
portfolio.ui.components.canvas.report_error = (function portfolio$ui$components$canvas$report_error(cause,e,scene){
return portfolio.ui.actions.dispatch.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"report-render-error","report-render-error",-2098634445).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(scene)),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("action","exception","action/exception",-1254845906),e,new cljs.core.Keyword("action","cause","action/cause",1369441962),cause], null)], 0));
});
portfolio.ui.components.canvas.render_scene = (function portfolio$ui$components$canvas$render_scene(el,p__50980){
var map__50981 = p__50980;
var map__50981__$1 = cljs.core.__destructure_map(map__50981);
var scene = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50981__$1,new cljs.core.Keyword(null,"scene","scene",1523800415));
var tools = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50981__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50981__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var iframe = portfolio.ui.components.canvas.get_iframe(el);
var canvas = (function (){var G__50982 = iframe;
var G__50982__$1 = (((G__50982 == null))?null:G__50982.contentDocument);
if((G__50982__$1 == null)){
return null;
} else {
return G__50982__$1.getElementById("canvas");
}
})();
var error = el.querySelector(".error-container");
if(cljs.core.truth_(error)){
error.parentNode.removeChild(error);

(iframe.style.display = "block");
} else {
}

var seq__50983_51072 = cljs.core.seq(tools);
var chunk__50984_51073 = null;
var count__50985_51074 = (0);
var i__50986_51075 = (0);
while(true){
if((i__50986_51075 < count__50985_51074)){
var tool_51076 = chunk__50984_51073.cljs$core$IIndexed$_nth$arity$2(null, i__50986_51075);
try{portfolio.ui.canvas.protocols.prepare_canvas(tool_51076,el,opt);
}catch (e50989){var e_51077 = e50989;
portfolio.ui.components.canvas.report_error(["Failed to prepare canvas with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tool_51076))].join(''),e_51077,scene);
}

var G__51078 = seq__50983_51072;
var G__51079 = chunk__50984_51073;
var G__51080 = count__50985_51074;
var G__51081 = (i__50986_51075 + (1));
seq__50983_51072 = G__51078;
chunk__50984_51073 = G__51079;
count__50985_51074 = G__51080;
i__50986_51075 = G__51081;
continue;
} else {
var temp__5823__auto___51082 = cljs.core.seq(seq__50983_51072);
if(temp__5823__auto___51082){
var seq__50983_51083__$1 = temp__5823__auto___51082;
if(cljs.core.chunked_seq_QMARK_(seq__50983_51083__$1)){
var c__5525__auto___51084 = cljs.core.chunk_first(seq__50983_51083__$1);
var G__51085 = cljs.core.chunk_rest(seq__50983_51083__$1);
var G__51086 = c__5525__auto___51084;
var G__51087 = cljs.core.count(c__5525__auto___51084);
var G__51088 = (0);
seq__50983_51072 = G__51085;
chunk__50984_51073 = G__51086;
count__50985_51074 = G__51087;
i__50986_51075 = G__51088;
continue;
} else {
var tool_51089 = cljs.core.first(seq__50983_51083__$1);
try{portfolio.ui.canvas.protocols.prepare_canvas(tool_51089,el,opt);
}catch (e50990){var e_51090 = e50990;
portfolio.ui.components.canvas.report_error(["Failed to prepare canvas with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tool_51089))].join(''),e_51090,scene);
}

var G__51091 = cljs.core.next(seq__50983_51083__$1);
var G__51092 = null;
var G__51093 = (0);
var G__51094 = (0);
seq__50983_51072 = G__51091;
chunk__50984_51073 = G__51092;
count__50985_51074 = G__51093;
i__50986_51075 = G__51094;
continue;
}
} else {
}
}
break;
}

try{portfolio.adapter.render_component(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(scene,new cljs.core.Keyword(null,"component","component",1555936782),(function (){var fexpr__50992 = new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(scene);
return (fexpr__50992.cljs$core$IFn$_invoke$arity$0 ? fexpr__50992.cljs$core$IFn$_invoke$arity$0() : fexpr__50992.call(null, ));
})()),canvas);

return setTimeout((function (){
var seq__50993_51095 = cljs.core.seq(tools);
var chunk__50994_51096 = null;
var count__50995_51097 = (0);
var i__50996_51098 = (0);
while(true){
if((i__50996_51098 < count__50995_51097)){
var tool_51099 = chunk__50994_51096.cljs$core$IIndexed$_nth$arity$2(null, i__50996_51098);
try{portfolio.ui.canvas.protocols.finalize_canvas(tool_51099,el,opt);
}catch (e50999){var e_51100 = e50999;
portfolio.ui.components.canvas.report_error(["Failed to finalize canvas with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tool_51099))].join(''),e_51100,scene);
}

var G__51101 = seq__50993_51095;
var G__51102 = chunk__50994_51096;
var G__51103 = count__50995_51097;
var G__51104 = (i__50996_51098 + (1));
seq__50993_51095 = G__51101;
chunk__50994_51096 = G__51102;
count__50995_51097 = G__51103;
i__50996_51098 = G__51104;
continue;
} else {
var temp__5823__auto___51105 = cljs.core.seq(seq__50993_51095);
if(temp__5823__auto___51105){
var seq__50993_51106__$1 = temp__5823__auto___51105;
if(cljs.core.chunked_seq_QMARK_(seq__50993_51106__$1)){
var c__5525__auto___51107 = cljs.core.chunk_first(seq__50993_51106__$1);
var G__51108 = cljs.core.chunk_rest(seq__50993_51106__$1);
var G__51109 = c__5525__auto___51107;
var G__51110 = cljs.core.count(c__5525__auto___51107);
var G__51111 = (0);
seq__50993_51095 = G__51108;
chunk__50994_51096 = G__51109;
count__50995_51097 = G__51110;
i__50996_51098 = G__51111;
continue;
} else {
var tool_51112 = cljs.core.first(seq__50993_51106__$1);
try{portfolio.ui.canvas.protocols.finalize_canvas(tool_51112,el,opt);
}catch (e51000){var e_51113 = e51000;
portfolio.ui.components.canvas.report_error(["Failed to finalize canvas with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tool_51112))].join(''),e_51113,scene);
}

var G__51114 = cljs.core.next(seq__50993_51106__$1);
var G__51115 = null;
var G__51116 = (0);
var G__51117 = (0);
seq__50993_51095 = G__51114;
chunk__50994_51096 = G__51115;
count__50995_51097 = G__51116;
i__50996_51098 = G__51117;
continue;
}
} else {
}
}
break;
}

var temp__5823__auto__ = iframe.contentWindow;
if(cljs.core.truth_(temp__5823__auto__)){
var win = temp__5823__auto__;
return win.postMessage(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),"scene-rendered",new cljs.core.Keyword(null,"scene-id","scene-id",2130439689),clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.namespace(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene)),cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene))], null)))], null)),"*");
} else {
return null;
}
}),(50));
}catch (e50991){var e = e50991;
return portfolio.ui.components.canvas.report_error(["Failed to render ",["'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(scene)),"'"].join('')].join(''),e,scene);
}});
portfolio.ui.components.canvas.on_mounted = (function portfolio$ui$components$canvas$on_mounted(el,f){
if(cljs.core.truth_((function (){var G__51001 = el;
var G__51001__$1 = (((G__51001 == null))?null:G__51001.contentDocument);
if((G__51001__$1 == null)){
return null;
} else {
return G__51001__$1.getElementById("canvas");
}
})())){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
} else {
return el.addEventListener("load",(function (_){
var doc = el.contentDocument;
(doc.documentElement.style.height = "auto");

if(cljs.core.truth_(doc.getElementById("canvas"))){
} else {
var el_51119__$1 = doc.createElement("div");
(el_51119__$1.id = "canvas");

doc.body.appendChild(el_51119__$1);
}

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
}));
}
});
portfolio.ui.components.canvas.init_canvas = (function portfolio$ui$components$canvas$init_canvas(el,data,f){
var iframe = portfolio.ui.components.canvas.get_iframe(el);
var document__$1 = portfolio.ui.components.canvas.get_iframe_document(el);
var head = document__$1.head;
var loaded = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var target_n = (cljs.core.count(new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(data)) + cljs.core.count(new cljs.core.Keyword(null,"script-paths","script-paths",1124171898).cljs$core$IFn$_invoke$arity$1(data)));
var try_complete = (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_n,cljs.core.deref(loaded))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
} else {
return null;
}
});
(document__$1.title = "Component scene");

iframe.contentWindow.addEventListener("message",(function (e){
return window.postMessage(e.data);
}));

try_complete();

var seq__51002_51121 = cljs.core.seq(new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(data));
var chunk__51003_51122 = null;
var count__51004_51123 = (0);
var i__51005_51124 = (0);
while(true){
if((i__51005_51124 < count__51004_51123)){
var path_51125 = chunk__51003_51122.cljs$core$IIndexed$_nth$arity$2(null, i__51005_51124);
var link_51127 = document.createElement("link");
(link_51127.rel = "stylesheet");

(link_51127.type = "text/css");

(link_51127.href = path_51125);

link_51127.addEventListener("load",((function (seq__51002_51121,chunk__51003_51122,count__51004_51123,i__51005_51124,link_51127,path_51125,iframe,document__$1,head,loaded,target_n,try_complete){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(loaded,cljs.core.inc);

return try_complete();
});})(seq__51002_51121,chunk__51003_51122,count__51004_51123,i__51005_51124,link_51127,path_51125,iframe,document__$1,head,loaded,target_n,try_complete))
);

head.appendChild(link_51127);


var G__51128 = seq__51002_51121;
var G__51129 = chunk__51003_51122;
var G__51130 = count__51004_51123;
var G__51131 = (i__51005_51124 + (1));
seq__51002_51121 = G__51128;
chunk__51003_51122 = G__51129;
count__51004_51123 = G__51130;
i__51005_51124 = G__51131;
continue;
} else {
var temp__5823__auto___51132 = cljs.core.seq(seq__51002_51121);
if(temp__5823__auto___51132){
var seq__51002_51133__$1 = temp__5823__auto___51132;
if(cljs.core.chunked_seq_QMARK_(seq__51002_51133__$1)){
var c__5525__auto___51134 = cljs.core.chunk_first(seq__51002_51133__$1);
var G__51135 = cljs.core.chunk_rest(seq__51002_51133__$1);
var G__51136 = c__5525__auto___51134;
var G__51137 = cljs.core.count(c__5525__auto___51134);
var G__51138 = (0);
seq__51002_51121 = G__51135;
chunk__51003_51122 = G__51136;
count__51004_51123 = G__51137;
i__51005_51124 = G__51138;
continue;
} else {
var path_51139 = cljs.core.first(seq__51002_51133__$1);
var link_51140 = document.createElement("link");
(link_51140.rel = "stylesheet");

(link_51140.type = "text/css");

(link_51140.href = path_51139);

link_51140.addEventListener("load",((function (seq__51002_51121,chunk__51003_51122,count__51004_51123,i__51005_51124,link_51140,path_51139,seq__51002_51133__$1,temp__5823__auto___51132,iframe,document__$1,head,loaded,target_n,try_complete){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(loaded,cljs.core.inc);

return try_complete();
});})(seq__51002_51121,chunk__51003_51122,count__51004_51123,i__51005_51124,link_51140,path_51139,seq__51002_51133__$1,temp__5823__auto___51132,iframe,document__$1,head,loaded,target_n,try_complete))
);

head.appendChild(link_51140);


var G__51145 = cljs.core.next(seq__51002_51133__$1);
var G__51146 = null;
var G__51147 = (0);
var G__51148 = (0);
seq__51002_51121 = G__51145;
chunk__51003_51122 = G__51146;
count__51004_51123 = G__51147;
i__51005_51124 = G__51148;
continue;
}
} else {
}
}
break;
}

var seq__51006_51149 = cljs.core.seq(new cljs.core.Keyword(null,"script-paths","script-paths",1124171898).cljs$core$IFn$_invoke$arity$1(data));
var chunk__51007_51150 = null;
var count__51008_51151 = (0);
var i__51009_51152 = (0);
while(true){
if((i__51009_51152 < count__51008_51151)){
var path_51153 = chunk__51007_51150.cljs$core$IIndexed$_nth$arity$2(null, i__51009_51152);
var link_51154 = document.createElement("script");
(link_51154.type = "text/javascript");

(link_51154.src = path_51153);

link_51154.addEventListener("load",((function (seq__51006_51149,chunk__51007_51150,count__51008_51151,i__51009_51152,link_51154,path_51153,iframe,document__$1,head,loaded,target_n,try_complete){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(loaded,cljs.core.inc);

return try_complete();
});})(seq__51006_51149,chunk__51007_51150,count__51008_51151,i__51009_51152,link_51154,path_51153,iframe,document__$1,head,loaded,target_n,try_complete))
);

head.appendChild(link_51154);


var G__51156 = seq__51006_51149;
var G__51157 = chunk__51007_51150;
var G__51158 = count__51008_51151;
var G__51159 = (i__51009_51152 + (1));
seq__51006_51149 = G__51156;
chunk__51007_51150 = G__51157;
count__51008_51151 = G__51158;
i__51009_51152 = G__51159;
continue;
} else {
var temp__5823__auto___51160 = cljs.core.seq(seq__51006_51149);
if(temp__5823__auto___51160){
var seq__51006_51161__$1 = temp__5823__auto___51160;
if(cljs.core.chunked_seq_QMARK_(seq__51006_51161__$1)){
var c__5525__auto___51162 = cljs.core.chunk_first(seq__51006_51161__$1);
var G__51163 = cljs.core.chunk_rest(seq__51006_51161__$1);
var G__51164 = c__5525__auto___51162;
var G__51165 = cljs.core.count(c__5525__auto___51162);
var G__51166 = (0);
seq__51006_51149 = G__51163;
chunk__51007_51150 = G__51164;
count__51008_51151 = G__51165;
i__51009_51152 = G__51166;
continue;
} else {
var path_51167 = cljs.core.first(seq__51006_51161__$1);
var link_51168 = document.createElement("script");
(link_51168.type = "text/javascript");

(link_51168.src = path_51167);

link_51168.addEventListener("load",((function (seq__51006_51149,chunk__51007_51150,count__51008_51151,i__51009_51152,link_51168,path_51167,seq__51006_51161__$1,temp__5823__auto___51160,iframe,document__$1,head,loaded,target_n,try_complete){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(loaded,cljs.core.inc);

return try_complete();
});})(seq__51006_51149,chunk__51007_51150,count__51008_51151,i__51009_51152,link_51168,path_51167,seq__51006_51161__$1,temp__5823__auto___51160,iframe,document__$1,head,loaded,target_n,try_complete))
);

head.appendChild(link_51168);


var G__51169 = cljs.core.next(seq__51006_51161__$1);
var G__51170 = null;
var G__51171 = (0);
var G__51172 = (0);
seq__51006_51149 = G__51169;
chunk__51007_51150 = G__51170;
count__51008_51151 = G__51171;
i__51009_51152 = G__51172;
continue;
}
} else {
}
}
break;
}

var vec__51010 = new cljs.core.Keyword("viewport","padding","viewport/padding",-1583726021).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data));
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51010,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51010,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51010,(2),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51010,(3),null);
if(cljs.core.truth_(t)){
(document__$1.body.style.paddingTop = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),"px"].join(''));
} else {
}

if(cljs.core.truth_(r)){
(document__$1.body.style.paddingBottom = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),"px"].join(''));
} else {
}

if(cljs.core.truth_(b)){
(document__$1.documentElement.style.paddingLeft = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),"px"].join(''));
} else {
}

if(cljs.core.truth_(l)){
return (document__$1.documentElement.style.paddingRight = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),"px"].join(''));
} else {
return null;
}
});
portfolio.ui.components.canvas.get_rendered_data = (function portfolio$ui$components$canvas$get_rendered_data(p__51013){
var map__51014 = p__51013;
var map__51014__$1 = cljs.core.__destructure_map(map__51014);
var scene = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51014__$1,new cljs.core.Keyword(null,"scene","scene",1523800415));
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51014__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rendered","rendered",-1352292910),new cljs.core.Keyword(null,"rendered-data","rendered-data",1076820229).cljs$core$IFn$_invoke$arity$1(scene),new cljs.core.Keyword(null,"portfolio-options","portfolio-options",1713910798),opt], null);
});
portfolio.ui.components.canvas.process_render_queue = (function portfolio$ui$components$canvas$process_render_queue(el){
if(cljs.core.truth_(el.renderFromQueue)){
return portfolio.ui.components.canvas.on_mounted(portfolio.ui.components.canvas.get_iframe(el),(function (){
var temp__5823__auto__ = el.renderQueue;
if(cljs.core.truth_(temp__5823__auto__)){
var data = temp__5823__auto__;
(el.renderQueue = null);

(el.renderedData = portfolio.ui.components.canvas.get_rendered_data(data));

return portfolio.ui.components.canvas.render_scene(el,data);
} else {
return null;
}
}));
} else {
return null;
}
});
portfolio.ui.components.canvas.novel_render_QMARK_ = (function portfolio$ui$components$canvas$novel_render_QMARK_(el,data){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(el.renderedData,portfolio.ui.components.canvas.get_rendered_data(data));
});
portfolio.ui.components.canvas.enqueue_render_data = (function portfolio$ui$components$canvas$enqueue_render_data(el,data){
if(portfolio.ui.components.canvas.novel_render_QMARK_(el,data)){
(el.renderQueue = data);

return portfolio.ui.components.canvas.process_render_queue(el);
} else {
return null;
}
});
/**
 * 
 */
portfolio.ui.components.canvas.Canvas = (function (){var G__51015 = (function (data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),(function (){var or__5002__auto__ = new cljs.core.Keyword("background","background-color","background/background-color",1902638780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "var(--canvas-bg)";
}
})(),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"transition","transition",765692007),"width 0.25s, height 0.25s"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe.canvas","iframe.canvas",2014956060),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"canvas-path","canvas-path",658132618).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "/portfolio/canvas.html";
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Component scene",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"width","width",-384071477),(function (){var or__5002__auto__ = ((typeof new cljs.core.Keyword("viewport","width","viewport/width",809992237).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data)) === 'number')?new cljs.core.Keyword("viewport","width","viewport/width",809992237).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data)):null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "100%";
}
})(),new cljs.core.Keyword(null,"height","height",1025178622),((typeof new cljs.core.Keyword("viewport","height","viewport/height",1951335772).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data)) === 'number')?new cljs.core.Keyword("viewport","height","viewport/height",1951335772).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data)):null)], null)], null)], null)], null);
});
var G__51016 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/Canvas",new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p__51017){
var map__51018 = p__51017;
var map__51018__$1 = cljs.core.__destructure_map(map__51018);
var css_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51018__$1,new cljs.core.Keyword(null,"css-paths","css-paths",582305563));
var script_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51018__$1,new cljs.core.Keyword(null,"script-paths","script-paths",1124171898));
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(css_paths,script_paths)));
}),new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (el,data){
(el.renderQueue = data);

return portfolio.ui.components.canvas.on_mounted(portfolio.ui.components.canvas.get_iframe(el),(function (){
return portfolio.ui.components.canvas.init_canvas(el,data,(function (){
(el.renderFromQueue = true);

return portfolio.ui.components.canvas.process_render_queue(el);
}));
}));
}),new cljs.core.Keyword(null,"on-update","on-update",1680216496),(function (el,data){
return portfolio.ui.components.canvas.enqueue_render_data(el,data);
})], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__51015,G__51016) : dumdom.core.component.call(null, G__51015,G__51016));
})();
/**
 * 
 */
portfolio.ui.components.canvas.Toolbar = (function (){var G__51019 = (function (p__51021){
var map__51022 = p__51021;
var map__51022__$1 = cljs.core.__destructure_map(map__51022);
var buttons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51022__$1,new cljs.core.Keyword(null,"buttons","buttons",-1953831197));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"gap","gap",80255254),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415)],["var(--fg)",(48),"var(--bg)",(20),(20),"space-between",(10),"flex","1px solid var(--separator)"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),(10)], null)], null),(function (){var iter__5480__auto__ = (function portfolio$ui$components$canvas$iter__51023(s__51024){
return (new cljs.core.LazySeq(null,(function (){
var s__51024__$1 = s__51024;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__51024__$1);
if(temp__5823__auto__){
var s__51024__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51024__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__51024__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__51026 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__51025 = (0);
while(true){
if((i__51025 < size__5479__auto__)){
var tool = cljs.core._nth(c__5478__auto__,i__51025);
cljs.core.chunk_append(b__51026,portfolio.ui.canvas.protocols.render_toolbar_button(tool));

var G__51189 = (i__51025 + (1));
i__51025 = G__51189;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51026),portfolio$ui$components$canvas$iter__51023(cljs.core.chunk_rest(s__51024__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51026),null);
}
} else {
var tool = cljs.core.first(s__51024__$2);
return cljs.core.cons(portfolio.ui.canvas.protocols.render_toolbar_button(tool),portfolio$ui$components$canvas$iter__51023(cljs.core.rest(s__51024__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"right","right",-452581833),null], null), null),new cljs.core.Keyword(null,"align","align",1964212802)),buttons));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),(10)], null)], null),(function (){var iter__5480__auto__ = (function portfolio$ui$components$canvas$iter__51027(s__51028){
return (new cljs.core.LazySeq(null,(function (){
var s__51028__$1 = s__51028;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__51028__$1);
if(temp__5823__auto__){
var s__51028__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51028__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__51028__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__51030 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__51029 = (0);
while(true){
if((i__51029 < size__5479__auto__)){
var tool = cljs.core._nth(c__5478__auto__,i__51029);
cljs.core.chunk_append(b__51030,portfolio.ui.canvas.protocols.render_toolbar_button(tool));

var G__51196 = (i__51029 + (1));
i__51029 = G__51196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51030),portfolio$ui$components$canvas$iter__51027(cljs.core.chunk_rest(s__51028__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51030),null);
}
} else {
var tool = cljs.core.first(s__51028__$2);
return cljs.core.cons(portfolio.ui.canvas.protocols.render_toolbar_button(tool),portfolio$ui$components$canvas$iter__51027(cljs.core.rest(s__51028__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"right","right",-452581833),null], null), null),new cljs.core.Keyword(null,"align","align",1964212802)),buttons));
})()], null)], null);
});
var G__51020 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/Toolbar"], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__51019,G__51020) : dumdom.core.component.call(null, G__51019,G__51020));
})();
/**
 * 
 */
portfolio.ui.components.canvas.CanvasPanel = (function (){var G__51031 = (function (data){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid #ccc",new cljs.core.Keyword(null,"background","background",-863952629),"#ffffff",new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(new cljs.core.Keyword(null,"minimized?","minimized?",1807883709).cljs$core$IFn$_invoke$arity$1(data))?"40px":"30%"),new cljs.core.Keyword(null,"transition","transition",765692007),"height 0.25s",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"button","button",1456579943).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5823__auto__)){
var button = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),(20),new cljs.core.Keyword(null,"top","top",-1856271961),(10)], null)], null),(portfolio.ui.components.triangle.TriangleButton.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.triangle.TriangleButton.cljs$core$IFn$_invoke$arity$1(button) : portfolio.ui.components.triangle.TriangleButton.call(null, button))], null);
} else {
return null;
}
})(),(portfolio.ui.components.tab_bar.TabBar.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.tab_bar.TabBar.cljs$core$IFn$_invoke$arity$1(data) : portfolio.ui.components.tab_bar.TabBar.call(null, data)),(function (){var G__51033 = data;
var G__51033__$1 = (((G__51033 == null))?null:new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(G__51033));
if((G__51033__$1 == null)){
return null;
} else {
return portfolio.ui.view.render_view(G__51033__$1);
}
})()], null);
});
var G__51032 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/CanvasPanel"], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__51031,G__51032) : dumdom.core.component.call(null, G__51031,G__51032));
})();
/**
 * 
 */
portfolio.ui.components.canvas.CanvasHeader = (function (){var G__51035 = (function (p__51037){
var map__51038 = p__51037;
var map__51038__$1 = cljs.core.__destructure_map(map__51038);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51038__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51038__$1,new cljs.core.Keyword(null,"url","url",276297046));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51038__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51038__$1,new cljs.core.Keyword(null,"code","code",1586293142));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.h3","h2.h3",132008135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core.empty_QMARK_(description))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 10px"], null))], null),(cljs.core.truth_(url)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),url], null),title], null):title)], null),((cljs.core.empty_QMARK_(description))?null:(function (){var G__51039 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),description,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"p","p",151049309)], null);
return (portfolio.ui.components.markdown.Markdown.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.markdown.Markdown.cljs$core$IFn$_invoke$arity$1(G__51039) : portfolio.ui.components.markdown.Markdown.call(null, G__51039));
})()),((cljs.core.empty_QMARK_(code))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 0"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.h4","h3.h4",122011178),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),"Scene code"], null),(function (){var G__51040 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),code], null);
return (portfolio.ui.components.code.Code.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.code.Code.cljs$core$IFn$_invoke$arity$1(G__51040) : portfolio.ui.components.code.Code.call(null, G__51040));
})()], null))], null);
});
var G__51036 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/CanvasHeader",new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"title","title",636505583)], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__51035,G__51036) : dumdom.core.component.call(null, G__51035,G__51036));
})();
portfolio.ui.components.canvas.render_canvas = (function portfolio$ui$components$canvas$render_canvas(data){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.canvas-wrapper","div.canvas-wrapper",77954480),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(cljs.core.select_keys(data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"code","code",1586293142)], null))))?(portfolio.ui.components.canvas.CanvasHeader.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.canvas.CanvasHeader.cljs$core$IFn$_invoke$arity$1(data) : portfolio.ui.components.canvas.CanvasHeader.call(null, data)):null),(cljs.core.truth_(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(data))?(cljs.core.truth_((function (){var or__5002__auto__ = cljs.core.not(new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(data)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(data));
}
})())?(function (){var G__51041 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(data));
return (portfolio.ui.components.error.Error.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.error.Error.cljs$core$IFn$_invoke$arity$1(G__51041) : portfolio.ui.components.error.Error.call(null, G__51041));
})():(portfolio.ui.components.canvas.Canvas.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.canvas.Canvas.cljs$core$IFn$_invoke$arity$1(data) : portfolio.ui.components.canvas.Canvas.call(null, data))):null)], null))], null);
});
portfolio.ui.components.canvas.direction = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),"column",new cljs.core.Keyword(null,"cols","cols",-1914801295),"row"], null);
/**
 * 
 */
portfolio.ui.components.canvas.WrappedMenuBar = (function (){var G__51042 = (function (menu_bar){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),"var(--bg)",new cljs.core.Keyword(null,"color","color",1011675173),"var(--fg)",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px"], null)], null),(function (){var G__51044 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(menu_bar,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704));
return (portfolio.ui.components.menu_bar.MenuBar.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.menu_bar.MenuBar.cljs$core$IFn$_invoke$arity$1(G__51044) : portfolio.ui.components.menu_bar.MenuBar.call(null, G__51044));
})()], null);
});
var G__51043 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/WrappedMenuBar"], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__51042,G__51043) : dumdom.core.component.call(null, G__51042,G__51043));
})();
portfolio.ui.components.canvas.get_grid_styles = (function portfolio$ui$components$canvas$get_grid_styles(data){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(data))?new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(data)], null):new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(data)], null)));
});
portfolio.ui.components.canvas.touch_x = (function portfolio$ui$components$canvas$touch_x(e){
var or__5002__auto__ = (function (){var G__51050 = e;
var G__51050__$1 = (((G__51050 == null))?null:G__51050.changedTouches);
var G__51050__$2 = (((G__51050__$1 == null))?null:(G__51050__$1[(0)]));
if((G__51050__$2 == null)){
return null;
} else {
return G__51050__$2.screenX;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return e.screenX;
}
});
portfolio.ui.components.canvas.touch_y = (function portfolio$ui$components$canvas$touch_y(e){
var or__5002__auto__ = (function (){var G__51051 = e;
var G__51051__$1 = (((G__51051 == null))?null:G__51051.changedTouches);
var G__51051__$2 = (((G__51051__$1 == null))?null:(G__51051__$1[(0)]));
if((G__51051__$2 == null)){
return null;
} else {
return G__51051__$2.screenY;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return e.screenY;
}
});
portfolio.ui.components.canvas.get_style_n = (function portfolio$ui$components$canvas$get_style_n(style,prop){
return parseInt(style.getPropertyValue(prop),(10));
});
portfolio.ui.components.canvas.get_dim = (function portfolio$ui$components$canvas$get_dim(props,el){
var style = window.getComputedStyle(el);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(props))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),portfolio.ui.components.canvas.get_style_n(style,"height"),new cljs.core.Keyword(null,"offset","offset",296498311),portfolio.ui.components.canvas.get_style_n(style,"top")], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),portfolio.ui.components.canvas.get_style_n(style,"width"),new cljs.core.Keyword(null,"offset","offset",296498311),portfolio.ui.components.canvas.get_style_n(style,"left")], null);
}
});
portfolio.ui.components.canvas.set_size = (function portfolio$ui$components$canvas$set_size(props,el,size){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(props))){
return (el.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"px"].join(''));
} else {
return (el.style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"px"].join(''));
}
});
portfolio.ui.components.canvas.set_offset = (function portfolio$ui$components$canvas$set_offset(props,el,offset){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(props))){
return (el.style.top = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"px"].join(''));
} else {
return (el.style.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"px"].join(''));
}
});
portfolio.ui.components.canvas.get_neighbour = (function portfolio$ui$components$canvas$get_neighbour(el){
return el.nextSibling;
});
/**
 * 
 */
portfolio.ui.components.canvas.Handle = (function (){var G__51052 = (function (p__51054){
var map__51055 = p__51054;
var map__51055__$1 = cljs.core.__destructure_map(map__51055);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51055__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draggable","div.draggable",-249226727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),kind))?new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"3px solid var(--hard-separator)",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(30),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0)], null):new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"3px solid var(--hard-separator)",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(20),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null))], null)], null);
});
var G__51053 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/Handle",new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (el,props){
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var f = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(props)))?portfolio.ui.components.canvas.touch_y:portfolio.ui.components.canvas.touch_x);
var container = el.parentNode;
el.addEventListener("mousedown",(function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"start","start",-355208981),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null, e)),new cljs.core.Keyword(null,"dim","dim",-497244536),portfolio.ui.components.canvas.get_dim(props,container),new cljs.core.Keyword(null,"neighbour-dim","neighbour-dim",33598256),portfolio.ui.components.canvas.get_dim(props,portfolio.ui.components.canvas.get_neighbour(container))], 0));

e.preventDefault();

return el.classList.add("dragging");
}));

document.body.addEventListener("mousemove",(function (e){
var map__51056 = cljs.core.deref(state);
var map__51056__$1 = cljs.core.__destructure_map(map__51056);
var dragging_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51056__$1,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51056__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var dim = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51056__$1,new cljs.core.Keyword(null,"dim","dim",-497244536));
var neighbour_dim = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51056__$1,new cljs.core.Keyword(null,"neighbour-dim","neighbour-dim",33598256));
if(cljs.core.truth_(dragging_QMARK_)){
var offset = ((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null, e)) - start);
var neighbour = portfolio.ui.components.canvas.get_neighbour(container);
portfolio.ui.components.canvas.set_size(props,container,(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(dim) + offset));

portfolio.ui.components.canvas.set_offset(props,neighbour,(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(neighbour_dim) + offset));

return portfolio.ui.components.canvas.set_size(props,neighbour,(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(neighbour_dim) - offset));
} else {
return null;
}
}));

return document.body.addEventListener("mouseup",(function (_e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",-995941410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410));

return el.classList.remove("dragging");
} else {
return null;
}
}));
})], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__51052,G__51053) : dumdom.core.component.call(null, G__51052,G__51053));
})();
portfolio.ui.components.canvas.render_hud = (function portfolio$ui$components$canvas$render_hud(hud){
return portfolio.ui.components.hud.render_hud.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(hud),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(20),new cljs.core.Keyword(null,"left","left",-399115937),(20),new cljs.core.Keyword(null,"right","right",-452581833),(20)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(hud);
if(cljs.core.truth_(temp__5823__auto__)){
var error = temp__5823__auto__;
return (portfolio.ui.components.error.Error.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.error.Error.cljs$core$IFn$_invoke$arity$1(error) : portfolio.ui.components.error.Error.call(null, error));
} else {
return null;
}
})()], 0));
});
/**
 * 
 */
portfolio.ui.components.canvas.Pane = (function (){var G__51057 = (function (p__51059){
var map__51060 = p__51059;
var map__51060__$1 = cljs.core.__destructure_map(map__51060);
var data = map__51060__$1;
var canvases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51060__$1,new cljs.core.Keyword(null,"canvases","canvases",-441653731));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51060__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var browser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51060__$1,new cljs.core.Keyword(null,"browser","browser",828191719));
var background = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51060__$1,new cljs.core.Keyword(null,"background","background",-863952629));
var menu_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51060__$1,new cljs.core.Keyword(null,"menu-bar","menu-bar",-1688157683));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51060__$1,new cljs.core.Keyword(null,"title","title",636505583));
var handle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51060__$1,new cljs.core.Keyword(null,"handle","handle",1538948854));
var toolbar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51060__$1,new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51060__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pane","div.pane",24297878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.into.cljs$core$IFn$_invoke$arity$2(portfolio.ui.components.canvas.get_grid_styles(data),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null))], null),(function (){var G__51061 = toolbar;
if((G__51061 == null)){
return null;
} else {
return (portfolio.ui.components.canvas.Toolbar.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.canvas.Toolbar.cljs$core$IFn$_invoke$arity$1(G__51061) : portfolio.ui.components.canvas.Toolbar.call(null, G__51061));
}
})(),(function (){var G__51062 = menu_bar;
if((G__51062 == null)){
return null;
} else {
return (portfolio.ui.components.canvas.WrappedMenuBar.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.canvas.WrappedMenuBar.cljs$core$IFn$_invoke$arity$1(G__51062) : portfolio.ui.components.canvas.WrappedMenuBar.call(null, G__51062));
}
})(),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"transition","transition",765692007),"background 0.15s",new cljs.core.Keyword(null,"background","background",-863952629),background], null)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(browser))?new cljs.core.Keyword(null,"dark","dark",1818973999):class_name)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(browser))?(portfolio.ui.components.browser.Browser.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.browser.Browser.cljs$core$IFn$_invoke$arity$1(browser) : portfolio.ui.components.browser.Browser.call(null, browser)):null),(cljs.core.truth_((function (){var or__5002__auto__ = title;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return description;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px"], null)], null),(cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h1","h1.h1",-1010377955),title], null):null),(cljs.core.truth_(description)?(function (){var G__51063 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),description], null);
return (portfolio.ui.components.markdown.Markdown.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.markdown.Markdown.cljs$core$IFn$_invoke$arity$1(G__51063) : portfolio.ui.components.markdown.Markdown.call(null, G__51063));
})():null)], null):null),((cljs.core.seq(canvases))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(portfolio.ui.components.canvas.render_canvas,canvases):null)], null),(function (){var G__51064 = handle;
if((G__51064 == null)){
return null;
} else {
return (portfolio.ui.components.canvas.Handle.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.canvas.Handle.cljs$core$IFn$_invoke$arity$1(G__51064) : portfolio.ui.components.canvas.Handle.call(null, G__51064));
}
})()], null);
});
var G__51058 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/Pane",new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__51057,G__51058) : dumdom.core.component.call(null, G__51057,G__51058));
})();
portfolio.ui.components.canvas.render_layout = (function portfolio$ui$components$canvas$render_layout(data){
if(cljs.core.truth_((function (){var G__51066 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(data);
var fexpr__51065 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),null,new cljs.core.Keyword(null,"cols","cols",-1914801295),null], null), null);
return (fexpr__51065.cljs$core$IFn$_invoke$arity$1 ? fexpr__51065.cljs$core$IFn$_invoke$arity$1(G__51066) : fexpr__51065.call(null, G__51066));
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),portfolio.ui.components.canvas.get_grid_styles(data),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(data)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(portfolio.ui.components.canvas.render_layout,new cljs.core.Keyword(null,"xs","xs",649443341).cljs$core$IFn$_invoke$arity$1(data)),(function (){var G__51067 = new cljs.core.Keyword(null,"handle","handle",1538948854).cljs$core$IFn$_invoke$arity$1(data);
if((G__51067 == null)){
return null;
} else {
return (portfolio.ui.components.canvas.Handle.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.canvas.Handle.cljs$core$IFn$_invoke$arity$1(G__51067) : portfolio.ui.components.canvas.Handle.call(null, G__51067));
}
})()], null);
} else {
return (portfolio.ui.components.canvas.Pane.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.canvas.Pane.cljs$core$IFn$_invoke$arity$1(data) : portfolio.ui.components.canvas.Pane.call(null, data));
}
});
/**
 * 
 */
portfolio.ui.components.canvas.CanvasView = (function (){var G__51068 = (function (data){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),portfolio.ui.components.canvas.render_layout(data)], null),(function (){var G__51070 = data;
var G__51070__$1 = (((G__51070 == null))?null:new cljs.core.Keyword(null,"hud","hud",-1987595891).cljs$core$IFn$_invoke$arity$1(G__51070));
if((G__51070__$1 == null)){
return null;
} else {
return portfolio.ui.components.canvas.render_hud(G__51070__$1);
}
})(),(function (){var G__51071 = data;
var G__51071__$1 = (((G__51071 == null))?null:new cljs.core.Keyword(null,"panel","panel",-558637456).cljs$core$IFn$_invoke$arity$1(G__51071));
if((G__51071__$1 == null)){
return null;
} else {
return (portfolio.ui.components.canvas.CanvasPanel.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.canvas.CanvasPanel.cljs$core$IFn$_invoke$arity$1(G__51071__$1) : portfolio.ui.components.canvas.CanvasPanel.call(null, G__51071__$1));
}
})()], null);
});
var G__51069 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/CanvasView",new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__51068,G__51069) : dumdom.core.component.call(null, G__51068,G__51069));
})();

//# sourceMappingURL=portfolio.ui.components.canvas.js.map
