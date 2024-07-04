"use client";
import Btn from "@/components/Btn";
import FormField from "@/components/FormField";
import React, { Suspense, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  PlusIcon,
  MinusCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";

import { todos as initialTodos } from "@/todos/todos";
import Loading from "./loading";

const Home = () => {
  const [todo, setTodo] = useState("");
  const [mytodos, setMyTodos] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    try {
      setMyTodos(initialTodos);
    } catch (error) {
      console.log(error);
    }
  }, []);

  //   console.log(mytodos);

  const saveTodo = () => {
    if (todo === "") {
      setErr(" Error: please enter task name...");
      return;
    }

    const newTodo = { id: uuidv4(), todo, status: false };
    console.log(newTodo);

    try {
      setMyTodos((prevTodos) => {
        const updatedTodos = [...prevTodos, newTodo];
        console.log("Updated Todos:", updatedTodos);
        return updatedTodos;
      });

      setTodo("");
    } catch (error) {
      alert(error);
    }
  };

  const toggleStatus = (id) => {
    try {
      const updatedTodos = mytodos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      );
      setMyTodos(updatedTodos);
    } catch (error) {
      alert(error);
    }
  };

  const deleteTodo = (id) => {
    try {
      const updatedTodos = mytodos.filter((todo) => todo.id !== id);

      setMyTodos(updatedTodos);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1 className="uppercase font-bold">Tasks</h1>
      <p className="text-sm text-gray-500 mb-2">This is a simple Todo App</p>
      {err && (
        <p className="text-sm text-red-700 my-3 p-2 bg-red-100 rounded flex items-center">
          <ExclamationTriangleIcon className="size-4" />
          {err}
        </p>
      )}
      <div className="sm:flex sm:gap-2 text-sm">
        <FormField
          type={"text"}
          placeholder={"Enter Task name..."}
          value={todo}
          formStyle={"mb-3"}
          handleText={(e) => {
            setTodo(e.target.value);
            setErr("");
          }}
        />

        <Btn
          handleClick={saveTodo}
          btnText={"Save Todo"}
          icon={<PlusIcon className="size-4" />}
        />
      </div>
      <div className="mt-5">
        <h2 className="mb-2 font-bold">Todos</h2>
        <div>
          {mytodos.length > 0 ? (
            mytodos.map((todo) => {
              return (
                <div
                  key={todo.id}
                  className="mb-1 p-2 border flex justify-between items-center rounded"
                >
                  <p className="text">{todo.todo}</p>
                  <div className="flex gap-3 items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox rounded border border-gray-300  ring ring-offset-1 ring-blue-600"
                      checked={todo.status}
                      onChange={() => {
                        toggleStatus(todo.id);
                      }}
                    />
                    <button
                      onClick={() => {
                        deleteTodo(todo.id);
                      }}
                    >
                      <MinusCircleIcon className="size-7 text-red-600" />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex justify-center text-sm">
              <p>Loading...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
