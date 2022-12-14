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

function CardIndi() {
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
        color: '#ffffff'
    };
    const gridStylesAns = {
        backgroundColor: 'rgba(42, 42, 42 ,1)',
        color: '#ffffff',
        marginBottom: '20px'
    };

  return (
    <div>
        <Grid item xs={6} md={8}>
                    <Item style={gridStylesAns}>
                        <Card style={gridStyles}>
                            <Grid container spacing={2} style={gridStyles}>
                                <Grid item xs={6} md={4} >
                                    <Item style={gridStyles}>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3X5VVDxWLwrSJIuo6g5zHCcSM5eG6HvaiwXDo6E4&s"
                                            alt="image"
                                        />
                                    </Item>
                                </Grid>
                                <Grid item xs={6} md={8} >
                                    <Item style={gridStyles}>
                                        <CardContent >
                                            <Typography gutterBottom variant="h5" component="div" style={{ textAlign: "left" }}>
                                                Universe
                                            </Typography>
                                            <Typography variant="body2" style={{ textAlign: "left" }}>
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Share</Button>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Item>
                                </Grid>
                            </Grid>
                         </Card>
                    </Item>
                </Grid>
    </div>
  )
}

export default CardIndi