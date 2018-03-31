import angular from 'angular';
import template from './todo-new-list.html';

angular
.module('todoApp')
.directive('newlist', () => ({ template }));
