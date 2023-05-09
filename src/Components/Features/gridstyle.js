import { Grid, styled } from "@mui/material";

export const CustomGrid = styled(Grid)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "40px",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "repeat(2,1fr)"
    },
    [theme.breakpoints.down("sm")] : {
        gridTemplateColumns : "repeat(1,1fr)"
    },
    [theme.breakpoints.up("md")]: {
        gridTemplateColumns: "repeat(3,1fr)"
    },
    [theme.breakpoints.up("lg")]: {
        gridTemplateColumns: "repeat(4,1fr)"
    }
   
}));


