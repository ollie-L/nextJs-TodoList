// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }



const baseUrl = "http://localhost:30001"
export const getAllTodos = async () =>{
  const response = await fetch(`${baseUrl}/tasks`,{cache: "no-store"});
  const todos = await response.json();
  return todos;
}

export const addTodo = async (todo) =>{
  const response = await fetch(`${baseUrl}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(todo)
  });
  const newTodo = await response.json();
  return newTodo;
}

export const editTodo = async (todo) =>{
  const response = await fetch(`${baseUrl}/tasks/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(todo)
  });
  const updatedTodo = await response.json();
  return updatedTodo;
}

export const deleteTodo = async (id) =>{
  await fetch(`${baseUrl}/tasks/${id}`, {
    method: "DELETE"
  });
}




