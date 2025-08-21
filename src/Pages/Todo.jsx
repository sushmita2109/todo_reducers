import React, { useState } from "react";
import { Box, Button, Card, Grid, TextField } from "@mui/material";
import TodoList from "../Components/TodoList";
import { useTodo } from "../Context/TodoContext";

const Todo = () => {
  const date = new Date().toDateString();
  const [inputValue, setInputValue] = useState({
    todos: "",
    completed: false,
  });
  const { todoDispatch } = useTodo();
  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now(),
      todos: inputValue.todos,
      completed: false,
    };

    todoDispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
    setInputValue({ todos: "", completed: false });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              border: "4px double #000",
              p: 2,
              bgcolor: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
              height: 150,
            }}
          >
            <h1>{date}</h1>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              border: "4px double #000",
              p: 2,
              bgcolor: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
              height: 150,
            }}
          >
            <h1>Todo List</h1>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mb: 3, alignItems: "center" }}>
        <Grid item xs={12} sm={8}>
          <TextField
            id="outlined-basic"
            label="Add a new todo"
            variant="outlined"
            value={inputValue.text}
            onChange={(e) =>
              setInputValue({ ...inputValue, todos: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            sx={{ height: "50px" }}
            onClick={handleAddTodo}
          >
            Add Todo
          </Button>
        </Grid>
      </Grid>
      <TodoList />
    </Box>
  );
};

export default Todo;
