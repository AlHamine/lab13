import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import Button from "@mui/material/Button"
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import NoCrashIcon from '@mui/icons-material/NoCrash';
import AddIcon from "@mui/icons-material/Add";
import BackspaceIcon from "@mui/icons-material/Backspace";
function AddCar(props) {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    color: "",
    year: "",
    fuel: "",
    price: "",
  });
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setCar({ ...car, [event.target.name]: event.target.value });
  };

    const handleSave = () => {
        props.addCar(car);
        handleClose();
    }
  return (
    <div>
      <br />
      <Button
        variant="contained"
        endIcon={<NoCrashIcon />}
        size="large"
        color="success"
        onClick={handleClickOpen}
      >
        {" "}
        Nouveau Car
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajout d'un nouveau Car</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField
              label="Brand"
              autoFocus
              name="brand"
              variant="standard"
              value={car.brand}
              onChange={handleChange}
            />

            <TextField
              label="Model"
              name="model"
              variant="standard"
              value={car.model}
              onChange={handleChange}
            />

            <TextField
              label="Color"
              name="color"
              variant="standard"
              value={car.color}
              onChange={handleChange}
            />

            <TextField
              label="Year"
              name="year"
              variant="standard"
              value={car.year}
              onChange={handleChange}
            />

            <TextField
              label="Price"
              name="price"
              variant="standard"
              value={car.price}
              onChange={handleChange}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            size="small"
            endIcon={<BackspaceIcon />}
            color="error"
            onClick={handleClose}
          >
            Annuler
          </Button>
          <Button
            variant="contained"
            size="small"
            endIcon={<AddIcon />}
            color="success"
            onClick={handleSave}
          >
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddCar;
