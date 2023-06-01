import { Box, IconButton, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme.js";
import { mockDataHardware } from "../../data/mockDataHardware";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import * as React from "react";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";



const Hardware = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  //fetch data here from sql and then transfer in the columns
  //format to fit into datagrid format

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name",headerName: "Name",flex: 1, cellClassName: "name-column--cell",},
    { field: "marketprice", headerName:"Market Value",flex: 1,cellClassName: "name-column--cell", },
    { field: "rentalcostmonthly", headerName: "Rental Cost Monthly",flex: 1, cellClassName: "name-column--cell", },
    { field: "rentalcostweekly", headerName: "Rental Cost Weekly", flex: 1 },
    { field: "purchasecost", headerName: "Purchase Cost", type: "Date", flex: 1 },
    { field: "companypurchasedate", headerName: "Purchase Date", flex: 1 },
    { field: "classcode", headerName: "Class Code", flex: 1 },
    { field: "available", headerName: "Available", flex: 1 },
    { field: "notes", headerName: "Notes", flex: 1 },
   
    
  ];

  const navigate = useNavigate();

  
  return (
    <Box m="20px">
      <Header title="Hardware" subtitle={"List of Hardware"} />
      <Fab color="primary" aria-label="add">
        <AddIcon onClick={()=>{console.log("test");  navigate("/hardwareform");}}/>
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
          rows={mockDataHardware}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Hardware;
