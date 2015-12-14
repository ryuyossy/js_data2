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
	var animdata = jQuery('#animdata');
	jQuery.getScript(animdata.attr('data-uri'), function() {
		var isLove = animdata.attr('data-is-love') === 'true';
		function handleFileLoad(o) {
			if (o.type == "image") { images[o.id] = o.result; }
		}
		function handleComplete() {
			$("#loadingView").cls({'stage-center': 0, 'stage-left': 1}).inner('');
			$("#canvasView").cls({'stage-center': 1, 'stage-right': 0});
			var exportRoot;
			if (isLove) {
				exportRoot = new lib.fortune_gold_gorgeous_love();
			} else {
				exportRoot = new lib.fortune_gold_gorgeous();
			}
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
		var manifest;
		if (isLove) {
			manifest = [
				{src:late==2?"/resources/imgs/anim/7/bg00.jpg":"/resources/imgs/anim/7/bg00_2x.jpg", id:"bg00"},
				{src:late==2?"/resources/imgs/anim/7/cardback3.png":"/resources/imgs/anim/7/cardback3_2x.png", id:"cardback3"},
				{src:late==2?"/resources/imgs/anim/7/cardrare.jpg":"/resources/imgs/anim/7/cardrare_2x.jpg", id:"cardrare"},
				{src:late==2?"/resources/imgs/anim/7/heart.png":"/resources/imgs/anim/7/heart_2x.png", id:"heart"},
				{src:late==2?"/resources/imgs/anim/7/hikari1.png":"/resources/imgs/anim/7/hikari1_2x.png", id:"hikari1"},
				{src:late==2?"/resources/imgs/anim/7/hikari2.png":"/resources/imgs/anim/7/hikari2_2x.png", id:"hikari2"},
				{src:late==2?"/resources/imgs/anim/7/hikaritourou.png":"/resources/imgs/anim/7/hikaritourou_2x.png", id:"hikaritourou"},
				{src:late==2?"/resources/imgs/anim/7/hoshizora2.jpg":"/resources/imgs/anim/7/hoshizora2_2x.jpg", id:"hoshizora2"},
				{src:late==2?"/resources/imgs/anim/7/kirakira04.png":"/resources/imgs/anim/7/kirakira04_2x.png", id:"kirakira04"},
				{src:late==2?"/resources/imgs/anim/7/door03b.png":"/resources/imgs/anim/7/door03b_2x.png", id:"扉03b"}
			];
		} else {
			manifest = [
				{src:late==2?"/resources/imgs/anim/6/cardback3.png":"/resources/imgs/anim/6/cardback3_2x.png", id:"cardback3"},
				{src:late==2?"/resources/imgs/anim/6/cardrare.jpg":"/resources/imgs/anim/6/cardrare_2x.jpg", id:"cardrare"},
				{src:late==2?"/resources/imgs/anim/6/hikari1.png":"/resources/imgs/anim/6/hikari1_2x.png", id:"hikari1"},
				{src:late==2?"/resources/imgs/anim/6/hikari2.png":"/resources/imgs/anim/6/hikari2_2x.png", id:"hikari2"},
				{src:late==2?"/resources/imgs/anim/6/hikaritourou.png":"/resources/imgs/anim/6/hikaritourou_2x.png", id:"hikaritourou"},
				{src:late==2?"/resources/imgs/anim/6/hoshizora2.jpg":"/resources/imgs/anim/6/hoshizora2_2x.jpg", id:"hoshizora2"},
				{src:late==2?"/resources/imgs/anim/6/kirakira04.png":"/resources/imgs/anim/6/kirakira04_2x.png", id:"kirakira04"},
				{src:late==2?"/resources/imgs/anim/6/door03a.jpg":"/resources/imgs/anim/6/door03a_2x.jpg", id:"扉03a"},
				{src:late==2?"/resources/imgs/anim/6/door03b.png":"/resources/imgs/anim/6/door03b_2x.png", id:"扉03b"}
			];
		}
		var loader = new createjs.PreloadJS(false);
		loader.setMaxConnections(5);
		loader.onFileLoad = handleFileLoad;
		loader.onComplete = handleComplete;
		loader.loadManifest(manifest);
	});
});