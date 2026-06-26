import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxja/add/operator/toPromise';


import { Todo } from './todo';

@Injectable()
export class TodoService {
    private apiUrl = 'api/todos';
    todos: Todo[] = [];

    constructor(private http: Http) {}

    getTodos(): Promise<Todo[]> {
        return this.http.get(this.apiUrl)
                        .toPromise()
                        .then(res => res.json().data)
                        .then(todos => this.todos = todos)
                        .catch(this.handlerError);
    }

    createTodo(title: string) {
        let todo = new Todo(title);

        this.todos.push(todo);
    }

    deleteTodo(todo: Todo) {
        let index = this.todos.indexOf(todo);

        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }

    toggleTodo(todo: Todo) {
        todo.completed = !todo.completed;
    }

    private handlerError(error: any) {
        console.error('Stalasq pomulka', error);
        return Promise.reject(error.message || error);
    }
}