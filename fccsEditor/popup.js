

$(document).ready(function(){
	//var storage = window.localStorage;

	//$("#txtTitle").val(storage.getItem("refreshTimes"));

	chrome.storage.sync.get('fccsparam', function (result) {
		
        //console.log(JSON.stringify(result));
		console.log("result:"+result);
		console.log("result.refreshTimes:"+result.fccsparam.refreshTimes);
		console.log("result.refreshCounter:"+result.fccsparam.refreshCounter);
		console.log("result.minInterval:"+result.fccsparam.minInterval);
		console.log("result.maxInterval:"+result.fccsparam.maxInterval);
		
		$("#txtTitle").val(result.fccsparam.refreshTimes);
		$("#count").text(result.fccsparam.refreshCounter);
		$("#minInterval").val(result.fccsparam.minInterval);
		$("#maxInterval").val(result.fccsparam.maxInterval);
    });
	
	
	 $("#sbbtn").click(function(){
	 var times = $("#txtTitle").val();
	 var minInterval = $("#minInterval").val();
	 var maxInterval = $("#maxInterval").val();
	 console.log(times);
		//storage.setItem("refreshTimes",	times);
		chrome.storage.sync.set({'fccsparam':{'refreshTimes': times,"refreshCounter":0,"minInterval":minInterval,"maxInterval":maxInterval}});
		
		window.open("http://member.fccs.com/agency/saleList.do");
		
	});
	/*
	$("#startlink").click(function(){
		storage.setItem("refreshCounter",	0);
		window.open("http://member.fccs.com/agency/saleList.do");
	
	});*/
});





