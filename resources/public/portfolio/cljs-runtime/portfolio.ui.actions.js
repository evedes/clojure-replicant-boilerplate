goog.provide('portfolio.ui.actions');
/**
 * Takes a map and pairs of path value to assoc-in to the map. Makes `assoc-in`
 *   work like `assoc`, e.g.:
 * 
 *   ```clj
 *   (assoc-in* {}
 *           [:person :name] "Christian"
 *           [:person :language] "Clojure")
 *   ;;=>
 *   {:person {:name "Christian"
 *          :language "Clojure"}}
 *   ```
 */
portfolio.ui.actions.assoc_in_STAR_ = (function portfolio$ui$actions$assoc_in_STAR_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___50743 = arguments.length;
var i__5727__auto___50744 = (0);
while(true){
if((i__5727__auto___50744 < len__5726__auto___50743)){
args__5732__auto__.push((arguments[i__5727__auto___50744]));

var G__50745 = (i__5727__auto___50744 + (1));
i__5727__auto___50744 = G__50745;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return portfolio.ui.actions.assoc_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(portfolio.ui.actions.assoc_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (m,args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(cljs.core.count(args),(2)))){
} else {
throw (new Error(["Assert failed: ","assoc-in* takes a map and pairs of path value","\n","(= 0 (mod (count args) 2))"].join('')));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),args)))){
} else {
throw (new Error(["Assert failed: ","each path should be a vector","\n","(->> args (partition 2) (map first) (every? vector?))"].join('')));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__50531){
var vec__50532 = p__50531;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50532,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50532,(1),null);
return cljs.core.assoc_in(m__$1,path,v);
}),m,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),args));
}));

(portfolio.ui.actions.assoc_in_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.ui.actions.assoc_in_STAR_.cljs$lang$applyTo = (function (seq50529){
var G__50530 = cljs.core.first(seq50529);
var seq50529__$1 = cljs.core.next(seq50529);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50530,seq50529__$1);
}));

/**
 * Takes a map and paths to dissoc from it. An example explains it best:
 * 
 *   ```clj
 *   (dissoc-in* {:person {:name "Christian"
 *                      :language "Clojure"}}
 *            [:person :language])
 *   ;;=>
 *   {:person {:name "Christian"}}
 *   ```
 * 
 *   Optionally pass additional paths.
 *   
 */
portfolio.ui.actions.dissoc_in_STAR_ = (function portfolio$ui$actions$dissoc_in_STAR_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___50747 = arguments.length;
var i__5727__auto___50748 = (0);
while(true){
if((i__5727__auto___50748 < len__5726__auto___50747)){
args__5732__auto__.push((arguments[i__5727__auto___50748]));

var G__50749 = (i__5727__auto___50748 + (1));
i__5727__auto___50748 = G__50749;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return portfolio.ui.actions.dissoc_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(portfolio.ui.actions.dissoc_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (m,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,path){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(path))){
return m__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(path))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.first(path));
} else {
var vec__50541 = cljs.core.reverse(path);
var seq__50542 = cljs.core.seq(vec__50541);
var first__50543 = cljs.core.first(seq__50542);
var seq__50542__$1 = cljs.core.next(seq__50542);
var k = first__50543;
var ks = seq__50542__$1;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$1,cljs.core.reverse(ks),cljs.core.dissoc,k);

}
}
}),m,args);
}));

(portfolio.ui.actions.dissoc_in_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.ui.actions.dissoc_in_STAR_.cljs$lang$applyTo = (function (seq50539){
var G__50540 = cljs.core.first(seq50539);
var seq50539__$1 = cljs.core.next(seq50539);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50540,seq50539__$1);
}));

portfolio.ui.actions.atom_QMARK_ = (function portfolio$ui$actions$atom_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x);
}
});
portfolio.ui.actions.get_page_title = (function portfolio$ui$actions$get_page_title(state,p__50545){
var map__50546 = p__50545;
var map__50546__$1 = cljs.core.__destructure_map(map__50546);
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50546__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var document__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50546__$1,new cljs.core.Keyword(null,"document","document",-1329188687));
var suffix = (cljs.core.truth_(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(state))?[" - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(state))].join(''):null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(selection))){
var G__50547 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(selection);
var G__50547__$1 = (((G__50547 instanceof cljs.core.Keyword))?G__50547.fqn:null);
switch (G__50547__$1) {
case "scene":
return ["Scene: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(selection))),suffix].join('');

break;
case "collection":
return ["Collection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(selection))),suffix].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50547__$1)].join('')));

}
} else {
if(cljs.core.truth_(document__$1)){
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(document__$1);
} else {
return ["No scenes found",suffix].join('');

}
}
});
portfolio.ui.actions.go_to_location = (function portfolio$ui$actions$go_to_location(state,location){
var id = portfolio.ui.routes.get_id(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(state));
var current_scenes = portfolio.ui.collection.get_selected_scenes(state,id);
var selection = portfolio.ui.collection.get_selection(state,portfolio.ui.routes.get_id(location));
var layout = portfolio.ui.layout.get_view_layout(state,selection);
var lp = portfolio.ui.layout.get_layout_path(layout);
var expansions = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (path){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,true], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50548_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,p1__50548_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(portfolio.ui.scene_browser.get_expanded_path,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(selection)))], 0));
var document__$1 = (((id == null))?portfolio.ui.document.get_document(portfolio.ui.routes.get_document_id(location)):null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),(function (){var G__50550 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388)], null),location,portfolio.ui.layout.get_current_layout_path(),lp], null);
var G__50550__$1 = (((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,lp) == null))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__50550,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lp,layout], null)):G__50550);
if(cljs.core.seq(expansions)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__50550__$1,expansions);
} else {
return G__50550__$1;
}
})(),new cljs.core.Keyword(null,"fns","fns",1185138786),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50551){
var map__50552 = p__50551;
var map__50552__$1 = cljs.core.__destructure_map(map__50552);
var on_unmount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50552__$1,new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50552__$1,new cljs.core.Keyword(null,"params","params",710516235));
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50552__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50552__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269),(function (){var or__5002__auto__ = id__$1;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return title;
}
})(),on_unmount,params], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269),current_scenes)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50557){
var map__50558 = p__50557;
var map__50558__$1 = cljs.core.__destructure_map(map__50558);
var on_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50558__$1,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50558__$1,new cljs.core.Keyword(null,"params","params",710516235));
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50558__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50558__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (){var or__5002__auto__ = id__$1;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return title;
}
})(),on_mount,params], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(selection)))),new cljs.core.Keyword(null,"release","release",-1534371381),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(portfolio.ui.scene.get_scene_atoms,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([current_scenes], 0)),new cljs.core.Keyword(null,"subscribe","subscribe",416253756),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(portfolio.ui.scene.get_scene_atoms,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(selection)], 0)),new cljs.core.Keyword(null,"set-page-title","set-page-title",-1142382407),portfolio.ui.actions.get_page_title(state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",975998651),selection,new cljs.core.Keyword(null,"document","document",-1329188687),document__$1], null)),new cljs.core.Keyword(null,"update-window-location","update-window-location",770004291),portfolio.ui.routes.get_url.cljs$core$IFn$_invoke$arity$1(location)], null);
});
portfolio.ui.actions.remove_scene_param = (function portfolio$ui$actions$remove_scene_param(var_args){
var G__50561 = arguments.length;
switch (G__50561) {
case 2:
return portfolio.ui.actions.remove_scene_param.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return portfolio.ui.actions.remove_scene_param.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portfolio.ui.actions.remove_scene_param.cljs$core$IFn$_invoke$arity$2 = (function (state,scene_id){
var param = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),scene_id,new cljs.core.Keyword(null,"param","param",2013631823)], null));
if(cljs.core.map_QMARK_(param)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867)], null)], null)], null)], null);
} else {
if(portfolio.ui.actions.atom_QMARK_(param)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197)], null))], null),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197)], null)], null)], null)], null);
} else {
return null;
}
}
}));

(portfolio.ui.actions.remove_scene_param.cljs$core$IFn$_invoke$arity$3 = (function (state,scene_id,k){
var param = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),scene_id,new cljs.core.Keyword(null,"param","param",2013631823)], null));
if(cljs.core.map_QMARK_(param)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867),k], null)], null)], null)], null);
} else {
if(portfolio.ui.actions.atom_QMARK_(param)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),scene_id,new cljs.core.Keyword(null,"original","original",-445386197),k], null))], null),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867),k], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197),k], null)], null)], null)], null);
} else {
return null;
}
}
}));

(portfolio.ui.actions.remove_scene_param.cljs$lang$maxFixedArity = 3);

portfolio.ui.actions.set_scene_param = (function portfolio$ui$actions$set_scene_param(var_args){
var G__50568 = arguments.length;
switch (G__50568) {
case 3:
return portfolio.ui.actions.set_scene_param.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return portfolio.ui.actions.set_scene_param.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portfolio.ui.actions.set_scene_param.cljs$core$IFn$_invoke$arity$3 = (function (state,scene_id,v){
var param = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),scene_id,new cljs.core.Keyword(null,"param","param",2013631823)], null));
if(cljs.core.map_QMARK_(param)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867)], null),v], null)], null)], null);
} else {
if(portfolio.ui.actions.atom_QMARK_(param)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,v], null),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867)], null),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197)], null),cljs.core.deref(param)], null)], null)], null);
} else {
return null;
}
}
}));

(portfolio.ui.actions.set_scene_param.cljs$core$IFn$_invoke$arity$4 = (function (state,scene_id,k,v){
var param = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),scene_id,new cljs.core.Keyword(null,"param","param",2013631823)], null));
if(cljs.core.map_QMARK_(param)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867),k], null),v], null)], null)], null);
} else {
if(portfolio.ui.actions.atom_QMARK_(param)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v], null),new cljs.core.Keyword(null,"actions","actions",-812656882),(function (){var G__50572 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867),k], null),v], null)], null);
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197),k], null)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__50572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197),k], null),(function (){var G__50576 = cljs.core.deref(param);
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__50576) : k.call(null, G__50576));
})()], null)], null));
} else {
return G__50572;
}
})()], null);
} else {
return null;
}
}
}));

(portfolio.ui.actions.set_scene_param.cljs$lang$maxFixedArity = 4);

portfolio.ui.actions.search = (function portfolio$ui$actions$search(p__50577,q){
var map__50578 = p__50577;
var map__50578__$1 = cljs.core.__destructure_map(map__50578);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50578__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
if(cljs.core.truth_(index)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","suggestions","search/suggestions",-1296554258)], null),portfolio.ui.search.protocols.query(index,q)], null)], null);
} else {
return null;
}
});
portfolio.ui.actions.process_action_result_BANG_ = (function portfolio$ui$actions$process_action_result_BANG_(app,res){
var log = (cljs.core.truth_(new cljs.core.Keyword(null,"log?","log?",-366002723).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app)))?cljs.core.println:(function() { 
var G__50753__delegate = function (_args){
return null;
};
var G__50753 = function (var_args){
var _args = null;
if (arguments.length > 0) {
var G__50754__i = 0, G__50754__a = new Array(arguments.length -  0);
while (G__50754__i < G__50754__a.length) {G__50754__a[G__50754__i] = arguments[G__50754__i + 0]; ++G__50754__i;}
  _args = new cljs.core.IndexedSeq(G__50754__a,0,null);
} 
return G__50753__delegate.call(this,_args);};
G__50753.cljs$lang$maxFixedArity = 0;
G__50753.cljs$lang$applyTo = (function (arglist__50755){
var _args = cljs.core.seq(arglist__50755);
return G__50753__delegate(_args);
});
G__50753.cljs$core$IFn$_invoke$arity$variadic = G__50753__delegate;
return G__50753;
})()
);
var seq__50579_50756 = cljs.core.seq(new cljs.core.Keyword(null,"release","release",-1534371381).cljs$core$IFn$_invoke$arity$1(res));
var chunk__50580_50757 = null;
var count__50581_50758 = (0);
var i__50582_50759 = (0);
while(true){
if((i__50582_50759 < count__50581_50758)){
var ref_50760 = chunk__50580_50757.cljs$core$IIndexed$_nth$arity$2(null, i__50582_50759);
var G__50587_50761 = "Stop watching atom";
var G__50588_50762 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ref_50760], 0));
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2(G__50587_50761,G__50588_50762) : log.call(null, G__50587_50761,G__50588_50762));

cljs.core.remove_watch(ref_50760,new cljs.core.Keyword("portfolio.ui.actions","portfolio","portfolio.ui.actions/portfolio",-1171773875));


var G__50763 = seq__50579_50756;
var G__50764 = chunk__50580_50757;
var G__50765 = count__50581_50758;
var G__50766 = (i__50582_50759 + (1));
seq__50579_50756 = G__50763;
chunk__50580_50757 = G__50764;
count__50581_50758 = G__50765;
i__50582_50759 = G__50766;
continue;
} else {
var temp__5823__auto___50767 = cljs.core.seq(seq__50579_50756);
if(temp__5823__auto___50767){
var seq__50579_50768__$1 = temp__5823__auto___50767;
if(cljs.core.chunked_seq_QMARK_(seq__50579_50768__$1)){
var c__5525__auto___50769 = cljs.core.chunk_first(seq__50579_50768__$1);
var G__50770 = cljs.core.chunk_rest(seq__50579_50768__$1);
var G__50771 = c__5525__auto___50769;
var G__50772 = cljs.core.count(c__5525__auto___50769);
var G__50773 = (0);
seq__50579_50756 = G__50770;
chunk__50580_50757 = G__50771;
count__50581_50758 = G__50772;
i__50582_50759 = G__50773;
continue;
} else {
var ref_50774 = cljs.core.first(seq__50579_50768__$1);
var G__50589_50775 = "Stop watching atom";
var G__50590_50776 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ref_50774], 0));
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2(G__50589_50775,G__50590_50776) : log.call(null, G__50589_50775,G__50590_50776));

cljs.core.remove_watch(ref_50774,new cljs.core.Keyword("portfolio.ui.actions","portfolio","portfolio.ui.actions/portfolio",-1171773875));


var G__50777 = cljs.core.next(seq__50579_50768__$1);
var G__50778 = null;
var G__50779 = (0);
var G__50780 = (0);
seq__50579_50756 = G__50777;
chunk__50580_50757 = G__50778;
count__50581_50758 = G__50779;
i__50582_50759 = G__50780;
continue;
}
} else {
}
}
break;
}

var seq__50591_50781 = cljs.core.seq(new cljs.core.Keyword(null,"fns","fns",1185138786).cljs$core$IFn$_invoke$arity$1(res));
var chunk__50592_50782 = null;
var count__50593_50783 = (0);
var i__50594_50784 = (0);
while(true){
if((i__50594_50784 < count__50593_50783)){
var vec__50613_50785 = chunk__50592_50782.cljs$core$IIndexed$_nth$arity$2(null, i__50594_50784);
var seq__50614_50786 = cljs.core.seq(vec__50613_50785);
var first__50615_50787 = cljs.core.first(seq__50614_50786);
var seq__50614_50788__$1 = cljs.core.next(seq__50614_50786);
var k_50789 = first__50615_50787;
var first__50615_50790__$1 = cljs.core.first(seq__50614_50788__$1);
var seq__50614_50791__$2 = cljs.core.next(seq__50614_50788__$1);
var t_50792 = first__50615_50790__$1;
var first__50615_50793__$2 = cljs.core.first(seq__50614_50791__$2);
var seq__50614_50794__$3 = cljs.core.next(seq__50614_50791__$2);
var f_50795 = first__50615_50793__$2;
var args_50796 = seq__50614_50794__$3;
try{var G__50620_50797 = ["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k_50789)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t_50792)," with"].join('');
var G__50621_50798 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args_50796], 0));
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2(G__50620_50797,G__50621_50798) : log.call(null, G__50620_50797,G__50621_50798));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f_50795,args_50796);
}catch (e50617){var e_50799 = e50617;
var G__50618_50800 = app;
var G__50619_50801 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"exception","exception",-335277064),e_50799,new cljs.core.Keyword(null,"cause","cause",231901252),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k_50789)," on ",cljs.core.name(t_50792)," threw exception"].join(''),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.seq(args_50796))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"arguments",new cljs.core.Keyword(null,"data","data",-232669377),args_50796], null):null)], null)], null)], null);
(portfolio.ui.actions.execute_action_BANG_.cljs$core$IFn$_invoke$arity$2 ? portfolio.ui.actions.execute_action_BANG_.cljs$core$IFn$_invoke$arity$2(G__50618_50800,G__50619_50801) : portfolio.ui.actions.execute_action_BANG_.call(null, G__50618_50800,G__50619_50801));
}

var G__50803 = seq__50591_50781;
var G__50804 = chunk__50592_50782;
var G__50805 = count__50593_50783;
var G__50806 = (i__50594_50784 + (1));
seq__50591_50781 = G__50803;
chunk__50592_50782 = G__50804;
count__50593_50783 = G__50805;
i__50594_50784 = G__50806;
continue;
} else {
var temp__5823__auto___50807 = cljs.core.seq(seq__50591_50781);
if(temp__5823__auto___50807){
var seq__50591_50808__$1 = temp__5823__auto___50807;
if(cljs.core.chunked_seq_QMARK_(seq__50591_50808__$1)){
var c__5525__auto___50809 = cljs.core.chunk_first(seq__50591_50808__$1);
var G__50810 = cljs.core.chunk_rest(seq__50591_50808__$1);
var G__50811 = c__5525__auto___50809;
var G__50812 = cljs.core.count(c__5525__auto___50809);
var G__50813 = (0);
seq__50591_50781 = G__50810;
chunk__50592_50782 = G__50811;
count__50593_50783 = G__50812;
i__50594_50784 = G__50813;
continue;
} else {
var vec__50622_50814 = cljs.core.first(seq__50591_50808__$1);
var seq__50623_50815 = cljs.core.seq(vec__50622_50814);
var first__50624_50816 = cljs.core.first(seq__50623_50815);
var seq__50623_50817__$1 = cljs.core.next(seq__50623_50815);
var k_50818 = first__50624_50816;
var first__50624_50819__$1 = cljs.core.first(seq__50623_50817__$1);
var seq__50623_50820__$2 = cljs.core.next(seq__50623_50817__$1);
var t_50821 = first__50624_50819__$1;
var first__50624_50822__$2 = cljs.core.first(seq__50623_50820__$2);
var seq__50623_50823__$3 = cljs.core.next(seq__50623_50820__$2);
var f_50824 = first__50624_50822__$2;
var args_50825 = seq__50623_50823__$3;
try{var G__50628_50826 = ["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k_50818)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t_50821)," with"].join('');
var G__50629_50827 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args_50825], 0));
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2(G__50628_50826,G__50629_50827) : log.call(null, G__50628_50826,G__50629_50827));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f_50824,args_50825);
}catch (e50625){var e_50828 = e50625;
var G__50626_50829 = app;
var G__50627_50830 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"exception","exception",-335277064),e_50828,new cljs.core.Keyword(null,"cause","cause",231901252),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k_50818)," on ",cljs.core.name(t_50821)," threw exception"].join(''),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.seq(args_50825))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"arguments",new cljs.core.Keyword(null,"data","data",-232669377),args_50825], null):null)], null)], null)], null);
(portfolio.ui.actions.execute_action_BANG_.cljs$core$IFn$_invoke$arity$2 ? portfolio.ui.actions.execute_action_BANG_.cljs$core$IFn$_invoke$arity$2(G__50626_50829,G__50627_50830) : portfolio.ui.actions.execute_action_BANG_.call(null, G__50626_50829,G__50627_50830));
}

var G__50831 = cljs.core.next(seq__50591_50808__$1);
var G__50832 = null;
var G__50833 = (0);
var G__50834 = (0);
seq__50591_50781 = G__50831;
chunk__50592_50782 = G__50832;
count__50593_50783 = G__50833;
i__50594_50784 = G__50834;
continue;
}
} else {
}
}
break;
}

var seq__50630_50835 = cljs.core.seq(new cljs.core.Keyword(null,"subscribe","subscribe",416253756).cljs$core$IFn$_invoke$arity$1(res));
var chunk__50631_50836 = null;
var count__50632_50837 = (0);
var i__50633_50838 = (0);
while(true){
if((i__50633_50838 < count__50632_50837)){
var ref_50839 = chunk__50631_50836.cljs$core$IIndexed$_nth$arity$2(null, i__50633_50838);
var G__50638_50840 = "Start watching atom";
var G__50639_50841 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ref_50839], 0));
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2(G__50638_50840,G__50639_50841) : log.call(null, G__50638_50840,G__50639_50841));

cljs.core.add_watch(ref_50839,new cljs.core.Keyword("portfolio.ui.actions","portfolio","portfolio.ui.actions/portfolio",-1171773875),((function (seq__50630_50835,chunk__50631_50836,count__50632_50837,i__50633_50838,ref_50839,log){
return (function (_,___$1,___$2,___$3){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.update,new cljs.core.Keyword(null,"heartbeat","heartbeat",-1141780952),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
});})(seq__50630_50835,chunk__50631_50836,count__50632_50837,i__50633_50838,ref_50839,log))
);


var G__50842 = seq__50630_50835;
var G__50843 = chunk__50631_50836;
var G__50844 = count__50632_50837;
var G__50845 = (i__50633_50838 + (1));
seq__50630_50835 = G__50842;
chunk__50631_50836 = G__50843;
count__50632_50837 = G__50844;
i__50633_50838 = G__50845;
continue;
} else {
var temp__5823__auto___50846 = cljs.core.seq(seq__50630_50835);
if(temp__5823__auto___50846){
var seq__50630_50847__$1 = temp__5823__auto___50846;
if(cljs.core.chunked_seq_QMARK_(seq__50630_50847__$1)){
var c__5525__auto___50848 = cljs.core.chunk_first(seq__50630_50847__$1);
var G__50849 = cljs.core.chunk_rest(seq__50630_50847__$1);
var G__50850 = c__5525__auto___50848;
var G__50851 = cljs.core.count(c__5525__auto___50848);
var G__50852 = (0);
seq__50630_50835 = G__50849;
chunk__50631_50836 = G__50850;
count__50632_50837 = G__50851;
i__50633_50838 = G__50852;
continue;
} else {
var ref_50853 = cljs.core.first(seq__50630_50847__$1);
var G__50640_50854 = "Start watching atom";
var G__50641_50855 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ref_50853], 0));
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2(G__50640_50854,G__50641_50855) : log.call(null, G__50640_50854,G__50641_50855));

cljs.core.add_watch(ref_50853,new cljs.core.Keyword("portfolio.ui.actions","portfolio","portfolio.ui.actions/portfolio",-1171773875),((function (seq__50630_50835,chunk__50631_50836,count__50632_50837,i__50633_50838,ref_50853,seq__50630_50847__$1,temp__5823__auto___50846,log){
return (function (_,___$1,___$2,___$3){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.update,new cljs.core.Keyword(null,"heartbeat","heartbeat",-1141780952),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
});})(seq__50630_50835,chunk__50631_50836,count__50632_50837,i__50633_50838,ref_50853,seq__50630_50847__$1,temp__5823__auto___50846,log))
);


var G__50856 = cljs.core.next(seq__50630_50847__$1);
var G__50857 = null;
var G__50858 = (0);
var G__50859 = (0);
seq__50630_50835 = G__50856;
chunk__50631_50836 = G__50857;
count__50632_50837 = G__50858;
i__50633_50838 = G__50859;
continue;
}
} else {
}
}
break;
}

var temp__5823__auto___50860 = new cljs.core.Keyword(null,"update-window-location","update-window-location",770004291).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5823__auto___50860)){
var url_50861 = temp__5823__auto___50860;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url_50861,portfolio.ui.routes.get_current_url())){
} else {
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2("Updating browser URL to",url_50861) : log.call(null, "Updating browser URL to",url_50861));

history.pushState(false,false,url_50861);
}

requestAnimationFrame((function (){
var temp__5823__auto____$1 = (function (){var G__50642 = location.hash;
var G__50642__$1 = (((G__50642 == null))?null:cljs.core.subs.cljs$core$IFn$_invoke$arity$2(G__50642,(1)));
var G__50642__$2 = (((G__50642__$1 == null))?null:cljs.core.not_empty(G__50642__$1));
if((G__50642__$2 == null)){
return null;
} else {
return document.getElementById(G__50642__$2);
}
})();
if(cljs.core.truth_(temp__5823__auto____$1)){
var el = temp__5823__auto____$1;
return el.scrollIntoView();
} else {
return null;
}
}));
} else {
}

var temp__5823__auto___50862 = new cljs.core.Keyword(null,"set-page-title","set-page-title",-1142382407).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5823__auto___50862)){
var title_50863 = temp__5823__auto___50862;
var G__50643_50864 = ["Set page title to '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title_50863),"'"].join('');
(log.cljs$core$IFn$_invoke$arity$1 ? log.cljs$core$IFn$_invoke$arity$1(G__50643_50864) : log.call(null, G__50643_50864));

(document.title = title_50863);
} else {
}

if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270).cljs$core$IFn$_invoke$arity$1(res);
}
})())){
if(cljs.core.truth_(new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270).cljs$core$IFn$_invoke$arity$1(res))){
var G__50644_50865 = ":assoc-in";
var G__50645_50866 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270).cljs$core$IFn$_invoke$arity$1(res)], 0));
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2(G__50644_50865,G__50645_50866) : log.call(null, G__50644_50865,G__50645_50866));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806).cljs$core$IFn$_invoke$arity$1(res))){
var G__50646_50867 = ":dissoc-in";
var G__50647_50868 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806).cljs$core$IFn$_invoke$arity$1(res)], 0));
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2(G__50646_50867,G__50647_50868) : log.call(null, G__50646_50867,G__50647_50868));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app,(function (state){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(portfolio.ui.actions.assoc_in_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(portfolio.ui.actions.dissoc_in_STAR_,state,new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806).cljs$core$IFn$_invoke$arity$1(res)),new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270).cljs$core$IFn$_invoke$arity$1(res));
}));
} else {
}

var seq__50649_50869 = cljs.core.seq(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(res));
var chunk__50650_50870 = null;
var count__50651_50871 = (0);
var i__50652_50872 = (0);
while(true){
if((i__50652_50872 < count__50651_50871)){
var action_50873 = chunk__50650_50870.cljs$core$IIndexed$_nth$arity$2(null, i__50652_50872);
(portfolio.ui.actions.execute_action_BANG_.cljs$core$IFn$_invoke$arity$2 ? portfolio.ui.actions.execute_action_BANG_.cljs$core$IFn$_invoke$arity$2(app,action_50873) : portfolio.ui.actions.execute_action_BANG_.call(null, app,action_50873));


var G__50874 = seq__50649_50869;
var G__50875 = chunk__50650_50870;
var G__50876 = count__50651_50871;
var G__50877 = (i__50652_50872 + (1));
seq__50649_50869 = G__50874;
chunk__50650_50870 = G__50875;
count__50651_50871 = G__50876;
i__50652_50872 = G__50877;
continue;
} else {
var temp__5823__auto___50878 = cljs.core.seq(seq__50649_50869);
if(temp__5823__auto___50878){
var seq__50649_50879__$1 = temp__5823__auto___50878;
if(cljs.core.chunked_seq_QMARK_(seq__50649_50879__$1)){
var c__5525__auto___50880 = cljs.core.chunk_first(seq__50649_50879__$1);
var G__50881 = cljs.core.chunk_rest(seq__50649_50879__$1);
var G__50882 = c__5525__auto___50880;
var G__50883 = cljs.core.count(c__5525__auto___50880);
var G__50884 = (0);
seq__50649_50869 = G__50881;
chunk__50650_50870 = G__50882;
count__50651_50871 = G__50883;
i__50652_50872 = G__50884;
continue;
} else {
var action_50885 = cljs.core.first(seq__50649_50879__$1);
(portfolio.ui.actions.execute_action_BANG_.cljs$core$IFn$_invoke$arity$2 ? portfolio.ui.actions.execute_action_BANG_.cljs$core$IFn$_invoke$arity$2(app,action_50885) : portfolio.ui.actions.execute_action_BANG_.call(null, app,action_50885));


var G__50886 = cljs.core.next(seq__50649_50879__$1);
var G__50887 = null;
var G__50888 = (0);
var G__50889 = (0);
seq__50649_50869 = G__50886;
chunk__50650_50870 = G__50887;
count__50651_50871 = G__50888;
i__50652_50872 = G__50889;
continue;
}
} else {
}
}
break;
}

var temp__5823__auto___50890 = new cljs.core.Keyword(null,"swap","swap",228675637).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5823__auto___50890)){
var vec__50653_50891 = temp__5823__auto___50890;
var ref_50892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50653_50891,(0),null);
var path_50893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50653_50891,(1),null);
var v_50894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50653_50891,(2),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ref_50892,cljs.core.assoc_in,path_50893,v_50894);
} else {
}

var temp__5823__auto___50895 = new cljs.core.Keyword(null,"reset","reset",-800929946).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5823__auto___50895)){
var vec__50656_50896 = temp__5823__auto___50895;
var ref_50897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50656_50896,(0),null);
var v_50898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50656_50896,(1),null);
cljs.core.reset_BANG_(ref_50897,v_50898);
} else {
}

var temp__5823__auto___50899 = new cljs.core.Keyword(null,"load-css-files","load-css-files",-1144872475).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5823__auto___50899)){
var paths_50900 = temp__5823__auto___50899;
portfolio.ui.css.load_css_files(paths_50900);
} else {
}

var temp__5823__auto__ = new cljs.core.Keyword(null,"replace-css-files","replace-css-files",1438305968).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5823__auto__)){
var paths = temp__5823__auto__;
return portfolio.ui.css.replace_loaded_css_files(paths);
} else {
return null;
}
});
portfolio.ui.actions.save_in_local_storage = (function portfolio$ui$actions$save_in_local_storage(k,v){
return localStorage.setItem(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
});
portfolio.ui.actions.execute_action_BANG_ = (function portfolio$ui$actions$execute_action_BANG_(app,action){
if(cljs.core.truth_(new cljs.core.Keyword(null,"log?","log?",-366002723).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["execute-action!",action], 0));
} else {
}

portfolio.ui.actions.process_action_result_BANG_(app,(function (){var G__50659 = cljs.core.first(action);
var G__50659__$1 = (((G__50659 instanceof cljs.core.Keyword))?G__50659.fqn:null);
switch (G__50659__$1) {
case "assoc-in":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),cljs.core.rest(action)], null);

break;
case "dissoc-in":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),cljs.core.rest(action)], null);

break;
case "fn/call":
var vec__50660 = cljs.core.rest(action);
var seq__50661 = cljs.core.seq(vec__50660);
var first__50662 = cljs.core.first(seq__50661);
var seq__50661__$1 = cljs.core.next(seq__50661);
var fn = first__50662;
var args = seq__50661__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fn,args);

break;
case "go-to-location":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(portfolio.ui.actions.go_to_location,cljs.core.deref(app),cljs.core.rest(action));

break;
case "go-to-current-location":
return portfolio.ui.actions.go_to_location(cljs.core.deref(app),portfolio.ui.routes.get_current_location());

break;
case "set-css-files":
var vec__50663 = cljs.core.rest(action);
var paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50663,(0),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css-paths","css-paths",582305563)], null),paths], null),new cljs.core.Keyword(null,"load-css-files","load-css-files",-1144872475),paths,new cljs.core.Keyword(null,"replace-css-files","replace-css-files",1438305968),paths], null);

break;
case "remove-scene-param":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(portfolio.ui.actions.remove_scene_param,cljs.core.deref(app),cljs.core.rest(action));

break;
case "save-in-local-storage":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(portfolio.ui.actions.save_in_local_storage,cljs.core.rest(action));

break;
case "set-scene-param":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(portfolio.ui.actions.set_scene_param,cljs.core.deref(app),cljs.core.rest(action));

break;
case "search":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(portfolio.ui.actions.search,cljs.core.deref(app),cljs.core.rest(action));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50659__$1)].join('')));

}
})());

return app;
});
portfolio.ui.actions.available_actions = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword("event","prevent-default","event/prevent-default",767971177),null,new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),null,new cljs.core.Keyword(null,"remove-scene-param","remove-scene-param",-1304315187),null,new cljs.core.Keyword(null,"search","search",1564939822),null,new cljs.core.Keyword(null,"go-to-current-location","go-to-current-location",1620881583),null,new cljs.core.Keyword(null,"set-scene-param","set-scene-param",234226032),null,new cljs.core.Keyword(null,"save-in-local-storage","save-in-local-storage",1733717684),null,new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),null,new cljs.core.Keyword(null,"go-to-location","go-to-location",-1047138405),null,new cljs.core.Keyword("fn","call","fn/call",-519998786),null], null), null);
portfolio.ui.actions.actions_QMARK_ = (function portfolio$ui$actions$actions_QMARK_(x){
return ((cljs.core.sequential_QMARK_(x)) && (((cljs.core.seq(x)) && (cljs.core.every_QMARK_((function (p1__50667_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__50667_SHARP_)) && (cljs.core.contains_QMARK_(portfolio.ui.actions.available_actions,cljs.core.first(p1__50667_SHARP_))));
}),x)))));
});
portfolio.ui.actions.parse_int = (function portfolio$ui$actions$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,n)){
return (0);
} else {
return n;
}
});
portfolio.ui.actions.get_action = (function portfolio$ui$actions$get_action(message){
try{var msg = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(message,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(msg))){
var action = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(msg));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),action))?(function (){var vec__50670 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50670,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50670,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50668_SHARP_){
var G__50673 = p1__50668_SHARP_;
if(typeof p1__50668_SHARP_ === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__50673);
} else {
return G__50673;
}
}),path),v], null);
})():null));
} else {
return null;
}
}catch (e50669){var _e = e50669;
return null;
}});
/**
 * Given a Portfolio `app` instance and some prepared data to render, wrap
 *   collections of actions in a function that executes these actions. Using this
 *   function makes it possible to prepare event handlers as a sequence of action
 *   tuples, and have them seemlessly emitted as actions in the components.
 * 
 *   If you need to access the `.-value` of the event target (e.g. for on-change on
 *   input fields, etc), use `:event.target/value` as a placeholder in your action,
 *   and it will be replaced with the value.
 */
portfolio.ui.actions.actionize_data = (function portfolio$ui$actions$actionize_data(app,data){
return clojure.walk.prewalk((function (x){
if(portfolio.ui.actions.actions_QMARK_(x)){
return (function() { 
var G__50902__delegate = function (e,p__50674){
var vec__50675 = p__50674;
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50675,(0),null);
if(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("event","prevent-default","event/prevent-default",767971177)], null)]),cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.identity,x)))){
e.preventDefault();

e.stopPropagation();
} else {
}

var seq__50678 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("event","prevent-default","event/prevent-default",767971177)], null)]),x));
var chunk__50679 = null;
var count__50680 = (0);
var i__50681 = (0);
while(true){
if((i__50681 < count__50680)){
var action = chunk__50679.cljs$core$IIndexed$_nth$arity$2(null, i__50681);
portfolio.ui.actions.execute_action_BANG_(app,clojure.walk.prewalk(((function (seq__50678,chunk__50679,count__50680,i__50681,action,vec__50675,data__$1){
return (function (ax){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,ax))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,ax);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("event.target","value","event.target/value",857030372),ax)){
var G__50686 = e;
var G__50686__$1 = (((G__50686 == null))?null:G__50686.target);
if((G__50686__$1 == null)){
return null;
} else {
return G__50686__$1.value;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("event.target","number-value","event.target/number-value",-362876562),ax)){
var G__50687 = e;
var G__50687__$1 = (((G__50687 == null))?null:G__50687.target);
var G__50687__$2 = (((G__50687__$1 == null))?null:G__50687__$1.value);
if((G__50687__$2 == null)){
return null;
} else {
return portfolio.ui.actions.parse_int(G__50687__$2);
}
} else {
return ax;

}
}
}
});})(seq__50678,chunk__50679,count__50680,i__50681,action,vec__50675,data__$1))
,action));


var G__50903 = seq__50678;
var G__50904 = chunk__50679;
var G__50905 = count__50680;
var G__50906 = (i__50681 + (1));
seq__50678 = G__50903;
chunk__50679 = G__50904;
count__50680 = G__50905;
i__50681 = G__50906;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__50678);
if(temp__5823__auto__){
var seq__50678__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50678__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__50678__$1);
var G__50909 = cljs.core.chunk_rest(seq__50678__$1);
var G__50910 = c__5525__auto__;
var G__50911 = cljs.core.count(c__5525__auto__);
var G__50912 = (0);
seq__50678 = G__50909;
chunk__50679 = G__50910;
count__50680 = G__50911;
i__50681 = G__50912;
continue;
} else {
var action = cljs.core.first(seq__50678__$1);
portfolio.ui.actions.execute_action_BANG_(app,clojure.walk.prewalk(((function (seq__50678,chunk__50679,count__50680,i__50681,action,seq__50678__$1,temp__5823__auto__,vec__50675,data__$1){
return (function (ax){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,ax))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,ax);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("event.target","value","event.target/value",857030372),ax)){
var G__50690 = e;
var G__50690__$1 = (((G__50690 == null))?null:G__50690.target);
if((G__50690__$1 == null)){
return null;
} else {
return G__50690__$1.value;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("event.target","number-value","event.target/number-value",-362876562),ax)){
var G__50691 = e;
var G__50691__$1 = (((G__50691 == null))?null:G__50691.target);
var G__50691__$2 = (((G__50691__$1 == null))?null:G__50691__$1.value);
if((G__50691__$2 == null)){
return null;
} else {
return portfolio.ui.actions.parse_int(G__50691__$2);
}
} else {
return ax;

}
}
}
});})(seq__50678,chunk__50679,count__50680,i__50681,action,seq__50678__$1,temp__5823__auto__,vec__50675,data__$1))
,action));


var G__50915 = cljs.core.next(seq__50678__$1);
var G__50916 = null;
var G__50917 = (0);
var G__50918 = (0);
seq__50678 = G__50915;
chunk__50679 = G__50916;
count__50680 = G__50917;
i__50681 = G__50918;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__50902 = function (e,var_args){
var p__50674 = null;
if (arguments.length > 1) {
var G__50919__i = 0, G__50919__a = new Array(arguments.length -  1);
while (G__50919__i < G__50919__a.length) {G__50919__a[G__50919__i] = arguments[G__50919__i + 1]; ++G__50919__i;}
  p__50674 = new cljs.core.IndexedSeq(G__50919__a,0,null);
} 
return G__50902__delegate.call(this,e,p__50674);};
G__50902.cljs$lang$maxFixedArity = 1;
G__50902.cljs$lang$applyTo = (function (arglist__50920){
var e = cljs.core.first(arglist__50920);
var p__50674 = cljs.core.rest(arglist__50920);
return G__50902__delegate(e,p__50674);
});
G__50902.cljs$core$IFn$_invoke$arity$variadic = G__50902__delegate;
return G__50902;
})()
;
} else {
return x;
}
}),data);
});
portfolio.ui.actions.dispatch = (function portfolio$ui$actions$dispatch(var_args){
var args__5732__auto__ = [];
var len__5726__auto___50921 = arguments.length;
var i__5727__auto___50922 = (0);
while(true){
if((i__5727__auto___50922 < len__5726__auto___50921)){
args__5732__auto__.push((arguments[i__5727__auto___50922]));

var G__50923 = (i__5727__auto___50922 + (1));
i__5727__auto___50922 = G__50923;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return portfolio.ui.actions.dispatch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(portfolio.ui.actions.dispatch.cljs$core$IFn$_invoke$arity$variadic = (function (actions,e,p__50699){
var vec__50734 = p__50699;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50734,(0),null);
return requestAnimationFrame((function (){
return (actions.cljs$core$IFn$_invoke$arity$2 ? actions.cljs$core$IFn$_invoke$arity$2(e,data) : actions.call(null, e,data));
}));
}));

(portfolio.ui.actions.dispatch.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(portfolio.ui.actions.dispatch.cljs$lang$applyTo = (function (seq50696){
var G__50697 = cljs.core.first(seq50696);
var seq50696__$1 = cljs.core.next(seq50696);
var G__50698 = cljs.core.first(seq50696__$1);
var seq50696__$2 = cljs.core.next(seq50696__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50697,G__50698,seq50696__$2);
}));


//# sourceMappingURL=portfolio.ui.actions.js.map
