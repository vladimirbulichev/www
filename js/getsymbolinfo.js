
function GetSymbolInfo(smb, result_processor, error_handler)
{
	var soapMessage =
	'<?xml version="1.0" encoding="UTF-8"?> \
	<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> <soap:Header/> \
	<soap:Body> <m:GetSymbolInfo xmlns:m="http://marketstat.ru" >  \
	<m:Symbol>' + smb + '</m:Symbol> \
	</m:GetSymbolInfo> </soap:Body> \
	</soap:Envelope>';

	$.ajax({
		url: svc_url,
		type: "POST",
		dataType: "xml",
		data: soapMessage,
		complete: GetSymbolInfo_Complate,
		error: error_handler,
		contentType: "text/xml; charset=\"utf-8\"",
		result_processor: result_processor,
		request_data: smb
	});
}

function GetSymbolInfo_Complate(xmlHttpRequest, status) {
    if (status == "success") {
        if (response_is_nil(xmlHttpRequest.responseXML)) {
            this.result_processor(this.request_data, undefined);
        }
        else {
            var info = ConvertXMLSymbolInfoToJS(xmlHttpRequest.responseXML);
            this.result_processor(this.request_data, info);
        }
    }
}

function ConvertXMLSymbolInfoToJS(XML)
{
	var smb = $(XML).find(getsvctagname('Symbol')).text();
	var name = $(XML).find(getsvctagname('Name')).text();
	var exp_date = $(XML).find(getsvctagname('ExpirationDate')).text();
	var mult = $(XML).find(getsvctagname('Multiplier')).text();
	var base_smb = $(XML).find(getsvctagname('BaseSymbol')).text();
	var cnt_m = $(XML).find(getsvctagname('ContractMonth')).text();
	var cnt_y = $(XML).find(getsvctagname('ContractYear')).text();


	return ({
		Symbol: smb,
        Name: name,
        ExpirationDate: exp_date,
        Multiplier: mult,
		BaseSymbol: base_smb,
		ContractMonth: cnt_m,
		ContractYear: cnt_y
	});
}