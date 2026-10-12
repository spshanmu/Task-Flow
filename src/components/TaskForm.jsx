import { useState } from "react";

function TaskForm({ addTask }) {

    const [taskTitle, setTaskTitle] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (taskTitle.trim() === "") {
            return;
        }

        addTask(taskTitle);

        setTaskTitle("");
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Enter your task"
                value={taskTitle}
                onChange={(event) => setTaskTitle(event.target.value)}
            />

            <button type="submit">Add Task</button>

        </form>
    );
}

export default TaskForm;