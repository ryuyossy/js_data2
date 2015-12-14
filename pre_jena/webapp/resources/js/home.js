(function() {

	// load delay
	function loadBlockDelay() {
		var $_dspNoneLoad = jQuery('.dspNoneLoad');
		for (var i = 0; i < $_dspNoneLoad.length; i++) {
			$_dspNoneLoad.eq(i).removeClass('dspNoneLoad');
		}
	}
//		setTimeout(loadBlockDelay, 1000);

	// balloon close
	function setCloseBalloon () {
		closeBalloon(jQuery('#closeBalloonTicket'), jQuery('#balloonTicket'));
		closeBalloon(jQuery('#closeBalloonLove'), jQuery('#balloonLove'));
	}
	
	// balloon close
	jQuery('#closeBalloonDay').click(function() {
		jQuery('#balloonDay').removeClass('dspBlk');
		U.saveLocalStorage('balloon', 'false');
		return false;
	});
	
	function closeBalloon (btn, wrap) {
		btn.click(function() {
			wrap.removeClass('dspBlk');
			return false;
		});
	}
	setCloseBalloon();

	// balloon animation
	function setBalloon () {
		var boolTicket = (U.getCookie('flgTicket') === '');
		if (boolTicket) {
			jQuery('#balloonTicket, #balloonLove').addClass('dspBlk');
		}
		if (U.findLocalStorage('balloon') === 'false') {
			jQuery('#balloonDay').removeClass('dspBlk');
		}
	}
	setBalloon();

	// scroll to object
	function setLinkAndScroll () {
		if (U.findLocalStorage('linkAnchor') !== null) {
			doScrollToObject(U.findLocalStorage('linkAnchor'));
			U.removeLocalStorage('linkAnchor');
		}
	}
	setLinkAndScroll();
	
	
	$ = AMB.chikuwa;
	$.ready(function() {
		var j = U.getData('lastHomeData');
		if (j) {	
			j = JSON.parse(j);
			U.initSetupScroll(j.pageYOffset);
			U.rememberData('lastHomeData', null);
		} else {
			if (!window.location.hash) {
				U.initSetupScroll();
			};
		}
		U.wireButtons();
		U.addValidationForName();
		U.addValidationForFurigana();
		$('#birthdatePartner').change(U.bdFunc);
		$('#birthdatePartner').blur(U.bdFunc);
	});


	
	var uaInfo = navigator.userAgent;

	var ua = {
		iPhone : uaInfo.search(/iPhone/) !== -1
	}

	if(ua.iPhone) {
		
		bookmarkClass = U.findLocalStorage('bookmark') !== 'false' ? 'block' : 'none';
		
		addBookmarkClass(bookmarkClass);
	
		jQuery('.bookmark .close').on('click', function (e) {
			addBookmarkClass('none');
		});
		
		jQuery('.bookmark .bookmarkNo').on('click', function (e) {
			addBookmarkClass('none');
			U.saveLocalStorage('bookmark', 'false');
		});
		
		function addBookmarkClass(cla) {
			jQuery('.bookmark').addClass(cla);
		}
	}
})();


