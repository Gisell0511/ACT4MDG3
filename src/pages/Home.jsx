import { useState } from "react";
import AddTask from "../components/AddTask";
import Header from "../components/header/Header";
import SeeTask from "../components/SeeTask";
import WelcomePage from "../components/Welcome";

function Home() {
    const [showWelcome, setShowWelcome] = useState(true);
    const [showComponent, setShowComponent] = useState(true);
    const [listTask, setlistTask] = useState([]);

    const handleStart = () => {
        setShowWelcome(false); 
    };

    const handleDeleteTask = (index) => {
        // Filtra la lista de tareas para eliminar la tarea en el índice dado
        const updatedTasks = listTask.filter((_, i) => i !== index);
        setlistTask(updatedTasks);
    };

    return (
        <>
            {showWelcome ? (
                <WelcomePage onStart={handleStart} />
            ) : (
                <>
                    <Header setShowComponent={setShowComponent} />
                    {showComponent ? (
                        <AddTask listTask={listTask} setlistTask={setlistTask} />
                    ) : (
                        <SeeTask listTask={listTask} onDeleteTask={handleDeleteTask} />
                    )}
                </>
            )}
        </>
    );
}

export default Home;
