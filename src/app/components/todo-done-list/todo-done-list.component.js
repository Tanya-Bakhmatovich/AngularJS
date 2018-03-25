import angular from 'angular';
import template from './todo-done-list.html';

angular
    .module('todoApp')
    .directive('donelist', () => ({ template }));
