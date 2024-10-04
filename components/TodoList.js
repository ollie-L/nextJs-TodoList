import Task from "./Task"


function TodoList({tasks}) {
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>TASKS</th>
        <th>ACTIONS</th>
      </tr>
    </thead>
    <tbody>
     {tasks.map((item)=>(<Task key={item.id} task={item} /> ))}
      
    </tbody>
  </table>
</div>
  )
}

export default TodoList
