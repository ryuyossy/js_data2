jQuery(function($) {
    	   
	//ポップアップ10 プレミアチケット消費
	var strPremiumPre = 'プレミアチケット',
		strPremiumPost = '枚でプレミア鑑定をしますか？',
		strButtonAfter = 'あとで',
		strButtonYes = '鑑定する';
		keyFlagDay = 'flgDay',
		keyFlagTicket = 'flgTicket';
			
	var setChangesForm = function(roleType, dspBlock, types, kanteiBtn) {
		$(roleType).on('click', function() {
			var first,
				last,
				firstKanji,
				lastKanji,
				birthday,
				submTypes = types;
			$("#changeMeMeTitle").css('display', dspBlock);
			
			switch(submTypes) {
				case 1: 
					$("#changeMeSubm1").css('display', 'block');
					$("#changeMeSubm2").css('display', 'none');
					$("#changeMeSubm3").css('display', 'none');
					$("#changeMeSubm4").css('display', 'none');
					$("#changeMeSubm5").css('display', 'none');
					break;
				case 2: 
					$("#changeMeSubm1").css('display', 'none');
					$("#changeMeSubm2").css('display', 'block');
					$("#changeMeSubm3").css('display', 'none');
					$("#changeMeSubm4").css('display', 'none');
					$("#changeMeSubm5").css('display', 'none');
					break;
				case 3:
					$("#changeMeSubm1").css('display', 'none');
					$("#changeMeSubm2").css('display', 'none');
					$("#changeMeSubm3").css('display', 'block');
					$("#changeMeSubm4").css('display', 'none');
					$("#changeMeSubm5").css('display', 'none');
					break;
				case 4:
					$("#changeMeSubm1").css('display', 'none');
					$("#changeMeSubm2").css('display', 'none');
					$("#changeMeSubm3").css('display', 'none');
					$("#changeMeSubm4").css('display', 'block');
					$("#changeMeSubm5").css('display', 'none');
					break;
				case 5:
					$("#changeMeSubm1").css('display', 'none');
					$("#changeMeSubm2").css('display', 'none');
					$("#changeMeSubm3").css('display', 'none');
					$("#changeMeSubm4").css('display', 'none');
					$("#changeMeSubm5").css('display', 'block');
					break;
			}
			
			first = $(kanteiBtn).attr('data-name-first');
			last = $(kanteiBtn).attr('data-name-last');
			firstKanji = $(kanteiBtn).attr('data-kanji-first');
			lastKanji = $(kanteiBtn).attr('data-kanji-last');
			birthday = $(kanteiBtn).attr('data-birthday');
					
			$('#furiganaFirst').val(first);
			$('#furiganaLast').val(last);
			$('#first').val(firstKanji);
			$('#last').val(lastKanji);
			$('#birthdatePartner').val(birthday);
			gotoView(4);
			return false;
		});
	};
			
	var changeFormSubm = function(idType, classNamesK, classNamesF, classNamesB, storageKeys, menuNo) {
		$(idType).on('click', function() {
			var first = $('#furiganaFirst').val().replace(/\s|　/g, '');
			var last = $('#furiganaLast').val().replace(/\s|　/g, '');
			var firstKanji = $('#first').val().replace(/\s|　/g, '');
			var lastKanji = $('#last').val().replace(/\s|　/g, '');
			var birthday = $('#birthdatePartner').val();
			var b = birthday;
			b = b.substring(0, 4) + '年' + ' ' + b.substring(5, 7) + '月' + b.substring(8, 10) + '日';
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
			$('.js_' + menuNo + 'NameCheck').hide();
			var button = $('#' + menuNo + 'Button');
			button.attr('data-name-first', first);
			button.attr('data-name-last', last);
			button.attr('data-kanji-first', firstKanji);
			button.attr('data-kanji-last', lastKanji);
			button.attr('data-birthday', birthday);
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
						'/report/9/menu/' + $this.attr('data-menu-id'),
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

	setChangesForm('.js_changemes1', 'block', 1, '#menu1Button');
	setChangesForm('.js_changemes2', 'block', 2, '#menu2Button');
	setChangesForm('.js_changemes3', 'block', 3, '#menu3Button');
	setChangesForm('.js_changemes4', 'block', 4, '#menu4Button');
	setChangesForm('.js_changemes5', 'block', 5, '#menu5Button');
	
	changeFormSubm('#changeMeSubm1', '.js_kanjiFullNameMe1', '.js_kanaFullNameMe1', '.js_fullbirthMe1', 'klara_menu1_user', 'menu1');
	changeFormSubm('#changeMeSubm2', '.js_kanjiFullNameMe2', '.js_kanaFullNameMe2', '.js_fullbirthMe2', 'klara_menu2_user', 'menu2');
	changeFormSubm('#changeMeSubm3', '.js_kanjiFullNameMe3', '.js_kanaFullNameMe3', '.js_fullbirthMe3', 'klara_menu3_user', 'menu3');
	changeFormSubm('#changeMeSubm4', '.js_kanjiFullNameMe4', '.js_kanaFullNameMe4', '.js_fullbirthMe4', 'klara_menu4_user', 'menu4');
	changeFormSubm('#changeMeSubm5', '.js_kanjiFullNameMe5', '.js_kanaFullNameMe5', '.js_fullbirthMe5', 'klara_menu5_user', 'menu5');
	
	setBtnPosts('#menu1Button', '.js_menu1NameCheck', true);
	setBtnPosts('#menu2Button', '.js_menu2NameCheck', true);
	setBtnPosts('#menu3Button', '.js_menu3NameCheck', true);
	setBtnPosts('#menu4Button', '.js_menu4NameCheck', true);
	setBtnPosts('#menu5Button', '.js_menu5NameCheck', true);

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
		
		setUserInfo($('#menu1Button'), 'klara_menu1_user', '.js_kanjiFullNameMe1', '.js_kanaFullNameMe1', '.js_fullbirthMe1');
		setUserInfo($('#menu2Button'), 'klara_menu2_user', '.js_kanjiFullNameMe2', '.js_kanaFullNameMe2', '.js_fullbirthMe2');
		setUserInfo($('#menu3Button'), 'klara_menu3_user', '.js_kanjiFullNameMe3', '.js_kanaFullNameMe3', '.js_fullbirthMe3');
		setUserInfo($('#menu4Button'), 'klara_menu4_user', '.js_kanjiFullNameMe4', '.js_kanaFullNameMe4', '.js_fullbirthMe4');
		setUserInfo($('#menu5Button'), 'klara_menu5_user', '.js_kanjiFullNameMe5', '.js_kanaFullNameMe5', '.js_fullbirthMe5');

	}());	
			
}(jQuery));