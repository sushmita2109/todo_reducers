import { Box } from "@mui/material";
import Todo from "./Pages/Todo";

function App() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#C0E6DE",
          width: "100vw",
          height: "100vh",
          margin: "0",
        }}
      >
        <Todo />
      </Box>
    </>
  );
}

export default App;
