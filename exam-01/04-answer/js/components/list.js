class List {
    #container;
    #list;
    #onChange;
    #filterType;

    constructor(container, onChange) {
        this.#container = container;
        this.#onChange = onChange;
        this.#render();
        this.#setup();
    }

    #render() {
        this.#container.innerHTML = `
        <div class="main">
            <ul class="todo-list"></ul>
        </div>
        `;
    }

    #setup() {
        this.#list = document.querySelector('.todo-list');
        this.#filterType = 'all';
    }

    addNewTodo(todoItem) {
        const listItem = document.createElement('LI');

        listItem.innerHTML = `
        <input class="toggle" type="checkbox">
        <input class="item" type="text">
        <button class="destroy"></button>`;

        const itemInput = listItem.querySelector('.item');
        const toggle = listItem.querySelector('.toggle');
        const removeButton = listItem.querySelector('.destroy');

        itemInput.value = todoItem.content;
        toggle.checked = todoItem.completed;

        itemInput.addEventListener('keyup', this.#onTodoItemInputKeyup);
        toggle.addEventListener('change', this.#onCompletedToggleChange);
        removeButton.addEventListener('click', this.#onRemoveClick);

        this.#list.appendChild(listItem);
        this.#setListItemVisibleByFilterType(listItem);
    }

    #onTodoItemInputKeyup = (event) => {
        const { key } = event;

        if (key === 'Enter') {
            const input = event.target;
            const { value } = event.target;
            const listItem = input.closest('li');
            const todoIndex = this.#getListItemIndex(listItem);

            this.#onChange({
                value,
                action: 'edit',
                index: todoIndex,
            });
            this.#setListItemVisibleByFilterType(listItem);
        }
    };

    #onCompletedToggleChange = (event) => {
        const toggle = event.target;
        const { checked } = event.target;
        const listItem = toggle.closest('li');
        const todoIndex = this.#getListItemIndex(listItem);

        if (checked) {
            listItem.classList.add('completed');
        } else {
            listItem.classList.remove('completed');
        }

        this.#onChange({
            action: 'completed',
            index: todoIndex,
            value: checked,
        });
        this.#setListItemVisibleByFilterType(listItem);
    };

    #onRemoveClick = (event) => {
        const button = event.target;
        const listItem = button.closest('li');
        const todoIndex = this.#getListItemIndex(listItem);

        listItem.remove();

        this.#onChange({
            action: 'remove',
            index: todoIndex,
        });
    };

    #getListItemIndex(listItem) {
        const allItems = this.#container.querySelectorAll('li');
        const allItemsArray = Array.from(allItems);

        return allItemsArray.indexOf(listItem);
    }

    setAllItemsCompleted(completed) {
        const allItems = this.#container.querySelectorAll('li');

        for (let i = 0; i < allItems.length; i++) {
            const listItem = allItems[i];

            if (completed) {
                listItem.classList.add('completed');
            } else {
                listItem.classList.remove('completed');
            }
        }
    }

    setFilterType(filterType) {
        const allItems = this.#container.querySelectorAll('li');

        this.#filterType = filterType;

        for (let i = 0; i < allItems.length; i++) {
            const listItem = allItems[i];

            this.#setListItemVisibleByFilterType(listItem);
        }
    }

    #setListItemVisibleByFilterType(listItem) {
        const toggle = listItem.querySelector('.toggle');
        const isCompleted = toggle.checked;
        let shouldListItemVisible = true;

        if (this.#filterType === 'incompleted' && isCompleted) {
            shouldListItemVisible = false;
        } else if (this.#filterType === 'completed' && !isCompleted) {
            shouldListItemVisible = false;
        }

        if (shouldListItemVisible) {
            listItem.classList.remove('hidden');
        } else {
            listItem.classList.add('hidden');
        }
    }

    clearCompletedItems() {
        const allItems = this.#container.querySelectorAll('li');

        for (let i = 0; i < allItems.length; i++) {
            const listItem = allItems[i];
            const toggle = listItem.querySelector('.toggle');
            const isCompleted = toggle.checked;

            if (isCompleted) {
                listItem.remove();
            }
        }
    }
}

export default List;
