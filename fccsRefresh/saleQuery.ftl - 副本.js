//alert('1s');
var renew = document.getElementById('renew');
if(renew != null){
renew.value='1';
}
var saveHouseNext = document.getElementById('saveHouseNext');


if(saveHouseNext != null){
setTimeout("saveHouseNext.click()",Math.floor(Math.random()*10000+1000));
//saveHouseNext.click();
}

//alert('111');

var aElements = document.getElementsByTagName("a");
var xgfycount = 0;
for(var i=0;i<aElements.length;i++){
    if(aElements[i].innerHTML == '修改房源'){
	var editLinkUrl = aElements[i];
setTimeout("editLinkUrl.click()",Math.floor(Math.random()*10000+1000));
		//aElements[i].click();
		xgfycount++;
	}
	
}
//alert("xgfycount:"+xgfycount);
//B378-2