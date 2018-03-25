import angular from 'angular';

angular
    .module('todoApp')
    .controller('TodoController', ['$scope', '$state', '$resource', '$stateParams', 'storageService', (
        $scope,
        $state,
        $resource,
        $stateParams,
        storageService,
    ) => {
        const todos = $resource('/todo.json');

        storageService.todos.length === 0 && todos.get({a:'a'})
            .$promise.then(function(response) {
                storageService.todos = response.todos ? response.todos : storageService.todos;
                $state.go('list');
            })
            .catch(err => console.log(err));

        $scope.listOfTodo = storageService.todos;
        $scope.listOfTodoInDone = storageService.todos.filter(({ done }) => done);
        $scope.listOfTodoNew = storageService.todos.filter(({ done }) => !done);

        const taskForEditing = storageService.todos.find((item, idx) =>
            idx === Number($stateParams.taskId));

        $scope.text = taskForEditing ? taskForEditing.text : '';
        $scope.title = taskForEditing ? taskForEditing.title : '';

        $scope.addNewTask = () => {
            if (taskForEditing) {
                storageService.todos[$stateParams.taskId].text = $scope.text;
                storageService.todos[$stateParams.taskId].title = $scope.title;

            } else {
                storageService.todos.push({
                    title: $scope.title,
                    text: $scope.text,
                    date: new Date(),
                    done: false,
                    time: new Date().getTime()
                });
            }
            $state.go('list');
        }

        $scope.sortTodosName = () => {
            $scope.sortTodosByName = !$scope.sortTodosByName ? 'title' : undefined;
        };

        $scope.sortTodosDates = () => {
            $scope.sortTodosByDate = !$scope.sortTodosByDate ? 'time' : undefined;
        };

        $scope.editTask = (index) => {
            $state.go('edittask', {
                taskId: index
            });
            $scope.title = $scope.listOfTodo[index].title;
            $scope.text = $scope.listOfTodo[index].text;
        };

        $scope.filterTodos = (day) => {
            $scope.listOfTodo = storageService.todos.filter(({ time }) =>
                time > Number(Date.now()) - Number(day) * 86400000);
        }
    }])
