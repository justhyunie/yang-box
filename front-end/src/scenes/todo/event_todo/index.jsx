import { Box, IconButton, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme.js";
import { mockDataEventToDo }  from "../../../data/mockDataEventToDo.js";
import Header from "../../../components/Header.jsx";
import { useTheme } from "@mui/material";
import * as React from "react";
import EventModal from "../../../components/Modal.jsx";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";



const EventToDo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  //fetch data here from sql and then transfer in the columns
  //format to fit into datagrid format

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "eventname",headerName: "Event Name",flex: 1, cellClassName: "name-column--cell",},
    { field: "event_eom_junct_id", headerName: "E.O.M.", flex: 1 },
    { field: "taskremaining", headerName: "Tasks Remaining", flex: 1 },
    { field: "progresspercentage", headerName: "Progress %", flex: 1 },
    { field: "wrikelink", headerName: "Wrike Link", flex: 1 },
    { field: "sowlink", headerName: "SOW Link", flex: 1 },
    { field: "weeklyinternaladjendalink", headerName: "Weekly Internal Link", flex: 1 },
    { field: "weeklyclientadjendalink", headerName: "Weekly Client Link", flex: 1 },
    { field: "scopedoclink", headerName: "Scope Doc Link", flex: 1 },
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
                    "Link to Todo Profile"
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
      <Header title="To Do" subtitle={"List of To Do"} />
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
          rows={mockDataEventToDo}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default EventToDo;
