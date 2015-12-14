jQuery(function($) {
    	   
	//ポップアップ10 プレミアチケット消費
	var strPremiumPre = 'プレミアチケット',
		strPremiumPost = '枚でプレミア鑑定をしますか？',
		strButtonAfter = 'あとで',
		strButtonYes = '鑑定する';
		keyFlagDay = 'flgDay',
		keyFlagTicket = 'flgTicket';
			
	var setChangesForm = function(roleType, kanteiBtn) {
		$(roleType).on('click', function() {
			var first,
				last,
				birthday;
			$("#changeMeMeTitle").css('display', 'block');
			$("#changeMeSubm1").css('display', 'block');
			first = $(kanteiBtn).attr('data-name-first');
			last = $(kanteiBtn).attr('data-name-last');
			birthday = $(kanteiBtn).attr('data-birthday');		
			$('#furiganaFirst').val(first);
			$('#furiganaLast').val(last);
			$('#birthdatePartner').val(birthday);
			gotoView(4);
			return false;
		});
	};
			
	var changeFormSubm = function(idType, classNamesF, classNamesB, storageKeys, menuNo) {
		$(idType).on('click', function() {
			var first = $('#furiganaFirst').val().replace(/\s|　/g, ''),
				last = $('#furiganaLast').val().replace(/\s|　/g, ''),
				birthday = $('#birthdatePartner').val();
			var b = birthday;
			b = b.substring(0, 4) + '年' + ' ' + b.substring(5, 7) + '月' + b.substring(8, 10) + '日';
			$(classNamesF).text(last + ' ' + first);
			$(classNamesB).text(b);
			U.saveLocalStorage(storageKeys, {
				'firstName': first,
				'lastName': last,
				'birthday': birthday
			});
			$('.js_' + menuNo + 'NameCheck').hide();
			var button = $('#' + menuNo + 'Button');
			button.attr('data-name-first', first);
			button.attr('data-name-last', last);
			button.attr('data-birthday', birthday);
			gotoView(0);
			return false;
		});
	};
			
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
				if (!first || !last) {
					$(nameCheckCls).text('お名前を正しく入力してください').show();
					return false;
				}
				U.doQuestionFormSettings(
						strPremiumPre + _ticketCost + strPremiumPost, 
						strButtonAfter,
						strButtonYes, 
						'/report/8/menu/' + $this.attr('data-menu-id'), 
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

	setChangesForm('.js_changemes1', '#menu1Button');
	changeFormSubm('#changeMeSubm1', '.js_kanaFullNameMe1', '.js_fullbirthMe1', 'mariadari_menu1_user', 'menu1');
	setBtnPosts('#menu1Button', '.js_menu1NameCheck');

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
		
		setUserInfo($('#menu1Button'), 'mariadari_menu1_user', '.js_kanaFullNameMe1', '.js_fullbirthMe1');

	}());	

}(jQuery));