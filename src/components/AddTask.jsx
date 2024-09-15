import PropTypes from "prop-types";
import { useState } from "react";


const AddTask = ({ listTask, setlistTask }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === "" || description.trim() === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        setlistTask([...listTask, { title, description }]);
        setTitle(""); // Limpiar el campo de título
        setDescription(""); // Limpiar el campo de descripción
    };

    return (
        <section className="add-task">
            <h1>Agregar una tarea</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="task-title">Título</label>
                    <input
                        type="text"
                        id="task-title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Introduce el título"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="task-description">Descripción</label>
                    <textarea
                        id="task-description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Introduce la descripción de la tarea"
                        required
                    ></textarea>
                </div>

                <button id="task" type="submit">Agregar</button>
            </form>
        </section>
    );
};

AddTask.propTypes = {
    listTask: PropTypes.array.isRequired,
    setlistTask: PropTypes.func.isRequired,
};

export default AddTask;
