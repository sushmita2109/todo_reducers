import {
  Box,
  Button,
  Grid,
  Checkbox,
  Modal,
  Typography,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useTodo } from "../Context/TodoContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TodoList = () => {
  const { todostate, todoDispatch } = useTodo();
  const [open, setOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    todoDispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  return (
    <Box
      sx={{ width: "100vw", display: "flex", justifyContent: "center", p: 2 }}
    >
      <Box
        sx={{
          border: "4px double #000",
          padding: "10px",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>Todo List</h2>

        {todostate.todos.map((todo) => (
          <Grid
            container
            key={todo.id}
            spacing={2}
            alignItems="center"
            sx={{
              padding: "10px",
              borderBottom: "1px solid #ddd",
            }}
          >
            <Grid
              item
              xs={12}
              sm={8}
              md={9}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Checkbox
                checked={todo.completed}
                onChange={() =>
                  todoDispatch({
                    type: "TOGGLE_TODO",
                    payload: todo.id,
                  })
                }
              />
              <span
                style={{
                  marginLeft: "8px",
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.todos}
              </span>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={3}
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: { xs: "flex-start", sm: "flex-end" },
              }}
            >
              <Button
                variant="contained"
                onClick={() => {
                  setSelectedTodo(todo);
                  handleOpen();
                }}
              >
                Edit
              </Button>
              <Button variant="contained" onClick={() => handleDelete(todo.id)}>
                Delete
              </Button>
            </Grid>
          </Grid>
        ))}
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography>Change todo here</Typography>
          <TextField
            fullWidth
            value={selectedTodo ? selectedTodo.todos : ""}
            onChange={(e) =>
              setSelectedTodo({ ...selectedTodo, todos: e.target.value })
            }
          />
          <Button
            onClick={() => {
              todoDispatch({
                type: "UPDATE_TODO",
                payload: selectedTodo,
              });
              handleClose();
            }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default TodoList;
