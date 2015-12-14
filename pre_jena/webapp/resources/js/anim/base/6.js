(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.fortune_gold_gorgeous = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// キラキラ
	this.instance = new lib.kirakirahikaru();
	this.instance.setTransform(570/late,1010/late,0.421,0.421,0,0,0,38/late,52/late);

	this.instance_1 = new lib.kirakirahikaru();
	this.instance_1.setTransform(36/late,994/late,0.946,0.946,0,0,0,38/late,52/late);

	this.instance_2 = new lib.kirakirahikaru();
	this.instance_2.setTransform(292/late,936/late,0.711,0.711,0,0,0,38/late,52/late);

	this.instance_3 = new lib.kirakirahikaru();
	this.instance_3.setTransform(598/late,888/late,0.57,0.57,0,0,0,38/late,52/late);

	this.instance_4 = new lib.kirakirahikaru();
	this.instance_4.setTransform(560/late,960/late,1,1,0,0,0,120/late,120/late);

	this.instance_5 = new lib.kirakirahikaru();
	this.instance_5.setTransform(230/late,882/late,0.395,0.395,0,0,0,38/late,52/late);

	this.instance_6 = new lib.kirakirahikaru();
	this.instance_6.setTransform(424/late,974/late,1,1,0,0,0,38/late,52/late);

	this.instance_7 = new lib.kirakirahikaru();
	this.instance_7.setTransform(80/late,860/late,0.711,0.711,0,0,0,38/late,52/late);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},135).wait(50));

	// キラキラ
	this.instance_8 = new lib.kirakirahikaru();
	this.instance_8.setTransform(108/late,1080/late,0.711,0.711,0,0,0,38/late,52/late);

	this.instance_9 = new lib.kirakirahikaru();
	this.instance_9.setTransform(614/late,1142/late,1,1,0,0,0,120/late,120/late);

	this.instance_10 = new lib.kirakirahikaru();
	this.instance_10.setTransform(142/late,898/late,0.436,0.436,0,0,0,38/late,52/late);

	this.instance_11 = new lib.kirakirahikaru();
	this.instance_11.setTransform(640/late,946/late,1,1,90,0,0,38/late,52/late);

	this.instance_12 = new lib.kirakirahikaru();
	this.instance_12.setTransform(12/late,918/late,0.57,0.57,0,0,0,38/late,52/late);

	this.instance_13 = new lib.kirakirahikaru();
	this.instance_13.setTransform(538/late,860/late,0.451,0.451,0,0,0,38/late,54/late);

	this.instance_14 = new lib.kirakirahikaru();
	this.instance_14.setTransform(306/late,1104/late,1,1,0,0,0,120/late,120/late);

	this.instance_15 = new lib.kirakirahikaru();
	this.instance_15.setTransform(346/late,860/late,0.711,0.711,0,0,0,38/late,54/late);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]},184).wait(1));

	// レイヤー 11
	this.instance_16 = new lib.オーロラ();
	this.instance_16.setTransform(324/late,844/late,1,0.015,0,0,0,332/late,854/late);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(159).to({_off:false},0).to({regY:854/late,scaleY:0.6},3).wait(23));

	// 鑑定書
	this.instance_17 = new lib.card();
	this.instance_17.setTransform(320/late,416/late,0.699,0.699,0,0,0,292/late,446/late);
	this.instance_17.alpha = 0.488;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(153).to({_off:false},0).to({scaleX:0.74,scaleY:0.74},2).to({regX:292/late,regY:446/late,scaleX:0.6,scaleY:0.6},2).to({_off:true},1).wait(27));

	// 鑑定書
	this.instance_18 = new lib.card();
	this.instance_18.setTransform(320/late,476/late,0.563,0.563,0,0,0,292/late,446/late);
	this.instance_18.alpha = 0.301;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(136).to({_off:false},0).to({y:406/late,alpha:1},14,cjs.Ease.get(1)).to({y:416/late},4).wait(31));

	// 白い板
	this.instance_19 = new lib.siroiita();
	this.instance_19.setTransform(326/late,414/late,1,1,0,0,0,346/late,434/late);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(153).to({_off:false},0).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(25));

	// 白い板
	this.instance_20 = new lib.siroiita();
	this.instance_20.setTransform(326/late,414/late,1,1,0,0,0,346/late,434/late);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(89).to({_off:false},0).to({alpha:0.191},20).to({alpha:0.801},15,cjs.Ease.get(1)).to({alpha:1},12).to({_off:true},17).wait(32));

	// 丸い光
	this.instance_21 = new lib.maruihikari();
	this.instance_21.setTransform(334/late,314/late,0.032,0.032,0,0,0,248/late,248/late);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(41).to({_off:false},0).to({regX:248/late,regY:248/late,scaleX:1,scaleY:1},11,cjs.Ease.get(1)).to({_off:true},91).wait(41));

	// 光
	this.instance_22 = new lib.hikarinaka();
	this.instance_22.setTransform(330/late,306/late,1,1,114);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(111).to({_off:false},0).to({_off:true},32).wait(41));

	// 光
	this.instance_23 = new lib.hikarinaka();
	this.instance_23.setTransform(326/late,306/late,1,1,84);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(109).to({_off:false},0).to({_off:true},34).wait(41));

	// 光
	this.instance_24 = new lib.hikarinaka();
	this.instance_24.setTransform(326/late,306/late,1,1,46);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(89).to({_off:false},0).to({_off:true},54).wait(41));

	// 光
	this.instance_25 = new lib.hikarinaka();
	this.instance_25.setTransform(328/late,306/late);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(45).to({_off:false},0).to({_off:true},98).wait(41));

	// レイヤー 13
	this.instance_26 = new lib.akari();
	this.instance_26.setTransform(326/late,414/late,1,1,0,0,0,346/late,434/late);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(19).to({_off:false},0).to({alpha:0.648},19,cjs.Ease.get(1)).to({_off:true},105).wait(41));

	// 燭台
	this.instance_27 = new lib.kirakirahikaru2copy();
	this.instance_27.setTransform(548/late,586/late,0.633,0.633,0,0,180,38/late,88/late);

	this.instance_28 = new lib.kirakirahikaru2copy();
	this.instance_28.setTransform(114/late,586/late,0.633,0.633,0,0,0,38/late,88/late);

	this.instance_29 = new lib.tourou();
	this.instance_29.setTransform(542/late,564/late,0.906,0.905,0,0,0,40/late,46/late);

	this.instance_30 = new lib.tourou();
	this.instance_30.setTransform(114/late,566/late,0.906,0.905,0,0,0,40/late,46/late);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27}]},25).to({state:[]},118).to({state:[]},1).wait(41));

	// 燭台
	this.instance_31 = new lib.kirakirahikaru2copy();
	this.instance_31.setTransform(560/late,652/late,0.804,0.804,0,0,180,38/late,88/late);

	this.instance_32 = new lib.kirakirahikaru2copy();
	this.instance_32.setTransform(102/late,652/late,0.804,0.804,0,0,0,38/late,88/late);

	this.instance_33 = new lib.tourou();
	this.instance_33.setTransform(554/late,620/late,0.931,0.93,0,0,0,40/late,46/late);

	this.instance_34 = new lib.tourou();
	this.instance_34.setTransform(102/late,620/late,0.931,0.93,0,0,0,40/late,46/late);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31}]},22).to({state:[]},121).to({state:[]},1).wait(41));

	// 燭台
	this.instance_35 = new lib.kirakirahikaru2copy();
	this.instance_35.setTransform(578/late,732/late,0.931,0.931,0,0,180,38/late,88/late);

	this.instance_36 = new lib.kirakirahikaru2copy();
	this.instance_36.setTransform(86/late,732/late,0.931,0.931,0,0,0,38/late,88/late);

	this.instance_37 = new lib.tourou();
	this.instance_37.setTransform(572/late,696/late,0.957,0.957,0,0,0,40/late,46/late);

	this.instance_38 = new lib.tourou();
	this.instance_38.setTransform(86/late,696/late,0.957,0.957,0,0,0,40/late,46/late);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35}]},19).to({state:[]},124).to({state:[]},1).wait(41));

	// 燭台
	this.instance_39 = new lib.kirakirahikaru2copy();
	this.instance_39.setTransform(512/late,856/late,1,1,0,0,180,120/late,120/late);

	this.instance_40 = new lib.kirakirahikaru2copy();
	this.instance_40.setTransform(152/late,856/late,1,1,0,0,0,120/late,120/late);

	this.instance_41 = new lib.tourou();
	this.instance_41.setTransform(592/late,782/late,1,1,0,0,0,40/late,48/late);

	this.instance_42 = new lib.tourou();
	this.instance_42.setTransform(68/late,782/late,1,1,0,0,0,40/late,46/late);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39}]},16).to({state:[]},127).to({state:[]},1).wait(41));

	// 黒い板
	this.instance_43 = new lib.kuroita();
	this.instance_43.setTransform(326/late,414/late,1,1,0,0,0,346/late,434/late);
	this.instance_43.alpha = 0;
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(7).to({_off:false},0).to({alpha:0.5},9,cjs.Ease.get(1)).to({_off:true},127).wait(41));

	// 扉
	this.instance_44 = new lib.tobira();
	this.instance_44.setTransform(480/late,424/late,1,1,0,0,180,0,270/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(20).to({scaleX:1},24,cjs.Ease.get(-0.99)).to({scaleX:0.67},88).to({_off:true},4).wait(19));

	// 扉
	this.instance_45 = new lib.tobira();
	this.instance_45.setTransform(180/late,424/late,1,1,0,0,0,0,270/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(20).to({scaleX:1},24,cjs.Ease.get(-0.99)).to({scaleX:0.64},88).to({_off:true},4).wait(19));

	// BG
	this.instance_46 = new lib.BG("synched",0);
	this.instance_46.setTransform(326/late,416/late,1,1,0,0,0,326/late,416/late);

	this.instance_47 = new lib.hoshizora2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_46}]}).to({state:[]},136).to({state:[{t:this.instance_47}]},14).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,651/late,834/late);


// symbols:
// (lib.Group_0 = function() {
// 	this.initialize(img.Group_0);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,126,126);


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
p.nominalBounds = new cjs.Rectangle(0,0,702/late,1000/late);


(lib.cardrare = function() {
	this.initialize(img.cardrare);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,584/late,894/late);


// (lib.hikari = function() {
// 	this.initialize(img.hikari);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,90,526);


(lib.hikari1 = function() {
	this.initialize(img.hikari1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,296/late,950/late);


(lib.hikari2 = function() {
	this.initialize(img.hikari2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,296/late,950/late);


// (lib.hikari3 = function() {
// 	this.initialize(img.hikari3);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,90,526);


(lib.hikaritourou = function() {
	this.initialize(img.hikaritourou);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78/late,94/late);


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
p.nominalBounds = new cjs.Rectangle(0,0,534/late,530/late);


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
p.nominalBounds = new cjs.Rectangle(0,0,650/late,834/late);


(lib.扉03b = function() {
	this.initialize(img.扉03b);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150/late,540/late);


(lib.オーロラ２ = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginLinearGradientFill(["rgba(174,156,255,0.302)","rgba(159,236,255,0)"],[0,0.749],0,420/late,0,-420/late).beginStroke().moveTo(332/late,-428/late).lineTo(332/late,428/late).lineTo(-332/late,428/late).lineTo(-332/late,-428/late).closePath();
	this.shape.setTransform(332.8/late,427.2/late);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,666/late,854/late);


(lib.tourou2 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.hikaritourou();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,78/late,94/late);


(lib.tobira = function() {
	this.initialize();

	// レイヤー 1
	this.instance_1 = new lib.扉03b();

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,150/late,540/late);


(lib.siroiita = function() {
	this.initialize();

	// レイヤー 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(346/late,-434/late).lineTo(346/late,434/late).lineTo(-346/late,434/late).lineTo(-346/late,-434/late).closePath();
	this.shape_1.setTransform(346/late,434/late);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,692/late,868/late);


(lib.sirohikari = function() {
	this.initialize();

	// レイヤー 2
	this.instance_2 = new lib.hikari2();

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,296/late,950/late);


(lib.maruihikari = function() {
	this.initialize();

	// レイヤー 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#FFFFFF","rgba(255,255,255,0)"],[0.157,1],0,0,0,0,0,250/late).beginStroke().moveTo(248/late,0).curveTo(248,102.8,175.4,175.4).curveTo(102.8,248,0,248).curveTo(-102.8,248,-175.4,175.4).curveTo(-248,102.8,-248,0).curveTo(-248,-102.8,-175.4,-175.4).curveTo(-102.8,-248,0,-248).curveTo(102.8,-248,175.4,-175.4).curveTo(248,-102.8,248,0).closePath();
	this.shape_2.setTransform(248/late,248/late);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,496/late,496/late);


(lib.kuroita = function() {
	this.initialize();

	// レイヤー 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(346/late,-434/late).lineTo(346/late,434/late).lineTo(-346/late,434/late).lineTo(-346/late,-434/late).closePath();
	this.shape_3.setTransform(346/late,434/late);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,692/late,868/late);


(lib.kirakirahikaru3 = function() {
	this.initialize();

	// レイヤー 1
	this.instance_3 = new lib.kirakira04();
	this.instance_3.setTransform(0,0,0.139,0.139);

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74/late,74/late);


(lib.kiirohikari = function() {
	this.initialize();

	// レイヤー 3
	this.instance_4 = new lib.hikari1();

	this.addChild(this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,296/late,950/late);


(lib.cardback_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance_5 = new lib.cardback3();
	this.instance_5.setTransform(-4/late,0);

	this.addChild(this.instance_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4/late,0,702/late,1000/late);


(lib.BG = function() {
	this.initialize();

	// レイヤー 1
	this.instance_6 = new lib.扉03a();

	this.addChild(this.instance_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,650/late,834/late);


(lib.akari = function() {
	this.initialize();

	// レイヤー 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginLinearGradientFill(["rgba(255,191,191,0.302)","rgba(255,203,203,0)"],[0,1],0,400/late,0,-400/late).beginStroke().moveTo(346/late,-434/late).lineTo(346/late,434/late).lineTo(-346/late,434/late).lineTo(-346/late,-434/late).closePath();
	this.shape_4.setTransform(346/late,434/late);

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,692/late,868/late);


(lib.オーロラ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 1
	this.instance_7 = new lib.オーロラ２();
	this.instance_7.setTransform(332/late,854/late,1,1,0,0,0,332/late,854/late);
	this.instance_7.alpha = 0.25;

	//this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleY:0.55,alpha:1},59,cjs.Ease.get(1)).to({regY:854/late,scaleY:0.99,y:854.5,alpha:0.25},59,cjs.Ease.get(-0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,666/late,854/late);


(lib.tourou = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 1
	this.instance_8 = new lib.tourou2();
	this.instance_8.setTransform(40/late,46/late,0.489,0.489,0,0,0,40/late,46/late);
	this.instance_8.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:40/late,scaleX:0.55,scaleY:0.55,x:40/late,alpha:0.379},5,cjs.Ease.get(-0.99)).to({scaleX:1.07,scaleY:1.07,alpha:1},2).to({scaleX:1,scaleY:1},2).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20/late,24/late,38/late,46/late);


(lib.kirakirahikaru2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 2
	this.instance_9 = new lib.kirakirahikaru3();
	this.instance_9.setTransform(44/late,70/late,0.147,0.147,180,0,0,36/late,38/late);

	this.instance_10 = new lib.kirakirahikaru3();
	this.instance_10.setTransform(28/late,86/late,0.213,0.213,180,0,0,38/late,36/late);

	this.instance_11 = new lib.kirakirahikaru3();
	this.instance_11.setTransform(46/late,102/late,0.282,0.282,180,0,0,38/late,38/late);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11,p:{regX:38/late,scaleX:0.282,scaleY:0.282,x:46/late,y:102/late}},{t:this.instance_10,p:{regX:38/late,regY:37,scaleX:0.213,scaleY:0.213,x:28/late,y:86/late}},{t:this.instance_9,p:{regX:36/late,scaleX:0.147,scaleY:0.147,x:44/late,y:70/late,regY:38/late}}]}).to({state:[{t:this.instance_11,p:{regX:38/late,scaleX:0.348,scaleY:0.348,x:28/late,y:86/late}},{t:this.instance_10,p:{regX:36/late,regY:38/late,scaleX:0.241,scaleY:0.241,x:44/late,y:70/late}},{t:this.instance_9,p:{regX:36/late,scaleX:0.16,scaleY:0.16,x:38/late,y:52/late,regY:38/late}}]},2).to({state:[{t:this.instance_10,p:{regX:36/late,regY:38/late,scaleX:0.323,scaleY:0.323,x:44/late,y:70/late}},{t:this.instance_9,p:{regX:36/late,scaleX:0.255,scaleY:0.255,x:38/late,y:52/late,regY:38/late}}]},2).to({state:[{t:this.instance_9,p:{regX:36/late,scaleX:0.405,scaleY:0.405,x:38/late,y:52/late,regY:38/late}}]},2).to({state:[]},2).to({state:[]},101).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.2,64.8,36.5,46.8);


(lib.kirakirahikaru2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 1
	this.instance_12 = new lib.kirakirahikaru3();
	this.instance_12.setTransform(66/late,66/late,1,1,0,0,0,66/late,66/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(2).to({alpha:0.699},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0.699},0).wait(2));

	// レイヤー 2
	this.instance_13 = new lib.kirakirahikaru3();
	this.instance_13.setTransform(34/late,90/late,0.403,0.403,0,0,0,38/late,36/late);

	this.instance_14 = new lib.kirakirahikaru3();
	this.instance_14.setTransform(46/late,66/late,0.255,0.255,0,0,0,38/late,36/late);

	this.instance_15 = new lib.kirakirahikaru3();
	this.instance_15.setTransform(26/late,66/late,0.201,0.201,0,0,0,38/late,38/late);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14,p:{scaleX:0.255,scaleY:0.255,x:46/late,y:66/late,rotation:0}},{t:this.instance_13,p:{regX:38/late,regY:36/late,scaleX:0.403,scaleY:0.403,x:34/late,y:90/late,rotation:0}}]}).to({state:[{t:this.instance_15,p:{rotation:0,x:26/late,y:66/late}},{t:this.instance_14,p:{scaleX:0.213,scaleY:0.213,x:44/late,y:82/late,rotation:0}},{t:this.instance_13,p:{regX:36/late,regY:38/late,scaleX:0.187,scaleY:0.187,x:34/late,y:102/late,rotation:0}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.255,scaleY:0.255,x:28/late,y:96/late,rotation:180}},{t:this.instance_13,p:{regX:38/late,regY:36/late,scaleX:0.403,scaleY:0.403,x:40/late,y:72/late,rotation:180}}]},2).to({state:[{t:this.instance_15,p:{rotation:180,x:46/late,y:102/late}},{t:this.instance_14,p:{scaleX:0.213,scaleY:0.213,x:28/late,y:86/late,rotation:180}},{t:this.instance_13,p:{regX:36/late,regY:38/late,scaleX:0.187,scaleY:0.187,x:38/late,y:66/late,rotation:180}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74/late,104/late);


(lib.kirakirahikaru = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 1
	this.instance_16 = new lib.kirakirahikaru2();
	this.instance_16.setTransform(120/late,136/late,1,1,0,0,0,120/late,120/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(39).to({y:120/late},0).to({y:66/late},4).to({y:-782/late},121).to({y:-892/late,alpha:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,16/late,74/late,104/late);


(lib.hikari_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{re:29},true);

	// レイヤー 2
	this.instance_17 = new lib.sirohikari();
	this.instance_17.setTransform(-58/late,-154/late,1,1,0,0,0,44/late,262/late);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(29).to({_off:false},0).to({alpha:1},30,cjs.Ease.get(1)).to({alpha:0},30).wait(1));

	// レイヤー 1
	this.instance_18 = new lib.kiirohikari();
	this.instance_18.setTransform(-58/late,-154/late,1,1,0,0,0,44/late,262/late);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({alpha:1},29,cjs.Ease.get(1)).to({alpha:0},30,cjs.Ease.get(-0.99)).to({alpha:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102/late,-418/late,296/late,950/late);


(lib.card2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 1
	this.instance_19 = new lib.cardrare();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19}]}).wait(120));

	// レイヤー 2
	this.instance_20 = new lib.cardback_1();
	this.instance_20.setTransform(294/late,450/late,1,1,0,0,0,352/late,500/late);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({alpha:1},60).to({alpha:0},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60/late,-50/late,702/late,1000/late);


(lib.card = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{re:14},true);

	// レイヤー 1
	this.instance_21 = new lib.card2();
	this.instance_21.setTransform(292/late,446/late,1,1,0,0,0,292/late,446/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(14).to({y:426/late},45).to({y:446/late},44).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60/late,-50/late,702/late,1000/late);


(lib.hikarinaka = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// hikari
	this.instance_22 = new lib.hikari_1();
	this.instance_22.setTransform(0,0,1,0.232,-90,0,0,44/late,526/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({scaleY:1},29,cjs.Ease.get(1)).wait(31));

	// hikari
	this.instance_23 = new lib.hikari_1();
	this.instance_23.setTransform(0,0,1,0.239,180,0,0,44/late,526/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({scaleY:1},29,cjs.Ease.get(1)).wait(31));

	// hikari
	this.instance_24 = new lib.hikari_1();
	this.instance_24.setTransform(0,0,1,0.243,90,0,0,44/late,526/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({scaleY:1},29,cjs.Ease.get(1)).wait(31));

	// hikari
	this.instance_25 = new lib.hikari_1();
	this.instance_25.setTransform(0,0,1,0.255,0,0,0,44/late,526/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({scaleY:1},29,cjs.Ease.get(1)).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-218/late,-240/late,448/late,466/late);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;