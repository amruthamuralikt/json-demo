var app1=angular.module("app1",[]);
app1.controller("ctrl2",function($scope,$http)

{
$http.get("sample.json")
.then(function(response){
    $scope.sample=response.data;

});

});