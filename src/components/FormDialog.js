import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [newSection, setNewSection] = React.useState({new_section_name: ''});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setNewSection({ new_section_name: '' })
    setOpen(false);
  };
  const handleAddNewSection = () => {
    console.log(newSection)
    console.log("написать добавление секции в бд")
    //http://127.0.0.1:8000
    handleClose();
  };

  function handleChange(e) {
    e.preventDefault();
    setNewSection({ new_section_name: e.target.value })
  };

  return (
    <div>
      <IconButton color="primary" onClick={handleClickOpen}>
        <AddCircleIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Adding a new section</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new section, please enter its name here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="section_name"
            label="Section name"
            type="text"
            fullWidth
            variant="standard"
            onChange={e => handleChange(e)}
          />
        </DialogContent>
        <DialogActions>
            <Button disabled={newSection.new_section_name===''} onClick={handleAddNewSection}>Add</Button>
            <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}