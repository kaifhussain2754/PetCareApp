import React, { useEffect, useState } from "react";
import axios from "axios";
import { TextField, Button, Typography, Box, Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [openDialog, setOpenDialog] = useState(true); // Set to true to show dialog on load

  const navigate = useNavigate();

  useEffect(() => {
    // Automatically open the dialog when the page loads
    setOpenDialog(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/chat", { prompt })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.error(err);
        // Optionally, you can show the popup again on error
        setOpenDialog(true);
      });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    navigate(-1);
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

      {/* Dialog for Under Maintenance */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        sx={{ textAlign: 'center' }}
      >
        <DialogContent>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCloseDialog}
            aria-label="close"
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <img 
            src="/construction.jpg" 
            alt="Under Maintenance" 
            style={{ width: '100%', height: 'auto' }} 
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default App;
