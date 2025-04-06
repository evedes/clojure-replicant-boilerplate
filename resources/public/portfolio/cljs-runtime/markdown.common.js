goog.provide('markdown.common');
markdown.common._STAR_inhibit_separator_STAR_ = null;
markdown.common.escape_delimiter = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((254))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((491)))].join('');
markdown.common.gen_token = (function markdown$common$gen_token(n){
return [markdown.common.escape_delimiter,cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),markdown.common.escape_delimiter].join('');
});
/**
 * Freezes an output string.  Converts to a placeholder token and puts that into the output.
 *   Returns the [text, state] pair.  Adds it into the state, the 'frozen-strings' hashmap
 *   So that it can be unfrozen later.
 */
markdown.common.freeze_string = (function markdown$common$freeze_string(var_args){
var args__5732__auto__ = [];
var len__5726__auto___48079 = arguments.length;
var i__5727__auto___48080 = (0);
while(true){
if((i__5727__auto___48080 < len__5726__auto___48079)){
args__5732__auto__.push((arguments[i__5727__auto___48080]));

var G__48081 = (i__5727__auto___48080 + (1));
i__5727__auto___48080 = G__48081;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var state = cljs.core.last(args);
var token = markdown.common.gen_token(cljs.core.count(new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token,cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560),token], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.flatten(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(args))))], null);
}));

(markdown.common.freeze_string.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.common.freeze_string.cljs$lang$applyTo = (function (seq47967){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47967));
}));

/**
 * Recursively replaces the frozen strings in the output with the original text.
 */
markdown.common.thaw_string = (function markdown$common$thaw_string(text,state){
while(true){
var temp__5821__auto__ = cljs.core.re_seq(cljs.core.re_pattern([markdown.common.escape_delimiter,"\\d+",markdown.common.escape_delimiter].join('')),text);
if(cljs.core.truth_(temp__5821__auto__)){
var matches = temp__5821__auto__;
var G__48085 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (text,state,matches,temp__5821__auto__){
return (function (s,r){
return clojure.string.replace(s,cljs.core.re_pattern(r),((function (text,state,matches,temp__5821__auto__){
return (function (p1__47986_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state),p1__47986_SHARP_,p1__47986_SHARP_);
});})(text,state,matches,temp__5821__auto__))
);
});})(text,state,matches,temp__5821__auto__))
,text,matches);
var G__48086 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560),((function (text,state,matches,temp__5821__auto__){
return (function (p1__47987_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__47987_SHARP_,matches);
});})(text,state,matches,temp__5821__auto__))
);
text = G__48085;
state = G__48086;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
break;
}
});
/**
 * Terminally encoded strings are ones that we've determined should no longer be processed or evaluated
 */
markdown.common.thaw_strings = (function markdown$common$thaw_strings(text,state){
if((!(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state))))){
return markdown.common.thaw_string(text,state);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
});
markdown.common.escape_code = (function markdown$common$escape_code(s){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(s,/&/,"&amp;"),/\*/,"&#42;"),/\^/,"&#94;"),/\_/,"&#95;"),/\~/,"&#126;"),/\</,"&lt;"),/\>/,"&gt;"),/\[/,"&#91;"),/\]/,"&#93;"),/\(/,"&#40;"),/\)/,"&#41;"),/\"/,"&quot;");
});
markdown.common.escaped_chars = (function markdown$common$escaped_chars(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(text,/\\\\/,"&#92;"),/\\`/,"&#8216;"),/\\\*/,"&#42;"),/\\_/,"&#95;"),/\\\{/,"&#123;"),/\\\}/,"&#125;"),/\\\[/,"&#91;"),/\\\]/,"&#93;"),/\\\(/,"&#40;"),/\\\)/,"&#41;"),/\\#/,"&#35;"),/\\\+/,"&#43;"),/\\-/,"&#45;"),/\\\./,"&#46;"),/\\!/,"&#33;"),/\\\^/,"&#94;")),state], null);
});
markdown.common.open_html_tags = (function markdown$common$open_html_tags(open_QMARK_,token_seq){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state,token){
var G__48004 = token;
switch (G__48004) {
case "<":
return new cljs.core.Keyword(null,"open","open",-1763596448);

break;
case ">":
return new cljs.core.Keyword(null,"closed","closed",-919675359);

break;
default:
return state;

}
}),(cljs.core.truth_(open_QMARK_)?new cljs.core.Keyword(null,"open","open",-1763596448):new cljs.core.Keyword(null,"closed","closed",-919675359)),token_seq));
});
/**
 * Return a transformer to
 * - find all the chunks of the string delimited by the `separator',
 * - wrap the output with the `open' and `close' markers, and
 * - apply the `transformer' to the text inside the chunk.
 */
markdown.common.make_separator = (function markdown$common$make_separator(var_args){
var G__48009 = arguments.length;
switch (G__48009) {
case 3:
return markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return markdown.common.make_separator.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3 = (function (separator,open,close){
return markdown.common.make_separator.cljs$core$IFn$_invoke$arity$4(separator,open,close,cljs.core.identity);
}));

(markdown.common.make_separator.cljs$core$IFn$_invoke$arity$4 = (function (separator,open,close,transformer){
var separator__$1 = cljs.core.seq(separator);
return (function (text,state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var buf = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.first(separator__$1)),cljs.core.seq(text));
var cur_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"found-token","found-token",113525576),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"in-tag?","in-tag?",1693672911),false], 0));
while(true){
if(cljs.core.empty_QMARK_(tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(new cljs.core.Keyword(null,"found-token","found-token",113525576).cljs$core$IFn$_invoke$arity$1(cur_state))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(out,separator__$1):out),buf)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cur_state,new cljs.core.Keyword(null,"found-token","found-token",113525576))], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"found-token","found-token",113525576).cljs$core$IFn$_invoke$arity$1(cur_state))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(tokens),separator__$1)){
var vec__48037 = (((transformer === cljs.core.identity))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [buf,cur_state], null):(function (){var vec__48040 = (function (){var G__48043 = clojure.string.join.cljs$core$IFn$_invoke$arity$1(buf);
var G__48044 = cur_state;
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__48043,G__48044) : transformer.call(null, G__48043,G__48044));
})();
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48040,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48040,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(s),new_state], null);
})());
var new_buf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48037,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48037,(1),null);
var G__48103 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.seq(open),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_buf,cljs.core.seq(close)], 0)));
var G__48104 = cljs.core.PersistentVector.EMPTY;
var G__48105 = cljs.core.rest(tokens);
var G__48106 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.Keyword(null,"found-token","found-token",113525576),false);
out = G__48103;
buf = G__48104;
tokens = G__48105;
cur_state = G__48106;
continue;
} else {
var G__48108 = out;
var G__48109 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.first(tokens));
var G__48110 = cljs.core.rest(tokens);
var G__48111 = cur_state;
out = G__48108;
buf = G__48109;
tokens = G__48110;
cur_state = G__48111;
continue;
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(tokens),separator__$1)) && (cljs.core.not(new cljs.core.Keyword(null,"in-tag?","in-tag?",1693672911).cljs$core$IFn$_invoke$arity$1(cur_state))))){
var G__48112 = out;
var G__48113 = buf;
var G__48114 = cljs.core.rest(tokens);
var G__48115 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cur_state,new cljs.core.Keyword(null,"found-token","found-token",113525576),true);
out = G__48112;
buf = G__48113;
tokens = G__48114;
cur_state = G__48115;
continue;
} else {
var G__48117 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(out,cljs.core.first(tokens));
var G__48118 = buf;
var G__48119 = cljs.core.rest(tokens);
var G__48120 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cur_state,new cljs.core.Keyword(null,"in-tag?","in-tag?",1693672911),markdown.common.open_html_tags(new cljs.core.Keyword(null,"in-tag?","in-tag?",1693672911).cljs$core$IFn$_invoke$arity$1(cur_state),cljs.core.first(tokens)));
out = G__48117;
buf = G__48118;
tokens = G__48119;
cur_state = G__48120;
continue;

}
}
}
break;
}
}
});
}));

(markdown.common.make_separator.cljs$lang$maxFixedArity = 4);

markdown.common.escape_code_transformer = (function markdown$common$escape_code_transformer(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.common.escape_code(text),state], null);
});
markdown.common.separator = (function markdown$common$separator(escape_QMARK_,text,open,close,separator,state){
return markdown.common.make_separator.cljs$core$IFn$_invoke$arity$4(separator,open,close,(cljs.core.truth_(escape_QMARK_)?markdown.common.escape_code_transformer:cljs.core.identity))(text,state);
});
markdown.common.strong = markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3("**","<strong>","</strong>");
markdown.common.bold_italic = markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3("***","<b><i>","</i></b>");
markdown.common.bold = markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3("__","<b>","</b>");
markdown.common.em = markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3("*","<em>","</em>");
markdown.common.italics = markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3("_","<i>","</i>");
markdown.common.strikethrough = markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3("~~","<del>","</del>");
markdown.common.inline_code = markdown.common.make_separator.cljs$core$IFn$_invoke$arity$4("`","<code>","</code>",markdown.common.escape_code_transformer);
markdown.common.inhibit = (function markdown$common$inhibit(text,state){
if(cljs.core.truth_(markdown.common._STAR_inhibit_separator_STAR_)){
return markdown.common.make_separator.cljs$core$IFn$_invoke$arity$4(markdown.common._STAR_inhibit_separator_STAR_,"","",markdown.common.freeze_string)(text,state);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
});
markdown.common.escape_inhibit_separator = (function markdown$common$escape_inhibit_separator(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(markdown.common._STAR_inhibit_separator_STAR_)?clojure.string.replace(text,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(markdown.common._STAR_inhibit_separator_STAR_,markdown.common._STAR_inhibit_separator_STAR_)),clojure.string.join.cljs$core$IFn$_invoke$arity$1(markdown.common._STAR_inhibit_separator_STAR_)):text),state], null);
});
markdown.common.heading_text = (function markdown$common$heading_text(text){
return clojure.string.trim(clojure.string.replace(clojure.string.replace(clojure.string.replace(text,/^([ ]+)?[#]+/,""),/[#]+$/,""),/\{(#|id=)?.*\}$/,""));
});
/**
 * Extract Hugo markdown anchor links from the `text`.
 * 
 *   See: https://gohugo.io/content-management/cross-references/#heading-ids
 */
markdown.common.hugo_anchor = (function markdown$common$hugo_anchor(text){
var temp__5823__auto__ = cljs.core.seq(cljs.core.re_find(/\{(#|id=)?(.*)\}$/,text));
if(temp__5823__auto__){
var groups = temp__5823__auto__;
return cljs.core.last(groups);
} else {
return null;
}
});
markdown.common.heading_level = (function markdown$common$heading_level(text){
var num_hashes = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48069_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__48069_SHARP_);
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__48070_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",p1__48070_SHARP_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__48070_SHARP_)));
}),cljs.core.seq(text))));
if((num_hashes > (0))){
return num_hashes;
} else {
return null;
}
});
markdown.common.make_heading = (function markdown$common$make_heading(text,heading_anchors){
var temp__5823__auto__ = markdown.common.heading_level(text);
if(cljs.core.truth_(temp__5823__auto__)){
var heading = temp__5823__auto__;
var htext = markdown.common.heading_text(text);
var anchor = (cljs.core.truth_(heading_anchors)?(function (){var or__5002__auto__ = markdown.common.hugo_anchor(text);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return clojure.string.replace(clojure.string.lower_case(htext)," ","&#95;");
}
})():null);
return ["<h",cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),(cljs.core.truth_(anchor)?[" id=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(anchor),"\""].join(''):null),">",htext,"</h",cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),">"].join('');
} else {
return null;
}
});
markdown.common.dashes = (function markdown$common$dashes(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace(clojure.string.replace(clojure.string.replace(text,/\-\-\-/,"&mdash;"),/\-\-/,"&ndash;"),/<code>.*<\/code>/,(function (s){
return clojure.string.replace(clojure.string.replace(s,/&mdash;/,"---"),/&ndash;/,"--");
}))),state], null);
});

//# sourceMappingURL=markdown.common.js.map
