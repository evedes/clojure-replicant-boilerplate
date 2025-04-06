goog.provide('dumdom.dom');
/**
 * Creates a virtual DOM element component of the specified type with attributes
 *   and optional children. Returns a function that renders the virtual DOM. This
 *   function expects a vector path and a key that addresses the component.
 */
dumdom.dom.el = (function dumdom$dom$el(var_args){
var args__5732__auto__ = [];
var len__5726__auto___48952 = arguments.length;
var i__5727__auto___48953 = (0);
while(true){
if((i__5727__auto___48953 < len__5726__auto___48952)){
args__5732__auto__.push((arguments[i__5727__auto___48953]));

var G__48954 = (i__5727__auto___48953 + (1));
i__5727__auto___48953 = G__48954;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return dumdom.dom.el.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(dumdom.dom.el.cljs$core$IFn$_invoke$arity$variadic = (function (type,attrs,children){
var el_fn = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(dumdom.element.create,type,attrs,dumdom.element.flatten_seqs(children));
(el_fn.dumdom = true);

return el_fn;
}));

(dumdom.dom.el.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dumdom.dom.el.cljs$lang$applyTo = (function (seq47949){
var G__47950 = cljs.core.first(seq47949);
var seq47949__$1 = cljs.core.next(seq47949);
var G__47952 = cljs.core.first(seq47949__$1);
var seq47949__$2 = cljs.core.next(seq47949__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47950,G__47952,seq47949__$2);
}));

dumdom.dom.a = (function dumdom$dom$a(var_args){
var args__5732__auto__ = [];
var len__5726__auto___48955 = arguments.length;
var i__5727__auto___48956 = (0);
while(true){
if((i__5727__auto___48956 < len__5726__auto___48955)){
args__5732__auto__.push((arguments[i__5727__auto___48956]));

var G__48957 = (i__5727__auto___48956 + (1));
i__5727__auto___48956 = G__48957;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"a",args__47922__auto__);
}));

(dumdom.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.a.cljs$lang$applyTo = (function (seq47956){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47956));
}));


dumdom.dom.abbr = (function dumdom$dom$abbr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___48958 = arguments.length;
var i__5727__auto___48959 = (0);
while(true){
if((i__5727__auto___48959 < len__5726__auto___48958)){
args__5732__auto__.push((arguments[i__5727__auto___48959]));

var G__48960 = (i__5727__auto___48959 + (1));
i__5727__auto___48959 = G__48960;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"abbr",args__47922__auto__);
}));

(dumdom.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.abbr.cljs$lang$applyTo = (function (seq47968){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47968));
}));


dumdom.dom.address = (function dumdom$dom$address(var_args){
var args__5732__auto__ = [];
var len__5726__auto___48961 = arguments.length;
var i__5727__auto___48962 = (0);
while(true){
if((i__5727__auto___48962 < len__5726__auto___48961)){
args__5732__auto__.push((arguments[i__5727__auto___48962]));

var G__48963 = (i__5727__auto___48962 + (1));
i__5727__auto___48962 = G__48963;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"address",args__47922__auto__);
}));

(dumdom.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.address.cljs$lang$applyTo = (function (seq47974){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47974));
}));


dumdom.dom.area = (function dumdom$dom$area(var_args){
var args__5732__auto__ = [];
var len__5726__auto___48964 = arguments.length;
var i__5727__auto___48965 = (0);
while(true){
if((i__5727__auto___48965 < len__5726__auto___48964)){
args__5732__auto__.push((arguments[i__5727__auto___48965]));

var G__48966 = (i__5727__auto___48965 + (1));
i__5727__auto___48965 = G__48966;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"area",args__47922__auto__);
}));

(dumdom.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.area.cljs$lang$applyTo = (function (seq47979){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47979));
}));


dumdom.dom.article = (function dumdom$dom$article(var_args){
var args__5732__auto__ = [];
var len__5726__auto___48967 = arguments.length;
var i__5727__auto___48968 = (0);
while(true){
if((i__5727__auto___48968 < len__5726__auto___48967)){
args__5732__auto__.push((arguments[i__5727__auto___48968]));

var G__48969 = (i__5727__auto___48968 + (1));
i__5727__auto___48968 = G__48969;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"article",args__47922__auto__);
}));

(dumdom.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.article.cljs$lang$applyTo = (function (seq47984){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47984));
}));


dumdom.dom.aside = (function dumdom$dom$aside(var_args){
var args__5732__auto__ = [];
var len__5726__auto___48970 = arguments.length;
var i__5727__auto___48971 = (0);
while(true){
if((i__5727__auto___48971 < len__5726__auto___48970)){
args__5732__auto__.push((arguments[i__5727__auto___48971]));

var G__48972 = (i__5727__auto___48971 + (1));
i__5727__auto___48971 = G__48972;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"aside",args__47922__auto__);
}));

(dumdom.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.aside.cljs$lang$applyTo = (function (seq47989){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47989));
}));


dumdom.dom.audio = (function dumdom$dom$audio(var_args){
var args__5732__auto__ = [];
var len__5726__auto___48973 = arguments.length;
var i__5727__auto___48974 = (0);
while(true){
if((i__5727__auto___48974 < len__5726__auto___48973)){
args__5732__auto__.push((arguments[i__5727__auto___48974]));

var G__48975 = (i__5727__auto___48974 + (1));
i__5727__auto___48974 = G__48975;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"audio",args__47922__auto__);
}));

(dumdom.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.audio.cljs$lang$applyTo = (function (seq47990){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47990));
}));


dumdom.dom.b = (function dumdom$dom$b(var_args){
var args__5732__auto__ = [];
var len__5726__auto___48976 = arguments.length;
var i__5727__auto___48977 = (0);
while(true){
if((i__5727__auto___48977 < len__5726__auto___48976)){
args__5732__auto__.push((arguments[i__5727__auto___48977]));

var G__48978 = (i__5727__auto___48977 + (1));
i__5727__auto___48977 = G__48978;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"b",args__47922__auto__);
}));

(dumdom.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.b.cljs$lang$applyTo = (function (seq47991){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47991));
}));


dumdom.dom.base = (function dumdom$dom$base(var_args){
var args__5732__auto__ = [];
var len__5726__auto___48979 = arguments.length;
var i__5727__auto___48980 = (0);
while(true){
if((i__5727__auto___48980 < len__5726__auto___48979)){
args__5732__auto__.push((arguments[i__5727__auto___48980]));

var G__48981 = (i__5727__auto___48980 + (1));
i__5727__auto___48980 = G__48981;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"base",args__47922__auto__);
}));

(dumdom.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.base.cljs$lang$applyTo = (function (seq47992){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47992));
}));


dumdom.dom.bdi = (function dumdom$dom$bdi(var_args){
var args__5732__auto__ = [];
var len__5726__auto___48982 = arguments.length;
var i__5727__auto___48983 = (0);
while(true){
if((i__5727__auto___48983 < len__5726__auto___48982)){
args__5732__auto__.push((arguments[i__5727__auto___48983]));

var G__48984 = (i__5727__auto___48983 + (1));
i__5727__auto___48983 = G__48984;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"bdi",args__47922__auto__);
}));

(dumdom.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.bdi.cljs$lang$applyTo = (function (seq47997){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47997));
}));


dumdom.dom.bdo = (function dumdom$dom$bdo(var_args){
var args__5732__auto__ = [];
var len__5726__auto___48985 = arguments.length;
var i__5727__auto___48986 = (0);
while(true){
if((i__5727__auto___48986 < len__5726__auto___48985)){
args__5732__auto__.push((arguments[i__5727__auto___48986]));

var G__48987 = (i__5727__auto___48986 + (1));
i__5727__auto___48986 = G__48987;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"bdo",args__47922__auto__);
}));

(dumdom.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.bdo.cljs$lang$applyTo = (function (seq48001){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48001));
}));


dumdom.dom.big = (function dumdom$dom$big(var_args){
var args__5732__auto__ = [];
var len__5726__auto___48988 = arguments.length;
var i__5727__auto___48989 = (0);
while(true){
if((i__5727__auto___48989 < len__5726__auto___48988)){
args__5732__auto__.push((arguments[i__5727__auto___48989]));

var G__48990 = (i__5727__auto___48989 + (1));
i__5727__auto___48989 = G__48990;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"big",args__47922__auto__);
}));

(dumdom.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.big.cljs$lang$applyTo = (function (seq48002){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48002));
}));


dumdom.dom.blockquote = (function dumdom$dom$blockquote(var_args){
var args__5732__auto__ = [];
var len__5726__auto___48991 = arguments.length;
var i__5727__auto___48992 = (0);
while(true){
if((i__5727__auto___48992 < len__5726__auto___48991)){
args__5732__auto__.push((arguments[i__5727__auto___48992]));

var G__48993 = (i__5727__auto___48992 + (1));
i__5727__auto___48992 = G__48993;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"blockquote",args__47922__auto__);
}));

(dumdom.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.blockquote.cljs$lang$applyTo = (function (seq48003){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48003));
}));


dumdom.dom.body = (function dumdom$dom$body(var_args){
var args__5732__auto__ = [];
var len__5726__auto___48994 = arguments.length;
var i__5727__auto___48995 = (0);
while(true){
if((i__5727__auto___48995 < len__5726__auto___48994)){
args__5732__auto__.push((arguments[i__5727__auto___48995]));

var G__48996 = (i__5727__auto___48995 + (1));
i__5727__auto___48995 = G__48996;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"body",args__47922__auto__);
}));

(dumdom.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.body.cljs$lang$applyTo = (function (seq48005){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48005));
}));


dumdom.dom.br = (function dumdom$dom$br(var_args){
var args__5732__auto__ = [];
var len__5726__auto___48997 = arguments.length;
var i__5727__auto___48998 = (0);
while(true){
if((i__5727__auto___48998 < len__5726__auto___48997)){
args__5732__auto__.push((arguments[i__5727__auto___48998]));

var G__48999 = (i__5727__auto___48998 + (1));
i__5727__auto___48998 = G__48999;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"br",args__47922__auto__);
}));

(dumdom.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.br.cljs$lang$applyTo = (function (seq48007){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48007));
}));


dumdom.dom.button = (function dumdom$dom$button(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49000 = arguments.length;
var i__5727__auto___49001 = (0);
while(true){
if((i__5727__auto___49001 < len__5726__auto___49000)){
args__5732__auto__.push((arguments[i__5727__auto___49001]));

var G__49002 = (i__5727__auto___49001 + (1));
i__5727__auto___49001 = G__49002;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"button",args__47922__auto__);
}));

(dumdom.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.button.cljs$lang$applyTo = (function (seq48010){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48010));
}));


dumdom.dom.canvas = (function dumdom$dom$canvas(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49003 = arguments.length;
var i__5727__auto___49004 = (0);
while(true){
if((i__5727__auto___49004 < len__5726__auto___49003)){
args__5732__auto__.push((arguments[i__5727__auto___49004]));

var G__49005 = (i__5727__auto___49004 + (1));
i__5727__auto___49004 = G__49005;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"canvas",args__47922__auto__);
}));

(dumdom.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.canvas.cljs$lang$applyTo = (function (seq48032){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48032));
}));


dumdom.dom.caption = (function dumdom$dom$caption(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49008 = arguments.length;
var i__5727__auto___49009 = (0);
while(true){
if((i__5727__auto___49009 < len__5726__auto___49008)){
args__5732__auto__.push((arguments[i__5727__auto___49009]));

var G__49010 = (i__5727__auto___49009 + (1));
i__5727__auto___49009 = G__49010;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"caption",args__47922__auto__);
}));

(dumdom.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.caption.cljs$lang$applyTo = (function (seq48047){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48047));
}));


dumdom.dom.cite = (function dumdom$dom$cite(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49011 = arguments.length;
var i__5727__auto___49012 = (0);
while(true){
if((i__5727__auto___49012 < len__5726__auto___49011)){
args__5732__auto__.push((arguments[i__5727__auto___49012]));

var G__49013 = (i__5727__auto___49012 + (1));
i__5727__auto___49012 = G__49013;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"cite",args__47922__auto__);
}));

(dumdom.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.cite.cljs$lang$applyTo = (function (seq48051){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48051));
}));


dumdom.dom.code = (function dumdom$dom$code(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49014 = arguments.length;
var i__5727__auto___49015 = (0);
while(true){
if((i__5727__auto___49015 < len__5726__auto___49014)){
args__5732__auto__.push((arguments[i__5727__auto___49015]));

var G__49016 = (i__5727__auto___49015 + (1));
i__5727__auto___49015 = G__49016;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"code",args__47922__auto__);
}));

(dumdom.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.code.cljs$lang$applyTo = (function (seq48063){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48063));
}));


dumdom.dom.col = (function dumdom$dom$col(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49017 = arguments.length;
var i__5727__auto___49018 = (0);
while(true){
if((i__5727__auto___49018 < len__5726__auto___49017)){
args__5732__auto__.push((arguments[i__5727__auto___49018]));

var G__49019 = (i__5727__auto___49018 + (1));
i__5727__auto___49018 = G__49019;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"col",args__47922__auto__);
}));

(dumdom.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.col.cljs$lang$applyTo = (function (seq48068){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48068));
}));


dumdom.dom.colgroup = (function dumdom$dom$colgroup(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49021 = arguments.length;
var i__5727__auto___49022 = (0);
while(true){
if((i__5727__auto___49022 < len__5726__auto___49021)){
args__5732__auto__.push((arguments[i__5727__auto___49022]));

var G__49023 = (i__5727__auto___49022 + (1));
i__5727__auto___49022 = G__49023;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"colgroup",args__47922__auto__);
}));

(dumdom.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.colgroup.cljs$lang$applyTo = (function (seq48084){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48084));
}));


dumdom.dom.data = (function dumdom$dom$data(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49025 = arguments.length;
var i__5727__auto___49026 = (0);
while(true){
if((i__5727__auto___49026 < len__5726__auto___49025)){
args__5732__auto__.push((arguments[i__5727__auto___49026]));

var G__49027 = (i__5727__auto___49026 + (1));
i__5727__auto___49026 = G__49027;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"data",args__47922__auto__);
}));

(dumdom.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.data.cljs$lang$applyTo = (function (seq48107){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48107));
}));


dumdom.dom.datalist = (function dumdom$dom$datalist(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49028 = arguments.length;
var i__5727__auto___49029 = (0);
while(true){
if((i__5727__auto___49029 < len__5726__auto___49028)){
args__5732__auto__.push((arguments[i__5727__auto___49029]));

var G__49031 = (i__5727__auto___49029 + (1));
i__5727__auto___49029 = G__49031;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"datalist",args__47922__auto__);
}));

(dumdom.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.datalist.cljs$lang$applyTo = (function (seq48126){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48126));
}));


dumdom.dom.dd = (function dumdom$dom$dd(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49032 = arguments.length;
var i__5727__auto___49033 = (0);
while(true){
if((i__5727__auto___49033 < len__5726__auto___49032)){
args__5732__auto__.push((arguments[i__5727__auto___49033]));

var G__49034 = (i__5727__auto___49033 + (1));
i__5727__auto___49033 = G__49034;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"dd",args__47922__auto__);
}));

(dumdom.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.dd.cljs$lang$applyTo = (function (seq48130){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48130));
}));


dumdom.dom.del = (function dumdom$dom$del(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49036 = arguments.length;
var i__5727__auto___49037 = (0);
while(true){
if((i__5727__auto___49037 < len__5726__auto___49036)){
args__5732__auto__.push((arguments[i__5727__auto___49037]));

var G__49038 = (i__5727__auto___49037 + (1));
i__5727__auto___49037 = G__49038;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"del",args__47922__auto__);
}));

(dumdom.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.del.cljs$lang$applyTo = (function (seq48146){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48146));
}));


dumdom.dom.details = (function dumdom$dom$details(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49039 = arguments.length;
var i__5727__auto___49040 = (0);
while(true){
if((i__5727__auto___49040 < len__5726__auto___49039)){
args__5732__auto__.push((arguments[i__5727__auto___49040]));

var G__49041 = (i__5727__auto___49040 + (1));
i__5727__auto___49040 = G__49041;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"details",args__47922__auto__);
}));

(dumdom.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.details.cljs$lang$applyTo = (function (seq48154){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48154));
}));


dumdom.dom.dfn = (function dumdom$dom$dfn(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49042 = arguments.length;
var i__5727__auto___49043 = (0);
while(true){
if((i__5727__auto___49043 < len__5726__auto___49042)){
args__5732__auto__.push((arguments[i__5727__auto___49043]));

var G__49044 = (i__5727__auto___49043 + (1));
i__5727__auto___49043 = G__49044;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"dfn",args__47922__auto__);
}));

(dumdom.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.dfn.cljs$lang$applyTo = (function (seq48160){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48160));
}));


dumdom.dom.div = (function dumdom$dom$div(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49045 = arguments.length;
var i__5727__auto___49046 = (0);
while(true){
if((i__5727__auto___49046 < len__5726__auto___49045)){
args__5732__auto__.push((arguments[i__5727__auto___49046]));

var G__49047 = (i__5727__auto___49046 + (1));
i__5727__auto___49046 = G__49047;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"div",args__47922__auto__);
}));

(dumdom.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.div.cljs$lang$applyTo = (function (seq48172){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48172));
}));


dumdom.dom.dl = (function dumdom$dom$dl(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49048 = arguments.length;
var i__5727__auto___49049 = (0);
while(true){
if((i__5727__auto___49049 < len__5726__auto___49048)){
args__5732__auto__.push((arguments[i__5727__auto___49049]));

var G__49050 = (i__5727__auto___49049 + (1));
i__5727__auto___49049 = G__49050;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"dl",args__47922__auto__);
}));

(dumdom.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.dl.cljs$lang$applyTo = (function (seq48175){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48175));
}));


dumdom.dom.dt = (function dumdom$dom$dt(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49051 = arguments.length;
var i__5727__auto___49052 = (0);
while(true){
if((i__5727__auto___49052 < len__5726__auto___49051)){
args__5732__auto__.push((arguments[i__5727__auto___49052]));

var G__49053 = (i__5727__auto___49052 + (1));
i__5727__auto___49052 = G__49053;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"dt",args__47922__auto__);
}));

(dumdom.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.dt.cljs$lang$applyTo = (function (seq48179){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48179));
}));


dumdom.dom.em = (function dumdom$dom$em(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49054 = arguments.length;
var i__5727__auto___49055 = (0);
while(true){
if((i__5727__auto___49055 < len__5726__auto___49054)){
args__5732__auto__.push((arguments[i__5727__auto___49055]));

var G__49056 = (i__5727__auto___49055 + (1));
i__5727__auto___49055 = G__49056;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"em",args__47922__auto__);
}));

(dumdom.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.em.cljs$lang$applyTo = (function (seq48181){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48181));
}));


dumdom.dom.embed = (function dumdom$dom$embed(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49057 = arguments.length;
var i__5727__auto___49058 = (0);
while(true){
if((i__5727__auto___49058 < len__5726__auto___49057)){
args__5732__auto__.push((arguments[i__5727__auto___49058]));

var G__49059 = (i__5727__auto___49058 + (1));
i__5727__auto___49058 = G__49059;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"embed",args__47922__auto__);
}));

(dumdom.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.embed.cljs$lang$applyTo = (function (seq48191){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48191));
}));


dumdom.dom.fieldset = (function dumdom$dom$fieldset(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49060 = arguments.length;
var i__5727__auto___49061 = (0);
while(true){
if((i__5727__auto___49061 < len__5726__auto___49060)){
args__5732__auto__.push((arguments[i__5727__auto___49061]));

var G__49063 = (i__5727__auto___49061 + (1));
i__5727__auto___49061 = G__49063;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"fieldset",args__47922__auto__);
}));

(dumdom.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.fieldset.cljs$lang$applyTo = (function (seq48195){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48195));
}));


dumdom.dom.figcaption = (function dumdom$dom$figcaption(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49065 = arguments.length;
var i__5727__auto___49066 = (0);
while(true){
if((i__5727__auto___49066 < len__5726__auto___49065)){
args__5732__auto__.push((arguments[i__5727__auto___49066]));

var G__49067 = (i__5727__auto___49066 + (1));
i__5727__auto___49066 = G__49067;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"figcaption",args__47922__auto__);
}));

(dumdom.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.figcaption.cljs$lang$applyTo = (function (seq48199){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48199));
}));


dumdom.dom.figure = (function dumdom$dom$figure(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49070 = arguments.length;
var i__5727__auto___49072 = (0);
while(true){
if((i__5727__auto___49072 < len__5726__auto___49070)){
args__5732__auto__.push((arguments[i__5727__auto___49072]));

var G__49073 = (i__5727__auto___49072 + (1));
i__5727__auto___49072 = G__49073;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"figure",args__47922__auto__);
}));

(dumdom.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.figure.cljs$lang$applyTo = (function (seq48204){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48204));
}));


dumdom.dom.footer = (function dumdom$dom$footer(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49075 = arguments.length;
var i__5727__auto___49076 = (0);
while(true){
if((i__5727__auto___49076 < len__5726__auto___49075)){
args__5732__auto__.push((arguments[i__5727__auto___49076]));

var G__49077 = (i__5727__auto___49076 + (1));
i__5727__auto___49076 = G__49077;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"footer",args__47922__auto__);
}));

(dumdom.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.footer.cljs$lang$applyTo = (function (seq48218){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48218));
}));


dumdom.dom.form = (function dumdom$dom$form(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49078 = arguments.length;
var i__5727__auto___49079 = (0);
while(true){
if((i__5727__auto___49079 < len__5726__auto___49078)){
args__5732__auto__.push((arguments[i__5727__auto___49079]));

var G__49080 = (i__5727__auto___49079 + (1));
i__5727__auto___49079 = G__49080;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"form",args__47922__auto__);
}));

(dumdom.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.form.cljs$lang$applyTo = (function (seq48230){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48230));
}));


dumdom.dom.h1 = (function dumdom$dom$h1(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49081 = arguments.length;
var i__5727__auto___49082 = (0);
while(true){
if((i__5727__auto___49082 < len__5726__auto___49081)){
args__5732__auto__.push((arguments[i__5727__auto___49082]));

var G__49083 = (i__5727__auto___49082 + (1));
i__5727__auto___49082 = G__49083;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"h1",args__47922__auto__);
}));

(dumdom.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h1.cljs$lang$applyTo = (function (seq48242){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48242));
}));


dumdom.dom.h2 = (function dumdom$dom$h2(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49084 = arguments.length;
var i__5727__auto___49085 = (0);
while(true){
if((i__5727__auto___49085 < len__5726__auto___49084)){
args__5732__auto__.push((arguments[i__5727__auto___49085]));

var G__49086 = (i__5727__auto___49085 + (1));
i__5727__auto___49085 = G__49086;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"h2",args__47922__auto__);
}));

(dumdom.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h2.cljs$lang$applyTo = (function (seq48245){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48245));
}));


dumdom.dom.h3 = (function dumdom$dom$h3(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49087 = arguments.length;
var i__5727__auto___49088 = (0);
while(true){
if((i__5727__auto___49088 < len__5726__auto___49087)){
args__5732__auto__.push((arguments[i__5727__auto___49088]));

var G__49089 = (i__5727__auto___49088 + (1));
i__5727__auto___49088 = G__49089;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"h3",args__47922__auto__);
}));

(dumdom.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h3.cljs$lang$applyTo = (function (seq48247){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48247));
}));


dumdom.dom.h4 = (function dumdom$dom$h4(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49092 = arguments.length;
var i__5727__auto___49093 = (0);
while(true){
if((i__5727__auto___49093 < len__5726__auto___49092)){
args__5732__auto__.push((arguments[i__5727__auto___49093]));

var G__49094 = (i__5727__auto___49093 + (1));
i__5727__auto___49093 = G__49094;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"h4",args__47922__auto__);
}));

(dumdom.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h4.cljs$lang$applyTo = (function (seq48255){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48255));
}));


dumdom.dom.h5 = (function dumdom$dom$h5(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49098 = arguments.length;
var i__5727__auto___49099 = (0);
while(true){
if((i__5727__auto___49099 < len__5726__auto___49098)){
args__5732__auto__.push((arguments[i__5727__auto___49099]));

var G__49100 = (i__5727__auto___49099 + (1));
i__5727__auto___49099 = G__49100;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"h5",args__47922__auto__);
}));

(dumdom.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h5.cljs$lang$applyTo = (function (seq48261){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48261));
}));


dumdom.dom.h6 = (function dumdom$dom$h6(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49102 = arguments.length;
var i__5727__auto___49103 = (0);
while(true){
if((i__5727__auto___49103 < len__5726__auto___49102)){
args__5732__auto__.push((arguments[i__5727__auto___49103]));

var G__49104 = (i__5727__auto___49103 + (1));
i__5727__auto___49103 = G__49104;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"h6",args__47922__auto__);
}));

(dumdom.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h6.cljs$lang$applyTo = (function (seq48264){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48264));
}));


dumdom.dom.head = (function dumdom$dom$head(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49105 = arguments.length;
var i__5727__auto___49106 = (0);
while(true){
if((i__5727__auto___49106 < len__5726__auto___49105)){
args__5732__auto__.push((arguments[i__5727__auto___49106]));

var G__49107 = (i__5727__auto___49106 + (1));
i__5727__auto___49106 = G__49107;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"head",args__47922__auto__);
}));

(dumdom.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.head.cljs$lang$applyTo = (function (seq48294){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48294));
}));


dumdom.dom.header = (function dumdom$dom$header(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49111 = arguments.length;
var i__5727__auto___49112 = (0);
while(true){
if((i__5727__auto___49112 < len__5726__auto___49111)){
args__5732__auto__.push((arguments[i__5727__auto___49112]));

var G__49114 = (i__5727__auto___49112 + (1));
i__5727__auto___49112 = G__49114;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"header",args__47922__auto__);
}));

(dumdom.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.header.cljs$lang$applyTo = (function (seq48312){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48312));
}));


dumdom.dom.hr = (function dumdom$dom$hr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49115 = arguments.length;
var i__5727__auto___49116 = (0);
while(true){
if((i__5727__auto___49116 < len__5726__auto___49115)){
args__5732__auto__.push((arguments[i__5727__auto___49116]));

var G__49117 = (i__5727__auto___49116 + (1));
i__5727__auto___49116 = G__49117;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"hr",args__47922__auto__);
}));

(dumdom.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.hr.cljs$lang$applyTo = (function (seq48348){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48348));
}));


dumdom.dom.html = (function dumdom$dom$html(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49118 = arguments.length;
var i__5727__auto___49119 = (0);
while(true){
if((i__5727__auto___49119 < len__5726__auto___49118)){
args__5732__auto__.push((arguments[i__5727__auto___49119]));

var G__49120 = (i__5727__auto___49119 + (1));
i__5727__auto___49119 = G__49120;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"html",args__47922__auto__);
}));

(dumdom.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.html.cljs$lang$applyTo = (function (seq48369){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48369));
}));


dumdom.dom.i = (function dumdom$dom$i(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49123 = arguments.length;
var i__5727__auto___49125 = (0);
while(true){
if((i__5727__auto___49125 < len__5726__auto___49123)){
args__5732__auto__.push((arguments[i__5727__auto___49125]));

var G__49127 = (i__5727__auto___49125 + (1));
i__5727__auto___49125 = G__49127;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"i",args__47922__auto__);
}));

(dumdom.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.i.cljs$lang$applyTo = (function (seq48382){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48382));
}));


dumdom.dom.iframe = (function dumdom$dom$iframe(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49128 = arguments.length;
var i__5727__auto___49129 = (0);
while(true){
if((i__5727__auto___49129 < len__5726__auto___49128)){
args__5732__auto__.push((arguments[i__5727__auto___49129]));

var G__49130 = (i__5727__auto___49129 + (1));
i__5727__auto___49129 = G__49130;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"iframe",args__47922__auto__);
}));

(dumdom.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.iframe.cljs$lang$applyTo = (function (seq48394){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48394));
}));


dumdom.dom.img = (function dumdom$dom$img(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49132 = arguments.length;
var i__5727__auto___49133 = (0);
while(true){
if((i__5727__auto___49133 < len__5726__auto___49132)){
args__5732__auto__.push((arguments[i__5727__auto___49133]));

var G__49134 = (i__5727__auto___49133 + (1));
i__5727__auto___49133 = G__49134;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"img",args__47922__auto__);
}));

(dumdom.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.img.cljs$lang$applyTo = (function (seq48395){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48395));
}));


dumdom.dom.input = (function dumdom$dom$input(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49135 = arguments.length;
var i__5727__auto___49136 = (0);
while(true){
if((i__5727__auto___49136 < len__5726__auto___49135)){
args__5732__auto__.push((arguments[i__5727__auto___49136]));

var G__49140 = (i__5727__auto___49136 + (1));
i__5727__auto___49136 = G__49140;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"input",args__47922__auto__);
}));

(dumdom.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.input.cljs$lang$applyTo = (function (seq48408){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48408));
}));


dumdom.dom.ins = (function dumdom$dom$ins(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49142 = arguments.length;
var i__5727__auto___49143 = (0);
while(true){
if((i__5727__auto___49143 < len__5726__auto___49142)){
args__5732__auto__.push((arguments[i__5727__auto___49143]));

var G__49144 = (i__5727__auto___49143 + (1));
i__5727__auto___49143 = G__49144;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"ins",args__47922__auto__);
}));

(dumdom.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.ins.cljs$lang$applyTo = (function (seq48417){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48417));
}));


dumdom.dom.kbd = (function dumdom$dom$kbd(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49146 = arguments.length;
var i__5727__auto___49147 = (0);
while(true){
if((i__5727__auto___49147 < len__5726__auto___49146)){
args__5732__auto__.push((arguments[i__5727__auto___49147]));

var G__49148 = (i__5727__auto___49147 + (1));
i__5727__auto___49147 = G__49148;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"kbd",args__47922__auto__);
}));

(dumdom.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.kbd.cljs$lang$applyTo = (function (seq48426){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48426));
}));


dumdom.dom.keygen = (function dumdom$dom$keygen(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49151 = arguments.length;
var i__5727__auto___49152 = (0);
while(true){
if((i__5727__auto___49152 < len__5726__auto___49151)){
args__5732__auto__.push((arguments[i__5727__auto___49152]));

var G__49153 = (i__5727__auto___49152 + (1));
i__5727__auto___49152 = G__49153;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"keygen",args__47922__auto__);
}));

(dumdom.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.keygen.cljs$lang$applyTo = (function (seq48448){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48448));
}));


dumdom.dom.label = (function dumdom$dom$label(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49154 = arguments.length;
var i__5727__auto___49155 = (0);
while(true){
if((i__5727__auto___49155 < len__5726__auto___49154)){
args__5732__auto__.push((arguments[i__5727__auto___49155]));

var G__49156 = (i__5727__auto___49155 + (1));
i__5727__auto___49155 = G__49156;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"label",args__47922__auto__);
}));

(dumdom.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.label.cljs$lang$applyTo = (function (seq48464){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48464));
}));


dumdom.dom.legend = (function dumdom$dom$legend(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49157 = arguments.length;
var i__5727__auto___49158 = (0);
while(true){
if((i__5727__auto___49158 < len__5726__auto___49157)){
args__5732__auto__.push((arguments[i__5727__auto___49158]));

var G__49159 = (i__5727__auto___49158 + (1));
i__5727__auto___49158 = G__49159;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"legend",args__47922__auto__);
}));

(dumdom.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.legend.cljs$lang$applyTo = (function (seq48505){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48505));
}));


dumdom.dom.li = (function dumdom$dom$li(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49166 = arguments.length;
var i__5727__auto___49167 = (0);
while(true){
if((i__5727__auto___49167 < len__5726__auto___49166)){
args__5732__auto__.push((arguments[i__5727__auto___49167]));

var G__49169 = (i__5727__auto___49167 + (1));
i__5727__auto___49167 = G__49169;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"li",args__47922__auto__);
}));

(dumdom.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.li.cljs$lang$applyTo = (function (seq48538){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48538));
}));


dumdom.dom.link = (function dumdom$dom$link(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49170 = arguments.length;
var i__5727__auto___49171 = (0);
while(true){
if((i__5727__auto___49171 < len__5726__auto___49170)){
args__5732__auto__.push((arguments[i__5727__auto___49171]));

var G__49172 = (i__5727__auto___49171 + (1));
i__5727__auto___49171 = G__49172;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"link",args__47922__auto__);
}));

(dumdom.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.link.cljs$lang$applyTo = (function (seq48575){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48575));
}));


dumdom.dom.main = (function dumdom$dom$main(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49173 = arguments.length;
var i__5727__auto___49174 = (0);
while(true){
if((i__5727__auto___49174 < len__5726__auto___49173)){
args__5732__auto__.push((arguments[i__5727__auto___49174]));

var G__49175 = (i__5727__auto___49174 + (1));
i__5727__auto___49174 = G__49175;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"main",args__47922__auto__);
}));

(dumdom.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.main.cljs$lang$applyTo = (function (seq48703){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48703));
}));


dumdom.dom.map = (function dumdom$dom$map(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49181 = arguments.length;
var i__5727__auto___49182 = (0);
while(true){
if((i__5727__auto___49182 < len__5726__auto___49181)){
args__5732__auto__.push((arguments[i__5727__auto___49182]));

var G__49183 = (i__5727__auto___49182 + (1));
i__5727__auto___49182 = G__49183;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"map",args__47922__auto__);
}));

(dumdom.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.map.cljs$lang$applyTo = (function (seq48743){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48743));
}));


dumdom.dom.mark = (function dumdom$dom$mark(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49184 = arguments.length;
var i__5727__auto___49185 = (0);
while(true){
if((i__5727__auto___49185 < len__5726__auto___49184)){
args__5732__auto__.push((arguments[i__5727__auto___49185]));

var G__49187 = (i__5727__auto___49185 + (1));
i__5727__auto___49185 = G__49187;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"mark",args__47922__auto__);
}));

(dumdom.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.mark.cljs$lang$applyTo = (function (seq48746){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48746));
}));


dumdom.dom.menu = (function dumdom$dom$menu(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49188 = arguments.length;
var i__5727__auto___49189 = (0);
while(true){
if((i__5727__auto___49189 < len__5726__auto___49188)){
args__5732__auto__.push((arguments[i__5727__auto___49189]));

var G__49190 = (i__5727__auto___49189 + (1));
i__5727__auto___49189 = G__49190;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"menu",args__47922__auto__);
}));

(dumdom.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.menu.cljs$lang$applyTo = (function (seq48749){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48749));
}));


dumdom.dom.menuitem = (function dumdom$dom$menuitem(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49193 = arguments.length;
var i__5727__auto___49194 = (0);
while(true){
if((i__5727__auto___49194 < len__5726__auto___49193)){
args__5732__auto__.push((arguments[i__5727__auto___49194]));

var G__49196 = (i__5727__auto___49194 + (1));
i__5727__auto___49194 = G__49196;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"menuitem",args__47922__auto__);
}));

(dumdom.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.menuitem.cljs$lang$applyTo = (function (seq48750){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48750));
}));


dumdom.dom.meta = (function dumdom$dom$meta(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49202 = arguments.length;
var i__5727__auto___49203 = (0);
while(true){
if((i__5727__auto___49203 < len__5726__auto___49202)){
args__5732__auto__.push((arguments[i__5727__auto___49203]));

var G__49206 = (i__5727__auto___49203 + (1));
i__5727__auto___49203 = G__49206;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"meta",args__47922__auto__);
}));

(dumdom.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.meta.cljs$lang$applyTo = (function (seq48751){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48751));
}));


dumdom.dom.meter = (function dumdom$dom$meter(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49213 = arguments.length;
var i__5727__auto___49214 = (0);
while(true){
if((i__5727__auto___49214 < len__5726__auto___49213)){
args__5732__auto__.push((arguments[i__5727__auto___49214]));

var G__49218 = (i__5727__auto___49214 + (1));
i__5727__auto___49214 = G__49218;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"meter",args__47922__auto__);
}));

(dumdom.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.meter.cljs$lang$applyTo = (function (seq48754){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48754));
}));


dumdom.dom.nav = (function dumdom$dom$nav(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49220 = arguments.length;
var i__5727__auto___49222 = (0);
while(true){
if((i__5727__auto___49222 < len__5726__auto___49220)){
args__5732__auto__.push((arguments[i__5727__auto___49222]));

var G__49223 = (i__5727__auto___49222 + (1));
i__5727__auto___49222 = G__49223;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"nav",args__47922__auto__);
}));

(dumdom.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.nav.cljs$lang$applyTo = (function (seq48755){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48755));
}));


dumdom.dom.noscript = (function dumdom$dom$noscript(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49225 = arguments.length;
var i__5727__auto___49226 = (0);
while(true){
if((i__5727__auto___49226 < len__5726__auto___49225)){
args__5732__auto__.push((arguments[i__5727__auto___49226]));

var G__49229 = (i__5727__auto___49226 + (1));
i__5727__auto___49226 = G__49229;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"noscript",args__47922__auto__);
}));

(dumdom.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.noscript.cljs$lang$applyTo = (function (seq48758){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48758));
}));


dumdom.dom.object = (function dumdom$dom$object(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49235 = arguments.length;
var i__5727__auto___49236 = (0);
while(true){
if((i__5727__auto___49236 < len__5726__auto___49235)){
args__5732__auto__.push((arguments[i__5727__auto___49236]));

var G__49238 = (i__5727__auto___49236 + (1));
i__5727__auto___49236 = G__49238;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"object",args__47922__auto__);
}));

(dumdom.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.object.cljs$lang$applyTo = (function (seq48759){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48759));
}));


dumdom.dom.ol = (function dumdom$dom$ol(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49243 = arguments.length;
var i__5727__auto___49244 = (0);
while(true){
if((i__5727__auto___49244 < len__5726__auto___49243)){
args__5732__auto__.push((arguments[i__5727__auto___49244]));

var G__49245 = (i__5727__auto___49244 + (1));
i__5727__auto___49244 = G__49245;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"ol",args__47922__auto__);
}));

(dumdom.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.ol.cljs$lang$applyTo = (function (seq48763){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48763));
}));


dumdom.dom.optgroup = (function dumdom$dom$optgroup(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49246 = arguments.length;
var i__5727__auto___49247 = (0);
while(true){
if((i__5727__auto___49247 < len__5726__auto___49246)){
args__5732__auto__.push((arguments[i__5727__auto___49247]));

var G__49248 = (i__5727__auto___49247 + (1));
i__5727__auto___49247 = G__49248;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"optgroup",args__47922__auto__);
}));

(dumdom.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.optgroup.cljs$lang$applyTo = (function (seq48777){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48777));
}));


dumdom.dom.option = (function dumdom$dom$option(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49249 = arguments.length;
var i__5727__auto___49250 = (0);
while(true){
if((i__5727__auto___49250 < len__5726__auto___49249)){
args__5732__auto__.push((arguments[i__5727__auto___49250]));

var G__49251 = (i__5727__auto___49250 + (1));
i__5727__auto___49250 = G__49251;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"option",args__47922__auto__);
}));

(dumdom.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.option.cljs$lang$applyTo = (function (seq48792){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48792));
}));


dumdom.dom.output = (function dumdom$dom$output(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49252 = arguments.length;
var i__5727__auto___49253 = (0);
while(true){
if((i__5727__auto___49253 < len__5726__auto___49252)){
args__5732__auto__.push((arguments[i__5727__auto___49253]));

var G__49254 = (i__5727__auto___49253 + (1));
i__5727__auto___49253 = G__49254;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"output",args__47922__auto__);
}));

(dumdom.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.output.cljs$lang$applyTo = (function (seq48798){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48798));
}));


dumdom.dom.p = (function dumdom$dom$p(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49259 = arguments.length;
var i__5727__auto___49260 = (0);
while(true){
if((i__5727__auto___49260 < len__5726__auto___49259)){
args__5732__auto__.push((arguments[i__5727__auto___49260]));

var G__49261 = (i__5727__auto___49260 + (1));
i__5727__auto___49260 = G__49261;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"p",args__47922__auto__);
}));

(dumdom.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.p.cljs$lang$applyTo = (function (seq48801){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48801));
}));


dumdom.dom.param = (function dumdom$dom$param(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49263 = arguments.length;
var i__5727__auto___49264 = (0);
while(true){
if((i__5727__auto___49264 < len__5726__auto___49263)){
args__5732__auto__.push((arguments[i__5727__auto___49264]));

var G__49267 = (i__5727__auto___49264 + (1));
i__5727__auto___49264 = G__49267;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"param",args__47922__auto__);
}));

(dumdom.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.param.cljs$lang$applyTo = (function (seq48802){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48802));
}));


dumdom.dom.pre = (function dumdom$dom$pre(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49269 = arguments.length;
var i__5727__auto___49270 = (0);
while(true){
if((i__5727__auto___49270 < len__5726__auto___49269)){
args__5732__auto__.push((arguments[i__5727__auto___49270]));

var G__49271 = (i__5727__auto___49270 + (1));
i__5727__auto___49270 = G__49271;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"pre",args__47922__auto__);
}));

(dumdom.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.pre.cljs$lang$applyTo = (function (seq48808){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48808));
}));


dumdom.dom.progress = (function dumdom$dom$progress(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49273 = arguments.length;
var i__5727__auto___49274 = (0);
while(true){
if((i__5727__auto___49274 < len__5726__auto___49273)){
args__5732__auto__.push((arguments[i__5727__auto___49274]));

var G__49275 = (i__5727__auto___49274 + (1));
i__5727__auto___49274 = G__49275;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"progress",args__47922__auto__);
}));

(dumdom.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.progress.cljs$lang$applyTo = (function (seq48812){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48812));
}));


dumdom.dom.q = (function dumdom$dom$q(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49283 = arguments.length;
var i__5727__auto___49284 = (0);
while(true){
if((i__5727__auto___49284 < len__5726__auto___49283)){
args__5732__auto__.push((arguments[i__5727__auto___49284]));

var G__49285 = (i__5727__auto___49284 + (1));
i__5727__auto___49284 = G__49285;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"q",args__47922__auto__);
}));

(dumdom.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.q.cljs$lang$applyTo = (function (seq48815){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48815));
}));


dumdom.dom.rp = (function dumdom$dom$rp(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49289 = arguments.length;
var i__5727__auto___49290 = (0);
while(true){
if((i__5727__auto___49290 < len__5726__auto___49289)){
args__5732__auto__.push((arguments[i__5727__auto___49290]));

var G__49291 = (i__5727__auto___49290 + (1));
i__5727__auto___49290 = G__49291;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"rp",args__47922__auto__);
}));

(dumdom.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.rp.cljs$lang$applyTo = (function (seq48821){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48821));
}));


dumdom.dom.rt = (function dumdom$dom$rt(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49292 = arguments.length;
var i__5727__auto___49293 = (0);
while(true){
if((i__5727__auto___49293 < len__5726__auto___49292)){
args__5732__auto__.push((arguments[i__5727__auto___49293]));

var G__49294 = (i__5727__auto___49293 + (1));
i__5727__auto___49293 = G__49294;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"rt",args__47922__auto__);
}));

(dumdom.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.rt.cljs$lang$applyTo = (function (seq48823){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48823));
}));


dumdom.dom.ruby = (function dumdom$dom$ruby(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49301 = arguments.length;
var i__5727__auto___49302 = (0);
while(true){
if((i__5727__auto___49302 < len__5726__auto___49301)){
args__5732__auto__.push((arguments[i__5727__auto___49302]));

var G__49303 = (i__5727__auto___49302 + (1));
i__5727__auto___49302 = G__49303;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"ruby",args__47922__auto__);
}));

(dumdom.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.ruby.cljs$lang$applyTo = (function (seq48824){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48824));
}));


dumdom.dom.s = (function dumdom$dom$s(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49305 = arguments.length;
var i__5727__auto___49306 = (0);
while(true){
if((i__5727__auto___49306 < len__5726__auto___49305)){
args__5732__auto__.push((arguments[i__5727__auto___49306]));

var G__49308 = (i__5727__auto___49306 + (1));
i__5727__auto___49306 = G__49308;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"s",args__47922__auto__);
}));

(dumdom.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.s.cljs$lang$applyTo = (function (seq48828){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48828));
}));


dumdom.dom.samp = (function dumdom$dom$samp(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49310 = arguments.length;
var i__5727__auto___49311 = (0);
while(true){
if((i__5727__auto___49311 < len__5726__auto___49310)){
args__5732__auto__.push((arguments[i__5727__auto___49311]));

var G__49312 = (i__5727__auto___49311 + (1));
i__5727__auto___49311 = G__49312;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"samp",args__47922__auto__);
}));

(dumdom.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.samp.cljs$lang$applyTo = (function (seq48830){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48830));
}));


dumdom.dom.script = (function dumdom$dom$script(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49317 = arguments.length;
var i__5727__auto___49318 = (0);
while(true){
if((i__5727__auto___49318 < len__5726__auto___49317)){
args__5732__auto__.push((arguments[i__5727__auto___49318]));

var G__49319 = (i__5727__auto___49318 + (1));
i__5727__auto___49318 = G__49319;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"script",args__47922__auto__);
}));

(dumdom.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.script.cljs$lang$applyTo = (function (seq48831){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48831));
}));


dumdom.dom.section = (function dumdom$dom$section(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49323 = arguments.length;
var i__5727__auto___49324 = (0);
while(true){
if((i__5727__auto___49324 < len__5726__auto___49323)){
args__5732__auto__.push((arguments[i__5727__auto___49324]));

var G__49328 = (i__5727__auto___49324 + (1));
i__5727__auto___49324 = G__49328;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"section",args__47922__auto__);
}));

(dumdom.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.section.cljs$lang$applyTo = (function (seq48832){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48832));
}));


dumdom.dom.select = (function dumdom$dom$select(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49331 = arguments.length;
var i__5727__auto___49332 = (0);
while(true){
if((i__5727__auto___49332 < len__5726__auto___49331)){
args__5732__auto__.push((arguments[i__5727__auto___49332]));

var G__49333 = (i__5727__auto___49332 + (1));
i__5727__auto___49332 = G__49333;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"select",args__47922__auto__);
}));

(dumdom.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.select.cljs$lang$applyTo = (function (seq48833){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48833));
}));


dumdom.dom.small = (function dumdom$dom$small(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49335 = arguments.length;
var i__5727__auto___49336 = (0);
while(true){
if((i__5727__auto___49336 < len__5726__auto___49335)){
args__5732__auto__.push((arguments[i__5727__auto___49336]));

var G__49338 = (i__5727__auto___49336 + (1));
i__5727__auto___49336 = G__49338;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"small",args__47922__auto__);
}));

(dumdom.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.small.cljs$lang$applyTo = (function (seq48834){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48834));
}));


dumdom.dom.source = (function dumdom$dom$source(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49342 = arguments.length;
var i__5727__auto___49343 = (0);
while(true){
if((i__5727__auto___49343 < len__5726__auto___49342)){
args__5732__auto__.push((arguments[i__5727__auto___49343]));

var G__49344 = (i__5727__auto___49343 + (1));
i__5727__auto___49343 = G__49344;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"source",args__47922__auto__);
}));

(dumdom.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.source.cljs$lang$applyTo = (function (seq48835){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48835));
}));


dumdom.dom.span = (function dumdom$dom$span(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49345 = arguments.length;
var i__5727__auto___49346 = (0);
while(true){
if((i__5727__auto___49346 < len__5726__auto___49345)){
args__5732__auto__.push((arguments[i__5727__auto___49346]));

var G__49347 = (i__5727__auto___49346 + (1));
i__5727__auto___49346 = G__49347;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"span",args__47922__auto__);
}));

(dumdom.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.span.cljs$lang$applyTo = (function (seq48836){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48836));
}));


dumdom.dom.strong = (function dumdom$dom$strong(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49349 = arguments.length;
var i__5727__auto___49350 = (0);
while(true){
if((i__5727__auto___49350 < len__5726__auto___49349)){
args__5732__auto__.push((arguments[i__5727__auto___49350]));

var G__49356 = (i__5727__auto___49350 + (1));
i__5727__auto___49350 = G__49356;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"strong",args__47922__auto__);
}));

(dumdom.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.strong.cljs$lang$applyTo = (function (seq48837){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48837));
}));


dumdom.dom.style = (function dumdom$dom$style(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49357 = arguments.length;
var i__5727__auto___49358 = (0);
while(true){
if((i__5727__auto___49358 < len__5726__auto___49357)){
args__5732__auto__.push((arguments[i__5727__auto___49358]));

var G__49360 = (i__5727__auto___49358 + (1));
i__5727__auto___49358 = G__49360;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"style",args__47922__auto__);
}));

(dumdom.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.style.cljs$lang$applyTo = (function (seq48838){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48838));
}));


dumdom.dom.sub = (function dumdom$dom$sub(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49362 = arguments.length;
var i__5727__auto___49363 = (0);
while(true){
if((i__5727__auto___49363 < len__5726__auto___49362)){
args__5732__auto__.push((arguments[i__5727__auto___49363]));

var G__49368 = (i__5727__auto___49363 + (1));
i__5727__auto___49363 = G__49368;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"sub",args__47922__auto__);
}));

(dumdom.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.sub.cljs$lang$applyTo = (function (seq48839){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48839));
}));


dumdom.dom.summary = (function dumdom$dom$summary(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49371 = arguments.length;
var i__5727__auto___49372 = (0);
while(true){
if((i__5727__auto___49372 < len__5726__auto___49371)){
args__5732__auto__.push((arguments[i__5727__auto___49372]));

var G__49373 = (i__5727__auto___49372 + (1));
i__5727__auto___49372 = G__49373;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"summary",args__47922__auto__);
}));

(dumdom.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.summary.cljs$lang$applyTo = (function (seq48840){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48840));
}));


dumdom.dom.sup = (function dumdom$dom$sup(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49376 = arguments.length;
var i__5727__auto___49377 = (0);
while(true){
if((i__5727__auto___49377 < len__5726__auto___49376)){
args__5732__auto__.push((arguments[i__5727__auto___49377]));

var G__49378 = (i__5727__auto___49377 + (1));
i__5727__auto___49377 = G__49378;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"sup",args__47922__auto__);
}));

(dumdom.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.sup.cljs$lang$applyTo = (function (seq48845){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48845));
}));


dumdom.dom.table = (function dumdom$dom$table(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49383 = arguments.length;
var i__5727__auto___49384 = (0);
while(true){
if((i__5727__auto___49384 < len__5726__auto___49383)){
args__5732__auto__.push((arguments[i__5727__auto___49384]));

var G__49386 = (i__5727__auto___49384 + (1));
i__5727__auto___49384 = G__49386;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"table",args__47922__auto__);
}));

(dumdom.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.table.cljs$lang$applyTo = (function (seq48846){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48846));
}));


dumdom.dom.tbody = (function dumdom$dom$tbody(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49389 = arguments.length;
var i__5727__auto___49390 = (0);
while(true){
if((i__5727__auto___49390 < len__5726__auto___49389)){
args__5732__auto__.push((arguments[i__5727__auto___49390]));

var G__49391 = (i__5727__auto___49390 + (1));
i__5727__auto___49390 = G__49391;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"tbody",args__47922__auto__);
}));

(dumdom.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.tbody.cljs$lang$applyTo = (function (seq48850){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48850));
}));


dumdom.dom.td = (function dumdom$dom$td(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49395 = arguments.length;
var i__5727__auto___49396 = (0);
while(true){
if((i__5727__auto___49396 < len__5726__auto___49395)){
args__5732__auto__.push((arguments[i__5727__auto___49396]));

var G__49397 = (i__5727__auto___49396 + (1));
i__5727__auto___49396 = G__49397;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"td",args__47922__auto__);
}));

(dumdom.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.td.cljs$lang$applyTo = (function (seq48854){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48854));
}));


dumdom.dom.textarea = (function dumdom$dom$textarea(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49398 = arguments.length;
var i__5727__auto___49399 = (0);
while(true){
if((i__5727__auto___49399 < len__5726__auto___49398)){
args__5732__auto__.push((arguments[i__5727__auto___49399]));

var G__49400 = (i__5727__auto___49399 + (1));
i__5727__auto___49399 = G__49400;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"textarea",args__47922__auto__);
}));

(dumdom.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.textarea.cljs$lang$applyTo = (function (seq48855){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48855));
}));


dumdom.dom.tfoot = (function dumdom$dom$tfoot(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49401 = arguments.length;
var i__5727__auto___49402 = (0);
while(true){
if((i__5727__auto___49402 < len__5726__auto___49401)){
args__5732__auto__.push((arguments[i__5727__auto___49402]));

var G__49403 = (i__5727__auto___49402 + (1));
i__5727__auto___49402 = G__49403;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"tfoot",args__47922__auto__);
}));

(dumdom.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.tfoot.cljs$lang$applyTo = (function (seq48863){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48863));
}));


dumdom.dom.th = (function dumdom$dom$th(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49408 = arguments.length;
var i__5727__auto___49409 = (0);
while(true){
if((i__5727__auto___49409 < len__5726__auto___49408)){
args__5732__auto__.push((arguments[i__5727__auto___49409]));

var G__49410 = (i__5727__auto___49409 + (1));
i__5727__auto___49409 = G__49410;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"th",args__47922__auto__);
}));

(dumdom.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.th.cljs$lang$applyTo = (function (seq48871){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48871));
}));


dumdom.dom.thead = (function dumdom$dom$thead(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49411 = arguments.length;
var i__5727__auto___49412 = (0);
while(true){
if((i__5727__auto___49412 < len__5726__auto___49411)){
args__5732__auto__.push((arguments[i__5727__auto___49412]));

var G__49413 = (i__5727__auto___49412 + (1));
i__5727__auto___49412 = G__49413;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"thead",args__47922__auto__);
}));

(dumdom.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.thead.cljs$lang$applyTo = (function (seq48878){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48878));
}));


dumdom.dom.time = (function dumdom$dom$time(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49415 = arguments.length;
var i__5727__auto___49416 = (0);
while(true){
if((i__5727__auto___49416 < len__5726__auto___49415)){
args__5732__auto__.push((arguments[i__5727__auto___49416]));

var G__49417 = (i__5727__auto___49416 + (1));
i__5727__auto___49416 = G__49417;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"time",args__47922__auto__);
}));

(dumdom.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.time.cljs$lang$applyTo = (function (seq48880){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48880));
}));


dumdom.dom.title = (function dumdom$dom$title(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49418 = arguments.length;
var i__5727__auto___49419 = (0);
while(true){
if((i__5727__auto___49419 < len__5726__auto___49418)){
args__5732__auto__.push((arguments[i__5727__auto___49419]));

var G__49420 = (i__5727__auto___49419 + (1));
i__5727__auto___49419 = G__49420;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"title",args__47922__auto__);
}));

(dumdom.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.title.cljs$lang$applyTo = (function (seq48884){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48884));
}));


dumdom.dom.tr = (function dumdom$dom$tr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49429 = arguments.length;
var i__5727__auto___49431 = (0);
while(true){
if((i__5727__auto___49431 < len__5726__auto___49429)){
args__5732__auto__.push((arguments[i__5727__auto___49431]));

var G__49432 = (i__5727__auto___49431 + (1));
i__5727__auto___49431 = G__49432;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"tr",args__47922__auto__);
}));

(dumdom.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.tr.cljs$lang$applyTo = (function (seq48894){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48894));
}));


dumdom.dom.track = (function dumdom$dom$track(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49436 = arguments.length;
var i__5727__auto___49437 = (0);
while(true){
if((i__5727__auto___49437 < len__5726__auto___49436)){
args__5732__auto__.push((arguments[i__5727__auto___49437]));

var G__49438 = (i__5727__auto___49437 + (1));
i__5727__auto___49437 = G__49438;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"track",args__47922__auto__);
}));

(dumdom.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.track.cljs$lang$applyTo = (function (seq48898){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48898));
}));


dumdom.dom.u = (function dumdom$dom$u(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49439 = arguments.length;
var i__5727__auto___49440 = (0);
while(true){
if((i__5727__auto___49440 < len__5726__auto___49439)){
args__5732__auto__.push((arguments[i__5727__auto___49440]));

var G__49441 = (i__5727__auto___49440 + (1));
i__5727__auto___49440 = G__49441;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"u",args__47922__auto__);
}));

(dumdom.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.u.cljs$lang$applyTo = (function (seq48905){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48905));
}));


dumdom.dom.ul = (function dumdom$dom$ul(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49442 = arguments.length;
var i__5727__auto___49443 = (0);
while(true){
if((i__5727__auto___49443 < len__5726__auto___49442)){
args__5732__auto__.push((arguments[i__5727__auto___49443]));

var G__49444 = (i__5727__auto___49443 + (1));
i__5727__auto___49443 = G__49444;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"ul",args__47922__auto__);
}));

(dumdom.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.ul.cljs$lang$applyTo = (function (seq48906){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48906));
}));


dumdom.dom.var$ = (function dumdom$dom$var(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49445 = arguments.length;
var i__5727__auto___49446 = (0);
while(true){
if((i__5727__auto___49446 < len__5726__auto___49445)){
args__5732__auto__.push((arguments[i__5727__auto___49446]));

var G__49447 = (i__5727__auto___49446 + (1));
i__5727__auto___49446 = G__49447;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"var",args__47922__auto__);
}));

(dumdom.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.var$.cljs$lang$applyTo = (function (seq48911){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48911));
}));


dumdom.dom.video = (function dumdom$dom$video(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49450 = arguments.length;
var i__5727__auto___49451 = (0);
while(true){
if((i__5727__auto___49451 < len__5726__auto___49450)){
args__5732__auto__.push((arguments[i__5727__auto___49451]));

var G__49452 = (i__5727__auto___49451 + (1));
i__5727__auto___49451 = G__49452;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"video",args__47922__auto__);
}));

(dumdom.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.video.cljs$lang$applyTo = (function (seq48913){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48913));
}));


dumdom.dom.wbr = (function dumdom$dom$wbr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49456 = arguments.length;
var i__5727__auto___49457 = (0);
while(true){
if((i__5727__auto___49457 < len__5726__auto___49456)){
args__5732__auto__.push((arguments[i__5727__auto___49457]));

var G__49458 = (i__5727__auto___49457 + (1));
i__5727__auto___49457 = G__49458;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"wbr",args__47922__auto__);
}));

(dumdom.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.wbr.cljs$lang$applyTo = (function (seq48914){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48914));
}));


dumdom.dom.circle = (function dumdom$dom$circle(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49459 = arguments.length;
var i__5727__auto___49460 = (0);
while(true){
if((i__5727__auto___49460 < len__5726__auto___49459)){
args__5732__auto__.push((arguments[i__5727__auto___49460]));

var G__49461 = (i__5727__auto___49460 + (1));
i__5727__auto___49460 = G__49461;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"circle",args__47922__auto__);
}));

(dumdom.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.circle.cljs$lang$applyTo = (function (seq48915){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48915));
}));


dumdom.dom.clipPath = (function dumdom$dom$clipPath(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49465 = arguments.length;
var i__5727__auto___49466 = (0);
while(true){
if((i__5727__auto___49466 < len__5726__auto___49465)){
args__5732__auto__.push((arguments[i__5727__auto___49466]));

var G__49467 = (i__5727__auto___49466 + (1));
i__5727__auto___49466 = G__49467;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"clipPath",args__47922__auto__);
}));

(dumdom.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.clipPath.cljs$lang$applyTo = (function (seq48919){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48919));
}));


dumdom.dom.defs = (function dumdom$dom$defs(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49468 = arguments.length;
var i__5727__auto___49470 = (0);
while(true){
if((i__5727__auto___49470 < len__5726__auto___49468)){
args__5732__auto__.push((arguments[i__5727__auto___49470]));

var G__49471 = (i__5727__auto___49470 + (1));
i__5727__auto___49470 = G__49471;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"defs",args__47922__auto__);
}));

(dumdom.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.defs.cljs$lang$applyTo = (function (seq48920){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48920));
}));


dumdom.dom.ellipse = (function dumdom$dom$ellipse(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49474 = arguments.length;
var i__5727__auto___49475 = (0);
while(true){
if((i__5727__auto___49475 < len__5726__auto___49474)){
args__5732__auto__.push((arguments[i__5727__auto___49475]));

var G__49477 = (i__5727__auto___49475 + (1));
i__5727__auto___49475 = G__49477;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"ellipse",args__47922__auto__);
}));

(dumdom.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.ellipse.cljs$lang$applyTo = (function (seq48921){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48921));
}));


dumdom.dom.g = (function dumdom$dom$g(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49481 = arguments.length;
var i__5727__auto___49482 = (0);
while(true){
if((i__5727__auto___49482 < len__5726__auto___49481)){
args__5732__auto__.push((arguments[i__5727__auto___49482]));

var G__49483 = (i__5727__auto___49482 + (1));
i__5727__auto___49482 = G__49483;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"g",args__47922__auto__);
}));

(dumdom.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.g.cljs$lang$applyTo = (function (seq48922){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48922));
}));


dumdom.dom.image = (function dumdom$dom$image(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49486 = arguments.length;
var i__5727__auto___49487 = (0);
while(true){
if((i__5727__auto___49487 < len__5726__auto___49486)){
args__5732__auto__.push((arguments[i__5727__auto___49487]));

var G__49488 = (i__5727__auto___49487 + (1));
i__5727__auto___49487 = G__49488;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"image",args__47922__auto__);
}));

(dumdom.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.image.cljs$lang$applyTo = (function (seq48923){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48923));
}));


dumdom.dom.line = (function dumdom$dom$line(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49490 = arguments.length;
var i__5727__auto___49491 = (0);
while(true){
if((i__5727__auto___49491 < len__5726__auto___49490)){
args__5732__auto__.push((arguments[i__5727__auto___49491]));

var G__49492 = (i__5727__auto___49491 + (1));
i__5727__auto___49491 = G__49492;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"line",args__47922__auto__);
}));

(dumdom.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.line.cljs$lang$applyTo = (function (seq48924){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48924));
}));


dumdom.dom.linearGradient = (function dumdom$dom$linearGradient(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49493 = arguments.length;
var i__5727__auto___49494 = (0);
while(true){
if((i__5727__auto___49494 < len__5726__auto___49493)){
args__5732__auto__.push((arguments[i__5727__auto___49494]));

var G__49499 = (i__5727__auto___49494 + (1));
i__5727__auto___49494 = G__49499;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"linearGradient",args__47922__auto__);
}));

(dumdom.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.linearGradient.cljs$lang$applyTo = (function (seq48925){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48925));
}));


dumdom.dom.mask = (function dumdom$dom$mask(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49503 = arguments.length;
var i__5727__auto___49504 = (0);
while(true){
if((i__5727__auto___49504 < len__5726__auto___49503)){
args__5732__auto__.push((arguments[i__5727__auto___49504]));

var G__49505 = (i__5727__auto___49504 + (1));
i__5727__auto___49504 = G__49505;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"mask",args__47922__auto__);
}));

(dumdom.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.mask.cljs$lang$applyTo = (function (seq48926){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48926));
}));


dumdom.dom.path = (function dumdom$dom$path(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49507 = arguments.length;
var i__5727__auto___49509 = (0);
while(true){
if((i__5727__auto___49509 < len__5726__auto___49507)){
args__5732__auto__.push((arguments[i__5727__auto___49509]));

var G__49513 = (i__5727__auto___49509 + (1));
i__5727__auto___49509 = G__49513;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"path",args__47922__auto__);
}));

(dumdom.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.path.cljs$lang$applyTo = (function (seq48927){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48927));
}));


dumdom.dom.pattern = (function dumdom$dom$pattern(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49515 = arguments.length;
var i__5727__auto___49517 = (0);
while(true){
if((i__5727__auto___49517 < len__5726__auto___49515)){
args__5732__auto__.push((arguments[i__5727__auto___49517]));

var G__49518 = (i__5727__auto___49517 + (1));
i__5727__auto___49517 = G__49518;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"pattern",args__47922__auto__);
}));

(dumdom.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.pattern.cljs$lang$applyTo = (function (seq48928){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48928));
}));


dumdom.dom.polygon = (function dumdom$dom$polygon(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49520 = arguments.length;
var i__5727__auto___49521 = (0);
while(true){
if((i__5727__auto___49521 < len__5726__auto___49520)){
args__5732__auto__.push((arguments[i__5727__auto___49521]));

var G__49523 = (i__5727__auto___49521 + (1));
i__5727__auto___49521 = G__49523;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"polygon",args__47922__auto__);
}));

(dumdom.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.polygon.cljs$lang$applyTo = (function (seq48929){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48929));
}));


dumdom.dom.polyline = (function dumdom$dom$polyline(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49524 = arguments.length;
var i__5727__auto___49525 = (0);
while(true){
if((i__5727__auto___49525 < len__5726__auto___49524)){
args__5732__auto__.push((arguments[i__5727__auto___49525]));

var G__49526 = (i__5727__auto___49525 + (1));
i__5727__auto___49525 = G__49526;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"polyline",args__47922__auto__);
}));

(dumdom.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.polyline.cljs$lang$applyTo = (function (seq48930){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48930));
}));


dumdom.dom.radialGradient = (function dumdom$dom$radialGradient(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49529 = arguments.length;
var i__5727__auto___49531 = (0);
while(true){
if((i__5727__auto___49531 < len__5726__auto___49529)){
args__5732__auto__.push((arguments[i__5727__auto___49531]));

var G__49532 = (i__5727__auto___49531 + (1));
i__5727__auto___49531 = G__49532;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"radialGradient",args__47922__auto__);
}));

(dumdom.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.radialGradient.cljs$lang$applyTo = (function (seq48931){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48931));
}));


dumdom.dom.rect = (function dumdom$dom$rect(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49534 = arguments.length;
var i__5727__auto___49535 = (0);
while(true){
if((i__5727__auto___49535 < len__5726__auto___49534)){
args__5732__auto__.push((arguments[i__5727__auto___49535]));

var G__49536 = (i__5727__auto___49535 + (1));
i__5727__auto___49535 = G__49536;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"rect",args__47922__auto__);
}));

(dumdom.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.rect.cljs$lang$applyTo = (function (seq48932){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48932));
}));


dumdom.dom.stop = (function dumdom$dom$stop(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49537 = arguments.length;
var i__5727__auto___49538 = (0);
while(true){
if((i__5727__auto___49538 < len__5726__auto___49537)){
args__5732__auto__.push((arguments[i__5727__auto___49538]));

var G__49539 = (i__5727__auto___49538 + (1));
i__5727__auto___49538 = G__49539;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"stop",args__47922__auto__);
}));

(dumdom.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.stop.cljs$lang$applyTo = (function (seq48936){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48936));
}));


dumdom.dom.svg = (function dumdom$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49540 = arguments.length;
var i__5727__auto___49541 = (0);
while(true){
if((i__5727__auto___49541 < len__5726__auto___49540)){
args__5732__auto__.push((arguments[i__5727__auto___49541]));

var G__49543 = (i__5727__auto___49541 + (1));
i__5727__auto___49541 = G__49543;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"svg",args__47922__auto__);
}));

(dumdom.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.svg.cljs$lang$applyTo = (function (seq48940){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48940));
}));


dumdom.dom.text = (function dumdom$dom$text(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49547 = arguments.length;
var i__5727__auto___49548 = (0);
while(true){
if((i__5727__auto___49548 < len__5726__auto___49547)){
args__5732__auto__.push((arguments[i__5727__auto___49548]));

var G__49549 = (i__5727__auto___49548 + (1));
i__5727__auto___49548 = G__49549;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"text",args__47922__auto__);
}));

(dumdom.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.text.cljs$lang$applyTo = (function (seq48941){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48941));
}));


dumdom.dom.tspan = (function dumdom$dom$tspan(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49550 = arguments.length;
var i__5727__auto___49552 = (0);
while(true){
if((i__5727__auto___49552 < len__5726__auto___49550)){
args__5732__auto__.push((arguments[i__5727__auto___49552]));

var G__49554 = (i__5727__auto___49552 + (1));
i__5727__auto___49552 = G__49554;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return dumdom.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(dumdom.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args__47922__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"tspan",args__47922__auto__);
}));

(dumdom.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.tspan.cljs$lang$applyTo = (function (seq48942){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48942));
}));


dumdom.dom.defined_tags = cljs.core.PersistentHashMap.fromArrays([dumdom.dom.form,dumdom.dom.audio,dumdom.dom.input,dumdom.dom.menuitem,dumdom.dom.radialGradient,dumdom.dom.base,dumdom.dom.h1,dumdom.dom.embed,dumdom.dom.h3,dumdom.dom.body,dumdom.dom.keygen,dumdom.dom.progress,dumdom.dom.main,dumdom.dom.cite,dumdom.dom.rect,dumdom.dom.polyline,dumdom.dom.map,dumdom.dom.object,dumdom.dom.i,dumdom.dom.p,dumdom.dom.nav,dumdom.dom.ruby,dumdom.dom.a,dumdom.dom.menu,dumdom.dom.blockquote,dumdom.dom.img,dumdom.dom.text,dumdom.dom.span,dumdom.dom.track,dumdom.dom.data,dumdom.dom.u,dumdom.dom.dl,dumdom.dom.select,dumdom.dom.polygon,dumdom.dom.pattern,dumdom.dom.html,dumdom.dom.thead,dumdom.dom.path,dumdom.dom.del,dumdom.dom.fieldset,dumdom.dom.aside,dumdom.dom.figure,dumdom.dom.figcaption,dumdom.dom.mask,dumdom.dom.q,dumdom.dom.bdi,dumdom.dom.video,dumdom.dom.address,dumdom.dom.caption,dumdom.dom.dd,dumdom.dom.rp,dumdom.dom.hr,dumdom.dom.meta,dumdom.dom.tbody,dumdom.dom.table,dumdom.dom.pre,dumdom.dom.ul,dumdom.dom.sup,dumdom.dom.dfn,dumdom.dom.sub,dumdom.dom.mark,dumdom.dom.script,dumdom.dom.big,dumdom.dom.button,dumdom.dom.wbr,dumdom.dom.strong,dumdom.dom.li,dumdom.dom.dt,dumdom.dom.td,dumdom.dom.tr,dumdom.dom.circle,dumdom.dom.section,dumdom.dom.th,dumdom.dom.time,dumdom.dom.optgroup,dumdom.dom.iframe,dumdom.dom.legend,dumdom.dom.em,dumdom.dom.kbd,dumdom.dom.article,dumdom.dom.clipPath,dumdom.dom.abbr,dumdom.dom.source,dumdom.dom.output,dumdom.dom.header,dumdom.dom.datalist,dumdom.dom.tfoot,dumdom.dom.s,dumdom.dom.ins,dumdom.dom.footer,dumdom.dom.title,dumdom.dom.h5,dumdom.dom.canvas,dumdom.dom.param,dumdom.dom.div,dumdom.dom.option,dumdom.dom.summary,dumdom.dom.samp,dumdom.dom.small,dumdom.dom.style,dumdom.dom.textarea,dumdom.dom.h4,dumdom.dom.head,dumdom.dom.g,dumdom.dom.stop,dumdom.dom.var$,dumdom.dom.tspan,dumdom.dom.ol,dumdom.dom.details,dumdom.dom.line,dumdom.dom.col,dumdom.dom.label,dumdom.dom.rt,dumdom.dom.h6,dumdom.dom.link,dumdom.dom.defs,dumdom.dom.colgroup,dumdom.dom.meter,dumdom.dom.bdo,dumdom.dom.b,dumdom.dom.svg,dumdom.dom.ellipse,dumdom.dom.code,dumdom.dom.linearGradient,dumdom.dom.noscript,dumdom.dom.h2,dumdom.dom.area,dumdom.dom.br,dumdom.dom.image],[dumdom.dom.form,dumdom.dom.audio,dumdom.dom.input,dumdom.dom.menuitem,dumdom.dom.radialGradient,dumdom.dom.base,dumdom.dom.h1,dumdom.dom.embed,dumdom.dom.h3,dumdom.dom.body,dumdom.dom.keygen,dumdom.dom.progress,dumdom.dom.main,dumdom.dom.cite,dumdom.dom.rect,dumdom.dom.polyline,dumdom.dom.map,dumdom.dom.object,dumdom.dom.i,dumdom.dom.p,dumdom.dom.nav,dumdom.dom.ruby,dumdom.dom.a,dumdom.dom.menu,dumdom.dom.blockquote,dumdom.dom.img,dumdom.dom.text,dumdom.dom.span,dumdom.dom.track,dumdom.dom.data,dumdom.dom.u,dumdom.dom.dl,dumdom.dom.select,dumdom.dom.polygon,dumdom.dom.pattern,dumdom.dom.html,dumdom.dom.thead,dumdom.dom.path,dumdom.dom.del,dumdom.dom.fieldset,dumdom.dom.aside,dumdom.dom.figure,dumdom.dom.figcaption,dumdom.dom.mask,dumdom.dom.q,dumdom.dom.bdi,dumdom.dom.video,dumdom.dom.address,dumdom.dom.caption,dumdom.dom.dd,dumdom.dom.rp,dumdom.dom.hr,dumdom.dom.meta,dumdom.dom.tbody,dumdom.dom.table,dumdom.dom.pre,dumdom.dom.ul,dumdom.dom.sup,dumdom.dom.dfn,dumdom.dom.sub,dumdom.dom.mark,dumdom.dom.script,dumdom.dom.big,dumdom.dom.button,dumdom.dom.wbr,dumdom.dom.strong,dumdom.dom.li,dumdom.dom.dt,dumdom.dom.td,dumdom.dom.tr,dumdom.dom.circle,dumdom.dom.section,dumdom.dom.th,dumdom.dom.time,dumdom.dom.optgroup,dumdom.dom.iframe,dumdom.dom.legend,dumdom.dom.em,dumdom.dom.kbd,dumdom.dom.article,dumdom.dom.clipPath,dumdom.dom.abbr,dumdom.dom.source,dumdom.dom.output,dumdom.dom.header,dumdom.dom.datalist,dumdom.dom.tfoot,dumdom.dom.s,dumdom.dom.ins,dumdom.dom.footer,dumdom.dom.title,dumdom.dom.h5,dumdom.dom.canvas,dumdom.dom.param,dumdom.dom.div,dumdom.dom.option,dumdom.dom.summary,dumdom.dom.samp,dumdom.dom.small,dumdom.dom.style,dumdom.dom.textarea,dumdom.dom.h4,dumdom.dom.head,dumdom.dom.g,dumdom.dom.stop,dumdom.dom.var$,dumdom.dom.tspan,dumdom.dom.ol,dumdom.dom.details,dumdom.dom.line,dumdom.dom.col,dumdom.dom.label,dumdom.dom.rt,dumdom.dom.h6,dumdom.dom.link,dumdom.dom.defs,dumdom.dom.colgroup,dumdom.dom.meter,dumdom.dom.bdo,dumdom.dom.b,dumdom.dom.svg,dumdom.dom.ellipse,dumdom.dom.code,dumdom.dom.linearGradient,dumdom.dom.noscript,dumdom.dom.h2,dumdom.dom.area,dumdom.dom.br,dumdom.dom.image]);

//# sourceMappingURL=dumdom.dom.js.map
