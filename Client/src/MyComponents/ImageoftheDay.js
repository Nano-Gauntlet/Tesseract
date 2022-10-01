import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function ImageoftheDay() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
const cardCss={
    backgroundColor: "white"
}
const textcss={
    color: "#ffffff"

}
    return (
        <Card sx={{ maxWidth: 345 }} style={cardCss}>
            <CardHeader color="#ffffff"
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        I
                    </Avatar>
                }
                title="Image of the Day"
                subheader="October 1, 2022"
            />
            <CardMedia
                component="img"
                height="194"
                image="https://media.istockphoto.com/photos/spiral-galaxy-illustration-of-milky-way-picture-id481229372?k=20&m=481229372&s=612x612&w=0&h=r-vNa2_NRHAyaQJj6o2UlGTfa9Dju2M8NH1AIpk9oHQ="
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="#000000">
                    #imageoftheday
                </Typography>
            </CardContent>
        </Card>
    );
}
