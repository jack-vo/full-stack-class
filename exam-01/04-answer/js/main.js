import Header from './components/header.js';
import List from './components/list.js';
import Footer from './components/footer.js';

class TodoApp {
    #container;
    #header;
    #list;
    #footer;
    #todos;

    constructor(container) {
        this.#container = container;

        this.#render();
        this.#setup();
    }

    #render() {
        this.#container.innerHTML = `
        <div class="todoapp">
            <div data-component="header"></div>
            <div data-component="list"></div>
            <div data-component="footer"></div>
        </div>`;
    }

    #setup() {
        this.#todos = [];

        this.#header = new Header(
            document.querySelector('[data-component="header"]'),
            this.#onAddNewTodo,
            this.#onSelectAllChange,
        );
        this.#list = new List(
            document.querySelector('[data-component="list"]'),
            this.#onTodoListChange,
        );
        this.#footer = new Footer(
            document.querySelector('[data-component="footer"]'),
            this.#onFilterChange,
            this.#onClearCompleted,
        );
    }

    #onAddNewTodo = (newTodoContent) => {
        const newItem = {
            content: newTodoContent,
            completed: false,
        };

        this.#todos.push(newItem);
        this.#list.addNewTodo(newItem);
        this.#footer.updateCount(this.#todos);
    };

    #onSelectAllChange = (completed) => {
        this.#todos = this.#todos.map((todo) => {
            todo.completed = completed;

            return todo;
        });

        this.#list.setAllItemsCompleted(completed);
        this.#footer.updateCount(this.#todos);
    };

    #onTodoListChange = (options) => {
        const { index, action, value } = options;
        const todoItem = this.#todos[index];

        if (action === 'edit') {
            todoItem.content = value;
        } else if (action === 'completed') {
            todoItem.completed = value;
        } else if (action === 'remove') {
            this.#todos.splice(index, 1);
        }

        this.#footer.updateCount(this.#todos);
    };

    #onFilterChange = (filterType) => {
        this.#list.setFilterType(filterType);
    };

    #onClearCompleted = () => {
        this.#todos = this.#todos.filter((todo) => !todo.completed);
        this.#list.clearCompletedItems();
    };
}

const container = document.querySelector('#app');
const app = new TodoApp(container);
