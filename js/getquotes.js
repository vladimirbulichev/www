
function toXMLdate(date)
{
	var str_year = String(date.getFullYear());

	var m = date.getMonth() + 1;
	var str_month = String(m);
	if (m < 10) str_month = '0' + str_month;

	var d = date.getDate();
	var str_date = String(d);
	if (d < 10) str_date = '0' + str_date;

	return (str_year + '-' + str_month + '-' + str_date);
}

function GetQuotes(smb, dateFrom, dateTo, complete_handler, error_handler)
{
	var paramDateFrom = '';
	if (dateFrom == undefined) paramDateFrom = '<m:DateFrom xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="true" />'
	else paramDateFrom = '<m:DateFrom>' + toXMLdate(dateFrom) + '</m:DateFrom>';

	var paramDateTo = '';
	if (dateTo == undefined) paramDateTo = '<m:DateTo xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="true" />'
	else paramDateTo = '<m:DateTo>' + toXMLdate(dateTo) + '</m:DateTo>';

	var soapMessage =
	'<?xml version="1.0" encoding="UTF-8"?> \
	<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> <soap:Header/> \
	<soap:Body> <m:GetQuotes xmlns:m="http://marketstat.ru" >  \
	<m:Symbol>' + smb + ' </m:Symbol> ' + paramDateFrom + paramDateTo + ' \
	</m:GetQuotes> </soap:Body> \
	</soap:Envelope>';

	$.ajax({
		url: svc_url,
		type: "POST",
		dataType: "xml",
		data: soapMessage,
		complete: complete_handler,
		error: error_handler,
		contentType: "text/xml; charset=\"utf-8\""
	});
}

function createQuotesChartData(XML, chartDataQuotes)
{
	chartDataQuotes.splice(0, chartDataQuotes.length);

	$(XML).find(getsvctagname('Quote')).each(function(idx) {
		var date_str = $(this).attr("Date");
		var y = new Number(date_str.substring(0,4));
		var m = new Number(date_str.substring(5,7))-1;
		var d = new Number(date_str.substring(8,10));

		chartDataQuotes[idx] = ({
			date: new Date(y, m, d),
			open: $(this).attr("Open"),
			close: $(this).attr("Close"),
			high: $(this).attr("Max"),
			low: $(this).attr("Min"),
			volume: $(this).attr("Volume"),
			oi: $(this).attr("OI")
		});
		
	});
}


