jQuery(function($) {

	var strPremiumPre = 'プレミアチケット',
		strPremiumPost = '枚でプレミア鑑定をしますか？',
		strButtonAfter = 'あとで',
		strButtonYes = '鑑定する';
	
	var setClick = function(nums, types, number) {
		$(nums).on('click', function() {
			var first,
				last,
				birthday,
				flags = types,
				submTypes = number;
			kanteiBtn = $('#' + $(this).attr('data-button-id'));
			currentKanteiId = $(this).attr('data-kantei-id');
			if (flags) {
				first = kanteiBtn.attr('data-name-first');
				last =  kanteiBtn.attr('data-name-last');
				birthday = kanteiBtn.attr('data-birthday');
			} else {
				first = kanteiBtn.attr('data-target-name-first');
				last = kanteiBtn.attr('data-target-name-last');
				birthday = kanteiBtn.attr('data-target-birthday');
			}
			switch(submTypes) {
				case 1: 
					$("#changeMeMeTitle").css('display', 'block');
					$("#changeMeYouTitle").css('display', 'none');
					$("#changeMeSubm").css('display', 'block');
					$("#changeYouSubm").css('display', 'none');
					break;
				case 2:
					$("#changeMeYouTitle").css('display', 'block');
					$("#changeMeMeTitle").css('display', 'none');
					$("#changeMeSubm").css('display', 'none');
					$("#changeYouSubm").css('display', 'block');
					break;
			}
			$('#furiganaFirst').val(first);
			$('#furiganaLast').val(last);
			$('#birthdatePartner').val(U.checkBirthday(birthday));
			gotoView(4);
			return false;
		});
	};
		
	var changeFormSubm = function(idType, boolType, stgType) {
		$(idType).on('click', function() {
			var flags = boolType;
			var first = $('#furiganaFirst').val().replace(/\s|　/g, '');
			var last = $('#furiganaLast').val().replace(/\s|　/g, '');
			var birthday = $('#birthdatePartner').val();
			var b = birthday;
			b = b.substring(0, 4) + '年' + ' ' + b.substring(5, 7) + '月' + b.substring(8, 10) + '日';
			if (!first && !last) {
				var target = $('#target');
				if (target[0]) {
					first = target.attr('data-first-kana'),
					last = target.attr('data-last-kana'),
					birthday = target.attr('data-birthday');
					$('.js_kanaFullNameYou_' + currentKanteiId).text(last + ' ' + first);
					b = birthday.substring(0, 4) + '年' + ' ' + birthday.substring(5, 7) + '月' + birthday.substring(8, 10) + '日';
					$('.js_fullbirthYou_' + currentKanteiId).text(b);
				} else {
					$('.js_kanaFullNameYou_' + currentKanteiId).text('未設定');
					$('.js_fullbirthYou_' + currentKanteiId).text('未設定');
				}
				U.removeLocalStorage('hoshi_' + currentKanteiId + '_target');
			} else {
				U.saveLocalStorage('hoshi_' + currentKanteiId + stgType, {
					'firstName': first,
					'lastName': last,
					'birthday': birthday
				});
				$('.js_' + currentKanteiId + '_NameCheck').hide();
			}	
			if (flags) {
				$('.js_kanaFullNameMe_' + currentKanteiId).text(last + ' ' + first);
				$('.js_fullbirthMe_' + currentKanteiId).text(b);
				kanteiBtn.attr('data-name-first', first);
				kanteiBtn.attr('data-name-last', last);
				kanteiBtn.attr('data-birthday', birthday);
			} else {
				$('.js_kanaFullNameYou_' + currentKanteiId).text(last + ' ' + first);
				$('.js_fullbirthYou_' + currentKanteiId).text(b);
				kanteiBtn.attr('data-target-name-first', first);
				kanteiBtn.attr('data-target-name-last', last);
				kanteiBtn.attr('data-target-birthday', birthday);
			}
			gotoView(0);
			return false;
		});
	};
	
	var setBtnPosts1 = function(idType, nameCheckCls, bl) {
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
				U.doQuestionFormWithSet2(
						strPremiumPre + _ticketCost + strPremiumPost,
						strButtonAfter,
						strButtonYes,
						'/report/11/menu/' + $this.attr('data-menu-id'),
						$('#rtoken').text(),
						$this.attr('data-role'),
						_ticketType,
						_ticketCost,
						first,
						last,
						birthday,
						bl
						);
				return false;
			}
		});
	};
	
	var setBtnPosts2 = function(idType, nameCheckCls, bl) {
		U.touchButton(idType, function(target) {
			var $this = target,
				_ticketType = $this.attr('data-ticket-type'),
				_ticketCost = $this.attr('data-ticket-cost'),
				_ticketCount = Number(_ticketCost);
			if (userTickets[_ticketType] >= _ticketCount) {
				var first = $this.attr('data-name-first'),
					last = $this.attr('data-name-last'),
					birthday = $this.attr('data-birthday'),
					targetFirst = $this.attr('data-target-name-first'),
					targetLast = $this.attr('data-target-name-last'),
					targetBirthday = $this.attr('data-target-birthday');
				if (!first || !last || !birthday) {
					$(nameCheckCls).text('お名前を正しく入力してください').show();
					return false;
				} else if (!targetFirst || !targetLast || !targetBirthday) {
					$(nameCheckCls).text('お相手の情報を入力してください').show();
					return false;
				}
				U.doQuestionFormWithSet2(
						strPremiumPre + _ticketCost + strPremiumPost,
						strButtonAfter,
						strButtonYes,
						'/report/11/menu/' + $this.attr('data-menu-id'),
						$('#rtoken').text(),
						$this.attr('data-role'),
						_ticketType,
						_ticketCost,
						first,
						last,
						birthday,
						bl,
						targetFirst,
						targetLast,
						targetBirthday);
				return false;
			}
		});
	};
	
	setClick('.js_num_1',true,1);
	setClick('.js_num_2',true,1);
	setClick('.js_num_3',false,2);
	setClick('.js_num_4',true,1);
	setClick('.js_num_5',false,2);
	setClick('.js_num_6',true,1);
	setClick('.js_num_7',false,2);
	setClick('.js_num_8',true,1);
	setClick('.js_num_9',false,2);

	changeFormSubm('#changeMeSubm', true, '_user');
	changeFormSubm('#changeYouSubm', false, '_target');
		
	setBtnPosts1('#menu1Button', '.js_menu1_NameCheck', true);
	setBtnPosts2('#menu2Button', '.js_menu2_NameCheck', false);
	setBtnPosts2('#menu3Button', '.js_menu3_NameCheck', false);
	setBtnPosts2('#menu4Button', '.js_menu4_NameCheck', false);
	setBtnPosts2('#menu5Button', '.js_menu5_NameCheck', false);

	// Set Data
	(function() {
		
		function setUserInfo(obj, stgKeys, classNamesF, classNamesB, flagTypes) {
			var user = U.findLocalStorage(stgKeys);
			if (user) {
				var flags = flagTypes,
					first = user.firstName,
					last = user.lastName,
					b = user.birthday,
					birthday = b.substring(0, 4) + '年' + b.substring(5, 7) + '月' + b.substring(8, 10) + '日';
				$(classNamesF).text(last + ' ' + first);
				$(classNamesB).text(birthday);
				
				if (flags) {
					obj.attr('data-name-first', first);
					obj.attr('data-name-last', last);
					obj.attr('data-birthday', b);
				} else {
					obj.attr('data-target-name-first', first);
					obj.attr('data-target-name-last', last);
					obj.attr('data-target-birthday', b);
				}
			}
		};
		
		setUserInfo($('#menu1Button'), 'hoshi_menu1_user', '.js_kanaFullNameMe_menu1', '.js_fullbirthMe_menu1', true);
		setUserInfo($('#menu2Button'), 'hoshi_menu2_user', '.js_kanaFullNameMe_menu2', '.js_fullbirthMe_menu2', true);
		setUserInfo($('#menu2Button'), 'hoshi_menu2_target', '.js_kanaFullNameYou_menu2', '.js_fullbirthYou_menu2', false);
		setUserInfo($('#menu3Button'), 'hoshi_menu3_user', '.js_kanaFullNameMe_menu3', '.js_fullbirthMe_menu3', true);
		setUserInfo($('#menu3Button'), 'hoshi_menu3_target', '.js_kanaFullNameYou_menu3', '.js_fullbirthYou_menu3', false);
		setUserInfo($('#menu4Button'), 'hoshi_menu4_user', '.js_kanaFullNameMe_menu4', '.js_fullbirthMe_menu4', true);
		setUserInfo($('#menu4Button'), 'hoshi_menu4_target', '.js_kanaFullNameYou_menu4', '.js_fullbirthYou_menu4', false);
		setUserInfo($('#menu5Button'), 'hoshi_menu5_user', '.js_kanaFullNameMe_menu5', '.js_fullbirthMe_menu5', true);
		setUserInfo($('#menu5Button'), 'hoshi_menu5_target', '.js_kanaFullNameYou_menu5', '.js_fullbirthYou_menu5', false);
		
	}());
		
}(jQuery));