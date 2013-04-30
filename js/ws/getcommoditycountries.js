
// request={commodity_id}
function GetCommodityCountries(request, result_processor, error_handler, user_data)
{

	var result = {
		countries: [
			{ code: "00", 	name: "World", 		order: 1  },
			{ code: "US", 	name: "United States",	order: 2  },
			{ code: "BR", 	name: "Brazil",		order: 3  },
			{ code: "CI", 	name: "Chile",		order: 4  },
			{ code: "--", 	name: "Other",		order: 5  }
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