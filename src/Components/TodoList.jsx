import { Box, Card } from "@mui/material";
import React from "react";

const TodoList = () => {
  return (
    <Box
      sx={{ width: "100vw", display: "flex", justifyContent: "center", p: 2 }}
    >
      <Card
        sx={{
          border: "4px double #000",
          padding: "10px",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          height: "550px",
          width: "90%",
        }}
      >
        <h2>Todo List</h2>
        <ul></ul>
      </Card>
    </Box>
  );
};

export default TodoList;
