import React from "react";
import { useState, useContext } from "react";
import { TasksContext } from '../contextApi/TasksContext';

const AddTaskModal = ({ setIsModalOpen }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const [error, setError] = useState(null);
  const { addTask } = useContext(TasksContext);

  const handleSubmit = () => {
    if (title.trim() === "" || description.trim() === "") {
      setError("Fields cannot be empty");
      return;
    }

    const newTask = {
      title,
      description,
      priority,
      isComplete: false,
      createdAt: new Date().toISOString()
    };

    addTask(newTask);
    setIsModalOpen(false);
    setTitle("");
    setDescription("");
    setPriority("low");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-xl flex flex-col gap-5">
        {/* Header */}
        <h2 className="text-lg font-bold text-gray-800">Add New Task</h2>

        {/* Title */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="task" className="text-sm font-medium text-gray-600">
            Task Title
          </label>
          <input
            id="task"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setError("");
            }}
            placeholder="Enter task title"
            className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-400 transition-colors"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="desc" className="text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            id="desc"
            name="taskdetails"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setError("");
            }}
            rows="4"
            placeholder="Enter task description"
            className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-400 transition-colors resize-none"
          />
        </div>

        {/* Priority */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="priority" className="text-sm font-medium text-gray-600">
            Priority
          </label>
          <select
            id="priority"
            name="level"
            value={priority}
            onChange={(e) => {
              setPriority(e.target.value);
              setError("");
            }}
            className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-400 transition-colors bg-white cursor-pointer"
          >
            <option value="high">🔴 High</option>
            <option value="medium">🟡 Medium</option>
            <option value="low">🟢 Low</option>
          </select>
        </div>

        <div className="mb-2">
          {error && <p className="text-red-600 text-sm">{error}</p>}
        </div>

        {/* Submit */}
        <div className="flex justify-between items-center gap-4">
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-6 py-2.5 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2.5 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors font-medium"
          >
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
