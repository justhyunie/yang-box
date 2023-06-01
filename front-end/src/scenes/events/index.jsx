import { Box, IconButton, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme.js";
import { mockDataEvent } from "../../data/mockDataEvent";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import * as React from "react";
import EventModal from "../../components/Modal.jsx";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";



const Events = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  //fetch data here from sql and then transfer in the columns
  //format to fit into datagrid format

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "eventname",headerName: "Event Name",flex: 1, cellClassName: "name-column--cell",},
    { field: "startdate", headerName: "Event Start Date",flex: 1,cellClassName: "name-column--cell", },
    { field: "enddate", headerName: "Event End Date",flex: 1,cellClassName: "name-column--cell", },
    { field: "travelstartdate", headerName: "Travel Start Dates", type: "Date", flex: 1 },
    { field: "travelenddate", headerName: "Travel End Dates", type: "Date", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "state", headerName: "State", flex: 1 },
    { field: "client", headerName: "Client", flex: 1 },

    { field: "event_eom_junct_id", headerName: "E.O.M.", flex: 1 },
    { field: "event_onsitestaff_junct_id", headerName: "On-site Staff", flex: 1 },
    { field: "event_poc_junct_id", headerName: "Point of Contact", flex: 1 },
    {
      field: "profile",
      headerName: "Profile",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={colors.greenAccent[700]}
            boarderRadius="4px"
          >
            {
              <EventModal
                data={
                  "Modal works but call api to get data - wrike link, resourse links, etc"
                }
              />
            }
          </Box>
        );
      },
    },
  ];

  const navigate = useNavigate();

  
  return (
    <Box m="20px">
      <Header title="EVENT" subtitle={"List of Events"} />
      <Fab color="primary" aria-label="add">
        <AddIcon onClick={()=>{console.log("test");  navigate("/eventform");}}/>
      </Fab>

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataEvent}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Events;
