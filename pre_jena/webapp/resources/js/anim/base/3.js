(function (lib, img, cjs) {
var p; // shortcut to reference prototypes

// stage content:
(lib.fortune_gold = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// キラキラ
	this.instance = new lib.kirakirahikaru();
	this.instance.setTransform(570.3/late,1010.1/late,0.421,0.421,0,0,0,37.2/late,52.9/late);

	this.instance_1 = new lib.kirakirahikaru();
	this.instance_1.setTransform(37/late,994/late,0.946,0.946,0,0,0,37/late,53/late);

	this.instance_2 = new lib.kirakirahikaru();
	this.instance_2.setTransform(292.9/late,935.5/late,0.711,0.711,0,0,0,37.2/late,53/late);

	this.instance_3 = new lib.kirakirahikaru();
	this.instance_3.setTransform(598.3/late,888/late,0.57,0.57,0,0,0,37.3/late,52.9/late);

	this.instance_4 = new lib.kirakirahikaru();
	this.instance_4.setTransform(560.7/late,959.2/late,1,1,0,0,0,120.5/late,119.9/late);

	this.instance_5 = new lib.kirakirahikaru();
	this.instance_5.setTransform(230.4/late,882.4/late,0.395,0.395,0,0,0,37.3/late,52.7/late);

	this.instance_6 = new lib.kirakirahikaru();
	this.instance_6.setTransform(423.4/late,973.6/late,1,1,0,0,0,37.1/late,53/late);

	this.instance_7 = new lib.kirakirahikaru();
	this.instance_7.setTransform(80.6/late,860.3/late,0.711,0.711,0,0,0,37.1/late,52.9/late);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},135).wait(50));

	// キラキラ
	this.instance_8 = new lib.kirakirahikaru();
	this.instance_8.setTransform(108.9/late,1080/late,0.711,0.711,0,0,0,37.2/late,53/late);

	this.instance_9 = new lib.kirakirahikaru();
	this.instance_9.setTransform(614.1/late,1141.2/late,1,1,0,0,0,120.5/late,119.9/late);

	this.instance_10 = new lib.kirakirahikaru();
	this.instance_10.setTransform(141.2/late,897.9/late,0.436,0.436,0,0,0,37.2/late,52.9/late);

	this.instance_11 = new lib.kirakirahikaru();
	this.instance_11.setTransform(640.4/late,946.3/late,1,1,90,0,0,37.1/late,53/late);

	this.instance_12 = new lib.kirakirahikaru();
	this.instance_12.setTransform(11.2/late,918.4/late,0.57,0.57,0,0,0,37.3/late,52.9/late);

	this.instance_13 = new lib.kirakirahikaru();
	this.instance_13.setTransform(538.2/late,860.3/late,0.451,0.451,0,0,0,37.2/late,53.1/late);

	this.instance_14 = new lib.kirakirahikaru();
	this.instance_14.setTransform(305.3/late,1104.1/late,1,1,0,0,0,120.5/late,119.9/late);

	this.instance_15 = new lib.kirakirahikaru();
	this.instance_15.setTransform(345.8/late,860.3/late,0.711,0.711,0,0,0,37.2/late,53/late);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]},184).wait(1));

	//レイヤー 11
	this.instance_16 = new lib.オーロラ();
	this.instance_16.setTransform(323.2/late,844.8/late,1,0.015,0,0,0,332.8/late,854.2/late);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(159).to({_off:false},0).to({regY:854.4/late,scaleY:0.6},3).wait(23));

	// 鑑定書
	this.instance_17 = new lib.card();
	this.instance_17.setTransform(320/late,417/late,0.699,0.699,0,0,0,292.5/late,447/late);
	this.instance_17.alpha = 0.488;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(153).to({_off:false},0).to({scaleX:0.74,scaleY:0.74},2).to({regX:292.4/late,regY:446.9/late,scaleX:0.6,scaleY:0.6},2).to({_off:true},1).wait(27));

	// 鑑定書
	this.instance_18 = new lib.card();
	this.instance_18.setTransform(320/late,477/late,0.563,0.563,0,0,0,292.5/late,447/late);
	this.instance_18.alpha = 0.301;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(136).to({_off:false},0).to({y:407/late,alpha:1},14,cjs.Ease.get(1)).to({y:417/late},4).wait(31));

	// 白い板
	this.instance_19 = new lib.siroiita();
	this.instance_19.setTransform(326.1/late,414.1/late,1,1,0,0,0,346.1/late,434.1/late);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(153).to({_off:false},0).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(25));

	// 白い板
	this.instance_20 = new lib.siroiita();
	this.instance_20.setTransform(326.1/late,414.1/late,1,1,0,0,0,346.1/late,434.1/late);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(89).to({_off:false},0).to({alpha:0.191},20).to({alpha:0.801},15,cjs.Ease.get(1)).to({alpha:1},12).to({_off:true},17).wait(32));

	// 丸い光
	this.instance_21 = new lib.maruihikari();
	this.instance_21.setTransform(334/late,313.7/late,0.032,0.032,0,0,0,248.1/late,248.1/late);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(41).to({_off:false},0).to({regX:248/late,regY:248/late,scaleX:1,scaleY:1},11,cjs.Ease.get(1)).to({_off:true},91).wait(41));

	// 光
	this.instance_22 = new lib.hikarinaka();
	this.instance_22.setTransform(329.6/late,305.9/late,1,1,113.2/late);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(111).to({_off:false},0).to({_off:true},32).wait(41));

	// 光
	this.instance_23 = new lib.hikarinaka();
	this.instance_23.setTransform(326.3/late,305.9/late,1,1,83.2/late);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(109).to({_off:false},0).to({_off:true},34).wait(41));

	// 光
	this.instance_24 = new lib.hikarinaka();
	this.instance_24.setTransform(325.1/late,305.9/late,1,1,45/late);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(89).to({_off:false},0).to({_off:true},54).wait(41));

	// 光
	this.instance_25 = new lib.hikarinaka();
	this.instance_25.setTransform(328.6/late,305.9/late);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(45).to({_off:false},0).to({_off:true},98).wait(41));

	// レイヤー 13
	this.instance_26 = new lib.akari();
	this.instance_26.setTransform(326.1/late,414.1/late,1,1,0,0,0,346.1/late,434.1/late);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(19).to({_off:false},0).to({alpha:0.648},19,cjs.Ease.get(1)).to({_off:true},105).wait(41));

	// 燭台
	this.instance_27 = new lib.tourou();
	this.instance_27.setTransform(541.8/late,565.2/late,0.906,0.905,0,0,0,39.5/late,47/late);

	this.instance_28 = new lib.tourou();
	this.instance_28.setTransform(114.7/late,566.2/late,0.906,0.905,0,0,0,39.5/late,47/late);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_28},{t:this.instance_27}]},19).to({state:[]},124).to({state:[]},1).wait(41));

	// 燭台
	this.instance_29 = new lib.tourou();
	this.instance_29.setTransform(554.9/late,620.4/late,0.931,0.93,0,0,0,39.5/late,47/late);

	this.instance_30 = new lib.tourou();
	this.instance_30.setTransform(101.8/late,620.4/late,0.931,0.93,0,0,0,39.5/late,47/late);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_30},{t:this.instance_29}]},19).to({state:[]},124).to({state:[]},1).wait(41));

	// 燭台
	this.instance_31 = new lib.tourou();
	this.instance_31.setTransform(572.9/late,696.5/late,0.957,0.957,0,0,0,39.5/late,47/late);

	this.instance_32 = new lib.tourou();
	this.instance_32.setTransform(86.8/late,696.5/late,0.957,0.957,0,0,0,39.5/late,47/late);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_32},{t:this.instance_31}]},19).to({state:[]},124).to({state:[]},1).wait(41));

	// 燭台
	this.instance_33 = new lib.tourou();
	this.instance_33.setTransform(591.6/late,781.6/late,1,1,0,0,0,39.5/late,47/late);

	this.instance_34 = new lib.tourou();
	this.instance_34.setTransform(67.5/late,781.6/late,1,1,0,0,0,39.5/late,47/late);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_34},{t:this.instance_33}]},19).to({state:[]},124).to({state:[]},1).wait(41));

	// 黒い板
	this.instance_35 = new lib.kuroita();
	this.instance_35.setTransform(326.1/late,414.1/late,1,1,0,0,0,346.1/late,434.1/late);
	this.instance_35.alpha = 0;
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(7).to({_off:false},0).to({alpha:0.5},9,cjs.Ease.get(1)).to({_off:true},127).wait(41));

	// 扉
	this.instance_36 = new lib.tobira();
	this.instance_36.setTransform(480/late,423.6/late,1,1,0,0,180,0,270/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(20).to({scaleX:1},24,cjs.Ease.get(-0.99)).to({scaleX:0.67},88).to({_off:true},4).wait(19));

	// 扉
	this.instance_37 = new lib.tobira();
	this.instance_37.setTransform(179.1/late,423.6/late,1,1,0,0,0,0,270/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(20).to({scaleX:1},24,cjs.Ease.get(-0.99)).to({scaleX:0.64},88).to({_off:true},4).wait(19));

	// BG
	this.instance_38 = new lib.BG("synched",0);
	this.instance_38.setTransform(325.5/late,417/late,1,1,0,0,0,325.5/late,417/late);

	this.instance_39 = new lib.hoshizora2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_38}]}).to({state:[]},136).to({state:[{t:this.instance_39}]},14).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(179.1/late,153.6/late,300.9/late,540/late);


// // symbols:
// (lib.Group_0 = function() {
// 	this.initialize(img.Group_0);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,126,126);


(lib.card2 = function() {
	this.initialize(img.card2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,585/late,894/late);


// (lib.cardback = function() {
// 	this.initialize(img.cardback);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,703,1000);


// (lib.cardback1 = function() {
// 	this.initialize(img.cardback1);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,703,1000);


(lib.cardback3 = function() {
	this.initialize(img.cardback3);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,703/late,1000/late);


// (lib.cardrare = function() {
// 	this.initialize(img.cardrare);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,585,894);


(lib.DOOA2 = function() {
	this.initialize(img.DOOA2);
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


(lib.hikaritourou = function() {
	this.initialize(img.hikaritourou);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79/late,94/late);


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


(lib.kirakira04 = function() {
	this.initialize(img.kirakira04);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,534/late,531/late);


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


(lib.扉03a = function() {
	this.initialize(img.扉03a);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,651/late,834/late);


// (lib.扉03b = function() {
// 	this.initialize(img.扉03b);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,150,540);


(lib.オーロラ２ = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginLinearGradientFill(["rgba(174,156,255,0.302)","rgba(159,236,255,0)"],[0,0.749],0,420.8,0,-420.7).beginStroke().moveTo(332.8/late,-427.2/late).lineTo(332.8/late,427.2/late).lineTo(-332.8/late,427.2/late).lineTo(-332.8/late,-427.2/late).closePath();
	this.shape.setTransform(332.8/late,427.2/late);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,665.6/late,854.4/late);


(lib.tourou2 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.hikaritourou();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,79/late,94/late);


(lib.tobira = function() {
	this.initialize();

	// レイヤー 1
	this.instance_1 = new lib.DOOA2();

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,151/late,540/late);


(lib.siroiita = function() {
	this.initialize();

	// レイヤー 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(346.1/late,-434.1/late).lineTo(346.1/late,434.1/late).lineTo(-346.1/late,434.1/late).lineTo(-346.1/late,-434.1/late).closePath();
	this.shape_1.setTransform(346.1/late,434.1/late);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,692.2/late,868.3/late);


(lib.sirohikari = function() {
	this.initialize();

	// レイヤー 2
	this.instance_2 = new lib.hikari2();

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,297/late,950/late);


(lib.maruihikari = function() {
	this.initialize();

	// レイヤー 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#FFFFFF","rgba(255,255,255,0)"],[0.157,1],0,0,0,0,0,250.9/late).beginStroke().moveTo(248/late,0).curveTo(248,102.8,175.4,175.4).curveTo(102.8,248,0,248).curveTo(-102.8,248,-175.4,175.4).curveTo(-248,102.8,-248,0).curveTo(-248,-102.8,-175.4,-175.4).curveTo(-102.8,-248,0,-248).curveTo(102.8,-248,175.4,-175.4).curveTo(248,-102.8,248,0).closePath();
	this.shape_2.setTransform(248/late,248/late);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,496/late,496/late);


(lib.kuroita = function() {
	this.initialize();

	// レイヤー 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(346.1/late,-434.1/late).lineTo(346.1/late,434.1/late).lineTo(-346.1/late,434.1/late).lineTo(-346.1/late,-434.1/late).closePath();
	this.shape_3.setTransform(346.1/late,434.1/late);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,692.2,868.3);


(lib.kirakirahikaru3 = function() {
	this.initialize();

	// レイヤー 1
	this.instance_3 = new lib.kirakira04();
	this.instance_3.setTransform(0,0,0.139/late,0.139/late);

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74.4/late,74/late);


(lib.kiirohikari = function() {
	this.initialize();

	// レイヤー 3
	this.instance_4 = new lib.hikari1();

	this.addChild(this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,297/late,950/late);


(lib.cardback_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance_5 = new lib.cardback3();
	this.instance_5.setTransform(-3.9/late,0);

	this.addChild(this.instance_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.9/late,0,703/late,1000/late);

(lib.BG = function() {
	this.initialize();

	// レイヤー 1
	this.instance_6 = new lib.扉03a();

	this.addChild(this.instance_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,651/late,834/late);


(lib.akari = function() {
	this.initialize();

	// レイヤー 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginLinearGradientFill(["rgba(255,191,191,0.302)","rgba(255,203,203,0)"],[0,1],0,400.1,0,-399.9).beginStroke().moveTo(346.1,-434.1).lineTo(346.1,434.1).lineTo(-346.1,434.1).lineTo(-346.1,-434.1).closePath();
	this.shape_4.setTransform(346.1/late,434.1/late);

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,692.2/late,868.3/late);


(lib.オーロラ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 1
	this.instance_6 = new lib.オーロラ２();
	this.instance_6.setTransform(332.8/late,854.4/late,1,1,0,0,0,332.8/late,854.4/late);
	this.instance_6.alpha = 0.25;

	//this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleY:0.55,alpha:1},59,cjs.Ease.get(1)).to({regY:854.5/late,scaleY:0.99,y:854.5/late,alpha:0.25},59,cjs.Ease.get(-0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,665.6/late,854.4/late);


(lib.tourou = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 1
	this.instance_7 = new lib.tourou2();
	this.instance_7.setTransform(39.6/late,47/late,0.489,0.489,0,0,0,39.6/late,47/late);
	this.instance_7.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:39.5/late,scaleX:0.55,scaleY:0.55,x:39.5/late,alpha:0.379},5,cjs.Ease.get(-0.99)).to({scaleX:1.07,scaleY:1.07,alpha:1},2).to({scaleX:1,scaleY:1},2).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.2/late,24/late,38.7/late,46/late);


(lib.kirakirahikaru2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 1
	this.instance_8 = new lib.kirakirahikaru3();
	this.instance_8.setTransform(66.2/late,65.8/late,1,1,0,0,0,66.2/late,65.8/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({alpha:0.699},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0.699},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.4/late,74/late);


(lib.kirakirahikaru = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 1
	this.instance_9 = new lib.kirakirahikaru2();
	this.instance_9.setTransform(120.5/late,135.9/late,1,1,0,0,0,120.5/late,119.9/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(39).to({y:119.9/late},0).to({y:66},4).to({y:-782.4/late},121).to({y:-891.1/late,alpha:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,16/late,74.4/late,74/late);


(lib.hikari_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{re:29},true);

	// レイヤー 2
	this.instance_10 = new lib.sirohikari();
	this.instance_10.setTransform(-58/late,-154.4/late,1,1,0,0,0,45/late,263/late);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(29).to({_off:false},0).to({alpha:1},30,cjs.Ease.get(1)).to({alpha:0},30).wait(1));

	// レイヤー 1
	this.instance_11 = new lib.kiirohikari();
	this.instance_11.setTransform(-58/late,-154.4/late,1,1,0,0,0,45/late,263/late);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({alpha:1},29,cjs.Ease.get(1)).to({alpha:0},30,cjs.Ease.get(-0.99)).to({alpha:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103/late,-417.5/late,297/late,950/late);


(lib.card2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 1
	this.instance_12 = new lib.card2();
	this.instance_12.setTransform(1.3/late,1.2/late);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).wait(120));

	// レイヤー 2
	this.instance_13 = new lib.cardback_1();
	this.instance_13.setTransform(294.5/late,450/late,1,1,0,0,0,351.5/late,500/late);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},60).to({alpha:0},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.9/late,-49.9/late,703/late,1000/late);


(lib.card = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{re:14},true);

	// レイヤー 1
	this.instance_14 = new lib.card2_1();
	this.instance_14.setTransform(292.5/late,447/late,1,1,0,0,0,292.5/late,447/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(14).to({y:426.8/late},45).to({y:446.6/late},44).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.9/late,-49.9/late,703/late,1000/late);


(lib.hikarinaka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// hikari
	this.instance_15 = new lib.hikari_1();
	this.instance_15.setTransform(0,0,1,0.232,-89.9,0,0,45/late,526/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({scaleY:1},29,cjs.Ease.get(1)).wait(72));

	// hikari
	this.instance_16 = new lib.hikari_1();
	this.instance_16.setTransform(0,0,1,0.239,180,0,0,45/late,526/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({scaleY:1},29,cjs.Ease.get(1)).wait(72));

	// hikari
	this.instance_17 = new lib.hikari_1();
	this.instance_17.setTransform(0,0,1,0.243,90,0,0,45/late,526/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({scaleY:1},29,cjs.Ease.get(1)).wait(72));

	// hikari
	this.instance_18 = new lib.hikari_1();
	this.instance_18.setTransform(0,0,1,0.255,0,0,0,45/late,526/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({scaleY:1},29,cjs.Ease.get(1)).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-218.6/late,-240.1/late,448.1/late,466.1/late);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;