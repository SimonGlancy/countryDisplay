app.controller('MainCtrl', [
'$scope', 'countriesService',
function($scope, countriesService){

  $scope.countries = [];


  $scope.sort = function(property) {
    $scope.countries.sort(dynamicSort(property));
  };

  $scope.getCountries = function() {
    $scope.countries = countriesService.countries;
  }


  function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
  }



}])
