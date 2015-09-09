var http = require('http');
var PORT = 8000;
var server = http.createServer(function(request, response){

	switch(request.url.substring(0,9)){
		case '/math/add':
		var addition = request.url.substring(10);
		sumArray = addition.split('/');
		var answer = parseInt(sumArray[0]) + parseInt(sumArray[1])
		response.end( '<h1>' + answer + '</h1>' );
		break;
		
		case '/math/min':
		var minus = request.url.substring(12);
		sumArray = minus.split('/');
		var answer = parseInt(sumArray[0]) - parseInt(sumArray[1])		
		response.end( '<h1>' + answer + '</h1>');
		break;

		case '/math/div':
		var divide = request.url.substring(13);
		sumArray = divide.split('/');		
		response.end('<h1>' + parseInt(sumArray[0]) / parseInt(sumArray[1]) + '</h1>');

		case '/math/mul':
		var multiply = request.url.substring(15);
		sumArray = multiply.split('/');
		var answer = parseInt(sumArray[0]) * parseInt(sumArray[1])		
		response.end( '<h1>' + answer + '</h1>');
		break;

		default:
		response.end('<h1> Enter a valid mathematical path: localhost:8000/math/[operator]/[n1]/[n2] </h1>');
	}
});

server.listen(PORT, function(){
	console.log('Server now listening on  port '+ PORT+'!');
});


