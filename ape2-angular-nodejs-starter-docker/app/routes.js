//var Entities = require('./models/entity');
var request = require("request");

module.exports = function (app,servicePort) {

	var _servicePort = servicePort;
	
	// get all todos
	app.get('/api/entities', function (req, res) {

		request.get("http://servicebase:"+_servicePort+"/api/getEntities", function (error, response, body) {
			if (error) {
				console.log(error);
			} else {
				res.json(JSON.parse(response.body)); // return all todos in JSON format
			}
		});

	});

	// create todo and send back all todos after creation
	app.post('/api/entities', function (req, res) {

		request.get("http://servicebase:"+_servicePort+"/api/getEntities", function (error, response, body) {
			if (error) {
				console.log(error);
			} else {
				res.json(JSON.parse(response.body)); // return all todos in JSON format
			}
		});

	});

	// application -------------------------------------------------------------
	app.get('*', function (req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};