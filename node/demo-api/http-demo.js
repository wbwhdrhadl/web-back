let http = require('http'); // 설치 하지 않아도 되는 내장 모듈

function onRequest(request,response) {
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('Hello Node.js');
    response.end();
}

http.createServer(onRequest).listen(8888);