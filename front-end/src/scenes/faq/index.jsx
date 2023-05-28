import { Box, Typography, useTheme } from "@mui/material";
import Accordian from "@mui/material/Accordion";
import AccordianSummary from "@mui/material/AccordionSummary";
import AccordianDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle={"Frequently asked questions page"} />
      <Accordian defaultExpanded>
        <AccordianSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordianSummary>
        <AccordianDetails>
          <Typography>
            Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          </Typography>
        </AccordianDetails>
      </Accordian>


      <Accordian defaultExpanded>
        <AccordianSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordianSummary>
        <AccordianDetails>
          <Typography>
            Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          </Typography>
        </AccordianDetails>
      </Accordian>


      <Accordian defaultExpanded>
        <AccordianSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Then another Important Question
          </Typography>
        </AccordianSummary>
        <AccordianDetails>
          <Typography>
            Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          </Typography>
        </AccordianDetails>
      </Accordian>


      <Accordian defaultExpanded>
        <AccordianSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Yet another Important Question
          </Typography>
        </AccordianSummary>
        <AccordianDetails>
          <Typography>
            Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          </Typography>
        </AccordianDetails>
      </Accordian>


      <Accordian defaultExpanded>
        <AccordianSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordianSummary>
        <AccordianDetails>
          <Typography>
            Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          </Typography>
        </AccordianDetails>
      </Accordian>


      <Accordian defaultExpanded>
        <AccordianSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordianSummary>
        <AccordianDetails>
          <Typography>
            Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          </Typography>
        </AccordianDetails>
      </Accordian>


    </Box>
  );
};

export default FAQ;
