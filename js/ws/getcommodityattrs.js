
// request={commodity_id}
function GetCommodityAttrs(request, result_processor, error_handler, user_data)
{
/*	var paramContractMonth = '';
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
	});*/


	var result = {
		attrs: [
			{ attr: "attr004", 	name: "Area Harvested", 	unit: "(1000 HA)", 		default: false, 	order: 1  },
			{ attr: "attr020", 	name: "Beginning Stocks", 	unit: "1000 480 lb. Bales", 	default: false, 	order: 2  },
			{ attr: "attr125", 	name: "Domestic Consumption", 	unit: "1000 480 lb. Bales", 	default: true, 		order: 3  },
			{ attr: "attr176", 	name: "Ending Stocks", 		unit: "1000 480 lb. Bales", 	default: false, 	order: 4  },
			{ attr: "attr088", 	name: "Exports", 		unit: "1000 480 lb. Bales", 	default: false, 	order: 5  },
			{ attr: "attr057", 	name: "Imports", 		unit: "1000 480 lb. Bales", 	default: false, 	order: 6  },
			{ attr: "attr150", 	name: "Loss Dom. Consumption", 	unit: "1000 480 lb. Bales", 	default: false, 	order: 7  },
			{ attr: "attr028", 	name: "Production", 		unit: "1000 480 lb. Bales", 	default: true, 		order: 8  },
			{ attr: "attr195", 	name: "Stocks-to-Use", 		unit: "(PERCENT)", 		default: false, 	order: 9  },
			{ attr: "attr178", 	name: "Total Distribution", 	unit: "1000 480 lb. Bales", 	default: false, 	order: 10 },
			{ attr: "attr086", 	name: "Total Supply", 		unit: "1000 480 lb. Bales", 	default: false, 	order: 11 },
			{ attr: "attr142", 	name: "USE Dom. Consumption", 	unit: "1000 480 lb. Bales", 	default: false, 	order: 12 },
			{ attr: "attr184", 	name: "Yield", 			unit: "(KG/HA)", 		default: false, 	order: 13 }
		]
	};

	result_processor(request, result);

	return;
}

/*function GetContractInfos_Complate(xmlHttpRequest, status) {
    if (status == "success") {
        if (response_is_nil(xmlHttpRequest.responseXML)) {
            this.result_processor(this.request_data, undefined);
        }
        else {
            var infos = ConvertXMLSymbolInfosToJS(xmlHttpRequest.responseXML);
            this.result_processor(this.request_data, infos);
        }
    }
}*/