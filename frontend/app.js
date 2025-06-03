var app = angular.module('ProductApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: 'views/signup.html',
      controller: 'AuthController'
    })
    .when('/products', {
      templateUrl: 'views/productList.html',
      controller: 'ProductController'
    })
    .when('/add', {
      templateUrl: 'views/productForm.html',
      controller: 'ProductController'
    })
    .when('/edit/:id', {
      templateUrl: 'views/productForm.html',
      controller: 'ProductController'
    })
    .otherwise({ redirectTo: '/login' });

  $locationProvider.hashPrefix('');
});
