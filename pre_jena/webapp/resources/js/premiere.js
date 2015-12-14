// Set Birthday 
$.ready(function() {
	U.addValidationForName();
	U.addValidationForFurigana();
	U.addValidationForKanji();
	$('#birthdate, #birthdatePartner').change(U.bdFunc);
	$('#birthdate, #birthdatePartner').blur(U.bdFunc);
	U.bdFunc.call($('#birthdate'));
	if (!jQuery('#birthdatePartner').attr('value')) {
		jQuery('#birthdatePartner').attr('value', '1987-01-01');
	}
});

(function() {
	AMB.chikuwa.ready(function() {
		var j = U.getData('lastHomeData');
		if (j) {    
			j = JSON.parse(j);
			U.initSetupScroll(j.pageYOffset);
			U.rememberData('lastHomeData', null);
		} else {
			if (!window.location.hash) {
				U.initSetupScroll();
			}
		}
		U.wireButtons();
	});
}());