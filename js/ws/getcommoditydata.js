
// request={commodity_code,country_code}
function GetCommodityData(request, result_processor, error_handler, user_data)
{

	var result = {
		data: [
			{ year: 2009, 	attr004: 100, 	attr020: 256,	attr125: 454,	attr176: 634,	attr088: 642,	attr057: 642,	attr150: 541,	attr028: 462,	attr195: 623,	attr178: 473, 	attr086: 289,	attr142: 353, 	attr184: 545 },
			{ year: 2010, 	attr004: 100, 	attr020: 234,	attr125: 432,	attr176: 635,	attr088: 231,	attr057: 262,	attr150: 264,	attr028: 541,	attr195: 123,	attr178: 673, 	attr086: 789,	attr142: 153, 	attr184: 145 },
			{ year: 2011, 	attr004: 123, 	attr020: 432,	attr125: 324,	attr176: 542,	attr088: 461,	attr057: 724,	attr150: 275,	attr028: 641,	attr195: 234,	attr178: 567, 	attr086: 890,	attr142: 174, 	attr184: 162 },
			{ year: 2012, 	attr004: 143, 	attr020: 123,	attr125: 235,	attr176: 661,	attr088: 653,	attr057: 642,	attr150: 735,	attr028: 653,	attr195: 345,	attr178: 465, 	attr086: 654,	attr142: 183, 	attr184: 154 }
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