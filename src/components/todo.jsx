import React, { useEffect, useState } from "react";
import TodoList from "./todoList";
import TodosAdd from "./todosAdd";
const Todo = () => {
  const [todoList, SetTodo] = useState([
    { id: 1, title: "Boltech", desc: "This is a software" },
    { id: 2, title: "Ibex", desc: "This is a Call center" },
    { id: 3, title: "Boltech", desc: "This is a software" },
  ]);

  const [editTodo, setEditTodo] = useState(null);
  const [filter, setFilter] = useState('');
  const [filteredTodos, setFilteredTodos] = useState(todoList);
  useEffect(() => {
    if(filter.trim() === ""){
      setFilteredTodos(todoList)
    } else {
      setFilteredTodos(
        todoList.filter((item) => item.title.toLowerCase().includes(filter.toLowerCase()))
      )
    }
    // console.log('filter',filter)
    // if(filter){
    // todoList.filter((item) =>  item.title === filter)
    // }
  }, [filter, todoList])

  const onDelete = (todo) => {
    console.log(todo);
    SetTodo(
      todoList.filter((e) => {
        return e !== todo;
      })
    );
  };


  const onEdit = (todo) => {
    setEditTodo(todo); // Set the current todo to be edited
  };

  const AddItem = (title, desc) => {
    if (editTodo) {
      SetTodo(todoList.map(todo => 
        todo.id === editTodo.id ? { ...todo, title, desc } : todo
      ));
      setEditTodo(null); 
    } else {
          let id = todoList.length < 1 ? 1 : todoList[todoList.length - 1].id + 1;
      console.log('id',id)
      const addTodo = {
          id: id,
        title: title,
        desc: desc,
      };
      console.log('AddTodo', addTodo)
      SetTodo([addTodo, ...todoList]); 
    }
  //   let id = todoList.length < 1 ? 1 : todoList[todoList.length - 1].id + 1;
  //   console.log('id',id)
  //   const addTodo = {
  //       id: id,
  //     title: title,
  //     desc: desc,
  //   };

  //   console.log('AddTodo', addTodo)
  //   SetTodo([addTodo ,...todoList,]);
  //   console.log('AddTodo', todoList)
  // };
};

  return (
    <>
      <div className="font-semibold">Todo List</div>
      <div className=" mx-4">
        <TodosAdd AddItem={AddItem} editTodo={editTodo}  />
        <p className="font-bold text-orange-500 mt-4 flex justify-start">Filter Data</p>
        <input
              type="text" 
              value={filter} 
              onChange={(e) => {setFilter(e.target.value)}}        
              className="block w-64 rounded-md bg-white px-3  py-1.5 mb-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              placeholder="Filter data"
            />
        {filteredTodos.length === 0 ? (
          <p> No more item in list</p>
        ) : (
          filteredTodos.map((todo) => {
            return <TodoList todo={todo} onEdit={onEdit} onDelete={onDelete} />;
          })
        )}
      </div>
    </>
  );
};
export default Todo;
