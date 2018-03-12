// Directives
securitiesApp.directive("tablePanel", function(){
   return {
       restrict: 'E',
       templateUrl: '../html/tablePanel.html',
       replace: true,
       scope: {
           // = Object
           securities: "="
       }
   } 
    
});