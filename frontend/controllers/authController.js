app.controller('AuthController', function($scope, $http, $location) {
  $scope.user = {};

  $scope.signup = function() {
    $http.post('http://localhost:5000/api/auth/signup', $scope.user)
      .then(() => $location.path('/login'))
      .catch(err => alert(err.data.message));
  };

  $scope.login = function() {
    $http.post('http://localhost:5000/api/auth/login', $scope.user)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        $location.path('/products');
      })
      .catch(err => alert(err.data.message));
  };
});
