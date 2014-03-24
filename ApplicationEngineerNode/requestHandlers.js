var sys = require('sys'),
    https = require('https'),
    fs = require('fs'),
    qs = require('querystring');


function activity(response, postData){
	console.log("Request handler 'activity' was called.");

	fs.readFile('./transaction.html', function (err, data){
	        if(err){
        	        throw err;
       		 }
       		 response.writeHead(200, {"Content-Type":"text/html"});
       		 response.write(data);
       		 response.end();
	});
	
}


function currencyConversion(response, postData){
	console.log("Request handler 'currencyConversion' was called.");
 fs.readFile('./currencyConversionForm.html', function (err, data){
                if(err){
                        throw err;
                 }
                 response.writeHead(200, {"Content-Type":"text/html"});
                 response.write(data);
                 response.end();
        });
}


function conversionRate(response, postData){
	console.log("Request handler 'conversionRate' was called.");

fs.readFile('./conversionRateForm.html', function (err, data){
                if(err){
                        throw err;
                 }
                 response.writeHead(200, {"Content-Type":"text/html"});
                 response.write(data);
                 response.end();
        });

}


function convertCurrency(response, postData){
        console.log("Request handler 'convertCurrency' was called.");
	
	var amt = qs.parse(postData).amount,
		fromCode = qs.parse(postData).fromCurrencyCode,
		toCode = qs.parse(postData).toCurrencyCode;
	var cPath = '/convert/'+amt+'/'+fromCode+'/'+toCode+'?app_id=7cd96e2ef6e540b683bb00ea627682f0';
	console.log('cPath:'+cPath);

	var options = {
		host:'https://openexchangerates.org/api',
		path:cPath,
		method: 'GET'
	};
	console.info('options: ', options);
	
	var reqGet = https.get(options, function(res){
	res.on('data', function(data){
	
response.writeHead(200, {"Content-Type":"text/plain"});
        response.write("You've received : "+data.response);
        response.end();
});
});
reqGet.end();
reqGet.on('error', function(err){
 console.log('got error:' + err.message);
 console.log(err.stack);
});
	
}


function showConversionRate(response , postData){
        console.log("Request handler 'showConversionRate' was called.");
	response.writeHead(200, {"Content-Type":"text/plain"});
        response.write("You've sent: "+postData);
        response.end();
}

exports.activity = activity;
exports.currencyConversion = currencyConversion;
exports.conversionRate = conversionRate;
exports.convertCurrency = convertCurrency;
exports.showConversionRate = showConversionRate;
