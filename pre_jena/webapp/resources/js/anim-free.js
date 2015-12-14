var late = 2;
(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.運勢銀 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 11
	this.instance = new lib.オーロラ();
	this.instance.setTransform(323.2,844.8,1,0.015,0,0,0,332.8,854.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(159).to({_off:false},0).to({regY:854.4,scaleY:0.6},3).wait(4));

	// 鑑定書
	this.instance_1 = new lib.card();
	this.instance_1.setTransform(320/late,417/late,0.699,0.699,0,0,0,292.5/late,447/late);
	this.instance_1.alpha = 0.488;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(153).to({_off:false},0).to({scaleX:0.74,scaleY:0.74},2).to({regX:292.4/late,regY:446.9/late,scaleX:0.6,scaleY:0.6},2).to({_off:true},1).wait(8));

	// 鑑定書
	this.instance_2 = new lib.card();
	this.instance_2.setTransform(320/late,477/late,0.563,0.563,0,0,0,292.5/late,447/late);
	this.instance_2.alpha = 0.301;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(136).to({_off:false},0).to({y:407/late,alpha:1},14,cjs.Ease.get(1)).to({y:417/late},4).wait(12));

	// 白い板
	this.instance_3 = new lib.siroiita();
	this.instance_3.setTransform(326.1/late,414.1/late,1,1,0,0,0,346.1/late,434.1/late);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(153).to({_off:false},0).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(7));

	// 白い板
	this.instance_4 = new lib.siroiita();
	this.instance_4.setTransform(326.1/late,414.1/late,1,1,0,0,0,346.1/late,434.1/late);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(89).to({_off:false},0).to({alpha:0.191},20).to({alpha:0.801},15,cjs.Ease.get(1)).to({alpha:1},12).to({_off:true},17).wait(13));

	// 丸い光
	this.instance_5 = new lib.maruihikari();
	this.instance_5.setTransform(334/late,313.7/late,0.032,0.032,0,0,0,248.1/late,248.1/late);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(41).to({_off:false},0).to({regX:248/late,regY:248/late,scaleX:1,scaleY:1},11,cjs.Ease.get(1)).to({_off:true},91).wait(23));

	//光
	this.instance_6 = new lib.hikarinaka();
	this.instance_6.setTransform(329.6/late,305.9/late,1,1,113.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(111).to({_off:false},0).to({_off:true},32).wait(23));

	// 光
	this.instance_7 = new lib.hikarinaka();
	this.instance_7.setTransform(326.3/late,305.9/late,1,1,83.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(109).to({_off:false},0).to({_off:true},34).wait(23));

	// 光
	this.instance_8 = new lib.hikarinaka();
	this.instance_8.setTransform(325.1/late,305.9/late,1,1,45);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(89).to({_off:false},0).to({_off:true},54).wait(23));

	// 光
	this.instance_9 = new lib.hikarinaka();
	this.instance_9.setTransform(328.6/late,305.9/late);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(45).to({_off:false},0).to({_off:true},98).wait(23));

	// 黒い板
	this.instance_10 = new lib.kuroita();
	this.instance_10.setTransform(326.1/late,414.1/late,1,1,0,0,0,346.1/late,434.1/late);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(7).to({_off:false},0).to({alpha:0.5},9,cjs.Ease.get(1)).to({_off:true},127).wait(23));

	// 扉
	this.instance_11 = new lib.tobira();
	this.instance_11.setTransform(480/late,423.6/late,1,1,0,0,180,0,270/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(20).to({scaleX:1},24,cjs.Ease.get(-0.99)).to({scaleX:0.67},88).to({_off:true},4).wait(30));

	// 扉
	this.instance_12 = new lib.tobira();
	this.instance_12.setTransform(179.1/late,423.6/late,1,1,0,0,0,0,270/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(20).to({scaleX:1},24,cjs.Ease.get(-0.99)).to({scaleX:0.64},88).to({_off:true},4).wait(30));

	// BG
	this.instance_13 = new lib.BG("synched",0);
	this.instance_13.setTransform(325.5,417,1,1,0,0,0,325.5,417);

	this.instance_14 = new lib.hoshizora2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).to({state:[]},136).to({state:[{t:this.instance_14}]},14).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,651,834);


// symbols:
// (lib.Group_0 = function() {
// 	this.initialize(img.Group_0);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,126,126);


(lib.bg01 = function() {
	this.initialize(img.bg01);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,417);


(lib.card1 = function() {
	this.initialize(img.card1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,585/late,894/late);


(lib.cardback = function() {
	this.initialize(img.cardback);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,703/late,1000/late);


// (lib.cardback1 = function() {
// 	this.initialize(img.cardback1);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,703/late,1000/late);


// (lib.cardrare = function() {
// 	this.initialize(img.cardrare);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,585,894);


(lib.DOOA1 = function() {
	this.initialize(img.DOOA1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151/late,540/late);


// (lib.hikari = function() {
// 	this.initialize(img.hikari);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,90,526);


(lib.hikari1 = function() {
	this.initialize(img.hikari1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297/late,950/late);


(lib.hikari2 = function() {
	this.initialize(img.hikari2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297/late,950/late);


// (lib.hikari3 = function() {
// 	this.initialize(img.hikari3);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,90,526);


// (lib.hikaritourou = function() {
// 	this.initialize(img.hikaritourou);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,79,94);


// (lib.hoshizora = function() {
// 	this.initialize(img.hoshizora);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,651,834);


(lib.hoshizora2 = function() {
	this.initialize(img.hoshizora2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640/late,834/late);


// (lib._img = function() {
// 	this.initialize(img._img);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,640,658);


// (lib.kirakira04 = function() {
// 	this.initialize(img.kirakira04);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,534,531);


// (lib.kirakira = function() {
// 	this.initialize(img.kirakira);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,170,171);


// (lib.nagare = function() {
// 	this.initialize(img.nagare);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,511,433);


// (lib.seiza = function() {
// 	this.initialize(img.seiza);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,640,640);


// (lib.鑑定書 = function() {
// 	this.initialize(img.鑑定書);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,585,894);


// (lib.鑑定書_1 = function() {
// 	this.initialize(img.鑑定書_1);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,1000,1000);


// (lib.鑑定書04 = function() {
// 	this.initialize(img.鑑定書04);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,1000,1000);


// (lib.扉03 = function() {
// 	this.initialize(img.扉03);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,651,834);


// (lib.扉03a = function() {
// 	this.initialize(img.扉03a);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,651,834);


// (lib.扉03b = function() {
// 	this.initialize(img.扉03b);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,150,540);


(lib.オーロラ２ = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginLinearGradientFill(["rgba(174,156,255,0.302)","rgba(159,236,255,0)"],[0,0.749],0,420.8,0,-420.7).beginStroke().moveTo(332.8,-427.2).lineTo(332.8,427.2).lineTo(-332.8,427.2).lineTo(-332.8,-427.2).closePath();
	this.shape.setTransform(332.8,427.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,665.6/late,854.4/late);


(lib.tobira = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.DOOA1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,151/late,540/late);


(lib.siroiita = function() {
	this.initialize();

	// レイヤー 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(346.1,-434.1).lineTo(346.1,434.1).lineTo(-346.1,434.1).lineTo(-346.1,-434.1).closePath();
	this.shape_1.setTransform(346.1/late,434.1/late);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,692.2/late,868.3/late);


(lib.sirohikari = function() {
	this.initialize();

	// レイヤー 2
	this.instance_1 = new lib.hikari2();
	this.instance_1.setTransform(76/late,0,0.488,1);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(76/late,0,145/late,950/late);


(lib.maruihikari = function() {
	this.initialize();

	// レイヤー 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#FFFFFF","rgba(255,255,255,0)"],[0.157,1],0,0,0,0,0,250.9).beginStroke().moveTo(248,0).curveTo(248,102.8,175.4,175.4).curveTo(102.8,248,0,248).curveTo(-102.8,248,-175.4,175.4).curveTo(-248,102.8,-248,0).curveTo(-248,-102.8,-175.4,-175.4).curveTo(-102.8,-248,0,-248).curveTo(102.8,-248,175.4,-175.4).curveTo(248,-102.8,248,0).closePath();
	this.shape_2.setTransform(248/late,248/late);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,496/late,496/late);


(lib.kuroita = function() {
	this.initialize();

	// レイヤー 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(346.1,-434.1).lineTo(346.1,434.1).lineTo(-346.1,434.1).lineTo(-346.1,-434.1).closePath();
	this.shape_3.setTransform(346.1/late,434.1/late);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,692.2/late,868.3/late);


(lib.kiirohikari = function() {
	this.initialize();

	// レイヤー 3
	this.instance_2 = new lib.hikari1();
	this.instance_2.setTransform(70/late,0,0.529,1);

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(70/late,0,157/late,950/late);


(lib.cardback_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance_3 = new lib.cardback();
	this.instance_3.setTransform(-5/late,0);

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5/late,0,703/late,1000/late);


(lib.BG = function() {
	this.initialize();

	// レイヤー 2
	this.instance_4 = new lib.bg01();

	this.addChild(this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,320,417);


(lib.オーロラ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 1
	this.instance_5 = new lib.オーロラ２();
	this.instance_5.setTransform(332.8/late,854.4/late,1,1,0,0,0,332.8/late,854.4/late);
	this.instance_5.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:0.55,alpha:1},59,cjs.Ease.get(1)).to({regY:854.5,scaleY:0.99,y:854.5,alpha:0.25},59,cjs.Ease.get(-0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,665.6/late,854.4/late);


(lib.hikari_1 = function(mode,startPosition) {
	this.initialize(mode,startPosition,{re:29},true);

	// レイヤー 2
	this.instance_6 = new lib.sirohikari();
	this.instance_6.setTransform(-58/late,-154.4/late,1,1,0,0,0,45/late,263/late);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({_off:false},0).to({alpha:1},30,cjs.Ease.get(1)).to({alpha:0},30).wait(1));

	// レイヤー 1
	this.instance_7 = new lib.kiirohikari();
	this.instance_7.setTransform(-58/late,-154.4/late,1,1,0,0,0,45/late,263/late);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},29,cjs.Ease.get(1)).to({alpha:0},30,cjs.Ease.get(-0.99)).to({alpha:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33/late,-417.5/late,157/late,950/late);


(lib.card2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 1
	this.instance_8 = new lib.card1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).wait(120));

	// レイヤー 2
	this.instance_9 = new lib.cardback_1();
	this.instance_9.setTransform(294.5/late,450/late,1,1,0,0,0,351.5/late,500/late);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},60).to({alpha:0},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62/late,-49.9/late,703/late,1000/late);


(lib.card = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{re:14},true);

	// レイヤー 1
	this.instance_10 = new lib.card2();
	this.instance_10.setTransform(292.5/late,447/late,1,1,0,0,0,292.5/late,447/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(14).to({y:426.8/late},45).to({y:446.6/late},44).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62/late,-49.9/late,703/late,1000/late);


(lib.hikarinaka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// hikari
	this.instance_11 = new lib.hikari_1();
	this.instance_11.setTransform(0,0,1,0.232,-90,0,0,45/late,526/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleY:1},29,cjs.Ease.get(1)).wait(50));

	//hikari
	this.instance_12 = new lib.hikari_1();
	this.instance_12.setTransform(0,0,1,0.239,180,0,0,45/late,526/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleY:1},29,cjs.Ease.get(1)).wait(50));

	// hikari
	this.instance_13 = new lib.hikari_1();
	this.instance_13.setTransform(0,0,1,0.243,90,0,0,45/late,526/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({scaleY:1},29,cjs.Ease.get(1)).wait(50));

	// hikari
	this.instance_14 = new lib.hikari_1();
	this.instance_14.setTransform(0,0,1,0.255,0,0,0,45/late,526/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({scaleY:1},29,cjs.Ease.get(1)).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-218.6/late,-240/late,448/late,466/late);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;