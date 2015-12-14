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
			var firstKanji;
			var lastKanji;
			var birthday;
			var submTypes = types;
			$("#changeMeMeTitle").css('display', dspBlock);
			$("#changeMeYouTitle").css('display', dspNone);
			
			switch(submTypes) {
				case 1: 
					$("#changeMeSubm1").css('display', 'block');
					$("#changeMeSubm2").css('display', 'none');
					$("#changeMeSubm3").css('display', 'none');
					$("#changeMeSubm4").css('display', 'none');
					$("#changeMeSubm5").css('display', 'none');
					$("#changeMeSubm6").css('display', 'none');
					$("#changeMeSubm7").css('display', 'none');
					$("#changeMeSubm8").css('display', 'none');
					$("#changeYouSubm2").css('display', 'none');
					$("#changeYouSubm5").css('display', 'none');
					$("#changeYouSubm6").css('display', 'none');
					$("#changeYouSubm8").css('display', 'none');
					break;
				case 2: 
					$("#changeMeSubm1").css('display', 'none');
					$("#changeMeSubm2").css('display', 'block');
					$("#changeMeSubm3").css('display', 'none');
					$("#changeMeSubm4").css('display', 'none');
					$("#changeMeSubm5").css('display', 'none');
					$("#changeMeSubm6").css('display', 'none');
					$("#changeMeSubm7").css('display', 'none');
					$("#changeMeSubm8").css('display', 'none');
					$("#changeYouSubm2").css('display', 'none');
					$("#changeYouSubm5").css('display', 'none');
					$("#changeYouSubm6").css('display', 'none');
					$("#changeYouSubm8").css('display', 'none');
					break;
				case 3:
					$("#changeMeSubm1").css('display', 'none');
					$("#changeMeSubm2").css('display', 'none');
					$("#changeMeSubm3").css('display', 'block');
					$("#changeMeSubm4").css('display', 'none');
					$("#changeMeSubm5").css('display', 'none');
					$("#changeMeSubm6").css('display', 'none');
					$("#changeMeSubm7").css('display', 'none');
					$("#changeMeSubm8").css('display', 'none');
					$("#changeYouSubm2").css('display', 'none');
					$("#changeYouSubm5").css('display', 'none');
					$("#changeYouSubm6").css('display', 'none');
					$("#changeYouSubm8").css('display', 'none');
					break;
				case 4:
					$("#changeMeSubm1").css('display', 'none');
					$("#changeMeSubm2").css('display', 'none');
					$("#changeMeSubm3").css('display', 'none');
					$("#changeMeSubm4").css('display', 'block');
					$("#changeMeSubm5").css('display', 'none');
					$("#changeMeSubm6").css('display', 'none');
					$("#changeMeSubm7").css('display', 'none');
					$("#changeMeSubm8").css('display', 'none');
					$("#changeYouSubm2").css('display', 'none');
					$("#changeYouSubm5").css('display', 'none');
					$("#changeYouSubm6").css('display', 'none');
					$("#changeYouSubm8").css('display', 'none');
					break;
				case 5:
					$("#changeMeSubm1").css('display', 'none');
					$("#changeMeSubm2").css('display', 'none');
					$("#changeMeSubm3").css('display', 'none');
					$("#changeMeSubm4").css('display', 'none');
					$("#changeMeSubm5").css('display', 'block');
					$("#changeMeSubm6").css('display', 'none');
					$("#changeMeSubm7").css('display', 'none');
					$("#changeMeSubm8").css('display', 'none');
					$("#changeYouSubm2").css('display', 'none');
					$("#changeYouSubm5").css('display', 'none');
					$("#changeYouSubm6").css('display', 'none');
					$("#changeYouSubm8").css('display', 'none');
					break;
				case 6:
					$("#changeMeSubm1").css('display', 'none');
					$("#changeMeSubm2").css('display', 'none');
					$("#changeMeSubm3").css('display', 'none');
					$("#changeMeSubm4").css('display', 'none');
					$("#changeMeSubm5").css('display', 'none');
					$("#changeMeSubm6").css('display', 'block');
					$("#changeMeSubm7").css('display', 'none');
					$("#changeMeSubm8").css('display', 'none');
					$("#changeYouSubm2").css('display', 'none');
					$("#changeYouSubm5").css('display', 'none');
					$("#changeYouSubm6").css('display', 'none');
					$("#changeYouSubm8").css('display', 'none');
					break;
				case 7:
					$("#changeMeSubm1").css('display', 'none');
					$("#changeMeSubm2").css('display', 'none');
					$("#changeMeSubm3").css('display', 'none');
					$("#changeMeSubm4").css('display', 'none');
					$("#changeMeSubm5").css('display', 'none');
					$("#changeMeSubm6").css('display', 'none');
					$("#changeMeSubm7").css('display', 'block');
					$("#changeMeSubm8").css('display', 'none');
					$("#changeYouSubm2").css('display', 'none');
					$("#changeYouSubm5").css('display', 'none');
					$("#changeYouSubm6").css('display', 'none');
					$("#changeYouSubm8").css('display', 'none');
					break;
				case 8:
					$("#changeMeSubm1").css('display', 'none');
					$("#changeMeSubm2").css('display', 'none');
					$("#changeMeSubm3").css('display', 'none');
					$("#changeMeSubm4").css('display', 'none');
					$("#changeMeSubm5").css('display', 'none');
					$("#changeMeSubm6").css('display', 'none');
					$("#changeMeSubm7").css('display', 'none');
					$("#changeMeSubm8").css('display', 'block');
					$("#changeYouSubm2").css('display', 'none');
					$("#changeYouSubm5").css('display', 'none');
					$("#changeYouSubm6").css('display', 'none');
					$("#changeYouSubm8").css('display', 'none');
					break;
				case 9:
					$("#changeMeSubm1").css('display', 'none');
					$("#changeMeSubm2").css('display', 'none');
					$("#changeMeSubm3").css('display', 'none');
					$("#changeMeSubm4").css('display', 'none');
					$("#changeMeSubm5").css('display', 'none');
					$("#changeMeSubm6").css('display', 'none');
					$("#changeMeSubm7").css('display', 'none');
					$("#changeMeSubm8").css('display', 'none');
					$("#changeYouSubm2").css('display', 'block');
					$("#changeYouSubm5").css('display', 'none');
					$("#changeYouSubm6").css('display', 'none');
					$("#changeYouSubm8").css('display', 'none');
					break;
				case 10: 
					$("#changeMeSubm1").css('display', 'none');
					$("#changeMeSubm2").css('display', 'none');
					$("#changeMeSubm3").css('display', 'none');
					$("#changeMeSubm4").css('display', 'none');
					$("#changeMeSubm5").css('display', 'none');
					$("#changeMeSubm6").css('display', 'none');
					$("#changeMeSubm7").css('display', 'none');
					$("#changeMeSubm8").css('display', 'none');
					$("#changeYouSubm2").css('display', 'none');
					$("#changeYouSubm5").css('display', 'block');
					$("#changeYouSubm6").css('display', 'none');
					$("#changeYouSubm8").css('display', 'none');
					break;
				case 11: 
					$("#changeMeSubm1").css('display', 'none');
					$("#changeMeSubm2").css('display', 'none');
					$("#changeMeSubm3").css('display', 'none');
					$("#changeMeSubm4").css('display', 'none');
					$("#changeMeSubm5").css('display', 'none');
					$("#changeMeSubm6").css('display', 'none');
					$("#changeMeSubm7").css('display', 'none');
					$("#changeMeSubm8").css('display', 'none');
					$("#changeYouSubm2").css('display', 'none');
					$("#changeYouSubm5").css('display', 'none');
					$("#changeYouSubm6").css('display', 'block');
					$("#changeYouSubm8").css('display', 'none');
					break;
				case 12: 
					$("#changeMeSubm1").css('display', 'none');
					$("#changeMeSubm2").css('display', 'none');
					$("#changeMeSubm3").css('display', 'none');
					$("#changeMeSubm4").css('display', 'none');
					$("#changeMeSubm5").css('display', 'none');
					$("#changeMeSubm6").css('display', 'none');
					$("#changeMeSubm7").css('display', 'none');
					$("#changeMeSubm8").css('display', 'none');
					$("#changeYouSubm2").css('display', 'none');
					$("#changeYouSubm5").css('display', 'none');
					$("#changeYouSubm6").css('display', 'none');
					$("#changeYouSubm8").css('display', 'block');
					break;
			}
			
			if (flags) {
				first = $(kanteiBtn).attr('data-name-first');
				last = $(kanteiBtn).attr('data-name-last');
				firstKanji = $(kanteiBtn).attr('data-kanji-first');
				lastKanji = $(kanteiBtn).attr('data-kanji-last');
				birthday = $(kanteiBtn).attr('data-birthday');
			} else {
				first = $(kanteiBtn).attr('data-target-name-first');
				last = $(kanteiBtn).attr('data-target-name-last');
				firstKanji = $(kanteiBtn).attr('data-target-name-kanjifirst');
				lastKanji = $(kanteiBtn).attr('data-target-name-kanjilast');
				birthday = $(kanteiBtn).attr('data-target-birthday');
			}
					
			$('#furiganaFirst').val(first);
			$('#furiganaLast').val(last);
			$('#first').val(firstKanji);
			$('#last').val(lastKanji);
			$('#birthdatePartner').val(U.checkBirthday(birthday));
			gotoView(4);
			return false;
		});
	};
			
	var changeFormSubm = function(idType, classNamesK, classNamesF, classNamesB, storageKeys, menuNo, menuType) {
		$(idType).on('click', function() {
			var flags = menuType;
			var first = $('#furiganaFirst').val().replace(/\s|　/g, '');
			var last = $('#furiganaLast').val().replace(/\s|　/g, '');
			var firstKanji = $('#first').val().replace(/\s|　/g, '');
			var lastKanji = $('#last').val().replace(/\s|　/g, '');
			var birthday = $('#birthdatePartner').val();
			var b = birthday;
			b = b.substring(0, 4) + '年' + ' ' + b.substring(5, 7) + '月' + b.substring(8, 10) + '日';
			if (!first && !last && !firstKanji && !lastKanji) {
				var target = $('#target');
				if (target[0]) {
					firstKanji = target.attr('data-first'),
					lastKanji = target.attr('data-last'),
					first = target.attr('data-first-kana'),
					last = target.attr('data-last-kana'),
					birthday = target.attr('data-birthday');
					$(classNamesK).text(lastKanji + firstKanji);
					$(classNamesF).text(last + first);
					b = birthday.substring(0, 4) + '年' + ' ' + birthday.substring(5, 7) + '月' + birthday.substring(8, 10) + '日';
					$(classNamesB).text(b);
				} else {
					$(classNamesK).text('未設定');
					$(classNamesF).text('未設定');
					$(classNamesB).text('未設定');
				}
				U.removeLocalStorage('getters_' + menuNo + '_target');
			} else {
				$(classNamesK).text(lastKanji + ' ' + firstKanji);
				$(classNamesF).text(last + ' ' + first);
				$(classNamesB).text(b);
				U.saveLocalStorage(storageKeys, {
					'firstName': first,
					'lastName': last,
					'firstKanjis': firstKanji,
					'lastKanjis': lastKanji,
					'birthday': birthday
				});
			}
			$('.js_' + menuNo + 'NameCheck').hide();
			var button = $('#' + menuNo + 'Button');
			if (flags == true) {
				button.attr('data-name-first', first);
				button.attr('data-name-last', last);
				button.attr('data-kanji-first', firstKanji);
				button.attr('data-kanji-last', lastKanji);
				button.attr('data-birthday', birthday);
			} 
			if (flags == false) {
				button.attr('data-target-name-first', first);
				button.attr('data-target-name-last', last);
				button.attr('data-target-name-kanjifirst', firstKanji);
				button.attr('data-target-name-kanjilast', lastKanji);
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
					kanjiFirst = $this.attr('data-kanji-first'),
					kanjiLast = $this.attr('data-kanji-last'),
					birthday = $this.attr('data-birthday');
				if (!first || !last || !kanjiFirst || !kanjiLast || !birthday) {
					$(nameCheckCls).text('お名前を正しく入力してください').show();
					return false;
				}
				U.doQuestionFormWithSet1(
						strPremiumPre + _ticketCost + strPremiumPost,
						strButtonAfter,
						strButtonYes,
						'/report/7/menu/' + $this.attr('data-menu-id'),
						$('#rtoken').text(),
						$this.attr('data-role'),
						_ticketType,
						_ticketCost,
						first,
						last,
						kanjiFirst,
						kanjiLast,
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
					kanjiFirst = $this.attr('data-kanji-first'),
					kanjiLast = $this.attr('data-kanji-last'),
					birthday = $this.attr('data-birthday'),
					targetFirst = $this.attr('data-target-name-first'),
					targetLast = $this.attr('data-target-name-last'),
					targetKanjiFirst = $this.attr('data-target-name-kanjifirst'),
					targetKanjiLast = $this.attr('data-target-name-kanjilast'),
					targetBirthday = $this.attr('data-target-birthday');
				if (!first || !last || !kanjiFirst || !kanjiLast || !birthday) {
					$(nameCheckCls).text('お名前を正しく入力してください').show();
					return false;
				} else if (!targetFirst || !targetLast || !targetKanjiFirst || !targetKanjiLast || !targetBirthday) {
					$(nameCheckCls).text('お相手の情報を入力してください').show();
					return false;
				}
				U.doQuestionFormWithSet1(
						strPremiumPre + _ticketCost + strPremiumPost,
						strButtonAfter,
						strButtonYes,
						'/report/7/menu/' + $this.attr('data-menu-id'),
						$('#rtoken').text(),
						$this.attr('data-role'),
						_ticketType,
						_ticketCost,
						first,
						last,
						kanjiFirst,
						kanjiLast,
						birthday,
						bl,
						targetFirst,
						targetLast,
						targetKanjiFirst,
						targetKanjiLast,
						targetBirthday);
				return false;
			}
		});
	};
			
	setChangesForm('.js_changemes1', 'block', 'none', 1, '#menu1Button', true);
	setChangesForm('.js_changemes2', 'block', 'none', 2, '#menu2Button', true);
	setChangesForm('.js_changemes3', 'block', 'none', 3, '#menu3Button', true);
	setChangesForm('.js_changemes4', 'block', 'none', 4, '#menu4Button', true);
	setChangesForm('.js_changemes5', 'block', 'none', 5, '#menu5Button', true);
	setChangesForm('.js_changemes6', 'block', 'none', 6, '#menu6Button', true);
	setChangesForm('.js_changemes7', 'block', 'none', 7, '#menu5Button', true);
	setChangesForm('.js_changemes8', 'block', 'none', 8, '#menu6Button', true);
	
	setChangesForm('.js_changeyous2', 'none', 'block', 9, '#menu2Button', false);
	setChangesForm('.js_changeyous5', 'none', 'block', 10, '#menu5Button', false);
	setChangesForm('.js_changeyous6', 'none', 'block', 11, '#menu6Button', false);
	setChangesForm('.js_changeyous8', 'none', 'block', 12, '#menu8Button', false);
	
	changeFormSubm('#changeMeSubm1', '.js_kanjiFullNameMe1', '.js_kanaFullNameMe1', '.js_fullbirthMe1', 'getters_menu1_user', 'menu1', true);
	changeFormSubm('#changeMeSubm2', '.js_kanjiFullNameMe2', '.js_kanaFullNameMe2', '.js_fullbirthMe2', 'getters_menu2_user', 'menu2', true);
	changeFormSubm('#changeMeSubm3', '.js_kanjiFullNameMe3', '.js_kanaFullNameMe3', '.js_fullbirthMe3', 'getters_menu3_user', 'menu3', true);
	changeFormSubm('#changeMeSubm4', '.js_kanjiFullNameMe4', '.js_kanaFullNameMe4', '.js_fullbirthMe4', 'getters_menu4_user', 'menu4', true);
	changeFormSubm('#changeMeSubm5', '.js_kanjiFullNameMe5', '.js_kanaFullNameMe5', '.js_fullbirthMe5', 'getters_menu5_user', 'menu5', true);
	changeFormSubm('#changeMeSubm6', '.js_kanjiFullNameMe6', '.js_kanaFullNameMe6', '.js_fullbirthMe6', 'getters_menu6_user', 'menu6', true);
	changeFormSubm('#changeMeSubm7', '.js_kanjiFullNameMe7', '.js_kanaFullNameMe7', '.js_fullbirthMe7', 'getters_menu7_user', 'menu7', true);
	changeFormSubm('#changeMeSubm8', '.js_kanjiFullNameMe8', '.js_kanaFullNameMe8', '.js_fullbirthMe8', 'getters_menu8_user', 'menu8', true);
	
	changeFormSubm('#changeYouSubm2', '.js_kanjiFullNameYou2', '.js_kanaFullNameYou2', '.js_fullbirthYou2', 'getters_menu2_target', 'menu2', false);
	changeFormSubm('#changeYouSubm5', '.js_kanjiFullNameYou5', '.js_kanaFullNameYou5', '.js_fullbirthYou5', 'getters_menu5_target', 'menu5', false);
	changeFormSubm('#changeYouSubm6', '.js_kanjiFullNameYou6', '.js_kanaFullNameYou6', '.js_fullbirthYou6', 'getters_menu6_target', 'menu6', false);
	changeFormSubm('#changeYouSubm8', '.js_kanjiFullNameYou8', '.js_kanaFullNameYou8', '.js_fullbirthYou8', 'getters_menu8_target', 'menu8', false);

	setBtnPosts1('#menu1Button', '.js_menu1NameCheck', true);
	setBtnPosts2('#menu2Button', '.js_menu2NameCheck', false);
	setBtnPosts1('#menu3Button', '.js_menu3NameCheck', true);
	setBtnPosts1('#menu4Button', '.js_menu4NameCheck', true);
	setBtnPosts2('#menu5Button', '.js_menu5NameCheck', false);
	setBtnPosts2('#menu6Button', '.js_menu6NameCheck', false);
	setBtnPosts1('#menu7Button', '.js_menu7NameCheck', true);
	setBtnPosts2('#menu8Button', '.js_menu8NameCheck', false);

	// Set Data
	(function() {
		
		function setUserInfo(obj, stgKeys, classNamesK, classNamesF, classNamesB, flagTypes) {
			var user = U.findLocalStorage(stgKeys);
			if (user) {
				var flags = flagTypes;
				var first = user.firstName;
				var last = user.lastName;
				var firstKanji = user.firstKanjis;
				var lastKanji = user.lastKanjis;
				var b = user.birthday;
				console.log(user.birthday);
				var birthday = b.substring(0, 4) + '年' + b.substring(5, 7) + '月' + b.substring(8, 10) + '日';
				$(classNamesK).text(lastKanji + ' ' + firstKanji);
				$(classNamesF).text(last + ' ' + first);
				$(classNamesB).text(birthday);
				
				if (flags == true) {
				obj.attr('data-name-first', first);
				obj.attr('data-name-last', last);
				obj.attr('data-kanji-first', firstKanji);
				obj.attr('data-kanji-last', lastKanji);
				obj.attr('data-birthday', b);
				}
				
				if (flags == false) {
				obj.attr('data-target-name-first', first);
				obj.attr('data-target-name-last', last);
				obj.attr('data-target-name-kanjifirst', firstKanji);
				obj.attr('data-target-name-kanjilast', lastKanji);
				obj.attr('data-target-birthday', b);
				}
			}
		};
		
		setUserInfo($('#menu1Button'), 'getters_menu1_user', '.js_kanjiFullNameMe1', '.js_kanaFullNameMe1', '.js_fullbirthMe1', true);
		setUserInfo($('#menu2Button'), 'getters_menu2_user', '.js_kanjiFullNameMe2', '.js_kanaFullNameMe2', '.js_fullbirthMe2', true);
		setUserInfo($('#menu3Button'), 'getters_menu3_user', '.js_kanjiFullNameMe3', '.js_kanaFullNameMe3', '.js_fullbirthMe3', true);
		setUserInfo($('#menu4Button'), 'getters_menu4_user', '.js_kanjiFullNameMe4', '.js_kanaFullNameMe4', '.js_fullbirthMe4', true);
		setUserInfo($('#menu5Button'), 'getters_menu5_user', '.js_kanjiFullNameMe5', '.js_kanaFullNameMe5', '.js_fullbirthMe5', true);
		setUserInfo($('#menu6Button'), 'getters_menu6_user', '.js_kanjiFullNameMe6', '.js_kanaFullNameMe6', '.js_fullbirthMe6', true);
		setUserInfo($('#menu7Button'), 'getters_menu7_user', '.js_kanjiFullNameMe7', '.js_kanaFullNameMe7', '.js_fullbirthMe7', true);
		setUserInfo($('#menu8Button'), 'getters_menu8_user', '.js_kanjiFullNameMe8', '.js_kanaFullNameMe8', '.js_fullbirthMe8', true);
		
		setUserInfo($('#menu2Button'), 'getters_menu2_target', '.js_kanjiFullNameYou2', '.js_kanaFullNameYou2', '.js_fullbirthYou2', false);
		setUserInfo($('#menu5Button'), 'getters_menu5_target', '.js_kanjiFullNameYou5', '.js_kanaFullNameYou5', '.js_fullbirthYou5', false);
		setUserInfo($('#menu6Button'), 'getters_menu6_target', '.js_kanjiFullNameYou6', '.js_kanaFullNameYou6', '.js_fullbirthYou6', false);
		setUserInfo($('#menu8Button'), 'getters_menu8_target', '.js_kanjiFullNameYou8', '.js_kanaFullNameYou8', '.js_fullbirthYou8', false);
	
	}());	
			
}(jQuery));