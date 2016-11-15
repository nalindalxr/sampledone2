var entities = [];
var http = require('http');
exports.addEntity = function (todo) {
	entities.push(todo);
};

exports.getEntities = function () {
	var req = http.get("http://localhost:9090/api/getEntities", function (res) {
		console.log('STATUS: ' + res.statusCode);
		console.log('HEADERS: ' + JSON.stringify(res.headers));
		// Buffer the body entirely for processing as a whole.
		var bodyChunks = [];
		res.on('data', function (chunk) {
			// You can process streamed parts here...
			bodyChunks.push(chunk);
		}).on('end', function () {
			var body = Buffer.concat(bodyChunks);
			console.log('BODY: ' + body);
			return body;
		})
	});

	req.on('error', function (e) {
		console.log('ERROR: ' + e.message);
	});
};


