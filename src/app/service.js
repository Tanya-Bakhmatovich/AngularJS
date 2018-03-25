import angular from 'angular';

angular
  .module('todoApp')
  .service('storageService', [() => {
      const todos = [];
     return {
       todos
     };
 }]);
