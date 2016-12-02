var app = angular.module('todoApp');

app.factory('todoService', function(){
    var service = {};

    var todos = [
        {id: 1, title: 'go round mums', description: 'this is a thing you need to do.', completed: false},
        {id: 2, title: 'get liz back', description: 'this is a thing you need to do.', completed: false},
        {id: 3, title: 'sort life out', description: 'this is a thing you need to do.', completed: false},
    ];

    service.index = function() {
        return new Promise(function(resolve,reject){
            resolve(todos);
        })
    }

    service.show = function(id) {
        return new Promise(function(resolve,reject){
            todos.forEach(function(t) {
                if (t.id === id) {
                    return resolve(t);
                }
            })
            reject("not found");
        })
    }

    service.create = function(t) {
        t.id = todos.length + 1;
        t.description = "Description tbd";
        t.completed = false;
        todos.push(t);
        console.log(todos)
        return new Promise(function(resolve,reject){
            resolve();
        })
    }

    service.update = function(t) {
        return new Promise(function(resolve,reject){
            todos.forEach(function(todo) {
                if (todo.id === t.id) {
                    todo.title = t.title;
                    todo.description = t.description;
                    todo.completed = t.completed;
                    return resolve(todo);
                }
            })
            return reject("todo not found");
        })
        
    }

    service.destroy = function(id) {
        return new Promise(function(resolve,reject){
            todos.forEach(function(todo, index, arr) {
                if (todo.id === id) {
                    arr.splice(index,1);
                    return resolve();
                }
            })
            reject("not found")
        })
    }

    return service;
})
