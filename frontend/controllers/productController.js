app.controller('ProductController', function($scope, $http, $routeParams, $location) {
  const token = localStorage.getItem('token');
  $scope.products = [];
  $scope.form = {};
  $scope.page = 1;

  $scope.getProducts = function() {
    $http.get(`http://localhost:5000/api/products?page=${$scope.page}`)
      .then(res => {
        $scope.products = res.data.products;
        $scope.total = res.data.total;
      });
  };

  $scope.addProduct = function() {
    $http.post('http://localhost:5000/api/products', $scope.form, {
      headers: { Authorization: token }
    }).then(() => $location.path('/products'));
  };

  $scope.updateProduct = function() {
    const id = $routeParams.id;
    $http.put(`http://localhost:5000/api/products/${id}`, $scope.form, {
      headers: { Authorization: token }
    }).then(() => $location.path('/products'));
  };

  $scope.edit = function(product) {
    $location.path('/edit/' + product.id);
  };

  $scope.delete = function(id) {
    $http.delete(`http://localhost:5000/api/products/${id}`, {
      headers: { Authorization: token }
    }).then(() => $scope.getProducts());
  };

  if ($location.path().startsWith('/edit/')) {
    const id = $routeParams.id;
    $http.get(`http://localhost:5000/api/products?page=1`)
      .then(res => {
        const product = res.data.products.find(p => p.id == id);
        $scope.form = { name: product.name, price: product.price };
      });
  }

  $scope.getProducts();
});
