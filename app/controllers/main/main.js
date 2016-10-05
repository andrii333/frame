module.exports = function Controllers($scope)
	{



	$scope.init = init;

	function init()
		{
		console.log('Main controller');
		}


	}


module.exports.$inject = ['$scope'];