import React, { useState } from "react";
import { Box, Button, Card, TextField } from "@mui/material";
import TodoList from "../Components/TodoList";

const Todo = () => {
  const date = new Date().toDateString();
  const [inputValue, setInputValue] = useState("");
  const handleAddTodo = () => {
    console.log("Todo added:", inputValue);
    setInputValue("");
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: "20px",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Card
          sx={{
            maxWidth: 345,
            border: "4px double #000",
            padding: "10px",
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            height: "150px",
          }}
        >
          <h1>{date}</h1>
        </Card>
        <Card
          sx={{
            maxWidth: 245,
            border: "4px double #000",
            padding: "10px",
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            height: "150px",
          }}
        >
          <h1>Todo List</h1>
        </Card>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Add a new todo"
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{ height: "50px" }}
          onClick={handleAddTodo}
        >
          Add Todo
        </Button>
      </Box>
      <TodoList />
    </Box>
  );
};

export default Todo;
