'use strict';

describe('Controller: ViewchatCtrl', function () {

  // load the controller's module
  beforeEach(module('proyectoChatFApp'));

  var ViewchatCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewchatCtrl = $controller('ViewchatCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ViewchatCtrl.awesomeThings.length).toBe(3);
  });
});
