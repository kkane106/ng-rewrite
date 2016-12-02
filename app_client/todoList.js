var app = angular.module('todoApp');

function TodoListController (todoService) {
    var vm = this;

    vm.delete = function(t) {
        todoService.destroy(t.id)
            .then(function(){
                var index = vm.todos.indexOf(t);
                vm.todos.splice(index,1);
            })
            .catch(function(error){
                console.error(error);
                // handle
            })
    }
}
app.component('todoList', {
    template: `
        <div class="container">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Mark</th>
                        <th>Done?</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="todo in $ctrl.todos | completedFilter:$ctrl.showCompleted">
                        <td><a href="#/todo/{{todo.id}}">{{todo.title}}</a></td>
                        <td>
                            <input type="checkbox" ng-model="todo.completed" />
                        </td>
                        <td>{{todo.completed}}</td>
                        <td><button class="btn btn-danger" ng-click="$ctrl.delete(todo)">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>`,
    controller: TodoListController,
    bindings: {
        todos : "=",
        showCompleted : "="
    }
})