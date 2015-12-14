var late = U.getDeviceLate();
jQuery(window).ready(function() {
	// Skip animation
	if (window.location.search.indexOf('skip') != -1) {
		$("#normalWrapper").css({'display': 'block'});
		$("#canvasView").cls({'stage-center': 0, 'stage-left': 0});
		return;
	}
	jQuery('body *').css('-webkit-backface-visibility', 'hidden');
	jQuery("#fullscreenWrapper").show();
	$("#fullscreenWrapper").on('click', function() {
		$("#fullscreenWrapper").css({'display': 'none'});
		$("#normalWrapper").css({'display': 'block'});
		$("#canvasView").cls({'stage-center': 0, 'stage-left': 0});
		jQuery('body *').css('-webkit-backface-visibility', '');
	});
	jQuery.getScript("/resources/js/anim/5.js", function() {
		function handleFileLoad(o) {
			if (o.type == "image") { images[o.id] = o.result; }
		}
		function handleComplete() {
			$("#loadingView").cls({'stage-center': 0, 'stage-left': 1}).inner(''); 
			$("#canvasView").cls({'stage-center': 1, 'stage-right': 0});
			var exportRoot = new lib.fortune_gold_love();
			var stage = new createjs.Stage(canvas);
			stage.addChild(exportRoot);
			stage.update();
			createjs.Ticker.setFPS(30);
			createjs.Ticker.addListener(stage);
		}

		var canvas = document.getElementById("canvas");
		images = images||{};

		if (late == 1) {
			canvas.setAttribute("width",640);
			canvas.setAttribute("height",834);
			canvas.setAttribute("class","late1");
		}
		var manifest = [
			{src:late==2?"/resources/imgs/anim/5/bg00.jpg":"/resources/imgs/anim/5/bg00_2x.jpg", id:"bg00"},
			{src:late==2?"/resources/imgs/anim/5/card2.jpg":"/resources/imgs/anim/5/card2_2x.jpg", id:"card2"},
			{src:late==2?"/resources/imgs/anim/5/cardback3.png":"/resources/imgs/anim/5/cardback3_2x.png", id:"cardback3"},
			{src:late==2?"/resources/imgs/anim/5/DOOA2.png":"/resources/imgs/anim/5/DOOA2_2x.png", id:"DOOA2"},
			{src:late==2?"/resources/imgs/anim/5/heart.png":"/resources/imgs/anim/5/heart_2x.png", id:"heart"},
			{src:late==2?"/resources/imgs/anim/5/hikari1.png":"/resources/imgs/anim/5/hikari1_2x.png", id:"hikari1"},
			{src:late==2?"/resources/imgs/anim/5/hikari2.png":"/resources/imgs/anim/5/hikari2_2x.png", id:"hikari2"},
			{src:late==2?"/resources/imgs/anim/5/hikaritourou.png":"/resources/imgs/anim/5/hikaritourou_2x.png", id:"hikaritourou"},
			{src:late==2?"/resources/imgs/anim/5/hoshizora2.jpg":"/resources/imgs/anim/5/hoshizora2_2x.jpg", id:"hoshizora2"},
			{src:late==2?"/resources/imgs/anim/5/kirakira04.png":"/resources/imgs/anim/5/kirakira04_2x.png", id:"kirakira04"},
		];
		var loader = new createjs.PreloadJS(false);
		loader.setMaxConnections(5);
		loader.onFileLoad = handleFileLoad;
		loader.onComplete = handleComplete;
		loader.loadManifest(manifest);
	});
});