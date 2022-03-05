function htmlScroll() {
    var top = document.body.scrollTop || document.documentElement.scrollTop;
    if (elFix.data_top < top) {
        elFix.style.position = 'fixed';
        elFix.style.top = 0;
        elFix.style.opacity = 1;
        elFix.style.left = elFix.data_left;
    }
    else {
        elFix.style.position = 'absolute';
        elFix.style.opacity = 0.5;
    }
}

function htmlPosition(obj) {
    var o = obj;
    var t = o.offsetTop;
    var l = o.offsetLeft;
    while (o = o.offsetParent) {
        t += o.offsetTop;
        l += o.offsetLeft;
    }
    obj.data_top = t;
    obj.data_left = l;
}

var oldHtmlWidth = document.documentElement.offsetWidth;
window.onresize = function () {
    var newHtmlWidth = document.documentElement.offsetWidth;
    if (oldHtmlWidth == newHtmlWidth) {
        return;
    }
    oldHtmlWidth = newHtmlWidth;
    elFix.style.position = 'static';
    htmlPosition(elFix);
    htmlScroll();
}
window.onscroll = htmlScroll;

var elFix = document.getElementById('nav');
htmlPosition(elFix);