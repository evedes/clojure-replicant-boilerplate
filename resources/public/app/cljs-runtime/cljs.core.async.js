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
cljs.core.async.t_cljs$core$async31373 = (function (f,blockable,meta31374){
this.f = f;
this.blockable = blockable;
this.meta31374 = meta31374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31375,meta31374__$1){
var self__ = this;
var _31375__$1 = this;
return (new cljs.core.async.t_cljs$core$async31373(self__.f,self__.blockable,meta31374__$1));
}));

(cljs.core.async.t_cljs$core$async31373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31375){
var self__ = this;
var _31375__$1 = this;
return self__.meta31374;
}));

(cljs.core.async.t_cljs$core$async31373.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31373.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31373.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31373.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31374","meta31374",616257724,null)], null);
}));

(cljs.core.async.t_cljs$core$async31373.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31373");

(cljs.core.async.t_cljs$core$async31373.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31373");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31373.
 */
cljs.core.async.__GT_t_cljs$core$async31373 = (function cljs$core$async$__GT_t_cljs$core$async31373(f,blockable,meta31374){
return (new cljs.core.async.t_cljs$core$async31373(f,blockable,meta31374));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31357 = arguments.length;
switch (G__31357) {
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
return (new cljs.core.async.t_cljs$core$async31373(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31438 = arguments.length;
switch (G__31438) {
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
var G__31474 = arguments.length;
switch (G__31474) {
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
var G__31481 = arguments.length;
switch (G__31481) {
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
var val_34625 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34625) : fn1.call(null, val_34625));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34625) : fn1.call(null, val_34625));
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
var G__31494 = arguments.length;
switch (G__31494) {
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
var n__5593__auto___34634 = n;
var x_34635 = (0);
while(true){
if((x_34635 < n__5593__auto___34634)){
(a[x_34635] = x_34635);

var G__34636 = (x_34635 + (1));
x_34635 = G__34636;
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
cljs.core.async.t_cljs$core$async31503 = (function (flag,meta31504){
this.flag = flag;
this.meta31504 = meta31504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31505,meta31504__$1){
var self__ = this;
var _31505__$1 = this;
return (new cljs.core.async.t_cljs$core$async31503(self__.flag,meta31504__$1));
}));

(cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31505){
var self__ = this;
var _31505__$1 = this;
return self__.meta31504;
}));

(cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31504","meta31504",307888486,null)], null);
}));

(cljs.core.async.t_cljs$core$async31503.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31503");

(cljs.core.async.t_cljs$core$async31503.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31503");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31503.
 */
cljs.core.async.__GT_t_cljs$core$async31503 = (function cljs$core$async$__GT_t_cljs$core$async31503(flag,meta31504){
return (new cljs.core.async.t_cljs$core$async31503(flag,meta31504));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async31503(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31510 = (function (flag,cb,meta31511){
this.flag = flag;
this.cb = cb;
this.meta31511 = meta31511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31512,meta31511__$1){
var self__ = this;
var _31512__$1 = this;
return (new cljs.core.async.t_cljs$core$async31510(self__.flag,self__.cb,meta31511__$1));
}));

(cljs.core.async.t_cljs$core$async31510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31512){
var self__ = this;
var _31512__$1 = this;
return self__.meta31511;
}));

(cljs.core.async.t_cljs$core$async31510.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31510.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31510.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31510.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31510.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31511","meta31511",675417423,null)], null);
}));

(cljs.core.async.t_cljs$core$async31510.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31510.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31510");

(cljs.core.async.t_cljs$core$async31510.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31510");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31510.
 */
cljs.core.async.__GT_t_cljs$core$async31510 = (function cljs$core$async$__GT_t_cljs$core$async31510(flag,cb,meta31511){
return (new cljs.core.async.t_cljs$core$async31510(flag,cb,meta31511));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async31510(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31521_SHARP_){
var G__31526 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31521_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31526) : fret.call(null, G__31526));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31522_SHARP_){
var G__31528 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31522_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31528) : fret.call(null, G__31528));
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
var G__34642 = (i + (1));
i = G__34642;
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
var len__5726__auto___34646 = arguments.length;
var i__5727__auto___34647 = (0);
while(true){
if((i__5727__auto___34647 < len__5726__auto___34646)){
args__5732__auto__.push((arguments[i__5727__auto___34647]));

var G__34649 = (i__5727__auto___34647 + (1));
i__5727__auto___34647 = G__34649;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31537){
var map__31538 = p__31537;
var map__31538__$1 = cljs.core.__destructure_map(map__31538);
var opts = map__31538__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31535){
var G__31536 = cljs.core.first(seq31535);
var seq31535__$1 = cljs.core.next(seq31535);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31536,seq31535__$1);
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
var G__31542 = arguments.length;
switch (G__31542) {
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
var c__31235__auto___34655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_31635){
var state_val_31636 = (state_31635[(1)]);
if((state_val_31636 === (7))){
var inst_31615 = (state_31635[(2)]);
var state_31635__$1 = state_31635;
var statearr_31653_34660 = state_31635__$1;
(statearr_31653_34660[(2)] = inst_31615);

(statearr_31653_34660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (1))){
var state_31635__$1 = state_31635;
var statearr_31657_34661 = state_31635__$1;
(statearr_31657_34661[(2)] = null);

(statearr_31657_34661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (4))){
var inst_31583 = (state_31635[(7)]);
var inst_31583__$1 = (state_31635[(2)]);
var inst_31594 = (inst_31583__$1 == null);
var state_31635__$1 = (function (){var statearr_31661 = state_31635;
(statearr_31661[(7)] = inst_31583__$1);

return statearr_31661;
})();
if(cljs.core.truth_(inst_31594)){
var statearr_31663_34666 = state_31635__$1;
(statearr_31663_34666[(1)] = (5));

} else {
var statearr_31665_34667 = state_31635__$1;
(statearr_31665_34667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (13))){
var state_31635__$1 = state_31635;
var statearr_31670_34672 = state_31635__$1;
(statearr_31670_34672[(2)] = null);

(statearr_31670_34672[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (6))){
var inst_31583 = (state_31635[(7)]);
var state_31635__$1 = state_31635;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31635__$1,(11),to,inst_31583);
} else {
if((state_val_31636 === (3))){
var inst_31624 = (state_31635[(2)]);
var state_31635__$1 = state_31635;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31635__$1,inst_31624);
} else {
if((state_val_31636 === (12))){
var state_31635__$1 = state_31635;
var statearr_31675_34673 = state_31635__$1;
(statearr_31675_34673[(2)] = null);

(statearr_31675_34673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (2))){
var state_31635__$1 = state_31635;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31635__$1,(4),from);
} else {
if((state_val_31636 === (11))){
var inst_31604 = (state_31635[(2)]);
var state_31635__$1 = state_31635;
if(cljs.core.truth_(inst_31604)){
var statearr_31676_34680 = state_31635__$1;
(statearr_31676_34680[(1)] = (12));

} else {
var statearr_31677_34681 = state_31635__$1;
(statearr_31677_34681[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (9))){
var state_31635__$1 = state_31635;
var statearr_31678_34682 = state_31635__$1;
(statearr_31678_34682[(2)] = null);

(statearr_31678_34682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (5))){
var state_31635__$1 = state_31635;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31679_34683 = state_31635__$1;
(statearr_31679_34683[(1)] = (8));

} else {
var statearr_31680_34684 = state_31635__$1;
(statearr_31680_34684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (14))){
var inst_31613 = (state_31635[(2)]);
var state_31635__$1 = state_31635;
var statearr_31682_34685 = state_31635__$1;
(statearr_31682_34685[(2)] = inst_31613);

(statearr_31682_34685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (10))){
var inst_31600 = (state_31635[(2)]);
var state_31635__$1 = state_31635;
var statearr_31683_34692 = state_31635__$1;
(statearr_31683_34692[(2)] = inst_31600);

(statearr_31683_34692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (8))){
var inst_31597 = cljs.core.async.close_BANG_(to);
var state_31635__$1 = state_31635;
var statearr_31684_34693 = state_31635__$1;
(statearr_31684_34693[(2)] = inst_31597);

(statearr_31684_34693[(1)] = (10));


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
var statearr_31686 = [null,null,null,null,null,null,null,null];
(statearr_31686[(0)] = cljs$core$async$state_machine__30487__auto__);

(statearr_31686[(1)] = (1));

return statearr_31686;
});
var cljs$core$async$state_machine__30487__auto____1 = (function (state_31635){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_31635);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e31687){var ex__30491__auto__ = e31687;
var statearr_31688_34695 = state_31635;
(statearr_31688_34695[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_31635[(4)]))){
var statearr_31689_34696 = state_31635;
(statearr_31689_34696[(1)] = cljs.core.first((state_31635[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34697 = state_31635;
state_31635 = G__34697;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$state_machine__30487__auto__ = function(state_31635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30487__auto____1.call(this,state_31635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30487__auto____0;
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30487__auto____1;
return cljs$core$async$state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_31691 = f__31239__auto__();
(statearr_31691[(6)] = c__31235__auto___34655);

return statearr_31691;
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
var process__$1 = (function (p__31698){
var vec__31699 = p__31698;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31699,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31699,(1),null);
var job = vec__31699;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31235__auto___34700 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_31707){
var state_val_31708 = (state_31707[(1)]);
if((state_val_31708 === (1))){
var state_31707__$1 = state_31707;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31707__$1,(2),res,v);
} else {
if((state_val_31708 === (2))){
var inst_31704 = (state_31707[(2)]);
var inst_31705 = cljs.core.async.close_BANG_(res);
var state_31707__$1 = (function (){var statearr_31715 = state_31707;
(statearr_31715[(7)] = inst_31704);

return statearr_31715;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31707__$1,inst_31705);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0 = (function (){
var statearr_31716 = [null,null,null,null,null,null,null,null];
(statearr_31716[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__);

(statearr_31716[(1)] = (1));

return statearr_31716;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1 = (function (state_31707){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_31707);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e31717){var ex__30491__auto__ = e31717;
var statearr_31718_34715 = state_31707;
(statearr_31718_34715[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_31707[(4)]))){
var statearr_31719_34716 = state_31707;
(statearr_31719_34716[(1)] = cljs.core.first((state_31707[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34718 = state_31707;
state_31707 = G__34718;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__ = function(state_31707){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1.call(this,state_31707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_31721 = f__31239__auto__();
(statearr_31721[(6)] = c__31235__auto___34700);

return statearr_31721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31722){
var vec__31723 = p__31722;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31723,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31723,(1),null);
var job = vec__31723;
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
var n__5593__auto___34720 = n;
var __34721 = (0);
while(true){
if((__34721 < n__5593__auto___34720)){
var G__31726_34722 = type;
var G__31726_34723__$1 = (((G__31726_34722 instanceof cljs.core.Keyword))?G__31726_34722.fqn:null);
switch (G__31726_34723__$1) {
case "compute":
var c__31235__auto___34725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34721,c__31235__auto___34725,G__31726_34722,G__31726_34723__$1,n__5593__auto___34720,jobs,results,process__$1,async){
return (function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = ((function (__34721,c__31235__auto___34725,G__31726_34722,G__31726_34723__$1,n__5593__auto___34720,jobs,results,process__$1,async){
return (function (state_31740){
var state_val_31741 = (state_31740[(1)]);
if((state_val_31741 === (1))){
var state_31740__$1 = state_31740;
var statearr_31742_34728 = state_31740__$1;
(statearr_31742_34728[(2)] = null);

(statearr_31742_34728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (2))){
var state_31740__$1 = state_31740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31740__$1,(4),jobs);
} else {
if((state_val_31741 === (3))){
var inst_31738 = (state_31740[(2)]);
var state_31740__$1 = state_31740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31740__$1,inst_31738);
} else {
if((state_val_31741 === (4))){
var inst_31730 = (state_31740[(2)]);
var inst_31731 = process__$1(inst_31730);
var state_31740__$1 = state_31740;
if(cljs.core.truth_(inst_31731)){
var statearr_31744_34729 = state_31740__$1;
(statearr_31744_34729[(1)] = (5));

} else {
var statearr_31745_34730 = state_31740__$1;
(statearr_31745_34730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (5))){
var state_31740__$1 = state_31740;
var statearr_31746_34731 = state_31740__$1;
(statearr_31746_34731[(2)] = null);

(statearr_31746_34731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (6))){
var state_31740__$1 = state_31740;
var statearr_31748_34732 = state_31740__$1;
(statearr_31748_34732[(2)] = null);

(statearr_31748_34732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (7))){
var inst_31736 = (state_31740[(2)]);
var state_31740__$1 = state_31740;
var statearr_31749_34733 = state_31740__$1;
(statearr_31749_34733[(2)] = inst_31736);

(statearr_31749_34733[(1)] = (3));


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
});})(__34721,c__31235__auto___34725,G__31726_34722,G__31726_34723__$1,n__5593__auto___34720,jobs,results,process__$1,async))
;
return ((function (__34721,switch__30486__auto__,c__31235__auto___34725,G__31726_34722,G__31726_34723__$1,n__5593__auto___34720,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0 = (function (){
var statearr_31753 = [null,null,null,null,null,null,null];
(statearr_31753[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__);

(statearr_31753[(1)] = (1));

return statearr_31753;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1 = (function (state_31740){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_31740);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e31754){var ex__30491__auto__ = e31754;
var statearr_31755_34734 = state_31740;
(statearr_31755_34734[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_31740[(4)]))){
var statearr_31756_34735 = state_31740;
(statearr_31756_34735[(1)] = cljs.core.first((state_31740[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34736 = state_31740;
state_31740 = G__34736;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__ = function(state_31740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1.call(this,state_31740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__;
})()
;})(__34721,switch__30486__auto__,c__31235__auto___34725,G__31726_34722,G__31726_34723__$1,n__5593__auto___34720,jobs,results,process__$1,async))
})();
var state__31240__auto__ = (function (){var statearr_31758 = f__31239__auto__();
(statearr_31758[(6)] = c__31235__auto___34725);

return statearr_31758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
});})(__34721,c__31235__auto___34725,G__31726_34722,G__31726_34723__$1,n__5593__auto___34720,jobs,results,process__$1,async))
);


break;
case "async":
var c__31235__auto___34737 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34721,c__31235__auto___34737,G__31726_34722,G__31726_34723__$1,n__5593__auto___34720,jobs,results,process__$1,async){
return (function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = ((function (__34721,c__31235__auto___34737,G__31726_34722,G__31726_34723__$1,n__5593__auto___34720,jobs,results,process__$1,async){
return (function (state_31771){
var state_val_31772 = (state_31771[(1)]);
if((state_val_31772 === (1))){
var state_31771__$1 = state_31771;
var statearr_31776_34741 = state_31771__$1;
(statearr_31776_34741[(2)] = null);

(statearr_31776_34741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (2))){
var state_31771__$1 = state_31771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31771__$1,(4),jobs);
} else {
if((state_val_31772 === (3))){
var inst_31769 = (state_31771[(2)]);
var state_31771__$1 = state_31771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31771__$1,inst_31769);
} else {
if((state_val_31772 === (4))){
var inst_31761 = (state_31771[(2)]);
var inst_31762 = async(inst_31761);
var state_31771__$1 = state_31771;
if(cljs.core.truth_(inst_31762)){
var statearr_31779_34743 = state_31771__$1;
(statearr_31779_34743[(1)] = (5));

} else {
var statearr_31781_34744 = state_31771__$1;
(statearr_31781_34744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (5))){
var state_31771__$1 = state_31771;
var statearr_31784_34745 = state_31771__$1;
(statearr_31784_34745[(2)] = null);

(statearr_31784_34745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (6))){
var state_31771__$1 = state_31771;
var statearr_31785_34746 = state_31771__$1;
(statearr_31785_34746[(2)] = null);

(statearr_31785_34746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (7))){
var inst_31767 = (state_31771[(2)]);
var state_31771__$1 = state_31771;
var statearr_31786_34748 = state_31771__$1;
(statearr_31786_34748[(2)] = inst_31767);

(statearr_31786_34748[(1)] = (3));


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
});})(__34721,c__31235__auto___34737,G__31726_34722,G__31726_34723__$1,n__5593__auto___34720,jobs,results,process__$1,async))
;
return ((function (__34721,switch__30486__auto__,c__31235__auto___34737,G__31726_34722,G__31726_34723__$1,n__5593__auto___34720,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0 = (function (){
var statearr_31788 = [null,null,null,null,null,null,null];
(statearr_31788[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__);

(statearr_31788[(1)] = (1));

return statearr_31788;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1 = (function (state_31771){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_31771);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e31789){var ex__30491__auto__ = e31789;
var statearr_31790_34751 = state_31771;
(statearr_31790_34751[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_31771[(4)]))){
var statearr_31795_34752 = state_31771;
(statearr_31795_34752[(1)] = cljs.core.first((state_31771[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34754 = state_31771;
state_31771 = G__34754;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__ = function(state_31771){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1.call(this,state_31771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__;
})()
;})(__34721,switch__30486__auto__,c__31235__auto___34737,G__31726_34722,G__31726_34723__$1,n__5593__auto___34720,jobs,results,process__$1,async))
})();
var state__31240__auto__ = (function (){var statearr_31797 = f__31239__auto__();
(statearr_31797[(6)] = c__31235__auto___34737);

return statearr_31797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
});})(__34721,c__31235__auto___34737,G__31726_34722,G__31726_34723__$1,n__5593__auto___34720,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31726_34723__$1)].join('')));

}

var G__34758 = (__34721 + (1));
__34721 = G__34758;
continue;
} else {
}
break;
}

var c__31235__auto___34759 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_31823){
var state_val_31824 = (state_31823[(1)]);
if((state_val_31824 === (7))){
var inst_31818 = (state_31823[(2)]);
var state_31823__$1 = state_31823;
var statearr_31832_34766 = state_31823__$1;
(statearr_31832_34766[(2)] = inst_31818);

(statearr_31832_34766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (1))){
var state_31823__$1 = state_31823;
var statearr_31833_34767 = state_31823__$1;
(statearr_31833_34767[(2)] = null);

(statearr_31833_34767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (4))){
var inst_31801 = (state_31823[(7)]);
var inst_31801__$1 = (state_31823[(2)]);
var inst_31802 = (inst_31801__$1 == null);
var state_31823__$1 = (function (){var statearr_31834 = state_31823;
(statearr_31834[(7)] = inst_31801__$1);

return statearr_31834;
})();
if(cljs.core.truth_(inst_31802)){
var statearr_31836_34768 = state_31823__$1;
(statearr_31836_34768[(1)] = (5));

} else {
var statearr_31837_34769 = state_31823__$1;
(statearr_31837_34769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (6))){
var inst_31801 = (state_31823[(7)]);
var inst_31806 = (state_31823[(8)]);
var inst_31806__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31808 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31809 = [inst_31801,inst_31806__$1];
var inst_31810 = (new cljs.core.PersistentVector(null,2,(5),inst_31808,inst_31809,null));
var state_31823__$1 = (function (){var statearr_31838 = state_31823;
(statearr_31838[(8)] = inst_31806__$1);

return statearr_31838;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31823__$1,(8),jobs,inst_31810);
} else {
if((state_val_31824 === (3))){
var inst_31820 = (state_31823[(2)]);
var state_31823__$1 = state_31823;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31823__$1,inst_31820);
} else {
if((state_val_31824 === (2))){
var state_31823__$1 = state_31823;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31823__$1,(4),from);
} else {
if((state_val_31824 === (9))){
var inst_31815 = (state_31823[(2)]);
var state_31823__$1 = (function (){var statearr_31840 = state_31823;
(statearr_31840[(9)] = inst_31815);

return statearr_31840;
})();
var statearr_31842_34771 = state_31823__$1;
(statearr_31842_34771[(2)] = null);

(statearr_31842_34771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (5))){
var inst_31804 = cljs.core.async.close_BANG_(jobs);
var state_31823__$1 = state_31823;
var statearr_31845_34772 = state_31823__$1;
(statearr_31845_34772[(2)] = inst_31804);

(statearr_31845_34772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (8))){
var inst_31806 = (state_31823[(8)]);
var inst_31812 = (state_31823[(2)]);
var state_31823__$1 = (function (){var statearr_31846 = state_31823;
(statearr_31846[(10)] = inst_31812);

return statearr_31846;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31823__$1,(9),results,inst_31806);
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
var statearr_31848 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31848[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__);

(statearr_31848[(1)] = (1));

return statearr_31848;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1 = (function (state_31823){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_31823);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e31849){var ex__30491__auto__ = e31849;
var statearr_31850_34774 = state_31823;
(statearr_31850_34774[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_31823[(4)]))){
var statearr_31851_34775 = state_31823;
(statearr_31851_34775[(1)] = cljs.core.first((state_31823[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34778 = state_31823;
state_31823 = G__34778;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__ = function(state_31823){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1.call(this,state_31823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_31853 = f__31239__auto__();
(statearr_31853[(6)] = c__31235__auto___34759);

return statearr_31853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
}));


var c__31235__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_31895){
var state_val_31896 = (state_31895[(1)]);
if((state_val_31896 === (7))){
var inst_31891 = (state_31895[(2)]);
var state_31895__$1 = state_31895;
var statearr_31898_34784 = state_31895__$1;
(statearr_31898_34784[(2)] = inst_31891);

(statearr_31898_34784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (20))){
var state_31895__$1 = state_31895;
var statearr_31899_34785 = state_31895__$1;
(statearr_31899_34785[(2)] = null);

(statearr_31899_34785[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (1))){
var state_31895__$1 = state_31895;
var statearr_31900_34787 = state_31895__$1;
(statearr_31900_34787[(2)] = null);

(statearr_31900_34787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (4))){
var inst_31859 = (state_31895[(7)]);
var inst_31859__$1 = (state_31895[(2)]);
var inst_31861 = (inst_31859__$1 == null);
var state_31895__$1 = (function (){var statearr_31902 = state_31895;
(statearr_31902[(7)] = inst_31859__$1);

return statearr_31902;
})();
if(cljs.core.truth_(inst_31861)){
var statearr_31903_34795 = state_31895__$1;
(statearr_31903_34795[(1)] = (5));

} else {
var statearr_31904_34796 = state_31895__$1;
(statearr_31904_34796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (15))){
var inst_31873 = (state_31895[(8)]);
var state_31895__$1 = state_31895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31895__$1,(18),to,inst_31873);
} else {
if((state_val_31896 === (21))){
var inst_31886 = (state_31895[(2)]);
var state_31895__$1 = state_31895;
var statearr_31906_34797 = state_31895__$1;
(statearr_31906_34797[(2)] = inst_31886);

(statearr_31906_34797[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (13))){
var inst_31888 = (state_31895[(2)]);
var state_31895__$1 = (function (){var statearr_31907 = state_31895;
(statearr_31907[(9)] = inst_31888);

return statearr_31907;
})();
var statearr_31908_34798 = state_31895__$1;
(statearr_31908_34798[(2)] = null);

(statearr_31908_34798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (6))){
var inst_31859 = (state_31895[(7)]);
var state_31895__$1 = state_31895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31895__$1,(11),inst_31859);
} else {
if((state_val_31896 === (17))){
var inst_31881 = (state_31895[(2)]);
var state_31895__$1 = state_31895;
if(cljs.core.truth_(inst_31881)){
var statearr_31913_34799 = state_31895__$1;
(statearr_31913_34799[(1)] = (19));

} else {
var statearr_31914_34800 = state_31895__$1;
(statearr_31914_34800[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (3))){
var inst_31893 = (state_31895[(2)]);
var state_31895__$1 = state_31895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31895__$1,inst_31893);
} else {
if((state_val_31896 === (12))){
var inst_31870 = (state_31895[(10)]);
var state_31895__$1 = state_31895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31895__$1,(14),inst_31870);
} else {
if((state_val_31896 === (2))){
var state_31895__$1 = state_31895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31895__$1,(4),results);
} else {
if((state_val_31896 === (19))){
var state_31895__$1 = state_31895;
var statearr_31916_34803 = state_31895__$1;
(statearr_31916_34803[(2)] = null);

(statearr_31916_34803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (11))){
var inst_31870 = (state_31895[(2)]);
var state_31895__$1 = (function (){var statearr_31918 = state_31895;
(statearr_31918[(10)] = inst_31870);

return statearr_31918;
})();
var statearr_31919_34809 = state_31895__$1;
(statearr_31919_34809[(2)] = null);

(statearr_31919_34809[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (9))){
var state_31895__$1 = state_31895;
var statearr_31920_34811 = state_31895__$1;
(statearr_31920_34811[(2)] = null);

(statearr_31920_34811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (5))){
var state_31895__$1 = state_31895;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31922_34817 = state_31895__$1;
(statearr_31922_34817[(1)] = (8));

} else {
var statearr_31923_34818 = state_31895__$1;
(statearr_31923_34818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (14))){
var inst_31875 = (state_31895[(11)]);
var inst_31873 = (state_31895[(8)]);
var inst_31873__$1 = (state_31895[(2)]);
var inst_31874 = (inst_31873__$1 == null);
var inst_31875__$1 = cljs.core.not(inst_31874);
var state_31895__$1 = (function (){var statearr_31931 = state_31895;
(statearr_31931[(11)] = inst_31875__$1);

(statearr_31931[(8)] = inst_31873__$1);

return statearr_31931;
})();
if(inst_31875__$1){
var statearr_31933_34823 = state_31895__$1;
(statearr_31933_34823[(1)] = (15));

} else {
var statearr_31934_34824 = state_31895__$1;
(statearr_31934_34824[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (16))){
var inst_31875 = (state_31895[(11)]);
var state_31895__$1 = state_31895;
var statearr_31936_34826 = state_31895__$1;
(statearr_31936_34826[(2)] = inst_31875);

(statearr_31936_34826[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (10))){
var inst_31867 = (state_31895[(2)]);
var state_31895__$1 = state_31895;
var statearr_31937_34828 = state_31895__$1;
(statearr_31937_34828[(2)] = inst_31867);

(statearr_31937_34828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (18))){
var inst_31878 = (state_31895[(2)]);
var state_31895__$1 = state_31895;
var statearr_31939_34829 = state_31895__$1;
(statearr_31939_34829[(2)] = inst_31878);

(statearr_31939_34829[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (8))){
var inst_31864 = cljs.core.async.close_BANG_(to);
var state_31895__$1 = state_31895;
var statearr_31940_34830 = state_31895__$1;
(statearr_31940_34830[(2)] = inst_31864);

(statearr_31940_34830[(1)] = (10));


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
var statearr_31943 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31943[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__);

(statearr_31943[(1)] = (1));

return statearr_31943;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1 = (function (state_31895){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_31895);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e31944){var ex__30491__auto__ = e31944;
var statearr_31945_34834 = state_31895;
(statearr_31945_34834[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_31895[(4)]))){
var statearr_31946_34835 = state_31895;
(statearr_31946_34835[(1)] = cljs.core.first((state_31895[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34836 = state_31895;
state_31895 = G__34836;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__ = function(state_31895){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1.call(this,state_31895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_31947 = f__31239__auto__();
(statearr_31947[(6)] = c__31235__auto__);

return statearr_31947;
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
var G__31950 = arguments.length;
switch (G__31950) {
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
var G__31959 = arguments.length;
switch (G__31959) {
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
var G__31968 = arguments.length;
switch (G__31968) {
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
var c__31235__auto___34858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_32003){
var state_val_32004 = (state_32003[(1)]);
if((state_val_32004 === (7))){
var inst_31999 = (state_32003[(2)]);
var state_32003__$1 = state_32003;
var statearr_32009_34861 = state_32003__$1;
(statearr_32009_34861[(2)] = inst_31999);

(statearr_32009_34861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32004 === (1))){
var state_32003__$1 = state_32003;
var statearr_32012_34862 = state_32003__$1;
(statearr_32012_34862[(2)] = null);

(statearr_32012_34862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32004 === (4))){
var inst_31976 = (state_32003[(7)]);
var inst_31976__$1 = (state_32003[(2)]);
var inst_31977 = (inst_31976__$1 == null);
var state_32003__$1 = (function (){var statearr_32016 = state_32003;
(statearr_32016[(7)] = inst_31976__$1);

return statearr_32016;
})();
if(cljs.core.truth_(inst_31977)){
var statearr_32017_34865 = state_32003__$1;
(statearr_32017_34865[(1)] = (5));

} else {
var statearr_32018_34866 = state_32003__$1;
(statearr_32018_34866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32004 === (13))){
var state_32003__$1 = state_32003;
var statearr_32022_34867 = state_32003__$1;
(statearr_32022_34867[(2)] = null);

(statearr_32022_34867[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32004 === (6))){
var inst_31976 = (state_32003[(7)]);
var inst_31983 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31976) : p.call(null, inst_31976));
var state_32003__$1 = state_32003;
if(cljs.core.truth_(inst_31983)){
var statearr_32023_34868 = state_32003__$1;
(statearr_32023_34868[(1)] = (9));

} else {
var statearr_32024_34869 = state_32003__$1;
(statearr_32024_34869[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32004 === (3))){
var inst_32001 = (state_32003[(2)]);
var state_32003__$1 = state_32003;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32003__$1,inst_32001);
} else {
if((state_val_32004 === (12))){
var state_32003__$1 = state_32003;
var statearr_32026_34870 = state_32003__$1;
(statearr_32026_34870[(2)] = null);

(statearr_32026_34870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32004 === (2))){
var state_32003__$1 = state_32003;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32003__$1,(4),ch);
} else {
if((state_val_32004 === (11))){
var inst_31976 = (state_32003[(7)]);
var inst_31989 = (state_32003[(2)]);
var state_32003__$1 = state_32003;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32003__$1,(8),inst_31989,inst_31976);
} else {
if((state_val_32004 === (9))){
var state_32003__$1 = state_32003;
var statearr_32031_34879 = state_32003__$1;
(statearr_32031_34879[(2)] = tc);

(statearr_32031_34879[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32004 === (5))){
var inst_31980 = cljs.core.async.close_BANG_(tc);
var inst_31981 = cljs.core.async.close_BANG_(fc);
var state_32003__$1 = (function (){var statearr_32034 = state_32003;
(statearr_32034[(8)] = inst_31980);

return statearr_32034;
})();
var statearr_32035_34884 = state_32003__$1;
(statearr_32035_34884[(2)] = inst_31981);

(statearr_32035_34884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32004 === (14))){
var inst_31996 = (state_32003[(2)]);
var state_32003__$1 = state_32003;
var statearr_32041_34886 = state_32003__$1;
(statearr_32041_34886[(2)] = inst_31996);

(statearr_32041_34886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32004 === (10))){
var state_32003__$1 = state_32003;
var statearr_32042_34891 = state_32003__$1;
(statearr_32042_34891[(2)] = fc);

(statearr_32042_34891[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32004 === (8))){
var inst_31991 = (state_32003[(2)]);
var state_32003__$1 = state_32003;
if(cljs.core.truth_(inst_31991)){
var statearr_32043_34892 = state_32003__$1;
(statearr_32043_34892[(1)] = (12));

} else {
var statearr_32044_34893 = state_32003__$1;
(statearr_32044_34893[(1)] = (13));

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
var statearr_32045 = [null,null,null,null,null,null,null,null,null];
(statearr_32045[(0)] = cljs$core$async$state_machine__30487__auto__);

(statearr_32045[(1)] = (1));

return statearr_32045;
});
var cljs$core$async$state_machine__30487__auto____1 = (function (state_32003){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_32003);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e32047){var ex__30491__auto__ = e32047;
var statearr_32048_34897 = state_32003;
(statearr_32048_34897[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_32003[(4)]))){
var statearr_32049_34898 = state_32003;
(statearr_32049_34898[(1)] = cljs.core.first((state_32003[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34899 = state_32003;
state_32003 = G__34899;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$state_machine__30487__auto__ = function(state_32003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30487__auto____1.call(this,state_32003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30487__auto____0;
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30487__auto____1;
return cljs$core$async$state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_32054 = f__31239__auto__();
(statearr_32054[(6)] = c__31235__auto___34858);

return statearr_32054;
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
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_32091){
var state_val_32092 = (state_32091[(1)]);
if((state_val_32092 === (7))){
var inst_32084 = (state_32091[(2)]);
var state_32091__$1 = state_32091;
var statearr_32096_34904 = state_32091__$1;
(statearr_32096_34904[(2)] = inst_32084);

(statearr_32096_34904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (1))){
var inst_32062 = init;
var inst_32065 = inst_32062;
var state_32091__$1 = (function (){var statearr_32097 = state_32091;
(statearr_32097[(7)] = inst_32065);

return statearr_32097;
})();
var statearr_32098_34906 = state_32091__$1;
(statearr_32098_34906[(2)] = null);

(statearr_32098_34906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (4))){
var inst_32070 = (state_32091[(8)]);
var inst_32070__$1 = (state_32091[(2)]);
var inst_32071 = (inst_32070__$1 == null);
var state_32091__$1 = (function (){var statearr_32101 = state_32091;
(statearr_32101[(8)] = inst_32070__$1);

return statearr_32101;
})();
if(cljs.core.truth_(inst_32071)){
var statearr_32102_34911 = state_32091__$1;
(statearr_32102_34911[(1)] = (5));

} else {
var statearr_32103_34915 = state_32091__$1;
(statearr_32103_34915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (6))){
var inst_32070 = (state_32091[(8)]);
var inst_32074 = (state_32091[(9)]);
var inst_32065 = (state_32091[(7)]);
var inst_32074__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32065,inst_32070) : f.call(null, inst_32065,inst_32070));
var inst_32075 = cljs.core.reduced_QMARK_(inst_32074__$1);
var state_32091__$1 = (function (){var statearr_32108 = state_32091;
(statearr_32108[(9)] = inst_32074__$1);

return statearr_32108;
})();
if(inst_32075){
var statearr_32109_34919 = state_32091__$1;
(statearr_32109_34919[(1)] = (8));

} else {
var statearr_32110_34921 = state_32091__$1;
(statearr_32110_34921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (3))){
var inst_32086 = (state_32091[(2)]);
var state_32091__$1 = state_32091;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32091__$1,inst_32086);
} else {
if((state_val_32092 === (2))){
var state_32091__$1 = state_32091;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32091__$1,(4),ch);
} else {
if((state_val_32092 === (9))){
var inst_32074 = (state_32091[(9)]);
var inst_32065 = inst_32074;
var state_32091__$1 = (function (){var statearr_32116 = state_32091;
(statearr_32116[(7)] = inst_32065);

return statearr_32116;
})();
var statearr_32118_34925 = state_32091__$1;
(statearr_32118_34925[(2)] = null);

(statearr_32118_34925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (5))){
var inst_32065 = (state_32091[(7)]);
var state_32091__$1 = state_32091;
var statearr_32122_34927 = state_32091__$1;
(statearr_32122_34927[(2)] = inst_32065);

(statearr_32122_34927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (10))){
var inst_32082 = (state_32091[(2)]);
var state_32091__$1 = state_32091;
var statearr_32123_34928 = state_32091__$1;
(statearr_32123_34928[(2)] = inst_32082);

(statearr_32123_34928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (8))){
var inst_32074 = (state_32091[(9)]);
var inst_32078 = cljs.core.deref(inst_32074);
var state_32091__$1 = state_32091;
var statearr_32124_34932 = state_32091__$1;
(statearr_32124_34932[(2)] = inst_32078);

(statearr_32124_34932[(1)] = (10));


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
var statearr_32128 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32128[(0)] = cljs$core$async$reduce_$_state_machine__30487__auto__);

(statearr_32128[(1)] = (1));

return statearr_32128;
});
var cljs$core$async$reduce_$_state_machine__30487__auto____1 = (function (state_32091){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_32091);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e32130){var ex__30491__auto__ = e32130;
var statearr_32132_34935 = state_32091;
(statearr_32132_34935[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_32091[(4)]))){
var statearr_32136_34936 = state_32091;
(statearr_32136_34936[(1)] = cljs.core.first((state_32091[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34943 = state_32091;
state_32091 = G__34943;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30487__auto__ = function(state_32091){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30487__auto____1.call(this,state_32091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30487__auto____0;
cljs$core$async$reduce_$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30487__auto____1;
return cljs$core$async$reduce_$_state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_32139 = f__31239__auto__();
(statearr_32139[(6)] = c__31235__auto__);

return statearr_32139;
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
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_32153){
var state_val_32154 = (state_32153[(1)]);
if((state_val_32154 === (1))){
var inst_32146 = cljs.core.async.reduce(f__$1,init,ch);
var state_32153__$1 = state_32153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32153__$1,(2),inst_32146);
} else {
if((state_val_32154 === (2))){
var inst_32149 = (state_32153[(2)]);
var inst_32151 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32149) : f__$1.call(null, inst_32149));
var state_32153__$1 = state_32153;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32153__$1,inst_32151);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30487__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30487__auto____0 = (function (){
var statearr_32163 = [null,null,null,null,null,null,null];
(statearr_32163[(0)] = cljs$core$async$transduce_$_state_machine__30487__auto__);

(statearr_32163[(1)] = (1));

return statearr_32163;
});
var cljs$core$async$transduce_$_state_machine__30487__auto____1 = (function (state_32153){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_32153);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e32167){var ex__30491__auto__ = e32167;
var statearr_32169_34947 = state_32153;
(statearr_32169_34947[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_32153[(4)]))){
var statearr_32170_34948 = state_32153;
(statearr_32170_34948[(1)] = cljs.core.first((state_32153[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34950 = state_32153;
state_32153 = G__34950;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30487__auto__ = function(state_32153){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30487__auto____1.call(this,state_32153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30487__auto____0;
cljs$core$async$transduce_$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30487__auto____1;
return cljs$core$async$transduce_$_state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_32173 = f__31239__auto__();
(statearr_32173[(6)] = c__31235__auto__);

return statearr_32173;
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
var G__32178 = arguments.length;
switch (G__32178) {
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
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_32216){
var state_val_32217 = (state_32216[(1)]);
if((state_val_32217 === (7))){
var inst_32191 = (state_32216[(2)]);
var state_32216__$1 = state_32216;
var statearr_32220_34958 = state_32216__$1;
(statearr_32220_34958[(2)] = inst_32191);

(statearr_32220_34958[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32217 === (1))){
var inst_32182 = cljs.core.seq(coll);
var inst_32183 = inst_32182;
var state_32216__$1 = (function (){var statearr_32224 = state_32216;
(statearr_32224[(7)] = inst_32183);

return statearr_32224;
})();
var statearr_32226_34959 = state_32216__$1;
(statearr_32226_34959[(2)] = null);

(statearr_32226_34959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32217 === (4))){
var inst_32183 = (state_32216[(7)]);
var inst_32188 = cljs.core.first(inst_32183);
var state_32216__$1 = state_32216;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32216__$1,(7),ch,inst_32188);
} else {
if((state_val_32217 === (13))){
var inst_32207 = (state_32216[(2)]);
var state_32216__$1 = state_32216;
var statearr_32231_34960 = state_32216__$1;
(statearr_32231_34960[(2)] = inst_32207);

(statearr_32231_34960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32217 === (6))){
var inst_32194 = (state_32216[(2)]);
var state_32216__$1 = state_32216;
if(cljs.core.truth_(inst_32194)){
var statearr_32234_34961 = state_32216__$1;
(statearr_32234_34961[(1)] = (8));

} else {
var statearr_32235_34962 = state_32216__$1;
(statearr_32235_34962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32217 === (3))){
var inst_32214 = (state_32216[(2)]);
var state_32216__$1 = state_32216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32216__$1,inst_32214);
} else {
if((state_val_32217 === (12))){
var state_32216__$1 = state_32216;
var statearr_32239_34963 = state_32216__$1;
(statearr_32239_34963[(2)] = null);

(statearr_32239_34963[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32217 === (2))){
var inst_32183 = (state_32216[(7)]);
var state_32216__$1 = state_32216;
if(cljs.core.truth_(inst_32183)){
var statearr_32245_34965 = state_32216__$1;
(statearr_32245_34965[(1)] = (4));

} else {
var statearr_32246_34966 = state_32216__$1;
(statearr_32246_34966[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32217 === (11))){
var inst_32204 = cljs.core.async.close_BANG_(ch);
var state_32216__$1 = state_32216;
var statearr_32250_34971 = state_32216__$1;
(statearr_32250_34971[(2)] = inst_32204);

(statearr_32250_34971[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32217 === (9))){
var state_32216__$1 = state_32216;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32251_34972 = state_32216__$1;
(statearr_32251_34972[(1)] = (11));

} else {
var statearr_32254_34973 = state_32216__$1;
(statearr_32254_34973[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32217 === (5))){
var inst_32183 = (state_32216[(7)]);
var state_32216__$1 = state_32216;
var statearr_32255_34974 = state_32216__$1;
(statearr_32255_34974[(2)] = inst_32183);

(statearr_32255_34974[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32217 === (10))){
var inst_32209 = (state_32216[(2)]);
var state_32216__$1 = state_32216;
var statearr_32259_34983 = state_32216__$1;
(statearr_32259_34983[(2)] = inst_32209);

(statearr_32259_34983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32217 === (8))){
var inst_32183 = (state_32216[(7)]);
var inst_32197 = cljs.core.next(inst_32183);
var inst_32183__$1 = inst_32197;
var state_32216__$1 = (function (){var statearr_32261 = state_32216;
(statearr_32261[(7)] = inst_32183__$1);

return statearr_32261;
})();
var statearr_32262_34986 = state_32216__$1;
(statearr_32262_34986[(2)] = null);

(statearr_32262_34986[(1)] = (2));


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
var statearr_32265 = [null,null,null,null,null,null,null,null];
(statearr_32265[(0)] = cljs$core$async$state_machine__30487__auto__);

(statearr_32265[(1)] = (1));

return statearr_32265;
});
var cljs$core$async$state_machine__30487__auto____1 = (function (state_32216){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_32216);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e32266){var ex__30491__auto__ = e32266;
var statearr_32267_34988 = state_32216;
(statearr_32267_34988[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_32216[(4)]))){
var statearr_32270_34993 = state_32216;
(statearr_32270_34993[(1)] = cljs.core.first((state_32216[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34994 = state_32216;
state_32216 = G__34994;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$state_machine__30487__auto__ = function(state_32216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30487__auto____1.call(this,state_32216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30487__auto____0;
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30487__auto____1;
return cljs$core$async$state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_32274 = f__31239__auto__();
(statearr_32274[(6)] = c__31235__auto__);

return statearr_32274;
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
var G__32282 = arguments.length;
switch (G__32282) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_35000 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_35000(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35001 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_35001(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35002 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_35002(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35009 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_35009(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32333 = (function (ch,cs,meta32334){
this.ch = ch;
this.cs = cs;
this.meta32334 = meta32334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32335,meta32334__$1){
var self__ = this;
var _32335__$1 = this;
return (new cljs.core.async.t_cljs$core$async32333(self__.ch,self__.cs,meta32334__$1));
}));

(cljs.core.async.t_cljs$core$async32333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32335){
var self__ = this;
var _32335__$1 = this;
return self__.meta32334;
}));

(cljs.core.async.t_cljs$core$async32333.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32333.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32333.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32333.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32333.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32333.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32334","meta32334",-931752991,null)], null);
}));

(cljs.core.async.t_cljs$core$async32333.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32333");

(cljs.core.async.t_cljs$core$async32333.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async32333");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32333.
 */
cljs.core.async.__GT_t_cljs$core$async32333 = (function cljs$core$async$__GT_t_cljs$core$async32333(ch,cs,meta32334){
return (new cljs.core.async.t_cljs$core$async32333(ch,cs,meta32334));
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
var m = (new cljs.core.async.t_cljs$core$async32333(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__31235__auto___35028 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_32522){
var state_val_32524 = (state_32522[(1)]);
if((state_val_32524 === (7))){
var inst_32511 = (state_32522[(2)]);
var state_32522__$1 = state_32522;
var statearr_32529_35032 = state_32522__$1;
(statearr_32529_35032[(2)] = inst_32511);

(statearr_32529_35032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (20))){
var inst_32406 = (state_32522[(7)]);
var inst_32419 = cljs.core.first(inst_32406);
var inst_32420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32419,(0),null);
var inst_32422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32419,(1),null);
var state_32522__$1 = (function (){var statearr_32534 = state_32522;
(statearr_32534[(8)] = inst_32420);

return statearr_32534;
})();
if(cljs.core.truth_(inst_32422)){
var statearr_32537_35034 = state_32522__$1;
(statearr_32537_35034[(1)] = (22));

} else {
var statearr_32539_35035 = state_32522__$1;
(statearr_32539_35035[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (27))){
var inst_32460 = (state_32522[(9)]);
var inst_32454 = (state_32522[(10)]);
var inst_32364 = (state_32522[(11)]);
var inst_32452 = (state_32522[(12)]);
var inst_32460__$1 = cljs.core._nth(inst_32452,inst_32454);
var inst_32461 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32460__$1,inst_32364,done);
var state_32522__$1 = (function (){var statearr_32545 = state_32522;
(statearr_32545[(9)] = inst_32460__$1);

return statearr_32545;
})();
if(cljs.core.truth_(inst_32461)){
var statearr_32550_35036 = state_32522__$1;
(statearr_32550_35036[(1)] = (30));

} else {
var statearr_32552_35038 = state_32522__$1;
(statearr_32552_35038[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (1))){
var state_32522__$1 = state_32522;
var statearr_32555_35040 = state_32522__$1;
(statearr_32555_35040[(2)] = null);

(statearr_32555_35040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (24))){
var inst_32406 = (state_32522[(7)]);
var inst_32427 = (state_32522[(2)]);
var inst_32428 = cljs.core.next(inst_32406);
var inst_32373 = inst_32428;
var inst_32374 = null;
var inst_32375 = (0);
var inst_32376 = (0);
var state_32522__$1 = (function (){var statearr_32563 = state_32522;
(statearr_32563[(13)] = inst_32374);

(statearr_32563[(14)] = inst_32373);

(statearr_32563[(15)] = inst_32427);

(statearr_32563[(16)] = inst_32376);

(statearr_32563[(17)] = inst_32375);

return statearr_32563;
})();
var statearr_32565_35047 = state_32522__$1;
(statearr_32565_35047[(2)] = null);

(statearr_32565_35047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (39))){
var state_32522__$1 = state_32522;
var statearr_32574_35048 = state_32522__$1;
(statearr_32574_35048[(2)] = null);

(statearr_32574_35048[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (4))){
var inst_32364 = (state_32522[(11)]);
var inst_32364__$1 = (state_32522[(2)]);
var inst_32365 = (inst_32364__$1 == null);
var state_32522__$1 = (function (){var statearr_32578 = state_32522;
(statearr_32578[(11)] = inst_32364__$1);

return statearr_32578;
})();
if(cljs.core.truth_(inst_32365)){
var statearr_32579_35049 = state_32522__$1;
(statearr_32579_35049[(1)] = (5));

} else {
var statearr_32580_35050 = state_32522__$1;
(statearr_32580_35050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (15))){
var inst_32374 = (state_32522[(13)]);
var inst_32373 = (state_32522[(14)]);
var inst_32376 = (state_32522[(16)]);
var inst_32375 = (state_32522[(17)]);
var inst_32397 = (state_32522[(2)]);
var inst_32402 = (inst_32376 + (1));
var tmp32567 = inst_32374;
var tmp32568 = inst_32373;
var tmp32569 = inst_32375;
var inst_32373__$1 = tmp32568;
var inst_32374__$1 = tmp32567;
var inst_32375__$1 = tmp32569;
var inst_32376__$1 = inst_32402;
var state_32522__$1 = (function (){var statearr_32586 = state_32522;
(statearr_32586[(13)] = inst_32374__$1);

(statearr_32586[(14)] = inst_32373__$1);

(statearr_32586[(18)] = inst_32397);

(statearr_32586[(16)] = inst_32376__$1);

(statearr_32586[(17)] = inst_32375__$1);

return statearr_32586;
})();
var statearr_32587_35052 = state_32522__$1;
(statearr_32587_35052[(2)] = null);

(statearr_32587_35052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (21))){
var inst_32431 = (state_32522[(2)]);
var state_32522__$1 = state_32522;
var statearr_32593_35053 = state_32522__$1;
(statearr_32593_35053[(2)] = inst_32431);

(statearr_32593_35053[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (31))){
var inst_32460 = (state_32522[(9)]);
var inst_32464 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_32460);
var state_32522__$1 = state_32522;
var statearr_32595_35055 = state_32522__$1;
(statearr_32595_35055[(2)] = inst_32464);

(statearr_32595_35055[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (32))){
var inst_32454 = (state_32522[(10)]);
var inst_32453 = (state_32522[(19)]);
var inst_32451 = (state_32522[(20)]);
var inst_32452 = (state_32522[(12)]);
var inst_32466 = (state_32522[(2)]);
var inst_32467 = (inst_32454 + (1));
var tmp32590 = inst_32453;
var tmp32591 = inst_32451;
var tmp32592 = inst_32452;
var inst_32451__$1 = tmp32591;
var inst_32452__$1 = tmp32592;
var inst_32453__$1 = tmp32590;
var inst_32454__$1 = inst_32467;
var state_32522__$1 = (function (){var statearr_32599 = state_32522;
(statearr_32599[(10)] = inst_32454__$1);

(statearr_32599[(19)] = inst_32453__$1);

(statearr_32599[(20)] = inst_32451__$1);

(statearr_32599[(21)] = inst_32466);

(statearr_32599[(12)] = inst_32452__$1);

return statearr_32599;
})();
var statearr_32607_35066 = state_32522__$1;
(statearr_32607_35066[(2)] = null);

(statearr_32607_35066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (40))){
var inst_32482 = (state_32522[(22)]);
var inst_32487 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_32482);
var state_32522__$1 = state_32522;
var statearr_32613_35077 = state_32522__$1;
(statearr_32613_35077[(2)] = inst_32487);

(statearr_32613_35077[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (33))){
var inst_32471 = (state_32522[(23)]);
var inst_32473 = cljs.core.chunked_seq_QMARK_(inst_32471);
var state_32522__$1 = state_32522;
if(inst_32473){
var statearr_32618_35082 = state_32522__$1;
(statearr_32618_35082[(1)] = (36));

} else {
var statearr_32620_35083 = state_32522__$1;
(statearr_32620_35083[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (13))){
var inst_32387 = (state_32522[(24)]);
var inst_32394 = cljs.core.async.close_BANG_(inst_32387);
var state_32522__$1 = state_32522;
var statearr_32628_35088 = state_32522__$1;
(statearr_32628_35088[(2)] = inst_32394);

(statearr_32628_35088[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (22))){
var inst_32420 = (state_32522[(8)]);
var inst_32424 = cljs.core.async.close_BANG_(inst_32420);
var state_32522__$1 = state_32522;
var statearr_32630_35089 = state_32522__$1;
(statearr_32630_35089[(2)] = inst_32424);

(statearr_32630_35089[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (36))){
var inst_32471 = (state_32522[(23)]);
var inst_32475 = cljs.core.chunk_first(inst_32471);
var inst_32476 = cljs.core.chunk_rest(inst_32471);
var inst_32477 = cljs.core.count(inst_32475);
var inst_32451 = inst_32476;
var inst_32452 = inst_32475;
var inst_32453 = inst_32477;
var inst_32454 = (0);
var state_32522__$1 = (function (){var statearr_32637 = state_32522;
(statearr_32637[(10)] = inst_32454);

(statearr_32637[(19)] = inst_32453);

(statearr_32637[(20)] = inst_32451);

(statearr_32637[(12)] = inst_32452);

return statearr_32637;
})();
var statearr_32642_35094 = state_32522__$1;
(statearr_32642_35094[(2)] = null);

(statearr_32642_35094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (41))){
var inst_32471 = (state_32522[(23)]);
var inst_32489 = (state_32522[(2)]);
var inst_32490 = cljs.core.next(inst_32471);
var inst_32451 = inst_32490;
var inst_32452 = null;
var inst_32453 = (0);
var inst_32454 = (0);
var state_32522__$1 = (function (){var statearr_32645 = state_32522;
(statearr_32645[(10)] = inst_32454);

(statearr_32645[(19)] = inst_32453);

(statearr_32645[(20)] = inst_32451);

(statearr_32645[(25)] = inst_32489);

(statearr_32645[(12)] = inst_32452);

return statearr_32645;
})();
var statearr_32646_35098 = state_32522__$1;
(statearr_32646_35098[(2)] = null);

(statearr_32646_35098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (43))){
var state_32522__$1 = state_32522;
var statearr_32650_35099 = state_32522__$1;
(statearr_32650_35099[(2)] = null);

(statearr_32650_35099[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (29))){
var inst_32498 = (state_32522[(2)]);
var state_32522__$1 = state_32522;
var statearr_32656_35104 = state_32522__$1;
(statearr_32656_35104[(2)] = inst_32498);

(statearr_32656_35104[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (44))){
var inst_32508 = (state_32522[(2)]);
var state_32522__$1 = (function (){var statearr_32660 = state_32522;
(statearr_32660[(26)] = inst_32508);

return statearr_32660;
})();
var statearr_32662_35107 = state_32522__$1;
(statearr_32662_35107[(2)] = null);

(statearr_32662_35107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (6))){
var inst_32441 = (state_32522[(27)]);
var inst_32440 = cljs.core.deref(cs);
var inst_32441__$1 = cljs.core.keys(inst_32440);
var inst_32442 = cljs.core.count(inst_32441__$1);
var inst_32443 = cljs.core.reset_BANG_(dctr,inst_32442);
var inst_32450 = cljs.core.seq(inst_32441__$1);
var inst_32451 = inst_32450;
var inst_32452 = null;
var inst_32453 = (0);
var inst_32454 = (0);
var state_32522__$1 = (function (){var statearr_32668 = state_32522;
(statearr_32668[(27)] = inst_32441__$1);

(statearr_32668[(10)] = inst_32454);

(statearr_32668[(19)] = inst_32453);

(statearr_32668[(20)] = inst_32451);

(statearr_32668[(28)] = inst_32443);

(statearr_32668[(12)] = inst_32452);

return statearr_32668;
})();
var statearr_32675_35111 = state_32522__$1;
(statearr_32675_35111[(2)] = null);

(statearr_32675_35111[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (28))){
var inst_32451 = (state_32522[(20)]);
var inst_32471 = (state_32522[(23)]);
var inst_32471__$1 = cljs.core.seq(inst_32451);
var state_32522__$1 = (function (){var statearr_32677 = state_32522;
(statearr_32677[(23)] = inst_32471__$1);

return statearr_32677;
})();
if(inst_32471__$1){
var statearr_32678_35113 = state_32522__$1;
(statearr_32678_35113[(1)] = (33));

} else {
var statearr_32681_35115 = state_32522__$1;
(statearr_32681_35115[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (25))){
var inst_32454 = (state_32522[(10)]);
var inst_32453 = (state_32522[(19)]);
var inst_32457 = (inst_32454 < inst_32453);
var inst_32458 = inst_32457;
var state_32522__$1 = state_32522;
if(cljs.core.truth_(inst_32458)){
var statearr_32685_35116 = state_32522__$1;
(statearr_32685_35116[(1)] = (27));

} else {
var statearr_32688_35117 = state_32522__$1;
(statearr_32688_35117[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (34))){
var state_32522__$1 = state_32522;
var statearr_32692_35119 = state_32522__$1;
(statearr_32692_35119[(2)] = null);

(statearr_32692_35119[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (17))){
var state_32522__$1 = state_32522;
var statearr_32693_35121 = state_32522__$1;
(statearr_32693_35121[(2)] = null);

(statearr_32693_35121[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (3))){
var inst_32514 = (state_32522[(2)]);
var state_32522__$1 = state_32522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32522__$1,inst_32514);
} else {
if((state_val_32524 === (12))){
var inst_32436 = (state_32522[(2)]);
var state_32522__$1 = state_32522;
var statearr_32700_35122 = state_32522__$1;
(statearr_32700_35122[(2)] = inst_32436);

(statearr_32700_35122[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (2))){
var state_32522__$1 = state_32522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32522__$1,(4),ch);
} else {
if((state_val_32524 === (23))){
var state_32522__$1 = state_32522;
var statearr_32711_35123 = state_32522__$1;
(statearr_32711_35123[(2)] = null);

(statearr_32711_35123[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (35))){
var inst_32496 = (state_32522[(2)]);
var state_32522__$1 = state_32522;
var statearr_32713_35128 = state_32522__$1;
(statearr_32713_35128[(2)] = inst_32496);

(statearr_32713_35128[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (19))){
var inst_32406 = (state_32522[(7)]);
var inst_32411 = cljs.core.chunk_first(inst_32406);
var inst_32412 = cljs.core.chunk_rest(inst_32406);
var inst_32413 = cljs.core.count(inst_32411);
var inst_32373 = inst_32412;
var inst_32374 = inst_32411;
var inst_32375 = inst_32413;
var inst_32376 = (0);
var state_32522__$1 = (function (){var statearr_32720 = state_32522;
(statearr_32720[(13)] = inst_32374);

(statearr_32720[(14)] = inst_32373);

(statearr_32720[(16)] = inst_32376);

(statearr_32720[(17)] = inst_32375);

return statearr_32720;
})();
var statearr_32723_35136 = state_32522__$1;
(statearr_32723_35136[(2)] = null);

(statearr_32723_35136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (11))){
var inst_32373 = (state_32522[(14)]);
var inst_32406 = (state_32522[(7)]);
var inst_32406__$1 = cljs.core.seq(inst_32373);
var state_32522__$1 = (function (){var statearr_32729 = state_32522;
(statearr_32729[(7)] = inst_32406__$1);

return statearr_32729;
})();
if(inst_32406__$1){
var statearr_32732_35140 = state_32522__$1;
(statearr_32732_35140[(1)] = (16));

} else {
var statearr_32735_35143 = state_32522__$1;
(statearr_32735_35143[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (9))){
var inst_32438 = (state_32522[(2)]);
var state_32522__$1 = state_32522;
var statearr_32736_35149 = state_32522__$1;
(statearr_32736_35149[(2)] = inst_32438);

(statearr_32736_35149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (5))){
var inst_32371 = cljs.core.deref(cs);
var inst_32372 = cljs.core.seq(inst_32371);
var inst_32373 = inst_32372;
var inst_32374 = null;
var inst_32375 = (0);
var inst_32376 = (0);
var state_32522__$1 = (function (){var statearr_32746 = state_32522;
(statearr_32746[(13)] = inst_32374);

(statearr_32746[(14)] = inst_32373);

(statearr_32746[(16)] = inst_32376);

(statearr_32746[(17)] = inst_32375);

return statearr_32746;
})();
var statearr_32748_35160 = state_32522__$1;
(statearr_32748_35160[(2)] = null);

(statearr_32748_35160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (14))){
var state_32522__$1 = state_32522;
var statearr_32750_35167 = state_32522__$1;
(statearr_32750_35167[(2)] = null);

(statearr_32750_35167[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (45))){
var inst_32505 = (state_32522[(2)]);
var state_32522__$1 = state_32522;
var statearr_32752_35169 = state_32522__$1;
(statearr_32752_35169[(2)] = inst_32505);

(statearr_32752_35169[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (26))){
var inst_32441 = (state_32522[(27)]);
var inst_32500 = (state_32522[(2)]);
var inst_32501 = cljs.core.seq(inst_32441);
var state_32522__$1 = (function (){var statearr_32757 = state_32522;
(statearr_32757[(29)] = inst_32500);

return statearr_32757;
})();
if(inst_32501){
var statearr_32758_35174 = state_32522__$1;
(statearr_32758_35174[(1)] = (42));

} else {
var statearr_32760_35175 = state_32522__$1;
(statearr_32760_35175[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (16))){
var inst_32406 = (state_32522[(7)]);
var inst_32409 = cljs.core.chunked_seq_QMARK_(inst_32406);
var state_32522__$1 = state_32522;
if(inst_32409){
var statearr_32762_35180 = state_32522__$1;
(statearr_32762_35180[(1)] = (19));

} else {
var statearr_32763_35181 = state_32522__$1;
(statearr_32763_35181[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (38))){
var inst_32493 = (state_32522[(2)]);
var state_32522__$1 = state_32522;
var statearr_32773_35183 = state_32522__$1;
(statearr_32773_35183[(2)] = inst_32493);

(statearr_32773_35183[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (30))){
var state_32522__$1 = state_32522;
var statearr_32777_35185 = state_32522__$1;
(statearr_32777_35185[(2)] = null);

(statearr_32777_35185[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (10))){
var inst_32374 = (state_32522[(13)]);
var inst_32376 = (state_32522[(16)]);
var inst_32386 = cljs.core._nth(inst_32374,inst_32376);
var inst_32387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32386,(0),null);
var inst_32392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32386,(1),null);
var state_32522__$1 = (function (){var statearr_32780 = state_32522;
(statearr_32780[(24)] = inst_32387);

return statearr_32780;
})();
if(cljs.core.truth_(inst_32392)){
var statearr_32781_35191 = state_32522__$1;
(statearr_32781_35191[(1)] = (13));

} else {
var statearr_32782_35192 = state_32522__$1;
(statearr_32782_35192[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (18))){
var inst_32434 = (state_32522[(2)]);
var state_32522__$1 = state_32522;
var statearr_32786_35193 = state_32522__$1;
(statearr_32786_35193[(2)] = inst_32434);

(statearr_32786_35193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (42))){
var state_32522__$1 = state_32522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32522__$1,(45),dchan);
} else {
if((state_val_32524 === (37))){
var inst_32482 = (state_32522[(22)]);
var inst_32364 = (state_32522[(11)]);
var inst_32471 = (state_32522[(23)]);
var inst_32482__$1 = cljs.core.first(inst_32471);
var inst_32484 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32482__$1,inst_32364,done);
var state_32522__$1 = (function (){var statearr_32792 = state_32522;
(statearr_32792[(22)] = inst_32482__$1);

return statearr_32792;
})();
if(cljs.core.truth_(inst_32484)){
var statearr_32794_35195 = state_32522__$1;
(statearr_32794_35195[(1)] = (39));

} else {
var statearr_32796_35197 = state_32522__$1;
(statearr_32796_35197[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (8))){
var inst_32376 = (state_32522[(16)]);
var inst_32375 = (state_32522[(17)]);
var inst_32378 = (inst_32376 < inst_32375);
var inst_32379 = inst_32378;
var state_32522__$1 = state_32522;
if(cljs.core.truth_(inst_32379)){
var statearr_32797_35209 = state_32522__$1;
(statearr_32797_35209[(1)] = (10));

} else {
var statearr_32798_35219 = state_32522__$1;
(statearr_32798_35219[(1)] = (11));

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
var statearr_32808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32808[(0)] = cljs$core$async$mult_$_state_machine__30487__auto__);

(statearr_32808[(1)] = (1));

return statearr_32808;
});
var cljs$core$async$mult_$_state_machine__30487__auto____1 = (function (state_32522){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_32522);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e32809){var ex__30491__auto__ = e32809;
var statearr_32810_35225 = state_32522;
(statearr_32810_35225[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_32522[(4)]))){
var statearr_32811_35229 = state_32522;
(statearr_32811_35229[(1)] = cljs.core.first((state_32522[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35234 = state_32522;
state_32522 = G__35234;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30487__auto__ = function(state_32522){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30487__auto____1.call(this,state_32522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30487__auto____0;
cljs$core$async$mult_$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30487__auto____1;
return cljs$core$async$mult_$_state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_32822 = f__31239__auto__();
(statearr_32822[(6)] = c__31235__auto___35028);

return statearr_32822;
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
var G__32845 = arguments.length;
switch (G__32845) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35269 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_35269(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35304 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_35304(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35311 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35311(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35320 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_35320(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35335 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35335(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___35343 = arguments.length;
var i__5727__auto___35348 = (0);
while(true){
if((i__5727__auto___35348 < len__5726__auto___35343)){
args__5732__auto__.push((arguments[i__5727__auto___35348]));

var G__35352 = (i__5727__auto___35348 + (1));
i__5727__auto___35348 = G__35352;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32921){
var map__32922 = p__32921;
var map__32922__$1 = cljs.core.__destructure_map(map__32922);
var opts = map__32922__$1;
var statearr_32923_35354 = state;
(statearr_32923_35354[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32927_35359 = state;
(statearr_32927_35359[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_32928_35360 = state;
(statearr_32928_35360[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32913){
var G__32914 = cljs.core.first(seq32913);
var seq32913__$1 = cljs.core.next(seq32913);
var G__32915 = cljs.core.first(seq32913__$1);
var seq32913__$2 = cljs.core.next(seq32913__$1);
var G__32916 = cljs.core.first(seq32913__$2);
var seq32913__$3 = cljs.core.next(seq32913__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32914,G__32915,G__32916,seq32913__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32946 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32947){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32947 = meta32947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32948,meta32947__$1){
var self__ = this;
var _32948__$1 = this;
return (new cljs.core.async.t_cljs$core$async32946(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32947__$1));
}));

(cljs.core.async.t_cljs$core$async32946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32948){
var self__ = this;
var _32948__$1 = this;
return self__.meta32947;
}));

(cljs.core.async.t_cljs$core$async32946.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32946.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32946.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32946.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32946.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32946.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32946.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32946.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32947","meta32947",-1742990658,null)], null);
}));

(cljs.core.async.t_cljs$core$async32946.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32946.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32946");

(cljs.core.async.t_cljs$core$async32946.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async32946");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32946.
 */
cljs.core.async.__GT_t_cljs$core$async32946 = (function cljs$core$async$__GT_t_cljs$core$async32946(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32947){
return (new cljs.core.async.t_cljs$core$async32946(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32947));
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
var m = (new cljs.core.async.t_cljs$core$async32946(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__31235__auto___35401 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_33046){
var state_val_33047 = (state_33046[(1)]);
if((state_val_33047 === (7))){
var inst_32999 = (state_33046[(2)]);
var state_33046__$1 = state_33046;
if(cljs.core.truth_(inst_32999)){
var statearr_33058_35403 = state_33046__$1;
(statearr_33058_35403[(1)] = (8));

} else {
var statearr_33060_35404 = state_33046__$1;
(statearr_33060_35404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (20))){
var inst_32988 = (state_33046[(7)]);
var state_33046__$1 = state_33046;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33046__$1,(23),out,inst_32988);
} else {
if((state_val_33047 === (1))){
var inst_32969 = calc_state();
var inst_32970 = cljs.core.__destructure_map(inst_32969);
var inst_32971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32970,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32970,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32970,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32974 = inst_32969;
var state_33046__$1 = (function (){var statearr_33061 = state_33046;
(statearr_33061[(8)] = inst_32973);

(statearr_33061[(9)] = inst_32971);

(statearr_33061[(10)] = inst_32972);

(statearr_33061[(11)] = inst_32974);

return statearr_33061;
})();
var statearr_33064_35411 = state_33046__$1;
(statearr_33064_35411[(2)] = null);

(statearr_33064_35411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (24))){
var inst_32977 = (state_33046[(12)]);
var inst_32974 = inst_32977;
var state_33046__$1 = (function (){var statearr_33066 = state_33046;
(statearr_33066[(11)] = inst_32974);

return statearr_33066;
})();
var statearr_33067_35415 = state_33046__$1;
(statearr_33067_35415[(2)] = null);

(statearr_33067_35415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (4))){
var inst_32991 = (state_33046[(13)]);
var inst_32988 = (state_33046[(7)]);
var inst_32987 = (state_33046[(2)]);
var inst_32988__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32987,(0),null);
var inst_32990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32987,(1),null);
var inst_32991__$1 = (inst_32988__$1 == null);
var state_33046__$1 = (function (){var statearr_33075 = state_33046;
(statearr_33075[(13)] = inst_32991__$1);

(statearr_33075[(7)] = inst_32988__$1);

(statearr_33075[(14)] = inst_32990);

return statearr_33075;
})();
if(cljs.core.truth_(inst_32991__$1)){
var statearr_33076_35416 = state_33046__$1;
(statearr_33076_35416[(1)] = (5));

} else {
var statearr_33077_35417 = state_33046__$1;
(statearr_33077_35417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (15))){
var inst_32978 = (state_33046[(15)]);
var inst_33014 = (state_33046[(16)]);
var inst_33014__$1 = cljs.core.empty_QMARK_(inst_32978);
var state_33046__$1 = (function (){var statearr_33079 = state_33046;
(statearr_33079[(16)] = inst_33014__$1);

return statearr_33079;
})();
if(inst_33014__$1){
var statearr_33082_35422 = state_33046__$1;
(statearr_33082_35422[(1)] = (17));

} else {
var statearr_33083_35425 = state_33046__$1;
(statearr_33083_35425[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (21))){
var inst_32977 = (state_33046[(12)]);
var inst_32974 = inst_32977;
var state_33046__$1 = (function (){var statearr_33084 = state_33046;
(statearr_33084[(11)] = inst_32974);

return statearr_33084;
})();
var statearr_33085_35427 = state_33046__$1;
(statearr_33085_35427[(2)] = null);

(statearr_33085_35427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (13))){
var inst_33006 = (state_33046[(2)]);
var inst_33007 = calc_state();
var inst_32974 = inst_33007;
var state_33046__$1 = (function (){var statearr_33100 = state_33046;
(statearr_33100[(17)] = inst_33006);

(statearr_33100[(11)] = inst_32974);

return statearr_33100;
})();
var statearr_33101_35436 = state_33046__$1;
(statearr_33101_35436[(2)] = null);

(statearr_33101_35436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (22))){
var inst_33039 = (state_33046[(2)]);
var state_33046__$1 = state_33046;
var statearr_33113_35441 = state_33046__$1;
(statearr_33113_35441[(2)] = inst_33039);

(statearr_33113_35441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (6))){
var inst_32990 = (state_33046[(14)]);
var inst_32997 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32990,change);
var state_33046__$1 = state_33046;
var statearr_33118_35442 = state_33046__$1;
(statearr_33118_35442[(2)] = inst_32997);

(statearr_33118_35442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (25))){
var state_33046__$1 = state_33046;
var statearr_33119_35447 = state_33046__$1;
(statearr_33119_35447[(2)] = null);

(statearr_33119_35447[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (17))){
var inst_32979 = (state_33046[(18)]);
var inst_32990 = (state_33046[(14)]);
var inst_33017 = (inst_32979.cljs$core$IFn$_invoke$arity$1 ? inst_32979.cljs$core$IFn$_invoke$arity$1(inst_32990) : inst_32979.call(null, inst_32990));
var inst_33018 = cljs.core.not(inst_33017);
var state_33046__$1 = state_33046;
var statearr_33120_35451 = state_33046__$1;
(statearr_33120_35451[(2)] = inst_33018);

(statearr_33120_35451[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (3))){
var inst_33043 = (state_33046[(2)]);
var state_33046__$1 = state_33046;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33046__$1,inst_33043);
} else {
if((state_val_33047 === (12))){
var state_33046__$1 = state_33046;
var statearr_33132_35453 = state_33046__$1;
(statearr_33132_35453[(2)] = null);

(statearr_33132_35453[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (2))){
var inst_32977 = (state_33046[(12)]);
var inst_32974 = (state_33046[(11)]);
var inst_32977__$1 = cljs.core.__destructure_map(inst_32974);
var inst_32978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32977__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32977__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32977__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33046__$1 = (function (){var statearr_33138 = state_33046;
(statearr_33138[(12)] = inst_32977__$1);

(statearr_33138[(15)] = inst_32978);

(statearr_33138[(18)] = inst_32979);

return statearr_33138;
})();
return cljs.core.async.ioc_alts_BANG_(state_33046__$1,(4),inst_32981);
} else {
if((state_val_33047 === (23))){
var inst_33030 = (state_33046[(2)]);
var state_33046__$1 = state_33046;
if(cljs.core.truth_(inst_33030)){
var statearr_33142_35457 = state_33046__$1;
(statearr_33142_35457[(1)] = (24));

} else {
var statearr_33143_35463 = state_33046__$1;
(statearr_33143_35463[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (19))){
var inst_33021 = (state_33046[(2)]);
var state_33046__$1 = state_33046;
var statearr_33144_35464 = state_33046__$1;
(statearr_33144_35464[(2)] = inst_33021);

(statearr_33144_35464[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (11))){
var inst_32990 = (state_33046[(14)]);
var inst_33003 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32990);
var state_33046__$1 = state_33046;
var statearr_33146_35470 = state_33046__$1;
(statearr_33146_35470[(2)] = inst_33003);

(statearr_33146_35470[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (9))){
var inst_32978 = (state_33046[(15)]);
var inst_32990 = (state_33046[(14)]);
var inst_33011 = (state_33046[(19)]);
var inst_33011__$1 = (inst_32978.cljs$core$IFn$_invoke$arity$1 ? inst_32978.cljs$core$IFn$_invoke$arity$1(inst_32990) : inst_32978.call(null, inst_32990));
var state_33046__$1 = (function (){var statearr_33152 = state_33046;
(statearr_33152[(19)] = inst_33011__$1);

return statearr_33152;
})();
if(cljs.core.truth_(inst_33011__$1)){
var statearr_33154_35485 = state_33046__$1;
(statearr_33154_35485[(1)] = (14));

} else {
var statearr_33158_35486 = state_33046__$1;
(statearr_33158_35486[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (5))){
var inst_32991 = (state_33046[(13)]);
var state_33046__$1 = state_33046;
var statearr_33160_35493 = state_33046__$1;
(statearr_33160_35493[(2)] = inst_32991);

(statearr_33160_35493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (14))){
var inst_33011 = (state_33046[(19)]);
var state_33046__$1 = state_33046;
var statearr_33162_35495 = state_33046__$1;
(statearr_33162_35495[(2)] = inst_33011);

(statearr_33162_35495[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (26))){
var inst_33035 = (state_33046[(2)]);
var state_33046__$1 = state_33046;
var statearr_33165_35502 = state_33046__$1;
(statearr_33165_35502[(2)] = inst_33035);

(statearr_33165_35502[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (16))){
var inst_33023 = (state_33046[(2)]);
var state_33046__$1 = state_33046;
if(cljs.core.truth_(inst_33023)){
var statearr_33166_35505 = state_33046__$1;
(statearr_33166_35505[(1)] = (20));

} else {
var statearr_33167_35507 = state_33046__$1;
(statearr_33167_35507[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (10))){
var inst_33041 = (state_33046[(2)]);
var state_33046__$1 = state_33046;
var statearr_33168_35508 = state_33046__$1;
(statearr_33168_35508[(2)] = inst_33041);

(statearr_33168_35508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (18))){
var inst_33014 = (state_33046[(16)]);
var state_33046__$1 = state_33046;
var statearr_33169_35509 = state_33046__$1;
(statearr_33169_35509[(2)] = inst_33014);

(statearr_33169_35509[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (8))){
var inst_32988 = (state_33046[(7)]);
var inst_33001 = (inst_32988 == null);
var state_33046__$1 = state_33046;
if(cljs.core.truth_(inst_33001)){
var statearr_33171_35514 = state_33046__$1;
(statearr_33171_35514[(1)] = (11));

} else {
var statearr_33173_35515 = state_33046__$1;
(statearr_33173_35515[(1)] = (12));

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
var statearr_33177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33177[(0)] = cljs$core$async$mix_$_state_machine__30487__auto__);

(statearr_33177[(1)] = (1));

return statearr_33177;
});
var cljs$core$async$mix_$_state_machine__30487__auto____1 = (function (state_33046){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_33046);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e33180){var ex__30491__auto__ = e33180;
var statearr_33181_35526 = state_33046;
(statearr_33181_35526[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_33046[(4)]))){
var statearr_33182_35527 = state_33046;
(statearr_33182_35527[(1)] = cljs.core.first((state_33046[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35529 = state_33046;
state_33046 = G__35529;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30487__auto__ = function(state_33046){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30487__auto____1.call(this,state_33046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30487__auto____0;
cljs$core$async$mix_$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30487__auto____1;
return cljs$core$async$mix_$_state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_33191 = f__31239__auto__();
(statearr_33191[(6)] = c__31235__auto___35401);

return statearr_33191;
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

var cljs$core$async$Pub$sub_STAR_$dyn_35532 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_35532(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35536 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_35536(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35541 = (function() {
var G__35542 = null;
var G__35542__1 = (function (p){
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
var G__35542__2 = (function (p,v){
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
G__35542 = function(p,v){
switch(arguments.length){
case 1:
return G__35542__1.call(this,p);
case 2:
return G__35542__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35542.cljs$core$IFn$_invoke$arity$1 = G__35542__1;
G__35542.cljs$core$IFn$_invoke$arity$2 = G__35542__2;
return G__35542;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33225 = arguments.length;
switch (G__33225) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35541(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35541(p,v);
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
cljs.core.async.t_cljs$core$async33251 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33252){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33252 = meta33252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33253,meta33252__$1){
var self__ = this;
var _33253__$1 = this;
return (new cljs.core.async.t_cljs$core$async33251(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33252__$1));
}));

(cljs.core.async.t_cljs$core$async33251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33253){
var self__ = this;
var _33253__$1 = this;
return self__.meta33252;
}));

(cljs.core.async.t_cljs$core$async33251.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33251.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33251.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33251.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33251.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async33251.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33251.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33252","meta33252",1030132342,null)], null);
}));

(cljs.core.async.t_cljs$core$async33251.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33251");

(cljs.core.async.t_cljs$core$async33251.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33251");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33251.
 */
cljs.core.async.__GT_t_cljs$core$async33251 = (function cljs$core$async$__GT_t_cljs$core$async33251(ch,topic_fn,buf_fn,mults,ensure_mult,meta33252){
return (new cljs.core.async.t_cljs$core$async33251(ch,topic_fn,buf_fn,mults,ensure_mult,meta33252));
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
var G__33244 = arguments.length;
switch (G__33244) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33232_SHARP_){
if(cljs.core.truth_((p1__33232_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33232_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33232_SHARP_.call(null, topic)))){
return p1__33232_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33232_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33251(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__31235__auto___35614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_33348){
var state_val_33349 = (state_33348[(1)]);
if((state_val_33349 === (7))){
var inst_33342 = (state_33348[(2)]);
var state_33348__$1 = state_33348;
var statearr_33350_35618 = state_33348__$1;
(statearr_33350_35618[(2)] = inst_33342);

(statearr_33350_35618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33349 === (20))){
var state_33348__$1 = state_33348;
var statearr_33351_35623 = state_33348__$1;
(statearr_33351_35623[(2)] = null);

(statearr_33351_35623[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33349 === (1))){
var state_33348__$1 = state_33348;
var statearr_33355_35628 = state_33348__$1;
(statearr_33355_35628[(2)] = null);

(statearr_33355_35628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33349 === (24))){
var inst_33325 = (state_33348[(7)]);
var inst_33334 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33325);
var state_33348__$1 = state_33348;
var statearr_33357_35634 = state_33348__$1;
(statearr_33357_35634[(2)] = inst_33334);

(statearr_33357_35634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33349 === (4))){
var inst_33273 = (state_33348[(8)]);
var inst_33273__$1 = (state_33348[(2)]);
var inst_33274 = (inst_33273__$1 == null);
var state_33348__$1 = (function (){var statearr_33359 = state_33348;
(statearr_33359[(8)] = inst_33273__$1);

return statearr_33359;
})();
if(cljs.core.truth_(inst_33274)){
var statearr_33360_35643 = state_33348__$1;
(statearr_33360_35643[(1)] = (5));

} else {
var statearr_33361_35644 = state_33348__$1;
(statearr_33361_35644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33349 === (15))){
var inst_33319 = (state_33348[(2)]);
var state_33348__$1 = state_33348;
var statearr_33362_35645 = state_33348__$1;
(statearr_33362_35645[(2)] = inst_33319);

(statearr_33362_35645[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33349 === (21))){
var inst_33339 = (state_33348[(2)]);
var state_33348__$1 = (function (){var statearr_33364 = state_33348;
(statearr_33364[(9)] = inst_33339);

return statearr_33364;
})();
var statearr_33365_35646 = state_33348__$1;
(statearr_33365_35646[(2)] = null);

(statearr_33365_35646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33349 === (13))){
var inst_33301 = (state_33348[(10)]);
var inst_33303 = cljs.core.chunked_seq_QMARK_(inst_33301);
var state_33348__$1 = state_33348;
if(inst_33303){
var statearr_33370_35648 = state_33348__$1;
(statearr_33370_35648[(1)] = (16));

} else {
var statearr_33371_35649 = state_33348__$1;
(statearr_33371_35649[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33349 === (22))){
var inst_33331 = (state_33348[(2)]);
var state_33348__$1 = state_33348;
if(cljs.core.truth_(inst_33331)){
var statearr_33375_35650 = state_33348__$1;
(statearr_33375_35650[(1)] = (23));

} else {
var statearr_33376_35652 = state_33348__$1;
(statearr_33376_35652[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33349 === (6))){
var inst_33327 = (state_33348[(11)]);
var inst_33273 = (state_33348[(8)]);
var inst_33325 = (state_33348[(7)]);
var inst_33325__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33273) : topic_fn.call(null, inst_33273));
var inst_33326 = cljs.core.deref(mults);
var inst_33327__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33326,inst_33325__$1);
var state_33348__$1 = (function (){var statearr_33377 = state_33348;
(statearr_33377[(11)] = inst_33327__$1);

(statearr_33377[(7)] = inst_33325__$1);

return statearr_33377;
})();
if(cljs.core.truth_(inst_33327__$1)){
var statearr_33378_35654 = state_33348__$1;
(statearr_33378_35654[(1)] = (19));

} else {
var statearr_33379_35655 = state_33348__$1;
(statearr_33379_35655[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33349 === (25))){
var inst_33336 = (state_33348[(2)]);
var state_33348__$1 = state_33348;
var statearr_33380_35657 = state_33348__$1;
(statearr_33380_35657[(2)] = inst_33336);

(statearr_33380_35657[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33349 === (17))){
var inst_33301 = (state_33348[(10)]);
var inst_33310 = cljs.core.first(inst_33301);
var inst_33311 = cljs.core.async.muxch_STAR_(inst_33310);
var inst_33312 = cljs.core.async.close_BANG_(inst_33311);
var inst_33313 = cljs.core.next(inst_33301);
var inst_33283 = inst_33313;
var inst_33284 = null;
var inst_33285 = (0);
var inst_33286 = (0);
var state_33348__$1 = (function (){var statearr_33381 = state_33348;
(statearr_33381[(12)] = inst_33283);

(statearr_33381[(13)] = inst_33312);

(statearr_33381[(14)] = inst_33286);

(statearr_33381[(15)] = inst_33285);

(statearr_33381[(16)] = inst_33284);

return statearr_33381;
})();
var statearr_33382_35658 = state_33348__$1;
(statearr_33382_35658[(2)] = null);

(statearr_33382_35658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33349 === (3))){
var inst_33344 = (state_33348[(2)]);
var state_33348__$1 = state_33348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33348__$1,inst_33344);
} else {
if((state_val_33349 === (12))){
var inst_33321 = (state_33348[(2)]);
var state_33348__$1 = state_33348;
var statearr_33383_35659 = state_33348__$1;
(statearr_33383_35659[(2)] = inst_33321);

(statearr_33383_35659[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33349 === (2))){
var state_33348__$1 = state_33348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33348__$1,(4),ch);
} else {
if((state_val_33349 === (23))){
var state_33348__$1 = state_33348;
var statearr_33384_35661 = state_33348__$1;
(statearr_33384_35661[(2)] = null);

(statearr_33384_35661[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33349 === (19))){
var inst_33327 = (state_33348[(11)]);
var inst_33273 = (state_33348[(8)]);
var inst_33329 = cljs.core.async.muxch_STAR_(inst_33327);
var state_33348__$1 = state_33348;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33348__$1,(22),inst_33329,inst_33273);
} else {
if((state_val_33349 === (11))){
var inst_33283 = (state_33348[(12)]);
var inst_33301 = (state_33348[(10)]);
var inst_33301__$1 = cljs.core.seq(inst_33283);
var state_33348__$1 = (function (){var statearr_33385 = state_33348;
(statearr_33385[(10)] = inst_33301__$1);

return statearr_33385;
})();
if(inst_33301__$1){
var statearr_33386_35662 = state_33348__$1;
(statearr_33386_35662[(1)] = (13));

} else {
var statearr_33387_35664 = state_33348__$1;
(statearr_33387_35664[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33349 === (9))){
var inst_33323 = (state_33348[(2)]);
var state_33348__$1 = state_33348;
var statearr_33388_35665 = state_33348__$1;
(statearr_33388_35665[(2)] = inst_33323);

(statearr_33388_35665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33349 === (5))){
var inst_33280 = cljs.core.deref(mults);
var inst_33281 = cljs.core.vals(inst_33280);
var inst_33282 = cljs.core.seq(inst_33281);
var inst_33283 = inst_33282;
var inst_33284 = null;
var inst_33285 = (0);
var inst_33286 = (0);
var state_33348__$1 = (function (){var statearr_33389 = state_33348;
(statearr_33389[(12)] = inst_33283);

(statearr_33389[(14)] = inst_33286);

(statearr_33389[(15)] = inst_33285);

(statearr_33389[(16)] = inst_33284);

return statearr_33389;
})();
var statearr_33390_35666 = state_33348__$1;
(statearr_33390_35666[(2)] = null);

(statearr_33390_35666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33349 === (14))){
var state_33348__$1 = state_33348;
var statearr_33394_35668 = state_33348__$1;
(statearr_33394_35668[(2)] = null);

(statearr_33394_35668[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33349 === (16))){
var inst_33301 = (state_33348[(10)]);
var inst_33305 = cljs.core.chunk_first(inst_33301);
var inst_33306 = cljs.core.chunk_rest(inst_33301);
var inst_33307 = cljs.core.count(inst_33305);
var inst_33283 = inst_33306;
var inst_33284 = inst_33305;
var inst_33285 = inst_33307;
var inst_33286 = (0);
var state_33348__$1 = (function (){var statearr_33395 = state_33348;
(statearr_33395[(12)] = inst_33283);

(statearr_33395[(14)] = inst_33286);

(statearr_33395[(15)] = inst_33285);

(statearr_33395[(16)] = inst_33284);

return statearr_33395;
})();
var statearr_33396_35671 = state_33348__$1;
(statearr_33396_35671[(2)] = null);

(statearr_33396_35671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33349 === (10))){
var inst_33283 = (state_33348[(12)]);
var inst_33286 = (state_33348[(14)]);
var inst_33285 = (state_33348[(15)]);
var inst_33284 = (state_33348[(16)]);
var inst_33291 = cljs.core._nth(inst_33284,inst_33286);
var inst_33292 = cljs.core.async.muxch_STAR_(inst_33291);
var inst_33293 = cljs.core.async.close_BANG_(inst_33292);
var inst_33295 = (inst_33286 + (1));
var tmp33391 = inst_33283;
var tmp33392 = inst_33285;
var tmp33393 = inst_33284;
var inst_33283__$1 = tmp33391;
var inst_33284__$1 = tmp33393;
var inst_33285__$1 = tmp33392;
var inst_33286__$1 = inst_33295;
var state_33348__$1 = (function (){var statearr_33398 = state_33348;
(statearr_33398[(12)] = inst_33283__$1);

(statearr_33398[(14)] = inst_33286__$1);

(statearr_33398[(15)] = inst_33285__$1);

(statearr_33398[(17)] = inst_33293);

(statearr_33398[(16)] = inst_33284__$1);

return statearr_33398;
})();
var statearr_33402_35672 = state_33348__$1;
(statearr_33402_35672[(2)] = null);

(statearr_33402_35672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33349 === (18))){
var inst_33316 = (state_33348[(2)]);
var state_33348__$1 = state_33348;
var statearr_33403_35675 = state_33348__$1;
(statearr_33403_35675[(2)] = inst_33316);

(statearr_33403_35675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33349 === (8))){
var inst_33286 = (state_33348[(14)]);
var inst_33285 = (state_33348[(15)]);
var inst_33288 = (inst_33286 < inst_33285);
var inst_33289 = inst_33288;
var state_33348__$1 = state_33348;
if(cljs.core.truth_(inst_33289)){
var statearr_33404_35679 = state_33348__$1;
(statearr_33404_35679[(1)] = (10));

} else {
var statearr_33405_35680 = state_33348__$1;
(statearr_33405_35680[(1)] = (11));

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
var statearr_33406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33406[(0)] = cljs$core$async$state_machine__30487__auto__);

(statearr_33406[(1)] = (1));

return statearr_33406;
});
var cljs$core$async$state_machine__30487__auto____1 = (function (state_33348){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_33348);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e33408){var ex__30491__auto__ = e33408;
var statearr_33409_35683 = state_33348;
(statearr_33409_35683[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_33348[(4)]))){
var statearr_33410_35684 = state_33348;
(statearr_33410_35684[(1)] = cljs.core.first((state_33348[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35685 = state_33348;
state_33348 = G__35685;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$state_machine__30487__auto__ = function(state_33348){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30487__auto____1.call(this,state_33348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30487__auto____0;
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30487__auto____1;
return cljs$core$async$state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_33412 = f__31239__auto__();
(statearr_33412[(6)] = c__31235__auto___35614);

return statearr_33412;
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
var G__33415 = arguments.length;
switch (G__33415) {
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
var G__33423 = arguments.length;
switch (G__33423) {
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
var G__33428 = arguments.length;
switch (G__33428) {
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
var c__31235__auto___35711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_33524){
var state_val_33525 = (state_33524[(1)]);
if((state_val_33525 === (7))){
var state_33524__$1 = state_33524;
var statearr_33540_35715 = state_33524__$1;
(statearr_33540_35715[(2)] = null);

(statearr_33540_35715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33525 === (1))){
var state_33524__$1 = state_33524;
var statearr_33547_35716 = state_33524__$1;
(statearr_33547_35716[(2)] = null);

(statearr_33547_35716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33525 === (4))){
var inst_33439 = (state_33524[(7)]);
var inst_33438 = (state_33524[(8)]);
var inst_33441 = (inst_33439 < inst_33438);
var state_33524__$1 = state_33524;
if(cljs.core.truth_(inst_33441)){
var statearr_33548_35717 = state_33524__$1;
(statearr_33548_35717[(1)] = (6));

} else {
var statearr_33549_35718 = state_33524__$1;
(statearr_33549_35718[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33525 === (15))){
var inst_33509 = (state_33524[(9)]);
var inst_33514 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33509);
var state_33524__$1 = state_33524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33524__$1,(17),out,inst_33514);
} else {
if((state_val_33525 === (13))){
var inst_33509 = (state_33524[(9)]);
var inst_33509__$1 = (state_33524[(2)]);
var inst_33510 = cljs.core.some(cljs.core.nil_QMARK_,inst_33509__$1);
var state_33524__$1 = (function (){var statearr_33557 = state_33524;
(statearr_33557[(9)] = inst_33509__$1);

return statearr_33557;
})();
if(cljs.core.truth_(inst_33510)){
var statearr_33558_35724 = state_33524__$1;
(statearr_33558_35724[(1)] = (14));

} else {
var statearr_33560_35725 = state_33524__$1;
(statearr_33560_35725[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33525 === (6))){
var state_33524__$1 = state_33524;
var statearr_33561_35729 = state_33524__$1;
(statearr_33561_35729[(2)] = null);

(statearr_33561_35729[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33525 === (17))){
var inst_33516 = (state_33524[(2)]);
var state_33524__$1 = (function (){var statearr_33566 = state_33524;
(statearr_33566[(10)] = inst_33516);

return statearr_33566;
})();
var statearr_33570_35734 = state_33524__$1;
(statearr_33570_35734[(2)] = null);

(statearr_33570_35734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33525 === (3))){
var inst_33521 = (state_33524[(2)]);
var state_33524__$1 = state_33524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33524__$1,inst_33521);
} else {
if((state_val_33525 === (12))){
var _ = (function (){var statearr_33571 = state_33524;
(statearr_33571[(4)] = cljs.core.rest((state_33524[(4)])));

return statearr_33571;
})();
var state_33524__$1 = state_33524;
var ex33565 = (state_33524__$1[(2)]);
var statearr_33572_35738 = state_33524__$1;
(statearr_33572_35738[(5)] = ex33565);


if((ex33565 instanceof Object)){
var statearr_33573_35742 = state_33524__$1;
(statearr_33573_35742[(1)] = (11));

(statearr_33573_35742[(5)] = null);

} else {
throw ex33565;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33525 === (2))){
var inst_33437 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33438 = cnt;
var inst_33439 = (0);
var state_33524__$1 = (function (){var statearr_33574 = state_33524;
(statearr_33574[(7)] = inst_33439);

(statearr_33574[(11)] = inst_33437);

(statearr_33574[(8)] = inst_33438);

return statearr_33574;
})();
var statearr_33578_35743 = state_33524__$1;
(statearr_33578_35743[(2)] = null);

(statearr_33578_35743[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33525 === (11))){
var inst_33457 = (state_33524[(2)]);
var inst_33458 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33524__$1 = (function (){var statearr_33580 = state_33524;
(statearr_33580[(12)] = inst_33457);

return statearr_33580;
})();
var statearr_33581_35753 = state_33524__$1;
(statearr_33581_35753[(2)] = inst_33458);

(statearr_33581_35753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33525 === (9))){
var inst_33439 = (state_33524[(7)]);
var _ = (function (){var statearr_33582 = state_33524;
(statearr_33582[(4)] = cljs.core.cons((12),(state_33524[(4)])));

return statearr_33582;
})();
var inst_33478 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33439) : chs__$1.call(null, inst_33439));
var inst_33479 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33439) : done.call(null, inst_33439));
var inst_33480 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33478,inst_33479);
var ___$1 = (function (){var statearr_33583 = state_33524;
(statearr_33583[(4)] = cljs.core.rest((state_33524[(4)])));

return statearr_33583;
})();
var state_33524__$1 = state_33524;
var statearr_33584_35755 = state_33524__$1;
(statearr_33584_35755[(2)] = inst_33480);

(statearr_33584_35755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33525 === (5))){
var inst_33496 = (state_33524[(2)]);
var state_33524__$1 = (function (){var statearr_33585 = state_33524;
(statearr_33585[(13)] = inst_33496);

return statearr_33585;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33524__$1,(13),dchan);
} else {
if((state_val_33525 === (14))){
var inst_33512 = cljs.core.async.close_BANG_(out);
var state_33524__$1 = state_33524;
var statearr_33586_35760 = state_33524__$1;
(statearr_33586_35760[(2)] = inst_33512);

(statearr_33586_35760[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33525 === (16))){
var inst_33519 = (state_33524[(2)]);
var state_33524__$1 = state_33524;
var statearr_33587_35761 = state_33524__$1;
(statearr_33587_35761[(2)] = inst_33519);

(statearr_33587_35761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33525 === (10))){
var inst_33439 = (state_33524[(7)]);
var inst_33483 = (state_33524[(2)]);
var inst_33484 = (inst_33439 + (1));
var inst_33439__$1 = inst_33484;
var state_33524__$1 = (function (){var statearr_33588 = state_33524;
(statearr_33588[(7)] = inst_33439__$1);

(statearr_33588[(14)] = inst_33483);

return statearr_33588;
})();
var statearr_33589_35766 = state_33524__$1;
(statearr_33589_35766[(2)] = null);

(statearr_33589_35766[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33525 === (8))){
var inst_33494 = (state_33524[(2)]);
var state_33524__$1 = state_33524;
var statearr_33591_35768 = state_33524__$1;
(statearr_33591_35768[(2)] = inst_33494);

(statearr_33591_35768[(1)] = (5));


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
var statearr_33592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33592[(0)] = cljs$core$async$state_machine__30487__auto__);

(statearr_33592[(1)] = (1));

return statearr_33592;
});
var cljs$core$async$state_machine__30487__auto____1 = (function (state_33524){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_33524);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e33593){var ex__30491__auto__ = e33593;
var statearr_33594_35776 = state_33524;
(statearr_33594_35776[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_33524[(4)]))){
var statearr_33595_35777 = state_33524;
(statearr_33595_35777[(1)] = cljs.core.first((state_33524[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35778 = state_33524;
state_33524 = G__35778;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$state_machine__30487__auto__ = function(state_33524){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30487__auto____1.call(this,state_33524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30487__auto____0;
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30487__auto____1;
return cljs$core$async$state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_33608 = f__31239__auto__();
(statearr_33608[(6)] = c__31235__auto___35711);

return statearr_33608;
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
var G__33619 = arguments.length;
switch (G__33619) {
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
var c__31235__auto___35784 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_33655){
var state_val_33656 = (state_33655[(1)]);
if((state_val_33656 === (7))){
var inst_33635 = (state_33655[(7)]);
var inst_33634 = (state_33655[(8)]);
var inst_33634__$1 = (state_33655[(2)]);
var inst_33635__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33634__$1,(0),null);
var inst_33636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33634__$1,(1),null);
var inst_33637 = (inst_33635__$1 == null);
var state_33655__$1 = (function (){var statearr_33664 = state_33655;
(statearr_33664[(7)] = inst_33635__$1);

(statearr_33664[(9)] = inst_33636);

(statearr_33664[(8)] = inst_33634__$1);

return statearr_33664;
})();
if(cljs.core.truth_(inst_33637)){
var statearr_33669_35786 = state_33655__$1;
(statearr_33669_35786[(1)] = (8));

} else {
var statearr_33670_35787 = state_33655__$1;
(statearr_33670_35787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (1))){
var inst_33624 = cljs.core.vec(chs);
var inst_33625 = inst_33624;
var state_33655__$1 = (function (){var statearr_33674 = state_33655;
(statearr_33674[(10)] = inst_33625);

return statearr_33674;
})();
var statearr_33679_35791 = state_33655__$1;
(statearr_33679_35791[(2)] = null);

(statearr_33679_35791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (4))){
var inst_33625 = (state_33655[(10)]);
var state_33655__$1 = state_33655;
return cljs.core.async.ioc_alts_BANG_(state_33655__$1,(7),inst_33625);
} else {
if((state_val_33656 === (6))){
var inst_33651 = (state_33655[(2)]);
var state_33655__$1 = state_33655;
var statearr_33680_35792 = state_33655__$1;
(statearr_33680_35792[(2)] = inst_33651);

(statearr_33680_35792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (3))){
var inst_33653 = (state_33655[(2)]);
var state_33655__$1 = state_33655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33655__$1,inst_33653);
} else {
if((state_val_33656 === (2))){
var inst_33625 = (state_33655[(10)]);
var inst_33627 = cljs.core.count(inst_33625);
var inst_33628 = (inst_33627 > (0));
var state_33655__$1 = state_33655;
if(cljs.core.truth_(inst_33628)){
var statearr_33682_35793 = state_33655__$1;
(statearr_33682_35793[(1)] = (4));

} else {
var statearr_33683_35794 = state_33655__$1;
(statearr_33683_35794[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (11))){
var inst_33625 = (state_33655[(10)]);
var inst_33644 = (state_33655[(2)]);
var tmp33681 = inst_33625;
var inst_33625__$1 = tmp33681;
var state_33655__$1 = (function (){var statearr_33685 = state_33655;
(statearr_33685[(11)] = inst_33644);

(statearr_33685[(10)] = inst_33625__$1);

return statearr_33685;
})();
var statearr_33686_35795 = state_33655__$1;
(statearr_33686_35795[(2)] = null);

(statearr_33686_35795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (9))){
var inst_33635 = (state_33655[(7)]);
var state_33655__$1 = state_33655;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33655__$1,(11),out,inst_33635);
} else {
if((state_val_33656 === (5))){
var inst_33649 = cljs.core.async.close_BANG_(out);
var state_33655__$1 = state_33655;
var statearr_33690_35801 = state_33655__$1;
(statearr_33690_35801[(2)] = inst_33649);

(statearr_33690_35801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (10))){
var inst_33647 = (state_33655[(2)]);
var state_33655__$1 = state_33655;
var statearr_33692_35803 = state_33655__$1;
(statearr_33692_35803[(2)] = inst_33647);

(statearr_33692_35803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (8))){
var inst_33635 = (state_33655[(7)]);
var inst_33636 = (state_33655[(9)]);
var inst_33625 = (state_33655[(10)]);
var inst_33634 = (state_33655[(8)]);
var inst_33639 = (function (){var cs = inst_33625;
var vec__33630 = inst_33634;
var v = inst_33635;
var c = inst_33636;
return (function (p1__33609_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33609_SHARP_);
});
})();
var inst_33640 = cljs.core.filterv(inst_33639,inst_33625);
var inst_33625__$1 = inst_33640;
var state_33655__$1 = (function (){var statearr_33694 = state_33655;
(statearr_33694[(10)] = inst_33625__$1);

return statearr_33694;
})();
var statearr_33695_35805 = state_33655__$1;
(statearr_33695_35805[(2)] = null);

(statearr_33695_35805[(1)] = (2));


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
var statearr_33698 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33698[(0)] = cljs$core$async$state_machine__30487__auto__);

(statearr_33698[(1)] = (1));

return statearr_33698;
});
var cljs$core$async$state_machine__30487__auto____1 = (function (state_33655){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_33655);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e33700){var ex__30491__auto__ = e33700;
var statearr_33701_35809 = state_33655;
(statearr_33701_35809[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_33655[(4)]))){
var statearr_33702_35810 = state_33655;
(statearr_33702_35810[(1)] = cljs.core.first((state_33655[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35812 = state_33655;
state_33655 = G__35812;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$state_machine__30487__auto__ = function(state_33655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30487__auto____1.call(this,state_33655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30487__auto____0;
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30487__auto____1;
return cljs$core$async$state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_33705 = f__31239__auto__();
(statearr_33705[(6)] = c__31235__auto___35784);

return statearr_33705;
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
var G__33716 = arguments.length;
switch (G__33716) {
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
var c__31235__auto___35815 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_33751){
var state_val_33752 = (state_33751[(1)]);
if((state_val_33752 === (7))){
var inst_33733 = (state_33751[(7)]);
var inst_33733__$1 = (state_33751[(2)]);
var inst_33734 = (inst_33733__$1 == null);
var inst_33735 = cljs.core.not(inst_33734);
var state_33751__$1 = (function (){var statearr_33756 = state_33751;
(statearr_33756[(7)] = inst_33733__$1);

return statearr_33756;
})();
if(inst_33735){
var statearr_33757_35816 = state_33751__$1;
(statearr_33757_35816[(1)] = (8));

} else {
var statearr_33758_35817 = state_33751__$1;
(statearr_33758_35817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (1))){
var inst_33719 = (0);
var state_33751__$1 = (function (){var statearr_33759 = state_33751;
(statearr_33759[(8)] = inst_33719);

return statearr_33759;
})();
var statearr_33760_35818 = state_33751__$1;
(statearr_33760_35818[(2)] = null);

(statearr_33760_35818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (4))){
var state_33751__$1 = state_33751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33751__$1,(7),ch);
} else {
if((state_val_33752 === (6))){
var inst_33746 = (state_33751[(2)]);
var state_33751__$1 = state_33751;
var statearr_33762_35821 = state_33751__$1;
(statearr_33762_35821[(2)] = inst_33746);

(statearr_33762_35821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (3))){
var inst_33748 = (state_33751[(2)]);
var inst_33749 = cljs.core.async.close_BANG_(out);
var state_33751__$1 = (function (){var statearr_33763 = state_33751;
(statearr_33763[(9)] = inst_33748);

return statearr_33763;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33751__$1,inst_33749);
} else {
if((state_val_33752 === (2))){
var inst_33719 = (state_33751[(8)]);
var inst_33721 = (inst_33719 < n);
var state_33751__$1 = state_33751;
if(cljs.core.truth_(inst_33721)){
var statearr_33767_35823 = state_33751__$1;
(statearr_33767_35823[(1)] = (4));

} else {
var statearr_33768_35824 = state_33751__$1;
(statearr_33768_35824[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (11))){
var inst_33719 = (state_33751[(8)]);
var inst_33738 = (state_33751[(2)]);
var inst_33739 = (inst_33719 + (1));
var inst_33719__$1 = inst_33739;
var state_33751__$1 = (function (){var statearr_33772 = state_33751;
(statearr_33772[(10)] = inst_33738);

(statearr_33772[(8)] = inst_33719__$1);

return statearr_33772;
})();
var statearr_33777_35825 = state_33751__$1;
(statearr_33777_35825[(2)] = null);

(statearr_33777_35825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (9))){
var state_33751__$1 = state_33751;
var statearr_33781_35826 = state_33751__$1;
(statearr_33781_35826[(2)] = null);

(statearr_33781_35826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (5))){
var state_33751__$1 = state_33751;
var statearr_33782_35827 = state_33751__$1;
(statearr_33782_35827[(2)] = null);

(statearr_33782_35827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (10))){
var inst_33743 = (state_33751[(2)]);
var state_33751__$1 = state_33751;
var statearr_33789_35829 = state_33751__$1;
(statearr_33789_35829[(2)] = inst_33743);

(statearr_33789_35829[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (8))){
var inst_33733 = (state_33751[(7)]);
var state_33751__$1 = state_33751;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33751__$1,(11),out,inst_33733);
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
var statearr_33790 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33790[(0)] = cljs$core$async$state_machine__30487__auto__);

(statearr_33790[(1)] = (1));

return statearr_33790;
});
var cljs$core$async$state_machine__30487__auto____1 = (function (state_33751){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_33751);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e33794){var ex__30491__auto__ = e33794;
var statearr_33795_35837 = state_33751;
(statearr_33795_35837[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_33751[(4)]))){
var statearr_33796_35839 = state_33751;
(statearr_33796_35839[(1)] = cljs.core.first((state_33751[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35840 = state_33751;
state_33751 = G__35840;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$state_machine__30487__auto__ = function(state_33751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30487__auto____1.call(this,state_33751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30487__auto____0;
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30487__auto____1;
return cljs$core$async$state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_33804 = f__31239__auto__();
(statearr_33804[(6)] = c__31235__auto___35815);

return statearr_33804;
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
cljs.core.async.t_cljs$core$async33844 = (function (f,ch,meta33819,_,fn1,meta33845){
this.f = f;
this.ch = ch;
this.meta33819 = meta33819;
this._ = _;
this.fn1 = fn1;
this.meta33845 = meta33845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33846,meta33845__$1){
var self__ = this;
var _33846__$1 = this;
return (new cljs.core.async.t_cljs$core$async33844(self__.f,self__.ch,self__.meta33819,self__._,self__.fn1,meta33845__$1));
}));

(cljs.core.async.t_cljs$core$async33844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33846){
var self__ = this;
var _33846__$1 = this;
return self__.meta33845;
}));

(cljs.core.async.t_cljs$core$async33844.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33844.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33844.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33844.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33810_SHARP_){
var G__33850 = (((p1__33810_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33810_SHARP_) : self__.f.call(null, p1__33810_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33850) : f1.call(null, G__33850));
});
}));

(cljs.core.async.t_cljs$core$async33844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33819","meta33819",-864166184,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33818","cljs.core.async/t_cljs$core$async33818",180292145,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33845","meta33845",-44533203,null)], null);
}));

(cljs.core.async.t_cljs$core$async33844.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33844");

(cljs.core.async.t_cljs$core$async33844.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33844");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33844.
 */
cljs.core.async.__GT_t_cljs$core$async33844 = (function cljs$core$async$__GT_t_cljs$core$async33844(f,ch,meta33819,_,fn1,meta33845){
return (new cljs.core.async.t_cljs$core$async33844(f,ch,meta33819,_,fn1,meta33845));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33818 = (function (f,ch,meta33819){
this.f = f;
this.ch = ch;
this.meta33819 = meta33819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33820,meta33819__$1){
var self__ = this;
var _33820__$1 = this;
return (new cljs.core.async.t_cljs$core$async33818(self__.f,self__.ch,meta33819__$1));
}));

(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33820){
var self__ = this;
var _33820__$1 = this;
return self__.meta33819;
}));

(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async33844(self__.f,self__.ch,self__.meta33819,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33857 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33857) : self__.f.call(null, G__33857));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33819","meta33819",-864166184,null)], null);
}));

(cljs.core.async.t_cljs$core$async33818.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33818");

(cljs.core.async.t_cljs$core$async33818.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33818");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33818.
 */
cljs.core.async.__GT_t_cljs$core$async33818 = (function cljs$core$async$__GT_t_cljs$core$async33818(f,ch,meta33819){
return (new cljs.core.async.t_cljs$core$async33818(f,ch,meta33819));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33818(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33859 = (function (f,ch,meta33860){
this.f = f;
this.ch = ch;
this.meta33860 = meta33860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33861,meta33860__$1){
var self__ = this;
var _33861__$1 = this;
return (new cljs.core.async.t_cljs$core$async33859(self__.f,self__.ch,meta33860__$1));
}));

(cljs.core.async.t_cljs$core$async33859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33861){
var self__ = this;
var _33861__$1 = this;
return self__.meta33860;
}));

(cljs.core.async.t_cljs$core$async33859.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33859.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33859.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33859.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33859.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33859.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33859.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33860","meta33860",689536638,null)], null);
}));

(cljs.core.async.t_cljs$core$async33859.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33859.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33859");

(cljs.core.async.t_cljs$core$async33859.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33859");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33859.
 */
cljs.core.async.__GT_t_cljs$core$async33859 = (function cljs$core$async$__GT_t_cljs$core$async33859(f,ch,meta33860){
return (new cljs.core.async.t_cljs$core$async33859(f,ch,meta33860));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33859(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33867 = (function (p,ch,meta33868){
this.p = p;
this.ch = ch;
this.meta33868 = meta33868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33869,meta33868__$1){
var self__ = this;
var _33869__$1 = this;
return (new cljs.core.async.t_cljs$core$async33867(self__.p,self__.ch,meta33868__$1));
}));

(cljs.core.async.t_cljs$core$async33867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33869){
var self__ = this;
var _33869__$1 = this;
return self__.meta33868;
}));

(cljs.core.async.t_cljs$core$async33867.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33867.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33867.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33867.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33867.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33867.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33867.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33867.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33868","meta33868",-1607580769,null)], null);
}));

(cljs.core.async.t_cljs$core$async33867.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33867.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33867");

(cljs.core.async.t_cljs$core$async33867.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33867");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33867.
 */
cljs.core.async.__GT_t_cljs$core$async33867 = (function cljs$core$async$__GT_t_cljs$core$async33867(p,ch,meta33868){
return (new cljs.core.async.t_cljs$core$async33867(p,ch,meta33868));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async33867(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33907 = arguments.length;
switch (G__33907) {
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
var c__31235__auto___35878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_33938){
var state_val_33939 = (state_33938[(1)]);
if((state_val_33939 === (7))){
var inst_33932 = (state_33938[(2)]);
var state_33938__$1 = state_33938;
var statearr_33947_35884 = state_33938__$1;
(statearr_33947_35884[(2)] = inst_33932);

(statearr_33947_35884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33939 === (1))){
var state_33938__$1 = state_33938;
var statearr_33948_35887 = state_33938__$1;
(statearr_33948_35887[(2)] = null);

(statearr_33948_35887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33939 === (4))){
var inst_33918 = (state_33938[(7)]);
var inst_33918__$1 = (state_33938[(2)]);
var inst_33919 = (inst_33918__$1 == null);
var state_33938__$1 = (function (){var statearr_33949 = state_33938;
(statearr_33949[(7)] = inst_33918__$1);

return statearr_33949;
})();
if(cljs.core.truth_(inst_33919)){
var statearr_33950_35893 = state_33938__$1;
(statearr_33950_35893[(1)] = (5));

} else {
var statearr_33951_35894 = state_33938__$1;
(statearr_33951_35894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33939 === (6))){
var inst_33918 = (state_33938[(7)]);
var inst_33923 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33918) : p.call(null, inst_33918));
var state_33938__$1 = state_33938;
if(cljs.core.truth_(inst_33923)){
var statearr_33952_35895 = state_33938__$1;
(statearr_33952_35895[(1)] = (8));

} else {
var statearr_33955_35896 = state_33938__$1;
(statearr_33955_35896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33939 === (3))){
var inst_33934 = (state_33938[(2)]);
var state_33938__$1 = state_33938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33938__$1,inst_33934);
} else {
if((state_val_33939 === (2))){
var state_33938__$1 = state_33938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33938__$1,(4),ch);
} else {
if((state_val_33939 === (11))){
var inst_33926 = (state_33938[(2)]);
var state_33938__$1 = state_33938;
var statearr_33969_35901 = state_33938__$1;
(statearr_33969_35901[(2)] = inst_33926);

(statearr_33969_35901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33939 === (9))){
var state_33938__$1 = state_33938;
var statearr_33970_35902 = state_33938__$1;
(statearr_33970_35902[(2)] = null);

(statearr_33970_35902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33939 === (5))){
var inst_33921 = cljs.core.async.close_BANG_(out);
var state_33938__$1 = state_33938;
var statearr_33971_35906 = state_33938__$1;
(statearr_33971_35906[(2)] = inst_33921);

(statearr_33971_35906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33939 === (10))){
var inst_33929 = (state_33938[(2)]);
var state_33938__$1 = (function (){var statearr_33972 = state_33938;
(statearr_33972[(8)] = inst_33929);

return statearr_33972;
})();
var statearr_33973_35913 = state_33938__$1;
(statearr_33973_35913[(2)] = null);

(statearr_33973_35913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33939 === (8))){
var inst_33918 = (state_33938[(7)]);
var state_33938__$1 = state_33938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33938__$1,(11),out,inst_33918);
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
var statearr_33978 = [null,null,null,null,null,null,null,null,null];
(statearr_33978[(0)] = cljs$core$async$state_machine__30487__auto__);

(statearr_33978[(1)] = (1));

return statearr_33978;
});
var cljs$core$async$state_machine__30487__auto____1 = (function (state_33938){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_33938);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e33980){var ex__30491__auto__ = e33980;
var statearr_33982_35922 = state_33938;
(statearr_33982_35922[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_33938[(4)]))){
var statearr_33986_35927 = state_33938;
(statearr_33986_35927[(1)] = cljs.core.first((state_33938[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35932 = state_33938;
state_33938 = G__35932;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$state_machine__30487__auto__ = function(state_33938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30487__auto____1.call(this,state_33938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30487__auto____0;
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30487__auto____1;
return cljs$core$async$state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_33991 = f__31239__auto__();
(statearr_33991[(6)] = c__31235__auto___35878);

return statearr_33991;
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
var G__33997 = arguments.length;
switch (G__33997) {
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
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_34085){
var state_val_34086 = (state_34085[(1)]);
if((state_val_34086 === (7))){
var inst_34081 = (state_34085[(2)]);
var state_34085__$1 = state_34085;
var statearr_34090_35951 = state_34085__$1;
(statearr_34090_35951[(2)] = inst_34081);

(statearr_34090_35951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (20))){
var inst_34048 = (state_34085[(7)]);
var inst_34060 = (state_34085[(2)]);
var inst_34061 = cljs.core.next(inst_34048);
var inst_34034 = inst_34061;
var inst_34035 = null;
var inst_34036 = (0);
var inst_34037 = (0);
var state_34085__$1 = (function (){var statearr_34092 = state_34085;
(statearr_34092[(8)] = inst_34035);

(statearr_34092[(9)] = inst_34060);

(statearr_34092[(10)] = inst_34036);

(statearr_34092[(11)] = inst_34034);

(statearr_34092[(12)] = inst_34037);

return statearr_34092;
})();
var statearr_34094_35961 = state_34085__$1;
(statearr_34094_35961[(2)] = null);

(statearr_34094_35961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (1))){
var state_34085__$1 = state_34085;
var statearr_34095_35964 = state_34085__$1;
(statearr_34095_35964[(2)] = null);

(statearr_34095_35964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (4))){
var inst_34009 = (state_34085[(13)]);
var inst_34009__$1 = (state_34085[(2)]);
var inst_34020 = (inst_34009__$1 == null);
var state_34085__$1 = (function (){var statearr_34099 = state_34085;
(statearr_34099[(13)] = inst_34009__$1);

return statearr_34099;
})();
if(cljs.core.truth_(inst_34020)){
var statearr_34100_35969 = state_34085__$1;
(statearr_34100_35969[(1)] = (5));

} else {
var statearr_34101_35973 = state_34085__$1;
(statearr_34101_35973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (15))){
var state_34085__$1 = state_34085;
var statearr_34105_35976 = state_34085__$1;
(statearr_34105_35976[(2)] = null);

(statearr_34105_35976[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (21))){
var state_34085__$1 = state_34085;
var statearr_34108_35979 = state_34085__$1;
(statearr_34108_35979[(2)] = null);

(statearr_34108_35979[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (13))){
var inst_34035 = (state_34085[(8)]);
var inst_34036 = (state_34085[(10)]);
var inst_34034 = (state_34085[(11)]);
var inst_34037 = (state_34085[(12)]);
var inst_34044 = (state_34085[(2)]);
var inst_34045 = (inst_34037 + (1));
var tmp34102 = inst_34035;
var tmp34103 = inst_34036;
var tmp34104 = inst_34034;
var inst_34034__$1 = tmp34104;
var inst_34035__$1 = tmp34102;
var inst_34036__$1 = tmp34103;
var inst_34037__$1 = inst_34045;
var state_34085__$1 = (function (){var statearr_34109 = state_34085;
(statearr_34109[(8)] = inst_34035__$1);

(statearr_34109[(10)] = inst_34036__$1);

(statearr_34109[(11)] = inst_34034__$1);

(statearr_34109[(12)] = inst_34037__$1);

(statearr_34109[(14)] = inst_34044);

return statearr_34109;
})();
var statearr_34111_35982 = state_34085__$1;
(statearr_34111_35982[(2)] = null);

(statearr_34111_35982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (22))){
var state_34085__$1 = state_34085;
var statearr_34114_35983 = state_34085__$1;
(statearr_34114_35983[(2)] = null);

(statearr_34114_35983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (6))){
var inst_34009 = (state_34085[(13)]);
var inst_34032 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34009) : f.call(null, inst_34009));
var inst_34033 = cljs.core.seq(inst_34032);
var inst_34034 = inst_34033;
var inst_34035 = null;
var inst_34036 = (0);
var inst_34037 = (0);
var state_34085__$1 = (function (){var statearr_34118 = state_34085;
(statearr_34118[(8)] = inst_34035);

(statearr_34118[(10)] = inst_34036);

(statearr_34118[(11)] = inst_34034);

(statearr_34118[(12)] = inst_34037);

return statearr_34118;
})();
var statearr_34119_35987 = state_34085__$1;
(statearr_34119_35987[(2)] = null);

(statearr_34119_35987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (17))){
var inst_34048 = (state_34085[(7)]);
var inst_34052 = cljs.core.chunk_first(inst_34048);
var inst_34053 = cljs.core.chunk_rest(inst_34048);
var inst_34054 = cljs.core.count(inst_34052);
var inst_34034 = inst_34053;
var inst_34035 = inst_34052;
var inst_34036 = inst_34054;
var inst_34037 = (0);
var state_34085__$1 = (function (){var statearr_34122 = state_34085;
(statearr_34122[(8)] = inst_34035);

(statearr_34122[(10)] = inst_34036);

(statearr_34122[(11)] = inst_34034);

(statearr_34122[(12)] = inst_34037);

return statearr_34122;
})();
var statearr_34123_35989 = state_34085__$1;
(statearr_34123_35989[(2)] = null);

(statearr_34123_35989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (3))){
var inst_34083 = (state_34085[(2)]);
var state_34085__$1 = state_34085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34085__$1,inst_34083);
} else {
if((state_val_34086 === (12))){
var inst_34069 = (state_34085[(2)]);
var state_34085__$1 = state_34085;
var statearr_34128_35990 = state_34085__$1;
(statearr_34128_35990[(2)] = inst_34069);

(statearr_34128_35990[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (2))){
var state_34085__$1 = state_34085;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34085__$1,(4),in$);
} else {
if((state_val_34086 === (23))){
var inst_34079 = (state_34085[(2)]);
var state_34085__$1 = state_34085;
var statearr_34129_35991 = state_34085__$1;
(statearr_34129_35991[(2)] = inst_34079);

(statearr_34129_35991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (19))){
var inst_34064 = (state_34085[(2)]);
var state_34085__$1 = state_34085;
var statearr_34132_35998 = state_34085__$1;
(statearr_34132_35998[(2)] = inst_34064);

(statearr_34132_35998[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (11))){
var inst_34034 = (state_34085[(11)]);
var inst_34048 = (state_34085[(7)]);
var inst_34048__$1 = cljs.core.seq(inst_34034);
var state_34085__$1 = (function (){var statearr_34133 = state_34085;
(statearr_34133[(7)] = inst_34048__$1);

return statearr_34133;
})();
if(inst_34048__$1){
var statearr_34134_36004 = state_34085__$1;
(statearr_34134_36004[(1)] = (14));

} else {
var statearr_34135_36006 = state_34085__$1;
(statearr_34135_36006[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (9))){
var inst_34071 = (state_34085[(2)]);
var inst_34072 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34085__$1 = (function (){var statearr_34136 = state_34085;
(statearr_34136[(15)] = inst_34071);

return statearr_34136;
})();
if(cljs.core.truth_(inst_34072)){
var statearr_34137_36012 = state_34085__$1;
(statearr_34137_36012[(1)] = (21));

} else {
var statearr_34138_36013 = state_34085__$1;
(statearr_34138_36013[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (5))){
var inst_34022 = cljs.core.async.close_BANG_(out);
var state_34085__$1 = state_34085;
var statearr_34139_36014 = state_34085__$1;
(statearr_34139_36014[(2)] = inst_34022);

(statearr_34139_36014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (14))){
var inst_34048 = (state_34085[(7)]);
var inst_34050 = cljs.core.chunked_seq_QMARK_(inst_34048);
var state_34085__$1 = state_34085;
if(inst_34050){
var statearr_34140_36025 = state_34085__$1;
(statearr_34140_36025[(1)] = (17));

} else {
var statearr_34141_36026 = state_34085__$1;
(statearr_34141_36026[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (16))){
var inst_34067 = (state_34085[(2)]);
var state_34085__$1 = state_34085;
var statearr_34142_36032 = state_34085__$1;
(statearr_34142_36032[(2)] = inst_34067);

(statearr_34142_36032[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (10))){
var inst_34035 = (state_34085[(8)]);
var inst_34037 = (state_34085[(12)]);
var inst_34042 = cljs.core._nth(inst_34035,inst_34037);
var state_34085__$1 = state_34085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34085__$1,(13),out,inst_34042);
} else {
if((state_val_34086 === (18))){
var inst_34048 = (state_34085[(7)]);
var inst_34057 = cljs.core.first(inst_34048);
var state_34085__$1 = state_34085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34085__$1,(20),out,inst_34057);
} else {
if((state_val_34086 === (8))){
var inst_34036 = (state_34085[(10)]);
var inst_34037 = (state_34085[(12)]);
var inst_34039 = (inst_34037 < inst_34036);
var inst_34040 = inst_34039;
var state_34085__$1 = state_34085;
if(cljs.core.truth_(inst_34040)){
var statearr_34150_36037 = state_34085__$1;
(statearr_34150_36037[(1)] = (10));

} else {
var statearr_34152_36038 = state_34085__$1;
(statearr_34152_36038[(1)] = (11));

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
var statearr_34156 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34156[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30487__auto__);

(statearr_34156[(1)] = (1));

return statearr_34156;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30487__auto____1 = (function (state_34085){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_34085);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e34157){var ex__30491__auto__ = e34157;
var statearr_34158_36040 = state_34085;
(statearr_34158_36040[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_34085[(4)]))){
var statearr_34168_36041 = state_34085;
(statearr_34168_36041[(1)] = cljs.core.first((state_34085[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36043 = state_34085;
state_34085 = G__36043;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30487__auto__ = function(state_34085){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30487__auto____1.call(this,state_34085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30487__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30487__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_34172 = f__31239__auto__();
(statearr_34172[(6)] = c__31235__auto__);

return statearr_34172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
}));

return c__31235__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34180 = arguments.length;
switch (G__34180) {
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
var G__34194 = arguments.length;
switch (G__34194) {
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
var G__34208 = arguments.length;
switch (G__34208) {
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
var c__31235__auto___36056 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_34244){
var state_val_34245 = (state_34244[(1)]);
if((state_val_34245 === (7))){
var inst_34239 = (state_34244[(2)]);
var state_34244__$1 = state_34244;
var statearr_34247_36058 = state_34244__$1;
(statearr_34247_36058[(2)] = inst_34239);

(statearr_34247_36058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (1))){
var inst_34221 = null;
var state_34244__$1 = (function (){var statearr_34250 = state_34244;
(statearr_34250[(7)] = inst_34221);

return statearr_34250;
})();
var statearr_34251_36059 = state_34244__$1;
(statearr_34251_36059[(2)] = null);

(statearr_34251_36059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (4))){
var inst_34224 = (state_34244[(8)]);
var inst_34224__$1 = (state_34244[(2)]);
var inst_34225 = (inst_34224__$1 == null);
var inst_34226 = cljs.core.not(inst_34225);
var state_34244__$1 = (function (){var statearr_34265 = state_34244;
(statearr_34265[(8)] = inst_34224__$1);

return statearr_34265;
})();
if(inst_34226){
var statearr_34266_36066 = state_34244__$1;
(statearr_34266_36066[(1)] = (5));

} else {
var statearr_34267_36069 = state_34244__$1;
(statearr_34267_36069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (6))){
var state_34244__$1 = state_34244;
var statearr_34268_36072 = state_34244__$1;
(statearr_34268_36072[(2)] = null);

(statearr_34268_36072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (3))){
var inst_34241 = (state_34244[(2)]);
var inst_34242 = cljs.core.async.close_BANG_(out);
var state_34244__$1 = (function (){var statearr_34270 = state_34244;
(statearr_34270[(9)] = inst_34241);

return statearr_34270;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34244__$1,inst_34242);
} else {
if((state_val_34245 === (2))){
var state_34244__$1 = state_34244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34244__$1,(4),ch);
} else {
if((state_val_34245 === (11))){
var inst_34224 = (state_34244[(8)]);
var inst_34233 = (state_34244[(2)]);
var inst_34221 = inst_34224;
var state_34244__$1 = (function (){var statearr_34272 = state_34244;
(statearr_34272[(7)] = inst_34221);

(statearr_34272[(10)] = inst_34233);

return statearr_34272;
})();
var statearr_34273_36075 = state_34244__$1;
(statearr_34273_36075[(2)] = null);

(statearr_34273_36075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (9))){
var inst_34224 = (state_34244[(8)]);
var state_34244__$1 = state_34244;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34244__$1,(11),out,inst_34224);
} else {
if((state_val_34245 === (5))){
var inst_34221 = (state_34244[(7)]);
var inst_34224 = (state_34244[(8)]);
var inst_34228 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34224,inst_34221);
var state_34244__$1 = state_34244;
if(inst_34228){
var statearr_34275_36076 = state_34244__$1;
(statearr_34275_36076[(1)] = (8));

} else {
var statearr_34276_36077 = state_34244__$1;
(statearr_34276_36077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (10))){
var inst_34236 = (state_34244[(2)]);
var state_34244__$1 = state_34244;
var statearr_34281_36079 = state_34244__$1;
(statearr_34281_36079[(2)] = inst_34236);

(statearr_34281_36079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (8))){
var inst_34221 = (state_34244[(7)]);
var tmp34274 = inst_34221;
var inst_34221__$1 = tmp34274;
var state_34244__$1 = (function (){var statearr_34284 = state_34244;
(statearr_34284[(7)] = inst_34221__$1);

return statearr_34284;
})();
var statearr_34285_36086 = state_34244__$1;
(statearr_34285_36086[(2)] = null);

(statearr_34285_36086[(1)] = (2));


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
var statearr_34286 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34286[(0)] = cljs$core$async$state_machine__30487__auto__);

(statearr_34286[(1)] = (1));

return statearr_34286;
});
var cljs$core$async$state_machine__30487__auto____1 = (function (state_34244){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_34244);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e34289){var ex__30491__auto__ = e34289;
var statearr_34290_36098 = state_34244;
(statearr_34290_36098[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_34244[(4)]))){
var statearr_34291_36099 = state_34244;
(statearr_34291_36099[(1)] = cljs.core.first((state_34244[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36103 = state_34244;
state_34244 = G__36103;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$state_machine__30487__auto__ = function(state_34244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30487__auto____1.call(this,state_34244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30487__auto____0;
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30487__auto____1;
return cljs$core$async$state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_34292 = f__31239__auto__();
(statearr_34292[(6)] = c__31235__auto___36056);

return statearr_34292;
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
var G__34298 = arguments.length;
switch (G__34298) {
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
var c__31235__auto___36112 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_34342){
var state_val_34343 = (state_34342[(1)]);
if((state_val_34343 === (7))){
var inst_34338 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
var statearr_34344_36117 = state_34342__$1;
(statearr_34344_36117[(2)] = inst_34338);

(statearr_34344_36117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (1))){
var inst_34301 = (new Array(n));
var inst_34302 = inst_34301;
var inst_34303 = (0);
var state_34342__$1 = (function (){var statearr_34345 = state_34342;
(statearr_34345[(7)] = inst_34302);

(statearr_34345[(8)] = inst_34303);

return statearr_34345;
})();
var statearr_34350_36119 = state_34342__$1;
(statearr_34350_36119[(2)] = null);

(statearr_34350_36119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (4))){
var inst_34306 = (state_34342[(9)]);
var inst_34306__$1 = (state_34342[(2)]);
var inst_34311 = (inst_34306__$1 == null);
var inst_34312 = cljs.core.not(inst_34311);
var state_34342__$1 = (function (){var statearr_34357 = state_34342;
(statearr_34357[(9)] = inst_34306__$1);

return statearr_34357;
})();
if(inst_34312){
var statearr_34361_36123 = state_34342__$1;
(statearr_34361_36123[(1)] = (5));

} else {
var statearr_34365_36125 = state_34342__$1;
(statearr_34365_36125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (15))){
var inst_34332 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
var statearr_34378_36126 = state_34342__$1;
(statearr_34378_36126[(2)] = inst_34332);

(statearr_34378_36126[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (13))){
var state_34342__$1 = state_34342;
var statearr_34389_36128 = state_34342__$1;
(statearr_34389_36128[(2)] = null);

(statearr_34389_36128[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (6))){
var inst_34303 = (state_34342[(8)]);
var inst_34328 = (inst_34303 > (0));
var state_34342__$1 = state_34342;
if(cljs.core.truth_(inst_34328)){
var statearr_34390_36136 = state_34342__$1;
(statearr_34390_36136[(1)] = (12));

} else {
var statearr_34391_36137 = state_34342__$1;
(statearr_34391_36137[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (3))){
var inst_34340 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34342__$1,inst_34340);
} else {
if((state_val_34343 === (12))){
var inst_34302 = (state_34342[(7)]);
var inst_34330 = cljs.core.vec(inst_34302);
var state_34342__$1 = state_34342;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34342__$1,(15),out,inst_34330);
} else {
if((state_val_34343 === (2))){
var state_34342__$1 = state_34342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34342__$1,(4),ch);
} else {
if((state_val_34343 === (11))){
var inst_34322 = (state_34342[(2)]);
var inst_34323 = (new Array(n));
var inst_34302 = inst_34323;
var inst_34303 = (0);
var state_34342__$1 = (function (){var statearr_34408 = state_34342;
(statearr_34408[(7)] = inst_34302);

(statearr_34408[(8)] = inst_34303);

(statearr_34408[(10)] = inst_34322);

return statearr_34408;
})();
var statearr_34412_36146 = state_34342__$1;
(statearr_34412_36146[(2)] = null);

(statearr_34412_36146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (9))){
var inst_34302 = (state_34342[(7)]);
var inst_34320 = cljs.core.vec(inst_34302);
var state_34342__$1 = state_34342;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34342__$1,(11),out,inst_34320);
} else {
if((state_val_34343 === (5))){
var inst_34315 = (state_34342[(11)]);
var inst_34306 = (state_34342[(9)]);
var inst_34302 = (state_34342[(7)]);
var inst_34303 = (state_34342[(8)]);
var inst_34314 = (inst_34302[inst_34303] = inst_34306);
var inst_34315__$1 = (inst_34303 + (1));
var inst_34316 = (inst_34315__$1 < n);
var state_34342__$1 = (function (){var statearr_34417 = state_34342;
(statearr_34417[(11)] = inst_34315__$1);

(statearr_34417[(12)] = inst_34314);

return statearr_34417;
})();
if(cljs.core.truth_(inst_34316)){
var statearr_34418_36158 = state_34342__$1;
(statearr_34418_36158[(1)] = (8));

} else {
var statearr_34420_36159 = state_34342__$1;
(statearr_34420_36159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (14))){
var inst_34335 = (state_34342[(2)]);
var inst_34336 = cljs.core.async.close_BANG_(out);
var state_34342__$1 = (function (){var statearr_34423 = state_34342;
(statearr_34423[(13)] = inst_34335);

return statearr_34423;
})();
var statearr_34424_36167 = state_34342__$1;
(statearr_34424_36167[(2)] = inst_34336);

(statearr_34424_36167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (10))){
var inst_34326 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
var statearr_34425_36168 = state_34342__$1;
(statearr_34425_36168[(2)] = inst_34326);

(statearr_34425_36168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (8))){
var inst_34315 = (state_34342[(11)]);
var inst_34302 = (state_34342[(7)]);
var tmp34421 = inst_34302;
var inst_34302__$1 = tmp34421;
var inst_34303 = inst_34315;
var state_34342__$1 = (function (){var statearr_34432 = state_34342;
(statearr_34432[(7)] = inst_34302__$1);

(statearr_34432[(8)] = inst_34303);

return statearr_34432;
})();
var statearr_34433_36177 = state_34342__$1;
(statearr_34433_36177[(2)] = null);

(statearr_34433_36177[(1)] = (2));


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
var statearr_34434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34434[(0)] = cljs$core$async$state_machine__30487__auto__);

(statearr_34434[(1)] = (1));

return statearr_34434;
});
var cljs$core$async$state_machine__30487__auto____1 = (function (state_34342){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_34342);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e34441){var ex__30491__auto__ = e34441;
var statearr_34442_36185 = state_34342;
(statearr_34442_36185[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_34342[(4)]))){
var statearr_34443_36186 = state_34342;
(statearr_34443_36186[(1)] = cljs.core.first((state_34342[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36193 = state_34342;
state_34342 = G__36193;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$state_machine__30487__auto__ = function(state_34342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30487__auto____1.call(this,state_34342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30487__auto____0;
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30487__auto____1;
return cljs$core$async$state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_34444 = f__31239__auto__();
(statearr_34444[(6)] = c__31235__auto___36112);

return statearr_34444;
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
var G__34448 = arguments.length;
switch (G__34448) {
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
var c__31235__auto___36235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31239__auto__ = (function (){var switch__30486__auto__ = (function (state_34511){
var state_val_34512 = (state_34511[(1)]);
if((state_val_34512 === (7))){
var inst_34507 = (state_34511[(2)]);
var state_34511__$1 = state_34511;
var statearr_34515_36241 = state_34511__$1;
(statearr_34515_36241[(2)] = inst_34507);

(statearr_34515_36241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34512 === (1))){
var inst_34454 = [];
var inst_34455 = inst_34454;
var inst_34456 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34511__$1 = (function (){var statearr_34516 = state_34511;
(statearr_34516[(7)] = inst_34455);

(statearr_34516[(8)] = inst_34456);

return statearr_34516;
})();
var statearr_34517_36247 = state_34511__$1;
(statearr_34517_36247[(2)] = null);

(statearr_34517_36247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34512 === (4))){
var inst_34459 = (state_34511[(9)]);
var inst_34459__$1 = (state_34511[(2)]);
var inst_34465 = (inst_34459__$1 == null);
var inst_34466 = cljs.core.not(inst_34465);
var state_34511__$1 = (function (){var statearr_34521 = state_34511;
(statearr_34521[(9)] = inst_34459__$1);

return statearr_34521;
})();
if(inst_34466){
var statearr_34522_36255 = state_34511__$1;
(statearr_34522_36255[(1)] = (5));

} else {
var statearr_34523_36256 = state_34511__$1;
(statearr_34523_36256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34512 === (15))){
var inst_34455 = (state_34511[(7)]);
var inst_34499 = cljs.core.vec(inst_34455);
var state_34511__$1 = state_34511;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34511__$1,(18),out,inst_34499);
} else {
if((state_val_34512 === (13))){
var inst_34494 = (state_34511[(2)]);
var state_34511__$1 = state_34511;
var statearr_34529_36267 = state_34511__$1;
(statearr_34529_36267[(2)] = inst_34494);

(statearr_34529_36267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34512 === (6))){
var inst_34455 = (state_34511[(7)]);
var inst_34496 = inst_34455.length;
var inst_34497 = (inst_34496 > (0));
var state_34511__$1 = state_34511;
if(cljs.core.truth_(inst_34497)){
var statearr_34530_36273 = state_34511__$1;
(statearr_34530_36273[(1)] = (15));

} else {
var statearr_34531_36274 = state_34511__$1;
(statearr_34531_36274[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34512 === (17))){
var inst_34504 = (state_34511[(2)]);
var inst_34505 = cljs.core.async.close_BANG_(out);
var state_34511__$1 = (function (){var statearr_34532 = state_34511;
(statearr_34532[(10)] = inst_34504);

return statearr_34532;
})();
var statearr_34533_36275 = state_34511__$1;
(statearr_34533_36275[(2)] = inst_34505);

(statearr_34533_36275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34512 === (3))){
var inst_34509 = (state_34511[(2)]);
var state_34511__$1 = state_34511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34511__$1,inst_34509);
} else {
if((state_val_34512 === (12))){
var inst_34455 = (state_34511[(7)]);
var inst_34482 = cljs.core.vec(inst_34455);
var state_34511__$1 = state_34511;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34511__$1,(14),out,inst_34482);
} else {
if((state_val_34512 === (2))){
var state_34511__$1 = state_34511;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34511__$1,(4),ch);
} else {
if((state_val_34512 === (11))){
var inst_34455 = (state_34511[(7)]);
var inst_34468 = (state_34511[(11)]);
var inst_34459 = (state_34511[(9)]);
var inst_34479 = inst_34455.push(inst_34459);
var tmp34534 = inst_34455;
var inst_34455__$1 = tmp34534;
var inst_34456 = inst_34468;
var state_34511__$1 = (function (){var statearr_34543 = state_34511;
(statearr_34543[(7)] = inst_34455__$1);

(statearr_34543[(8)] = inst_34456);

(statearr_34543[(12)] = inst_34479);

return statearr_34543;
})();
var statearr_34544_36284 = state_34511__$1;
(statearr_34544_36284[(2)] = null);

(statearr_34544_36284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34512 === (9))){
var inst_34456 = (state_34511[(8)]);
var inst_34475 = cljs.core.keyword_identical_QMARK_(inst_34456,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34511__$1 = state_34511;
var statearr_34553_36285 = state_34511__$1;
(statearr_34553_36285[(2)] = inst_34475);

(statearr_34553_36285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34512 === (5))){
var inst_34456 = (state_34511[(8)]);
var inst_34468 = (state_34511[(11)]);
var inst_34459 = (state_34511[(9)]);
var inst_34469 = (state_34511[(13)]);
var inst_34468__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34459) : f.call(null, inst_34459));
var inst_34469__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34468__$1,inst_34456);
var state_34511__$1 = (function (){var statearr_34554 = state_34511;
(statearr_34554[(11)] = inst_34468__$1);

(statearr_34554[(13)] = inst_34469__$1);

return statearr_34554;
})();
if(inst_34469__$1){
var statearr_34555_36292 = state_34511__$1;
(statearr_34555_36292[(1)] = (8));

} else {
var statearr_34556_36293 = state_34511__$1;
(statearr_34556_36293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34512 === (14))){
var inst_34468 = (state_34511[(11)]);
var inst_34459 = (state_34511[(9)]);
var inst_34484 = (state_34511[(2)]);
var inst_34490 = [];
var inst_34491 = inst_34490.push(inst_34459);
var inst_34455 = inst_34490;
var inst_34456 = inst_34468;
var state_34511__$1 = (function (){var statearr_34557 = state_34511;
(statearr_34557[(7)] = inst_34455);

(statearr_34557[(8)] = inst_34456);

(statearr_34557[(14)] = inst_34491);

(statearr_34557[(15)] = inst_34484);

return statearr_34557;
})();
var statearr_34561_36295 = state_34511__$1;
(statearr_34561_36295[(2)] = null);

(statearr_34561_36295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34512 === (16))){
var state_34511__$1 = state_34511;
var statearr_34565_36296 = state_34511__$1;
(statearr_34565_36296[(2)] = null);

(statearr_34565_36296[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34512 === (10))){
var inst_34477 = (state_34511[(2)]);
var state_34511__$1 = state_34511;
if(cljs.core.truth_(inst_34477)){
var statearr_34576_36298 = state_34511__$1;
(statearr_34576_36298[(1)] = (11));

} else {
var statearr_34577_36299 = state_34511__$1;
(statearr_34577_36299[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34512 === (18))){
var inst_34501 = (state_34511[(2)]);
var state_34511__$1 = state_34511;
var statearr_34581_36300 = state_34511__$1;
(statearr_34581_36300[(2)] = inst_34501);

(statearr_34581_36300[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34512 === (8))){
var inst_34469 = (state_34511[(13)]);
var state_34511__$1 = state_34511;
var statearr_34582_36302 = state_34511__$1;
(statearr_34582_36302[(2)] = inst_34469);

(statearr_34582_36302[(1)] = (10));


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
var statearr_34583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34583[(0)] = cljs$core$async$state_machine__30487__auto__);

(statearr_34583[(1)] = (1));

return statearr_34583;
});
var cljs$core$async$state_machine__30487__auto____1 = (function (state_34511){
while(true){
var ret_value__30488__auto__ = (function (){try{while(true){
var result__30489__auto__ = switch__30486__auto__(state_34511);
if(cljs.core.keyword_identical_QMARK_(result__30489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30489__auto__;
}
break;
}
}catch (e34584){var ex__30491__auto__ = e34584;
var statearr_34585_36313 = state_34511;
(statearr_34585_36313[(2)] = ex__30491__auto__);


if(cljs.core.seq((state_34511[(4)]))){
var statearr_34586_36314 = state_34511;
(statearr_34586_36314[(1)] = cljs.core.first((state_34511[(4)])));

} else {
throw ex__30491__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36315 = state_34511;
state_34511 = G__36315;
continue;
} else {
return ret_value__30488__auto__;
}
break;
}
});
cljs$core$async$state_machine__30487__auto__ = function(state_34511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30487__auto____1.call(this,state_34511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30487__auto____0;
cljs$core$async$state_machine__30487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30487__auto____1;
return cljs$core$async$state_machine__30487__auto__;
})()
})();
var state__31240__auto__ = (function (){var statearr_34587 = f__31239__auto__();
(statearr_34587[(6)] = c__31235__auto___36235);

return statearr_34587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31240__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
