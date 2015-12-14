// JavaScript Document

(function () {

// development dummy path
var _json_path_dummy = '/resources/json/history.json';// development only

// general variable
var	_json_path = '/api/history',
	_output_block = '.js_history',
	_button_more = '.js_btnMore',
	_sortButton = '.js_sortButton',
	_button_sort01 = '.js_btnSort01',
	_button_sort02 = '.js_btnSort02',
	_button_sort03 = '.js_btnSort03',
	_button_sort04 = '.js_btnSort04',
	_button_sort05 = '.js_btnSort05',
	_button_loadData = '.js_loadData',
	_messageNoneDeta = '.js_messageNoneDeta',
	_strPathCategory = 'category=',
	_list_count = 5,
	_list_more_count = 5,
	_flag_more = 0,
	_flag_zero = 1,
	_error_message = 'xhr error',
	_category,
	_more;

// view
var historyView = {
	// initial run
	init: function() {
		// initial list load
		var _category = -1,
			pathFull = location.href,
			boolPathCategory = (pathFull.indexOf(_strPathCategory) !== -1),
			indexCategory = Number(pathFull.indexOf(_strPathCategory)) + _strPathCategory.length;
		_category = (boolPathCategory) ? pathFull.slice(indexCategory, indexCategory + 1) : _category;
		historyController.docLoaded (_category);
		if (_category > 0 && _category <= 4) historyView.btnSortRender (_category);
		////// set button event
		// もっと見る
		var $_button = jQuery(_button_more + ' p');
		$_button.on('click', function (event) {
			var _category = -1,
				idx = jQuery(_sortButton + ' button').index(jQuery(_sortButton + ' button.cur'));
			_category = (idx >= 0 && idx < 4) ? (Number(idx) + 1) : _category;
			historyController.docLoaded(_category, 1);
		});
		// 12星座
		var $_button_sort01 = jQuery(_button_sort01);
		$_button_sort01.on('click', function (event) {
			historyController.docLoaded(1);
			historyController.setBtnRoll(1);
		});
		// 今日
		var $_button_sort02 = jQuery(_button_sort02);
		$_button_sort02.on('click', function (event) {
			historyController.docLoaded(2);
			historyController.setBtnRoll(2);
		});
		// 恋愛
		var $_button_sort03 = jQuery(_button_sort03);
		$_button_sort03.on('click', function (event) {
			historyController.docLoaded(3);
			historyController.setBtnRoll(3);
		});
		// プレミア
		var $_button_sort04 = jQuery(_button_sort04);
		$_button_sort04.on('click', function (event) {
			historyController.docLoaded(4);
			historyController.setBtnRoll(4);
		});
		// すべて
		var $_button_sort05 = jQuery(_button_sort05);
		$_button_sort05.on('click', function (event) {
			historyController.docLoaded();
			historyController.setBtnRoll(5);
		});
		// すべて（テキスト）
		var $_button_loadData = jQuery(_button_loadData);
		$_button_loadData.on('click', function (event) {
			historyController.docLoaded();
			historyController.setBtnRoll(5);
		});
	},
	// reset list
	listReset: function () {
		var $_output_block = jQuery(_output_block);
		// 一覧リセット
		$_output_block.html('');
	},
	// output list
	render: function (data) {
		var $_output_block = jQuery(_output_block),
			$_button_wrap = jQuery(_button_more),
			$_messageNoneDeta = jQuery(_messageNoneDeta);
		// もっと見るボタン表示／非表示
		if (data[1]) {
			$_button_wrap.addClass ('dspBlk');
		} else {
			$_button_wrap.removeClass ('dspBlk');
		}
		// 0件メッセージ表示／非表示
		if (!data[2] && data[3]) {
			$_messageNoneDeta.addClass ('dspBlk');
		} else {
			$_messageNoneDeta.removeClass ('dspBlk');
		}
		// 一覧出力
		$_output_block.append(data[0]);
		// loading off
		jQuery(_output_block).removeClass('loading');
	},
	// button rollover output
	btnSortRender: function (_category) {
		var $_sortButton = jQuery(_sortButton);
		$_sortButton.find('button').removeClass('cur').eq(_category - 1).addClass('cur');
	}
};
jQuery(historyView.init);

// model
var historyModel = {
	// list ajax
	data: '',
	processXhr: function (_type, _path, _data_type, _timeout, _block, _error_string, _category, _more) {
		// loading on
		jQuery(_output_block).addClass('loading');
		// generate path
		_path += (_category || _more) ? '?' : '';
		_path += (_category) ? 'category=' + _category : '';
		_path += (_category && _more) ? '&' : '';
		_path += (_more) ? 'date=' + jQuery(_output_block).find('.historyItem:last').attr('data-date') : '';
		// reset list
		if (!_more) {historyController.setListEmpty ();}
		// ajax
		jQuery.ajax({
			type: _type,
			url: _path,
			dataType: _data_type,
			timeout: _timeout,
			// success
			success: function (data) {
				var src = historyModel.makeDom (data) [0],
					_flag_more = historyModel.makeDom (data) [1],
					_flag_zero = historyModel.makeDom (data) [2];
				var data = [src, _flag_more, _more, _flag_zero];
				historyModel.outputJson(data);
			},
			// failure
			error: function () {
				console.log(_error_string);
				// loading off
				jQuery(_output_block).removeClass('loading');
			}
		});
	},
	// generate date strings
	makeDate: function (date) {
		var date = new Date(date);
			year = date.getFullYear(),
			mon = date.getMonth()+1,
			day = date.getDate(),
			hour = date.getHours(),
			mins = date.getMinutes(),
			sec = date.getSeconds(),
			rtr = '';
		str = year;
		str += '/' + historyModel.makeFigures(2, mon);
		str += '/' + historyModel.makeFigures(2, day);
		str += '&nbsp;' + historyModel.makeFigures(2, hour);
		str += ':' + historyModel.makeFigures(2, mins);
		str += ':' + historyModel.makeFigures(2, sec);
		return str;
	},
	// add '0' above figure
	makeFigures: function (fig, num) {
		while ( String(num).length < fig ) {
			num = '0' + num;
		}
		return num;
	},
	// generate dom source
	makeDom: function (data) {
		var src = '\n',
			leng = data.length,
			i = 0;
		for (i; i < leng; i++) {
			var obj = data[i];
			// ZODIAC
			if (obj.categoryType == 'ZODIAC') {
				src += '<li class="historyItem hIAstrology hIConste' + ("0"+obj.zodiac.key).slice(-2) + '" data-date="' + obj.date + '"><!--12星座-->\n';
				src += '	<a href="/report/history/' + obj.historyId + '?skip=1">\n';
				src += '		<p class="hIPoint">' + obj.point + '</p>\n';
				src += '		<p class="hIDate fontVerySmall">' + historyModel.makeDate(obj.date) + '</p>\n';
				src += '		<div class="hIText clrF">\n';
				src += (obj.isNew) ? '			<p class="hINew"><span class="altT">NEW</span></p>\n' : '';
				src += '			<p class="hITitle">' + obj.zodiac.name + 'の運勢</p>\n';
				src += '			<p class="hICategori fontSmall">' + obj.content.title + '</p>\n';
				src += '		</div>\n';
				src += '		<p class="hILink fontSmall"><span>鑑定書を見る</span></p>\n';
				src += '	</a>\n';
				src += '</li>\n';
			}
			// DAILY
			else if (obj.categoryType == 'DAILY') {
				src += '<li class="historyItem hIDay';
				src += (obj.isSpecial) ? ' hISpecial' : '';
				src += '" data-date="' + obj.date + '"><!--日運-->\n';
				src += '	<a href="/report/history/' + obj.historyId + '?skip=1">\n';
				src += '		<p class="hIThumb"><img src="/resources/imgs/history_teachers/' + obj.fortunetellerFileName + '" width="45" alt="" /></p>\n';
				src += '		<p class="hIFrame"></p><!--frame-->\n';
				src += (obj.isSpecial) ? '		<p class="hISti"><span class="altT">特別鑑定書</span></p>\n' : '';
				src += '		<p class="hIDate fontVerySmall">' + historyModel.makeDate(obj.date) + '</p>\n';
				src += '		<div class="hIText clrF">\n';
				src += (obj.isNew) ? '			<p class="hINew"><span class="altT">NEW</span></p>\n' : '';
				src += '			<p class="hITitle">' + obj.title + '</p>\n';
				src += '			<p class="hITeller fontSmall">' + obj.fortunetellerName + '</p>\n';
				src += '			<p class="hICategori fontSmall">' + obj.content.title + '</p>\n';
				src += '		</div>\n';
				src += '		<p class="hILink fontSmall"><span>鑑定書を見る</span></p>\n';
				src += '	</a>\n';
				src += '</li>\n';
			}
			// LOVE
			else if (obj.categoryType == 'LOVE') {
				src += '<li class="historyItem hILove';
				src += (obj.isSpecial) ? ' hISpecial' : '';
				src += '" data-date="' + obj.date + '"><!--恋愛-->\n';
				src += '	<a href="/report/history/' + obj.historyId + '?skip=1">\n';
				src += '		<p class="hIThumb"><img src="/resources/imgs/history_teachers/' + obj.fortunetellerFileName + '" width="45" alt="" /></p><!--thumbnail-->\n';
				src += '		<p class="hIFrame"></p><!--frame-->\n';
				src += (obj.isSpecial) ? '		<p class="hISti"><span class="altT">特別鑑定書</span></p>\n' : '';
				src += '		<p class="hIDate fontVerySmall">' + historyModel.makeDate(obj.date) + '</p>\n';
				src += '		<div class="hIText clrF">\n';
				src += (obj.isNew) ? '			<p class="hINew"><span class="altT">NEW</span></p>\n' : '';
				src += '			<p class="hITitle">' + obj.menu.text + '</p>\n';
				src += '			<p class="hITeller fontSmall">' + obj.fortunetellerName + '</p>\n';
				src += '			<p class="hICategori fontSmall">' + obj.content.title + '</p>\n';
				src += '		</div>\n';
				src += '		<p class="hILink fontSmall"><span>鑑定書を見る</span></p>\n';
				src += '	</a>\n';
				src += '</li>\n';
			}
			// PREMIERE
			else if (obj.categoryType == 'PREMIERE') {
				var contentType = obj.contentType;
				var contentName = contentType.charAt(0).toUpperCase() + contentType.slice(1);
				var className = 'hIPremium' + contentName;
                var subClassName = '';
                if (contentType === 'second_half') {
                    subClassName = obj.cssClassName;
                }
				src += '<li class="historyItem hIPremium ' + className + ' ' + subClassName + '" data-date="' + obj.date + '"><!--プレミア-->\n';
				src += '	<a href="/report/history/' + obj.historyId + '?skip=1">\n';
				src += '		<p class="hISti"><span class="altT">プレミア鑑定</span></p><!--プレミア-->\n';
				src += '		<p class="hIDate fontVerySmall">' + historyModel.makeDate(obj.date) + '</p>\n';
				src += '		<div class="hIText clrF">\n';
				src += (obj.isNew) ? '			<p class="hINew"><span class="altT">NEW</span></p>\n' : '';
				src += '			<p class="hITitle">' + obj.menu.text + '</p>\n';
				src += '			<p class="hITeller fontSmall">' + obj.fortunetellerName + '</p>\n';
				src += (obj.menu.fortuneTargetType !== 'USER') ? '				<p class="hITarget fontVerySmall">気になる人 ： ' + obj.targetName + ' さん</p>\n' : '';
				src += '			<p class="hICategori fontSmall">' + obj.content.title + '</p>\n';
				src += '		</div>\n';
				src += '		<p class="hILink fontSmall"><span>鑑定書を見る</span></p>\n';
				src += '	</a>\n';
				src += '</li>\n';
			}
		}
		_flag_more = (i >= 10) ? 1: 0;
		_flag_zero = (i === 0) ? 1: 0;
		return [src, _flag_more, _flag_zero];
	},
	// ajax callback
	outputJson: function (data) {
		this.data = data;
		if(this.callback) {
			this.callback();
		}
	},
	// button current rollover
	setBtnRoll: function (_category) {
		historyController.btnRoll (_category);
	}
};

// controller
var historyController = {
	// list ajax
	docLoaded: function (_category, _more) {
		historyModel.callback = function () {
			historyView.render(historyModel.data);
		};
		historyModel.processXhr('GET', _json_path, 'json', '1000', _output_block, _error_message, _category, _more);
	},
	// reset list
	setListEmpty: function () {
		historyView.listReset();
	},
	// button current rollover
	setBtnRoll: function (_category) {
		historyModel.setBtnRoll(_category);
	},
	btnRoll: function (_category) {
		historyView.btnSortRender(_category);
	}
};


})();
