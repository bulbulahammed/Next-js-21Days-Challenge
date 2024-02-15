import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import Link from 'next/link';


const navItems = [
    {
        route: "Home",
        pathname: "/",
    },
    {
        route: "Pages",
        pathname: "/pages",
    },
    {
        route: "Category",
        pathname: "/category",
    },
    {
        route: "News",
        pathname: "/news",
    },
    {
        route: "Post",
        pathname: "/post",
    },
    {
        route: "Contact",
        pathname: "/contact",
    },
]


const Footer = () => {
    return (
        <Box className="bg-black px-2 py-10">
            <Container>
                <Box sx={{"& svg":{
                    color:"white"
                }}} className="w-full text-center">
                    <IconButton>
                      <FacebookIcon/>
                    </IconButton>
                    <IconButton>
                      <LinkedInIcon/>
                    </IconButton>
                    <IconButton>
                      <InstagramIcon/>
                    </IconButton>
                    <IconButton>
                      <YouTubeIcon/>
                    </IconButton>
                </Box>
                <Box className="w-full text-center">
                {navItems.map((item) => (
                  <Link key={item} href={item.pathname}>
                     <Button className="text-white">{item.route}</Button>
                  </Link>
                ))}
                </Box>
                <Typography color="gray" variant="body2" textAlign="center">
                    @224 Dragon News Design By Programming Hero
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;