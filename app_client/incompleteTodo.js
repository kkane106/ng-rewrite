var app = angular.module('todoApp');

function IncompleteTodoController() {
	var vm = this;
	vm.warnUser = function(count) {
		if (count < 4) {
			return "label-success";
		}
		if (count >= 4 && count < 11) {
			return "label-warning";
		}
		return "label-danger";
	}
} 

app.component('incompleteTodo', {
    template: `<h3>Incomplete Todos: <span class="label" ng-class="$ctrl.warnUser($ctrl.todoCount)">{{$ctrl.todoCount}}</span></h3>`,
    controller: IncompleteTodoController,
    bindings: {
        todoCount: '<'
    }
})