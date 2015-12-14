(function() {
	AMB.configure({
		clientId : '${common.clientId}',
		token : '${token}'
	});
	AMB.bootstrap(function(response) {
		/*if (response.auth) {
		    AMB.api('/me', function (result) {
		        if (result) {
		            console.log(result);
		        }
		    });
		} else {
		}*/
	});
	AMB.header('body', {
	/*template : 'dark'*/
	});
	AMB.footer('#footer');

	$ = AMB.chikuwa;
	var prices = {
		silver: 85,
		gold: 150,
		premiere: 200
	};	
	$('.ticketOption').on('click', function() {
		var item = $(this);				
		var value = parseInt(item.attr('data-value'));										
		var type = item.attr('data-type');
		$('.ticketOption[data-type="' + type + '"]').cls({'selected': 0});
		item.cls({'selected': 1});
		$('#' + type + 'Sum').inner(value * prices[type]);
	});
})();