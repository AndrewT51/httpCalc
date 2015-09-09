var http = require('http');
var PORT = 8000;
var server = http.createServer(function(request, response){

	var urlArray = request.url.split('/');
	urlArray.shift();
	if (urlArray[0] === 'math'){
		urlArray.shift();

		switch(urlArray[0]){
			case 'add':
			urlArray.shift();
			var answer = urlArray.reduce(function(acc, current){
				return parseInt(acc) + parseInt(current);
			} );
			response.end( '<h1>' + answer + '</h1>' );
			break;
			
			case 'minus':
			urlArray.shift();
			var answer = urlArray.reduce(function(acc, current){
				return parseInt(acc) - parseInt(current);
			} );		
			response.end( '<h1>' + answer + '</h1>');
			break;

			case 'divide':
			urlArray.shift();
			var answer = urlArray.reduce(function(acc, current){
				return parseInt(acc) / parseInt(current);
			} );		
			response.end( '<h1>' + answer + '</h1>');

			case 'multiply':
			urlArray.shift();
			var answer = urlArray.reduce(function(acc, current){
				return parseInt(acc) * parseInt(current);
			} );		
			response.end( '<h1>' + answer + '</h1>');
			break;

			default:
			response.end('<h1> Enter a valid mathematical path: localhost:8000/math/[operator]/[n1]/[n2] </h1>');
		}
	}
	response.end('<h1> Not a valid path </h1>');
});

server.listen(PORT, function(){
	console.log('Server now listening on  port '+ PORT+'!');
});


