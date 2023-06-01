import { Box, Button, TextField } from "@mui/material";
import { Formik, FormikConsumer } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../components/Header";
import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

import MultiSelectionBox from "../../../components/MultiSelectionBox";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { OutlinedInput, InputAdornment, FormControl } from "@mui/material";

const initialValues = {
  name: "",
  marketprice: "",
  rentalcostmonthly: "",
  rentalcostweekly: "",
  purchasecost: "",
  companypurchasedate: "",
  classcode: "",
  available: "",
  notes: "",
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  name: yup.string().required("required"),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)"); //if minimal with is over 600px it triggers boolean.

  const previousname_list_from_api = ["Model 1", "Model 2", "Model 3"];

  const [previousname, setPreviousname] = React.useState([]);
  const [available, setAvailable] = React.useState([]);

  const handleAvailabilityChange = (values) => {
    console.log(values);
    setAvailable(values);
  };

  const handlePreviousNameChange = (data) => {
    setPreviousname(data);
    console.log(data);
  };

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE / ADD HARDWARE" subtitle="Create a New Hardware" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0,1fr) )"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="New Hardware Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />

              <MultiSelectionBox
                onChildChange={handlePreviousNameChange}
                names={previousname_list_from_api}
                label={"Hardware Name"}
              />

              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Rental Monthly Cost
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  label="Rental Monthly Cost"
                />
              </FormControl>


              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Rental Weekly Cost
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  label="Amount"
                />
              </FormControl>

              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Purchase Cost
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  label="Purchase Cost"
                />
              </FormControl>

              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Market Value
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  label="Market Value"
                />
              </FormControl>

              <FormControl>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Available
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={available}
                  label="Available"
                  onChange={handleAvailabilityChange}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Notes"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.notes}
                name="notes"
                error={!!touched.notes && !!errors.notes}
                helperText={touched.notes && errors.notes}
                sx={{ gridColumn: "span 2" }}
              />

              {/***if this is filled out call another api to look insertions */}

              <TextField
                id="outlined-number"
                label="Number"
                type="number"
                value={values.stock}
                name="stock"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>

            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                CREATE NEW HARDWARE
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
