
//var svc_url = 'http://localhost:8080/ws/marketstat';
var svc_url = '/ws/marketstat';

function getsvctagname(tagname) {
    if ($.browser.msie || $.browser.mozilla)
        return "m\\:" + tagname;
    return tagname;
}

function response_is_nil(XML) {
    var response_is_nil = $(XML).find(getsvctagname('return')).attr("xsi:nil");
    if (response_is_nil == "true")
        return true
    else
        return false;
}