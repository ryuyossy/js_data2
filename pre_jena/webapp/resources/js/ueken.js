(function($, doc) {
	
	var strPremiumPre = 'プレミアチケット',
		strPremiumPost = '枚で<br />プレミア鑑定をしますか？',
		strButtonAfter = 'あとで',
		strButtonYes = '鑑定する',
		keyFlagDay = 'flgDay',
		keyFlagTicket = 'flgTicket';
	
	$ = AMB.chikuwa;
	
	U.touchButton('#buttonUekenUser', function(target) {
		var $this = target,
			_ticketType = $this.attr('data-ticket-type'),
			_ticketCost = $this.attr('data-ticket-cost'),
			_ticketCount = Number(_ticketCost);
		if (userTickets[_ticketType] >= _ticketCount) {
			var first = $this.attr('data-name-first');
			var last = $this.attr('data-name-last');
			var gender = $this.attr('data-gender');
			if (!first || !last || !gender) {
				jQuery("#ueken_user_user_error").text('お名前を正しく入力してください').show();
				return false;
			}
			U.doQuestionFormWithSettings(
					strPremiumPre + _ticketCost + strPremiumPost,
					strButtonAfter,
					strButtonYes,
					'/report/ueken/' + $this.attr('data-menu-id'),
					$('#rtoken').text(),
					$this.attr('data-role'),
					_ticketType,
					_ticketCost,
					first,
					last,
					gender);
			return false;
		}
	});

	U.touchButton('#buttonUekenMatch', function(target) {
		var $this = target,
			_ticketType = $this.attr('data-ticket-type'),
			_ticketCost = $this.attr('data-ticket-cost'),
			_ticketCount = Number(_ticketCost);
		if (userTickets[_ticketType] >= _ticketCount) {
			var first = $this.attr('data-name-first');
			var last = $this.attr('data-name-last');
			var gender = $this.attr('data-gender');
			if (!first || !last || !gender) {
				jQuery("#ueken_match_user_error").text('お名前を正しく入力してください').show();
				return false;
			}
			var targetFirst = $this.attr('data-target-name-first');
			var targetLast = $this.attr('data-target-name-last');
			var targetGender = $this.attr('data-target-gender');
			if (!targetFirst || !targetLast || !targetGender) {
				jQuery("#ueken_match_target_error").text('お相手の情報を入力してください').show();
				return false;
			}
			U.doQuestionFormWithSettings(
					strPremiumPre + _ticketCost + strPremiumPost,
					strButtonAfter,
					strButtonYes,
					'/report/ueken/' + $this.attr('data-menu-id'),
					$('#rtoken').text(),
					$this.attr('data-role'),
					_ticketType,
					_ticketCost,
					first,
					last,
					gender,
					targetFirst,
					targetLast,
					targetGender);
			return false;
		}
	});

	U.touchButton('#buttonUekenTarget', function(target) {
		var $this = target,
			_ticketType = $this.attr('data-ticket-type'),
			_ticketCost = $this.attr('data-ticket-cost'),
			_ticketCount = Number(_ticketCost);
		if (userTickets[_ticketType] >= _ticketCount) {
			var targetFirst = $this.attr('data-target-name-first');
			var targetLast = $this.attr('data-target-name-last');
			var targetGender = $this.attr('data-target-gender');
			if (!targetFirst || !targetLast || !targetGender) {
				jQuery("#ueken_target_target_error").text('お相手の情報を入力してください').show();
				return false;
			}
			U.doQuestionFormWithSettings(
					strPremiumPre + _ticketCost + strPremiumPost,
					strButtonAfter,
					strButtonYes,
					'/report/ueken/' + $this.attr('data-menu-id'),
					$('#rtoken').text(),
					$this.attr('data-role'),
					_ticketType,
					_ticketCost,
					'', '', '',
					targetFirst,
					targetLast,
					targetGender);
			return false;
		}
	});
	
	U.touchButton('#buttonMenu4', function(target) {
		var $this = target,
		_ticketType = $this.attr('data-ticket-type'),
		_ticketCost = $this.attr('data-ticket-cost'),
		_ticketCount = Number(_ticketCost);
		if (userTickets[_ticketType] >= _ticketCount) {
			var first = $this.attr('data-name-first');
			var last = $this.attr('data-name-last');
			var gender = $this.attr('data-gender');
			if (!first || !last || !gender) {
				jQuery("#menu4_user_error").text('お名前を正しく入力してください').show();
				return false;
			}
			U.doQuestionFormWithSettings(
				strPremiumPre + _ticketCost + strPremiumPost,
				strButtonAfter,
				strButtonYes,
				'/report/ueken/' + $this.attr('data-menu-id'),
				$('#rtoken').text(),
				$this.attr('data-role'),
				_ticketType,
				_ticketCost,
				first,
				last,
				gender
			);
			return false;
		}
	});
	
	$('.js_changeYouView').on('click', function() {
		$("#changeMeMeTitle").cls({gone: 1});
		$("#changeMeYouTitle").cls({gone: 0});
		$("#changeMeSubmit").css({display: 'none'});
		$("#changeYouSubmit").css({display: 'block'});				
		
		currentKanteiInfo = $(this).attr('data-kantei-id');
		currentKanteiButton = $('#' + $(this).attr('data-button-id'));
		var first = currentKanteiButton.attr('data-target-name-first');
		var last = currentKanteiButton.attr('data-target-name-last');
		var gender = currentKanteiButton.attr('data-target-gender');
		$('#furiganaFirst').value(first);
		$('#furiganaLast').value(last);
		if (gender === 'F') {
			doc.getElementById('genderMan').checked = false;
			doc.getElementById('genderWoman').checked = true;
		} 
		if (gender === 'M') {
			doc.getElementById('genderMan').checked = true;
			doc.getElementById('genderWoman').checked = false;
		}
		
		gotoView(5);
		return false;
	});
	
	$('#changeYouSubmit').on('click', function() {
		var first = $('#furiganaFirst').value().replace(/\s|　/g, '');
		var last = $('#furiganaLast').value().replace(/\s|　/g, '');
		var gender = doc.getElementById("genderWoman").checked ? "F" : "M";
		var g;
		if (!first && !last && !gender) {
			var target = jQuery('#target');
			if (target[0]) {
				first = target.attr('data-first');
				last = target.attr('data-last');
				gender = target.attr('data-gender');
				if (gender == 'M') {
					g = '男性';
				} else {
					g = '女性';
				}
				$('#' + currentKanteiInfo + '_changeyou').inner(last + ' ' + first);
				$('#' + currentKanteiInfo + '_targetGender').inner(g);
			} else {
				$('#' + currentKanteiInfo + '_changeyou').text('未設定');
				$('#' + currentKanteiInfo + '_targetGender').text('未設定');
			}
			U.removeLocalStorage(currentKanteiInfo + '_target');
		} else {
			if (gender == 'M') {
				g = '男性';
			} else {
				g = '女性';
			}
			$('#' + currentKanteiInfo + '_changeyou').inner(last + ' ' + first);
			$('#' + currentKanteiInfo + '_targetGender').inner(g);
			// ローカルストレージに保存
			U.saveLocalStorage(currentKanteiInfo + '_target', {
				'firstName': first,
				'lastName': last,
				'gender': gender
			});
			jQuery('#' + currentKanteiInfo + '_target_error').hide();
		}
		currentKanteiButton.attr('data-target-name-first', first);
		currentKanteiButton.attr('data-target-name-last', last);
		currentKanteiButton.attr('data-target-gender', gender);
		gotoView(0);
		return false;
	});
	
	$('.js_changeme').on('click', function() {
		currentKanteiInfo = $(this).attr('data-kantei-id');
		currentKanteiButton = $('#' + $(this).attr('data-button-id'));
		
		$("#changeMeMeTitle").cls({gone: 0});
		$("#changeMeYouTitle").cls({gone: 1});
		$("#changeMeSubmit").css({display: 'block'});
		$("#changeYouSubmit").css({display: 'none'});
		var first = currentKanteiButton.attr('data-name-first');
		var last = currentKanteiButton.attr('data-name-last');
		var gender = currentKanteiButton.attr('data-gender');

		$('#furiganaFirst').value(first);
		$('#furiganaLast').value(last);
		if (gender === 'F') {
			doc.getElementById('genderMan').checked = false;
			doc.getElementById('genderWoman').checked = true;
		} 
		if (gender === 'M') {
			doc.getElementById('genderMan').checked = true;
			doc.getElementById('genderWoman').checked = false;
		}

		gotoView(4);
		return false;
	});
	
	$('#changeMeSubmit').on('click', function() {
		var first = $('#furiganaFirst').value().replace(/\s|　/g, '');
		var last = $('#furiganaLast').value().replace(/\s|　/g, '');
		var gender = doc.getElementById("genderWoman").checked ? "F" :"M";
		var g;
		if (!first && !last) {
			var user = jQuery('#user');
			first = user.attr('data-first');
			last = user.attr('data-last');
			gender = user.attr('data-gender');
			U.removeLocalStorage(currentKanteiInfo + '_user');
		} else {
			// ローカルストレージに保存
			U.saveLocalStorage(currentKanteiInfo + '_user', {
				'firstName': first,
				'lastName': last,
				'gender': gender
			});
			jQuery('#' + currentKanteiInfo + '_user_error').hide();
		}
		if (gender == 'M') {
			g = '男性';
		} else {
			g = '女性';
		}
		$('#' + currentKanteiInfo + '_changeme').inner(last + ' ' + first);
		$('#' + currentKanteiInfo + '_gender').inner(g);
		currentKanteiButton.attr('data-name-first', first);
		currentKanteiButton.attr('data-name-last', last);
		currentKanteiButton.attr('data-gender', gender);
		gotoView(0);
		return false;
	});
	
	U.touchButton('#buttonUekenTry', function(target) {
		gotoView(3, function(toView) {
			var button = $('#buttonUekenTry');
			var first = button.attr('data-name-first');
			var last = button.attr('data-name-last');
			var gender = button.attr('data-gender');
			if (!first || !last) {
				jQuery("#ueken_try_user_error").text('お名前を正しく入力してください').show();
				currentView = 0;
				isDoingTrans = false;
				return false;
			}
			$('#tempReadingViewTypeName').inner('-');
			$('#' + toView.contentView).inner($('#loadingHtml').inner()).css({'min-height': window.innerHeight + 'px'});
			$('#tempReadingViewName').inner(first);
			var data = {
				'firstName': first,
				'lastName': last,
				'gender': gender
			};
			$('#tempReadingViewName').inner(last + first);
			jQuery.post('/report/ueken/api/try/json/' + button.attr("data-menu-id"), data, function(result) {
				var reportModel = result.report;
				$('#tempReadingViewTypeName').inner(result.report.typeName);
				$('#' + toView.contentView).inner(reportModel.report.body);
			}).fail(function() {
				$('#' + toView.contentView).inner('エラーが発生しました。もう一度やりなおしてください。');
			});
			return true;
		});
	});

	// Set Ueken Data
	$(window).load(function ($) {
		function setUekenUserInfo(obj, name) {
			var user = U.findLocalStorage(name + '_user');
			if (user) {
				var first = user.firstName;
				var last = user.lastName;
				var gender = user.gender;
				var g;
				if (gender == 'M') {
					g = '男性';
				} else {
					g = '女性';
				}
				$('#' + name + '_changeme').html(last + ' ' + first);
				$('#' + name + '_gender').html(g);
				obj.attr('data-name-first', first);
				obj.attr('data-name-last', last);
				obj.attr('data-gender', gender);
			};
		};
		function setUekenTargetInfo(obj, name, info) {
			var target = U.findLocalStorage(name + '_target');
			if (target) {
				var first = target.firstName;
				var last = target.lastName;
				var gender = target.gender;
				var g;
				if (gender == 'M') {
					g = '男性';
				} else {
					g = '女性';
				}
				$('#' + name + '_changeyou').html(last + ' ' + first);
				$('#' + name + '_targetGender').html(g);
				obj.attr('data-target-name-first', target.firstName);
				obj.attr('data-target-name-last', target.lastName);
				obj.attr('data-target-gender', target.gender);
			};
		};
		setUekenUserInfo($('#buttonUekenTry'), 'ueken_try');
		setUekenUserInfo($('#buttonUekenUser'), 'ueken_user');
		setUekenUserInfo($('#buttonMenu4'), 'menu4');
		var matchButton = $('#buttonUekenMatch');
		setUekenUserInfo(matchButton, 'ueken_match');
		setUekenTargetInfo(matchButton, 'ueken_match');
		setUekenTargetInfo($('#buttonUekenTarget'), 'ueken_target');
	}(jQuery));
	
}(jQuery, document));