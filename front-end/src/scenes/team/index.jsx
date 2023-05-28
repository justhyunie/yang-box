import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme.js";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return(
        <Box
          width="60%"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          backgroundColor={
            access === "admin"
              ? colors.greenAccent[600]
              : colors.greenAccent[700]
          }
          boarderRadius="4px"
        >
          {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
          {access === "manager" && <SecurityOutlinedIcon />}
          {access === "user" && <LockOpenOutlinedIcon />}
          <Typography color= {colors.grey[100]} sx={{ml:"5px"}}>
            {access}
          </Typography>
        </Box>);
      },
    },
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
*/
  return (
    
    <Box m="20px">
      <Header title="TEAM" subtitle={"Manage the Team Members"} />
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
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};


export default Team;