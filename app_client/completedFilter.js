var app = angular.module('todoApp');

app.filter('completedFilter', function(){
    return function(todos, showCompleted) {
        var results = [];
        todos.forEach(function(t) {
            if (!t.completed || showCompleted) {
                results.push(t);
            }
        })
        return results;
    }
})