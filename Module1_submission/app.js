(function () {
'use strict';

var app=angular.module('LunchCheck', [])
app.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope){
  $scope.lunchItem = "";
  $scope.message="";
  $scope.checkIfToomuch= function(){
  //Check to see if no data is entered
      if ($scope.lunchItem==""){
        $scope.message="Please Enter some Data";
        return;
      }
      //Call the function to check if the number of items
      var Flag =checkTooManyItems($scope.lunchItem);
      //Print appropriate message
      if (Flag=="Yes"){
            $scope.message = "Too much !";
            }
      else {
          $scope.message = "Enjoy !";
        }
      }
}

// Function to if the number of items exceed 3 or nor
function checkTooManyItems(lunchItem){

  var arrayOfLunchItem=lunchItem.split(',');
  var NoOfItems=arrayOfLunchItem.length
  //Omit items that dont have any value, empty spaces
    for (var i=0;i<arrayOfLunchItem.length;i++){
      if(arrayOfLunchItem[i]==""){
        NoOfItems=NoOfItems-1;
      }
    }
  // return Yes if Too many items, otherwise no
  if (NoOfItems > 3){
    return "Yes";
  }
else {
    return "No";
  }
}
})();
