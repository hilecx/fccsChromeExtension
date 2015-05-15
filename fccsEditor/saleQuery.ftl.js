

var maxTimes;
var counter;

$(document).ready(function(){


		//判断页面类型
		var curl=window.location.href;
		
		//sale
		var pagetype; //1 last of listpage 2 not last of lastpage 3 modification page
		if(curl.indexOf('saleHouse.do') >= 0 || curl.indexOf('saleShop.do') >= 0 || curl.indexOf('saleOffice.do') >= 0 || curl.indexOf('saleOther.do') >= 0 || curl.indexOf('SaleSaveAction.do') >= 0){
			pagetype = 3;
		}

		if (pagetype == 3){//编辑页
			var saleIdText = $("#saleId")[0];
			console.log("saleIdText:");
			console.log(saleIdText);

			saleIdText.type="text";
			saleIdText.value ="0";
		}
		
		//lease
		//var pagetype; //1 last of listpage 2 not last of lastpage 3 modification page
		if(curl.indexOf('leaseHouse.do') >= 0 || curl.indexOf('leaseShop.do') >= 0 || curl.indexOf('leaseOffice.do') >= 0 || curl.indexOf('leaseOther.do') >= 0){
			pagetype = 4;
		}

		if (pagetype == 4){//编辑页
			var leaseIdText = $("#leaseId")[0];
			console.log("leaseIdText:");
			console.log(leaseIdText);

			leaseIdText.type="text";
			leaseIdText.value ="0";
		}

});