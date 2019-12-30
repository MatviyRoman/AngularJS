"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var todos = [
            {
                title: 'Learn JavaScript',
                completed: true
            },
            {
                title: 'Learn Angular 2',
                completed: false
            },
            {
                title: 'Writing App',
                completed: false
            }
        ];
        return { todos: todos };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=data.service.js.map