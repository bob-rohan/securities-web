// Config
securitiesApp.config(function($routeProvider){
   
    $routeProvider
    
    .when('/', {
        templateUrl: '../html/home.html',
        controller: 'securitiesController'
    })
    
});