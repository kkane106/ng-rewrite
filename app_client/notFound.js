var app = angular.module('todoApp');

function NotFoundController() { }

app.component('notFound', {
    template: `<h3>404: Not found</h3>`,
    controller: NotFoundController
})