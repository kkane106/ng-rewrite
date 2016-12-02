// Store a reference to the 'todoApp' module in the app variable
var app = angular.module('todoApp');

function AppController() {
}

app.component('appComponent', {
    template: `
    <nav-component>Loading...</nav-component>
    <todos-component>Loading...</todos-component>
    `,
    controller: AppController
});