var app = angular.module('todoApp');

app.config(function($routeProvider){
    console.log("loading routes");
    $routeProvider
        .when('/', {
            template: '<app-component>loading...</app-component>'
        })
        .when('/todo/:id', {
            template: '<todo-detail todo="$resolve.todo">loading...</todo-detail>',
            resolve: {
                todo: function(todoService, $route, $location){
                    console.log("in route")
                    return todoService.show(parseInt($route.current.params.id))
                        .then(function(todo){
                            console.log(todo)
                            return todo;
                        })
                        .catch(function(error) {
                            console.error(error);
                            $location.path("/_404");
                        })
                }
            }
        })
        .when('/_404', {
            template: '<not-found></not-found>'
        })
        .otherwise({
            redirectTo: '/'
        })
});