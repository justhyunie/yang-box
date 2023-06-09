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
  orderdate: "",
  shippingdate: "",
  orderdeadline: "",
  shippingdeadline: "",
  shipmentarrivaldate: "",
  tracking: "",
  classcode: "",
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
  const [order, setOrder] = React.useState([]);

  const event_list_from_api = ["Event 1", "Event 2", "Event 3"];
  const hardware_list_from_api = ["Hardware 1", "Hardware 2", "Hardware 3"];

  const handleEventChange = (data) => {
    setEvent(data);
    console.log(data);
  };

  const handleOrderChange = (data) => {
    setOrder(data);
    console.log(data);
  };

  return (
    <Box m="20px">
      <Header
        title="CREATE HARDWARE REQUEST"
        subtitle="Create a New Hardware Request"
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
              <MultiSelectionBox
                onChildChange={handleEventChange}
                names={event_list_from_api}
                label={"Event"}
              />

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Order Date"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="orderdate"
                  error={!!touched.orderdate && !!errors.orderdate}
                  helperText={touched.orderdate && errors.orderdate}
                />
              </LocalizationProvider>


              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Shipping Deadline"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="shippingdeadline"
                  error={
                    !!touched.shippingdeadline && !!errors.shippingdeadline
                  }
                  helperText={
                    touched.shippingdeadline && errors.shippingdeadline
                  }
                />
              </LocalizationProvider>

              <br /><br />

              <MultiSelectionBox
                onChildChange={handleOrderChange}
                names={hardware_list_from_api}
                label={"Hardware"}
              />
            </Box>

            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                CREATE NEW HARDWARE REQUEST
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
