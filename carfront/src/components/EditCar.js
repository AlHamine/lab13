import React, { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import BackspaceIcon from "@mui/icons-material/Backspace";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

function EditCar(props) {
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
    setCar({
      brand: props.data.row.brand,
      model: props.data.row.model,
      color: props.data.row.color,
      year: props.data.row.year,
      fuel: props.data.row.fuel,
      price: props.data.row.price,
    });
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setCar({ ...car, [event.target.name]: event.target.value });
  };

  const handleSave = () => {
    props.updateCar(car, props.data.id);
    handleClose();
  };
  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <EditIcon color="info" />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Car</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField
              label="Brand"
              name="brand"
              autoFocus
              variant="standard"
              value={car.brand}
              onChange={handleChange}
            />

            <TextField
              label="Model"
              variant="standard"
              name="model"
              value={car.model}
              onChange={handleChange}
            />

            <TextField
              label="Color"
              variant="standard"
              name="color"
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
            <br />
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
            endIcon={<SaveAltIcon />}
            color="success"
            onClick={handleSave}
          >
            Enregistrer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default EditCar;
