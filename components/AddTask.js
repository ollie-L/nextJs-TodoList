import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { addTodo } from "@/pages/api/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

function AddTask() {
  const [isOpen, setIsOpen] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState("")
  const router = useRouter();

  const handleSubmitNewTodo = async (e) =>{
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskValue
    })
    setNewTaskValue("");
    setIsOpen(false);
    router.refresh();
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="btn btn-primary w-full"
      >
        Add New Task
        <AiOutlinePlus className="ml-2" size={20} />
      </button>

      <Modal modalOpen={isOpen} setModalOpen={setIsOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg">Add new task</h3>
          <div className="modal-action">
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-ghost w-full"
            />
            <button type="submit" className="btn">Submit</button>
          </div> 
        </form>
      </Modal>
    </div>
  );
}

export default AddTask;
