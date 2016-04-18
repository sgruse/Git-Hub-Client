'use strict';

const angular = require('angular');

const app = angular.module('GitHubApp', [])
  .controller('GitController', ['$http', function($http) {
    this.smokeTest = [];
    this.imageUrl = [];
    // this.repos = ['austin', 'brain'];
    this.getGitHub = function() {
      console.log('Get data has been hit')
      $http.get('https://api.github.com/users/sgruse')
      .then((result) => {
        console.log('RESULT FROM GIT DATA', result);
        this.smokeTest.push(result.data);
        this.imageUrl = result.data.avatar_url;
      })
    }
    this.getRepos = function() {
      // var repos = ['sdfd', 'sdf'];
      $http.get('https://api.github.com/users/sgruse/repos')
      .then((result) => {
        console.log(result);
        // result.data.forEach(function(repo){
        //   console.log(repo.name);
        //   repos.push(repo.name);
        // })
        this.allRepos = result.data;
      })
    }
  }]);
