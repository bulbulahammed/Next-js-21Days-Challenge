import sideImage from "@/assets/sideBar.png";
import sideBarBottom from "@/assets/sideBarBottom.png";
import { Box, CardActionArea, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Image from "next/image";
const SideBar = () => {
    return (
        <Box>
           <Box className="my-5 w-full border-b-2">
              <Card>
                    <CardActionArea>
                        <CardMedia>
                            <Image src={sideImage} width={800} alt="Top News"/>
                        </CardMedia>
                        <CardContent>
                            <p className=
                                "bg-red-500 px-2 text-white my-5 rounded w-[100px]">
                                Technology
                            </p>
                            <Typography gutterBottom variant="h5" component="div">
                                Bit Coin Climbs as Elon Mask Says Tesla likely to accept it again.
                            </Typography>
                            <Typography gutterBottom className="my-3">
                                By John Doe 17-Feb-2024.
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Consequat Lorem cupidatat Lorem magna. Minim ipsum laborum commodo esse duis aliquip tempor. Aliqua non qui occaecat dolor. Reprehenderit ex sint incididunt nulla mollit Lorem pariatur esse Lorem amet reprehenderit.........
                            </Typography>
                        </CardContent>
                    </CardActionArea>
              </Card>
            </Box>
            <Box className='w-full border-b-2 py-4'>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Image src={sideImage} alt='latestNews' />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography gutterBottom variant="subtitle2" fontWeight='bold' component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                        </Typography>
                        <Typography gutterBottom variant="caption" color='gray' className='my-2'>
                            Feb 04 2024
                        </Typography>
                    </Grid>

                </Grid>
            </Box>
            <Box className='w-full border-b-2 py-4'>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Image src={sideImage} alt='latestNews' />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography gutterBottom variant="subtitle2" fontWeight='bold' component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                        </Typography>
                        <Typography gutterBottom variant="caption" color='gray' className='my-2'>
                            Feb 04 2024
                        </Typography>
                    </Grid>

                </Grid>
            </Box>
            <Box className='w-full border-b-2 py-4'>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Image src={sideImage} alt='latestNews' />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography gutterBottom variant="subtitle2" fontWeight='bold' component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                        </Typography>
                        <Typography gutterBottom variant="caption" color='gray' className='my-2'>
                            Feb 04 2024
                        </Typography>
                    </Grid>

                </Grid>
            </Box>
            <Box className='w-full border-b-2 py-4'>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Image src={sideImage} alt='latestNews' />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography gutterBottom variant="subtitle2" fontWeight='bold' component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                        </Typography>
                        <Typography gutterBottom variant="caption" color='gray' className='my-2'>
                            Feb 04 2024
                        </Typography>
                    </Grid>

                </Grid>
            </Box>
            <Box className='w-full py-4'>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Image src={sideImage} alt='latestNews' />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography gutterBottom variant="subtitle2" fontWeight='bold' component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                        </Typography>
                        <Typography gutterBottom variant="caption" color='gray' className='my-2'>
                            Feb 04 2024
                        </Typography>
                    </Grid>

                </Grid>
            </Box>
            <Box className='w-full  py-4'>
                <Image src={sideBarBottom} alt='lowbar image' />
            </Box>
        </Box>
    );
};

export default SideBar;