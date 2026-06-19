/*
Написать объект ToDoList, который хранит в себе задачи { ‘title’: ‘Помыть посуду’, id: 1, priority: 1 } и имеет методы:

Добавить задачу
Удалить задачу по id
Обновить имя или приоритет по Id
Отсортировать задачи по приоритету
*/
const toDoList = {
    lastId: 0,
    tasks: [],
    addTask: function (title, priority) {
        const hasPriority = this.tasks.find(
            t => t.priority === priority
        );
        if (hasPriority) {
            console.log(
                `Ошибка: есть приоритет ${priority}`
            );
            return;
        }
        this.lastId += 1;
        this.tasks.push(
            {id: this.lastId, title, priority}
        );
    },
    removeTask: function (id) {
        const pose = this.findTask(id);
        if (pose !== -1) {
            this.tasks = [
                ...this.tasks.slice(0,pose),
                ...this.tasks.slice(pose+1,this.tasks.length),
            ]
        }
    },
    updateTask: function (id, title = null, priority = null) {
        const pose = this.findTask(id);
        if (pose !== -1) {
            if (title !== null) {
                this.tasks[pose].title = title
            }
            if (priority !== null) {
                this.tasks[pose].priority = priority
            }
        }
    },
    sortTasks: function () {
        this.tasks.sort((a,b) => a.priority - b.priority);
    },
    findTask: function (id) {
        return this.tasks.findIndex(t => t.id === id);
    }
};

toDoList.addTask('Помыть посуду', 1);
toDoList.addTask('Сделать уборку', 2);
toDoList.addTask('Приготовить ужин', 3);
toDoList.addTask('Постирать', 3);
toDoList.addTask('Постирать', 4);
toDoList.updateTask(1, null, 5);
toDoList.removeTask(3);
toDoList.sortTasks();
console.log(toDoList.tasks);
