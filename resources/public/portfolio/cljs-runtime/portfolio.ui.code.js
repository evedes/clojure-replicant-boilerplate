goog.provide('portfolio.ui.code');

/**
 * @interface
 */
portfolio.ui.code.ICodeString = function(){};

var portfolio$ui$code$ICodeString$format_code$dyn_49966 = (function (x){
var x__5350__auto__ = (((x == null))?null:x);
var m__5351__auto__ = (portfolio.ui.code.format_code[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__5351__auto__.call(null, x));
} else {
var m__5349__auto__ = (portfolio.ui.code.format_code["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__5349__auto__.call(null, x));
} else {
throw cljs.core.missing_protocol("ICodeString.format-code",x);
}
}
});
portfolio.ui.code.format_code = (function portfolio$ui$code$format_code(x){
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(x),cljs.core.with_meta(new cljs.core.Symbol("portfolio.ui.code","format-code","portfolio.ui.code/format-code",1873617624,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5821__auto__){
var meta_impl__5352__auto__ = temp__5821__auto__;
return (meta_impl__5352__auto__.cljs$core$IFn$_invoke$arity$1 ? meta_impl__5352__auto__.cljs$core$IFn$_invoke$arity$1(x) : meta_impl__5352__auto__.call(null, x));
} else {
if((((!((x == null)))) && ((!((x.portfolio$ui$code$ICodeString$format_code$arity$1 == null)))))){
return x.portfolio$ui$code$ICodeString$format_code$arity$1(x);
} else {
return portfolio$ui$code$ICodeString$format_code$dyn_49966(x);
}
}
});

(portfolio.ui.code.ICodeString["_"] = true);

(portfolio.ui.code.format_code["_"] = (function (x){
return x;
}));
portfolio.ui.code.blank_QMARK_ = (function portfolio$ui$code$blank_QMARK_(x){
return (((x == null)) || (((((cljs.core.coll_QMARK_(x)) && (cljs.core.empty_QMARK_(x)))) || (((typeof x === 'string') && (cljs.core.empty_QMARK_(x)))))));
});
portfolio.ui.code.code_str = (function portfolio$ui$code$code_str(data){
if((!(portfolio.ui.code.blank_QMARK_(data)))){
var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49962_49967 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49963_49968 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49964_49969 = true;
var _STAR_print_fn_STAR__temp_val__49965_49970 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49964_49969);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49965_49970);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(clojure.walk.postwalk(portfolio.ui.code.format_code,data));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49963_49968);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49962_49967);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
} else {
return null;
}
});

//# sourceMappingURL=portfolio.ui.code.js.map
