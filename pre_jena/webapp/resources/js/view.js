var currentView = 0;
var isDoingTrans = false;
var lastYOffset = 0;
var	strHashModal = '#modal';
var lastHomeScrollPosition = 0;

var views = {
	0: { name: "home", htmlId: "view", isModal: false },
	1: { name: "sensei-daily", htmlId: "senseiView", contentView: "senseiContent", isModal: false },
	2: { name: "sensei-love", htmlId: "senseiView", contentView: "senseiContent", isModal: false },
	3: { name: "temp-reading", htmlId: "tempReadingView", contentView: "tempReadingContent", isModal: false },
	4: { name: "changeme", htmlId: "changeMeView", isModal: false },
	5: { name: "changeyou", htmlId: "changeMeView", isModal: false },
	6: { name: "sensei-daily", htmlId: "uekenView", contentView: "senseiContent", isModal: false },
	7: { name: "sensei-daily", htmlId: "ticketView", contentView: "senseiContent", isModal: false }
};

function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}

function doScrollToObject(id) {
	var objId = document.getElementById(id);
	if (objId) {
		window.scroll(0, findPos(objId));
	}
	return false;
}

function gotoView(view, freeCallback) {
    if (isDoingTrans)
        return false;
    if (currentView == view) {
        return false;
    }
    isDoingTrans = true;
    var myView = views[view];
    if (myView) {
        var oldView = views[currentView];
        currentView = view;
        transitionTo(oldView, myView, freeCallback);
    }
    return false;
}

function gotoViewAndScroll(num, id) {
	gotoView(num);
	setTimeout(function () {
		doScrollToObject(id);
	}, 100);
}

// modal view ： browser back
$(window).on('hashchange', function () {
    if (location.href.indexOf(strHashModal) === -1) {
        gotoView(0);
    }
});

var transitionTo = function (fromView, toView, freeCallback) {
    var ctx = this;
    if (fromView.name == 'home') {
        lastHomeScrollPosition = window.pageYOffset;
    }
    if (toView.name !== 'home') {
        history.pushState('', '', location.pathname + strHashModal);
    } else {
        history.pushState('', '', location.pathname);
    }
    if (toView.name == 'sensei-daily') {
        $('#' + toView.contentView).inner($('#scSenseiDaily').inner());
    } else if (toView.name == 'sensei-love') {
        $('#' + toView.contentView).inner($('#scSenseiLove').inner());
    } else if (toView.name == 'temp-reading') {
 	   var result = freeCallback(toView);
 	   if (!result) {
 		   return false;
 	   }
    }
    setTimeout(function () {
        var x = $("#" + toView.htmlId).get(0);
        var y = $("#" + fromView.htmlId).get(0);
        var stageType = x.className.indexOf('stage-left') != -1;
        if (stageType > 0) {
            y.className = "view stage-right" + (fromView.useTrans ? " transition" : "");
        } else {
            y.className = "view stage-left" + (fromView.useTrans ? " transition" : "");
        }
        x.className = "view stage-center" + (toView.useTrans ? " transition" : "");
        U.setupScroll(toView.name == "home" ? lastHomeScrollPosition : 0);
        isDoingTrans = false;
    }, 0);
};
