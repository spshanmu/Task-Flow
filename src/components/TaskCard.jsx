import { useState } from "react";

function TaskCard({ task, toggleTask, deleteTask, editTask }) {

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);

    const handleSave = () => {

        if (editedTitle.trim() === "") {
            return;
        }

        editTask(task.id, editedTitle.trim());

        setIsEditing(false);
    };

    return (
        <div className={`task-card ${task.completed ? "completed" : ""}`}>

            {isEditing ? (

                <div>
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={(event) => {
                            setEditedTitle(event.target.value);
                        }}
                    />

                    <button onClick={handleSave}>
                        Save
                    </button>
                </div>

            ) : (

                <>
                    <h3>{task.title}</h3>

                    <p>
                        Status:{" "}
                        {task.completed
                            ? "Completed"
                            : "Pending"}
                    </p>

                    <div>

                        <button
                            onClick={() => toggleTask(task.id)}
                        >
                            {task.completed ? "Undo" : "Complete"}
                        </button>

                        <button
                            onClick={() => setIsEditing(true)}
                        >
                            Edit
                        </button>

                        <button
                            onClick={() => deleteTask(task.id)}
                        >
                            Delete
                        </button>

                    </div>
                </>

            )}

        </div>
    );
}

export default TaskCard;