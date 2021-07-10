import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Dribble from '../images/dribble.png';
import Invision from '../images/invision.png';
import Behance from '../images/behance.png';
import Adobe from '../images/adobe.png';
import Slack from '../images/slack.png';
import Medium from '../images/medium.png';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function FolderList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>



 <ListItem>
        <ListItemAvatar>
          <Avatar src={Invision} />
            
          
        </ListItemAvatar>
        <ListItemText primary="InVision" secondary="Invision · 137kk  followers" />
        <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <RemoveRedEyeOutlinedIcon />
              </IconButton>
            </ListItemSecondaryAction>
      </ListItem>



       <ListItem>
        <ListItemAvatar>
          <Avatar src={Medium} />
            
          
        </ListItemAvatar>
        <ListItemText primary="Medium" secondary="Online Media · 10k  followers" />
        <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <RemoveRedEyeOutlinedIcon />
              </IconButton>
            </ListItemSecondaryAction>
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar src={Dribble} />
            
          
        </ListItemAvatar>
        <ListItemText primary="Dribbble" secondary="Design · 162k  followers" />
        <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <RemoveRedEyeOutlinedIcon />
              </IconButton>
            </ListItemSecondaryAction>
      </ListItem>

      


       <ListItem>
        <ListItemAvatar>
          <Avatar src={Behance} />
            
          
        </ListItemAvatar>
        <ListItemText primary="Behance" secondary="Internet · 67k  followers" />
        <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <RemoveRedEyeOutlinedIcon />
              </IconButton>
            </ListItemSecondaryAction>
      </ListItem>


       <ListItem>
        <ListItemAvatar>
          <Avatar src={Adobe} />
            
          
        </ListItemAvatar>
        <ListItemText primary="Adobe" secondary="Computer Software · 2,68M  followers" />
        <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <RemoveRedEyeOutlinedIcon />
              </IconButton>
            </ListItemSecondaryAction>
      </ListItem>

       <ListItem>
        <ListItemAvatar>
          <Avatar src={Slack} />
            
          
        </ListItemAvatar>
        <ListItemText primary="Slack" secondary="Computer Software · 528k  followers" />
        <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <RemoveRedEyeOutlinedIcon />
              </IconButton>
            </ListItemSecondaryAction>
      </ListItem>
      
    </List>
  );
}
