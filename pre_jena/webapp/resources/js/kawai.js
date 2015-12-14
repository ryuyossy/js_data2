jQuery(function($) {

	var strPremiumPre = 'プレミアチケット',
		strPremiumPost = '枚でプレミア鑑定をしますか？',
		strButtonAfter = 'あとで',
		strButtonYes = '鑑定する',
		menuType = ['menu1', 'menu2', 'menu3', 'menu4'];
	
	var setClick = function(nums, types, number) {
		$(nums).on('click', function() {
			var first,
				last,
				firstKanji,
				lastKanji,
				birthday,
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
			var flags = boolType,
				firstKanji = $('#first').val().replace(/\s|　/g, ''),
				lastKanji = $('#last').val().replace(/\s|　/g, ''),
				first = $('#furiganaFirst').val().replace(/\s|　/g, ''),
				last = $('#furiganaLast').val().replace(/\s|　/g, ''),
				birthday = $('#birthdatePartner').val(),
				b = birthday;
			b = b.substring(0, 4) + '年' + ' ' + b.substring(5, 7) + '月' + b.substring(8, 10) + '日';
			if (!first && !last && !firstKanji && !lastKanji) {
				var target = $('#target');
				if (target[0]) {
					firstKanji = target.attr('data-first');
					lastKanji = target.attr('data-last');
					first = target.attr('data-first-kana');
					last = target.attr('data-last-kana');
					birthday = target.attr('data-birthday');
					$('.js_kanjiFullNameYou_' + currentKanteiId).text(lastKanji + ' ' + firstKanji);
					$('.js_kanaFullNameYou_' + currentKanteiId).text(last + ' ' + first);
					b = birthday.substring(0, 4) + '年' + ' ' + birthday.substring(5, 7) + '月' + birthday.substring(8, 10) + '日';
					$('.js_fullbirthYou_' + currentKanteiId).text(b);
				} else {
					$('.js_kanjiFullNameYou_' + currentKanteiId).text('未設定');
					$('.js_kanaFullNameYou_' + currentKanteiId).text('未設定');
					$('.js_fullbirthYou_' + currentKanteiId).text('未設定');
				}
				U.removeLocalStorage('kawai_' + currentKanteiId + '_target');
			} else {
				U.saveLocalStorage('kawai_' + currentKanteiId + stgType, {
					'firstName': first,
					'lastName': last,
					'firstKanjis': firstKanji,
					'lastKanjis': lastKanji,
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
	
	var setBtnPosts = function(idType, nameCheckCls, bl) {
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
				}
				if(!bl) {
					if (!targetKanjiFirst || !targetKanjiLast || !targetFirst || !targetLast || !targetBirthday) {
						$(nameCheckCls).text('お相手の情報を入力してください').show();
						return false;
					}
				}
				U.doQuestionFormWithSet1(
						strPremiumPre + _ticketCost + strPremiumPost,
						strButtonAfter,
						strButtonYes,
						'/report/14/menu/' + $this.attr('data-menu-id'),
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
	
	var settings = function() {
		for (var i = 1; i < 9; i++) {
			if (i == 3) {
				setClick('.js_num_' + [i], false, 2);
				changeFormSubm('#changeYouSubm', false, '_target');
			} else {
				setClick('.js_num_' + [i], true, 1);
				changeFormSubm('#changeMeSubm', true, '_user');
			}
		}
		menuType.forEach(function(elem) {
			var targetFlg = elem == 'menu2' ? false : true;
			setBtnPosts('#' + elem + '_Button', '.js_' + elem + '_NameCheck', targetFlg);
		});
	};
	
	settings();

	// Set Data
	(function() {
				
		function setUserInfo(obj, stgKeys, classNamesK, classNamesF, classNamesB, flagTypes) {
			var user = U.findLocalStorage(stgKeys);
			if (user) {
				var flags = flagTypes,
					first = user.firstName,
					last = user.lastName,
					firstKanji = user.firstKanjis,
					lastKanji = user.lastKanjis,
					b = user.birthday,
					birthday = b.substring(0, 4) + '年' + b.substring(5, 7) + '月' + b.substring(8, 10) + '日';
				$(classNamesK).text(lastKanji + ' ' + firstKanji);
				$(classNamesF).text(last + ' ' + first);
				$(classNamesB).text(birthday);
				
				if (flags) {
					obj.attr('data-name-first', first);
					obj.attr('data-name-last', last);
					obj.attr('data-kanji-first', firstKanji);
					obj.attr('data-kanji-last', lastKanji);
					obj.attr('data-birthday', b);
				} else {
					obj.attr('data-target-name-first', first);
					obj.attr('data-target-name-last', last);
					obj.attr('data-target-name-kanjifirst', firstKanji);
					obj.attr('data-target-name-kanjilast', lastKanji);
					obj.attr('data-target-birthday', b);
				}
			}
		};
		
		function setInfo() {
			menuType.forEach(function(elem) {
				setUserInfo($('#' + elem + '_Button'), 'kawai_' + elem + '_user', '.js_kanjiFullNameMe_' + elem, '.js_kanaFullNameMe_' + elem, '.js_fullbirthMe_' + elem, true);
				setUserInfo($('#' + elem + '_Button'), 'kawai_' + elem + '_target', '.js_kanjiFullNameYou_' + elem, '.js_kanaFullNameYou_' + elem, '.js_fullbirthYou_' + elem, false);
			});
		}
		
		setInfo();
		
	}());
		
}(jQuery));