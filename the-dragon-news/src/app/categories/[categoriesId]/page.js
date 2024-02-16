import { getCategoryNews } from "@/utils/getCategoryNews";
import { CardActionArea, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import Link from "next/link";


const DynamicNewsPage = async({params,searchParams}) => {
    const { data } = await getCategoryNews(searchParams.category);
    return (
        <div>
            <h1>Total <span className="font-bold"> {searchParams.category}</span> news: {data.length}</h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    data.map((news)=>(
                     <Grid key={news.id} item xs={6}>
                        <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia sx={{
                                        "& img":{
                                            width:"100%",
                                            hieght: "25px"
                                        }
                                    }}>
                                        <Image src={news.thumbnail_url} width={800} height={500} alt="Top News"/>
                                    </CardMedia>
                                    <CardContent>
                                        <span className=
                                            "bg-red-500 p-2 text-white my-5 rounded">
                                            {news.category}
                                        </span>
                                        <Typography className="mt-5" variant="h6" gutterBottom component="div">
                                            {news.title.length > 30 ? news.title.slice(0,30) + "..." : news.title}
                                        </Typography>
                                        <Typography gutterBottom className="my-3">
                                            By {news.author.name} 17-Feb-2024.
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {
                                                news.details.length >200 ? news.details.slice(0,200) + "..." : news.details
                                            }
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                     </Grid>
                    ))
                }
            </Grid>
        </div >
    );
};

export default DynamicNewsPage;