goog.provide('portfolio.ui.canvas.background');
portfolio.ui.canvas.background.default_options = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"light-mode","light-mode",-1650913509),new cljs.core.Keyword(null,"title","title",636505583),"Light (.light-mode)",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("background","background-color","background/background-color",1902638780),"#fff",new cljs.core.Keyword("background","document-class","background/document-class",-2052010975),"light-mode",new cljs.core.Keyword("background","body-class","background/body-class",181741863),"light-mode"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"dark-mode","dark-mode",491620517),new cljs.core.Keyword(null,"title","title",636505583),"Dark (.dark-mode)",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("background","background-color","background/background-color",1902638780),"#111111",new cljs.core.Keyword("background","document-class","background/document-class",-2052010975),"dark-mode",new cljs.core.Keyword("background","body-class","background/body-class",181741863),"dark-mode"], null)], null)], null);
portfolio.ui.canvas.background.prepare_canvas = (function portfolio$ui$canvas$background$prepare_canvas(data,el,p__51120){
var map__51126 = p__51120;
var map__51126__$1 = cljs.core.__destructure_map(map__51126);
var background_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51126__$1,new cljs.core.Keyword("background","background-color","background/background-color",1902638780));
var body_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51126__$1,new cljs.core.Keyword("background","body-class","background/body-class",181741863));
var document_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51126__$1,new cljs.core.Keyword("background","document-class","background/document-class",-2052010975));
var document_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51126__$1,new cljs.core.Keyword("background","document-data","background/document-data",-1861116962));
(portfolio.ui.components.canvas.get_iframe(el).style.backgroundColor = background_color);

var body = portfolio.ui.components.canvas.get_iframe_body(el);
var seq__51141 = cljs.core.seq(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(data));
var chunk__51142 = null;
var count__51143 = (0);
var i__51144 = (0);
while(true){
if((i__51144 < count__51143)){
var map__51279 = chunk__51142.cljs$core$IIndexed$_nth$arity$2(null, i__51144);
var map__51279__$1 = cljs.core.__destructure_map(map__51279);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51279__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.empty_QMARK_(new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(body_class,new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value))){
body.classList.add(new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value));
} else {
body.classList.remove(new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value));
}
}

if(cljs.core.empty_QMARK_(new cljs.core.Keyword("background","document-class","background/document-class",-2052010975).cljs$core$IFn$_invoke$arity$1(value))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document_class,new cljs.core.Keyword("background","document-class","background/document-class",-2052010975).cljs$core$IFn$_invoke$arity$1(value))){
body.parentNode.classList.add(new cljs.core.Keyword("background","document-class","background/document-class",-2052010975).cljs$core$IFn$_invoke$arity$1(value));
} else {
body.parentNode.classList.remove(new cljs.core.Keyword("background","document-class","background/document-class",-2052010975).cljs$core$IFn$_invoke$arity$1(value));
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("background","document-data","background/document-data",-1861116962).cljs$core$IFn$_invoke$arity$1(value),document_data)){
var seq__51285_51460 = cljs.core.seq(new cljs.core.Keyword("background","document-data","background/document-data",-1861116962).cljs$core$IFn$_invoke$arity$1(value));
var chunk__51286_51461 = null;
var count__51287_51462 = (0);
var i__51288_51463 = (0);
while(true){
if((i__51288_51463 < count__51287_51462)){
var vec__51298_51464 = chunk__51286_51461.cljs$core$IIndexed$_nth$arity$2(null, i__51288_51463);
var k_51465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51298_51464,(0),null);
var v_51466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51298_51464,(1),null);
body.parentNode.setAttribute(["data-",cljs.core.name(k_51465)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_51466));


var G__51467 = seq__51285_51460;
var G__51468 = chunk__51286_51461;
var G__51469 = count__51287_51462;
var G__51470 = (i__51288_51463 + (1));
seq__51285_51460 = G__51467;
chunk__51286_51461 = G__51468;
count__51287_51462 = G__51469;
i__51288_51463 = G__51470;
continue;
} else {
var temp__5823__auto___51472 = cljs.core.seq(seq__51285_51460);
if(temp__5823__auto___51472){
var seq__51285_51473__$1 = temp__5823__auto___51472;
if(cljs.core.chunked_seq_QMARK_(seq__51285_51473__$1)){
var c__5525__auto___51474 = cljs.core.chunk_first(seq__51285_51473__$1);
var G__51475 = cljs.core.chunk_rest(seq__51285_51473__$1);
var G__51476 = c__5525__auto___51474;
var G__51477 = cljs.core.count(c__5525__auto___51474);
var G__51478 = (0);
seq__51285_51460 = G__51475;
chunk__51286_51461 = G__51476;
count__51287_51462 = G__51477;
i__51288_51463 = G__51478;
continue;
} else {
var vec__51312_51479 = cljs.core.first(seq__51285_51473__$1);
var k_51480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51312_51479,(0),null);
var v_51481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51312_51479,(1),null);
body.parentNode.setAttribute(["data-",cljs.core.name(k_51480)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_51481));


var G__51482 = cljs.core.next(seq__51285_51473__$1);
var G__51483 = null;
var G__51484 = (0);
var G__51485 = (0);
seq__51285_51460 = G__51482;
chunk__51286_51461 = G__51483;
count__51287_51462 = G__51484;
i__51288_51463 = G__51485;
continue;
}
} else {
}
}
break;
}
} else {
var seq__51315_51486 = cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,new cljs.core.Keyword("background","document-data","background/document-data",-1861116962).cljs$core$IFn$_invoke$arity$1(value),cljs.core.keys(document_data)));
var chunk__51316_51487 = null;
var count__51317_51488 = (0);
var i__51318_51489 = (0);
while(true){
if((i__51318_51489 < count__51317_51488)){
var vec__51335_51490 = chunk__51316_51487.cljs$core$IIndexed$_nth$arity$2(null, i__51318_51489);
var k_51491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51335_51490,(0),null);
var v_51492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51335_51490,(1),null);
body.parentNode.removeAttribute(["data-",cljs.core.name(k_51491)].join(''));


var G__51493 = seq__51315_51486;
var G__51494 = chunk__51316_51487;
var G__51495 = count__51317_51488;
var G__51496 = (i__51318_51489 + (1));
seq__51315_51486 = G__51493;
chunk__51316_51487 = G__51494;
count__51317_51488 = G__51495;
i__51318_51489 = G__51496;
continue;
} else {
var temp__5823__auto___51497 = cljs.core.seq(seq__51315_51486);
if(temp__5823__auto___51497){
var seq__51315_51498__$1 = temp__5823__auto___51497;
if(cljs.core.chunked_seq_QMARK_(seq__51315_51498__$1)){
var c__5525__auto___51499 = cljs.core.chunk_first(seq__51315_51498__$1);
var G__51500 = cljs.core.chunk_rest(seq__51315_51498__$1);
var G__51501 = c__5525__auto___51499;
var G__51502 = cljs.core.count(c__5525__auto___51499);
var G__51503 = (0);
seq__51315_51486 = G__51500;
chunk__51316_51487 = G__51501;
count__51317_51488 = G__51502;
i__51318_51489 = G__51503;
continue;
} else {
var vec__51347_51504 = cljs.core.first(seq__51315_51498__$1);
var k_51505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51347_51504,(0),null);
var v_51506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51347_51504,(1),null);
body.parentNode.removeAttribute(["data-",cljs.core.name(k_51505)].join(''));


var G__51507 = cljs.core.next(seq__51315_51498__$1);
var G__51508 = null;
var G__51509 = (0);
var G__51510 = (0);
seq__51315_51486 = G__51507;
chunk__51316_51487 = G__51508;
count__51317_51488 = G__51509;
i__51318_51489 = G__51510;
continue;
}
} else {
}
}
break;
}
}


var G__51511 = seq__51141;
var G__51512 = chunk__51142;
var G__51513 = count__51143;
var G__51514 = (i__51144 + (1));
seq__51141 = G__51511;
chunk__51142 = G__51512;
count__51143 = G__51513;
i__51144 = G__51514;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__51141);
if(temp__5823__auto__){
var seq__51141__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51141__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__51141__$1);
var G__51515 = cljs.core.chunk_rest(seq__51141__$1);
var G__51516 = c__5525__auto__;
var G__51517 = cljs.core.count(c__5525__auto__);
var G__51518 = (0);
seq__51141 = G__51515;
chunk__51142 = G__51516;
count__51143 = G__51517;
i__51144 = G__51518;
continue;
} else {
var map__51386 = cljs.core.first(seq__51141__$1);
var map__51386__$1 = cljs.core.__destructure_map(map__51386);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51386__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.empty_QMARK_(new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(body_class,new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value))){
body.classList.add(new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value));
} else {
body.classList.remove(new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value));
}
}

if(cljs.core.empty_QMARK_(new cljs.core.Keyword("background","document-class","background/document-class",-2052010975).cljs$core$IFn$_invoke$arity$1(value))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document_class,new cljs.core.Keyword("background","document-class","background/document-class",-2052010975).cljs$core$IFn$_invoke$arity$1(value))){
body.parentNode.classList.add(new cljs.core.Keyword("background","document-class","background/document-class",-2052010975).cljs$core$IFn$_invoke$arity$1(value));
} else {
body.parentNode.classList.remove(new cljs.core.Keyword("background","document-class","background/document-class",-2052010975).cljs$core$IFn$_invoke$arity$1(value));
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("background","document-data","background/document-data",-1861116962).cljs$core$IFn$_invoke$arity$1(value),document_data)){
var seq__51389_51519 = cljs.core.seq(new cljs.core.Keyword("background","document-data","background/document-data",-1861116962).cljs$core$IFn$_invoke$arity$1(value));
var chunk__51391_51520 = null;
var count__51392_51521 = (0);
var i__51393_51522 = (0);
while(true){
if((i__51393_51522 < count__51392_51521)){
var vec__51412_51523 = chunk__51391_51520.cljs$core$IIndexed$_nth$arity$2(null, i__51393_51522);
var k_51524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51412_51523,(0),null);
var v_51525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51412_51523,(1),null);
body.parentNode.setAttribute(["data-",cljs.core.name(k_51524)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_51525));


var G__51526 = seq__51389_51519;
var G__51527 = chunk__51391_51520;
var G__51528 = count__51392_51521;
var G__51529 = (i__51393_51522 + (1));
seq__51389_51519 = G__51526;
chunk__51391_51520 = G__51527;
count__51392_51521 = G__51528;
i__51393_51522 = G__51529;
continue;
} else {
var temp__5823__auto___51530__$1 = cljs.core.seq(seq__51389_51519);
if(temp__5823__auto___51530__$1){
var seq__51389_51531__$1 = temp__5823__auto___51530__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51389_51531__$1)){
var c__5525__auto___51532 = cljs.core.chunk_first(seq__51389_51531__$1);
var G__51533 = cljs.core.chunk_rest(seq__51389_51531__$1);
var G__51534 = c__5525__auto___51532;
var G__51535 = cljs.core.count(c__5525__auto___51532);
var G__51536 = (0);
seq__51389_51519 = G__51533;
chunk__51391_51520 = G__51534;
count__51392_51521 = G__51535;
i__51393_51522 = G__51536;
continue;
} else {
var vec__51424_51537 = cljs.core.first(seq__51389_51531__$1);
var k_51538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51424_51537,(0),null);
var v_51539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51424_51537,(1),null);
body.parentNode.setAttribute(["data-",cljs.core.name(k_51538)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_51539));


var G__51540 = cljs.core.next(seq__51389_51531__$1);
var G__51541 = null;
var G__51542 = (0);
var G__51543 = (0);
seq__51389_51519 = G__51540;
chunk__51391_51520 = G__51541;
count__51392_51521 = G__51542;
i__51393_51522 = G__51543;
continue;
}
} else {
}
}
break;
}
} else {
var seq__51431_51544 = cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,new cljs.core.Keyword("background","document-data","background/document-data",-1861116962).cljs$core$IFn$_invoke$arity$1(value),cljs.core.keys(document_data)));
var chunk__51432_51545 = null;
var count__51433_51546 = (0);
var i__51434_51547 = (0);
while(true){
if((i__51434_51547 < count__51433_51546)){
var vec__51444_51548 = chunk__51432_51545.cljs$core$IIndexed$_nth$arity$2(null, i__51434_51547);
var k_51549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51444_51548,(0),null);
var v_51550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51444_51548,(1),null);
body.parentNode.removeAttribute(["data-",cljs.core.name(k_51549)].join(''));


var G__51551 = seq__51431_51544;
var G__51552 = chunk__51432_51545;
var G__51553 = count__51433_51546;
var G__51554 = (i__51434_51547 + (1));
seq__51431_51544 = G__51551;
chunk__51432_51545 = G__51552;
count__51433_51546 = G__51553;
i__51434_51547 = G__51554;
continue;
} else {
var temp__5823__auto___51555__$1 = cljs.core.seq(seq__51431_51544);
if(temp__5823__auto___51555__$1){
var seq__51431_51556__$1 = temp__5823__auto___51555__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51431_51556__$1)){
var c__5525__auto___51557 = cljs.core.chunk_first(seq__51431_51556__$1);
var G__51558 = cljs.core.chunk_rest(seq__51431_51556__$1);
var G__51559 = c__5525__auto___51557;
var G__51560 = cljs.core.count(c__5525__auto___51557);
var G__51561 = (0);
seq__51431_51544 = G__51558;
chunk__51432_51545 = G__51559;
count__51433_51546 = G__51560;
i__51434_51547 = G__51561;
continue;
} else {
var vec__51451_51562 = cljs.core.first(seq__51431_51556__$1);
var k_51563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51451_51562,(0),null);
var v_51564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51451_51562,(1),null);
body.parentNode.removeAttribute(["data-",cljs.core.name(k_51563)].join(''));


var G__51565 = cljs.core.next(seq__51431_51556__$1);
var G__51566 = null;
var G__51567 = (0);
var G__51568 = (0);
seq__51431_51544 = G__51565;
chunk__51432_51545 = G__51566;
count__51433_51546 = G__51567;
i__51434_51547 = G__51568;
continue;
}
} else {
}
}
break;
}
}


var G__51569 = cljs.core.next(seq__51141__$1);
var G__51570 = null;
var G__51571 = (0);
var G__51572 = (0);
seq__51141 = G__51569;
chunk__51142 = G__51570;
count__51143 = G__51571;
i__51144 = G__51572;
continue;
}
} else {
return null;
}
}
break;
}
});
portfolio.ui.canvas.background.create_background_tool = (function portfolio$ui$canvas$background$create_background_tool(config){
var options = (function (){var or__5002__auto__ = new cljs.core.Keyword("background","options","background/options",1180140427).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return portfolio.ui.canvas.background.default_options;
}
})();
return portfolio.ui.canvas.addons.create_toolbar_menu_button(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("canvas","background","canvas/background",-533817437),new cljs.core.Keyword(null,"persist?","persist?",-1772568760),true,new cljs.core.Keyword(null,"persist-key","persist-key",892698184),cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background","options","background/options",1180140427).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword("background","default-option-id","background/default-option-id",-1599012737).cljs$core$IFn$_invoke$arity$1(config)], null)),new cljs.core.Keyword(null,"title","title",636505583),"Background",new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){
phosphor.icons.load_icon_BANG_(new cljs.core.Keyword("phosphor.regular","palette","phosphor.regular/palette",-491808122),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 256 256"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"256",new cljs.core.Keyword(null,"height","height",1025178622),"256",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"d","d",1972142424),"M128,192a24,24,0,0,1,24-24h46.21a24,24,0,0,0,23.4-18.65A96.48,96.48,0,0,0,224,127.17c-.45-52.82-44.16-95.7-97-95.17a96,96,0,0,0-95,96c0,41.81,26.73,73.44,64,86.61A24,24,0,0,0,128,192Z",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),"128",new cljs.core.Keyword(null,"cy","cy",755331060),"76",new cljs.core.Keyword(null,"r","r",-471384190),"12"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),"84",new cljs.core.Keyword(null,"cy","cy",755331060),"100",new cljs.core.Keyword(null,"r","r",-471384190),"12"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),"84",new cljs.core.Keyword(null,"cy","cy",755331060),"156",new cljs.core.Keyword(null,"r","r",-471384190),"12"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),"172",new cljs.core.Keyword(null,"cy","cy",755331060),"100",new cljs.core.Keyword(null,"r","r",-471384190),"12"], null)], null)], null));

return new cljs.core.Keyword("phosphor.regular","palette","phosphor.regular/palette",-491808122);
})()
,new cljs.core.Keyword(null,"options","options",99638489),(function (){var or__5002__auto__ = new cljs.core.Keyword("background","options","background/options",1180140427).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return options;
}
})(),new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.first((function (){var or__5002__auto__ = (function (){var temp__5823__auto__ = new cljs.core.Keyword("background","default-option-id","background/default-option-id",-1599012737).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"id","id",-1388402092)),options);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return options;
}
})())),new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613),new cljs.core.Var(function(){return portfolio.ui.canvas.background.prepare_canvas;},new cljs.core.Symbol("portfolio.ui.canvas.background","prepare-canvas","portfolio.ui.canvas.background/prepare-canvas",-1224444684,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.canvas.background","portfolio.ui.canvas.background",1900476903,null),new cljs.core.Symbol(null,"prepare-canvas","prepare-canvas",-1313844156,null),"portfolio/ui/canvas/background.cljs",21,1,18,18,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("background","keys","background/keys",-1876510524),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"background-color","background-color",-2084001743,null),new cljs.core.Symbol(null,"body-class","body-class",1006967324,null),new cljs.core.Symbol(null,"document-class","document-class",915506966,null),new cljs.core.Symbol(null,"document-data","document-data",-1586333417,null)], null)], null)], null)),null,(cljs.core.truth_(portfolio.ui.canvas.background.prepare_canvas)?portfolio.ui.canvas.background.prepare_canvas.cljs$lang$test:null)]))], null));
});

//# sourceMappingURL=portfolio.ui.canvas.background.js.map
