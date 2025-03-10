/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
/* eslint-disable @typescript-eslint/no-empty-function -- Remove me */
import { useEffect, useState } from "react";
import { PageTitle } from "./PageTitle";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";

export type UnsavedTodo = {
  task: string;
  isCompleted: boolean;
};
export type Todo = UnsavedTodo & {
  todoId: number;
};

export function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  /* Implement useEffect to fetch all todos. Hints are at the bottom of the file. */
  useEffect(() => {
    async function getTodos() {
      try {
        const response = await fetch("/api/todos");
        if (!response.ok) throw new Error(`fetch Error ${response.status}`);
        const todosList = (await response.json()) as Todo[];
        setTodos(todosList);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
        console.log("worked");
      }
    }
    getTodos();
  }, []);

  /* Implement addTodo to add a new todo. Hints are at the bottom of the file. */
  async function addTodo(newTodo: UnsavedTodo) {
    try {
      const response = await fetch("/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      });
      if (!response.ok) throw new Error(`fetch Error ${response.status}`);
      const todo = (await response.json()) as Todo;
      setTodos((prevTodos) => [...prevTodos, todo]);
    } catch (err) {
      setError(err);
    }
  }

  /* Implement toggleCompleted to toggle the completed state of a todo. Hints are at the bottom of the file. */
  async function toggleCompleted(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
    try {
      const response = await fetch(`/api/todos/${todo.todoId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });
      if (!response.ok) throw new Error(`fetch Error ${response.status}`);
      const updated = (await response.json()) as Todo;
      const newTodos = todos.map((original) =>
        original.todoId === updated.todoId ? updated : original
      );
      setTodos(newTodos);
    } catch (err) {
      setError(err);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error("fetch error:", error);
    return (
      <div>
        Error! {error instanceof Error ? error.message : "Unknown error"}
      </div>
    );
  }
  return (
    <div className="container">
      <div className="flex">
        <div className="px-4">
          <PageTitle text="Todo App" />
          <TodoForm onSubmit={addTodo} />
          <TodoList todos={todos} toggleCompleted={toggleCompleted} />
        </div>
      </div>
    </div>
  );
}
