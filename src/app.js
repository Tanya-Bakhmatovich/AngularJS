import './app/app.js';
import './app/components/todo-header/todo-header.component';
import './app/components/todo-form/todo-form.component';
import './app/components/todo-list/todo-list.component';
import './app/components/edit-task/edit-task.component';
import './app/components/todo-done-list/todo-done-list.component';
import './app/components/todo-new-list/todo-new-list.component';

import './app/service.js';
import './app/config.js';
import './app/controller.js';

if (module.hot) {
  module.hot.accept('./app/app.js', function () {
    console.log('Accepting the updated printMe module!');
  })
}
