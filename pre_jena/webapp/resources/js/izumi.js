jQuery(function($) {
    	   
	//ポップアップ10 プレミアチケット消費
	var strPremiumPre = 'プレミアチケット',
		strPremiumPost = '枚でプレミア鑑定をしますか？',
		strButtonAfter = 'あとで',
		strButtonYes = '鑑定する';
		keyFlagDay = 'flgDay',
		keyFlagTicket = 'flgTicket';
			
	var setChangesForm = function(roleType, dspBlock, dspNone, types, kanteiBtn, menuType) {
		$(roleType).on('click', function() {
			var flags = menuType;
			var first;
			var last;
			var birthday;
			var submTypes = types;
			$("#changeMeMeTitle").css('display', dspBlock);
			$("#changeMeYouTitle").css('display', dspNone);
			
			switch(submTypes) {
				case 1: 
					$("#changeMeSubm1").css('display', 'block');
					$("#changeMeSubm2").css('display', 'none');
					$("#changeYouSubm3").css('display', 'none');
					$("#changeMeSubm4").css('display', 'none');
					$("#changeYouSubm4").css('display', 'none');
					break;
				case 2: 
					$("#changeMeSubm1").css('display', 'none');
					$("#changeMeSubm2").css('display', 'block');
					$("#changeYouSubm3").css('display', 'none');
					$("#changeMeSubm4").css('display', 'none');
					$("#changeYouSubm4").css('display', 'none');
					break;
				case 3:
					$("#changeMeSubm1").css('display', 'none');
					$("#changeMeSubm2").css('display', 'none');
					$("#changeYouSubm3").css('display', 'block');
					$("#changeMeSubm4").css('display', 'none');
					$("#changeYouSubm4").css('display', 'none');
					break;
				case 4:
					$("#changeMeSubm1").css('display', 'none');
					$("#changeMeSubm2").css('display', 'none');
					$("#changeYouSubm3").css('display', 'none');
					$("#changeMeSubm4").css('display', 'block');
					$("#changeYouSubm4").css('display', 'none');
					break;
				case 5:
					$("#changeMeSubm1").css('display', 'none');
					$("#changeMeSubm2").css('display', 'none');
					$("#changeYouSubm3").css('display', 'none');
					$("#changeMeSubm4").css('display', 'none');
					$("#changeYouSubm4").css('display', 'block');
					break;
			}
			
			if (flags) {
				first = $(kanteiBtn).attr('data-name-first');
				last = $(kanteiBtn).attr('data-name-last');
				birthday = $(kanteiBtn).attr('data-birthday');
			} else {
				first = $(kanteiBtn).attr('data-target-name-first');
				last = $(kanteiBtn).attr('data-target-name-last');
				birthday = $(kanteiBtn).attr('data-target-birthday');
			}
					
			$('#furiganaFirst').val(first);
			$('#furiganaLast').val(last);
			$('#birthdatePartner').val(U.checkBirthday(birthday));
			gotoView(4);
			return false;
		});
	};
			
	var changeFormSubm = function(idType, classNamesF, classNamesB, storageKeys, menuNo, menuType) {
		$(idType).on('click', function() {
			var flags = menuType;
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
					$(classNamesF).text(last + first);
					b = birthday.substring(0, 4) + '年' + ' ' + birthday.substring(5, 7) + '月' + birthday.substring(8, 10) + '日';
					$(classNamesB).text(b);
				} else {
					$(classNamesF).text('未設定');
					$(classNamesB).text('未設定');
				}
				U.removeLocalStorage('izumi_' + menuNo + '_target');
			} else {
				$(classNamesF).text(last + ' ' + first);
				$(classNamesB).text(b);
				U.saveLocalStorage(storageKeys, {
					'firstName': first,
					'lastName': last,
					'birthday': birthday
				});
			}
			$('.js_' + menuNo + 'NameCheck').hide();
			var button = $('#' + menuNo + 'Button');
			if (flags == true) {
				button.attr('data-name-first', first);
				button.attr('data-name-last', last);
				button.attr('data-birthday', birthday);
			} 
			if (flags == false) {
				button.attr('data-target-name-first', first);
				button.attr('data-target-name-last', last);
				button.attr('data-target-birthday', birthday);
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
						'/report/18/menu/' + $this.attr('data-menu-id'),
						$('#rtoken').text(),
						$this.attr('data-role'),
						_ticketType,
						_ticketCost,
						first,
						last,
						birthday,
						bl);
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
						'/report/18/menu/' + $this.attr('data-menu-id'),
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


	
	var setBtnPosts3 = function(idType, nameCheckCls, bl) {
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
				
				if (!targetFirst || !targetLast || !targetBirthday) {
					jQuery(nameCheckCls).text('お相手の情報を入力してください').show();
					return false;
				}
				U.doQuestionFormWithSet2(
						strPremiumPre + _ticketCost + strPremiumPost,
						strButtonAfter,
						strButtonYes,
						'/report/18/menu/' + $this.attr('data-menu-id'),
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
			
	setChangesForm('.js_changemes1', 'block', 'none', 1, '#menu1Button', true);
	setChangesForm('.js_changemes2', 'block', 'none', 2, '#menu2Button', true);
	setChangesForm('.js_changeyous3', 'none', 'block', 3, '#menu3Button', false);
	setChangesForm('.js_changemes4', 'block', 'none', 4, '#menu4Button', true);
	
	setChangesForm('.js_changeyous4', 'none', 'block', 5, '#menu4Button', false);
	
	changeFormSubm('#changeMeSubm1', '.js_kanaFullNameMe1', '.js_fullbirthMe1', 'izumi_menu1_user', 'menu1', true);
	changeFormSubm('#changeMeSubm2', '.js_kanaFullNameMe2', '.js_fullbirthMe2', 'izumi_menu2_user', 'menu2', true);
	changeFormSubm('#changeYouSubm3', '.js_kanaFullNameYou3', '.js_fullbirthYou3', 'izumi_menu3_target', 'menu3', false);
	changeFormSubm('#changeMeSubm4', '.js_kanaFullNameMe4', '.js_fullbirthMe4', 'izumi_menu4_user', 'menu4', true);
	
	changeFormSubm('#changeYouSubm4', '.js_kanaFullNameYou4', '.js_fullbirthYou4', 'izumi_menu4_target', 'menu4', false);

	setBtnPosts1('#menu1Button', '.js_menu1NameCheck', true);
	setBtnPosts1('#menu2Button', '.js_menu2NameCheck', true);
	setBtnPosts3('#menu3Button', '.js_menu3NameCheck', false);
	setBtnPosts2('#menu4Button', '.js_menu4NameCheck', false);

	// Set Data
	(function() {
		
		function setUserInfo(obj, stgKeys, classNamesF, classNamesB, flagTypes) {
			var user = U.findLocalStorage(stgKeys);
			if (user) {
				var flags = flagTypes;
				var first = user.firstName;
				var last = user.lastName;
				var b = user.birthday;
				var birthday = b.substring(0, 4) + '年' + b.substring(5, 7) + '月' + b.substring(8, 10) + '日';
				$(classNamesF).text(last + ' ' + first);
				$(classNamesB).text(birthday);
				
				if (flags == true) {
					obj.attr('data-name-first', first);
					obj.attr('data-name-last', last);
					obj.attr('data-birthday', b);
				}
				
				if (flags == false) {
					obj.attr('data-target-name-first', first);
					obj.attr('data-target-name-last', last);
					obj.attr('data-target-birthday', b);
				}
			}
		};
		
		setUserInfo($('#menu1Button'), 'izumi_menu1_user', '.js_kanaFullNameMe1', '.js_fullbirthMe1', true);
		setUserInfo($('#menu2Button'), 'izumi_menu2_user', '.js_kanaFullNameMe2', '.js_fullbirthMe2', true);
		setUserInfo($('#menu3Button'), 'izumi_menu3_target', '.js_kanaFullNameYou3', '.js_fullbirthYou3', false);
		setUserInfo($('#menu4Button'), 'izumi_menu4_user', '.js_kanaFullNameMe4', '.js_fullbirthMe4', true);
		
		setUserInfo($('#menu4Button'), 'izumi_menu4_target', '.js_kanaFullNameYou4', '.js_fullbirthYou4', false);
	
	}());	
			
}(jQuery));