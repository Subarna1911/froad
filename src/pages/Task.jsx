import React, { useState, useContext, useEffect } from "react";
import Container from "../components/Container";
import TaskBtn from "../components/TaskBtn";
import TaskCard from "../components/TaskCard";
import AddTask from "../components/AddTask";
import SearchBar from "../components/SearchBar";
import secbg from "../assets/secbg.webp";
import { TasksContext } from '../contextApi/TasksContext';
import { taskButtons } from '../utils/constant.js';

const Task = () => {
  const { allTasks, markComplete } = useContext(TasksContext);
  const [selectedFilter, setSelectedFilter] = useState("All Task");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);

  // Sync filtered tasks when allTasks, selectedFilter, or searchQuery changes
  useEffect(() => {
    let tasks = [...allTasks];

    //  Search Filter
    if (searchQuery) {
      tasks = tasks.filter(
        (task) =>
          task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          task.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Button Filter
    if (selectedFilter === "Completed Task") {
      tasks = tasks.filter((task) => task.isComplete);
    } else if (selectedFilter === "Not Completed Task") {
      tasks = tasks.filter((task) => !task.isComplete);
    } else if (selectedFilter === "Priority - HIGH") {
      tasks = tasks.filter((task) => task.priority === "high");
    } else if (selectedFilter === "Priority - MEDIUM") {
      tasks = tasks.filter((task) => task.priority === "medium");
    } else if (selectedFilter === "Priority - LOW") {
      tasks = tasks.filter((task) => task.priority === "low");
    }

    setFilteredTasks(tasks);
  }, [allTasks, selectedFilter, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div
      className="w-full flex justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${secbg})` }}
    >
      <Container>
        <div className="flex flex-col items-center text-center gap-6">
          
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
              Task <span className="text-blue-600">Tracker</span>
            </h1>
            <p className="text-lg font-medium text-gray-500 uppercase tracking-widest">
              Plan • Execute • Achieve
            </p>
          </div>

          {/* Add Task Trigger */}
          <div className="mt-4">
            <AddTask />
          </div>

          {/* Task Filter Buttons */}
          <div className="flex justify-center gap-2 md:gap-4 flex-wrap mt-8 max-w-4xl">
            {taskButtons.map((task) => (
              <TaskBtn
                key={task.id}
                onClick={() => setSelectedFilter(task.label)}
                className={`transition-all duration-300 ${
                  selectedFilter === task.label 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-100"
                }`}
              >
                {task.label}
              </TaskBtn>
            ))}
          </div>

          {/* Search Bar */}
          <div className="w-full flex justify-center mt-6">
            <SearchBar onSearch={handleSearch} placeholder="Search your tasks..." />
          </div>

          {/* Tasks Grid */}
          <div className="w-full mt-12">
            {filteredTasks.length === 0 ? (
              <div className="py-20 flex flex-col items-center gap-4 bg-white/50 rounded-3xl border border-dashed border-gray-300">
                <div className="text-gray-400 text-6xl">📝</div>
                <h3 className="text-xl font-bold text-gray-700">No tasks found</h3>
                <p className="text-gray-500">
                  {searchQuery 
                    ? `No results for "${searchQuery}"` 
                    : "Start by adding a new task to your list!"}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-left">
                {filteredTasks.map((task, index) => (
                  <TaskCard
                    key={task.title + index}
                    title={task.title}
                    description={task.description}
                    priority={task.priority}
                    isComplete={task.isComplete}
                    markComplete={markComplete}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Task;