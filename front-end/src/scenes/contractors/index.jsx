import { Box, IconButton, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme.js";
import { mockDataContractors } from "../../data/mockDataContractors";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import * as React from 'react';
import ContractorModal from "../../components/Modal.jsx"
import { useNavigate } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const Contractors = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  //fetch data here from sql and then transfer in the columns
  //format to fit into datagrid format


  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "firstname", headerName: "First Name", flex: 1, cellClassName: "name-column--cell",},
    { field: "lastname", headerName: "Last Name", flex: 1, cellClassName: "name-column--cell",},
    { field: "dob", headerName: "DOB", type: "Date", headerAlign: "left", align: "left",},
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "zipCode", headerName: "Zip Code", flex: 1 },
    { field: "airlines", headerName: "Airlines", flex: 1 },
    { field: "airport", headerName: "Airport", flex: 1 },
    {
      field: "profile",
      headerName: "Profile",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return(
        <Box
          width="60%"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          backgroundColor={colors.greenAccent[700]}
          boarderRadius="4px">
          {<ContractorModal
            data = {"Modal works but call api to get data"}
          />}
        </Box>);}

    }
  
  ];

  /**Notes:
   *
   * Must define margin of parent boxes for data to show up <Box m="20px></Box>
   *
   * 70vh = viewport height (explicit fixed css)
   *
   * if you are disatisfied of the default data gride, you may make changes via editing
   * the parent box and using the sx attribute to make adjustments (reference div name by inpspection tool via console):
   * example:  "sx={{"& .MuiDataGrid-root":{border:"none"}}}""  which gets ride of the border
   *
   * Go thruogh Datagrid documentation for a list of attributes you can edit to customize tables
   * https://mui.com/x/api/data-grid/data-grid/
   * 
   * look up ways to customize toolbar 
   *
   */

  const navigate = useNavigate();
  return (
    <Box m="20px">
      <Header
        title="CONTRACTORS"
        subtitle={"List of Contractors"}
      />
      <Fab color="primary" aria-label="add">
        <AddIcon onClick={()=>{console.log("test");  navigate("/contractorform");}}/>
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
          rows={mockDataContractors}
          columns={columns}
          components={{ Toolbar: GridToolbar }}  
          
        />
      </Box>
    </Box>
  );
};

export default Contractors;
