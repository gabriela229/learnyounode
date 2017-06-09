var fs = require('fs');

var path = require('path');


fs.readdir(process.argv[2], function(err,list){

	list.forEach(function(val,ind){

		if(path.extname(val) === "." + process.argv[3]){

			console.log(val);
		}

	})
	
})