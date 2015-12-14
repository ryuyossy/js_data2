// ticket number animation
function setAnimationPopNumber() {
	var $_obj = jQuery('.js_ticketNum'),
		$_objInitNum = jQuery('.js_ticketInitNum'),
		_defNum = Number($_objInitNum.text()),
		_count = addTicket.SILVER,
		_initNum = _defNum - _count,
		_limit = 3;
	// window load
	jQuery(window).load(function () {
		$_obj.text(String(_defNum));
		$_obj.text(String(_initNum));
		if (_count) {
			if(U.ios) {
				setTimeout(animationNumberCountIOs, 1000);
			}
			else if(U.android) {
				$_obj.addClass('animationTicketNumberAndroid');
				setTimeout(animationNumberCountAndroid, 2000);
			}
		}
	});
	// main function
	// iOS
	function animationNumberCountIOs () {
		var animNmae = ((_limit - _count) === 0) ? 'ticketNumberPopMin' : ((_limit - _count) === 1) ? 'ticketNumberPopMid' : 'ticketNumberPop';
		// number text count up
		$_obj.text(++_initNum)
			.css('-webkit-animation', animNmae + ' 500ms ease-in-out 1');
		_count--;
		// loop
		if (_count > 0) {
			setTimeout(function () {
				animationNumberCountIOs ();
			}, 600);
		}
		else {
			setTimeout(function () {
//						$_obj.closest('li').css('-webkit-transition', 'background-size 500ms ease');
			}, 500);
		}
	}
	// Android
	function animationNumberCountAndroid () {
//				var classNmae = ((_limit - _count) === 0) ? 'animationTicketNumberAndroidMin' : ((_limit - _count) === 1) ? 'animationTicketNumberAndroidMid' : 'animationTicketNumberAndroid';
		// number text count up
		var $_new = $_obj.clone();
		$_obj.before($_new).css('display', 'none');
		$_new.text(++_initNum).css('display', 'inline-block').css('-webkit-animation-play-state', 'running');
		_count--;
		// loop
		if (_count > 0) {
			setTimeout(function () {
				$_new.remove();
				animationNumberCountAndroid ();
			}, 1000);
		}
	}
}
//		setAnimationPopNumber ();
