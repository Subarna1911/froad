import React from "react";
import Button from "../components/Button";
import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import { Plus } from "lucide-react";

const AddTask = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative">
      <Button onClick={()=>setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white flex gap-2 items-center justify-center px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-blue-200">
        Add Task
        <Plus size={20} strokeWidth={2.5} />
      </Button>

      {isModalOpen && <AddTaskModal setIsModalOpen={setIsModalOpen}/>}
    </div>
  );
};

export default AddTask;
