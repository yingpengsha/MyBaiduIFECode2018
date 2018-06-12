var productAll=document.getElementById('productAll');
var productBox=document.getElementById('productBox');
var regionAll=document.getElementById('regionAll');
var regionBox=document.getElementById('regionBox');
var table=document.getElementById('table');
productBox.onclick=function(event){
	var productList=productBox.getElementsByTagName('input');
	var count=productList.length;
	for(var i=0;i<=productList.length-1;i++)
	{
		if(productList[i].checked==false){
			productAll.checked=false;
			count--;
		}
	}
	if(count==productList.length){
		productAll.checked=true;
	}

	var event = event || window.event;
	var target = event.target || event.srcElement;
	if(target.nodeName.toLowerCase() == 'input'){
		if (count==0 && target.checked==false) {
			target.checked=true;
		}
		else{
			getData();
		}
	}
}
productAll.onclick=function(){
	if (productAll.checked==false) {
		productAll.checked=true;
	}
	else{
		var productList=productBox.getElementsByTagName('input');
		for(var i=0;i<=productList.length-1;i++)
		{
			productList[i].checked=true;
		}
		getData();
	}
}
regionBox.onclick=function(event){
	var regionList=regionBox.getElementsByTagName('input');
	var count=regionList.length;
	for(var i=0;i<=regionList.length-1;i++)
	{
		if(regionList[i].checked==false){
			regionAll.checked=false;
			count--;
		}
	}
	if(count==regionList.length){
		regionAll.checked=true;
	}

	var event = event || window.event;
	var target = event.target || event.srcElement;
	if(target.nodeName.toLowerCase() == 'input'){
		if (count==0 && target.checked==false) {
			target.checked=true;
		}
		else{
			getData();
		}
	}
}
regionAll.onclick=function(){
	if (regionAll.checked==false) {
		regionAll.checked=true;
	}
	else{
		var regionList=regionBox.getElementsByTagName('input');
		for(var i=0;i<=regionList.length-1;i++)
		{
			regionList[i].checked=true;
		}
		getData();
	}
}
function getData(){
	var productList=productBox.getElementsByTagName('input');
	var regionList=regionBox.getElementsByTagName('input');
	var checkedProductList=[];
	var checkedRegionList=[];
	var data=[];
	var flag=false;
	for(var i=0;i<=productList.length-1;i++)
	{
		if (productList[i].checked==true) {
			checkedProductList.push(productList[i].value);
		}
	}
	for(var i=0;i<=regionList.length-1;i++)
	{
		if (regionList[i].checked==true) {
			checkedRegionList.push(regionList[i].value);
		}
	}
	// debugger;
	for(var i=0;i<=sourceData.length-1;i++){
		flag=false;
		for(var j=0;j<=checkedProductList.length-1;j++){
			for(var k=0;k<=checkedRegionList.length-1;k++){
				if(sourceData[i].product==checkedProductList[j] && sourceData[i].region==checkedRegionList[k]){
					data.push(sourceData[i]);
					flag=true;
					break;
				}
			}
			if (flag) {break};
		}
	}
	showTable(data);
}
function showTable(data){
	table.innerHTML='';
	showTableHead();
	var beforeProduct='';
	var productRow=1;
	var beforeRegion='';
	var regionRow=1;
	for(var i=0;i<=data.length-1;i++){
		var tr=document.createElement('tr');
		if(data[i].product!=beforeProduct){
			var product=document.createElement('td');
			product.innerHTML=data[i].product;
			beforeProduct=data[i].product;
			productRow=1;
			tr.appendChild(product);
		}
		else{
			productRow++;
			product.setAttribute('rowspan',productRow);
		}
		
		if(data[i].region!=beforeRegion){
			var region=document.createElement('td');
			region.innerHTML=data[i].region;
			beforeRegion=data[i].region;
			regionRow=1;
			tr.appendChild(region);
		}
		else{
			regionRow++;
			region.setAttribute('rowspan',regionRow);
		}

		region.innerHTML=data[i].region;
		for(var j=0;j<=data[i].sale.length-1;j++){
			var td=document.createElement('td');
			td.innerHTML=data[i].sale[j];
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
}
function showTableHead(){
	var head=['商品','地区','一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
	var tr=document.createElement('tr');
	for(var i=0;i<=head.length-1;i++)
	{
		var td=document.createElement('td');
		td.innerHTML=head[i];
		tr.appendChild(td);
	}
	table.appendChild(tr);
}
showTable(sourceData);