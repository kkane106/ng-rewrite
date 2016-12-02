var app = angular.module('todoApp');

function TodoDetailController(todoService) {
    var vm = this;
    vm.save = function(t) {
        todoService.update(t)
            .then(function(){
                // handle success
                console.log("success")
            })
            .catch(function(error){
                console.error(error);
                // handle error
            })
    }
}

app.component('todoDetail', {
    template: `
    <nav-component>Loading...</nav-component>
    <form class="container">
        <div class="form-group row">
            <label for="todo_id" class="col-xs-2">Id:</label>
            <div class="col-xs-10">
                <span id="todo_id">{{$ctrl.todo.id}}</span>
            </div>
        </div>

        <div class="form-group row">
            <label for="title" class="col-xs-2 col-form-label">Title:</label>
            <div class="col-xs-10">
                <input type="text" id="title" class="form-control" ng-model="$ctrl.todo.title" ng-blur="$ctrl.save($ctrl.todo)" />
            </div>
        </div>

        <div class="form-check row">
            <label for="complete_todo" class="col-xs-2 form-check-label">Complete?:</label> 
            <div class="col-xs-10">
                <input type="checkbox" id="complete_todo" class="form-check-input" ng-model="$ctrl.todo.completed" ng-change="$ctrl.save($ctrl.todo)" />
            </div>
        </div>
        <div class="form-group row">
            <label for="desc" class="col-xs-2">Description:</label>
            <textarea id="desc" class="form-control col-xs-10" rows="3" ng-model="$ctrl.todo.description" ng-blur="$ctrl.save($ctrl.todo)" />
        </div>
    </form>
    `,
    controller: TodoDetailController,
    bindings: {
        todo: '<'
    }
})