goog.provide('portfolio.ui.client');
portfolio.ui.client.render = (function portfolio$ui$client$render(app,p__51747){
var map__51748 = p__51747;
var map__51748__$1 = cljs.core.__destructure_map(map__51748);
var on_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51748__$1,new cljs.core.Keyword(null,"on-render","on-render",2096729391));
var state = cljs.core.deref(app);
var page_data = portfolio.ui.core.prepare_data(state,new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(state));
var app_data = portfolio.ui.actions.actionize_data(app,page_data);
if(cljs.core.ifn_QMARK_(on_render)){
(on_render.cljs$core$IFn$_invoke$arity$1 ? on_render.cljs$core$IFn$_invoke$arity$1(page_data) : on_render.call(null, page_data));
} else {
}

var temp__5821__auto__ = document.getElementById("portfolio");
if(cljs.core.truth_(temp__5821__auto__)){
var el = temp__5821__auto__;
return dumdom.core.render((portfolio.ui.components.app.App.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.app.App.cljs$core$IFn$_invoke$arity$1(app_data) : portfolio.ui.components.app.App.call(null, app_data)),el);
} else {
return console.error("Unable to render portfolio: no element with id \"portfolio\"");
}
});
portfolio.ui.client.a_element = (function portfolio$ui$client$a_element(el){
var el__$1 = el;
while(true){
if((el__$1 == null)){
return null;
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = el__$1.href;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el__$1.tagName);
} else {
return and__5000__auto__;
}
})())){
return el__$1;
} else {
var G__51767 = el__$1.parentNode;
el__$1 = G__51767;
continue;

}
}
break;
}
});
portfolio.ui.client.get_path = (function portfolio$ui$client$get_path(href){
if(cljs.core.truth_(cljs.core.not_empty(href))){
return href.replace(location.origin,"");
} else {
return null;
}
});
portfolio.ui.client.relay_body_clicks = (function portfolio$ui$client$relay_body_clicks(app,e){
var path = (function (){var G__51749 = e.target;
var G__51749__$1 = (((G__51749 == null))?null:portfolio.ui.client.a_element(G__51749));
var G__51749__$2 = (((G__51749__$1 == null))?null:G__51749__$1.href);
if((G__51749__$2 == null)){
return null;
} else {
return portfolio.ui.client.get_path(G__51749__$2);
}
})();
if(cljs.core.truth_((function (){var and__5000__auto__ = path;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.re_find(/^\//,path);
} else {
return and__5000__auto__;
}
})())){
e.preventDefault();

if(cljs.core.truth_((function (){var or__5002__auto__ = e.ctrlKey;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return e.metaKey;
}
})())){
return window.open(path,"_blank");
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"log?","log?",-366002723).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Update URL from body click",path], 0));
} else {
}

history.pushState(false,false,path);

return portfolio.ui.actions.execute_action_BANG_(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-current-location","go-to-current-location",1620881583)], null));
}
} else {
return null;
}
});
portfolio.ui.client.add_once_listener = (function portfolio$ui$client$add_once_listener(el,event,f){
return el.addEventListener(event,(function portfolio$ui$client$add_once_listener_$_listener(_e){
el.removeEventListener(event,portfolio$ui$client$add_once_listener_$_listener);

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
}));
});
portfolio.ui.client.add_load_listener = (function portfolio$ui$client$add_load_listener(var_args){
var args__5732__auto__ = [];
var len__5726__auto___51768 = arguments.length;
var i__5727__auto___51769 = (0);
while(true){
if((i__5727__auto___51769 < len__5726__auto___51768)){
args__5732__auto__.push((arguments[i__5727__auto___51769]));

var G__51770 = (i__5727__auto___51769 + (1));
i__5727__auto___51769 = G__51770;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return portfolio.ui.client.add_load_listener.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(portfolio.ui.client.add_load_listener.cljs$core$IFn$_invoke$arity$variadic = (function (el,f,p__51753){
var vec__51754 = p__51753;
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51754,(0),null);
el.addEventListener("load",(function portfolio$ui$client$listener(_e){
el.removeEventListener("load",portfolio$ui$client$listener);

el.removeEventListener("error",portfolio$ui$client$listener);

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
}));

return el.addEventListener("error",(function portfolio$ui$client$listener(_e){
el.removeEventListener("load",portfolio$ui$client$listener);

el.removeEventListener("error",portfolio$ui$client$listener);

if(cljs.core.truth_(error)){
return (document.body.innerHTML = error);
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
}
}));
}));

(portfolio.ui.client.add_load_listener.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(portfolio.ui.client.add_load_listener.cljs$lang$applyTo = (function (seq51750){
var G__51751 = cljs.core.first(seq51750);
var seq51750__$1 = cljs.core.next(seq51750);
var G__51752 = cljs.core.first(seq51750__$1);
var seq51750__$2 = cljs.core.next(seq51750__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51751,G__51752,seq51750__$2);
}));

portfolio.ui.client.css_file = "/portfolio/styles/portfolio.css";
portfolio.ui.client.css_load_error = ["<h1>Unable to load the Portfolio CSS</h1>","<p>Portfolio needs to load its CSS file ",portfolio.ui.client.css_file,"in order to render its UI. Make sure Portfolio's resources are served from ","your web server. If you are using shadow-cljs, you'll need something like ","the following:</p>","<pre><code>:dev-http {8080 [\"public\" \"classpath:public\"]}</code></pre>"].join('');
portfolio.ui.client.ensure_portfolio_css_BANG_ = (function portfolio$ui$client$ensure_portfolio_css_BANG_(f){
if(cljs.core.not(document.getElementById("portfolio-css"))){
var el = portfolio.ui.css.create_css_link(portfolio.ui.client.css_file);
portfolio.ui.client.add_load_listener.cljs$core$IFn$_invoke$arity$variadic(el,f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([portfolio.ui.client.css_load_error], 0));

return document.head.appendChild(el);
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
}
});
portfolio.ui.client.ensure_element_BANG_ = (function portfolio$ui$client$ensure_element_BANG_(f){
if(cljs.core.not(document.getElementById("portfolio"))){
var el = document.createElement("div");
var script = document.createElement("script");
(el.id = "portfolio");

document.body.appendChild(el);

(script.type = "text/javascript");

(script.src = "/portfolio/prism.js");

portfolio.ui.client.add_load_listener(script,f);

return document.body.appendChild(script);
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
}
});
portfolio.ui.client.set_window_size = (function portfolio$ui$client$set_window_size(app){
var dim = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),window.innerWidth,new cljs.core.Keyword(null,"h","h",1109658740),window.innerHeight], null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.assoc,new cljs.core.Keyword(null,"win","win",-1624642689),dim);
});
portfolio.ui.client.set_window_size_debounced = portfolio.homeless.debounce(portfolio.ui.client.set_window_size,(100));
portfolio.ui.client.keep_size_up_to_date = (function portfolio$ui$client$keep_size_up_to_date(app){
portfolio.ui.client.set_window_size(app);

return (window.onresize = (function (){
return portfolio.ui.client.set_window_size_debounced(app);
}));
});
portfolio.ui.client.keep_css_files_up_to_date = (function portfolio$ui$client$keep_css_files_up_to_date(app){
if(cljs.core.truth_(new cljs.core.Keyword("portfolio.ui.client","css-listener","portfolio.ui.client/css-listener",1401299013).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app)))){
return null;
} else {
var observer = portfolio.ui.css.watch_css_reloads(new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.assoc,new cljs.core.Keyword("portfolio.ui.client","css-listener","portfolio.ui.client/css-listener",1401299013),observer);
}
});
portfolio.ui.client.started_QMARK_ = (function portfolio$ui$client$started_QMARK_(app){
return new cljs.core.Keyword("portfolio.ui.client","started?","portfolio.ui.client/started?",-643918860).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app));
});
portfolio.ui.client.start_app = (function portfolio$ui$client$start_app(var_args){
var args__5732__auto__ = [];
var len__5726__auto___51771 = arguments.length;
var i__5727__auto___51772 = (0);
while(true){
if((i__5727__auto___51772 < len__5726__auto___51771)){
args__5732__auto__.push((arguments[i__5727__auto___51772]));

var G__51773 = (i__5727__auto___51772 + (1));
i__5727__auto___51772 = G__51773;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return portfolio.ui.client.start_app.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(portfolio.ui.client.start_app.cljs$core$IFn$_invoke$arity$variadic = (function (app,p__51761){
var vec__51762 = p__51761;
var map__51765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51762,(0),null);
var map__51765__$1 = cljs.core.__destructure_map(map__51765);
var on_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51765__$1,new cljs.core.Keyword(null,"on-render","on-render",2096729391));
var f_51774 = (function (){
portfolio.ui.css.load_css_files(new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app)));

if(cljs.core.truth_(portfolio.ui.client.started_QMARK_(app))){
return portfolio.ui.client.render(app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-render","on-render",2096729391),on_render], null));
} else {
document.body.addEventListener("click",(function (p1__51757_SHARP_){
return portfolio.ui.client.relay_body_clicks(app,p1__51757_SHARP_);
}));

portfolio.ui.client.keep_size_up_to_date(app);

portfolio.ui.client.keep_css_files_up_to_date(app);

return portfolio.ui.client.ensure_element_BANG_((function (){
return portfolio.ui.client.ensure_portfolio_css_BANG_((function (){
(window.onpopstate = (function (){
return portfolio.ui.actions.execute_action_BANG_(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-current-location","go-to-current-location",1620881583)], null));
}));

cljs.core.add_tap((function (p1__51758_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app,cljs.core.update,new cljs.core.Keyword(null,"taps","taps",480110748),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__51758_SHARP_], 0));
}));

cljs.core.add_watch(app,new cljs.core.Keyword("portfolio.ui.client","render","portfolio.ui.client/render",-1068629999),(function (_,___$1,___$2,___$3){
return portfolio.ui.client.render(app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-render","on-render",2096729391),on_render], null));
}));

portfolio.ui.actions.execute_action_BANG_(app,(function (){var location__$1 = portfolio.ui.routes.get_current_location();
if((portfolio.ui.collection.get_selection(cljs.core.deref(app),portfolio.ui.routes.get_id(location__$1)) == null)){
var temp__5821__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.vals(new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app))))));
if(cljs.core.truth_(temp__5821__auto__)){
var id = temp__5821__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-location","go-to-location",-1047138405),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-location","go-to-location",-1047138405),(function (){var G__51766 = location__$1;
if((new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(location__$1)) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51766,new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"up-and-running"], null));
} else {
return G__51766;
}
})()], null);
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-current-location","go-to-current-location",1620881583)], null);
}
})());

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.assoc,new cljs.core.Keyword("portfolio.ui.client","started?","portfolio.ui.client/started?",-643918860),true);
}));
}));
}
});
if(cljs.core.truth_((function (){var and__5000__auto__ = document;
if(cljs.core.truth_(and__5000__auto__)){
return document.body;
} else {
return and__5000__auto__;
}
})())){
f_51774();
} else {
portfolio.ui.client.add_once_listener(window,"DOMContentLoaded",f_51774);
}

return app;
}));

(portfolio.ui.client.start_app.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.ui.client.start_app.cljs$lang$applyTo = (function (seq51759){
var G__51760 = cljs.core.first(seq51759);
var seq51759__$1 = cljs.core.next(seq51759);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51760,seq51759__$1);
}));


//# sourceMappingURL=portfolio.ui.client.js.map
