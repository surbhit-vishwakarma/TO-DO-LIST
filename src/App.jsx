import { useState } from "react";
import "./App.css";
import Table from "./components/Table"; // Adjusted the import

function App() {
  const [data, setData] = useState(""); // Main input state
  const [modalData, setModalData] = useState(""); // Modal input state
  const [todo, setTodo] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const onSubmit = () => {
    if (data.trim() === "") return; // Prevent empty submissions
    setTodo((prevTodo) => [...prevTodo, data]);
    setData(""); // Clear main input
  };

  const onDelete = (id) => {
    const prevTodo = todo.filter((_, i) => i !== id);
    setTodo(prevTodo);
  };

  const onEdited = () => {
    const updatedTodo = [...todo]; // Create a copy of the todo array
    updatedTodo[editIndex] = modalData; // Update the specific item with modal data
    setTodo(updatedTodo);
    setIsEdit(false);
    setModalData(""); // Clear modal input after editing
  };

  const onEdit = (id) => {
    setEditIndex(id);
    setModalData(todo[id]); // Load the current todo item into the modal input for editing
    setIsEdit(true);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center mt-32">
        <h1 className="font-mono text-2xl text-[#050505] font-bold ">
          Welcome to TODO LIST!!
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        <input
          type="text"
          className="w-[700px] h-12 border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-300"
          placeholder="Enter text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button
          className="border border-black ml-3 rounded-md p-3 bg-[#FFB0B0]"
          onClick={onSubmit}
        >
          Enter
        </button>
      </div>
      <Table list={todo} deletewa={onDelete} onEditwa={onEdit} />
      {isEdit && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        className="text-base font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Updating Values..
                      </h3>
                      <input
                        type="text"
                        className="w-[400px] h-12 border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-300"
                        placeholder="Enter updated text"
                        value={modalData} // Use modalData here
                        onChange={(e) => setModalData(e.target.value)} // Update modalData instead of data
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={onEdited}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
