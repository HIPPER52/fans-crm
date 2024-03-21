import { useState } from "react";
import { useHistory } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { createUser } from "../../http/userAPI";
import "./toolbar.css";

export default function Topbar() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateUser = () => {
    if (name && email && password && phone) {
      createUser(name, email, password, phone);
      handleClose();
      setName(null);
      setEmail(null);
      setPassword(null);
      setPhone(null);
      history.go(0);
    }
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  return (
    <div className="toolbarContainer">
      <div className="toolbarRight">
        <div className="toolbarIcons">
          <div className="toolbarIconItem">
            <Button
              color="primary"
              variant="contained"
              endIcon={<AddIcon />}
              onClick={handleClickOpen}
            >
              Create
            </Button>
            <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
              <DialogTitle>Сreate a new user</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Name"
                  fullWidth
                  variant="standard"
                  required
                  onChange={handleChangeName}
                />
                <TextField
                  margin="dense"
                  id="email"
                  label="Email"
                  multiline
                  fullWidth
                  variant="standard"
                  required
                  onChange={handleChangeEmail}
                />
                <TextField
                  margin="dense"
                  id="password"
                  label="Password"
                  multiline
                  fullWidth
                  variant="standard"
                  required
                  onChange={handleChangePassword}
                />
                <TextField
                  margin="dense"
                  id="phone"
                  label="Phone"
                  multiline
                  fullWidth
                  variant="standard"
                  required
                  onChange={handleChangePhone}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleCreateUser}>Create</Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
