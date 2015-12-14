(function($) {
	
	$('#birthdate').change(U.bdFunc);
	$('#birthdate').blur(U.bdFunc);	
	U.bdFunc.call($('#birthdate'));	
	
	if (!$('#birthdate').attr('value')) {
		$('#birthdate').attr('value', '1987-01-01');
	}
	
}(jQuery));