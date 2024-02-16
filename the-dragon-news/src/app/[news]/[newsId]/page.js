import { getSingleNews } from '@/utils/getSingleNews';
import { Box, CardContent, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const NewsDetailsPage = async ({ params }) => {
    const { data: news } = await getSingleNews(params.newsId)
    return (
        <Box className="my-5">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box sx={{
                            "& img": {
                                width: "100%",
                                height: "100%"
                            }
                        }}>
                            <Image src={news.thumbnail_url} width='800' height='800' alt='latestNews' />
                        </Box>
                        <Grid container className='flex justify-between my-auto' spacing={2}>
                            <Grid item xs={6}>
                                <Box sx={{
                                    "& img": {
                                        width: "100%",
                                        height: "100%"
                                    }
                                }}>
                                    <Image src={news.image_url} width='800' height='800' alt='latestNews' />
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{
                                    "& img": {
                                        width: "100%",
                                        height: "100%"
                                    }
                                }}>
                                    <Image src={news.image_url} width='800' height='800' alt='latestNews' />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <CardContent>
                            <span className=
                                "bg-red-500 px-2 py-1 text-white rounded "
                            >
                                {news.category}
                            </span>
                            <Typography gutterBottom variant="h6" >
                                {news.title}
                            </Typography>
                            <Typography gutterBottom variant="body2" className='my-2'>
                                By {news.author.name} - {news.author.published_date}
                            </Typography>
                            <Typography className='text-justify whitespace-pre-line' variant="body2" color="gray">
                                {news.details}
                            </Typography>
                        </CardContent>
                    </Grid>

                </Grid>
            </Container>

        </Box>
    );
};

export default NewsDetailsPage;
