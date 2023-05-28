import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme.js";
import { mockDataInvoices } from "../../data/mockData";

import Header from "../../components/Header";

const Invoices = () => {
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

    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },

    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => {
        return (
          <Typography color={colors.greenAccent[500]}>
            ${params.row.cost}
          </Typography>
        );
      },
    },
    { field: "date", headerName: "Date", flex: 1 },
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
  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle={"List of Invoice Balances"} />
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
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataInvoices}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Invoices;
