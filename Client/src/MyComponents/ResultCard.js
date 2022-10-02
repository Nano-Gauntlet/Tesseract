import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./ResultCard.css"
import ShareBar from './ShareBar';

export default function ResultCacd({ resultElement }) {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,1)' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const gridStyles = {
        boxShadow: 'none',
        backgroundColor: 'rgba(0, 0, 0 ,0)',
        color: '#ffffff',
        maxWidth: '1200px'
    };
    const gridStylesAns = {
        backgroundColor: 'rgba(0, 0, 0 ,0.4)',
        color: '#ffffff',
        marginBottom: '20px',
        width: '100%'
    };

    return (
        <>
            <Grid container spacing={2} onClick={(e) => {
                e.preventDefault();
                window.open(`${resultElement.url}`, '_blank');
            }}>
                <Grid id='cardHover'>
                    <Item style={gridStylesAns} id='nocardHover'>
                        <Card style={gridStyles}>
                            <Grid container spacing={2} style={gridStyles}>
                                <Grid item xs={6} md={4} >
                                    <Item style={gridStyles}>
                                        <CardMedia
                                            component="img"
                                            height="auto"
                                            width="400"
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
                                            <Typography noWrap variant="body2" style={{ padding:0, textAlign: "left", maxHeight: "50px", overflow:"hidden"}}>
                                                {resultElement.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <ShareBar resultElement={resultElement}/>
                                        </CardActions>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Card>
                    </Item>
                </Grid>
            </Grid>

        </>
    );
}
