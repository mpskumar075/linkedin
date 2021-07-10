import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    textAlign: "left",
  },
  custompadding: {
      padding: theme.spacing(2)
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          About
        </Typography>
        <Typography variant="h5" component="h2">
          {/* be{bull}nev{bull}o{bull}lent */}
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          ad
        </Typography> */}
        <Typography variant="body2" component="p">
          Figma is the first and proffesional online-guide tool created specially for interface design. Born on the web. Figma
          <br />
          helps entire product team create test, and ship, better design,faster.
        </Typography>
         <Typography className={classes.custompadding} />
<Grid container spacing={3}>
        
        <Grid item xs={6}>
         
           
         
        
          <Typography variant="body2" component="p">
         Website Url
          <br />
          Figma.com
        </Typography>

        </Grid>

        <Grid item xs={6}>
         
           
         
        
          <Typography variant="body2" component="p">
         Funding via Crunchbase
          <br />
         US$ 50M
        </Typography>

        </Grid>

        </Grid>

      </CardContent>


      <CardActions>
        <Button  style={
         { "margin": "auto"}
      }  color="primary" size="small">See all details</Button>
      </CardActions>
    </Card>
  );
}
