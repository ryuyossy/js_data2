(function() {
	var $ = window.$ = AMB.chikuwa;
	var lastBdValue = null;

	var currentKanteiInfo = null;

	/**
	 * register content ready listener.
	 * (DOMContentLoaded)
	 */
	$.ready = function(cb) {
		var doc = document;
		var readyState = doc.readyState;
		if (readyState === 'complete' || readyState === 'loaded') cb();
		var x = function () {
			cb.call($(doc));
			document.removeEventListener('DOMContentLoaded', x, false);
		};
		document.addEventListener('DOMContentLoaded', x, false);
	 };	
	
	 /**
	  * 
	  * Ticket names
	  * 
	  */
	 var ticketNames = {
		silver: 'シルバー',
		gold: 'ゴールド',
		premiere: 'プレミア'
	};
	 
	 /**
	  *  Zodiac strings
	  */
	 var ZODIAC = {        
		0: 'みずがめ座',
		1: 'うお座',
		2: 'おひつじ座',
		3: 'おうし座',
		4: 'ふたご座',
		5: 'かに座',
		6: 'しし座',
		7: 'おとめ座',
		8: 'てんびん座',
		9: 'さそり座',
		10: 'いて座',
		11: 'やぎ座',
		/* Undefined */
		12: '-'
	};
	 
	 /**
	  *  Zodiac id getter
	  */
	 function getId(month, day) {
		if ((month == 1 && 21 <= day) || (month == 2 && day <= 18)) {
			return 0;
		} else if ((month == 2 && 19 <= day) || (month == 3 && day <= 20)) {
			return 1;
		} else if ((month == 3 && 21 <= day) || (month == 4 && day <= 19)) {
			return 2;
		} else if ((month == 4 && 20 <= day) || (month == 5 && day <= 20)) {
			return 3;
		} else if ((month == 5 && 21 <= day) || (month == 6 && day <= 21)) {
			return 4;
		} else if ((month == 6 && 22 <= day) || (month == 7 && day <= 22)) {
			return 5;
		} else if ((month == 7 && 23 <= day) || (month == 8 && day <= 22)) {
			return 6;
		} else if ((month == 8 && 23 <= day) || (month == 9 && day <= 22)) {
			return 7;
		} else if ((month == 9 && 23 <= day) || (month == 10 && day <= 23)) {
			return 8;
		} else if ((month == 10 && 24 <= day) || (month == 11 && day <= 22)) {
			return 9;
		} else if ((month == 11 && 23 <= day) || (month == 12 && day <= 21)) {
			return 10;
		} else if ((month == 12 && 22 <= day) || (month == 1 && day <= 20)) {
			return 11;
		}
		return 12;
	}

	function setBtnAllActive () {
		jQuery('.btn').on('touchstart', function (e) {
			jQuery(this).addClass('active');
		});
		jQuery('.btn').on('touchend touchcancel', function (e) {
			jQuery(this).removeClass('active');
		});
	}
	jQuery(window).load(setBtnAllActive);
	
	function btnOver() {
		jQuery('.js_touchOver').on('touchstart', function() {
			jQuery(this).addClass("touchOver");
		});
		jQuery('.js_touchOver').on('touchend touchcancel', function() {
			jQuery(this).removeClass("touchOver");
		});
	}
	jQuery(window).load(btnOver);
	
	window.U = (function() {
		var U = function() {			
			this.page = document.getElementById('page');
			this.ua = navigator.userAgent;
			this.iphone = ~this.ua.indexOf('iPhone') || ~this.ua.indexOf('iPod');
			this.ipad = ~this.ua.indexOf('iPad');
			this.ios = this.iphone || this.ipad;
			// Detect if this is running as a fullscreen app from the homescreen
			this.fullscreen = window.navigator.standalone;
			// Detect if this is an app
			this.isAppli = ~this.ua.indexOf("CaWebApp");
			this.android = ~this.ua.indexOf('Android');
			this.androidChrome = this.android && ~this.ua.indexOf('Chrome');
			this.lastWidth = 0;
		};

		U.prototype.setupScroll = function (YTarget) {			
			// Start out by adding the height of the location bar to the width, so that
			// we can scroll past it
			var ctx = this;
//			if (ctx.findLocalStorage('linkAnchor') !== '') {
//				this.removeLocalStorage('linkAnchor');
//				return false;
//			}
			if ((this.ios || this.androidChrome) && this.page) {				
				
				// iOS reliably returns the innerWindow size for documentElement.clientHeight
				// but window.innerHeight is sometimes the wrong value after rotating
				// the orientation
				var _docHeight = document.documentElement.clientHeight,
					_docWidth = document.documentElement.clientWidth,
					height = _docHeight > _docWidth ? _docHeight : _docWidth;
				// Only add extra padding to the height on iphone / ipod, since the ipad
				// browser doesn't scroll off the location bar.
				if (this.iphone && !this.fullscreen && !this.isAppli) height += 60;
				this.page.style.height = height + 'px';

				this.lastWidth = this.page.offsetWidth;
				
				setTimeout(function () {
					window.scrollTo(0, YTarget || 0);
				}, 0);

				setTimeout(function () {
					if (!window.pageYOffset) {
						window.scrollTo(0, YTarget || 0);
					}
				}, 1000);
			} else {
				window.scrollTo(0, 0); // reset in case prev not scrolled
				var nPageH = document.height > document.width ? document.height : document.width;
				var nViewH = window.outerHeight > window.outerWidth ? window.outerHeight : window.outerWidth;
				if (nViewH > nPageH) {
					nViewH = nViewH / window.devicePixelRatio;
					$('BODY').css({ 'height': nViewH + 'px' });
				}
				this.lastWidth = document.width;
				setTimeout(scrollTo, 0, YTarget || 0, 1);
			}
		};
		
		U.prototype.initSetupScroll = function (YTarget) {								

			/*var ctx = this;
		
			(window.onresize = function () {				
				var pageWidth = ctx.page ? ctx.page.offsetWidth : document.width;
				// Android doesn't support orientation change, so check for when the width
				// changes to figure out when the orientation changes
				if (ctx.lastWidth == pageWidth) return;
				ctx.lastWidth = pageWidth;
				ctx.setupScroll();
			})();*/

			this.setupScroll(YTarget);
		};
		
		/**
		 * Load an arbitrary script with a callback
		 */
		U.prototype.loadScript = function (url, callback) {

			var script = document.createElement("script");
			script.type = "text/javascript";
			script.async = false;

			script.onload = function () {
				callback();
			};

			script.src = url;
			document.getElementsByTagName("body")[0].appendChild(script);

		};
		
		U.prototype.appendStyle = function(url) {
			var link = document.createElement('link');
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = url;
			
			document.getElementsByTagName("head")[0].appendChild(link);
		};
		
		U.prototype.getCallback = function(callback, number) {
			var ctx = this;
			this.scriptsLoaded = 0;
			return function () {
				if (++ctx.scriptsLoaded >= number) {
					callback();
				}
			};
		};
		
		/**
		 * 
		 * Updates the zodiac
		 * 
		 * @param month
		 * @param day
		 * @param target
		 */
		U.prototype.updateZodiac = function(month, day, target) {				    							
			
			var id = getId(month, day);
			
			$('#' + target).inner(ZODIAC[id]);
		};
		
		U.prototype.targetZodiac = function(month, day, target) {				    							
			
			var id = getId(month, day);
			
			$('#' + target).inner(ZODIAC[id] + 'の運勢を見る');
		};
		/**
		 * 
		 * modalの半透明の背景をon/off
		 * 
		 * @param on
		 */
		U.prototype.toggleOverlay = function(on) {
			if (on) {
				$("#blockOverlay").css({'display': 'block'});
			} else {
				$("#blockOverlay").css({'display': 'none'});
			}
		};
		
		//画像キャッシュ タイムスタンプ付与
		U.prototype.imgTimeStamp = function(imgId) {
			var timestamp = new Date().getTime();
			$(imgId).attr('src', $(imgId).attr('src') + '?' + timestamp);
		};
		
		//ブラウザバック後 popup削除処理 ボタン無効化削除 rtoken追加処理
		U.prototype.browseBack = function() {
			var ua = window.navigator.userAgent.toLowerCase();
			if (ua.indexOf('chrome') !== -1 || ua.indexOf('android') !== -1) {
				window.unonload = function() {
					var x1 = $('#questionForm'),
						x2 = $("#question");
					x1.css({display: 'none'});
					x2.css({display: 'none'});
					$("#blockOverlay").css({'display': 'none'});
					jQuery('#editForm').removeAttr('disabled');
					jQuery.getJSON("/api/token/rtoken", function(json) {
						if (json) {
							jQuery('#rtoken').text(json.rtoken);
						}
					});
				};
			} else {
				window.onpageshow = function(e) {
					if (e.persisted) {
						var x1 = $('#questionForm'),
							x2 = $("#question");
						x1.css({display: 'none'});
						x2.css({display: 'none'});
						$("#blockOverlay").css({'display': 'none'});
						jQuery('#editForm').removeAttr('disabled');
						jQuery.getJSON("/api/token/rtoken", function(json) {
							if (json) {
								jQuery('#rtoken').text(json.rtoken);
							}
						});
					}
				};
			}
		};
		
		/**
		 * 
		 * YES/NOのポップアップ
		 * 
		 * @param questionString
		 * @param cancelString
		 * @param proceedString
		 * @param proceedTarget
		 */
		U.prototype.doQuestionWithSettings = function(
		 questionString, cancelString, proceedString, proceedTarget, proceedAnchor, proceedUserticket, proceedTicketcount, proceedTicketypes
		) {
			var ctx = this;
			var x = $("#question");
			x.find('.questionText').inner(questionString);
			$('#edit').inner(proceedString).on('click', function() {
				if (String(proceedUserticket)) { ctx.saveLocalStorage('usrTicket', String(proceedUserticket));}
				if (String(proceedTicketcount)) { ctx.saveLocalStorage('ticketCount', String(proceedTicketcount));}
				if (String(proceedTicketypes)) { ctx.saveLocalStorage('ticketTypes', String(proceedTicketypes));}
				if (proceedAnchor) ctx.saveLocalStorage('linkAnchor', proceedAnchor);
				window.location = proceedTarget;
			});
			$('#after').inner(cancelString);
			x.css({display: 'block'});
			this.toggleOverlay(true);
		};

		// YES/NOのポップアップ 1
		U.prototype.doQuestionFormWithSettings = function(
		 questionString, cancelString, proceedString,
		 proceedAction, proceedToken,
		 proceedRole, proceedType, proceedCost,
		 proceedFirstName, proceedLastName, proceedGender,
		 proceedTargetFirstName, proceedTargetLastName, proceedTargetGender
		) {
			var x = jQuery('#questionForm');
			x.find('.questionText').html(questionString);
			$('#editForm').inner(proceedString).on('touchstart', function() {
				var self = $(this);
				x.find('.formWrap').attr('action', proceedAction);
				x.find('.formHidden').attr('value', proceedToken);
				x.find('#editForm').attr('data-role', proceedRole)
					.attr('data-ticket-type', proceedType)
					.attr('data-ticket-cost', proceedCost);
	
				x.find('#cost').attr('value', proceedCost);
				x.find('#ueken_user_first').attr('value', proceedFirstName);
				x.find('#ueken_user_last').attr('value', proceedLastName);
				x.find('#ueken_user_gender').attr('value', proceedGender);
				x.find('#ueken_match_target_first').attr('value', proceedTargetFirstName);
				x.find('#ueken_match_target_last').attr('value', proceedTargetLastName);
				x.find('#ueken_match_target_gender').attr('value', proceedTargetGender);
				$('#formMain').submit(function() {
					$(self).attr('disabled', 'disabled');
				});
			});
			$('#afterForm').text(cancelString);
			x.css({display: 'block'});
			this.toggleOverlay(true);
		};
		
		// YES/NOのポップアップ 2
		U.prototype.doQuestionFormBirthWithSettings = function(
		 questionString, cancelString, proceedString,
		 proceedAction, proceedToken,
		 proceedRole, proceedType, proceedCost,
		 proceedFirstName, proceedLastName, proceedBirthday,
		 proceedTargetFirstName, proceedTargetLastName, proceedTargetBirthday
		) {
			var x = jQuery('#questionForm');
			x.find('.questionText').html(questionString);
			$('#editForm').inner(proceedString).on('touchstart', function() {
				var self = $(this);
				x.find('.formWrap').attr('action', proceedAction);
				x.find('.formHidden').attr('value', proceedToken);
				x.find('#editForm').attr('data-role', proceedRole)
					.attr('data-ticket-type', proceedType)
					.attr('data-ticket-cost', proceedCost);
				x.find('#ueken_user_first').attr('value', proceedFirstName);
				x.find('#ueken_user_last').attr('value', proceedLastName);
				x.find('#ueken_user_birthday').attr('value', proceedBirthday);
				x.find('#ueken_match_target_first').attr('value', proceedTargetFirstName);
				x.find('#ueken_match_target_last').attr('value', proceedTargetLastName);
				x.find('#ueken_match_target_birthday').attr('value', proceedTargetBirthday);
				$('#formMain').submit(function() {
					$(self).attr('disabled', 'disabled');
				});
			});
			$('#afterForm').text(cancelString);
			x.css({display: 'block'});
			this.toggleOverlay(true);
		};
		
		// YES/NOのポップアップ 3
		U.prototype.doQuestionFormSettings = function(
		 questionString, cancelString, proceedString,
		 proceedAction, proceedToken,
		 proceedRole, proceedType, proceedCost,
		 proceedFirstName, proceedLastName, proceedBirthday
		) {
			var x = jQuery('#questionForm');
			x.find('.questionText').html(questionString);
			$('#editForm').inner(proceedString).on('touchstart', function() {
				var self = $(this);
				x.find('.formWrap').attr('action', proceedAction);
				x.find('.formHidden').attr('value', proceedToken);
				x.find('#editForm').attr('data-role', proceedRole)
					.attr('data-ticket-type', proceedType)
					.attr('data-ticket-cost', proceedCost);
				x.find('#firstNameKana').attr('value', proceedFirstName);
				x.find('#lastNameKana').attr('value', proceedLastName);
				x.find('#birthday').attr('value', proceedBirthday);
				$('#formMain').submit(function() {
					$(self).attr('disabled', 'disabled');
				});
			});
			$('#afterForm').text(cancelString);
			x.css({display: 'block'});
			this.toggleOverlay(true);
		};
		
		// YES/NOのポップアップ 4
		U.prototype.doQuestionFormWithSet1 = function(
				questionString,
				cancelString,
				proceedString,
				proceedAction,
				proceedToken,
				proceedRole,
				proceedType,
				proceedCost,
				proceedFirstName,
				proceedLastName,
				proceedFirst,
				proceedLast,
				proceedBirthday,
				proceedCheck,
				proceedTargetFirstName,
				proceedTargetLastName,
				proceedTargetKanjiFirst,
				proceedTargetKanjiLast,
				proceedTargetBirthday
		) {
			var x = $('#questionForm');
			x.find('.questionText').text(questionString);
			$('#editForm').text(proceedString).on('touchstart', function() {
				var flags = proceedCheck,
					self = $(this);
				x.find('.formWrap').attr('action', proceedAction);
				x.find('.formHidden').attr('value', proceedToken);
				x.find('#editForm').attr('data-role', proceedRole)
					.attr('data-ticket-type', proceedType)
					.attr('data-ticket-cost', proceedCost);
				if (flags == true) {
					x.find('#firstNameKana').attr('value', proceedFirstName);
					x.find('#lastNameKana').attr('value', proceedLastName);
					x.find('#firstName').attr('value', proceedFirst);
					x.find('#lastName').attr('value', proceedLast);
					x.find('#birthday').attr('value', proceedBirthday);
				} else {
					x.find('#firstNameKana').attr('value', proceedFirstName);
					x.find('#lastNameKana').attr('value', proceedLastName);
					x.find('#firstName').attr('value', proceedFirst);
					x.find('#lastName').attr('value', proceedLast);
					x.find('#birthday').attr('value', proceedBirthday);
					x.find('#targetFirstNameKana').attr('value', proceedTargetFirstName);
					x.find('#targetLastNameKana').attr('value', proceedTargetLastName);
					x.find('#targetFirstName').attr('value', proceedTargetKanjiFirst);
					x.find('#targetLastName').attr('value', proceedTargetKanjiLast);
					x.find('#targetBirthday').attr('value', proceedTargetBirthday);
				}
				$('#formMain').submit(function() {
					$(self).attr('disabled', 'disabled');
				});
			});
			$('#afterForm').text(cancelString);
			x.css({display: 'block'});
			this.toggleOverlay(true);
		};
		
		// YES/NOのポップアップ 5
		U.prototype.doQuestionFormWithSet2 = function(
				questionString,
				cancelString,
				proceedString,
				proceedAction,
				proceedToken,
				proceedRole,
				proceedType,
				proceedCost,
				proceedFirstName,
				proceedLastName,
				proceedBirthday,
				proceedCheck,
				proceedTargetFirstName,
				proceedTargetLastName,
				proceedTargetBirthday
		) {
			var x = $('#questionForm');
			x.find('.questionText').text(questionString);
			$('#editForm').text(proceedString).on('touchstart', function() {
				var flags = proceedCheck,
					self = $(this);
				x.find('.formWrap').attr('action', proceedAction);
				x.find('.formHidden').attr('value', proceedToken);
				x.find('#editForm').attr('data-role', proceedRole)
					.attr('data-ticket-type', proceedType)
					.attr('data-ticket-cost', proceedCost);
				if (flags == true) {
					x.find('#firstNameKana').attr('value', proceedFirstName);
					x.find('#lastNameKana').attr('value', proceedLastName);
					x.find('#birthday').attr('value', proceedBirthday);
				} else {
					x.find('#firstNameKana').attr('value', proceedFirstName);
					x.find('#lastNameKana').attr('value', proceedLastName);
					x.find('#birthday').attr('value', proceedBirthday);
					x.find('#targetFirstNameKana').attr('value', proceedTargetFirstName);
					x.find('#targetLastNameKana').attr('value', proceedTargetLastName);
					x.find('#targetBirthday').attr('value', proceedTargetBirthday);
				}
				$('#formMain').submit(function() {
					$(self).attr('disabled', 'disabled');
				});
			});
			$('#afterForm').text(cancelString);
			x.css({display: 'block'});
			this.toggleOverlay(true);
		};
		
		// YES/NOのポップアップ 6
		U.prototype.doQuestionFormLoveWithSettings = function(
		 questionString, cancelString, proceedString,
		 proceedAction, proceedToken,
		 proceedRole, proceedType,
		 proceedCost, proceedHistoryUri
		) {
			var x = jQuery('#questionForm');
			x.find('.questionText').html(questionString);
			$('#editForm').inner(proceedString).on('touchstart', function() {
				var self = $(this);
				x.find('.formWrap').attr('action', proceedAction);
				x.find('.formHidden').attr('value', proceedToken);
				x.find('#editForm').attr('data-role', proceedRole)
					.attr('data-ticket-type', proceedType)
					.attr('data-ticket-cost', proceedCost)
					.attr('data-history-uri', proceedHistoryUri)
					.attr('data-reading-uri', proceedAction);
				$('#formMain').submit(function() {
					$(self).attr('disabled', 'disabled');
				});
			});
			$('#afterForm').text(cancelString);
			x.css({display: 'block'});
			this.toggleOverlay(true);
		};

		// YES/NOのポップアップ 4
		U.prototype.doQuestionFormTargetSet = function(
				questionString,
				cancelString,
				proceedString,
				proceedAction,
				proceedToken,
				proceedRole,
				proceedType,
				proceedCost,
				proceedCheck,
				proceedTargetFirstName,
				proceedTargetLastName,
				proceedTargetKanjiFirst,
				proceedTargetKanjiLast,
				proceedTargetBirthday
		) {
			var x = $('#questionForm');
			x.find('.questionText').text(questionString);
			$('#editForm').text(proceedString).on('touchstart', function() {
				var flags = proceedCheck,
					self = $(this);
				x.find('.formWrap').attr('action', proceedAction);
				x.find('.formHidden').attr('value', proceedToken);
				x.find('#editForm').attr('data-role', proceedRole)
					.attr('data-ticket-type', proceedType)
					.attr('data-ticket-cost', proceedCost);
				if (flags == true) {
					x.find('#firstNameKana').attr('value', proceedFirstName);
					x.find('#lastNameKana').attr('value', proceedLastName);
					x.find('#firstName').attr('value', proceedFirst);
					x.find('#lastName').attr('value', proceedLast);
					x.find('#birthday').attr('value', proceedBirthday);
				} else {
					x.find('#targetFirstNameKana').attr('value', proceedTargetFirstName);
					x.find('#targetLastNameKana').attr('value', proceedTargetLastName);
					x.find('#targetFirstName').attr('value', proceedTargetKanjiFirst);
					x.find('#targetLastName').attr('value', proceedTargetKanjiLast);
					x.find('#targetBirthday').attr('value', proceedTargetBirthday);
				}
				$('#formMain').submit(function() {
					$(self).attr('disabled', 'disabled');
				});
			});
			$('#afterForm').text(cancelString);
			x.css({display: 'block'});
			this.toggleOverlay(true);
		};
		
		
		//コインゲット用
		U.prototype.doGetCoin = function(num) {
			var x = $("#getCoin");
			x.css({marginTop: '-180px'});
			
			jQuery('#getCoin').addClass('coin_' + num);
			$('#getCoinClose').text('閉じる');
			x.css({display: 'block'});
			this.toggleOverlay(true);
		};
		
		U.prototype.addValidationForName = function() {
			$('#last, #first, #lastPartner, #firstPartner').change(function() {
				
				var s = $(this).value();
				
				if (s.length > 5) {
					s = s.substring(0, 5);
					
					$(this).value(s);
				}
				
			});		
		};
		
		U.prototype.addValidationForKanji = function() {
			$('#last, #first').change(function() {
				var n = "";
				var s = $(this).value();
				
				for (var c in s) {
					n += s[c].match(/[\u4E00-\u9FCF|\u3041-\u309F|々]*/);
					if (n.length == 8) {
						break;
					}
				}
				if (n == "") {
					n += s.substring(0, 1).match(/[\u4E00-\u9FCF|\u3041-\u309F|々]*/);
					n += s.substring(1, 2).match(/[\u4E00-\u9FCF|\u3041-\u309F|々]*/);
					n += s.substring(2, 3).match(/[\u4E00-\u9FCF|\u3041-\u309F|々]*/);
					n += s.substring(3, 4).match(/[\u4E00-\u9FCF|\u3041-\u309F|々]*/);
					n += s.substring(4, 5).match(/[\u4E00-\u9FCF|\u3041-\u309F|々]*/);
					n += s.substring(5, 6).match(/[\u4E00-\u9FCF|\u3041-\u309F|々]*/);
					n += s.substring(6, 7).match(/[\u4E00-\u9FCF|\u3041-\u309F|々]*/);
					n += s.substring(7, 8).match(/[\u4E00-\u9FCF|\u3041-\u309F|々]*/);
				}
				$(this).value(n);
			});
		};
		
		U.prototype.addValidationForFurigana = function() {
			$('#furiganaLastPartner, #furiganaFirstPartner, #furiganaFirst, #furiganaLast').change(function() {
				var n = "";
				var s = $(this).value();
				
				for (var c in s) {
					n += s[c].match(/[\u3041-\u309F]*/);
					if (n.length == 8)
						break;
				}	
				if (n == "") {
					n += s.substring(0, 1).match(/[\u3041-\u309F]*/);
					n += s.substring(1, 2).match(/[\u3041-\u309F]*/);
					n += s.substring(2, 3).match(/[\u3041-\u309F]*/);
					n += s.substring(3, 4).match(/[\u3041-\u309F]*/);
					n += s.substring(4, 5).match(/[\u3041-\u309F]*/);
					n += s.substring(5, 6).match(/[\u3041-\u309F]*/);
					n += s.substring(6, 7).match(/[\u3041-\u309F]*/);
					n += s.substring(7, 8).match(/[\u3041-\u309F]*/);
				}

				$(this).value(n);
			});
		};
		
		U.prototype.touchButton = function(elem, action) {
			var touch = false,
				$this = jQuery(elem);
			$this
			.on('touchstart', function(e) {
				e.preventDefault();
				touch = true;
			})
			.on('touchmove', function() {touch = false;})
			.on('touchend', function() {
				if (touch) {
					action($this);
				}
			});
			return $this;
		};
		
		U.prototype.wireButtons = function() {
			var ctx = this,
				//ポップアップ1　非会員／TOP
				strRegist = 'プロフィール登録をすると<img src="/resources/imgs/popEntryImg.png" width="292px" height="129px" style="margin-left: -30px">が毎日もらえます<br />無料登録しますか？',
				//ポップアップ8 
				strLogin = 'ログインしますか？',
				strButtonAfter = 'あとで',
				strButtonLogin = 'ログイン',
				strButtonRegist = '登録する(無料)';

			var strMain = strRegist;
			var strYes = strButtonRegist;

			jQuery('#after').on('click', function() {
				$("#question").css({display: 'none'});
				ctx.toggleOverlay(false);
			});

			jQuery('#getCoinClose').on('touchstart', function() {
				
				$("#getCoin").css({display: 'none'});
				ctx.toggleOverlay(false);
			});
			
			jQuery('.guest').on('touchstart', function() {
				ctx.doQuestionWithSettings(strMain, strButtonAfter, strYes, '/mypage/edit');
				$("#question").css({marginTop: '-180px'});
				return false;
			});
			
			jQuery('button[data-role="guest"]').on('touchstart', function() {
				ctx.doQuestionWithSettings(strMain, strButtonAfter, strYes, '/mypage/edit');
				$("#question").css({marginTop: '-180px'});
				return false;
			});
			
			jQuery('button[data-role="need-registration"]').on('touchstart', function() {
				ctx.doQuestionWithSettings(strMain, strButtonAfter, strButtonYes, '/mypage/edit');
				$("#question").css({marginTop: '-180px'});
				return false;
			});
			
			jQuery('button[data-role="need-target-registration"]').on('touchstart', function() {
				ctx.doQuestionWithSettings(strMain, strButtonAfter, strButtonYes, '/mypage/edit');
				$("#question").css({marginTop: '-180px'});
				return false;
			});

			// confirm modal form
			//ポップアップ2 会員/12星座
			var strAstrology = 'あなたの12星座の運勢を<br />鑑定しますか？',
			//ポップアップ3 会員/今日の運勢
				strDayPre = '無料チケット',
				strDayPost = '枚で<br />今日の運勢を<br />鑑定しますか？',
			//ポップアップ4 会員/恋愛鑑定
				strLovePre = '無料チケット',
				strLovePost = '枚で<br />恋愛鑑定をしますか？',
			//ポップアップ9 ゴールドチケット消費
				strGoldPre = 'ゴールドチケット',
				strGoldPost = '枚で<br />詳細に鑑定しますか？',
			//ポップアップ10 プレミアチケット消費
				strPremiumPre = 'プレミアチケット',
				strPremiumPost = '枚で<br />プレミア鑑定をしますか？',
				strButtonAfter = 'あとで',
				strButtonYes = '鑑定する',
				keyFlagDay = 'flgDay',
				keyFlagTicket = 'flgTicket';
			
			jQuery('#afterForm').on('click', function() {
				$("#questionForm").css({display: 'none'});
				ctx.toggleOverlay(false);
			});
			
			ctx.touchButton('#buttonAstrology', function() {
				ctx.doQuestionFormWithSettings(strAstrology, strButtonAfter, strButtonYes, '/report/zodiac', $('#rtoken').text());
				ctx.setCookie(keyFlagDay, 'on', 1);
				return false;
			});
			
			ctx.touchButton('#buttonDay', function(target) {
				var $this = target;
				_ticketType = $this.attr('data-ticket-type'),
				_ticketCost = $this.attr('data-ticket-cost'),
				_ticketCount = Number(_ticketCost);
				if (userTickets[_ticketType] >= _ticketCount) {
					ctx.doQuestionFormWithSettings(strDayPre + _ticketCost + strDayPost, strButtonAfter, strButtonYes, '/report/daily',
					$('#rtoken').text(), $this.attr('data-role'), _ticketType, _ticketCost);
					ctx.setCookie(keyFlagTicket, 'on', 1);
					return false;
				}
			});
						
			ctx.touchButton('#buttonLove', function(target) {
				var $this = target,
				_ticketType = $this.attr('data-ticket-type'),
				_ticketCost = $this.attr('data-ticket-cost'),
				_ticketCount = Number(_ticketCost);
				if (userTickets[_ticketType] >= _ticketCount) {
					ctx.doQuestionFormWithSettings(strLovePre + _ticketCost + strLovePost, strButtonAfter, strButtonYes, '/report/love',
					$('#rtoken').text(), $this.attr('data-role'), _ticketType, _ticketCost);
					ctx.setCookie(keyFlagTicket, 'on', 1);
					return false;
				}
			});
			
			ctx.touchButton('#buttonGold', function(target) {
				var $this = target,
					_ticketType = $this.attr('data-ticket-type'),
					_ticketCost = $this.attr('data-ticket-cost'),
					_ticketCount = Number(_ticketCost);
				if (userTickets[_ticketType] >= _ticketCount) {
					ctx.doQuestionFormLoveWithSettings(strGoldPre + _ticketCost + strGoldPost,
					 strButtonAfter, strButtonYes,
					 $this.attr('data-reading-uri'), $('#rtoken').text(), $this.attr('data-role'),
					 _ticketType, _ticketCost, $this.attr('data-history-uri'));
					return false;
				}
			});
					
			$('button[data-role="btn-post"]').on('touchstart', function(e) {
				var button = $(this);
				var ticketType = button.attr('data-ticket-type');
				var ticketCount = parseInt(button.attr('data-ticket-cost'), 10);
				var count = (ticketCount) - (userTickets[ticketType]);
				//ポップアップ5 無料チケット不足
				//var strTicketFree = '無料チケットが<br />不足しています。<br />明日もログインするだけで<br />無料チケット3枚プレゼント♪',
				//ポップアップ6 ゴールドチケット不足
				//var	strTicketMore = 'チケットが<br />不足しています。<br/>チケットを購入しますか？',
				var	strTicketMore = 'チケットが<br />' + count + '枚不足しています。<br/>チケットを購入しますか？',
					
				//ポップアップ7　プレミアチケット不足
					//strTicketMore = 'プレミアチケットが<br />不足しています。<br />チケットを購入しますか？'
					strButtonAfter = 'あとで',
					strButtonClose = '閉じる',
					strButtonOther = '他の鑑定',
					strButtonBuy = '購入する';

				if (userTickets[ticketType] < ticketCount) {
					e.preventDefault();
					ctx.rememberData('page', { ticket: ticketType, url: button.attr('data-history-uri')});
					if (ticketType == 'silver') {
						ctx.doQuestionWithSettings(strTicketFree, strButtonClose, strButtonOther, '/?id=5');
					} else if (ticketType == 'premiere') {
						ctx.doQuestionWithSettings(ticketNames[ticketType] + strTicketMore, strButtonAfter, strButtonBuy, '/purchase', 'purchasePremier', userTickets[ticketType], ticketCount, ticketType);
					} else if (ticketType == 'gold') {
						ctx.doQuestionWithSettings(ticketNames[ticketType] + strTicketMore, strButtonAfter, strButtonBuy, '/purchase', 'purchaseGold', userTickets[ticketType], ticketCount, ticketType);
					}
				}
			});
		};

		U.prototype.rememberData = function(key, data) {
			if(typeof(Storage)!=="undefined") {
				if (data) {
					sessionStorage[key] = JSON.stringify(data);
				} else {
					sessionStorage[key] = null;
				}
			}			
		};

		U.prototype.getData = function(key) {
			if(typeof(Storage)!=="undefined") {
				return sessionStorage[key] || null;
			}
			
			return null;
		};
		U.prototype.getDeviceLate = function() {
			if (this.isAndroid()) {
				return 2;
			}
			return 1;
		};
		U.prototype.isAndroid = function() {
			return /Android/.test(navigator.userAgent);
		};

		U.prototype.saveLocalStorage = function(key, value) {
			if (typeof(Storage) !== "undefined") {
				if (value) {
					localStorage[key] = JSON.stringify(value);
				} else {
					localStorage[key] = null;
				}
			}
		};
		U.prototype.findLocalStorage = function(key) {
			if (typeof(Storage) !== "undefined") {
				var data = localStorage[key];
				if (data) {
					return JSON.parse(data);
				}
			}
			return null;
		};
		U.prototype.removeLocalStorage = function(key) {
			if (typeof(Storage) !== "undefined") {
				localStorage.removeItem(key);
			}
		};
		/**
		 * Turn into a proper dt and update zodiac
		 */
		U.prototype.bdFunc = function() {														
						
			var s = $(this).value();
					
			if (s == lastBdValue)
			{				
				return;
			}
			
			lastBdValue = s;
			
			if (s) {								
				
				//Potential date
				if (s.length == 10) {					
					
					var dArray = s.split('-');
					
					if (dArray.length == 3) {
						var y = parseInt(dArray[0], 10);
						var m = parseInt(dArray[1], 10);
						var d = parseInt(dArray[2], 10);
						
						var dt = new Date(y, m-1, d);
						if (dt && "Invalid Date" != dt) {
							window.U.updateZodiac(m, d, $(this).attr('data-zodiac-target'));
							window.U.targetZodiac(m, d, $(this).attr('zodiac-target'));
							return;
						}
					}
				}
				
				s = s.replace(/\//g, '-');
				s = s.replace(/[^0-9||\-]/g, '');										

				// 2 digit year
				if (s.substring(0, 2) != 19 && s.substring(0, 2) != 20) {
					if (s.substring(0, 2) < 50) {
						s = '20' + s;
					} else {
						s = '19' + s;
					}
				}
								
				//20140505 || 201455
				if (s.indexOf('-') == -1) {												
					
					if (s.length == 6) {
						s = s.substring(0, 4) + '-' + s.substring(4, 5) + '-' + s.substring(5, 6);
					}
					else if (s.length == 7) {
						//Make an educated guess that we entered a short month ?
						s = s.substring(0, 4) + '-0' + s.substring(4, 5) + '-' + s.substring(5, 7);
					}
					else if (s.length == 8) {
						s = s.substring(0, 4) + '-' + s.substring(4, 6) + '-' + s.substring(6, 8);
					}
				}
				
				var d = s.split('-');
				if (d.length == 3) {
					if (d[1].length == 1) {
						d[1] = '0' + d[1];
					}
					
					if (d[2].length == 1) {
						d[2] = '0' + d[2];
					}
				}
				
				s = d.join('-');
				
				//Potential date
				if (s.length == 10) {
					var y = parseInt(s.substring(0, 4), 10);
					var m = parseInt(s.substring(5, 7), 10);
					var d = parseInt(s.substring(8), 10);
					
					window.U.updateZodiac(m, d, $(this).attr('data-zodiac-target'));
					window.U.targetZodiac(m, d, $(this).attr('zodiac-target'));
					var dt = new Date(y, m-1, d);
					if ("Invalid Date" == dt) {
						// TODO; Invalid
						console.log("invalid date");
					} else {							
						
						lastBdValue = s;
						
						$(this).value(s);
												
					}						
				}										
			}
			
		};
		
	    //checkBirthday
		U.prototype.checkBirthday = function(tag) {
			return tag == '' ? '1987-01-01' : tag;
		};

		// get cookie
		U.prototype.getCookie = function(key) {
			var i, index, arr;
			arr = document.cookie.split(";");
			for (var i = 0; i < arr.length; i++) {
				index = arr[i].indexOf("=");
				if (arr[i].substring(0, index) == key || arr[i].substring(0, index) == " " + key) return unescape(arr[i].substring(index + 1));
			}
			return '';
		};

		// set cookie
		U.prototype.setCookie = function(key, value, period) {
			if (period != '') {
				expire = new Date();
				previsit = expire.toGMTString();
				expire.setTime(expire.getTime() + period * 365 * 24 * 60 * 60 * 1000);
				expire = expire.toGMTString();
			} else {
				var expire = '';
			}
			document.cookie = key + "=" + value + ";path=/;expires=" + expire;
		};

		// delete cookie
		U.prototype.deleteCookieClip = function(key) {
			document.cookie = key + '=;domain=.' + location.host + ';path=/;expires=-1';
		};

		return new U();	
	})();	
})();