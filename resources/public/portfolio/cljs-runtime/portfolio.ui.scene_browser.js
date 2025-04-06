goog.provide('portfolio.ui.scene_browser');
portfolio.ui.scene_browser.get_expanded_path = (function portfolio$ui$scene_browser$get_expanded_path(var_args){
var G__50054 = arguments.length;
switch (G__50054) {
case 1:
return portfolio.ui.scene_browser.get_expanded_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portfolio.ui.scene_browser.get_expanded_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portfolio.ui.scene_browser.get_expanded_path.cljs$core$IFn$_invoke$arity$1 = (function (collection){
return portfolio.ui.scene_browser.get_expanded_path.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path-ctx","path-ctx",326904938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null)], null),collection);
}));

(portfolio.ui.scene_browser.get_expanded_path.cljs$core$IFn$_invoke$arity$2 = (function (p__50055,collection){
var map__50056 = p__50055;
var map__50056__$1 = cljs.core.__destructure_map(map__50056);
var path_ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50056__$1,new cljs.core.Keyword(null,"path-ctx","path-ctx",326904938));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(path_ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(collection),new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)], null));
}));

(portfolio.ui.scene_browser.get_expanded_path.cljs$lang$maxFixedArity = 2);

portfolio.ui.scene_browser.get_context = (function portfolio$ui$scene_browser$get_context(p__50057,path){
var map__50058 = p__50057;
var map__50058__$1 = cljs.core.__destructure_map(map__50058);
var collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50058__$1,new cljs.core.Keyword(null,"collections","collections",-2114643505));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kind","kind",-717265803),collections),path);
});
portfolio.ui.scene_browser.get_actions = (function portfolio$ui$scene_browser$get_actions(opt,target){
return clojure.walk.postwalk((function (p1__50059_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio.ui.scene-browser","target-id","portfolio.ui.scene-browser/target-id",-1487055392),p1__50059_SHARP_)){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target);
} else {
return p1__50059_SHARP_;
}
}),new cljs.core.Keyword(null,"select-actions","select-actions",-859150860).cljs$core$IFn$_invoke$arity$1(opt));
});
portfolio.ui.scene_browser.prepare_package = (function portfolio$ui$scene_browser$prepare_package(state,opt,collection,path){
var exp_path = portfolio.ui.scene_browser.get_expanded_path.cljs$core$IFn$_invoke$arity$2(opt,collection);
var expanded_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,exp_path);
var G__50060 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(collection),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"package","package",1189062786),new cljs.core.Keyword(null,"context","context",-830191113),portfolio.ui.scene_browser.get_context(state,path),new cljs.core.Keyword(null,"actions","actions",-812656882),portfolio.ui.scene_browser.get_actions(opt,collection),new cljs.core.Keyword(null,"illustration","illustration",-48860973),portfolio.ui.collection.get_package_illustration(state,collection,expanded_QMARK_),new cljs.core.Keyword(null,"toggle","toggle",1291842030),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){
phosphor.icons.load_icon_BANG_(new cljs.core.Keyword("phosphor.regular","caret-right","phosphor.regular/caret-right",-687644430),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 256 256"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"256",new cljs.core.Keyword(null,"height","height",1025178622),"256",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"points","points",-1486596883),"96 48 176 128 96 208",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null)], null));

return new cljs.core.Keyword("phosphor.regular","caret-right","phosphor.regular/caret-right",-687644430);
})()
,new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),exp_path,cljs.core.not(expanded_QMARK_)], null)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(cljs.core.truth_(expanded_QMARK_)?(90):(0))], null)], null);
var G__50060__$1 = (cljs.core.truth_(expanded_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50060,new cljs.core.Keyword(null,"items","items",1031954938),(function (){var G__50061 = state;
var G__50062 = opt;
var G__50063 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(collection));
return (portfolio.ui.scene_browser.prepare_browser_collections.cljs$core$IFn$_invoke$arity$3 ? portfolio.ui.scene_browser.prepare_browser_collections.cljs$core$IFn$_invoke$arity$3(G__50061,G__50062,G__50063) : portfolio.ui.scene_browser.prepare_browser_collections.call(null, G__50061,G__50062,G__50063));
})()):G__50060);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(collection),new cljs.core.Keyword(null,"current-id","current-id",210783650).cljs$core$IFn$_invoke$arity$1(opt))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50060__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true);
} else {
return G__50060__$1;
}
});
portfolio.ui.scene_browser.prepare_folder = (function portfolio$ui$scene_browser$prepare_folder(state,opt,collection,path){
var exp_path = portfolio.ui.scene_browser.get_expanded_path.cljs$core$IFn$_invoke$arity$2(opt,collection);
var expanded_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(false,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,exp_path));
var G__50064 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(collection),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"folder","folder",1515881736),new cljs.core.Keyword(null,"context","context",-830191113),portfolio.ui.scene_browser.get_context(state,path),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),exp_path,(!(expanded_QMARK_))], null)], null),new cljs.core.Keyword(null,"illustration","illustration",-48860973),portfolio.ui.collection.get_folder_illustration(state,collection,expanded_QMARK_)], null);
if(expanded_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50064,new cljs.core.Keyword(null,"items","items",1031954938),(function (){var G__50065 = state;
var G__50066 = opt;
var G__50067 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(collection));
return (portfolio.ui.scene_browser.prepare_browser_collections.cljs$core$IFn$_invoke$arity$3 ? portfolio.ui.scene_browser.prepare_browser_collections.cljs$core$IFn$_invoke$arity$3(G__50065,G__50066,G__50067) : portfolio.ui.scene_browser.prepare_browser_collections.call(null, G__50065,G__50066,G__50067));
})());
} else {
return G__50064;
}
});
portfolio.ui.scene_browser.prepare_scene = (function portfolio$ui$scene_browser$prepare_scene(state,opt,scene,path){
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene),new cljs.core.Keyword(null,"current-id","current-id",210783650).cljs$core$IFn$_invoke$arity$1(opt));
var G__50069 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(scene),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.Keyword(null,"illustration","illustration",-48860973),portfolio.ui.collection.get_scene_illustration(state,scene,selected_QMARK_),new cljs.core.Keyword(null,"context","context",-830191113),portfolio.ui.scene_browser.get_context(state,path),new cljs.core.Keyword(null,"actions","actions",-812656882),portfolio.ui.scene_browser.get_actions(opt,scene)], null);
var G__50069__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(opt))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50069,new cljs.core.Keyword(null,"url","url",276297046),portfolio.ui.routes.get_scene_url(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(opt),scene)):G__50069);
if(selected_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50069__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true);
} else {
return G__50069__$1;
}
});
portfolio.ui.scene_browser.prepare_browser_collections = (function portfolio$ui$scene_browser$prepare_browser_collections(state,opt,parent_ids){
var iter__5480__auto__ = (function portfolio$ui$scene_browser$prepare_browser_collections_$_iter__50071(s__50072){
return (new cljs.core.LazySeq(null,(function (){
var s__50072__$1 = s__50072;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__50072__$1);
if(temp__5823__auto__){
var s__50072__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50072__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__50072__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__50074 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__50073 = (0);
while(true){
if((i__50073 < size__5479__auto__)){
var item = cljs.core._nth(c__5478__auto__,i__50073);
cljs.core.chunk_append(b__50074,(function (){var G__50079 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(item);
var G__50079__$1 = (((G__50079 instanceof cljs.core.Keyword))?G__50079.fqn:null);
switch (G__50079__$1) {
case "package":
return portfolio.ui.scene_browser.prepare_package(state,opt,item,parent_ids);

break;
case "folder":
return portfolio.ui.scene_browser.prepare_folder(state,opt,item,parent_ids);

break;
default:
return portfolio.ui.scene_browser.prepare_scene(state,opt,item,parent_ids);

}
})());

var G__50099 = (i__50073 + (1));
i__50073 = G__50099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50074),portfolio$ui$scene_browser$prepare_browser_collections_$_iter__50071(cljs.core.chunk_rest(s__50072__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50074),null);
}
} else {
var item = cljs.core.first(s__50072__$2);
return cljs.core.cons((function (){var G__50080 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(item);
var G__50080__$1 = (((G__50080 instanceof cljs.core.Keyword))?G__50080.fqn:null);
switch (G__50080__$1) {
case "package":
return portfolio.ui.scene_browser.prepare_package(state,opt,item,parent_ids);

break;
case "folder":
return portfolio.ui.scene_browser.prepare_folder(state,opt,item,parent_ids);

break;
default:
return portfolio.ui.scene_browser.prepare_scene(state,opt,item,parent_ids);

}
})(),portfolio$ui$scene_browser$prepare_browser_collections_$_iter__50071(cljs.core.rest(s__50072__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(portfolio.ui.collection.get_sort_key,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(portfolio.ui.collection.by_parent_id(cljs.core.last(parent_ids)),cljs.core.vals(new cljs.core.Keyword(null,"collections","collections",-2114643505).cljs$core$IFn$_invoke$arity$1(state)))),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(portfolio.ui.scene.sort_key,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(portfolio.ui.collection.by_parent_id(cljs.core.last(parent_ids)),cljs.core.vals(new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(state))))));
});
/**
 * `opt` is a map of:
 * 
 *   - `:select-actions` - Vector of actions to perform to select collection or scene.
 *                      Use :portfolio.ui.scene-browser/target-id as a placeholder
 *                      for the selected id.
 *   - `:path-ctx` - The state path context. Allows for multiple individual menus with
 *                their own state for expand/collapse etc.
 *   - `:location` - Optional. When provided, `:url` will be included for scene options.
 */
portfolio.ui.scene_browser.prepare_browser = (function portfolio$ui$scene_browser$prepare_browser(state,opt){
return portfolio.ui.scene_browser.prepare_browser_collections(state,opt,cljs.core.PersistentVector.EMPTY);
});

//# sourceMappingURL=portfolio.ui.scene_browser.js.map
