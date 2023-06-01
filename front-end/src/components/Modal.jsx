import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Fab color="secondary" aria-label="edit">
              <EditIcon />
            </Fab>
            <Fab variant="extended">
              <NavigationIcon sx={{ mr: 1 }} />
              Navigate
            </Fab>
            <Fab disabled aria-label="like">
              <FavoriteIcon />
            </Fab>
          </Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
            <Box>
              WARNING in [eslint] src\components\BarChart.jsx Line 35:9: Duplicate key 'legends' no-dupe-keys src\components\Modal.jsx Line8:8: 'AddIcon' is defined but never used no-unused-vars src\components\PieChart.jsx Line 5:10: 'color' is defined but
              never used no-unused-vars src\data\mockDataContractors.js Line 1:10: 'tokens' is defined but never used no-unused-vars src\data\mockDataEOM.js Line 1:10: 'tokens' is defined but neverused no-unused-vars src\data\mockDataEvent.js Line 1:10: 'tokens'
              is defined but never used no-unused-vars Line 2:8: 'Modal' is
              defined but never used no-unused-vars
              src\scenes\contractors\index.jsx Line 1:15: 'IconButton' is
              
            </Box>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.data}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
