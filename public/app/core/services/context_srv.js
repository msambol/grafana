define([
  'angular',
  'lodash',
  '../core_module',
  'app/core/store',
  'app/core/config',
],
function (angular, _, coreModule, store, config) {
  'use strict';

  coreModule.default.service('contextSrv', function() {

    function User() {
      if (config.bootData.user) {
        _.extend(this, config.bootData.user);
      }
    }

    this.hasRole = function(role) {
      return this.user.orgRole === role;
    };

    this.toggleSideMenu = function() {
      this.sidemenu = !this.sidemenu;
    };

    this.version = config.buildInfo.version;
    this.lightTheme = false;
    this.user = new User();
    this.isSignedIn = this.user.isSignedIn;
    this.isGrafanaAdmin = this.user.isGrafanaAdmin;
    this.isEditor = this.hasRole('Editor') || this.hasRole('Admin');
  });
});
