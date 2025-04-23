import React from 'react'

 const TodoList = ({ todo, onEdit, onDelete }) => {
  return (
    <>
    
    <div className=''>
    <div className='flex justify-start items-center'>
    <p className='text-lg font-semibold'>Title: </p>
    <p>{ todo.title}</p>
    </div>
    <div className='flex  justify-start items-center'>
    <p className='text-lg font-semibold'>Description: </p>
    <p>{ todo.desc}</p>
    </div>
    <div className='flex '>

    <button className='bg-blue-600 px-6 me-2 py-2 flex justify-start rounded-md text-white font-semibold' onClick={()=> {onEdit(todo)}}>Edit Todo</button>
    <button className='bg-red-600 px-6 py-2 flex justify-start rounded-md text-white font-semibold' onClick={()=> {onDelete(todo)}}>Delete Todo</button>
    </div>
    </div>
    </>
  )
}
export default TodoList;