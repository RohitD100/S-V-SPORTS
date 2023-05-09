import { Box, Card, Grid, Typography } from "@mui/material"
import RecipeReviewCard from "./card"
import CardData from "./data"
import { CustomGrid } from "./gridstyle"

export const Features = () => {
    return <Box sx={{ marginBottom: '30px' }}>
        <h1>BAT REPAIRS</h1>

        <Box sx={{ display: "flex" }}>
            <CustomGrid>
                {
                    CardData.map((ele) => {
                        return (<RecipeReviewCard key={ele.name} source={ele.img} name={ele.name} />)
                    })
                }
            </CustomGrid>
        </Box>
        <p>
            All of the above are done at a very reasonable price by professionals.
            You can ship your bat from anywhere in INDIA with the details of whats required and we shall finish the work and ship it back to your address.
            This process usually takes anywhere between 5 to 10 working days depending on the job.
        </p>

    </Box >
}