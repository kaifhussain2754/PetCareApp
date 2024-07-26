import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Typography, Box } from "@mui/material";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/chat", { prompt })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };


  return (
    <Box sx={{ p: 2 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Prompt"
          variant="outlined"
          fullWidth
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      {response && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">Response:</Typography>
          <Typography>{response}</Typography>
        </Box>
      )}
    </Box>
  );
}

export default App;
