import { Box, Button, TextField } from "@mui/material";
import { Formik, FormikConsumer } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../components/Header";
import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import EomMenuBox from "../../../components/EomMenuBox";

import MultiSelectionBox from "../../../components/MultiSelectionBox";

const initialValues = {
  event: "",
  startdate: "",
  enddate: "",
  travelstartdate: "",
  travelenddate: "",
  city: "",
  state: "",
  client: "",
  eom: "",
  onsitestaff: "",
  poc: "",
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  event: yup.string().required("required"),
  startdate: yup.string().required("required"),
  enddate: yup.string().required("required"),
  travelstartdate: yup.string().required("required"),
  travelenddate: yup.string().required("required"),
  city: yup.string().required("required"),
  state: yup.string().required("required"),
  client: yup.string().required("required"),
  eom: yup.string().required("required"),
  onsitestaff: yup.string().required("required"),
  pos: yup.string().required("required"),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)"); //if minimal with is over 600px it triggers boolean.
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const [eom, setEOM] = React.useState([]);
  const [onsitestaff, setOnsitestaff] = React.useState([]);
  const [poc, setPOC] = React.useState([]);

  const eom_list_from_api = ["Oliver Hansen", "Van Henry", "April Tucker"];
  const poc_list_from_api = ["Oliver Hansen", "Van Henry", "April Tucker"];
  const onsitestaff_list_from_api = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
  ];

  const handleEOMChange = (data) => {
    setEOM(data);
    console.log(data);
  };

  const handleOnsitestaffChange = (data) => {
    setOnsitestaff(data);
    console.log(data);
  };

  const handlePocChange = (data) => {
    setPOC(data);
    console.log(data);
  };

  return (
    <Box m="20px">
      <Header title="CREATE EVENT" subtitle="Create a New Event Profile" />
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
              {/**textfield for new or selection box for old event which populates data*/}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Event"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.event}
                name="event"
                error={!!touched.event && !!errors.event}
                helperText={touched.event && errors.event}
                sx={{ gridColumn: "span 4" }}
              />

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Start Date"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="startdate"
                  error={!!touched.startdate && !!errors.startdate}
                  helperText={touched.startdate && errors.startdate}
                />
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="End Date"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="enddate"
                  error={!!touched.enddate && !!errors.enddate}
                  helperText={touched.enddate && errors.enddate}
                />
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Travel Start Date"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="travelstartdate"
                  error={!!touched.travelstartdate && !!errors.travelstartdate}
                  helperText={touched.travelstartdate && errors.travelstartdate}
                />
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Travel End Date"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="travelenddate"
                  error={!!touched.travelenddate && !!errors.travelenddate}
                  helperText={touched.travelenddate && errors.travelenddate}
                />
              </LocalizationProvider>

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="City"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.city}
                name="city"
                error={!!touched.city && !!errors.city}
                helperText={touched.city && errors.city}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="State"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.state}
                name="state"
                error={!!touched.state && !!errors.state}
                helperText={touched.state && errors.state}
                sx={{ gridColumn: "span 2" }}
              />
              {/**selection box or texbox to create new */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Client"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.client}
                name="client"
                error={!!touched.client && !!errors.client}
                helperText={touched.client && errors.client}
                sx={{ gridColumn: "span 2" }}
              />
              {/**selection box drawn from eom table  <EomMenuBox />*/}

              <MultiSelectionBox
                onChildChange={handleEOMChange}
                names={eom_list_from_api}
                label={"Event Operations Manager"}
              />
              <br />

              <MultiSelectionBox
                onChildChange={handleOnsitestaffChange}
                names={onsitestaff_list_from_api}
                label={"Onsite Staff"}
              />
              <br />
              <MultiSelectionBox
                onChildChange={handlePocChange}
                names={poc_list_from_api}
                label={"Poc"}
              />
            </Box>

            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                CREATE NEW EVENT
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
