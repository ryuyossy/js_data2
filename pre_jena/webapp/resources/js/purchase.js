(function() {
	$.ready(function() {
		
		//Finds y value of given object
		function findPos(obj) {
			var curtop = 0;
			if (obj.offsetParent) {
				do {
					curtop += obj.offsetTop;
				} while (obj = obj.offsetParent);
			return [curtop];
			}
		}
	
		function doScrollToObject(id) {
			window.scroll(0, findPos(document.getElementById(id)));
			return false;
		}
	
		// scroll to object
		function setLinkAndScroll() {
			if (U.findLocalStorage('linkAnchor') !== null) {
				doScrollToObject(U.findLocalStorage('linkAnchor'));
				U.removeLocalStorage('linkAnchor');
			}
		}
		jQuery(window).load(setLinkAndScroll);
		
		var prices = {
			silver: 85,
			gold: 150,
			premiere: 200
		};	
		
		U.initSetupScroll();
		
		var userTickets = Number(U.findLocalStorage('usrTicket')),			
		    ticketsCounts = Number(U.findLocalStorage('ticketCount')),
		    ticketsTypes = U.findLocalStorage('ticketTypes'),
		    golCurrentPrice = prices.gold,
		    preCurrentPrice = prices.premiere,
	        currentSelected = 1,
		    nums = (ticketsCounts - userTickets);
		
		
		$('.ticketOption').click(function() {
			
			var item = $(this);				
			
			var value = parseInt(item.attr('data-value'));										
			var type = item.attr('data-type');
		
			$('.ticketOption[data-type="' + type + '"]').cls({'selected': 0});				
		
			item.cls({'selected': 1});
		
			$('#' + type + 'Sum').inner(value * prices[type]);
			
			$('#' + type + 'Coins').value(value);
			
		});
		
		$('.ticketOption[data-value="' + currentSelected + '"]').cls({'selected': 1});
	    
		if (ticketsTypes == 'premiere') {
	    	$('.js_ticketPremiere').cls({'show': 1});
	    	$('.js_ticketExplainPremiere').cls({'show': 1});
	    	$('.js_ticketUserPremiere').inner(userTickets);
	    	$('.js_ticketCostPremiere').inner(ticketsCounts);
	    	$('.js_ticketShortPremiere').inner(ticketsCounts - userTickets);
			$('#premiereCoins').value(nums);
			$('.ticketOption[data-value="' + currentSelected + '"]').cls({'selected': 0});
	    	$('.js_ticketPremiere[data-value="' + nums + '"]').cls({'selected': 1});
	    	if (nums == 4 || nums == 8 || nums == 9) {
	    		$('.js_ticketPremiere[data-value="' + currentSelected + '"]').cls({'selected': 1});
	    	}
	    	$('.js_ticketGold[data-value="' + currentSelected + '"]').cls({'selected': 1});
	    	$('#premiereSum').inner(preCurrentPrice * nums);
	    	$('#goldSum').inner(golCurrentPrice);
	    } else if(ticketsTypes == 'gold') {
	    	$('.js_ticketGold').cls({'show': 1});
	    	$('.js_ticketExplainGold').cls({'show': 1});
	    	$('.js_ticketUserGold').inner(userTickets);
	    	$('.js_ticketCostGold').inner(ticketsCounts);
	    	$('.js_ticketShortGold').inner(ticketsCounts - userTickets);
	    	$('#goldCoins').value(nums);
	    	$('.ticketOption[data-value="' + currentSelected + '"]').cls({'selected': 0});
	    	$('.js_ticketGold[data-value="' + nums + '"]').cls({'selected': 1});
	    	$('.js_ticketPremiere[data-value="' + currentSelected + '"]').cls({'selected': 1});
	    	$('#goldSum').inner(golCurrentPrice * nums);
	    	$('#premiereSum').inner(preCurrentPrice);
	    }
        U.removeLocalStorage('ticketTypes');
	});
	
}());