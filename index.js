const express 		= require("express");
const bodyparser 	= require("body-parser");
const app     		= express();
const port    		= 3000;


app.get("/api/timestamp/:date_string",(req,res) => {
	var date_string = req.params.date_string;
	var result 		= null;
	console.log(date_string);
	if (date_string == "" || date_string == null){
		date_string  = "";
	}


	time = new Date(date_string);

	if (parseInt(date_string) != NaN && time == "Invalid Date"){
		
		date_string = parseInt(date_string);
		time = new Date(date_string);
	}

	if(time == "Invalid Date"){

		result = {
			"error":time
		}

	}else{

		result = {
			"unix":time.getTime(),
			"utc" :time.toUTCString()
		}
	}

	res.send(result)
})
.get("/api/timestamp/",(req,res) => {
	var time = new Date();
	result = {
			"unix":time.getTime(),
			"utc" :time.toUTCString()
		}
	res.send(result)
})


app.listen(port,() => {
	console.log("listen on port "+port);
})