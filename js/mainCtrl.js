var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){

	$scope.quotes = dataService.getData();
	$scope.showAdd = false;
	$scope.showRemove = false;
	$scope.showFilter = false;
	$scope.classes = [
		'xlarge',
		'large',
		'medium',
		'small'
	];

	$scope.showAddQuote = function() {
		$scope.showAdd = !$scope.showAdd;
		$scope.showRemove = false;
		$scope.showFilter = false;	
	}

	$scope.showRemoveQuote = function() {
		$scope.showRemove = !$scope.showRemove;
		$scope.showAdd = false;
		$scope.showFilter = false;
	}
	$scope.showFilterQuote = function (){
		$scope.showFilter = !$scope.showFilter;
		$scope.showRemove = false;
		$scope.showAdd = false;
	}

	$scope.addQuote = function() {
		if($scope.quote.text && $scope.quote.author){
			dataService.addData({
				text: $scope.quote.text, 
				author: $scope.quote.author});
			$scope.showAdd = false;
			$scope.quote.text = '';
			$scope.quote.author = '';
		}
		
	}

	$scope.removeQuote = function() {
		if($scope.quote.text && $scope.quote.author){
			dataService.removeData($scope.quote.text, $scope.quote.author);
			$scope.showRemove = false;
			$scope.quote.text = '';
			$scope.quote.author = '';
		}

	}



}).
directive("ngRandomClass", function () {
    return {
        restrict: 'EA',
        replace: false,
        scope: {
            ngClasses: "="
        },
        link: function (scope, elem, attr) {            
 
            //Add random background class to selected element
            elem.addClass(scope.ngClasses[Math.floor(Math.random() * (scope.ngClasses.length))]);
        }
    }
});