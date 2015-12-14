(function($) {
	//ポップアップ10 プレミアチケット消費
	var strPremiumPre = 'プレミアチケット',
	strPremiumPost = '枚で<br />プレミア鑑定をしますか？',
	strButtonAfter = 'あとで',
	strButtonYes = '鑑定する',
	keyFlagDay = 'flgDay',
	keyFlagTicket = 'flgTicket';

	var kanteiId;
	var button;
	$('.user').on('click', function() {
		kanteiId = $(this).attr('data-kantei-id');
		button = $('#' + kanteiId + 'Button');
		$("#changeMeMeTitle").css('display', 'none');
		$("#changeMeYouTitle").css('display', 'block');
		$("#changeMeSubmits").css({display: 'block'});
		$("#changeYouSubmits").css({display: 'none'});
		$('#furiganaFirst').val(button.attr('data-name-first'));
		$('#furiganaLast').val(button.attr('data-name-last'));
		$('#birthday').val(button.attr('data-birthday'));
		gotoView(4);
		return false;
	});
	$('.user_target').on('click', function() {
		kanteiId = $(this).attr('data-kantei-id');
		button = $('#' + kanteiId + 'Button');
		$("#changeMeYouTitle").css('display', 'block');
		$("#changeMeMeTitle").css('display', 'none');
		$("#changeMeSubmits").css({display: 'none'});
		$("#changeYouSubmits").css({display: 'block'});
		$('#furiganaFirst').val(button.attr('data-target-name-first'));
		$('#furiganaLast').val(button.attr('data-target-name-last'));
		var birthday = button.attr('data-target-birthday');
		if (!birthday) {
			$('#birthday').val('1987-01-01');
		} else {
			$('#birthday').val(button.attr('data-target-birthday'));
		}
		gotoView(4);
		return false;
	});
	$('#changeYouSubmits').on('click', function() {
		var first = $('#furiganaFirst').val().replace(/\s|　/g, '');
		var last = $('#furiganaLast').val().replace(/\s|　/g, '');
		var notRegistered = $('#' + kanteiId + '_target_not_registered');
		var birthday = $('#birthday').val();
		var b = birthday.substring(0, 4) + '年'
				+ birthday.substring(5, 7) + '月'
				+ birthday.substring(8, 10) + '日';
		if (!first && !last) {
			var target = $('#target');
			if (target[0]) {
				first = target.attr('data-first');
				last = target.attr('data-last');
				birthday = target.attr('data-birthday');
				$('#' + kanteiId + '_target_name').text(last + first);
				$('#' + kanteiId + '_target_birthday').text(b);
			} else {
				$('#' + kanteiId + '_target_name').text('未設定');
				$('#' + kanteiId + '_target_birthday').text('未設定');
			}
			U.removeLocalStorage('toriumi_' + kanteiId + '_target');
		} else {
			$('#' + kanteiId + '_target_name').text(last + first);
			$('#' + kanteiId + '_target_birthday').text(b);
			// ローカルストレージに保存
			U.saveLocalStorage('toriumi_' + kanteiId + '_target', {
				'firstName': first,
				'lastName': last,
				'birthday': birthday
			});
			if (notRegistered) {
				notRegistered.hide();
			}
			$('#' + kanteiId + '_target_error').hide();
		}
		button.attr('data-target-name-first', first);
		button.attr('data-target-name-last', last);
		button.attr('data-target-birthday', birthday);
		gotoView(0);
		return false;
	});
	$('#changeMeSubmits').on('click', function() {
		var birthday = $('#birthday').val();
		var first = $('#furiganaFirst').val().replace(/\s|　/g, '');
		var last = $('#furiganaLast').val().replace(/\s|　/g, '');
		var birthday = $('#birthday').val();
		var b = birthday.substring(0, 4) + '年'
				+ birthday.substring(5, 7) + '月'
				+ birthday.substring(8, 10) + '日';
		U.saveLocalStorage('toriumi_' + kanteiId + '_user', {
			'firstName': first,
			'lastName': last,
			'birthday': birthday
		});
		$('#' + kanteiId + '_user_error').hide();
		$('#' + kanteiId + '_user_name').text(last + first);
		$('#' + kanteiId + '_user_birthday').text(b);

		button.attr('data-name-first', first);
		button.attr('data-name-last', last);
		button.attr('data-birthday', birthday);
		gotoView(0);
		return false;
	});
	$('#freeButton').bind('touchstart', function(e) {
		gotoView(3, function(toView) {
			var button = $('#freeButton');
			var first = button.attr('data-name-first');
			var last = button.attr('data-name-last');
			var birthdays = button.attr('data-birthday');
			if (!first || !last || !birthdays) {
				jQuery("#free_user_error").text('お名前を正しく入力してください').show();
				currentView = 0;
				isDoingTrans = false;
				return false;
			}
			$('#tempReadingViewTypeName').text('-');
			$('#' + toView.contentView).text($('#loadingHtml').text()).css({'min-height': window.innerHeight + 'px'});
			$('#tempReadingViewName').text(first);
			var data = {
				'firstName': first,
				'lastName': last,
				'birthday': birthdays
			};
			var b = birthdays;
			jQuery.ajax({
				type: 'post',
				url: '/report/6/menu/free/' + button.attr('data-menu-id'),
				data: data,
			}).done(function(data) {
				var r = data.report;
				b = b.substring(0, 4) + '年' + '<br />' + b.substring(5, 7) + '月' + b.substring(8, 10) + '日生まれ';
				$('#seazonIcon').attr('src', '/resources/imgs/preToriumi/' + r.report.dataMap.seazon + 'Icon.png');
				$('.bornDays').html(b);
				$('.resultTxt').text(r.report.pieceBody);
			}).fail(function() {
				$('#' + toView.contentView).text('エラーが発生しました。もう一度やりなおしてください。');
			});
			return true;
		});
	});
	
	U.touchButton('#menu1Button', function(target) {	
		var $this = target,
			_ticketType = $this.attr('data-ticket-type'),
			_ticketCost = $this.attr('data-ticket-cost'),
			_ticketCount = Number(_ticketCost);
		if (userTickets[_ticketType] >= _ticketCount) {
			if (!$this.attr('data-name-first') || !$this.attr('data-name-last')) {
				$("#menu1_user_error").text('あなたの情報を正しく入力してください').show();
				return false;
			}
			U.doQuestionFormBirthWithSettings(strPremiumPre + _ticketCost + strPremiumPost, strButtonAfter,
			strButtonYes, '/report/6/menu/' + $this.attr('data-menu-id'), $('#rtoken').text(), $this.attr('data-role'), _ticketType,
			_ticketCost, $this.attr('data-name-first'), $this.attr('data-name-last'), $this.attr('data-birthday'));
			return false;
		}
	});
	
	U.touchButton('#menu2Button', function(target) {
		var $this = target,
			_ticketType = $this.attr('data-ticket-type'),
			_ticketCost = $this.attr('data-ticket-cost'),
			_ticketCount = Number(_ticketCost);
		if (userTickets[_ticketType] >= _ticketCount) {
			var firstNameKana = $this.attr('data-name-first');
			var lastNameKana = $this.attr('data-name-last');
			var birthday = $this.attr('data-birthday');
			if (!firstNameKana || !lastNameKana || !birthday) {
				$("#menu2_user_error").text('あなたの情報を正しく入力してください').show();
				return false;
			}
			var targetFirstNameKana = $this.attr('data-target-name-first');
			var targetLastNameKana = $this.attr('data-target-name-last');
			var targetBirthday = $this.attr('data-target-birthday');
			if (!targetFirstNameKana || !targetLastNameKana || !targetBirthday) {
				$("#menu2_target_error").text('お相手の情報を入力してください').show();
				return false;
			}
			U.doQuestionFormBirthWithSettings(
					strPremiumPre + _ticketCost + strPremiumPost,
					strButtonAfter,
					strButtonYes,
					'/report/6/menu/' + $this.attr('data-menu-id'),
					$('#rtoken').text(),
					$this.attr('data-role'),
					_ticketType,
					_ticketCost,
					firstNameKana,
					lastNameKana,
					birthday,
					targetFirstNameKana,
					targetLastNameKana,
					targetBirthday);
			return false;
		}
	});
	
	$(window).load(function () {
		function setUserInfo(obj, name, menuName) {
			var user = U.findLocalStorage(name + '_' + menuName + '_user');
			if (user) {
				var first = user.firstName;
				var last = user.lastName;
				var b = user.birthday;
				var birthday = b.substring(0, 4) + '年' + b.substring(5, 7) + '月' + b.substring(8, 10) + '日';
				$('#' + menuName + '_user_name').html(last + first);
				$('#' + menuName + '_user_birthday').html(birthday);
				obj.attr('data-name-first', first);
				obj.attr('data-name-last', last);
				obj.attr('data-birthday', b);
			}
		};
		function setTargetInfo(obj, name, menuName, info) {
			var target = U.findLocalStorage(name + '_' + menuName + '_target');
			if (target) {
				var first = target.firstName;
				var last = target.lastName;
				var b = target.birthday;
				var birthday = b.substring(0, 4) + '年' + b.substring(5, 7) + '月' + b.substring(8, 10) + '日';
				$('#' + menuName + '_target_name').html(last + first);
				$('#' + menuName + '_target_birthday').html(birthday);
				var notRegistered = $('#' + name + '_target_not_registered');
				if (notRegistered[0]) {
					notRegistered.hide();
					$('#' + name + '_change_target').show();
				}
				obj.attr('data-target-name-first', first);
				obj.attr('data-target-name-last', last);
				obj.attr('data-target-birthday', b);
			}
		};
		var isGuest = (U.getCookie('sessionKey') === '');
		if (!isGuest) {
			setUserInfo($('#menu1Button'), 'toriumi', 'menu1');
			setUserInfo($('#menu2Button'), 'toriumi', 'menu2');
			setTargetInfo($('#menu2Button'), 'toriumi', 'menu2');
		}
	}());
}(jQuery));
