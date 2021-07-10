import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HeaderImage from '../images/linked.jpg';
import Logo from '../images/logo.jpg';
import './DescriptionCard.css';
import LaunchIcon from '@material-ui/icons/Launch';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';


 const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  custompadding: {
      padding: theme.spacing(2)
  },
  media: {
    height: 140,
  },
}));

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={HeaderImage}
          title="Contemplative Reptile"
        />
        <img className="logo"  src={Logo} />
        <CardContent>
        <Typography className={classes.custompadding} />
          <Typography gutterBottom variant="h5" component="h2">
            Figma
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A design pltform for teams who build products together
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Design . San Francisco CA . 101,282 followers
          </Typography>
          <Typography color="primary" variant="subtitle1" gutterBottom>
        See all 358 employees on linkedin
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        className={classes.button}
        startIcon={ <RemoveRedEyeOutlinedIcon />}
      >
        Follow
      </Button>
      <Button
        style={
            {
                "margin-left":"10px",
                "margin-right":"10px",
            }
        }
        variant="outlined"
        color="primary"
        size="medium"
        
        startIcon={ <LaunchIcon />}
      >
        Visit Website
      </Button>
      <Button   variant="outlined" color="inherit">
              
                <MoreHorizIcon  />
              
            </Button>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
