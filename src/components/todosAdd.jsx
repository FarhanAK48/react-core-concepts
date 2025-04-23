import React, { useState, useEffect } from "react";

const TodosAdd = ({AddItem, editTodo}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log(title, desc);
    if (!title || !desc) {
      alert("Tile or Desc Should not be empty");
      return;
    }
    AddItem(title, desc);
    setDesc('');
    setTitle('');
  };
  useEffect(() => {
    if (editTodo) {
      setTitle(editTodo.title);
      setDesc(editTodo.desc);
    }
  }, [editTodo]);


  return (
    <>
      <div className="">
        <form onSubmit={submit}>
          <div className="">
            <label className="text-sm/6 flex font-medium text-gray-900">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="block w-full me-3 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              placeholder="Title"
            />
          </div>
          <div className=" mt-4">
            <label className="text-sm/6 flex font-medium text-gray-900">
              Description
            </label>

            <input
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 me-5 sm:text-sm/6"
              placeholder="Description..."
              type="text"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 mt-2 px-6 py-2 flex justify-start rounded-md text-white font-semibold"          >
            {editTodo ? "Update Todo" : "Add Todo"}
          </button>
       
        </form>
      </div>
    </>
  );
};

export default TodosAdd;
