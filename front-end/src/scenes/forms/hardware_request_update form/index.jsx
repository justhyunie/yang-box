import { Box, Button, TextField } from "@mui/material";
import { Formik, FormikConsumer } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../components/Header";
import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import MultiSelectionBox from "../../../components/MultiSelectionBox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { OutlinedInput, InputAdornment, FormControl } from "@mui/material";

/**
 * Must have all assets show in this page for choosing and reserving.
 *
 * Call React useState to call api and get list of events, list of hardware,
 * and the warehouse team will input the tracking, cost, and shipment
 * arrival date.
 */

const initialValues = {
  ordernumber: "",
  shippingdate: "",
  shipmentarrivaldate: "",
  tracking: "",
  status: "",
  shipmentcost: "",
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  notes: yup.string().required("required"),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)"); //if minimal with is over 600px it triggers boolean.
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const [event, setEvent] = React.useState([]);

  const event_list_from_api = ["Event 1", "Event 2", "Event 3"];

  const handleEventChange = (data) => {
    setEvent(data);
    console.log(data);
  };

  const [status, setStatus] = React.useState([]);
  const handleStatusChange = (data) => {
    setStatus(data);
    console.log(data);
  };

  return (
    <Box m="20px">
      <Header
        title="UPDATE HARDWARE REQUEST DASHBOARD"
        subtitle="Update Hardware Request"
      />

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
              <Box sx={{ gridColumn: "span 4" }}>
                Reveal list of hardware from event / hardware request{" "}
              </Box>
              <h1>Item 1... </h1>
              <h1>Item 2... </h1>
              <h1>Item 3... </h1>
              <h1>Item 4... </h1>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Shipping Date"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="shippingdate"
                  error={!!touched.shippingdate && !!errors.shippingdate}
                  helperText={touched.shippingdate && errors.shippingdate}
                />
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Order Deadline"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="orderdeadline"
                  error={!!touched.orderdeadline && !!errors.orderdeadline}
                  helperText={touched.orderdeadline && errors.orderdeadline}
                />
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Shipment Arrival Date"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="shipmentarrivaldate"
                  error={
                    !!touched.shipmentarrivaldate &&
                    !!errors.shipmentarrivaldate
                  }
                  helperText={
                    touched.shipmentarrivaldate && errors.shipmentarrivaldate
                  }
                />
              </LocalizationProvider>

              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Shipment Cost
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  label="Shipment Cost"
                />
              </FormControl>

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Tracking"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.tracking}
                name="tracking"
                error={!!touched.tracking && !!errors.tracking}
                helperText={touched.tracking && errors.tracking}
                sx={{ gridColumn: "span 2" }}
              />

              <MultiSelectionBox
                onChildChange={handleStatusChange}
                names={["Pending", "Ordered", "Packing", "Shipped", "Arrived"]}
                label={"Status"}
              />
            </Box>

            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                UPDATE HARDWARE REQUEST
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
