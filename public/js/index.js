'use strict';

const angular = require('angular');

const app = angular.module('GitHubApp', [])
  .controller('GitController', ['$http', function($http) {
    this.smokeTest = [];
    this.imageUrl = [];
    this.followers = [];
    this.following = [];
    this.getGitHub = function() {
      console.log('Get data has been hit')
      $http.get('https://api.github.com/users/sgruse')
      .then((result) => {
        console.log('RESULT FROM GIT DATA', result);
        this.smokeTest.push(result.data);
        this.imageUrl = result.data.avatar_url;
        this.followers = result.data.followers;
        this.following = result.data.following;
      })
    }
    this.getRepos = function() {
      $http.get('https://api.github.com/users/sgruse/repos')
      .then((result) => {
        console.log(result);
        this.allRepos = result.data;
      })
    }
  }]);
