onmessage=function(event){
	var intArray=JSON.parse(event.data);
	var sum=0;
	for(var i=0;i<intArray.length;i++){
		sum+=parseInt(intArray[i]);
	}
	intArray.push(sum);
	self.postMessage(JSON.stringify(intArray));
	close();
}