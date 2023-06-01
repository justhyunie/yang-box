import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme.js";
import { mockDataEOM } from "../../data/mockDataEOM";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";


const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "firstname",headerName: "First Name",flex: 1,cellClassName: "name-column--cell",},
    { field: "lastname",headerName: "Last Name",flex: 1,cellClassName: "name-column--cell",},
    { field: "email", headerName: "Email", flex: 1 },
    { field: "dob", headerName: "DOB", flex: 1 },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "state", headerName: "State", flex: 1 },
    { field: "zipCode", headerName: "Zip", flex: 1 },
    { field: "airlines", headerName: "Airlines", flex: 1 },
    { field: "airport", headerName: "Airport", flex: 1 },
   
  ];

  const navigate = useNavigate();
  return (
    
    <Box m="20px">
      <Header title="TEAM" subtitle={"Manage the Team Members"} />

      <Fab color="primary" aria-label="add">
        <AddIcon onClick={()=>{console.log("test");  navigate("/eomform");}}/>
      </Fab>

      <Box 
        m="40px 0 0 0"
        height="75vh"
        sx={{
            "& .MuiDataGrid-root": {
                border:"none"
            },
            "& .MuiDataGrid-cell": {
                borderBottom:"none"
            },
            "& .name-column--cell": {
                color:colors.greenAccent[300]
            },
            "& .MuiDataGrid-columnHeaders": {
                backgroundColor:colors.blueAccent[700],
                borderBottom:"none"
            },
            "& .MuiDataGrid-virtualScroller": {
                backgroundColor:colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor:colors.blueAccent[700],
            },
            
        }}

      >
        <DataGrid rows={mockDataEOM} columns={columns} />
      </Box>
    </Box>
  );
};


export default Team;


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
*/