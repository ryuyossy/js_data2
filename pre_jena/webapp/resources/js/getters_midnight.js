jQuery(function($) {

	var strPremiumFree = '無料で鑑定しますか？',
		strButtonAfter = 'あとで',
		strButtonYes = '鑑定する';
	
	var setClick = function(nums, types, number) {
		$(nums).on('click', function() {
			var first,
				last,
				birthday,
				firstKanji,
				lastKanji,
				flags = types,
				submTypes = number;
			kanteiBtn = $('#' + $(this).attr('data-button-id'));
			currentKanteiId = $(this).attr('data-kantei-id');
			if (flags) {
				firstKanji = kanteiBtn.attr('data-kanji-first');
				lastKanji = kanteiBtn.attr('data-kanji-last');
				first = kanteiBtn.attr('data-name-first');
				last =  kanteiBtn.attr('data-name-last');
				birthday = kanteiBtn.attr('data-birthday');
			} else {
				firstKanji = kanteiBtn.attr('data-target-name-kanjifirst');
				lastKanji = kanteiBtn.attr('data-target-name-kanjilast');
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
			$('#first').val(firstKanji);
			$('#last').val(lastKanji);
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
			var firstKanji = $('#first').val().replace(/\s|　/g, '');
			var lastKanji = $('#last').val().replace(/\s|　/g, '');
			var birthday = $('#birthdatePartner').val();
			var b = birthday;
			b = b.substring(0, 4) + '年' + ' ' + b.substring(5, 7) + '月' + b.substring(8, 10) + '日';
			if (!first && !last) {
				var target = $('#target');
				if (target[0]) {
					firstKanji = target.attr('data-first'),
					lastKanji = target.attr('data-last'),
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
				U.removeLocalStorage('getters_midnight_' + currentKanteiId + '_target');
			} else {
				U.saveLocalStorage('getters_midnight_' + currentKanteiId + stgType, {
					'firstKanjis': firstKanji,
					'lastKanjis': lastKanji,
					'firstName': first,
					'lastName': last,
					'birthday': birthday
				});
				$('.js_' + currentKanteiId + '_NameCheck').hide();
			}	
			if (flags) {
				$('.js_kanjiFullNameMe_' + currentKanteiId).text(lastKanji + ' ' + firstKanji);
				$('.js_kanaFullNameMe_' + currentKanteiId).text(last + ' ' + first);
				$('.js_fullbirthMe_' + currentKanteiId).text(b);
				kanteiBtn.attr('data-kanji-first', firstKanji);
				kanteiBtn.attr('data-kanji-last', lastKanji);
				kanteiBtn.attr('data-name-first', first);
				kanteiBtn.attr('data-name-last', last);
				kanteiBtn.attr('data-birthday', birthday);
			} else {
				$('.js_kanjiFullNameYou_' + currentKanteiId).text(lastKanji + ' ' + firstKanji);
				$('.js_kanaFullNameYou_' + currentKanteiId).text(last + ' ' + first);
				$('.js_fullbirthYou_' + currentKanteiId).text(b);
				kanteiBtn.attr('data-target-name-kanjifirst', firstKanji);
				kanteiBtn.attr('data-target-name-kanjilast', lastKanji);
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
					kanjiFirst = $this.attr('data-kanji-first'),
					kanjiLast = $this.attr('data-kanji-last'),
					birthday = $this.attr('data-birthday');
				if (!first || !last || !kanjiFirst || !kanjiLast || !birthday) {
					$(nameCheckCls).text('お名前を正しく入力してください').show();
					return false;
				}
				U.doQuestionFormWithSet1(
						strPremiumFree,
						strButtonAfter,
						strButtonYes,
						'/report/17/menu/free/' + $this.attr('data-menu-id') + '?skip=1',
						$('#rtoken').text(),
						$this.attr('data-role'),
						_ticketType,
						_ticketCost,
						first,
						last,
						kanjiFirst,
						kanjiLast,
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
				var kanjiFirst = $this.attr('data-kanji-first'),
					kanjiLast = $this.attr('data-kanji-last'),
					first = $this.attr('data-name-first'),
					last = $this.attr('data-name-last'),
					birthday = $this.attr('data-birthday'),
					targetKanjiFirst = $this.attr('data-target-name-kanjifirst'),
					targetKanjiLast = $this.attr('data-target-name-kanjilast'),
					targetFirst = $this.attr('data-target-name-first'),
					targetLast = $this.attr('data-target-name-last'),
					targetBirthday = $this.attr('data-target-birthday');
				if (!first || !last || !kanjiFirst || !kanjiLast || !birthday) {
					$(nameCheckCls).text('お名前を正しく入力してください').show();
					return false;
				} else if (!targetKanjiFirst || !targetKanjiLast || !targetFirst || !targetLast || !targetBirthday) {
					$(nameCheckCls).text('お相手の情報を入力してください').show();
					return false;
				}
				U.doQuestionFormWithSet1(
						strPremiumFree,
						strButtonAfter,
						strButtonYes,
						'/report/17/menu/free/' + $this.attr('data-menu-id') + '?skip=1',
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
	
	setClick('.js_num_1',true,1);
	setClick('.js_num_2',true,1);
	setClick('.js_num_3',false,2);
	setClick('.js_num_4',true,1);
	setClick('.js_num_5',true,1);
	setClick('.js_num_6',false,2);
	setClick('.js_num_7',true,1);

	changeFormSubm('#changeMeSubm', true, '_user');
	changeFormSubm('#changeYouSubm', false, '_target');
		
	setBtnPosts1('#menu1Button', '.js_menu1_NameCheck', true);
	setBtnPosts2('#menu2Button', '.js_menu2_NameCheck', false);
	setBtnPosts1('#menu3Button', '.js_menu3_NameCheck', true);
	setBtnPosts2('#menu4Button', '.js_menu4_NameCheck', false);
	setBtnPosts1('#menu5Button', '.js_menu5_NameCheck', true);

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
		
		setUserInfo($('#menu1Button'), 'getters_midnight_menu1_user', '.js_kanjiFullNameMe_menu1', '.js_kanaFullNameMe_menu1', '.js_fullbirthMe_menu1', true);
		setUserInfo($('#menu2Button'), 'getters_midnight_menu2_target', '.js_kanjiFullNameYou_menu2', '.js_kanaFullNameYou_menu2', '.js_fullbirthYou_menu2', false);
		setUserInfo($('#menu3Button'), 'getters_midnight_menu3_user', '.js_kanjiFullNameMe_menu3', '.js_kanaFullNameMe_menu3', '.js_fullbirthMe_menu3', true);
		setUserInfo($('#menu4Button'), 'getters_midnight_menu4_target', '.js_kanjiFullNameYou_menu4', '.js_kanaFullNameYou_menu4', '.js_fullbirthYou_menu4', false);
		setUserInfo($('#menu5Button'), 'getters_midnight_menu5_user', '.js_kanjiFullNameMe_menu5', '.js_kanaFullNameMe_menu5', '.js_fullbirthMe_menu5', true);
	}());
		
}(jQuery));