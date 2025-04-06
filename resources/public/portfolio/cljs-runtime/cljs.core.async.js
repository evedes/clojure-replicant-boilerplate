goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40358 = (function (f,blockable,meta40359){
this.f = f;
this.blockable = blockable;
this.meta40359 = meta40359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40360,meta40359__$1){
var self__ = this;
var _40360__$1 = this;
return (new cljs.core.async.t_cljs$core$async40358(self__.f,self__.blockable,meta40359__$1));
}));

(cljs.core.async.t_cljs$core$async40358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40360){
var self__ = this;
var _40360__$1 = this;
return self__.meta40359;
}));

(cljs.core.async.t_cljs$core$async40358.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40358.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40358.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async40358.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async40358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40359","meta40359",-747247901,null)], null);
}));

(cljs.core.async.t_cljs$core$async40358.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40358.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40358");

(cljs.core.async.t_cljs$core$async40358.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async40358");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40358.
 */
cljs.core.async.__GT_t_cljs$core$async40358 = (function cljs$core$async$__GT_t_cljs$core$async40358(f,blockable,meta40359){
return (new cljs.core.async.t_cljs$core$async40358(f,blockable,meta40359));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__40355 = arguments.length;
switch (G__40355) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async40358(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__40451 = arguments.length;
switch (G__40451) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__40474 = arguments.length;
switch (G__40474) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__40482 = arguments.length;
switch (G__40482) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_44192 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44192) : fn1.call(null, val_44192));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44192) : fn1.call(null, val_44192));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__40507 = arguments.length;
switch (G__40507) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___44200 = n;
var x_44201 = (0);
while(true){
if((x_44201 < n__5593__auto___44200)){
(a[x_44201] = x_44201);

var G__44202 = (x_44201 + (1));
x_44201 = G__44202;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40521 = (function (flag,meta40522){
this.flag = flag;
this.meta40522 = meta40522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40523,meta40522__$1){
var self__ = this;
var _40523__$1 = this;
return (new cljs.core.async.t_cljs$core$async40521(self__.flag,meta40522__$1));
}));

(cljs.core.async.t_cljs$core$async40521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40523){
var self__ = this;
var _40523__$1 = this;
return self__.meta40522;
}));

(cljs.core.async.t_cljs$core$async40521.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40521.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async40521.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40521.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async40521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40522","meta40522",-1974374322,null)], null);
}));

(cljs.core.async.t_cljs$core$async40521.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40521.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40521");

(cljs.core.async.t_cljs$core$async40521.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async40521");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40521.
 */
cljs.core.async.__GT_t_cljs$core$async40521 = (function cljs$core$async$__GT_t_cljs$core$async40521(flag,meta40522){
return (new cljs.core.async.t_cljs$core$async40521(flag,meta40522));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async40521(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40533 = (function (flag,cb,meta40534){
this.flag = flag;
this.cb = cb;
this.meta40534 = meta40534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40535,meta40534__$1){
var self__ = this;
var _40535__$1 = this;
return (new cljs.core.async.t_cljs$core$async40533(self__.flag,self__.cb,meta40534__$1));
}));

(cljs.core.async.t_cljs$core$async40533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40535){
var self__ = this;
var _40535__$1 = this;
return self__.meta40534;
}));

(cljs.core.async.t_cljs$core$async40533.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40533.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async40533.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40533.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async40533.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40534","meta40534",1000571026,null)], null);
}));

(cljs.core.async.t_cljs$core$async40533.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40533.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40533");

(cljs.core.async.t_cljs$core$async40533.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async40533");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40533.
 */
cljs.core.async.__GT_t_cljs$core$async40533 = (function cljs$core$async$__GT_t_cljs$core$async40533(flag,cb,meta40534){
return (new cljs.core.async.t_cljs$core$async40533(flag,cb,meta40534));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async40533(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40564_SHARP_){
var G__40584 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40564_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40584) : fret.call(null, G__40584));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40565_SHARP_){
var G__40585 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40565_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40585) : fret.call(null, G__40585));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44223 = (i + (1));
i = G__44223;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___44229 = arguments.length;
var i__5727__auto___44230 = (0);
while(true){
if((i__5727__auto___44230 < len__5726__auto___44229)){
args__5732__auto__.push((arguments[i__5727__auto___44230]));

var G__44234 = (i__5727__auto___44230 + (1));
i__5727__auto___44230 = G__44234;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40619){
var map__40620 = p__40619;
var map__40620__$1 = cljs.core.__destructure_map(map__40620);
var opts = map__40620__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40602){
var G__40604 = cljs.core.first(seq40602);
var seq40602__$1 = cljs.core.next(seq40602);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40604,seq40602__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__40629 = arguments.length;
switch (G__40629) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31235__auto___44241 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_40658){
var state_val_40659 = (state_40658[(1)]);
if((state_val_40659 === (7))){
var inst_40654 = (state_40658[(2)]);
var state_40658__$1 = state_40658;
var statearr_40662_44243 = state_40658__$1;
(statearr_40662_44243[(2)] = inst_40654);

(statearr_40662_44243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (1))){
var state_40658__$1 = state_40658;
var statearr_40667_44244 = state_40658__$1;
(statearr_40667_44244[(2)] = null);

(statearr_40667_44244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (4))){
var inst_40637 = (state_40658[(7)]);
var inst_40637__$1 = (state_40658[(2)]);
var inst_40638 = (inst_40637__$1 == null);
var state_40658__$1 = (function (){var statearr_40668 = state_40658;
(statearr_40668[(7)] = inst_40637__$1);

return statearr_40668;
})();
if(cljs.core.truth_(inst_40638)){
var statearr_40672_44252 = state_40658__$1;
(statearr_40672_44252[(1)] = (5));

} else {
var statearr_40673_44255 = state_40658__$1;
(statearr_40673_44255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (13))){
var state_40658__$1 = state_40658;
var statearr_40675_44260 = state_40658__$1;
(statearr_40675_44260[(2)] = null);

(statearr_40675_44260[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (6))){
var inst_40637 = (state_40658[(7)]);
var state_40658__$1 = state_40658;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40658__$1,(11),to,inst_40637);
} else {
if((state_val_40659 === (3))){
var inst_40656 = (state_40658[(2)]);
var state_40658__$1 = state_40658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40658__$1,inst_40656);
} else {
if((state_val_40659 === (12))){
var state_40658__$1 = state_40658;
var statearr_40676_44282 = state_40658__$1;
(statearr_40676_44282[(2)] = null);

(statearr_40676_44282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (2))){
var state_40658__$1 = state_40658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40658__$1,(4),from);
} else {
if((state_val_40659 === (11))){
var inst_40647 = (state_40658[(2)]);
var state_40658__$1 = state_40658;
if(cljs.core.truth_(inst_40647)){
var statearr_40678_44283 = state_40658__$1;
(statearr_40678_44283[(1)] = (12));

} else {
var statearr_40679_44284 = state_40658__$1;
(statearr_40679_44284[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (9))){
var state_40658__$1 = state_40658;
var statearr_40681_44285 = state_40658__$1;
(statearr_40681_44285[(2)] = null);

(statearr_40681_44285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (5))){
var state_40658__$1 = state_40658;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40682_44286 = state_40658__$1;
(statearr_40682_44286[(1)] = (8));

} else {
var statearr_40683_44287 = state_40658__$1;
(statearr_40683_44287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (14))){
var inst_40652 = (state_40658[(2)]);
var state_40658__$1 = state_40658;
var statearr_40686_44294 = state_40658__$1;
(statearr_40686_44294[(2)] = inst_40652);

(statearr_40686_44294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (10))){
var inst_40644 = (state_40658[(2)]);
var state_40658__$1 = state_40658;
var statearr_40693_44295 = state_40658__$1;
(statearr_40693_44295[(2)] = inst_40644);

(statearr_40693_44295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (8))){
var inst_40641 = cljs.core.async.close_BANG_(to);
var state_40658__$1 = state_40658;
var statearr_40698_44300 = state_40658__$1;
(statearr_40698_44300[(2)] = inst_40641);

(statearr_40698_44300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30487__auto__ = null;
var cljs$core$async$state_machine__30487__auto____0 = (function (){
var statearr_40702 = [null,null,null,null,null,null,null,null];
(statearr_40702[(0)] = cljs$core$async$state_machine__30487__auto__);

(statearr_40702[(1)] = (1));

return statearr_40702;
});
var cljs$core$async$state_machine__30487__auto____1 = (function (state_40658){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_40658);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e40707){var ex__30491__auto__ = e40707;
var statearr_40708_44302 = state_40658;
(statearr_40708_44302[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_40658[(4)]))){
var statearr_40709_44303 = state_40658;
(statearr_40709_44303[(1)] = cljs.core.first((state_40658[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44305 = state_40658;
state_40658 = G__44305;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$state_machine__30487__auto__ = function(state_40658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30487__auto____1.call(this,state_40658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30487__auto____0;
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30487__auto____1;
return cljs$core$async$state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_40714 = f__31239__auto__();
(statearr_40714[(6)] = c__31235__auto___44241);

return statearr_40714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__40725){
var vec__40726 = p__40725;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40726,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40726,(1),null);
var job = vec__40726;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31235__auto___44309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_40738){
var state_val_40739 = (state_40738[(1)]);
if((state_val_40739 === (1))){
var state_40738__$1 = state_40738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40738__$1,(2),res,v);
} else {
if((state_val_40739 === (2))){
var inst_40731 = (state_40738[(2)]);
var inst_40736 = cljs.core.async.close_BANG_(res);
var state_40738__$1 = (function (){var statearr_40746 = state_40738;
(statearr_40746[(7)] = inst_40731);

return statearr_40746;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40738__$1,inst_40736);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0 = (function (){
var statearr_40747 = [null,null,null,null,null,null,null,null];
(statearr_40747[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__);

(statearr_40747[(1)] = (1));

return statearr_40747;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1 = (function (state_40738){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_40738);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e40750){var ex__30491__auto__ = e40750;
var statearr_40751_44317 = state_40738;
(statearr_40751_44317[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_40738[(4)]))){
var statearr_40756_44319 = state_40738;
(statearr_40756_44319[(1)] = cljs.core.first((state_40738[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44320 = state_40738;
state_40738 = G__44320;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__ = function(state_40738){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1.call(this,state_40738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_40761 = f__31239__auto__();
(statearr_40761[(6)] = c__31235__auto___44309);

return statearr_40761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__40764){
var vec__40766 = p__40764;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40766,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40766,(1),null);
var job = vec__40766;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___44330 = n;
var __44331 = (0);
while(true){
if((__44331 < n__5593__auto___44330)){
var G__40775_44332 = type;
var G__40775_44333__$1 = (((G__40775_44332 instanceof cljs.core.Keyword))?G__40775_44332.fqn:null);
switch (G__40775_44333__$1) {
case "compute":
var c__31235__auto___44335 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44331,c__31235__auto___44335,G__40775_44332,G__40775_44333__$1,n__5593__auto___44330,jobs,results,process__$1,async){
return (function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = ((function (__44331,c__31235__auto___44335,G__40775_44332,G__40775_44333__$1,n__5593__auto___44330,jobs,results,process__$1,async){
return (function (state_40800){
var state_val_40801 = (state_40800[(1)]);
if((state_val_40801 === (1))){
var state_40800__$1 = state_40800;
var statearr_40802_44339 = state_40800__$1;
(statearr_40802_44339[(2)] = null);

(statearr_40802_44339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40801 === (2))){
var state_40800__$1 = state_40800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40800__$1,(4),jobs);
} else {
if((state_val_40801 === (3))){
var inst_40798 = (state_40800[(2)]);
var state_40800__$1 = state_40800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40800__$1,inst_40798);
} else {
if((state_val_40801 === (4))){
var inst_40782 = (state_40800[(2)]);
var inst_40791 = process__$1(inst_40782);
var state_40800__$1 = state_40800;
if(cljs.core.truth_(inst_40791)){
var statearr_40804_44340 = state_40800__$1;
(statearr_40804_44340[(1)] = (5));

} else {
var statearr_40805_44341 = state_40800__$1;
(statearr_40805_44341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40801 === (5))){
var state_40800__$1 = state_40800;
var statearr_40806_44342 = state_40800__$1;
(statearr_40806_44342[(2)] = null);

(statearr_40806_44342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40801 === (6))){
var state_40800__$1 = state_40800;
var statearr_40807_44343 = state_40800__$1;
(statearr_40807_44343[(2)] = null);

(statearr_40807_44343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40801 === (7))){
var inst_40796 = (state_40800[(2)]);
var state_40800__$1 = state_40800;
var statearr_40810_44345 = state_40800__$1;
(statearr_40810_44345[(2)] = inst_40796);

(statearr_40810_44345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__44331,c__31235__auto___44335,G__40775_44332,G__40775_44333__$1,n__5593__auto___44330,jobs,results,process__$1,async))
;
return ((function (__44331,switch__30486__auto__,c__31235__auto___44335,G__40775_44332,G__40775_44333__$1,n__5593__auto___44330,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0 = (function (){
var statearr_40835 = [null,null,null,null,null,null,null];
(statearr_40835[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__);

(statearr_40835[(1)] = (1));

return statearr_40835;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1 = (function (state_40800){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_40800);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e40843){var ex__30491__auto__ = e40843;
var statearr_40845_44348 = state_40800;
(statearr_40845_44348[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_40800[(4)]))){
var statearr_40858_44349 = state_40800;
(statearr_40858_44349[(1)] = cljs.core.first((state_40800[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44352 = state_40800;
state_40800 = G__44352;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__ = function(state_40800){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1.call(this,state_40800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__;
})()
;})(__44331,switch__30486__auto__,c__31235__auto___44335,G__40775_44332,G__40775_44333__$1,n__5593__auto___44330,jobs,results,process__$1,async))
})();
var state__31240__auto__ = (function (){var statearr_40875 = f__31239__auto__();
(statearr_40875[(6)] = c__31235__auto___44335);

return statearr_40875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
});})(__44331,c__31235__auto___44335,G__40775_44332,G__40775_44333__$1,n__5593__auto___44330,jobs,results,process__$1,async))
);


break;
case "async":
var c__31235__auto___44353 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44331,c__31235__auto___44353,G__40775_44332,G__40775_44333__$1,n__5593__auto___44330,jobs,results,process__$1,async){
return (function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = ((function (__44331,c__31235__auto___44353,G__40775_44332,G__40775_44333__$1,n__5593__auto___44330,jobs,results,process__$1,async){
return (function (state_40899){
var state_val_40900 = (state_40899[(1)]);
if((state_val_40900 === (1))){
var state_40899__$1 = state_40899;
var statearr_40901_44358 = state_40899__$1;
(statearr_40901_44358[(2)] = null);

(statearr_40901_44358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40900 === (2))){
var state_40899__$1 = state_40899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40899__$1,(4),jobs);
} else {
if((state_val_40900 === (3))){
var inst_40893 = (state_40899[(2)]);
var state_40899__$1 = state_40899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40899__$1,inst_40893);
} else {
if((state_val_40900 === (4))){
var inst_40884 = (state_40899[(2)]);
var inst_40885 = async(inst_40884);
var state_40899__$1 = state_40899;
if(cljs.core.truth_(inst_40885)){
var statearr_40916_44360 = state_40899__$1;
(statearr_40916_44360[(1)] = (5));

} else {
var statearr_40917_44361 = state_40899__$1;
(statearr_40917_44361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40900 === (5))){
var state_40899__$1 = state_40899;
var statearr_40919_44362 = state_40899__$1;
(statearr_40919_44362[(2)] = null);

(statearr_40919_44362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40900 === (6))){
var state_40899__$1 = state_40899;
var statearr_40920_44363 = state_40899__$1;
(statearr_40920_44363[(2)] = null);

(statearr_40920_44363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40900 === (7))){
var inst_40891 = (state_40899[(2)]);
var state_40899__$1 = state_40899;
var statearr_40922_44364 = state_40899__$1;
(statearr_40922_44364[(2)] = inst_40891);

(statearr_40922_44364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__44331,c__31235__auto___44353,G__40775_44332,G__40775_44333__$1,n__5593__auto___44330,jobs,results,process__$1,async))
;
return ((function (__44331,switch__30486__auto__,c__31235__auto___44353,G__40775_44332,G__40775_44333__$1,n__5593__auto___44330,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0 = (function (){
var statearr_40925 = [null,null,null,null,null,null,null];
(statearr_40925[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__);

(statearr_40925[(1)] = (1));

return statearr_40925;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1 = (function (state_40899){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_40899);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e40927){var ex__30491__auto__ = e40927;
var statearr_40928_44365 = state_40899;
(statearr_40928_44365[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_40899[(4)]))){
var statearr_40930_44366 = state_40899;
(statearr_40930_44366[(1)] = cljs.core.first((state_40899[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44367 = state_40899;
state_40899 = G__44367;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__ = function(state_40899){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1.call(this,state_40899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__;
})()
;})(__44331,switch__30486__auto__,c__31235__auto___44353,G__40775_44332,G__40775_44333__$1,n__5593__auto___44330,jobs,results,process__$1,async))
})();
var state__31240__auto__ = (function (){var statearr_40932 = f__31239__auto__();
(statearr_40932[(6)] = c__31235__auto___44353);

return statearr_40932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
});})(__44331,c__31235__auto___44353,G__40775_44332,G__40775_44333__$1,n__5593__auto___44330,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40775_44333__$1)].join('')));

}

var G__44368 = (__44331 + (1));
__44331 = G__44368;
continue;
} else {
}
break;
}

var c__31235__auto___44369 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_41002){
var state_val_41007 = (state_41002[(1)]);
if((state_val_41007 === (7))){
var inst_40994 = (state_41002[(2)]);
var state_41002__$1 = state_41002;
var statearr_41033_44374 = state_41002__$1;
(statearr_41033_44374[(2)] = inst_40994);

(statearr_41033_44374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (1))){
var state_41002__$1 = state_41002;
var statearr_41040_44375 = state_41002__$1;
(statearr_41040_44375[(2)] = null);

(statearr_41040_44375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (4))){
var inst_40945 = (state_41002[(7)]);
var inst_40945__$1 = (state_41002[(2)]);
var inst_40952 = (inst_40945__$1 == null);
var state_41002__$1 = (function (){var statearr_41055 = state_41002;
(statearr_41055[(7)] = inst_40945__$1);

return statearr_41055;
})();
if(cljs.core.truth_(inst_40952)){
var statearr_41060_44376 = state_41002__$1;
(statearr_41060_44376[(1)] = (5));

} else {
var statearr_41062_44377 = state_41002__$1;
(statearr_41062_44377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (6))){
var inst_40945 = (state_41002[(7)]);
var inst_40957 = (state_41002[(8)]);
var inst_40957__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_40975 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40979 = [inst_40945,inst_40957__$1];
var inst_40981 = (new cljs.core.PersistentVector(null,2,(5),inst_40975,inst_40979,null));
var state_41002__$1 = (function (){var statearr_41078 = state_41002;
(statearr_41078[(8)] = inst_40957__$1);

return statearr_41078;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41002__$1,(8),jobs,inst_40981);
} else {
if((state_val_41007 === (3))){
var inst_40996 = (state_41002[(2)]);
var state_41002__$1 = state_41002;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41002__$1,inst_40996);
} else {
if((state_val_41007 === (2))){
var state_41002__$1 = state_41002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41002__$1,(4),from);
} else {
if((state_val_41007 === (9))){
var inst_40989 = (state_41002[(2)]);
var state_41002__$1 = (function (){var statearr_41087 = state_41002;
(statearr_41087[(9)] = inst_40989);

return statearr_41087;
})();
var statearr_41089_44386 = state_41002__$1;
(statearr_41089_44386[(2)] = null);

(statearr_41089_44386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (5))){
var inst_40954 = cljs.core.async.close_BANG_(jobs);
var state_41002__$1 = state_41002;
var statearr_41098_44387 = state_41002__$1;
(statearr_41098_44387[(2)] = inst_40954);

(statearr_41098_44387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (8))){
var inst_40957 = (state_41002[(8)]);
var inst_40985 = (state_41002[(2)]);
var state_41002__$1 = (function (){var statearr_41111 = state_41002;
(statearr_41111[(10)] = inst_40985);

return statearr_41111;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41002__$1,(9),results,inst_40957);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0 = (function (){
var statearr_41120 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41120[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__);

(statearr_41120[(1)] = (1));

return statearr_41120;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1 = (function (state_41002){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_41002);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e41126){var ex__30491__auto__ = e41126;
var statearr_41127_44391 = state_41002;
(statearr_41127_44391[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_41002[(4)]))){
var statearr_41128_44398 = state_41002;
(statearr_41128_44398[(1)] = cljs.core.first((state_41002[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44400 = state_41002;
state_41002 = G__44400;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__ = function(state_41002){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1.call(this,state_41002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_41130 = f__31239__auto__();
(statearr_41130[(6)] = c__31235__auto___44369);

return statearr_41130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
}));


var c__31235__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_41179){
var state_val_41180 = (state_41179[(1)]);
if((state_val_41180 === (7))){
var inst_41175 = (state_41179[(2)]);
var state_41179__$1 = state_41179;
var statearr_41192_44401 = state_41179__$1;
(statearr_41192_44401[(2)] = inst_41175);

(statearr_41192_44401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41180 === (20))){
var state_41179__$1 = state_41179;
var statearr_41193_44402 = state_41179__$1;
(statearr_41193_44402[(2)] = null);

(statearr_41193_44402[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41180 === (1))){
var state_41179__$1 = state_41179;
var statearr_41202_44403 = state_41179__$1;
(statearr_41202_44403[(2)] = null);

(statearr_41202_44403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41180 === (4))){
var inst_41142 = (state_41179[(7)]);
var inst_41142__$1 = (state_41179[(2)]);
var inst_41143 = (inst_41142__$1 == null);
var state_41179__$1 = (function (){var statearr_41204 = state_41179;
(statearr_41204[(7)] = inst_41142__$1);

return statearr_41204;
})();
if(cljs.core.truth_(inst_41143)){
var statearr_41208_44404 = state_41179__$1;
(statearr_41208_44404[(1)] = (5));

} else {
var statearr_41209_44408 = state_41179__$1;
(statearr_41209_44408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41180 === (15))){
var inst_41156 = (state_41179[(8)]);
var state_41179__$1 = state_41179;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41179__$1,(18),to,inst_41156);
} else {
if((state_val_41180 === (21))){
var inst_41170 = (state_41179[(2)]);
var state_41179__$1 = state_41179;
var statearr_41212_44409 = state_41179__$1;
(statearr_41212_44409[(2)] = inst_41170);

(statearr_41212_44409[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41180 === (13))){
var inst_41172 = (state_41179[(2)]);
var state_41179__$1 = (function (){var statearr_41213 = state_41179;
(statearr_41213[(9)] = inst_41172);

return statearr_41213;
})();
var statearr_41214_44412 = state_41179__$1;
(statearr_41214_44412[(2)] = null);

(statearr_41214_44412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41180 === (6))){
var inst_41142 = (state_41179[(7)]);
var state_41179__$1 = state_41179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41179__$1,(11),inst_41142);
} else {
if((state_val_41180 === (17))){
var inst_41164 = (state_41179[(2)]);
var state_41179__$1 = state_41179;
if(cljs.core.truth_(inst_41164)){
var statearr_41217_44413 = state_41179__$1;
(statearr_41217_44413[(1)] = (19));

} else {
var statearr_41218_44414 = state_41179__$1;
(statearr_41218_44414[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41180 === (3))){
var inst_41177 = (state_41179[(2)]);
var state_41179__$1 = state_41179;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41179__$1,inst_41177);
} else {
if((state_val_41180 === (12))){
var inst_41152 = (state_41179[(10)]);
var state_41179__$1 = state_41179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41179__$1,(14),inst_41152);
} else {
if((state_val_41180 === (2))){
var state_41179__$1 = state_41179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41179__$1,(4),results);
} else {
if((state_val_41180 === (19))){
var state_41179__$1 = state_41179;
var statearr_41219_44415 = state_41179__$1;
(statearr_41219_44415[(2)] = null);

(statearr_41219_44415[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41180 === (11))){
var inst_41152 = (state_41179[(2)]);
var state_41179__$1 = (function (){var statearr_41220 = state_41179;
(statearr_41220[(10)] = inst_41152);

return statearr_41220;
})();
var statearr_41221_44416 = state_41179__$1;
(statearr_41221_44416[(2)] = null);

(statearr_41221_44416[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41180 === (9))){
var state_41179__$1 = state_41179;
var statearr_41222_44417 = state_41179__$1;
(statearr_41222_44417[(2)] = null);

(statearr_41222_44417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41180 === (5))){
var state_41179__$1 = state_41179;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41223_44418 = state_41179__$1;
(statearr_41223_44418[(1)] = (8));

} else {
var statearr_41226_44420 = state_41179__$1;
(statearr_41226_44420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41180 === (14))){
var inst_41156 = (state_41179[(8)]);
var inst_41158 = (state_41179[(11)]);
var inst_41156__$1 = (state_41179[(2)]);
var inst_41157 = (inst_41156__$1 == null);
var inst_41158__$1 = cljs.core.not(inst_41157);
var state_41179__$1 = (function (){var statearr_41228 = state_41179;
(statearr_41228[(8)] = inst_41156__$1);

(statearr_41228[(11)] = inst_41158__$1);

return statearr_41228;
})();
if(inst_41158__$1){
var statearr_41229_44422 = state_41179__$1;
(statearr_41229_44422[(1)] = (15));

} else {
var statearr_41230_44423 = state_41179__$1;
(statearr_41230_44423[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41180 === (16))){
var inst_41158 = (state_41179[(11)]);
var state_41179__$1 = state_41179;
var statearr_41232_44424 = state_41179__$1;
(statearr_41232_44424[(2)] = inst_41158);

(statearr_41232_44424[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41180 === (10))){
var inst_41149 = (state_41179[(2)]);
var state_41179__$1 = state_41179;
var statearr_41237_44428 = state_41179__$1;
(statearr_41237_44428[(2)] = inst_41149);

(statearr_41237_44428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41180 === (18))){
var inst_41161 = (state_41179[(2)]);
var state_41179__$1 = state_41179;
var statearr_41239_44429 = state_41179__$1;
(statearr_41239_44429[(2)] = inst_41161);

(statearr_41239_44429[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41180 === (8))){
var inst_41146 = cljs.core.async.close_BANG_(to);
var state_41179__$1 = state_41179;
var statearr_41245_44430 = state_41179__$1;
(statearr_41245_44430[(2)] = inst_41146);

(statearr_41245_44430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0 = (function (){
var statearr_41253 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41253[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__);

(statearr_41253[(1)] = (1));

return statearr_41253;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1 = (function (state_41179){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_41179);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e41255){var ex__30491__auto__ = e41255;
var statearr_41256_44431 = state_41179;
(statearr_41256_44431[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_41179[(4)]))){
var statearr_41259_44432 = state_41179;
(statearr_41259_44432[(1)] = cljs.core.first((state_41179[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44433 = state_41179;
state_41179 = G__44433;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__ = function(state_41179){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1.call(this,state_41179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_41260 = f__31239__auto__();
(statearr_41260[(6)] = c__31235__auto__);

return statearr_41260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
}));

return c__31235__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__41270 = arguments.length;
switch (G__41270) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__41303 = arguments.length;
switch (G__41303) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__41358 = arguments.length;
switch (G__41358) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__31235__auto___44448 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_41425){
var state_val_41426 = (state_41425[(1)]);
if((state_val_41426 === (7))){
var inst_41421 = (state_41425[(2)]);
var state_41425__$1 = state_41425;
var statearr_41436_44449 = state_41425__$1;
(statearr_41436_44449[(2)] = inst_41421);

(statearr_41436_44449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41426 === (1))){
var state_41425__$1 = state_41425;
var statearr_41437_44454 = state_41425__$1;
(statearr_41437_44454[(2)] = null);

(statearr_41437_44454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41426 === (4))){
var inst_41398 = (state_41425[(7)]);
var inst_41398__$1 = (state_41425[(2)]);
var inst_41403 = (inst_41398__$1 == null);
var state_41425__$1 = (function (){var statearr_41439 = state_41425;
(statearr_41439[(7)] = inst_41398__$1);

return statearr_41439;
})();
if(cljs.core.truth_(inst_41403)){
var statearr_41440_44459 = state_41425__$1;
(statearr_41440_44459[(1)] = (5));

} else {
var statearr_41441_44460 = state_41425__$1;
(statearr_41441_44460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41426 === (13))){
var state_41425__$1 = state_41425;
var statearr_41442_44461 = state_41425__$1;
(statearr_41442_44461[(2)] = null);

(statearr_41442_44461[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41426 === (6))){
var inst_41398 = (state_41425[(7)]);
var inst_41408 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_41398) : p.call(null, inst_41398));
var state_41425__$1 = state_41425;
if(cljs.core.truth_(inst_41408)){
var statearr_41445_44462 = state_41425__$1;
(statearr_41445_44462[(1)] = (9));

} else {
var statearr_41447_44463 = state_41425__$1;
(statearr_41447_44463[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41426 === (3))){
var inst_41423 = (state_41425[(2)]);
var state_41425__$1 = state_41425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41425__$1,inst_41423);
} else {
if((state_val_41426 === (12))){
var state_41425__$1 = state_41425;
var statearr_41448_44464 = state_41425__$1;
(statearr_41448_44464[(2)] = null);

(statearr_41448_44464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41426 === (2))){
var state_41425__$1 = state_41425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41425__$1,(4),ch);
} else {
if((state_val_41426 === (11))){
var inst_41398 = (state_41425[(7)]);
var inst_41412 = (state_41425[(2)]);
var state_41425__$1 = state_41425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41425__$1,(8),inst_41412,inst_41398);
} else {
if((state_val_41426 === (9))){
var state_41425__$1 = state_41425;
var statearr_41449_44468 = state_41425__$1;
(statearr_41449_44468[(2)] = tc);

(statearr_41449_44468[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41426 === (5))){
var inst_41405 = cljs.core.async.close_BANG_(tc);
var inst_41406 = cljs.core.async.close_BANG_(fc);
var state_41425__$1 = (function (){var statearr_41451 = state_41425;
(statearr_41451[(8)] = inst_41405);

return statearr_41451;
})();
var statearr_41453_44469 = state_41425__$1;
(statearr_41453_44469[(2)] = inst_41406);

(statearr_41453_44469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41426 === (14))){
var inst_41419 = (state_41425[(2)]);
var state_41425__$1 = state_41425;
var statearr_41454_44470 = state_41425__$1;
(statearr_41454_44470[(2)] = inst_41419);

(statearr_41454_44470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41426 === (10))){
var state_41425__$1 = state_41425;
var statearr_41455_44473 = state_41425__$1;
(statearr_41455_44473[(2)] = fc);

(statearr_41455_44473[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41426 === (8))){
var inst_41414 = (state_41425[(2)]);
var state_41425__$1 = state_41425;
if(cljs.core.truth_(inst_41414)){
var statearr_41456_44474 = state_41425__$1;
(statearr_41456_44474[(1)] = (12));

} else {
var statearr_41457_44475 = state_41425__$1;
(statearr_41457_44475[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30487__auto__ = null;
var cljs$core$async$state_machine__30487__auto____0 = (function (){
var statearr_41460 = [null,null,null,null,null,null,null,null,null];
(statearr_41460[(0)] = cljs$core$async$state_machine__30487__auto__);

(statearr_41460[(1)] = (1));

return statearr_41460;
});
var cljs$core$async$state_machine__30487__auto____1 = (function (state_41425){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_41425);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e41469){var ex__30491__auto__ = e41469;
var statearr_41470_44482 = state_41425;
(statearr_41470_44482[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_41425[(4)]))){
var statearr_41471_44483 = state_41425;
(statearr_41471_44483[(1)] = cljs.core.first((state_41425[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44484 = state_41425;
state_41425 = G__44484;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$state_machine__30487__auto__ = function(state_41425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30487__auto____1.call(this,state_41425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30487__auto____0;
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30487__auto____1;
return cljs$core$async$state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_41476 = f__31239__auto__();
(statearr_41476[(6)] = c__31235__auto___44448);

return statearr_41476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31235__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_41514){
var state_val_41515 = (state_41514[(1)]);
if((state_val_41515 === (7))){
var inst_41510 = (state_41514[(2)]);
var state_41514__$1 = state_41514;
var statearr_41517_44488 = state_41514__$1;
(statearr_41517_44488[(2)] = inst_41510);

(statearr_41517_44488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41515 === (1))){
var inst_41493 = init;
var inst_41494 = inst_41493;
var state_41514__$1 = (function (){var statearr_41521 = state_41514;
(statearr_41521[(7)] = inst_41494);

return statearr_41521;
})();
var statearr_41522_44489 = state_41514__$1;
(statearr_41522_44489[(2)] = null);

(statearr_41522_44489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41515 === (4))){
var inst_41497 = (state_41514[(8)]);
var inst_41497__$1 = (state_41514[(2)]);
var inst_41498 = (inst_41497__$1 == null);
var state_41514__$1 = (function (){var statearr_41524 = state_41514;
(statearr_41524[(8)] = inst_41497__$1);

return statearr_41524;
})();
if(cljs.core.truth_(inst_41498)){
var statearr_41525_44493 = state_41514__$1;
(statearr_41525_44493[(1)] = (5));

} else {
var statearr_41526_44494 = state_41514__$1;
(statearr_41526_44494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41515 === (6))){
var inst_41497 = (state_41514[(8)]);
var inst_41494 = (state_41514[(7)]);
var inst_41501 = (state_41514[(9)]);
var inst_41501__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_41494,inst_41497) : f.call(null, inst_41494,inst_41497));
var inst_41502 = cljs.core.reduced_QMARK_(inst_41501__$1);
var state_41514__$1 = (function (){var statearr_41527 = state_41514;
(statearr_41527[(9)] = inst_41501__$1);

return statearr_41527;
})();
if(inst_41502){
var statearr_41529_44504 = state_41514__$1;
(statearr_41529_44504[(1)] = (8));

} else {
var statearr_41531_44508 = state_41514__$1;
(statearr_41531_44508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41515 === (3))){
var inst_41512 = (state_41514[(2)]);
var state_41514__$1 = state_41514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41514__$1,inst_41512);
} else {
if((state_val_41515 === (2))){
var state_41514__$1 = state_41514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41514__$1,(4),ch);
} else {
if((state_val_41515 === (9))){
var inst_41501 = (state_41514[(9)]);
var inst_41494 = inst_41501;
var state_41514__$1 = (function (){var statearr_41539 = state_41514;
(statearr_41539[(7)] = inst_41494);

return statearr_41539;
})();
var statearr_41540_44509 = state_41514__$1;
(statearr_41540_44509[(2)] = null);

(statearr_41540_44509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41515 === (5))){
var inst_41494 = (state_41514[(7)]);
var state_41514__$1 = state_41514;
var statearr_41545_44510 = state_41514__$1;
(statearr_41545_44510[(2)] = inst_41494);

(statearr_41545_44510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41515 === (10))){
var inst_41508 = (state_41514[(2)]);
var state_41514__$1 = state_41514;
var statearr_41546_44513 = state_41514__$1;
(statearr_41546_44513[(2)] = inst_41508);

(statearr_41546_44513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41515 === (8))){
var inst_41501 = (state_41514[(9)]);
var inst_41504 = cljs.core.deref(inst_41501);
var state_41514__$1 = state_41514;
var statearr_41551_44514 = state_41514__$1;
(statearr_41551_44514[(2)] = inst_41504);

(statearr_41551_44514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30487__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30487__auto____0 = (function (){
var statearr_41556 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41556[(0)] = cljs$core$async$reduce_$_state_machine__30487__auto__);

(statearr_41556[(1)] = (1));

return statearr_41556;
});
var cljs$core$async$reduce_$_state_machine__30487__auto____1 = (function (state_41514){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_41514);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e41557){var ex__30491__auto__ = e41557;
var statearr_41558_44518 = state_41514;
(statearr_41558_44518[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_41514[(4)]))){
var statearr_41559_44519 = state_41514;
(statearr_41559_44519[(1)] = cljs.core.first((state_41514[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44520 = state_41514;
state_41514 = G__44520;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30487__auto__ = function(state_41514){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30487__auto____1.call(this,state_41514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30487__auto____0;
cljs$core$async$reduce_$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30487__auto____1;
return cljs$core$async$reduce_$_state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_41562 = f__31239__auto__();
(statearr_41562[(6)] = c__31235__auto__);

return statearr_41562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
}));

return c__31235__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__31235__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_41573){
var state_val_41574 = (state_41573[(1)]);
if((state_val_41574 === (1))){
var inst_41564 = cljs.core.async.reduce(f__$1,init,ch);
var state_41573__$1 = state_41573;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41573__$1,(2),inst_41564);
} else {
if((state_val_41574 === (2))){
var inst_41566 = (state_41573[(2)]);
var inst_41567 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_41566) : f__$1.call(null, inst_41566));
var state_41573__$1 = state_41573;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41573__$1,inst_41567);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30487__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30487__auto____0 = (function (){
var statearr_41577 = [null,null,null,null,null,null,null];
(statearr_41577[(0)] = cljs$core$async$transduce_$_state_machine__30487__auto__);

(statearr_41577[(1)] = (1));

return statearr_41577;
});
var cljs$core$async$transduce_$_state_machine__30487__auto____1 = (function (state_41573){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_41573);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e41578){var ex__30491__auto__ = e41578;
var statearr_41579_44532 = state_41573;
(statearr_41579_44532[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_41573[(4)]))){
var statearr_41581_44533 = state_41573;
(statearr_41581_44533[(1)] = cljs.core.first((state_41573[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44534 = state_41573;
state_41573 = G__44534;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30487__auto__ = function(state_41573){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30487__auto____1.call(this,state_41573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30487__auto____0;
cljs$core$async$transduce_$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30487__auto____1;
return cljs$core$async$transduce_$_state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_41582 = f__31239__auto__();
(statearr_41582[(6)] = c__31235__auto__);

return statearr_41582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
}));

return c__31235__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__41589 = arguments.length;
switch (G__41589) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31235__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_41615){
var state_val_41616 = (state_41615[(1)]);
if((state_val_41616 === (7))){
var inst_41596 = (state_41615[(2)]);
var state_41615__$1 = state_41615;
var statearr_41618_44537 = state_41615__$1;
(statearr_41618_44537[(2)] = inst_41596);

(statearr_41618_44537[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (1))){
var inst_41590 = cljs.core.seq(coll);
var inst_41591 = inst_41590;
var state_41615__$1 = (function (){var statearr_41619 = state_41615;
(statearr_41619[(7)] = inst_41591);

return statearr_41619;
})();
var statearr_41620_44545 = state_41615__$1;
(statearr_41620_44545[(2)] = null);

(statearr_41620_44545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (4))){
var inst_41591 = (state_41615[(7)]);
var inst_41594 = cljs.core.first(inst_41591);
var state_41615__$1 = state_41615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41615__$1,(7),ch,inst_41594);
} else {
if((state_val_41616 === (13))){
var inst_41608 = (state_41615[(2)]);
var state_41615__$1 = state_41615;
var statearr_41621_44546 = state_41615__$1;
(statearr_41621_44546[(2)] = inst_41608);

(statearr_41621_44546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (6))){
var inst_41599 = (state_41615[(2)]);
var state_41615__$1 = state_41615;
if(cljs.core.truth_(inst_41599)){
var statearr_41622_44547 = state_41615__$1;
(statearr_41622_44547[(1)] = (8));

} else {
var statearr_41623_44548 = state_41615__$1;
(statearr_41623_44548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (3))){
var inst_41613 = (state_41615[(2)]);
var state_41615__$1 = state_41615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41615__$1,inst_41613);
} else {
if((state_val_41616 === (12))){
var state_41615__$1 = state_41615;
var statearr_41624_44555 = state_41615__$1;
(statearr_41624_44555[(2)] = null);

(statearr_41624_44555[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (2))){
var inst_41591 = (state_41615[(7)]);
var state_41615__$1 = state_41615;
if(cljs.core.truth_(inst_41591)){
var statearr_41627_44556 = state_41615__$1;
(statearr_41627_44556[(1)] = (4));

} else {
var statearr_41629_44557 = state_41615__$1;
(statearr_41629_44557[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (11))){
var inst_41605 = cljs.core.async.close_BANG_(ch);
var state_41615__$1 = state_41615;
var statearr_41630_44558 = state_41615__$1;
(statearr_41630_44558[(2)] = inst_41605);

(statearr_41630_44558[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (9))){
var state_41615__$1 = state_41615;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41631_44565 = state_41615__$1;
(statearr_41631_44565[(1)] = (11));

} else {
var statearr_41635_44566 = state_41615__$1;
(statearr_41635_44566[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (5))){
var inst_41591 = (state_41615[(7)]);
var state_41615__$1 = state_41615;
var statearr_41636_44571 = state_41615__$1;
(statearr_41636_44571[(2)] = inst_41591);

(statearr_41636_44571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (10))){
var inst_41610 = (state_41615[(2)]);
var state_41615__$1 = state_41615;
var statearr_41637_44572 = state_41615__$1;
(statearr_41637_44572[(2)] = inst_41610);

(statearr_41637_44572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (8))){
var inst_41591 = (state_41615[(7)]);
var inst_41601 = cljs.core.next(inst_41591);
var inst_41591__$1 = inst_41601;
var state_41615__$1 = (function (){var statearr_41638 = state_41615;
(statearr_41638[(7)] = inst_41591__$1);

return statearr_41638;
})();
var statearr_41639_44573 = state_41615__$1;
(statearr_41639_44573[(2)] = null);

(statearr_41639_44573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30487__auto__ = null;
var cljs$core$async$state_machine__30487__auto____0 = (function (){
var statearr_41640 = [null,null,null,null,null,null,null,null];
(statearr_41640[(0)] = cljs$core$async$state_machine__30487__auto__);

(statearr_41640[(1)] = (1));

return statearr_41640;
});
var cljs$core$async$state_machine__30487__auto____1 = (function (state_41615){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_41615);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e41641){var ex__30491__auto__ = e41641;
var statearr_41642_44574 = state_41615;
(statearr_41642_44574[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_41615[(4)]))){
var statearr_41643_44576 = state_41615;
(statearr_41643_44576[(1)] = cljs.core.first((state_41615[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44577 = state_41615;
state_41615 = G__44577;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$state_machine__30487__auto__ = function(state_41615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30487__auto____1.call(this,state_41615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30487__auto____0;
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30487__auto____1;
return cljs$core$async$state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_41644 = f__31239__auto__();
(statearr_41644[(6)] = c__31235__auto__);

return statearr_41644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
}));

return c__31235__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__41655 = arguments.length;
switch (G__41655) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_44597 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_44597(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_44600 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_44600(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_44605 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_44605(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_44608 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_44608(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41686 = (function (ch,cs,meta41687){
this.ch = ch;
this.cs = cs;
this.meta41687 = meta41687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41688,meta41687__$1){
var self__ = this;
var _41688__$1 = this;
return (new cljs.core.async.t_cljs$core$async41686(self__.ch,self__.cs,meta41687__$1));
}));

(cljs.core.async.t_cljs$core$async41686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41688){
var self__ = this;
var _41688__$1 = this;
return self__.meta41687;
}));

(cljs.core.async.t_cljs$core$async41686.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41686.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async41686.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41686.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async41686.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async41686.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async41686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41687","meta41687",-1782634705,null)], null);
}));

(cljs.core.async.t_cljs$core$async41686.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41686");

(cljs.core.async.t_cljs$core$async41686.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async41686");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41686.
 */
cljs.core.async.__GT_t_cljs$core$async41686 = (function cljs$core$async$__GT_t_cljs$core$async41686(ch,cs,meta41687){
return (new cljs.core.async.t_cljs$core$async41686(ch,cs,meta41687));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async41686(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__31235__auto___44614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_41875){
var state_val_41876 = (state_41875[(1)]);
if((state_val_41876 === (7))){
var inst_41867 = (state_41875[(2)]);
var state_41875__$1 = state_41875;
var statearr_41883_44615 = state_41875__$1;
(statearr_41883_44615[(2)] = inst_41867);

(statearr_41883_44615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (20))){
var inst_41752 = (state_41875[(7)]);
var inst_41766 = cljs.core.first(inst_41752);
var inst_41767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41766,(0),null);
var inst_41768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41766,(1),null);
var state_41875__$1 = (function (){var statearr_41886 = state_41875;
(statearr_41886[(8)] = inst_41767);

return statearr_41886;
})();
if(cljs.core.truth_(inst_41768)){
var statearr_41888_44616 = state_41875__$1;
(statearr_41888_44616[(1)] = (22));

} else {
var statearr_41891_44617 = state_41875__$1;
(statearr_41891_44617[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (27))){
var inst_41806 = (state_41875[(9)]);
var inst_41812 = (state_41875[(10)]);
var inst_41714 = (state_41875[(11)]);
var inst_41804 = (state_41875[(12)]);
var inst_41812__$1 = cljs.core._nth(inst_41804,inst_41806);
var inst_41813 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41812__$1,inst_41714,done);
var state_41875__$1 = (function (){var statearr_41898 = state_41875;
(statearr_41898[(10)] = inst_41812__$1);

return statearr_41898;
})();
if(cljs.core.truth_(inst_41813)){
var statearr_41901_44624 = state_41875__$1;
(statearr_41901_44624[(1)] = (30));

} else {
var statearr_41903_44625 = state_41875__$1;
(statearr_41903_44625[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (1))){
var state_41875__$1 = state_41875;
var statearr_41905_44627 = state_41875__$1;
(statearr_41905_44627[(2)] = null);

(statearr_41905_44627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (24))){
var inst_41752 = (state_41875[(7)]);
var inst_41778 = (state_41875[(2)]);
var inst_41779 = cljs.core.next(inst_41752);
var inst_41725 = inst_41779;
var inst_41726 = null;
var inst_41727 = (0);
var inst_41728 = (0);
var state_41875__$1 = (function (){var statearr_41907 = state_41875;
(statearr_41907[(13)] = inst_41725);

(statearr_41907[(14)] = inst_41727);

(statearr_41907[(15)] = inst_41778);

(statearr_41907[(16)] = inst_41726);

(statearr_41907[(17)] = inst_41728);

return statearr_41907;
})();
var statearr_41910_44633 = state_41875__$1;
(statearr_41910_44633[(2)] = null);

(statearr_41910_44633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (39))){
var state_41875__$1 = state_41875;
var statearr_41915_44637 = state_41875__$1;
(statearr_41915_44637[(2)] = null);

(statearr_41915_44637[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (4))){
var inst_41714 = (state_41875[(11)]);
var inst_41714__$1 = (state_41875[(2)]);
var inst_41715 = (inst_41714__$1 == null);
var state_41875__$1 = (function (){var statearr_41917 = state_41875;
(statearr_41917[(11)] = inst_41714__$1);

return statearr_41917;
})();
if(cljs.core.truth_(inst_41715)){
var statearr_41920_44645 = state_41875__$1;
(statearr_41920_44645[(1)] = (5));

} else {
var statearr_41922_44646 = state_41875__$1;
(statearr_41922_44646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (15))){
var inst_41725 = (state_41875[(13)]);
var inst_41727 = (state_41875[(14)]);
var inst_41726 = (state_41875[(16)]);
var inst_41728 = (state_41875[(17)]);
var inst_41746 = (state_41875[(2)]);
var inst_41748 = (inst_41728 + (1));
var tmp41912 = inst_41725;
var tmp41913 = inst_41727;
var tmp41914 = inst_41726;
var inst_41725__$1 = tmp41912;
var inst_41726__$1 = tmp41914;
var inst_41727__$1 = tmp41913;
var inst_41728__$1 = inst_41748;
var state_41875__$1 = (function (){var statearr_41929 = state_41875;
(statearr_41929[(13)] = inst_41725__$1);

(statearr_41929[(14)] = inst_41727__$1);

(statearr_41929[(18)] = inst_41746);

(statearr_41929[(16)] = inst_41726__$1);

(statearr_41929[(17)] = inst_41728__$1);

return statearr_41929;
})();
var statearr_41931_44652 = state_41875__$1;
(statearr_41931_44652[(2)] = null);

(statearr_41931_44652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (21))){
var inst_41782 = (state_41875[(2)]);
var state_41875__$1 = state_41875;
var statearr_41939_44654 = state_41875__$1;
(statearr_41939_44654[(2)] = inst_41782);

(statearr_41939_44654[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (31))){
var inst_41812 = (state_41875[(10)]);
var inst_41817 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_41812);
var state_41875__$1 = state_41875;
var statearr_41941_44655 = state_41875__$1;
(statearr_41941_44655[(2)] = inst_41817);

(statearr_41941_44655[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (32))){
var inst_41803 = (state_41875[(19)]);
var inst_41805 = (state_41875[(20)]);
var inst_41806 = (state_41875[(9)]);
var inst_41804 = (state_41875[(12)]);
var inst_41819 = (state_41875[(2)]);
var inst_41822 = (inst_41806 + (1));
var tmp41935 = inst_41803;
var tmp41936 = inst_41805;
var tmp41937 = inst_41804;
var inst_41803__$1 = tmp41935;
var inst_41804__$1 = tmp41937;
var inst_41805__$1 = tmp41936;
var inst_41806__$1 = inst_41822;
var state_41875__$1 = (function (){var statearr_41946 = state_41875;
(statearr_41946[(19)] = inst_41803__$1);

(statearr_41946[(20)] = inst_41805__$1);

(statearr_41946[(21)] = inst_41819);

(statearr_41946[(9)] = inst_41806__$1);

(statearr_41946[(12)] = inst_41804__$1);

return statearr_41946;
})();
var statearr_41948_44657 = state_41875__$1;
(statearr_41948_44657[(2)] = null);

(statearr_41948_44657[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (40))){
var inst_41838 = (state_41875[(22)]);
var inst_41843 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_41838);
var state_41875__$1 = state_41875;
var statearr_41954_44658 = state_41875__$1;
(statearr_41954_44658[(2)] = inst_41843);

(statearr_41954_44658[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (33))){
var inst_41825 = (state_41875[(23)]);
var inst_41827 = cljs.core.chunked_seq_QMARK_(inst_41825);
var state_41875__$1 = state_41875;
if(inst_41827){
var statearr_41958_44659 = state_41875__$1;
(statearr_41958_44659[(1)] = (36));

} else {
var statearr_41959_44660 = state_41875__$1;
(statearr_41959_44660[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (13))){
var inst_41739 = (state_41875[(24)]);
var inst_41742 = cljs.core.async.close_BANG_(inst_41739);
var state_41875__$1 = state_41875;
var statearr_41962_44662 = state_41875__$1;
(statearr_41962_44662[(2)] = inst_41742);

(statearr_41962_44662[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (22))){
var inst_41767 = (state_41875[(8)]);
var inst_41775 = cljs.core.async.close_BANG_(inst_41767);
var state_41875__$1 = state_41875;
var statearr_41970_44663 = state_41875__$1;
(statearr_41970_44663[(2)] = inst_41775);

(statearr_41970_44663[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (36))){
var inst_41825 = (state_41875[(23)]);
var inst_41831 = cljs.core.chunk_first(inst_41825);
var inst_41832 = cljs.core.chunk_rest(inst_41825);
var inst_41833 = cljs.core.count(inst_41831);
var inst_41803 = inst_41832;
var inst_41804 = inst_41831;
var inst_41805 = inst_41833;
var inst_41806 = (0);
var state_41875__$1 = (function (){var statearr_41972 = state_41875;
(statearr_41972[(19)] = inst_41803);

(statearr_41972[(20)] = inst_41805);

(statearr_41972[(9)] = inst_41806);

(statearr_41972[(12)] = inst_41804);

return statearr_41972;
})();
var statearr_41973_44670 = state_41875__$1;
(statearr_41973_44670[(2)] = null);

(statearr_41973_44670[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (41))){
var inst_41825 = (state_41875[(23)]);
var inst_41845 = (state_41875[(2)]);
var inst_41846 = cljs.core.next(inst_41825);
var inst_41803 = inst_41846;
var inst_41804 = null;
var inst_41805 = (0);
var inst_41806 = (0);
var state_41875__$1 = (function (){var statearr_41980 = state_41875;
(statearr_41980[(19)] = inst_41803);

(statearr_41980[(20)] = inst_41805);

(statearr_41980[(9)] = inst_41806);

(statearr_41980[(25)] = inst_41845);

(statearr_41980[(12)] = inst_41804);

return statearr_41980;
})();
var statearr_41982_44675 = state_41875__$1;
(statearr_41982_44675[(2)] = null);

(statearr_41982_44675[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (43))){
var state_41875__$1 = state_41875;
var statearr_41984_44676 = state_41875__$1;
(statearr_41984_44676[(2)] = null);

(statearr_41984_44676[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (29))){
var inst_41855 = (state_41875[(2)]);
var state_41875__$1 = state_41875;
var statearr_41988_44677 = state_41875__$1;
(statearr_41988_44677[(2)] = inst_41855);

(statearr_41988_44677[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (44))){
var inst_41864 = (state_41875[(2)]);
var state_41875__$1 = (function (){var statearr_41990 = state_41875;
(statearr_41990[(26)] = inst_41864);

return statearr_41990;
})();
var statearr_41995_44678 = state_41875__$1;
(statearr_41995_44678[(2)] = null);

(statearr_41995_44678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (6))){
var inst_41793 = (state_41875[(27)]);
var inst_41791 = cljs.core.deref(cs);
var inst_41793__$1 = cljs.core.keys(inst_41791);
var inst_41795 = cljs.core.count(inst_41793__$1);
var inst_41796 = cljs.core.reset_BANG_(dctr,inst_41795);
var inst_41802 = cljs.core.seq(inst_41793__$1);
var inst_41803 = inst_41802;
var inst_41804 = null;
var inst_41805 = (0);
var inst_41806 = (0);
var state_41875__$1 = (function (){var statearr_42000 = state_41875;
(statearr_42000[(19)] = inst_41803);

(statearr_42000[(20)] = inst_41805);

(statearr_42000[(9)] = inst_41806);

(statearr_42000[(12)] = inst_41804);

(statearr_42000[(28)] = inst_41796);

(statearr_42000[(27)] = inst_41793__$1);

return statearr_42000;
})();
var statearr_42001_44679 = state_41875__$1;
(statearr_42001_44679[(2)] = null);

(statearr_42001_44679[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (28))){
var inst_41825 = (state_41875[(23)]);
var inst_41803 = (state_41875[(19)]);
var inst_41825__$1 = cljs.core.seq(inst_41803);
var state_41875__$1 = (function (){var statearr_42009 = state_41875;
(statearr_42009[(23)] = inst_41825__$1);

return statearr_42009;
})();
if(inst_41825__$1){
var statearr_42013_44680 = state_41875__$1;
(statearr_42013_44680[(1)] = (33));

} else {
var statearr_42015_44681 = state_41875__$1;
(statearr_42015_44681[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (25))){
var inst_41805 = (state_41875[(20)]);
var inst_41806 = (state_41875[(9)]);
var inst_41808 = (inst_41806 < inst_41805);
var inst_41809 = inst_41808;
var state_41875__$1 = state_41875;
if(cljs.core.truth_(inst_41809)){
var statearr_42019_44682 = state_41875__$1;
(statearr_42019_44682[(1)] = (27));

} else {
var statearr_42021_44683 = state_41875__$1;
(statearr_42021_44683[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (34))){
var state_41875__$1 = state_41875;
var statearr_42022_44684 = state_41875__$1;
(statearr_42022_44684[(2)] = null);

(statearr_42022_44684[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (17))){
var state_41875__$1 = state_41875;
var statearr_42028_44685 = state_41875__$1;
(statearr_42028_44685[(2)] = null);

(statearr_42028_44685[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (3))){
var inst_41869 = (state_41875[(2)]);
var state_41875__$1 = state_41875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41875__$1,inst_41869);
} else {
if((state_val_41876 === (12))){
var inst_41787 = (state_41875[(2)]);
var state_41875__$1 = state_41875;
var statearr_42033_44690 = state_41875__$1;
(statearr_42033_44690[(2)] = inst_41787);

(statearr_42033_44690[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (2))){
var state_41875__$1 = state_41875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41875__$1,(4),ch);
} else {
if((state_val_41876 === (23))){
var state_41875__$1 = state_41875;
var statearr_42041_44696 = state_41875__$1;
(statearr_42041_44696[(2)] = null);

(statearr_42041_44696[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (35))){
var inst_41852 = (state_41875[(2)]);
var state_41875__$1 = state_41875;
var statearr_42047_44698 = state_41875__$1;
(statearr_42047_44698[(2)] = inst_41852);

(statearr_42047_44698[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (19))){
var inst_41752 = (state_41875[(7)]);
var inst_41758 = cljs.core.chunk_first(inst_41752);
var inst_41759 = cljs.core.chunk_rest(inst_41752);
var inst_41760 = cljs.core.count(inst_41758);
var inst_41725 = inst_41759;
var inst_41726 = inst_41758;
var inst_41727 = inst_41760;
var inst_41728 = (0);
var state_41875__$1 = (function (){var statearr_42052 = state_41875;
(statearr_42052[(13)] = inst_41725);

(statearr_42052[(14)] = inst_41727);

(statearr_42052[(16)] = inst_41726);

(statearr_42052[(17)] = inst_41728);

return statearr_42052;
})();
var statearr_42056_44703 = state_41875__$1;
(statearr_42056_44703[(2)] = null);

(statearr_42056_44703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (11))){
var inst_41725 = (state_41875[(13)]);
var inst_41752 = (state_41875[(7)]);
var inst_41752__$1 = cljs.core.seq(inst_41725);
var state_41875__$1 = (function (){var statearr_42058 = state_41875;
(statearr_42058[(7)] = inst_41752__$1);

return statearr_42058;
})();
if(inst_41752__$1){
var statearr_42060_44704 = state_41875__$1;
(statearr_42060_44704[(1)] = (16));

} else {
var statearr_42063_44705 = state_41875__$1;
(statearr_42063_44705[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (9))){
var inst_41789 = (state_41875[(2)]);
var state_41875__$1 = state_41875;
var statearr_42068_44709 = state_41875__$1;
(statearr_42068_44709[(2)] = inst_41789);

(statearr_42068_44709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (5))){
var inst_41722 = cljs.core.deref(cs);
var inst_41723 = cljs.core.seq(inst_41722);
var inst_41725 = inst_41723;
var inst_41726 = null;
var inst_41727 = (0);
var inst_41728 = (0);
var state_41875__$1 = (function (){var statearr_42072 = state_41875;
(statearr_42072[(13)] = inst_41725);

(statearr_42072[(14)] = inst_41727);

(statearr_42072[(16)] = inst_41726);

(statearr_42072[(17)] = inst_41728);

return statearr_42072;
})();
var statearr_42075_44712 = state_41875__$1;
(statearr_42075_44712[(2)] = null);

(statearr_42075_44712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (14))){
var state_41875__$1 = state_41875;
var statearr_42076_44716 = state_41875__$1;
(statearr_42076_44716[(2)] = null);

(statearr_42076_44716[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (45))){
var inst_41861 = (state_41875[(2)]);
var state_41875__$1 = state_41875;
var statearr_42081_44717 = state_41875__$1;
(statearr_42081_44717[(2)] = inst_41861);

(statearr_42081_44717[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (26))){
var inst_41793 = (state_41875[(27)]);
var inst_41857 = (state_41875[(2)]);
var inst_41858 = cljs.core.seq(inst_41793);
var state_41875__$1 = (function (){var statearr_42085 = state_41875;
(statearr_42085[(29)] = inst_41857);

return statearr_42085;
})();
if(inst_41858){
var statearr_42088_44718 = state_41875__$1;
(statearr_42088_44718[(1)] = (42));

} else {
var statearr_42089_44719 = state_41875__$1;
(statearr_42089_44719[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (16))){
var inst_41752 = (state_41875[(7)]);
var inst_41756 = cljs.core.chunked_seq_QMARK_(inst_41752);
var state_41875__$1 = state_41875;
if(inst_41756){
var statearr_42092_44721 = state_41875__$1;
(statearr_42092_44721[(1)] = (19));

} else {
var statearr_42094_44728 = state_41875__$1;
(statearr_42094_44728[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (38))){
var inst_41849 = (state_41875[(2)]);
var state_41875__$1 = state_41875;
var statearr_42095_44729 = state_41875__$1;
(statearr_42095_44729[(2)] = inst_41849);

(statearr_42095_44729[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (30))){
var state_41875__$1 = state_41875;
var statearr_42096_44730 = state_41875__$1;
(statearr_42096_44730[(2)] = null);

(statearr_42096_44730[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (10))){
var inst_41726 = (state_41875[(16)]);
var inst_41728 = (state_41875[(17)]);
var inst_41737 = cljs.core._nth(inst_41726,inst_41728);
var inst_41739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41737,(0),null);
var inst_41740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41737,(1),null);
var state_41875__$1 = (function (){var statearr_42102 = state_41875;
(statearr_42102[(24)] = inst_41739);

return statearr_42102;
})();
if(cljs.core.truth_(inst_41740)){
var statearr_42105_44731 = state_41875__$1;
(statearr_42105_44731[(1)] = (13));

} else {
var statearr_42107_44732 = state_41875__$1;
(statearr_42107_44732[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (18))){
var inst_41785 = (state_41875[(2)]);
var state_41875__$1 = state_41875;
var statearr_42110_44735 = state_41875__$1;
(statearr_42110_44735[(2)] = inst_41785);

(statearr_42110_44735[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (42))){
var state_41875__$1 = state_41875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41875__$1,(45),dchan);
} else {
if((state_val_41876 === (37))){
var inst_41825 = (state_41875[(23)]);
var inst_41714 = (state_41875[(11)]);
var inst_41838 = (state_41875[(22)]);
var inst_41838__$1 = cljs.core.first(inst_41825);
var inst_41840 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41838__$1,inst_41714,done);
var state_41875__$1 = (function (){var statearr_42115 = state_41875;
(statearr_42115[(22)] = inst_41838__$1);

return statearr_42115;
})();
if(cljs.core.truth_(inst_41840)){
var statearr_42116_44738 = state_41875__$1;
(statearr_42116_44738[(1)] = (39));

} else {
var statearr_42117_44739 = state_41875__$1;
(statearr_42117_44739[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41876 === (8))){
var inst_41727 = (state_41875[(14)]);
var inst_41728 = (state_41875[(17)]);
var inst_41731 = (inst_41728 < inst_41727);
var inst_41732 = inst_41731;
var state_41875__$1 = state_41875;
if(cljs.core.truth_(inst_41732)){
var statearr_42120_44741 = state_41875__$1;
(statearr_42120_44741[(1)] = (10));

} else {
var statearr_42121_44742 = state_41875__$1;
(statearr_42121_44742[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30487__auto__ = null;
var cljs$core$async$mult_$_state_machine__30487__auto____0 = (function (){
var statearr_42130 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42130[(0)] = cljs$core$async$mult_$_state_machine__30487__auto__);

(statearr_42130[(1)] = (1));

return statearr_42130;
});
var cljs$core$async$mult_$_state_machine__30487__auto____1 = (function (state_41875){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_41875);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e42137){var ex__30491__auto__ = e42137;
var statearr_42139_44744 = state_41875;
(statearr_42139_44744[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_41875[(4)]))){
var statearr_42143_44746 = state_41875;
(statearr_42143_44746[(1)] = cljs.core.first((state_41875[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44749 = state_41875;
state_41875 = G__44749;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30487__auto__ = function(state_41875){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30487__auto____1.call(this,state_41875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30487__auto____0;
cljs$core$async$mult_$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30487__auto____1;
return cljs$core$async$mult_$_state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_42150 = f__31239__auto__();
(statearr_42150[(6)] = c__31235__auto___44614);

return statearr_42150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__42159 = arguments.length;
switch (G__42159) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_44758 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_44758(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_44766 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_44766(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_44778 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_44778(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_44782 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_44782(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_44787 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_44787(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___44795 = arguments.length;
var i__5727__auto___44798 = (0);
while(true){
if((i__5727__auto___44798 < len__5726__auto___44795)){
args__5732__auto__.push((arguments[i__5727__auto___44798]));

var G__44802 = (i__5727__auto___44798 + (1));
i__5727__auto___44798 = G__44802;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42264){
var map__42265 = p__42264;
var map__42265__$1 = cljs.core.__destructure_map(map__42265);
var opts = map__42265__$1;
var statearr_42268_44808 = state;
(statearr_42268_44808[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_42271_44820 = state;
(statearr_42271_44820[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_42273_44821 = state;
(statearr_42273_44821[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42251){
var G__42252 = cljs.core.first(seq42251);
var seq42251__$1 = cljs.core.next(seq42251);
var G__42253 = cljs.core.first(seq42251__$1);
var seq42251__$2 = cljs.core.next(seq42251__$1);
var G__42254 = cljs.core.first(seq42251__$2);
var seq42251__$3 = cljs.core.next(seq42251__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42252,G__42253,G__42254,seq42251__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42307 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42308){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta42308 = meta42308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42309,meta42308__$1){
var self__ = this;
var _42309__$1 = this;
return (new cljs.core.async.t_cljs$core$async42307(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta42308__$1));
}));

(cljs.core.async.t_cljs$core$async42307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42309){
var self__ = this;
var _42309__$1 = this;
return self__.meta42308;
}));

(cljs.core.async.t_cljs$core$async42307.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42307.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async42307.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42307.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async42307.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async42307.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async42307.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async42307.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async42307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta42308","meta42308",-873072425,null)], null);
}));

(cljs.core.async.t_cljs$core$async42307.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42307");

(cljs.core.async.t_cljs$core$async42307.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async42307");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42307.
 */
cljs.core.async.__GT_t_cljs$core$async42307 = (function cljs$core$async$__GT_t_cljs$core$async42307(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42308){
return (new cljs.core.async.t_cljs$core$async42307(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42308));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async42307(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__31235__auto___44866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_42453){
var state_val_42454 = (state_42453[(1)]);
if((state_val_42454 === (7))){
var inst_42405 = (state_42453[(2)]);
var state_42453__$1 = state_42453;
if(cljs.core.truth_(inst_42405)){
var statearr_42459_44872 = state_42453__$1;
(statearr_42459_44872[(1)] = (8));

} else {
var statearr_42460_44873 = state_42453__$1;
(statearr_42460_44873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42454 === (20))){
var inst_42398 = (state_42453[(7)]);
var state_42453__$1 = state_42453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42453__$1,(23),out,inst_42398);
} else {
if((state_val_42454 === (1))){
var inst_42380 = calc_state();
var inst_42381 = cljs.core.__destructure_map(inst_42380);
var inst_42382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42381,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42381,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42381,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42385 = inst_42380;
var state_42453__$1 = (function (){var statearr_42467 = state_42453;
(statearr_42467[(8)] = inst_42385);

(statearr_42467[(9)] = inst_42384);

(statearr_42467[(10)] = inst_42382);

(statearr_42467[(11)] = inst_42383);

return statearr_42467;
})();
var statearr_42468_44883 = state_42453__$1;
(statearr_42468_44883[(2)] = null);

(statearr_42468_44883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42454 === (24))){
var inst_42388 = (state_42453[(12)]);
var inst_42385 = inst_42388;
var state_42453__$1 = (function (){var statearr_42473 = state_42453;
(statearr_42473[(8)] = inst_42385);

return statearr_42473;
})();
var statearr_42474_44886 = state_42453__$1;
(statearr_42474_44886[(2)] = null);

(statearr_42474_44886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42454 === (4))){
var inst_42400 = (state_42453[(13)]);
var inst_42398 = (state_42453[(7)]);
var inst_42397 = (state_42453[(2)]);
var inst_42398__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42397,(0),null);
var inst_42399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42397,(1),null);
var inst_42400__$1 = (inst_42398__$1 == null);
var state_42453__$1 = (function (){var statearr_42475 = state_42453;
(statearr_42475[(14)] = inst_42399);

(statearr_42475[(13)] = inst_42400__$1);

(statearr_42475[(7)] = inst_42398__$1);

return statearr_42475;
})();
if(cljs.core.truth_(inst_42400__$1)){
var statearr_42476_44888 = state_42453__$1;
(statearr_42476_44888[(1)] = (5));

} else {
var statearr_42480_44891 = state_42453__$1;
(statearr_42480_44891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42454 === (15))){
var inst_42389 = (state_42453[(15)]);
var inst_42423 = (state_42453[(16)]);
var inst_42423__$1 = cljs.core.empty_QMARK_(inst_42389);
var state_42453__$1 = (function (){var statearr_42481 = state_42453;
(statearr_42481[(16)] = inst_42423__$1);

return statearr_42481;
})();
if(inst_42423__$1){
var statearr_42482_44892 = state_42453__$1;
(statearr_42482_44892[(1)] = (17));

} else {
var statearr_42483_44893 = state_42453__$1;
(statearr_42483_44893[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42454 === (21))){
var inst_42388 = (state_42453[(12)]);
var inst_42385 = inst_42388;
var state_42453__$1 = (function (){var statearr_42484 = state_42453;
(statearr_42484[(8)] = inst_42385);

return statearr_42484;
})();
var statearr_42485_44894 = state_42453__$1;
(statearr_42485_44894[(2)] = null);

(statearr_42485_44894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42454 === (13))){
var inst_42412 = (state_42453[(2)]);
var inst_42413 = calc_state();
var inst_42385 = inst_42413;
var state_42453__$1 = (function (){var statearr_42486 = state_42453;
(statearr_42486[(8)] = inst_42385);

(statearr_42486[(17)] = inst_42412);

return statearr_42486;
})();
var statearr_42487_44896 = state_42453__$1;
(statearr_42487_44896[(2)] = null);

(statearr_42487_44896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42454 === (22))){
var inst_42446 = (state_42453[(2)]);
var state_42453__$1 = state_42453;
var statearr_42492_44898 = state_42453__$1;
(statearr_42492_44898[(2)] = inst_42446);

(statearr_42492_44898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42454 === (6))){
var inst_42399 = (state_42453[(14)]);
var inst_42403 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42399,change);
var state_42453__$1 = state_42453;
var statearr_42496_44900 = state_42453__$1;
(statearr_42496_44900[(2)] = inst_42403);

(statearr_42496_44900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42454 === (25))){
var state_42453__$1 = state_42453;
var statearr_42497_44901 = state_42453__$1;
(statearr_42497_44901[(2)] = null);

(statearr_42497_44901[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42454 === (17))){
var inst_42399 = (state_42453[(14)]);
var inst_42390 = (state_42453[(18)]);
var inst_42425 = (inst_42390.cljs$core$IFn$_invoke$arity$1 ? inst_42390.cljs$core$IFn$_invoke$arity$1(inst_42399) : inst_42390.call(null, inst_42399));
var inst_42426 = cljs.core.not(inst_42425);
var state_42453__$1 = state_42453;
var statearr_42502_44903 = state_42453__$1;
(statearr_42502_44903[(2)] = inst_42426);

(statearr_42502_44903[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42454 === (3))){
var inst_42451 = (state_42453[(2)]);
var state_42453__$1 = state_42453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42453__$1,inst_42451);
} else {
if((state_val_42454 === (12))){
var state_42453__$1 = state_42453;
var statearr_42504_44908 = state_42453__$1;
(statearr_42504_44908[(2)] = null);

(statearr_42504_44908[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42454 === (2))){
var inst_42385 = (state_42453[(8)]);
var inst_42388 = (state_42453[(12)]);
var inst_42388__$1 = cljs.core.__destructure_map(inst_42385);
var inst_42389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42388__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42388__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42388__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42453__$1 = (function (){var statearr_42506 = state_42453;
(statearr_42506[(15)] = inst_42389);

(statearr_42506[(18)] = inst_42390);

(statearr_42506[(12)] = inst_42388__$1);

return statearr_42506;
})();
return cljs.core.async.ioc_alts_BANG_(state_42453__$1,(4),inst_42391);
} else {
if((state_val_42454 === (23))){
var inst_42437 = (state_42453[(2)]);
var state_42453__$1 = state_42453;
if(cljs.core.truth_(inst_42437)){
var statearr_42508_44922 = state_42453__$1;
(statearr_42508_44922[(1)] = (24));

} else {
var statearr_42509_44923 = state_42453__$1;
(statearr_42509_44923[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42454 === (19))){
var inst_42429 = (state_42453[(2)]);
var state_42453__$1 = state_42453;
var statearr_42510_44927 = state_42453__$1;
(statearr_42510_44927[(2)] = inst_42429);

(statearr_42510_44927[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42454 === (11))){
var inst_42399 = (state_42453[(14)]);
var inst_42409 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_42399);
var state_42453__$1 = state_42453;
var statearr_42512_44928 = state_42453__$1;
(statearr_42512_44928[(2)] = inst_42409);

(statearr_42512_44928[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42454 === (9))){
var inst_42399 = (state_42453[(14)]);
var inst_42416 = (state_42453[(19)]);
var inst_42389 = (state_42453[(15)]);
var inst_42416__$1 = (inst_42389.cljs$core$IFn$_invoke$arity$1 ? inst_42389.cljs$core$IFn$_invoke$arity$1(inst_42399) : inst_42389.call(null, inst_42399));
var state_42453__$1 = (function (){var statearr_42515 = state_42453;
(statearr_42515[(19)] = inst_42416__$1);

return statearr_42515;
})();
if(cljs.core.truth_(inst_42416__$1)){
var statearr_42516_44940 = state_42453__$1;
(statearr_42516_44940[(1)] = (14));

} else {
var statearr_42517_44941 = state_42453__$1;
(statearr_42517_44941[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42454 === (5))){
var inst_42400 = (state_42453[(13)]);
var state_42453__$1 = state_42453;
var statearr_42518_44942 = state_42453__$1;
(statearr_42518_44942[(2)] = inst_42400);

(statearr_42518_44942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42454 === (14))){
var inst_42416 = (state_42453[(19)]);
var state_42453__$1 = state_42453;
var statearr_42519_44943 = state_42453__$1;
(statearr_42519_44943[(2)] = inst_42416);

(statearr_42519_44943[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42454 === (26))){
var inst_42442 = (state_42453[(2)]);
var state_42453__$1 = state_42453;
var statearr_42520_44948 = state_42453__$1;
(statearr_42520_44948[(2)] = inst_42442);

(statearr_42520_44948[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42454 === (16))){
var inst_42431 = (state_42453[(2)]);
var state_42453__$1 = state_42453;
if(cljs.core.truth_(inst_42431)){
var statearr_42521_44957 = state_42453__$1;
(statearr_42521_44957[(1)] = (20));

} else {
var statearr_42522_44959 = state_42453__$1;
(statearr_42522_44959[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42454 === (10))){
var inst_42448 = (state_42453[(2)]);
var state_42453__$1 = state_42453;
var statearr_42523_44967 = state_42453__$1;
(statearr_42523_44967[(2)] = inst_42448);

(statearr_42523_44967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42454 === (18))){
var inst_42423 = (state_42453[(16)]);
var state_42453__$1 = state_42453;
var statearr_42524_44969 = state_42453__$1;
(statearr_42524_44969[(2)] = inst_42423);

(statearr_42524_44969[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42454 === (8))){
var inst_42398 = (state_42453[(7)]);
var inst_42407 = (inst_42398 == null);
var state_42453__$1 = state_42453;
if(cljs.core.truth_(inst_42407)){
var statearr_42527_44979 = state_42453__$1;
(statearr_42527_44979[(1)] = (11));

} else {
var statearr_42528_44985 = state_42453__$1;
(statearr_42528_44985[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30487__auto__ = null;
var cljs$core$async$mix_$_state_machine__30487__auto____0 = (function (){
var statearr_42530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42530[(0)] = cljs$core$async$mix_$_state_machine__30487__auto__);

(statearr_42530[(1)] = (1));

return statearr_42530;
});
var cljs$core$async$mix_$_state_machine__30487__auto____1 = (function (state_42453){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_42453);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e42531){var ex__30491__auto__ = e42531;
var statearr_42532_45017 = state_42453;
(statearr_42532_45017[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_42453[(4)]))){
var statearr_42533_45019 = state_42453;
(statearr_42533_45019[(1)] = cljs.core.first((state_42453[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45020 = state_42453;
state_42453 = G__45020;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30487__auto__ = function(state_42453){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30487__auto____1.call(this,state_42453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30487__auto____0;
cljs$core$async$mix_$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30487__auto____1;
return cljs$core$async$mix_$_state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_42558 = f__31239__auto__();
(statearr_42558[(6)] = c__31235__auto___44866);

return statearr_42558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_45032 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_45032(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_45067 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_45067(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_45084 = (function() {
var G__45085 = null;
var G__45085__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__45085__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__45085 = function(p,v){
switch(arguments.length){
case 1:
return G__45085__1.call(this,p);
case 2:
return G__45085__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45085.cljs$core$IFn$_invoke$arity$1 = G__45085__1;
G__45085.cljs$core$IFn$_invoke$arity$2 = G__45085__2;
return G__45085;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__42582 = arguments.length;
switch (G__42582) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45084(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45084(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42591 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42592){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42592 = meta42592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42593,meta42592__$1){
var self__ = this;
var _42593__$1 = this;
return (new cljs.core.async.t_cljs$core$async42591(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42592__$1));
}));

(cljs.core.async.t_cljs$core$async42591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42593){
var self__ = this;
var _42593__$1 = this;
return self__.meta42592;
}));

(cljs.core.async.t_cljs$core$async42591.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42591.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async42591.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42591.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async42591.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async42591.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async42591.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async42591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42592","meta42592",1861830138,null)], null);
}));

(cljs.core.async.t_cljs$core$async42591.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42591");

(cljs.core.async.t_cljs$core$async42591.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async42591");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42591.
 */
cljs.core.async.__GT_t_cljs$core$async42591 = (function cljs$core$async$__GT_t_cljs$core$async42591(ch,topic_fn,buf_fn,mults,ensure_mult,meta42592){
return (new cljs.core.async.t_cljs$core$async42591(ch,topic_fn,buf_fn,mults,ensure_mult,meta42592));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__42585 = arguments.length;
switch (G__42585) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__42583_SHARP_){
if(cljs.core.truth_((p1__42583_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__42583_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__42583_SHARP_.call(null, topic)))){
return p1__42583_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42583_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async42591(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__31235__auto___45137 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_42706){
var state_val_42708 = (state_42706[(1)]);
if((state_val_42708 === (7))){
var inst_42698 = (state_42706[(2)]);
var state_42706__$1 = state_42706;
var statearr_42718_45138 = state_42706__$1;
(statearr_42718_45138[(2)] = inst_42698);

(statearr_42718_45138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (20))){
var state_42706__$1 = state_42706;
var statearr_42723_45144 = state_42706__$1;
(statearr_42723_45144[(2)] = null);

(statearr_42723_45144[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (1))){
var state_42706__$1 = state_42706;
var statearr_42731_45150 = state_42706__$1;
(statearr_42731_45150[(2)] = null);

(statearr_42731_45150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (24))){
var inst_42681 = (state_42706[(7)]);
var inst_42690 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_42681);
var state_42706__$1 = state_42706;
var statearr_42740_45157 = state_42706__$1;
(statearr_42740_45157[(2)] = inst_42690);

(statearr_42740_45157[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (4))){
var inst_42614 = (state_42706[(8)]);
var inst_42614__$1 = (state_42706[(2)]);
var inst_42616 = (inst_42614__$1 == null);
var state_42706__$1 = (function (){var statearr_42744 = state_42706;
(statearr_42744[(8)] = inst_42614__$1);

return statearr_42744;
})();
if(cljs.core.truth_(inst_42616)){
var statearr_42747_45162 = state_42706__$1;
(statearr_42747_45162[(1)] = (5));

} else {
var statearr_42748_45163 = state_42706__$1;
(statearr_42748_45163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (15))){
var inst_42674 = (state_42706[(2)]);
var state_42706__$1 = state_42706;
var statearr_42749_45168 = state_42706__$1;
(statearr_42749_45168[(2)] = inst_42674);

(statearr_42749_45168[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (21))){
var inst_42695 = (state_42706[(2)]);
var state_42706__$1 = (function (){var statearr_42753 = state_42706;
(statearr_42753[(9)] = inst_42695);

return statearr_42753;
})();
var statearr_42755_45178 = state_42706__$1;
(statearr_42755_45178[(2)] = null);

(statearr_42755_45178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (13))){
var inst_42651 = (state_42706[(10)]);
var inst_42653 = cljs.core.chunked_seq_QMARK_(inst_42651);
var state_42706__$1 = state_42706;
if(inst_42653){
var statearr_42756_45179 = state_42706__$1;
(statearr_42756_45179[(1)] = (16));

} else {
var statearr_42757_45180 = state_42706__$1;
(statearr_42757_45180[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (22))){
var inst_42687 = (state_42706[(2)]);
var state_42706__$1 = state_42706;
if(cljs.core.truth_(inst_42687)){
var statearr_42766_45181 = state_42706__$1;
(statearr_42766_45181[(1)] = (23));

} else {
var statearr_42767_45182 = state_42706__$1;
(statearr_42767_45182[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (6))){
var inst_42614 = (state_42706[(8)]);
var inst_42681 = (state_42706[(7)]);
var inst_42683 = (state_42706[(11)]);
var inst_42681__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_42614) : topic_fn.call(null, inst_42614));
var inst_42682 = cljs.core.deref(mults);
var inst_42683__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42682,inst_42681__$1);
var state_42706__$1 = (function (){var statearr_42774 = state_42706;
(statearr_42774[(7)] = inst_42681__$1);

(statearr_42774[(11)] = inst_42683__$1);

return statearr_42774;
})();
if(cljs.core.truth_(inst_42683__$1)){
var statearr_42775_45188 = state_42706__$1;
(statearr_42775_45188[(1)] = (19));

} else {
var statearr_42777_45189 = state_42706__$1;
(statearr_42777_45189[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (25))){
var inst_42692 = (state_42706[(2)]);
var state_42706__$1 = state_42706;
var statearr_42779_45190 = state_42706__$1;
(statearr_42779_45190[(2)] = inst_42692);

(statearr_42779_45190[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (17))){
var inst_42651 = (state_42706[(10)]);
var inst_42664 = cljs.core.first(inst_42651);
var inst_42665 = cljs.core.async.muxch_STAR_(inst_42664);
var inst_42666 = cljs.core.async.close_BANG_(inst_42665);
var inst_42668 = cljs.core.next(inst_42651);
var inst_42632 = inst_42668;
var inst_42633 = null;
var inst_42634 = (0);
var inst_42635 = (0);
var state_42706__$1 = (function (){var statearr_42785 = state_42706;
(statearr_42785[(12)] = inst_42666);

(statearr_42785[(13)] = inst_42633);

(statearr_42785[(14)] = inst_42635);

(statearr_42785[(15)] = inst_42634);

(statearr_42785[(16)] = inst_42632);

return statearr_42785;
})();
var statearr_42786_45192 = state_42706__$1;
(statearr_42786_45192[(2)] = null);

(statearr_42786_45192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (3))){
var inst_42700 = (state_42706[(2)]);
var state_42706__$1 = state_42706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42706__$1,inst_42700);
} else {
if((state_val_42708 === (12))){
var inst_42676 = (state_42706[(2)]);
var state_42706__$1 = state_42706;
var statearr_42787_45194 = state_42706__$1;
(statearr_42787_45194[(2)] = inst_42676);

(statearr_42787_45194[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (2))){
var state_42706__$1 = state_42706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42706__$1,(4),ch);
} else {
if((state_val_42708 === (23))){
var state_42706__$1 = state_42706;
var statearr_42789_45195 = state_42706__$1;
(statearr_42789_45195[(2)] = null);

(statearr_42789_45195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (19))){
var inst_42614 = (state_42706[(8)]);
var inst_42683 = (state_42706[(11)]);
var inst_42685 = cljs.core.async.muxch_STAR_(inst_42683);
var state_42706__$1 = state_42706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42706__$1,(22),inst_42685,inst_42614);
} else {
if((state_val_42708 === (11))){
var inst_42651 = (state_42706[(10)]);
var inst_42632 = (state_42706[(16)]);
var inst_42651__$1 = cljs.core.seq(inst_42632);
var state_42706__$1 = (function (){var statearr_42798 = state_42706;
(statearr_42798[(10)] = inst_42651__$1);

return statearr_42798;
})();
if(inst_42651__$1){
var statearr_42803_45197 = state_42706__$1;
(statearr_42803_45197[(1)] = (13));

} else {
var statearr_42805_45198 = state_42706__$1;
(statearr_42805_45198[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (9))){
var inst_42678 = (state_42706[(2)]);
var state_42706__$1 = state_42706;
var statearr_42808_45201 = state_42706__$1;
(statearr_42808_45201[(2)] = inst_42678);

(statearr_42808_45201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (5))){
var inst_42624 = cljs.core.deref(mults);
var inst_42625 = cljs.core.vals(inst_42624);
var inst_42626 = cljs.core.seq(inst_42625);
var inst_42632 = inst_42626;
var inst_42633 = null;
var inst_42634 = (0);
var inst_42635 = (0);
var state_42706__$1 = (function (){var statearr_42813 = state_42706;
(statearr_42813[(13)] = inst_42633);

(statearr_42813[(14)] = inst_42635);

(statearr_42813[(15)] = inst_42634);

(statearr_42813[(16)] = inst_42632);

return statearr_42813;
})();
var statearr_42815_45207 = state_42706__$1;
(statearr_42815_45207[(2)] = null);

(statearr_42815_45207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (14))){
var state_42706__$1 = state_42706;
var statearr_42822_45213 = state_42706__$1;
(statearr_42822_45213[(2)] = null);

(statearr_42822_45213[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (16))){
var inst_42651 = (state_42706[(10)]);
var inst_42655 = cljs.core.chunk_first(inst_42651);
var inst_42656 = cljs.core.chunk_rest(inst_42651);
var inst_42659 = cljs.core.count(inst_42655);
var inst_42632 = inst_42656;
var inst_42633 = inst_42655;
var inst_42634 = inst_42659;
var inst_42635 = (0);
var state_42706__$1 = (function (){var statearr_42826 = state_42706;
(statearr_42826[(13)] = inst_42633);

(statearr_42826[(14)] = inst_42635);

(statearr_42826[(15)] = inst_42634);

(statearr_42826[(16)] = inst_42632);

return statearr_42826;
})();
var statearr_42831_45229 = state_42706__$1;
(statearr_42831_45229[(2)] = null);

(statearr_42831_45229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (10))){
var inst_42633 = (state_42706[(13)]);
var inst_42635 = (state_42706[(14)]);
var inst_42634 = (state_42706[(15)]);
var inst_42632 = (state_42706[(16)]);
var inst_42642 = cljs.core._nth(inst_42633,inst_42635);
var inst_42646 = cljs.core.async.muxch_STAR_(inst_42642);
var inst_42647 = cljs.core.async.close_BANG_(inst_42646);
var inst_42648 = (inst_42635 + (1));
var tmp42819 = inst_42633;
var tmp42820 = inst_42634;
var tmp42821 = inst_42632;
var inst_42632__$1 = tmp42821;
var inst_42633__$1 = tmp42819;
var inst_42634__$1 = tmp42820;
var inst_42635__$1 = inst_42648;
var state_42706__$1 = (function (){var statearr_42844 = state_42706;
(statearr_42844[(13)] = inst_42633__$1);

(statearr_42844[(14)] = inst_42635__$1);

(statearr_42844[(15)] = inst_42634__$1);

(statearr_42844[(17)] = inst_42647);

(statearr_42844[(16)] = inst_42632__$1);

return statearr_42844;
})();
var statearr_42845_45244 = state_42706__$1;
(statearr_42845_45244[(2)] = null);

(statearr_42845_45244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (18))){
var inst_42671 = (state_42706[(2)]);
var state_42706__$1 = state_42706;
var statearr_42848_45252 = state_42706__$1;
(statearr_42848_45252[(2)] = inst_42671);

(statearr_42848_45252[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (8))){
var inst_42635 = (state_42706[(14)]);
var inst_42634 = (state_42706[(15)]);
var inst_42638 = (inst_42635 < inst_42634);
var inst_42639 = inst_42638;
var state_42706__$1 = state_42706;
if(cljs.core.truth_(inst_42639)){
var statearr_42849_45269 = state_42706__$1;
(statearr_42849_45269[(1)] = (10));

} else {
var statearr_42850_45270 = state_42706__$1;
(statearr_42850_45270[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30487__auto__ = null;
var cljs$core$async$state_machine__30487__auto____0 = (function (){
var statearr_42857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42857[(0)] = cljs$core$async$state_machine__30487__auto__);

(statearr_42857[(1)] = (1));

return statearr_42857;
});
var cljs$core$async$state_machine__30487__auto____1 = (function (state_42706){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_42706);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e42859){var ex__30491__auto__ = e42859;
var statearr_42860_45279 = state_42706;
(statearr_42860_45279[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_42706[(4)]))){
var statearr_42861_45284 = state_42706;
(statearr_42861_45284[(1)] = cljs.core.first((state_42706[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45291 = state_42706;
state_42706 = G__45291;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$state_machine__30487__auto__ = function(state_42706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30487__auto____1.call(this,state_42706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30487__auto____0;
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30487__auto____1;
return cljs$core$async$state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_42862 = f__31239__auto__();
(statearr_42862[(6)] = c__31235__auto___45137);

return statearr_42862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__42865 = arguments.length;
switch (G__42865) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__42873 = arguments.length;
switch (G__42873) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__42881 = arguments.length;
switch (G__42881) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__31235__auto___45332 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_42928){
var state_val_42929 = (state_42928[(1)]);
if((state_val_42929 === (7))){
var state_42928__$1 = state_42928;
var statearr_42940_45334 = state_42928__$1;
(statearr_42940_45334[(2)] = null);

(statearr_42940_45334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42929 === (1))){
var state_42928__$1 = state_42928;
var statearr_42943_45335 = state_42928__$1;
(statearr_42943_45335[(2)] = null);

(statearr_42943_45335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42929 === (4))){
var inst_42889 = (state_42928[(7)]);
var inst_42888 = (state_42928[(8)]);
var inst_42891 = (inst_42889 < inst_42888);
var state_42928__$1 = state_42928;
if(cljs.core.truth_(inst_42891)){
var statearr_42961_45336 = state_42928__$1;
(statearr_42961_45336[(1)] = (6));

} else {
var statearr_42962_45338 = state_42928__$1;
(statearr_42962_45338[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42929 === (15))){
var inst_42914 = (state_42928[(9)]);
var inst_42919 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_42914);
var state_42928__$1 = state_42928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42928__$1,(17),out,inst_42919);
} else {
if((state_val_42929 === (13))){
var inst_42914 = (state_42928[(9)]);
var inst_42914__$1 = (state_42928[(2)]);
var inst_42915 = cljs.core.some(cljs.core.nil_QMARK_,inst_42914__$1);
var state_42928__$1 = (function (){var statearr_42966 = state_42928;
(statearr_42966[(9)] = inst_42914__$1);

return statearr_42966;
})();
if(cljs.core.truth_(inst_42915)){
var statearr_42967_45344 = state_42928__$1;
(statearr_42967_45344[(1)] = (14));

} else {
var statearr_42968_45345 = state_42928__$1;
(statearr_42968_45345[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42929 === (6))){
var state_42928__$1 = state_42928;
var statearr_42969_45346 = state_42928__$1;
(statearr_42969_45346[(2)] = null);

(statearr_42969_45346[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42929 === (17))){
var inst_42921 = (state_42928[(2)]);
var state_42928__$1 = (function (){var statearr_42971 = state_42928;
(statearr_42971[(10)] = inst_42921);

return statearr_42971;
})();
var statearr_42972_45347 = state_42928__$1;
(statearr_42972_45347[(2)] = null);

(statearr_42972_45347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42929 === (3))){
var inst_42926 = (state_42928[(2)]);
var state_42928__$1 = state_42928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42928__$1,inst_42926);
} else {
if((state_val_42929 === (12))){
var _ = (function (){var statearr_42973 = state_42928;
(statearr_42973[(4)] = cljs.core.rest((state_42928[(4)])));

return statearr_42973;
})();
var state_42928__$1 = state_42928;
var ex42970 = (state_42928__$1[(2)]);
var statearr_42974_45348 = state_42928__$1;
(statearr_42974_45348[(5)] = ex42970);


if((ex42970 instanceof Object)){
var statearr_42975_45349 = state_42928__$1;
(statearr_42975_45349[(1)] = (11));

(statearr_42975_45349[(5)] = null);

} else {
throw ex42970;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42929 === (2))){
var inst_42884 = cljs.core.reset_BANG_(dctr,cnt);
var inst_42888 = cnt;
var inst_42889 = (0);
var state_42928__$1 = (function (){var statearr_42976 = state_42928;
(statearr_42976[(11)] = inst_42884);

(statearr_42976[(7)] = inst_42889);

(statearr_42976[(8)] = inst_42888);

return statearr_42976;
})();
var statearr_42977_45354 = state_42928__$1;
(statearr_42977_45354[(2)] = null);

(statearr_42977_45354[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42929 === (11))){
var inst_42893 = (state_42928[(2)]);
var inst_42894 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_42928__$1 = (function (){var statearr_42982 = state_42928;
(statearr_42982[(12)] = inst_42893);

return statearr_42982;
})();
var statearr_42983_45359 = state_42928__$1;
(statearr_42983_45359[(2)] = inst_42894);

(statearr_42983_45359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42929 === (9))){
var inst_42889 = (state_42928[(7)]);
var _ = (function (){var statearr_42990 = state_42928;
(statearr_42990[(4)] = cljs.core.cons((12),(state_42928[(4)])));

return statearr_42990;
})();
var inst_42900 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_42889) : chs__$1.call(null, inst_42889));
var inst_42901 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_42889) : done.call(null, inst_42889));
var inst_42902 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_42900,inst_42901);
var ___$1 = (function (){var statearr_42992 = state_42928;
(statearr_42992[(4)] = cljs.core.rest((state_42928[(4)])));

return statearr_42992;
})();
var state_42928__$1 = state_42928;
var statearr_42993_45371 = state_42928__$1;
(statearr_42993_45371[(2)] = inst_42902);

(statearr_42993_45371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42929 === (5))){
var inst_42912 = (state_42928[(2)]);
var state_42928__$1 = (function (){var statearr_42994 = state_42928;
(statearr_42994[(13)] = inst_42912);

return statearr_42994;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42928__$1,(13),dchan);
} else {
if((state_val_42929 === (14))){
var inst_42917 = cljs.core.async.close_BANG_(out);
var state_42928__$1 = state_42928;
var statearr_42996_45376 = state_42928__$1;
(statearr_42996_45376[(2)] = inst_42917);

(statearr_42996_45376[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42929 === (16))){
var inst_42924 = (state_42928[(2)]);
var state_42928__$1 = state_42928;
var statearr_43000_45385 = state_42928__$1;
(statearr_43000_45385[(2)] = inst_42924);

(statearr_43000_45385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42929 === (10))){
var inst_42889 = (state_42928[(7)]);
var inst_42905 = (state_42928[(2)]);
var inst_42906 = (inst_42889 + (1));
var inst_42889__$1 = inst_42906;
var state_42928__$1 = (function (){var statearr_43001 = state_42928;
(statearr_43001[(14)] = inst_42905);

(statearr_43001[(7)] = inst_42889__$1);

return statearr_43001;
})();
var statearr_43002_45387 = state_42928__$1;
(statearr_43002_45387[(2)] = null);

(statearr_43002_45387[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42929 === (8))){
var inst_42910 = (state_42928[(2)]);
var state_42928__$1 = state_42928;
var statearr_43003_45395 = state_42928__$1;
(statearr_43003_45395[(2)] = inst_42910);

(statearr_43003_45395[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30487__auto__ = null;
var cljs$core$async$state_machine__30487__auto____0 = (function (){
var statearr_43006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43006[(0)] = cljs$core$async$state_machine__30487__auto__);

(statearr_43006[(1)] = (1));

return statearr_43006;
});
var cljs$core$async$state_machine__30487__auto____1 = (function (state_42928){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_42928);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e43009){var ex__30491__auto__ = e43009;
var statearr_43011_45402 = state_42928;
(statearr_43011_45402[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_42928[(4)]))){
var statearr_43012_45407 = state_42928;
(statearr_43012_45407[(1)] = cljs.core.first((state_42928[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45408 = state_42928;
state_42928 = G__45408;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$state_machine__30487__auto__ = function(state_42928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30487__auto____1.call(this,state_42928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30487__auto____0;
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30487__auto____1;
return cljs$core$async$state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_43014 = f__31239__auto__();
(statearr_43014[(6)] = c__31235__auto___45332);

return statearr_43014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__43017 = arguments.length;
switch (G__43017) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31235__auto___45417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_43055){
var state_val_43056 = (state_43055[(1)]);
if((state_val_43056 === (7))){
var inst_43034 = (state_43055[(7)]);
var inst_43033 = (state_43055[(8)]);
var inst_43033__$1 = (state_43055[(2)]);
var inst_43034__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43033__$1,(0),null);
var inst_43035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43033__$1,(1),null);
var inst_43036 = (inst_43034__$1 == null);
var state_43055__$1 = (function (){var statearr_43060 = state_43055;
(statearr_43060[(9)] = inst_43035);

(statearr_43060[(7)] = inst_43034__$1);

(statearr_43060[(8)] = inst_43033__$1);

return statearr_43060;
})();
if(cljs.core.truth_(inst_43036)){
var statearr_43061_45427 = state_43055__$1;
(statearr_43061_45427[(1)] = (8));

} else {
var statearr_43062_45428 = state_43055__$1;
(statearr_43062_45428[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43056 === (1))){
var inst_43020 = cljs.core.vec(chs);
var inst_43021 = inst_43020;
var state_43055__$1 = (function (){var statearr_43063 = state_43055;
(statearr_43063[(10)] = inst_43021);

return statearr_43063;
})();
var statearr_43064_45429 = state_43055__$1;
(statearr_43064_45429[(2)] = null);

(statearr_43064_45429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43056 === (4))){
var inst_43021 = (state_43055[(10)]);
var state_43055__$1 = state_43055;
return cljs.core.async.ioc_alts_BANG_(state_43055__$1,(7),inst_43021);
} else {
if((state_val_43056 === (6))){
var inst_43051 = (state_43055[(2)]);
var state_43055__$1 = state_43055;
var statearr_43065_45430 = state_43055__$1;
(statearr_43065_45430[(2)] = inst_43051);

(statearr_43065_45430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43056 === (3))){
var inst_43053 = (state_43055[(2)]);
var state_43055__$1 = state_43055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43055__$1,inst_43053);
} else {
if((state_val_43056 === (2))){
var inst_43021 = (state_43055[(10)]);
var inst_43023 = cljs.core.count(inst_43021);
var inst_43024 = (inst_43023 > (0));
var state_43055__$1 = state_43055;
if(cljs.core.truth_(inst_43024)){
var statearr_43071_45431 = state_43055__$1;
(statearr_43071_45431[(1)] = (4));

} else {
var statearr_43072_45432 = state_43055__$1;
(statearr_43072_45432[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43056 === (11))){
var inst_43021 = (state_43055[(10)]);
var inst_43044 = (state_43055[(2)]);
var tmp43066 = inst_43021;
var inst_43021__$1 = tmp43066;
var state_43055__$1 = (function (){var statearr_43073 = state_43055;
(statearr_43073[(11)] = inst_43044);

(statearr_43073[(10)] = inst_43021__$1);

return statearr_43073;
})();
var statearr_43075_45435 = state_43055__$1;
(statearr_43075_45435[(2)] = null);

(statearr_43075_45435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43056 === (9))){
var inst_43034 = (state_43055[(7)]);
var state_43055__$1 = state_43055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43055__$1,(11),out,inst_43034);
} else {
if((state_val_43056 === (5))){
var inst_43049 = cljs.core.async.close_BANG_(out);
var state_43055__$1 = state_43055;
var statearr_43076_45443 = state_43055__$1;
(statearr_43076_45443[(2)] = inst_43049);

(statearr_43076_45443[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43056 === (10))){
var inst_43047 = (state_43055[(2)]);
var state_43055__$1 = state_43055;
var statearr_43077_45444 = state_43055__$1;
(statearr_43077_45444[(2)] = inst_43047);

(statearr_43077_45444[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43056 === (8))){
var inst_43021 = (state_43055[(10)]);
var inst_43035 = (state_43055[(9)]);
var inst_43034 = (state_43055[(7)]);
var inst_43033 = (state_43055[(8)]);
var inst_43039 = (function (){var cs = inst_43021;
var vec__43026 = inst_43033;
var v = inst_43034;
var c = inst_43035;
return (function (p1__43015_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__43015_SHARP_);
});
})();
var inst_43040 = cljs.core.filterv(inst_43039,inst_43021);
var inst_43021__$1 = inst_43040;
var state_43055__$1 = (function (){var statearr_43079 = state_43055;
(statearr_43079[(10)] = inst_43021__$1);

return statearr_43079;
})();
var statearr_43080_45447 = state_43055__$1;
(statearr_43080_45447[(2)] = null);

(statearr_43080_45447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30487__auto__ = null;
var cljs$core$async$state_machine__30487__auto____0 = (function (){
var statearr_43081 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43081[(0)] = cljs$core$async$state_machine__30487__auto__);

(statearr_43081[(1)] = (1));

return statearr_43081;
});
var cljs$core$async$state_machine__30487__auto____1 = (function (state_43055){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_43055);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e43082){var ex__30491__auto__ = e43082;
var statearr_43083_45449 = state_43055;
(statearr_43083_45449[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_43055[(4)]))){
var statearr_43086_45450 = state_43055;
(statearr_43086_45450[(1)] = cljs.core.first((state_43055[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45455 = state_43055;
state_43055 = G__45455;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$state_machine__30487__auto__ = function(state_43055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30487__auto____1.call(this,state_43055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30487__auto____0;
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30487__auto____1;
return cljs$core$async$state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_43089 = f__31239__auto__();
(statearr_43089[(6)] = c__31235__auto___45417);

return statearr_43089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__43096 = arguments.length;
switch (G__43096) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31235__auto___45458 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_43132){
var state_val_43133 = (state_43132[(1)]);
if((state_val_43133 === (7))){
var inst_43108 = (state_43132[(7)]);
var inst_43108__$1 = (state_43132[(2)]);
var inst_43109 = (inst_43108__$1 == null);
var inst_43113 = cljs.core.not(inst_43109);
var state_43132__$1 = (function (){var statearr_43138 = state_43132;
(statearr_43138[(7)] = inst_43108__$1);

return statearr_43138;
})();
if(inst_43113){
var statearr_43142_45465 = state_43132__$1;
(statearr_43142_45465[(1)] = (8));

} else {
var statearr_43143_45470 = state_43132__$1;
(statearr_43143_45470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43133 === (1))){
var inst_43102 = (0);
var state_43132__$1 = (function (){var statearr_43144 = state_43132;
(statearr_43144[(8)] = inst_43102);

return statearr_43144;
})();
var statearr_43146_45475 = state_43132__$1;
(statearr_43146_45475[(2)] = null);

(statearr_43146_45475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43133 === (4))){
var state_43132__$1 = state_43132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43132__$1,(7),ch);
} else {
if((state_val_43133 === (6))){
var inst_43127 = (state_43132[(2)]);
var state_43132__$1 = state_43132;
var statearr_43148_45483 = state_43132__$1;
(statearr_43148_45483[(2)] = inst_43127);

(statearr_43148_45483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43133 === (3))){
var inst_43129 = (state_43132[(2)]);
var inst_43130 = cljs.core.async.close_BANG_(out);
var state_43132__$1 = (function (){var statearr_43155 = state_43132;
(statearr_43155[(9)] = inst_43129);

return statearr_43155;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43132__$1,inst_43130);
} else {
if((state_val_43133 === (2))){
var inst_43102 = (state_43132[(8)]);
var inst_43105 = (inst_43102 < n);
var state_43132__$1 = state_43132;
if(cljs.core.truth_(inst_43105)){
var statearr_43157_45485 = state_43132__$1;
(statearr_43157_45485[(1)] = (4));

} else {
var statearr_43158_45486 = state_43132__$1;
(statearr_43158_45486[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43133 === (11))){
var inst_43102 = (state_43132[(8)]);
var inst_43116 = (state_43132[(2)]);
var inst_43120 = (inst_43102 + (1));
var inst_43102__$1 = inst_43120;
var state_43132__$1 = (function (){var statearr_43160 = state_43132;
(statearr_43160[(8)] = inst_43102__$1);

(statearr_43160[(10)] = inst_43116);

return statearr_43160;
})();
var statearr_43161_45488 = state_43132__$1;
(statearr_43161_45488[(2)] = null);

(statearr_43161_45488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43133 === (9))){
var state_43132__$1 = state_43132;
var statearr_43163_45490 = state_43132__$1;
(statearr_43163_45490[(2)] = null);

(statearr_43163_45490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43133 === (5))){
var state_43132__$1 = state_43132;
var statearr_43164_45494 = state_43132__$1;
(statearr_43164_45494[(2)] = null);

(statearr_43164_45494[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43133 === (10))){
var inst_43124 = (state_43132[(2)]);
var state_43132__$1 = state_43132;
var statearr_43165_45496 = state_43132__$1;
(statearr_43165_45496[(2)] = inst_43124);

(statearr_43165_45496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43133 === (8))){
var inst_43108 = (state_43132[(7)]);
var state_43132__$1 = state_43132;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43132__$1,(11),out,inst_43108);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30487__auto__ = null;
var cljs$core$async$state_machine__30487__auto____0 = (function (){
var statearr_43171 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43171[(0)] = cljs$core$async$state_machine__30487__auto__);

(statearr_43171[(1)] = (1));

return statearr_43171;
});
var cljs$core$async$state_machine__30487__auto____1 = (function (state_43132){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_43132);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e43175){var ex__30491__auto__ = e43175;
var statearr_43177_45498 = state_43132;
(statearr_43177_45498[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_43132[(4)]))){
var statearr_43179_45499 = state_43132;
(statearr_43179_45499[(1)] = cljs.core.first((state_43132[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45500 = state_43132;
state_43132 = G__45500;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$state_machine__30487__auto__ = function(state_43132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30487__auto____1.call(this,state_43132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30487__auto____0;
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30487__auto____1;
return cljs$core$async$state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_43181 = f__31239__auto__();
(statearr_43181[(6)] = c__31235__auto___45458);

return statearr_43181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43231 = (function (f,ch,meta43187,_,fn1,meta43232){
this.f = f;
this.ch = ch;
this.meta43187 = meta43187;
this._ = _;
this.fn1 = fn1;
this.meta43232 = meta43232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43233,meta43232__$1){
var self__ = this;
var _43233__$1 = this;
return (new cljs.core.async.t_cljs$core$async43231(self__.f,self__.ch,self__.meta43187,self__._,self__.fn1,meta43232__$1));
}));

(cljs.core.async.t_cljs$core$async43231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43233){
var self__ = this;
var _43233__$1 = this;
return self__.meta43232;
}));

(cljs.core.async.t_cljs$core$async43231.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43231.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async43231.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43231.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__43182_SHARP_){
var G__43266 = (((p1__43182_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__43182_SHARP_) : self__.f.call(null, p1__43182_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__43266) : f1.call(null, G__43266));
});
}));

(cljs.core.async.t_cljs$core$async43231.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43187","meta43187",734587710,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43186","cljs.core.async/t_cljs$core$async43186",-1154779608,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43232","meta43232",-1589848047,null)], null);
}));

(cljs.core.async.t_cljs$core$async43231.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43231");

(cljs.core.async.t_cljs$core$async43231.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async43231");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43231.
 */
cljs.core.async.__GT_t_cljs$core$async43231 = (function cljs$core$async$__GT_t_cljs$core$async43231(f,ch,meta43187,_,fn1,meta43232){
return (new cljs.core.async.t_cljs$core$async43231(f,ch,meta43187,_,fn1,meta43232));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43186 = (function (f,ch,meta43187){
this.f = f;
this.ch = ch;
this.meta43187 = meta43187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43188,meta43187__$1){
var self__ = this;
var _43188__$1 = this;
return (new cljs.core.async.t_cljs$core$async43186(self__.f,self__.ch,meta43187__$1));
}));

(cljs.core.async.t_cljs$core$async43186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43188){
var self__ = this;
var _43188__$1 = this;
return self__.meta43187;
}));

(cljs.core.async.t_cljs$core$async43186.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43186.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43186.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43186.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43186.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async43231(self__.f,self__.ch,self__.meta43187,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__43280 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__43280) : self__.f.call(null, G__43280));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async43186.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43186.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async43186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43187","meta43187",734587710,null)], null);
}));

(cljs.core.async.t_cljs$core$async43186.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43186.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43186");

(cljs.core.async.t_cljs$core$async43186.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async43186");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43186.
 */
cljs.core.async.__GT_t_cljs$core$async43186 = (function cljs$core$async$__GT_t_cljs$core$async43186(f,ch,meta43187){
return (new cljs.core.async.t_cljs$core$async43186(f,ch,meta43187));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async43186(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43294 = (function (f,ch,meta43295){
this.f = f;
this.ch = ch;
this.meta43295 = meta43295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43296,meta43295__$1){
var self__ = this;
var _43296__$1 = this;
return (new cljs.core.async.t_cljs$core$async43294(self__.f,self__.ch,meta43295__$1));
}));

(cljs.core.async.t_cljs$core$async43294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43296){
var self__ = this;
var _43296__$1 = this;
return self__.meta43295;
}));

(cljs.core.async.t_cljs$core$async43294.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43294.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43294.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43294.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43294.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43294.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async43294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43295","meta43295",-1443174766,null)], null);
}));

(cljs.core.async.t_cljs$core$async43294.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43294.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43294");

(cljs.core.async.t_cljs$core$async43294.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async43294");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43294.
 */
cljs.core.async.__GT_t_cljs$core$async43294 = (function cljs$core$async$__GT_t_cljs$core$async43294(f,ch,meta43295){
return (new cljs.core.async.t_cljs$core$async43294(f,ch,meta43295));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async43294(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43328 = (function (p,ch,meta43329){
this.p = p;
this.ch = ch;
this.meta43329 = meta43329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43330,meta43329__$1){
var self__ = this;
var _43330__$1 = this;
return (new cljs.core.async.t_cljs$core$async43328(self__.p,self__.ch,meta43329__$1));
}));

(cljs.core.async.t_cljs$core$async43328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43330){
var self__ = this;
var _43330__$1 = this;
return self__.meta43329;
}));

(cljs.core.async.t_cljs$core$async43328.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43328.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43328.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43328.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43328.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43328.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43328.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async43328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43329","meta43329",-29664913,null)], null);
}));

(cljs.core.async.t_cljs$core$async43328.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43328");

(cljs.core.async.t_cljs$core$async43328.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async43328");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43328.
 */
cljs.core.async.__GT_t_cljs$core$async43328 = (function cljs$core$async$__GT_t_cljs$core$async43328(p,ch,meta43329){
return (new cljs.core.async.t_cljs$core$async43328(p,ch,meta43329));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async43328(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__43349 = arguments.length;
switch (G__43349) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31235__auto___45552 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_43377){
var state_val_43380 = (state_43377[(1)]);
if((state_val_43380 === (7))){
var inst_43372 = (state_43377[(2)]);
var state_43377__$1 = state_43377;
var statearr_43387_45557 = state_43377__$1;
(statearr_43387_45557[(2)] = inst_43372);

(statearr_43387_45557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43380 === (1))){
var state_43377__$1 = state_43377;
var statearr_43388_45562 = state_43377__$1;
(statearr_43388_45562[(2)] = null);

(statearr_43388_45562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43380 === (4))){
var inst_43356 = (state_43377[(7)]);
var inst_43356__$1 = (state_43377[(2)]);
var inst_43357 = (inst_43356__$1 == null);
var state_43377__$1 = (function (){var statearr_43392 = state_43377;
(statearr_43392[(7)] = inst_43356__$1);

return statearr_43392;
})();
if(cljs.core.truth_(inst_43357)){
var statearr_43393_45577 = state_43377__$1;
(statearr_43393_45577[(1)] = (5));

} else {
var statearr_43394_45579 = state_43377__$1;
(statearr_43394_45579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43380 === (6))){
var inst_43356 = (state_43377[(7)]);
var inst_43361 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43356) : p.call(null, inst_43356));
var state_43377__$1 = state_43377;
if(cljs.core.truth_(inst_43361)){
var statearr_43395_45589 = state_43377__$1;
(statearr_43395_45589[(1)] = (8));

} else {
var statearr_43397_45590 = state_43377__$1;
(statearr_43397_45590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43380 === (3))){
var inst_43374 = (state_43377[(2)]);
var state_43377__$1 = state_43377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43377__$1,inst_43374);
} else {
if((state_val_43380 === (2))){
var state_43377__$1 = state_43377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43377__$1,(4),ch);
} else {
if((state_val_43380 === (11))){
var inst_43364 = (state_43377[(2)]);
var state_43377__$1 = state_43377;
var statearr_43399_45599 = state_43377__$1;
(statearr_43399_45599[(2)] = inst_43364);

(statearr_43399_45599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43380 === (9))){
var state_43377__$1 = state_43377;
var statearr_43400_45604 = state_43377__$1;
(statearr_43400_45604[(2)] = null);

(statearr_43400_45604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43380 === (5))){
var inst_43359 = cljs.core.async.close_BANG_(out);
var state_43377__$1 = state_43377;
var statearr_43404_45605 = state_43377__$1;
(statearr_43404_45605[(2)] = inst_43359);

(statearr_43404_45605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43380 === (10))){
var inst_43367 = (state_43377[(2)]);
var state_43377__$1 = (function (){var statearr_43406 = state_43377;
(statearr_43406[(8)] = inst_43367);

return statearr_43406;
})();
var statearr_43410_45609 = state_43377__$1;
(statearr_43410_45609[(2)] = null);

(statearr_43410_45609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43380 === (8))){
var inst_43356 = (state_43377[(7)]);
var state_43377__$1 = state_43377;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43377__$1,(11),out,inst_43356);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30487__auto__ = null;
var cljs$core$async$state_machine__30487__auto____0 = (function (){
var statearr_43415 = [null,null,null,null,null,null,null,null,null];
(statearr_43415[(0)] = cljs$core$async$state_machine__30487__auto__);

(statearr_43415[(1)] = (1));

return statearr_43415;
});
var cljs$core$async$state_machine__30487__auto____1 = (function (state_43377){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_43377);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e43417){var ex__30491__auto__ = e43417;
var statearr_43419_45617 = state_43377;
(statearr_43419_45617[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_43377[(4)]))){
var statearr_43421_45620 = state_43377;
(statearr_43421_45620[(1)] = cljs.core.first((state_43377[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45622 = state_43377;
state_43377 = G__45622;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$state_machine__30487__auto__ = function(state_43377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30487__auto____1.call(this,state_43377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30487__auto____0;
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30487__auto____1;
return cljs$core$async$state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_43424 = f__31239__auto__();
(statearr_43424[(6)] = c__31235__auto___45552);

return statearr_43424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43427 = arguments.length;
switch (G__43427) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31235__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_43518){
var state_val_43519 = (state_43518[(1)]);
if((state_val_43519 === (7))){
var inst_43513 = (state_43518[(2)]);
var state_43518__$1 = state_43518;
var statearr_43525_45626 = state_43518__$1;
(statearr_43525_45626[(2)] = inst_43513);

(statearr_43525_45626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (20))){
var inst_43478 = (state_43518[(7)]);
var inst_43493 = (state_43518[(2)]);
var inst_43494 = cljs.core.next(inst_43478);
var inst_43461 = inst_43494;
var inst_43462 = null;
var inst_43463 = (0);
var inst_43464 = (0);
var state_43518__$1 = (function (){var statearr_43527 = state_43518;
(statearr_43527[(8)] = inst_43461);

(statearr_43527[(9)] = inst_43464);

(statearr_43527[(10)] = inst_43462);

(statearr_43527[(11)] = inst_43493);

(statearr_43527[(12)] = inst_43463);

return statearr_43527;
})();
var statearr_43531_45627 = state_43518__$1;
(statearr_43531_45627[(2)] = null);

(statearr_43531_45627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (1))){
var state_43518__$1 = state_43518;
var statearr_43532_45628 = state_43518__$1;
(statearr_43532_45628[(2)] = null);

(statearr_43532_45628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (4))){
var inst_43450 = (state_43518[(13)]);
var inst_43450__$1 = (state_43518[(2)]);
var inst_43451 = (inst_43450__$1 == null);
var state_43518__$1 = (function (){var statearr_43533 = state_43518;
(statearr_43533[(13)] = inst_43450__$1);

return statearr_43533;
})();
if(cljs.core.truth_(inst_43451)){
var statearr_43535_45629 = state_43518__$1;
(statearr_43535_45629[(1)] = (5));

} else {
var statearr_43536_45630 = state_43518__$1;
(statearr_43536_45630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (15))){
var state_43518__$1 = state_43518;
var statearr_43544_45631 = state_43518__$1;
(statearr_43544_45631[(2)] = null);

(statearr_43544_45631[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (21))){
var state_43518__$1 = state_43518;
var statearr_43545_45632 = state_43518__$1;
(statearr_43545_45632[(2)] = null);

(statearr_43545_45632[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (13))){
var inst_43461 = (state_43518[(8)]);
var inst_43464 = (state_43518[(9)]);
var inst_43462 = (state_43518[(10)]);
var inst_43463 = (state_43518[(12)]);
var inst_43473 = (state_43518[(2)]);
var inst_43475 = (inst_43464 + (1));
var tmp43539 = inst_43461;
var tmp43540 = inst_43462;
var tmp43541 = inst_43463;
var inst_43461__$1 = tmp43539;
var inst_43462__$1 = tmp43540;
var inst_43463__$1 = tmp43541;
var inst_43464__$1 = inst_43475;
var state_43518__$1 = (function (){var statearr_43546 = state_43518;
(statearr_43546[(14)] = inst_43473);

(statearr_43546[(8)] = inst_43461__$1);

(statearr_43546[(9)] = inst_43464__$1);

(statearr_43546[(10)] = inst_43462__$1);

(statearr_43546[(12)] = inst_43463__$1);

return statearr_43546;
})();
var statearr_43551_45633 = state_43518__$1;
(statearr_43551_45633[(2)] = null);

(statearr_43551_45633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (22))){
var state_43518__$1 = state_43518;
var statearr_43559_45635 = state_43518__$1;
(statearr_43559_45635[(2)] = null);

(statearr_43559_45635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (6))){
var inst_43450 = (state_43518[(13)]);
var inst_43459 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43450) : f.call(null, inst_43450));
var inst_43460 = cljs.core.seq(inst_43459);
var inst_43461 = inst_43460;
var inst_43462 = null;
var inst_43463 = (0);
var inst_43464 = (0);
var state_43518__$1 = (function (){var statearr_43573 = state_43518;
(statearr_43573[(8)] = inst_43461);

(statearr_43573[(9)] = inst_43464);

(statearr_43573[(10)] = inst_43462);

(statearr_43573[(12)] = inst_43463);

return statearr_43573;
})();
var statearr_43574_45636 = state_43518__$1;
(statearr_43574_45636[(2)] = null);

(statearr_43574_45636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (17))){
var inst_43478 = (state_43518[(7)]);
var inst_43484 = cljs.core.chunk_first(inst_43478);
var inst_43485 = cljs.core.chunk_rest(inst_43478);
var inst_43488 = cljs.core.count(inst_43484);
var inst_43461 = inst_43485;
var inst_43462 = inst_43484;
var inst_43463 = inst_43488;
var inst_43464 = (0);
var state_43518__$1 = (function (){var statearr_43575 = state_43518;
(statearr_43575[(8)] = inst_43461);

(statearr_43575[(9)] = inst_43464);

(statearr_43575[(10)] = inst_43462);

(statearr_43575[(12)] = inst_43463);

return statearr_43575;
})();
var statearr_43576_45637 = state_43518__$1;
(statearr_43576_45637[(2)] = null);

(statearr_43576_45637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (3))){
var inst_43515 = (state_43518[(2)]);
var state_43518__$1 = state_43518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43518__$1,inst_43515);
} else {
if((state_val_43519 === (12))){
var inst_43502 = (state_43518[(2)]);
var state_43518__$1 = state_43518;
var statearr_43578_45638 = state_43518__$1;
(statearr_43578_45638[(2)] = inst_43502);

(statearr_43578_45638[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (2))){
var state_43518__$1 = state_43518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43518__$1,(4),in$);
} else {
if((state_val_43519 === (23))){
var inst_43511 = (state_43518[(2)]);
var state_43518__$1 = state_43518;
var statearr_43581_45640 = state_43518__$1;
(statearr_43581_45640[(2)] = inst_43511);

(statearr_43581_45640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (19))){
var inst_43497 = (state_43518[(2)]);
var state_43518__$1 = state_43518;
var statearr_43584_45641 = state_43518__$1;
(statearr_43584_45641[(2)] = inst_43497);

(statearr_43584_45641[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (11))){
var inst_43478 = (state_43518[(7)]);
var inst_43461 = (state_43518[(8)]);
var inst_43478__$1 = cljs.core.seq(inst_43461);
var state_43518__$1 = (function (){var statearr_43585 = state_43518;
(statearr_43585[(7)] = inst_43478__$1);

return statearr_43585;
})();
if(inst_43478__$1){
var statearr_43589_45646 = state_43518__$1;
(statearr_43589_45646[(1)] = (14));

} else {
var statearr_43593_45647 = state_43518__$1;
(statearr_43593_45647[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (9))){
var inst_43504 = (state_43518[(2)]);
var inst_43505 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_43518__$1 = (function (){var statearr_43599 = state_43518;
(statearr_43599[(15)] = inst_43504);

return statearr_43599;
})();
if(cljs.core.truth_(inst_43505)){
var statearr_43602_45652 = state_43518__$1;
(statearr_43602_45652[(1)] = (21));

} else {
var statearr_43606_45653 = state_43518__$1;
(statearr_43606_45653[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (5))){
var inst_43453 = cljs.core.async.close_BANG_(out);
var state_43518__$1 = state_43518;
var statearr_43609_45656 = state_43518__$1;
(statearr_43609_45656[(2)] = inst_43453);

(statearr_43609_45656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (14))){
var inst_43478 = (state_43518[(7)]);
var inst_43482 = cljs.core.chunked_seq_QMARK_(inst_43478);
var state_43518__$1 = state_43518;
if(inst_43482){
var statearr_43611_45658 = state_43518__$1;
(statearr_43611_45658[(1)] = (17));

} else {
var statearr_43612_45659 = state_43518__$1;
(statearr_43612_45659[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (16))){
var inst_43500 = (state_43518[(2)]);
var state_43518__$1 = state_43518;
var statearr_43616_45665 = state_43518__$1;
(statearr_43616_45665[(2)] = inst_43500);

(statearr_43616_45665[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (10))){
var inst_43464 = (state_43518[(9)]);
var inst_43462 = (state_43518[(10)]);
var inst_43471 = cljs.core._nth(inst_43462,inst_43464);
var state_43518__$1 = state_43518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43518__$1,(13),out,inst_43471);
} else {
if((state_val_43519 === (18))){
var inst_43478 = (state_43518[(7)]);
var inst_43491 = cljs.core.first(inst_43478);
var state_43518__$1 = state_43518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43518__$1,(20),out,inst_43491);
} else {
if((state_val_43519 === (8))){
var inst_43464 = (state_43518[(9)]);
var inst_43463 = (state_43518[(12)]);
var inst_43467 = (inst_43464 < inst_43463);
var inst_43468 = inst_43467;
var state_43518__$1 = state_43518;
if(cljs.core.truth_(inst_43468)){
var statearr_43632_45666 = state_43518__$1;
(statearr_43632_45666[(1)] = (10));

} else {
var statearr_43634_45667 = state_43518__$1;
(statearr_43634_45667[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30487__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30487__auto____0 = (function (){
var statearr_43638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43638[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30487__auto__);

(statearr_43638[(1)] = (1));

return statearr_43638;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30487__auto____1 = (function (state_43518){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_43518);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e43642){var ex__30491__auto__ = e43642;
var statearr_43653_45668 = state_43518;
(statearr_43653_45668[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_43518[(4)]))){
var statearr_43657_45669 = state_43518;
(statearr_43657_45669[(1)] = cljs.core.first((state_43518[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45670 = state_43518;
state_43518 = G__45670;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30487__auto__ = function(state_43518){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30487__auto____1.call(this,state_43518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30487__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30487__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_43665 = f__31239__auto__();
(statearr_43665[(6)] = c__31235__auto__);

return statearr_43665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
}));

return c__31235__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43667 = arguments.length;
switch (G__43667) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__43683 = arguments.length;
switch (G__43683) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__43689 = arguments.length;
switch (G__43689) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31235__auto___45689 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_43720){
var state_val_43721 = (state_43720[(1)]);
if((state_val_43721 === (7))){
var inst_43715 = (state_43720[(2)]);
var state_43720__$1 = state_43720;
var statearr_43729_45693 = state_43720__$1;
(statearr_43729_45693[(2)] = inst_43715);

(statearr_43729_45693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43721 === (1))){
var inst_43697 = null;
var state_43720__$1 = (function (){var statearr_43730 = state_43720;
(statearr_43730[(7)] = inst_43697);

return statearr_43730;
})();
var statearr_43731_45694 = state_43720__$1;
(statearr_43731_45694[(2)] = null);

(statearr_43731_45694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43721 === (4))){
var inst_43700 = (state_43720[(8)]);
var inst_43700__$1 = (state_43720[(2)]);
var inst_43701 = (inst_43700__$1 == null);
var inst_43702 = cljs.core.not(inst_43701);
var state_43720__$1 = (function (){var statearr_43734 = state_43720;
(statearr_43734[(8)] = inst_43700__$1);

return statearr_43734;
})();
if(inst_43702){
var statearr_43738_45697 = state_43720__$1;
(statearr_43738_45697[(1)] = (5));

} else {
var statearr_43739_45699 = state_43720__$1;
(statearr_43739_45699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43721 === (6))){
var state_43720__$1 = state_43720;
var statearr_43742_45700 = state_43720__$1;
(statearr_43742_45700[(2)] = null);

(statearr_43742_45700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43721 === (3))){
var inst_43717 = (state_43720[(2)]);
var inst_43718 = cljs.core.async.close_BANG_(out);
var state_43720__$1 = (function (){var statearr_43743 = state_43720;
(statearr_43743[(9)] = inst_43717);

return statearr_43743;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43720__$1,inst_43718);
} else {
if((state_val_43721 === (2))){
var state_43720__$1 = state_43720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43720__$1,(4),ch);
} else {
if((state_val_43721 === (11))){
var inst_43700 = (state_43720[(8)]);
var inst_43709 = (state_43720[(2)]);
var inst_43697 = inst_43700;
var state_43720__$1 = (function (){var statearr_43746 = state_43720;
(statearr_43746[(7)] = inst_43697);

(statearr_43746[(10)] = inst_43709);

return statearr_43746;
})();
var statearr_43753_45704 = state_43720__$1;
(statearr_43753_45704[(2)] = null);

(statearr_43753_45704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43721 === (9))){
var inst_43700 = (state_43720[(8)]);
var state_43720__$1 = state_43720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43720__$1,(11),out,inst_43700);
} else {
if((state_val_43721 === (5))){
var inst_43697 = (state_43720[(7)]);
var inst_43700 = (state_43720[(8)]);
var inst_43704 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43700,inst_43697);
var state_43720__$1 = state_43720;
if(inst_43704){
var statearr_43755_45705 = state_43720__$1;
(statearr_43755_45705[(1)] = (8));

} else {
var statearr_43756_45706 = state_43720__$1;
(statearr_43756_45706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43721 === (10))){
var inst_43712 = (state_43720[(2)]);
var state_43720__$1 = state_43720;
var statearr_43758_45708 = state_43720__$1;
(statearr_43758_45708[(2)] = inst_43712);

(statearr_43758_45708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43721 === (8))){
var inst_43697 = (state_43720[(7)]);
var tmp43754 = inst_43697;
var inst_43697__$1 = tmp43754;
var state_43720__$1 = (function (){var statearr_43771 = state_43720;
(statearr_43771[(7)] = inst_43697__$1);

return statearr_43771;
})();
var statearr_43772_45711 = state_43720__$1;
(statearr_43772_45711[(2)] = null);

(statearr_43772_45711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30487__auto__ = null;
var cljs$core$async$state_machine__30487__auto____0 = (function (){
var statearr_43773 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43773[(0)] = cljs$core$async$state_machine__30487__auto__);

(statearr_43773[(1)] = (1));

return statearr_43773;
});
var cljs$core$async$state_machine__30487__auto____1 = (function (state_43720){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_43720);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e43776){var ex__30491__auto__ = e43776;
var statearr_43777_45713 = state_43720;
(statearr_43777_45713[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_43720[(4)]))){
var statearr_43780_45715 = state_43720;
(statearr_43780_45715[(1)] = cljs.core.first((state_43720[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45716 = state_43720;
state_43720 = G__45716;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$state_machine__30487__auto__ = function(state_43720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30487__auto____1.call(this,state_43720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30487__auto____0;
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30487__auto____1;
return cljs$core$async$state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_43785 = f__31239__auto__();
(statearr_43785[(6)] = c__31235__auto___45689);

return statearr_43785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43793 = arguments.length;
switch (G__43793) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31235__auto___45720 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_43833){
var state_val_43834 = (state_43833[(1)]);
if((state_val_43834 === (7))){
var inst_43829 = (state_43833[(2)]);
var state_43833__$1 = state_43833;
var statearr_43837_45722 = state_43833__$1;
(statearr_43837_45722[(2)] = inst_43829);

(statearr_43837_45722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43834 === (1))){
var inst_43796 = (new Array(n));
var inst_43797 = inst_43796;
var inst_43798 = (0);
var state_43833__$1 = (function (){var statearr_43843 = state_43833;
(statearr_43843[(7)] = inst_43797);

(statearr_43843[(8)] = inst_43798);

return statearr_43843;
})();
var statearr_43846_45723 = state_43833__$1;
(statearr_43846_45723[(2)] = null);

(statearr_43846_45723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43834 === (4))){
var inst_43801 = (state_43833[(9)]);
var inst_43801__$1 = (state_43833[(2)]);
var inst_43802 = (inst_43801__$1 == null);
var inst_43803 = cljs.core.not(inst_43802);
var state_43833__$1 = (function (){var statearr_43847 = state_43833;
(statearr_43847[(9)] = inst_43801__$1);

return statearr_43847;
})();
if(inst_43803){
var statearr_43848_45724 = state_43833__$1;
(statearr_43848_45724[(1)] = (5));

} else {
var statearr_43850_45726 = state_43833__$1;
(statearr_43850_45726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43834 === (15))){
var inst_43823 = (state_43833[(2)]);
var state_43833__$1 = state_43833;
var statearr_43851_45727 = state_43833__$1;
(statearr_43851_45727[(2)] = inst_43823);

(statearr_43851_45727[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43834 === (13))){
var state_43833__$1 = state_43833;
var statearr_43852_45728 = state_43833__$1;
(statearr_43852_45728[(2)] = null);

(statearr_43852_45728[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43834 === (6))){
var inst_43798 = (state_43833[(8)]);
var inst_43819 = (inst_43798 > (0));
var state_43833__$1 = state_43833;
if(cljs.core.truth_(inst_43819)){
var statearr_43857_45730 = state_43833__$1;
(statearr_43857_45730[(1)] = (12));

} else {
var statearr_43858_45731 = state_43833__$1;
(statearr_43858_45731[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43834 === (3))){
var inst_43831 = (state_43833[(2)]);
var state_43833__$1 = state_43833;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43833__$1,inst_43831);
} else {
if((state_val_43834 === (12))){
var inst_43797 = (state_43833[(7)]);
var inst_43821 = cljs.core.vec(inst_43797);
var state_43833__$1 = state_43833;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43833__$1,(15),out,inst_43821);
} else {
if((state_val_43834 === (2))){
var state_43833__$1 = state_43833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43833__$1,(4),ch);
} else {
if((state_val_43834 === (11))){
var inst_43813 = (state_43833[(2)]);
var inst_43814 = (new Array(n));
var inst_43797 = inst_43814;
var inst_43798 = (0);
var state_43833__$1 = (function (){var statearr_43868 = state_43833;
(statearr_43868[(7)] = inst_43797);

(statearr_43868[(10)] = inst_43813);

(statearr_43868[(8)] = inst_43798);

return statearr_43868;
})();
var statearr_43869_45734 = state_43833__$1;
(statearr_43869_45734[(2)] = null);

(statearr_43869_45734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43834 === (9))){
var inst_43797 = (state_43833[(7)]);
var inst_43811 = cljs.core.vec(inst_43797);
var state_43833__$1 = state_43833;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43833__$1,(11),out,inst_43811);
} else {
if((state_val_43834 === (5))){
var inst_43797 = (state_43833[(7)]);
var inst_43806 = (state_43833[(11)]);
var inst_43801 = (state_43833[(9)]);
var inst_43798 = (state_43833[(8)]);
var inst_43805 = (inst_43797[inst_43798] = inst_43801);
var inst_43806__$1 = (inst_43798 + (1));
var inst_43807 = (inst_43806__$1 < n);
var state_43833__$1 = (function (){var statearr_43876 = state_43833;
(statearr_43876[(11)] = inst_43806__$1);

(statearr_43876[(12)] = inst_43805);

return statearr_43876;
})();
if(cljs.core.truth_(inst_43807)){
var statearr_43877_45735 = state_43833__$1;
(statearr_43877_45735[(1)] = (8));

} else {
var statearr_43878_45736 = state_43833__$1;
(statearr_43878_45736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43834 === (14))){
var inst_43826 = (state_43833[(2)]);
var inst_43827 = cljs.core.async.close_BANG_(out);
var state_43833__$1 = (function (){var statearr_43880 = state_43833;
(statearr_43880[(13)] = inst_43826);

return statearr_43880;
})();
var statearr_43881_45741 = state_43833__$1;
(statearr_43881_45741[(2)] = inst_43827);

(statearr_43881_45741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43834 === (10))){
var inst_43817 = (state_43833[(2)]);
var state_43833__$1 = state_43833;
var statearr_43885_45743 = state_43833__$1;
(statearr_43885_45743[(2)] = inst_43817);

(statearr_43885_45743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43834 === (8))){
var inst_43797 = (state_43833[(7)]);
var inst_43806 = (state_43833[(11)]);
var tmp43879 = inst_43797;
var inst_43797__$1 = tmp43879;
var inst_43798 = inst_43806;
var state_43833__$1 = (function (){var statearr_43890 = state_43833;
(statearr_43890[(7)] = inst_43797__$1);

(statearr_43890[(8)] = inst_43798);

return statearr_43890;
})();
var statearr_43891_45746 = state_43833__$1;
(statearr_43891_45746[(2)] = null);

(statearr_43891_45746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30487__auto__ = null;
var cljs$core$async$state_machine__30487__auto____0 = (function (){
var statearr_43896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43896[(0)] = cljs$core$async$state_machine__30487__auto__);

(statearr_43896[(1)] = (1));

return statearr_43896;
});
var cljs$core$async$state_machine__30487__auto____1 = (function (state_43833){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_43833);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e43898){var ex__30491__auto__ = e43898;
var statearr_43899_45751 = state_43833;
(statearr_43899_45751[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_43833[(4)]))){
var statearr_43900_45756 = state_43833;
(statearr_43900_45756[(1)] = cljs.core.first((state_43833[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45757 = state_43833;
state_43833 = G__45757;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$state_machine__30487__auto__ = function(state_43833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30487__auto____1.call(this,state_43833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30487__auto____0;
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30487__auto____1;
return cljs$core$async$state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_43904 = f__31239__auto__();
(statearr_43904[(6)] = c__31235__auto___45720);

return statearr_43904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43909 = arguments.length;
switch (G__43909) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31235__auto___45769 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_43984){
var state_val_43985 = (state_43984[(1)]);
if((state_val_43985 === (7))){
var inst_43968 = (state_43984[(2)]);
var state_43984__$1 = state_43984;
var statearr_43995_45770 = state_43984__$1;
(statearr_43995_45770[(2)] = inst_43968);

(statearr_43995_45770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43985 === (1))){
var inst_43927 = [];
var inst_43928 = inst_43927;
var inst_43929 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43984__$1 = (function (){var statearr_43996 = state_43984;
(statearr_43996[(7)] = inst_43929);

(statearr_43996[(8)] = inst_43928);

return statearr_43996;
})();
var statearr_43998_45773 = state_43984__$1;
(statearr_43998_45773[(2)] = null);

(statearr_43998_45773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43985 === (4))){
var inst_43933 = (state_43984[(9)]);
var inst_43933__$1 = (state_43984[(2)]);
var inst_43934 = (inst_43933__$1 == null);
var inst_43935 = cljs.core.not(inst_43934);
var state_43984__$1 = (function (){var statearr_44010 = state_43984;
(statearr_44010[(9)] = inst_43933__$1);

return statearr_44010;
})();
if(inst_43935){
var statearr_44011_45780 = state_43984__$1;
(statearr_44011_45780[(1)] = (5));

} else {
var statearr_44015_45785 = state_43984__$1;
(statearr_44015_45785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43985 === (15))){
var inst_43928 = (state_43984[(8)]);
var inst_43960 = cljs.core.vec(inst_43928);
var state_43984__$1 = state_43984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43984__$1,(18),out,inst_43960);
} else {
if((state_val_43985 === (13))){
var inst_43955 = (state_43984[(2)]);
var state_43984__$1 = state_43984;
var statearr_44020_45789 = state_43984__$1;
(statearr_44020_45789[(2)] = inst_43955);

(statearr_44020_45789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43985 === (6))){
var inst_43928 = (state_43984[(8)]);
var inst_43957 = inst_43928.length;
var inst_43958 = (inst_43957 > (0));
var state_43984__$1 = state_43984;
if(cljs.core.truth_(inst_43958)){
var statearr_44024_45795 = state_43984__$1;
(statearr_44024_45795[(1)] = (15));

} else {
var statearr_44026_45796 = state_43984__$1;
(statearr_44026_45796[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43985 === (17))){
var inst_43965 = (state_43984[(2)]);
var inst_43966 = cljs.core.async.close_BANG_(out);
var state_43984__$1 = (function (){var statearr_44034 = state_43984;
(statearr_44034[(10)] = inst_43965);

return statearr_44034;
})();
var statearr_44035_45802 = state_43984__$1;
(statearr_44035_45802[(2)] = inst_43966);

(statearr_44035_45802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43985 === (3))){
var inst_43970 = (state_43984[(2)]);
var state_43984__$1 = state_43984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43984__$1,inst_43970);
} else {
if((state_val_43985 === (12))){
var inst_43928 = (state_43984[(8)]);
var inst_43948 = cljs.core.vec(inst_43928);
var state_43984__$1 = state_43984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43984__$1,(14),out,inst_43948);
} else {
if((state_val_43985 === (2))){
var state_43984__$1 = state_43984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43984__$1,(4),ch);
} else {
if((state_val_43985 === (11))){
var inst_43933 = (state_43984[(9)]);
var inst_43937 = (state_43984[(11)]);
var inst_43928 = (state_43984[(8)]);
var inst_43945 = inst_43928.push(inst_43933);
var tmp44037 = inst_43928;
var inst_43928__$1 = tmp44037;
var inst_43929 = inst_43937;
var state_43984__$1 = (function (){var statearr_44038 = state_43984;
(statearr_44038[(7)] = inst_43929);

(statearr_44038[(8)] = inst_43928__$1);

(statearr_44038[(12)] = inst_43945);

return statearr_44038;
})();
var statearr_44039_45827 = state_43984__$1;
(statearr_44039_45827[(2)] = null);

(statearr_44039_45827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43985 === (9))){
var inst_43929 = (state_43984[(7)]);
var inst_43941 = cljs.core.keyword_identical_QMARK_(inst_43929,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_43984__$1 = state_43984;
var statearr_44042_45836 = state_43984__$1;
(statearr_44042_45836[(2)] = inst_43941);

(statearr_44042_45836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43985 === (5))){
var inst_43929 = (state_43984[(7)]);
var inst_43933 = (state_43984[(9)]);
var inst_43937 = (state_43984[(11)]);
var inst_43938 = (state_43984[(13)]);
var inst_43937__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43933) : f.call(null, inst_43933));
var inst_43938__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43937__$1,inst_43929);
var state_43984__$1 = (function (){var statearr_44046 = state_43984;
(statearr_44046[(11)] = inst_43937__$1);

(statearr_44046[(13)] = inst_43938__$1);

return statearr_44046;
})();
if(inst_43938__$1){
var statearr_44049_45840 = state_43984__$1;
(statearr_44049_45840[(1)] = (8));

} else {
var statearr_44050_45843 = state_43984__$1;
(statearr_44050_45843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43985 === (14))){
var inst_43933 = (state_43984[(9)]);
var inst_43937 = (state_43984[(11)]);
var inst_43950 = (state_43984[(2)]);
var inst_43951 = [];
var inst_43952 = inst_43951.push(inst_43933);
var inst_43928 = inst_43951;
var inst_43929 = inst_43937;
var state_43984__$1 = (function (){var statearr_44052 = state_43984;
(statearr_44052[(7)] = inst_43929);

(statearr_44052[(14)] = inst_43952);

(statearr_44052[(8)] = inst_43928);

(statearr_44052[(15)] = inst_43950);

return statearr_44052;
})();
var statearr_44053_45851 = state_43984__$1;
(statearr_44053_45851[(2)] = null);

(statearr_44053_45851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43985 === (16))){
var state_43984__$1 = state_43984;
var statearr_44056_45852 = state_43984__$1;
(statearr_44056_45852[(2)] = null);

(statearr_44056_45852[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43985 === (10))){
var inst_43943 = (state_43984[(2)]);
var state_43984__$1 = state_43984;
if(cljs.core.truth_(inst_43943)){
var statearr_44059_45856 = state_43984__$1;
(statearr_44059_45856[(1)] = (11));

} else {
var statearr_44060_45859 = state_43984__$1;
(statearr_44060_45859[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43985 === (18))){
var inst_43962 = (state_43984[(2)]);
var state_43984__$1 = state_43984;
var statearr_44067_45861 = state_43984__$1;
(statearr_44067_45861[(2)] = inst_43962);

(statearr_44067_45861[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43985 === (8))){
var inst_43938 = (state_43984[(13)]);
var state_43984__$1 = state_43984;
var statearr_44069_45862 = state_43984__$1;
(statearr_44069_45862[(2)] = inst_43938);

(statearr_44069_45862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30487__auto__ = null;
var cljs$core$async$state_machine__30487__auto____0 = (function (){
var statearr_44070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44070[(0)] = cljs$core$async$state_machine__30487__auto__);

(statearr_44070[(1)] = (1));

return statearr_44070;
});
var cljs$core$async$state_machine__30487__auto____1 = (function (state_43984){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_43984);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e44071){var ex__30491__auto__ = e44071;
var statearr_44072_45865 = state_43984;
(statearr_44072_45865[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_43984[(4)]))){
var statearr_44073_45872 = state_43984;
(statearr_44073_45872[(1)] = cljs.core.first((state_43984[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45873 = state_43984;
state_43984 = G__45873;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$state_machine__30487__auto__ = function(state_43984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30487__auto____1.call(this,state_43984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30487__auto____0;
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30487__auto____1;
return cljs$core$async$state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_44078 = f__31239__auto__();
(statearr_44078[(6)] = c__31235__auto___45769);

return statearr_44078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
