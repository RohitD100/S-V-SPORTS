import { Box, Typography } from "@mui/material"


export const Features = () => {
    return <Box sx={{ marginBottom: '30px' }}>
        <h1>BAT REPAIRS</h1>
        <Box sx={{ display: 'flex', }}>
            <Box sx={{ textAlign: 'left', margin: 'auto', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', width: '70%', padding: '20px', borderRadius: '40px' }}>
                <ul><Typography variant="h6" sx={{ fontWeight: 'bold' }}>We have English Willow Bat & Kashmir Willow bat to be repair </Typography></ul>
                <ol>
                    <li>Oiling</li>
                    <li>Buffing</li>
                    <li>Edge repair</li>
                    <li>Refurbishment</li>
                    <li>Gloves repairing</li>
                    <li>Weight Reduction</li>
                    <li>Broken Toe repair</li>
                    <li>Repair face crack</li>
                    <li>Curve in straight bat</li>
                </ol>
                <p>
                    All of the above are done at a very reasonable price by professionals.
                    You can ship your bat from anywhere in INDIA with the details of whats required and we shall finish the work and ship it back to your address.
                    This process usually takes anywhere between 5 to 10 working days depending on the job.
                </p>
            </Box>
        </Box>
    </Box >
}