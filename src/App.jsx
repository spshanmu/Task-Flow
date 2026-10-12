import { useState , useEffect} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("taskflow-tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
});
  const [filter, setFilter] = useState("all");
  
  useEffect(() => {
    localStorage.setItem(
        "taskflow-tasks",
        JSON.stringify(tasks)
    );
}, [tasks]);

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
      (task) => task.completed
  ).length;

  const pendingTasks = tasks.filter(
      (task) => !task.completed
  ).length;

  const filteredTasks = tasks.filter((task) => {

    if (filter === "pending") {
        return !task.completed;
    }

    if (filter === "completed") {
        return task.completed;
    }

    return true;
});

  const addTask = (taskTitle) => {
    const newTask = {
        id: Date.now(),
        title: taskTitle,
        completed: false
    };

    setTasks([...tasks, newTask]);
};
  const toggleTask = (id) => {
    setTasks(
        tasks.map((task) =>
            task.id === id
                ? { ...task, completed: !task.completed }
                : task
        )
    );
};
  const deleteTask = (id) => {
    setTasks(
        tasks.filter((task) => task.id !== id)
    );
};
  const editTask = (id, newTitle) => {
    setTasks(
        tasks.map((task) =>
            task.id === id
                ? { ...task, title: newTitle }
                : task
        )
    );
};
    return (
        <div className="app">
            <Navbar />

            <main>
                <h2>Task Management Dashboard</h2>

                <div className="stats">
                    <div className="stat-card">
                        <h3>Total Tasks</h3>
                        <p>{totalTasks}</p>
                    </div>

                    <div className="stat-card">
                        <h3>Pending</h3>
                        <p>{pendingTasks}</p>
                    </div>

                    <div className="stat-card">
                        <h3>Completed</h3>
                        <p>{completedTasks}</p>
                    </div>
                </div>

                <TaskForm addTask={addTask} />

                <FilterBar
                      filter={filter}
                      setFilter={setFilter}
                
                />

                <TaskList
                    tasks={filteredTasks}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                    editTask={editTask}
                />
            </main>
        </div>
    );
}

export default App;