jQuery(function($) {

	var strPremiumPre = 'プレミアチケット',
		strPremiumPost = '枚でプレミア鑑定をしますか？',
		strButtonAfter = 'あとで',
		strButtonYes = '鑑定する',
		menuLenght = [1,2,3,4];
	
	menuLenght.forEach(function(element) {
		$('.js_num_' + element).on('click', function() {
			var first,
				last,
				firstKanji,
				lastKanji,
				birthday;
			kanteiBtn = $('#' + $(this).attr('data-button-id'));
			currentKanteiId = $(this).attr('data-kantei-id');
			first = kanteiBtn.attr('data-name-first');
			last =  kanteiBtn.attr('data-name-last');
			firstKanji = kanteiBtn.attr('data-kanji-first');
			lastKanji = kanteiBtn.attr('data-kanji-last');
			birthday = kanteiBtn.attr('data-birthday');
			$('#furiganaFirst').val(first);
			$('#furiganaLast').val(last);
			$('#first').val(firstKanji);
			$('#last').val(lastKanji);
			$('#birthdatePartner').val(U.checkBirthday(birthday));
			gotoView(4);
			return false;
		});
	});
	
	$('#changeMeSubm').on('click', function() {
		var first = $('#furiganaFirst').val().replace(/\s|　/g, ''),
			last = $('#furiganaLast').val().replace(/\s|　/g, ''),
			firstKanji = $('#first').val().replace(/\s|　/g, ''),
			lastKanji = $('#last').val().replace(/\s|　/g, ''),
			birthday = $('#birthdatePartner').val(),
			b = birthday;
		b = b.substring(0, 4) + '年' + ' ' + b.substring(5, 7) + '月' + b.substring(8, 10) + '日';
		if (!first && !last && !firstKanji && !lastKanji) {
			var user = jQuery('#user');
			first = user.attr('data-first');
			last = user.attr('data-last');
			firstKanji = user.attr('data-kanji-first'),
			lastKanji = user.attr('data-kanji-last'),
			birthday= user.attr('data-birthday');
			U.removeLocalStorage('secondHalf_' + currentKanteiId + '_user');
		} else {
			U.saveLocalStorage('secondHalf_' + currentKanteiId + '_user', {
				'firstName': first,
				'lastName': last,
				'firstKanjis': firstKanji,
				'lastKanjis': lastKanji,
				'birthday': birthday
			});
			$('.js_' + currentKanteiId + '_NameCheck').hide();
		}
		$('.js_kanaFullNameMe_' + currentKanteiId).text(last + ' ' + first);
		$('.js_kanjiFullNameMe_' + currentKanteiId).text(lastKanji + ' ' + firstKanji);
		$('.js_fullbirthMe_' + currentKanteiId).text(b);
		kanteiBtn.attr('data-name-first', first);
		kanteiBtn.attr('data-name-last', last);
		kanteiBtn.attr('data-kanji-first', firstKanji);
		kanteiBtn.attr('data-kanji-last', lastKanji);
		kanteiBtn.attr('data-birthday', birthday);
		gotoView(0);
		return false;
	});
		
	var setBtnPosts = function(idType, nameCheckCls, bl) {
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
						'/report/13/menu/' + $this.attr('data-menu-id'),
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
	
	setBtnPosts('#menu1Button', '.js_menu1_NameCheck', true);
	setBtnPosts('#menu2Button', '.js_menu2_NameCheck', true);
	setBtnPosts('#menu3Button', '.js_menu3_NameCheck', true);
	setBtnPosts('#menu4Button', '.js_menu4_NameCheck', true);
	
	// Set Data
	(function() {
		
		function setUserInfo(obj, stgKeys, classNamesK, classNamesF, classNamesB) {
			var user = U.findLocalStorage(stgKeys);
			if (user) {
				var first = user.firstName,
					last = user.lastName,
					firstKanji = user.firstKanjis,
					lastKanji = user.lastKanjis,
					b = user.birthday,
					birthday = b.substring(0, 4) + '年' + b.substring(5, 7) + '月' + b.substring(8, 10) + '日';
				$(classNamesK).text(lastKanji + ' ' + firstKanji);
				$(classNamesF).text(last + ' ' + first);
				$(classNamesB).text(birthday);
				obj.attr('data-name-first', first);
				obj.attr('data-name-last', last);
				obj.attr('data-kanji-first', firstKanji);
				obj.attr('data-kanji-last', lastKanji);
				obj.attr('data-birthday', b);
			}
		};
		
		setUserInfo($('#menu1Button'), 'secondHalf_menu1_user', '.js_kanjiFullNameMe_menu1', '.js_kanaFullNameMe_menu1', '.js_fullbirthMe_menu1');
		setUserInfo($('#menu2Button'), 'secondHalf_menu2_user', '.js_kanjiFullNameMe_menu2', '.js_kanaFullNameMe_menu2', '.js_fullbirthMe_menu2');
		setUserInfo($('#menu3Button'), 'secondHalf_menu3_user', '.js_kanjiFullNameMe_menu3', '.js_kanaFullNameMe_menu3', '.js_fullbirthMe_menu3');
		setUserInfo($('#menu4Button'), 'secondHalf_menu4_user', '.js_kanjiFullNameMe_menu4', '.js_kanaFullNameMe_menu4', '.js_fullbirthMe_menu4');
		
	}());
		
}(jQuery));