import TaskCard from "./TaskCard";

function TaskList({ tasks, toggleTask , deleteTask , editTask }) {

    if (tasks.length === 0) {
        return (
            <div className="task-list">
                <p>No tasks yet. Add your first task!</p>
            </div>
        );
    }

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                    editTask={editTask}
                />
            ))}
        </div>
    );
}

export default TaskList;