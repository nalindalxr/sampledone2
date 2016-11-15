var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http) {
	$scope.formData = {};

	// when landing on the page, get all todos and show them
	$http.get('/api/entities')
		.success(function(data) {
			$scope.entities = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	// when submitting the add form, send the text to the node API
	$scope.createEntity = function() {
		$http.post('/api/entities', $scope.formData)
			.success(function(data) {
				$scope.formData = {}; // clear the form so our user is ready to enter another
				$scope.entities = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

}