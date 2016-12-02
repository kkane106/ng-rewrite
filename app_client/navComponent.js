var app = angular.module('todoApp');

function NavController() {
	var vm = this;
    vm.title = 'NgTodo';
    
} 

app.component('navComponent', {
    template: `
	<nav>
	    <h1>{{$ctrl.title}}</h1>
	    <ul class="nav nav-tabs">
	    	<li role="presentation"><a href="#/">Todos</a></li>
	    	<li role="presentation"><a href="#/">About</a></li>
	    	<li role="presentation"><a href="#/">Contact</a></li>
	    </ul>
	</nav>
    `,
    controller: NavController,
})