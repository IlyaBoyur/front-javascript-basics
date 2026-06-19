/*
Возьмите объект из предыдущего домашнего задания
 и последовательно примените все его методы на новый объект:

const newTask = {
    tasks: [{ 
        id: 1, 
        name: ‘тест’, 
        description: ‘описание’,
        order: 0
    }];
}
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


const newTask = {
    tasks: [
        { 
            id: 1, 
            name: 'тест', 
            description: 'описание',
            order: 0
        }
    ]
}
const toDoListNew = newTask;
toDoListNew.lastId = toDoList.lastId;
toDoListNew.addTask = toDoList.addTask;
toDoListNew.removeTask = toDoList.removeTask;
toDoListNew.updateTask = toDoList.updateTask;
toDoListNew.sortTasks = toDoList.sortTasks;
toDoListNew.findTask = toDoList.findTask;


toDoListNew.addTask('Помыть посуду', 1);
toDoListNew.addTask('Сделать уборку', 2);
toDoListNew.addTask('Приготовить ужин', 3);
toDoListNew.addTask('Постирать', 3);
toDoListNew.addTask('Постирать', 4);
toDoListNew.updateTask(1, null, 5);
toDoListNew.removeTask(3);
toDoListNew.sortTasks();
console.log(toDoListNew.tasks);
