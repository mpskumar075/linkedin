import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DescriptionCard from './DescriptionCard';
import TablistCard from './TablistCard';
import SimpleCard from './SimpleCard';
import SideListCard from './SideListCard';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import LogoImage from '../images/linkedin.png';
import './MainGrid.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "left",
  },
  custompadding: {
    padding: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={8}>
          <DescriptionCard />
            <Typography className={classes.custompadding} />
          <TablistCard />
            <Typography className={classes.custompadding} />
          <SimpleCard />
          
        </Grid>
        <Grid item xs={4}>
          <SideListCard />
          <Typography className={classes.custompadding} />
           <Typography variant="body2" gutterBottom>
                         About &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Accessibility &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Help Centered
         
            
            <Typography className={classes.custompadding} />
        Privacy & Terms    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     Ad Choices
<Typography className={classes.custompadding} />
        Advertising  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Buisness Services 
<Typography className={classes.custompadding} />
        Get the LinkedIn App &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <MoreHorizIcon />
      </Typography>
  <Typography className={classes.custompadding} />
      <Divider />
       <Typography className={classes.custompadding} />

       <Typography align="right"  variant="body2" gutterBottom>
       Linkedin ?? 2021
       </Typography>

       <img className="logoimage" src={LogoImage} />
       
        </Grid>

      
        
      </Grid>
    </div>
  );
}
