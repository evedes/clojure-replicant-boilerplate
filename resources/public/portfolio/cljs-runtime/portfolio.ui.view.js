goog.provide('portfolio.ui.view');

/**
 * @interface
 */
portfolio.ui.view.IViewData = function(){};

var portfolio$ui$view$IViewData$prepare_data$dyn_47386 = (function (view,state,location){
var x__5350__auto__ = (((view == null))?null:view);
var m__5351__auto__ = (portfolio.ui.view.prepare_data[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(view,state,location) : m__5351__auto__.call(null, view,state,location));
} else {
var m__5349__auto__ = (portfolio.ui.view.prepare_data["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(view,state,location) : m__5349__auto__.call(null, view,state,location));
} else {
throw cljs.core.missing_protocol("IViewData.prepare-data",view);
}
}
});
portfolio.ui.view.prepare_data = (function portfolio$ui$view$prepare_data(view,state,location){
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(view),cljs.core.with_meta(new cljs.core.Symbol("portfolio.ui.view","prepare-data","portfolio.ui.view/prepare-data",800392415,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5821__auto__){
var meta_impl__5352__auto__ = temp__5821__auto__;
return (meta_impl__5352__auto__.cljs$core$IFn$_invoke$arity$3 ? meta_impl__5352__auto__.cljs$core$IFn$_invoke$arity$3(view,state,location) : meta_impl__5352__auto__.call(null, view,state,location));
} else {
if((((!((view == null)))) && ((!((view.portfolio$ui$view$IViewData$prepare_data$arity$3 == null)))))){
return view.portfolio$ui$view$IViewData$prepare_data$arity$3(view,state,location);
} else {
return portfolio$ui$view$IViewData$prepare_data$dyn_47386(view,state,location);
}
}
});


/**
 * @interface
 */
portfolio.ui.view.IView = function(){};

var portfolio$ui$view$IView$render_view$dyn_47389 = (function (self){
var x__5350__auto__ = (((self == null))?null:self);
var m__5351__auto__ = (portfolio.ui.view.render_view[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(self) : m__5351__auto__.call(null, self));
} else {
var m__5349__auto__ = (portfolio.ui.view.render_view["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(self) : m__5349__auto__.call(null, self));
} else {
throw cljs.core.missing_protocol("IView.render-view",self);
}
}
});
portfolio.ui.view.render_view = (function portfolio$ui$view$render_view(self){
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(self),cljs.core.with_meta(new cljs.core.Symbol("portfolio.ui.view","render-view","portfolio.ui.view/render-view",657855785,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5821__auto__){
var meta_impl__5352__auto__ = temp__5821__auto__;
return (meta_impl__5352__auto__.cljs$core$IFn$_invoke$arity$1 ? meta_impl__5352__auto__.cljs$core$IFn$_invoke$arity$1(self) : meta_impl__5352__auto__.call(null, self));
} else {
if((((!((self == null)))) && ((!((self.portfolio$ui$view$IView$render_view$arity$1 == null)))))){
return self.portfolio$ui$view$IView$render_view$arity$1(self);
} else {
return portfolio$ui$view$IView$render_view$dyn_47389(self);
}
}
});


//# sourceMappingURL=portfolio.ui.view.js.map
