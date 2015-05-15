alert("FCCS Refresher 加载完毕");

function InsertFunc(tabId,changeInfo,tab)
{
//让用户界面执行代码。
//chrome.tabs.executeScript(tabId,{code : "alert('看看这是那个页面弹出的！');"});
//让用户界面执行一个文件的JS。
	if(changeInfo.status == 'complete'){

		chrome.tabs.executeScript(tabId,{file : "jquery-1.9.1.js"});
		chrome.tabs.executeScript(tabId,{file : "saleQuery.ftl.js"});

    }

}
//注册事件的响应函数
chrome.tabs.onUpdated.addListener(InsertFunc);