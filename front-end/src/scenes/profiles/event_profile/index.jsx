import { Box, Button, TextField } from "@mui/material";
import { Formik, FormikConsumer } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../components/Header";
import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Tree from "./Tree";

const EventProfile = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)"); //if minimal with is over 600px it triggers boolean.
 
  /**
   * Notes:
   *
   * sx={{ "& > div": {gridColumn: isNonMobile ? undefined: "span 4"} }}  Textfield expands across mobile screen
   *
   *
   */

  return (
    <Box m="20px">
      <Header title="EVENT PROFILE" subtitle="Information Here" />
      <Box
        display="grid"
        gap="30px"
        gridTemplateColumns="repeat(4, minmax(0,1fr) )"
        sx={{
          "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
        }}
      >

        <Tree/>
        
      </Box>

      
    </Box>
  );
};

export default EventProfile;
