var app = angular.module('todoApp');

function TodosController(todoService, $scope, $location) {
    var vm = this;
    vm.todo = {};
    vm.todos = [];
    vm.incompleteTodos = 0;
    vm.showCompleted = false;
    
    var loadTodos = function(){
        todoService.index()
        .then(function(todos) {
            vm.todos = todos;
            $scope.$apply();
        });
    }

    loadTodos();

    vm.addTodo = function(todo){
        let copy = angular.copy(todo);
        todoService.create(copy)
            .then(function(){
                loadTodos();
                vm.todo = {};
            })
            .catch(function(){
                //handle error
                console.error("add failed")
            })
    }
    
    vm.countTodosByCompleteion = function(completion) {
        var count = 0;
        vm.todos.forEach(function(t) {
            if (t.completed === completion) {
                count++;
            }
        })
       return count;
    }
    
}

app.component('todosComponent', {
    template: `
    <style>
        footer {
            margin-top:1em;
            width:100%;
            text-align:center;
        }
        
        footer span {
            font-size:1.2em;
        }


    </style>
    <div class="container">
        <div class="well form-group">
            <input type="text" class="form-control" placeholder="new todo" ng-model="$ctrl.todo.title" />
            <button type="submit" class="btn btn-primary" ng-click="$ctrl.addTodo($ctrl.todo)">Add</button>
        </div>
        <incomplete-todo todo-count="$ctrl.countTodosByCompleteion(false)"></incomplete-todo>
        <todo-list todos="$ctrl.todos" show-completed="$ctrl.showCompleted"></todo-list>
        <label>Show Completed: </label><input type="checkbox" ng-model="$ctrl.showCompleted"/>
        <footer>
            <span>Completed Todos: <span class="label label-primary">{{$ctrl.countTodosByCompleteion(true)}}</span></span>
        </footer>
    </div>
    `,
    controller: TodosController
})