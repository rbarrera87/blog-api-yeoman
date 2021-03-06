'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('postApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have no items to start', function () {
    expect(scope.posts.length).toBe(0);
  });
});
