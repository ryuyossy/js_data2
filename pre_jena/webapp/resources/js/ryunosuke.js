jQuery(function($) {

	var strPremiumPre = 'プレミアチケット',
		strPremiumPost = '枚でプレミア鑑定をしますか？',
		strButtonAfter = 'あとで',
		strButtonYes = '鑑定する',
		menuLenght = [1,2,3];
	
	menuLenght.forEach(function(element) {
		$('.js_num_' + element).on('click', function() {
			var first,
				last,
				birthday;
			kanteiBtn = $('#' + $(this).attr('data-button-id'));
			currentKanteiId = $(this).attr('data-kantei-id');
			first = kanteiBtn.attr('data-name-first');
			last =  kanteiBtn.attr('data-name-last');
			birthday = kanteiBtn.attr('data-birthday');
			$('#furiganaFirst').val(first);
			$('#furiganaLast').val(last);
			$('#birthdatePartner').val(U.checkBirthday(birthday));
			gotoView(4);
			return false;
		});
	});
	
	$('#changeMeSubm_1').on('click', function() {
		var first = $('#furiganaFirst').val().replace(/\s|　/g, '');
		var last = $('#furiganaLast').val().replace(/\s|　/g, '');
		var birthday = $('#birthdatePartner').val();
		var b = birthday;
		b = b.substring(0, 4) + '年' + ' ' + b.substring(5, 7) + '月' + b.substring(8, 10) + '日';
		if (!first && !last) {
			var user = jQuery('#user');
			first = user.attr('data-first');
			last = user.attr('data-last');
			birthday= user.attr('data-birthday');
			U.removeLocalStorage('ryunosuke_' + currentKanteiId + '_user');
		} else {
			U.saveLocalStorage('ryunosuke_' + currentKanteiId + '_user', {
				'firstName': first,
				'lastName': last,
				'birthday': birthday
			});
			$('.js_' + currentKanteiId + '_NameCheck').hide();
		}
		$('.js_kanaFullNameMe_' + currentKanteiId).text(last + ' ' + first);
		$('.js_fullbirthMe_' + currentKanteiId).text(b);
		kanteiBtn.attr('data-name-first', first);
		kanteiBtn.attr('data-name-last', last);
		kanteiBtn.attr('data-birthday', birthday);
		gotoView(0);
		return false;
	});
		
	var setBtnPosts = function(idType, nameCheckCls) {
		U.touchButton(idType, function(target) {
			var $this = target,
				_ticketType = $this.attr('data-ticket-type'),
				_ticketCost = $this.attr('data-ticket-cost'),
				_ticketCount = Number(_ticketCost);
			if (userTickets[_ticketType] >= _ticketCount) {
				var first = $this.attr('data-name-first'),
					last = $this.attr('data-name-last'),
					birthday = $this.attr('data-birthday');
				if (!first || !last || !birthday) {
					$(nameCheckCls).text('お名前を正しく入力してください').show();
					return false;
				}
				U.doQuestionFormSettings(
						strPremiumPre + _ticketCost + strPremiumPost,
						strButtonAfter,
						strButtonYes,
						'/report/10/menu/' + $this.attr('data-menu-id'),
						$('#rtoken').text(),
						$this.attr('data-role'),
						_ticketType,
						_ticketCost,
						first,
						last,
						birthday
						);
				return false;
			}
		});
	};
	
	setBtnPosts('#menu1Button', '.js_menu1_NameCheck');
	setBtnPosts('#menu2Button', '.js_menu2_NameCheck');
	setBtnPosts('#menu3Button', '.js_menu3_NameCheck');

	// Set Data
	(function() {
		
		function setUserInfo(obj, stgKeys, classNamesF, classNamesB) {
			var user = U.findLocalStorage(stgKeys);
			if (user) {
				var first = user.firstName,
					last = user.lastName,
					b = user.birthday,
					birthday = b.substring(0, 4) + '年' + b.substring(5, 7) + '月' + b.substring(8, 10) + '日';
				$(classNamesF).text(last + ' ' + first);
				$(classNamesB).text(birthday);
				obj.attr('data-name-first', first);
				obj.attr('data-name-last', last);
				obj.attr('data-birthday', b);
			}
		};
		
		setUserInfo($('#menu1Button'), 'ryunosuke_menu1_user', '.js_kanaFullNameMe_menu1', '.js_fullbirthMe_menu1');
		setUserInfo($('#menu2Button'), 'ryunosuke_menu2_user', '.js_kanaFullNameMe_menu2', '.js_fullbirthMe_menu2');
		setUserInfo($('#menu3Button'), 'ryunosuke_menu3_user', '.js_kanaFullNameMe_menu3', '.js_fullbirthMe_menu3');
		
	}());
		
}(jQuery));