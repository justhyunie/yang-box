import Header from "../../components/Header";
import { Box } from "@mui/material";

const index = () =>{
    return <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center" >
        <Header title={"Dashboard"} subtitle={"Welcome to your dashboard"}></Header></Box>
    </Box>
}

export default index;