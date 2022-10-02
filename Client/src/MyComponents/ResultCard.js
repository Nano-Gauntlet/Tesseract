import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./ResultCard.css"
import { color } from '@mui/system';
import {
    FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon, WhatsappIcon, WhatsappShareButton, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon
} from 'next-share';

export default function ResultCacd({resultElement}) {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const gridStyles = {
        boxShadow: 'none',
        backgroundColor: 'rgba(42, 42, 42 ,1)',
        color: '#ffffff',
        maxWidth:'1200px'
    };
    const gridStylesAns = {
        backgroundColor: 'rgba(42, 42, 42 ,1)',
        color: '#ffffff',
        marginBottom: '20px',
        width: '100%'
    };

    return (
        <>
            <Grid container spacing={2} >
                <Grid id='cardHover'>
                    <Item style={gridStylesAns} id='nocardHover'>
                        <Card style={gridStyles}>
                            <Grid container spacing={2} style={gridStyles}>
                                <Grid item xs={6} md={4} >
                                    <Item style={gridStyles}>
                                        <CardMedia
                                            component="img"
                                            height="auto"
                                            width = "400"
                                            image={resultElement.preview_image}
                                            alt="image"
                                        />
                                    </Item>
                                </Grid>
                                <Grid item xs={6} md={8} >
                                    <Item style={gridStyles}>
                                        <CardContent >
                                            <Typography gutterBottom variant="h5" component="div" style={{ textAlign: "left" }}>
                                               {resultElement.title}
                                            </Typography>
                                            <Typography variant="body2" style={{ textAlign: "left" }}>
                                              {resultElement.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <FacebookShareButton
                                                url={resultElement.url}
                                                quote={'Learning New Everyday'}
                                                hashtag={'#learntSomethingNewToday<3'}
                                            >
                                                <FacebookIcon size={32} round />
                                            </FacebookShareButton>
                                            <LinkedinShareButton url={resultElement.url}>
                                                <LinkedinIcon size={32} round />
                                            </LinkedinShareButton>
                                            <WhatsappShareButton
                                                url={resultElement.url}
                                                title={'Learning New Everyday'}
                                                separator=":: "
                                            >
                                                <WhatsappIcon size={32} round />
                                            </WhatsappShareButton>
                                            <TwitterShareButton
                                                url={resultElement.url}
                                                title={'Learning New Everyday'}
                                            >
                                                <TwitterIcon size={32} round />
                                            </TwitterShareButton>
                                            <EmailShareButton
                                                url={resultElement.url}
                                                subject={'Learning New Everyday'}
                                                body="body"
                                            >
                                                <EmailIcon size={32} round />
                                            </EmailShareButton>
                                            <Button size="small" onClick={(e) => {
      e.preventDefault();
      window.location.href='http://google.com';
      }}>Learn More</Button>
                                        </CardActions>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Card>
                    </Item>
                </Grid>
                {/*<Grid item xs={6} md={4}>
                    <Item style={gridStylesAns}>
                        <img
                            src='https://portfolio.newschool.edu/iversoncal/files/2016/10/8d5494eef01f3a29579dfa469b25bc315d607ce4-wi5647.jpg'
                            width='580'
                        />
                    </Item>
    </Grid>*/}
            </Grid>

        </>
    );
}
