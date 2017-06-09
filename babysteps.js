



function count(arr){
	var sum = 0;
	for(var i = 2; i<arr.length; i++){
		sum += +arr[i];
	}

	console.log(sum);
}

count(process.argv);