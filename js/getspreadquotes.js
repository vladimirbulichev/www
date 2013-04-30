
function GetSpreadQuotes(smb1, smb2, complete_handler, error_handler, user_data)
{
	var soapMessage =
	'<?xml version="1.0" encoding="UTF-8"?> \
	<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> <soap:Header/> \
	<soap:Body> <m:GetSpreadQuotes xmlns:m="http://marketstat.ru" >  \
	<m:Symbol1>' + smb1 + ' </m:Symbol1>  \
	<m:Symbol2>' + smb2 + ' </m:Symbol2>  \
	</m:GetSpreadQuotes> </soap:Body> \
	</soap:Envelope>';

	$.ajax({
		url: svc_url,
		type: "POST",
		dataType: "xml",
		data: soapMessage,
		complete: complete_handler,
		error: error_handler,
		contentType: "text/xml; charset=\"utf-8\"",
		userdata: user_data
	});
}

function createSpreadQuotesChartData(XML, mult1, mult2)
{
	chartDataQuotes = new Array();

	$(XML).find(getsvctagname('Quote')).each(function(idx) {
		var date_str = $(this).attr("Date");
		var y = new Number(date_str.substring(0,4));
		var m = new Number(date_str.substring(5,7))-1;
		var d = new Number(date_str.substring(8,10));

		chartDataQuotes[idx] = ({
			date: new Date(y, m, d),
			open1: $(this).attr("Open1"),
			close1: $(this).attr("Close1"),
			high1: $(this).attr("Max1"),
			low1: $(this).attr("Min1"),
			volume1: $(this).attr("Volume1"),
			oi1: $(this).attr("OI1"),
			open2: $(this).attr("Open2"),
			close2: $(this).attr("Close2"),
			high2: $(this).attr("Max2"),
			low2: $(this).attr("Min2"),
			volume2: $(this).attr("Volume2"),
			oi2: $(this).attr("OI2")
		});

    });

    return chartDataQuotes;
}


