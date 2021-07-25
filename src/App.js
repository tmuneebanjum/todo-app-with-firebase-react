import "./App.css";
import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // when the app loads and listen to database and fetch todos

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => doc.data().todo));
      });
  }, []);

  const addTodo = (event) => {
    //fire off when click button
    event.preventDefault(); //will stop reloding page
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setTodos([...todos, input]);
    setInput(""); //clear after input
  };

  return (
    <div className="App">
      <h1>Hello World🚀!</h1>
      <form>
        <FormControl>
          <InputLabel>☑️ Write A Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
          disabled={!input}
        >
          Add Todo
        </Button>
        {/* <button >
          
        </button> */}
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
