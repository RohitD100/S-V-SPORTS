import { Box, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
    return (
        <>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                <Box sx={{ height: "100px", display: 'flex', gap: '30px' }}>
                    <FacebookIcon sx={{ width: '50px', height: '50px' }} />
                    <InstagramIcon sx={{ width: '50px', height: '50px' }} />
                    <MailOutlineIcon sx={{ width: '50px', height: '50px' }} />
                    <PhoneIcon sx={{ width: '50px', height: '50px' }} />
                </Box>
            </Box>
            <Typography> Phone +91 9146484418</Typography>
        </>
    );
};

export default Footer;
