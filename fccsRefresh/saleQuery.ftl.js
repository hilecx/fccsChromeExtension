

var maxTimes;
var counter;

chrome.storage.sync.get('fccsparam', function (result) {

	console.log("result.refreshTimes:"+result.fccsparam.refreshTimes);
	console.log("result.refreshCounter:"+result.fccsparam.refreshCounter);
	maxTimes = result.fccsparam.refreshTimes;
	counter = result.fccsparam.refreshCounter;
	
	
	var minInterval = 1000 * result.fccsparam.minInterval;
	var maxInterval = 1000 * result.fccsparam.maxInterval;
	//Math.random()*1000+1000
	var randomInterval = Math.random()*(maxInterval-minInterval)+minInterval;
	console.log("maxTimes:"+maxTimes);
	console.log("counter:"+counter);
	console.log("minInterval:"+minInterval);
	console.log("maxInterval:"+maxInterval);
	console.log("randomInterval:"+randomInterval);
	if(maxTimes == counter){//达到最大次数停止刷新
		
		console.log("maxTimes == counter  refresh stoped");
	}else{
		//判断页面类型
		var curl=window.location.href;
		var pagetype; //1 last of listpage 2 not last of lastpage 3 modification page
		if(curl.indexOf('saleList.do') >= 0){
			var totalpage=$("[class='warnColor8']")[0].innerHTML.substring(1,3);
			var warnColor2_fb_f14_Elements = $("[class='warnColor2 fb f14']");
			//console.log(warnColor2_fb_f14_Elements);
			//console.log(warnColor2_fb_f14_Elements[1].innerHTML);
			var currentpage=warnColor2_fb_f14_Elements[1].innerHTML;
			//console.log(warnColor2_fb_f14_Elements);
			//console.log(warnColor8_Elements[1].innerHTML);
			console.log("currentpage:"+currentpage);
			console.log("totalpage:"+totalpage);
			if(currentpage == totalpage){
				pagetype = 1;
			}else{
				pagetype = 2;
			}
		}else if(curl.indexOf('saleHouse.do') >= 0 || curl.indexOf('saleShop.do') >= 0 || curl.indexOf('saleOffice.do') >= 0 || curl.indexOf('saleOther.do') >= 0){
			pagetype = 3;
		}

		console.log("pagetype:"+pagetype);
		//列表最后一页
		if(pagetype == 1){
			var lastModiA = $("a:contains('房源修改')").last();
			console.log("lastModiA:");
			console.log(lastModiA[0]);
			//lastModiA.click();
			var function1 = function(){
				lastModiA[0].click();
			}
			setTimeout(function1,randomInterval);
				
		}else if(pagetype == 2){//列表非最后一页
			var pageUrlList = $("a.page");
			var pageUrlListLength = pageUrlList.length;
			var lastPageA = pageUrlList[pageUrlListLength-2];
			console.log("lastPageA:");
			console.log(lastPageA);
			var function1 = function(){
				lastPageA.click();
			}
			setTimeout(function1,Math.floor(randomInterval));
		}else if (pagetype == 3){//编辑页
			var submitBtn = $("#saveAction");
			console.log("saveAction:");
			console.log(saveAction);
			counter++;
			
			chrome.storage.sync.set({'fccsparam':{'refreshTimes': maxTimes,"refreshCounter":counter,"minInterval":minInterval/1000,"maxInterval":maxInterval/1000}});
			var function1 = function(){
				submitBtn.click();
			}
			setTimeout(function1,Math.floor(randomInterval));
		}
	}

});