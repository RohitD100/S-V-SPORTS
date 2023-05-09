import { Box, styled } from "@mui/material";


export const Bannercontainer = styled(Box)(({ theme }) => ({

    width : "100%",
    height : "140vh",
    [theme.breakpoints.down("sm")]: {
      height : "100%",
      width : "100%"
    },
    [theme.breakpoints.down("md")] : {
      height : "100vh"
        
    },
    [theme.breakpoints.down("lg")]: {
        height : "100vh"

    }


   
}));

