var late = U.getDeviceLate();
(function() {
	$ = AMB.chikuwa;
	$.ready(function() {
		U.wireButtons();
	});
})();
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
	jQuery.getScript("/resources/js/anim/1.js", function() {
		function handleFileLoad(o) {
			if (o.type == "image") { images[o.id] = o.result; }
		}
		function handleComplete() {
			$("#loadingView").cls({'stage-center': 0, 'stage-left': 1}).inner('');
			$("#canvasView").cls({'stage-center': 1, 'stage-right': 0});
			var exportRoot = new lib._zodiac();
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
			{src:late==2?"/resources/imgs/anim/1/cardback.png":"/resources/imgs/anim/1/cardback_2x.png", id:"cardback"},
			{src:late==2?"/resources/imgs/anim/1/hikari1.png":"/resources/imgs/anim/1/hikari1_2x.png", id:"hikari1"},
			{src:late==2?"/resources/imgs/anim/1/hikari2.png":"/resources/imgs/anim/1/hikari2_2x.png", id:"hikari2"},
			{src:late==2?"/resources/imgs/anim/1/hoshizora.jpg":"/resources/imgs/anim/1/hoshizora_2x.jpg", id:"hoshizora"},
			{src:late==2?"/resources/imgs/anim/1/hoshizora2.jpg":"/resources/imgs/anim/1/hoshizora2_2x.jpg", id:"hoshizora2"},
			{src:late==2?"/resources/imgs/anim/1/kirakira04.png":"/resources/imgs/anim/1/kirakira04_2x.png", id:"kirakira04"},
			{src:late==2?"/resources/imgs/anim/1/kirakira.png":"/resources/imgs/anim/1/kirakira_2x.png", id:"kirakira"},
			{src:late==2?"/resources/imgs/anim/1/nagare.png":"/resources/imgs/anim/1/nagare_2x.png", id:"nagare"},
			{src:late==2?"/resources/imgs/anim/1/seiza.png":"/resources/imgs/anim/1/seiza_2x.png", id:"seiza"},
			{src:late==2?"/resources/imgs/anim/1/futurereport.jpg":"/resources/imgs/anim/1/futurereport_2x.jpg", id:"鑑定書"},
		];
		var loader = new createjs.PreloadJS(false);
		loader.setMaxConnections(5);
		loader.onFileLoad = handleFileLoad;
		loader.onComplete = handleComplete;
		loader.loadManifest(manifest);
	});
});