import React, { useContext } from "react";
import { TasksContext } from "../contextApi/TasksContext";
import { Trash2, CheckCircle, Circle } from "lucide-react";

const TaskCard = ({
  title,
  description,
  priority,
  isComplete,
  markComplete,
}) => {
  const { deleteTask } = useContext(TasksContext);

  const priorityColors = {
    low: "border-green-400 text-green-700 bg-green-50",
    medium: "border-yellow-400 text-yellow-700 bg-yellow-50",
    high: "border-red-400 text-red-700 bg-red-50",
  };

  const priorityStyle = priorityColors[priority] || "border-gray-300 text-gray-700 bg-gray-50";

  return (
    <div
      className={`relative w-full p-6 pb-20 rounded-2xl shadow-sm border-l-4 transition-all hover:shadow-md h-full flex flex-col ${priorityStyle} ${
        isComplete ? "opacity-75 grayscale-[0.3]" : ""
      }`}
    >
      <div className="flex justify-between items-start gap-4">
        <h3 className={`text-lg font-bold leading-tight ${isComplete ? "line-through" : ""}`}>
          {title}
        </h3>
        <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded-md border ${priorityStyle} whitespace-nowrap`}>
          {priority}
        </span>
      </div>

      <div className="grow mt-3 overflow-hidden">
        <p className={`text-sm leading-relaxed line-clamp-4 ${isComplete ? "text-gray-500" : "text-gray-600"}`}>
          {description}
        </p>
      </div>

      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center pt-4 border-t border-gray-100">
        <button
          onClick={() => markComplete(title)}
          className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
            isComplete
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
          }`}
        >
          {isComplete ? (
            <>
              <CheckCircle size={14} />
              Completed
            </>
          ) : (
            <>
              <Circle size={14} />
              Mark Complete
            </>
          )}
        </button>

        <button
          onClick={() => deleteTask(title)}
          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
          title="Delete task"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
