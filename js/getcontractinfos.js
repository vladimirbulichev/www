
// request={base_smb,cnt_m,cnt_y}
function GetContractInfos(request, result_processor, error_handler, user_data)
{
	var paramContractMonth = '';
	if (request.cnt_m == undefined) paramContractMonth = '<m:ContractMonth xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="true" />'
	else paramContractMonth = '<m:ContractMonth>' + request.cnt_m + '</m:ContractMonth>';

	var paramContractYear = '';
	if (request.cnt_y == undefined) paramContractYear = '<m:ContractYear xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="true" />'
	else paramContractYear = '<m:ContractYear>' + request.cnt_y + '</m:ContractYear>';

	var soapMessage =
	'<?xml version="1.0" encoding="UTF-8"?> \
	<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> <soap:Header/> \
	<soap:Body> <m:GetContractInfos xmlns:m="http://marketstat.ru" >  \
	<m:BaseSymbol>' + request.base_smb + ' </m:BaseSymbol>' + paramContractMonth + paramContractYear + ' \
	</m:GetContractInfos> </soap:Body> \
	</soap:Envelope>';

	$.ajax({
	    url: svc_url,
		type: "POST",
		dataType: "xml",
		data: soapMessage,
		complete: GetContractInfos_Complate,
		error: error_handler,
		contentType: "text/xml; charset=\"utf-8\"",
		result_processor: result_processor,
		request_data: request,
		userdata: user_data
	});
}

function GetContractInfos_Complate(xmlHttpRequest, status) {
    if (status == "success") {
        if (response_is_nil(xmlHttpRequest.responseXML)) {
            this.result_processor(this.request_data, undefined);
        }
        else {
            var infos = ConvertXMLSymbolInfosToJS(xmlHttpRequest.responseXML);
            this.result_processor(this.request_data, infos);
        }
    }
}

function ConvertXMLSymbolInfosToJS(XML)
{
	var smb_infos = new Array();

	$(XML).find(getsvctagname('FutureContractInfo')).each(function (idx) {

	    var smb = $(this).find(getsvctagname('Symbol')).text();
	    var name = $(this).find(getsvctagname('Name')).text();
	    var exp_date = $(this).find(getsvctagname('ExpirationDate')).text();
	    var mult = $(this).find(getsvctagname('Multiplier')).text();
	    var base_smb = $(this).find(getsvctagname('BaseSymbol')).text();
	    var cnt_m = $(this).find(getsvctagname('ContractMonth')).text();
	    var cnt_y = $(this).find(getsvctagname('ContractYear')).text();

	    smb_infos[idx] = ({
	        Symbol: smb,
	        Name: name,
	        ExpirationDate: exp_date,
	        Multiplier: mult,
	        BaseSymbol: base_smb,
	        ContractMonth: cnt_m,
	        ContractYear: cnt_y
		});
		
	});


	return smb_infos;
}