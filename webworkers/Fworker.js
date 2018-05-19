onmessage=function(event){
	var num=event.data;
	console.log(num);
	var intArray=[];
	for(var i=2;i<=num;i++){
		for(var j=2;j<=i/2;j++){
			if(i%j==0){
				break;
			}
		}
		if(j>i/2){
			intArray.push(i);
		}
	}
	var worker=new Worker("Cworker.js");
	worker.postMessage(JSON.stringify(intArray));
	worker.onmessage=function(event){
		postMessage(event.data);
	}
}