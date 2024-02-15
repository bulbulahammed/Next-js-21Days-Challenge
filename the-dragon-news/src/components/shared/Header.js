import headerLogo from "@/assets/headerLogo.png";
import { getCurrentDate } from "@/utils/getCurrentDate.js";
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';


const Header = () => {
    const currentDate = getCurrentDate();
    return (
        <Box className="w-full my-5">
            <Container>
                <Image className="mx-auto" width={500} height={500} src={headerLogo} alt="Header Logo"/>
                <Typography color="gray" variant="body2" textAlign="center" className="my-2">
                    Journalism Without Fear Or Favor.
                </Typography>
                <Typography color="gray" textAlign="center">
                    {currentDate}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;