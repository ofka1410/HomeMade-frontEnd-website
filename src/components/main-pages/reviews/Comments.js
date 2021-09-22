import React from 'react'
import '../../../css/review.css'
import { makeStyles,Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      
      backgroundColor: theme.palette.background.paper,
      display:'flex',
      flexDirection:'column',
     
     
    },
    inline: {
      display: 'inline',
    },
  }));

export default function Comments({reviews}) {
    const classes = useStyles();
    return (
<List id='lists' className={classes.root}>

        {reviews.length?
             reviews.map(el=>{
                return(
                    <>
      <ListItem className='list' alignItems="flex-start">
      <Grid>
      <Box component="fieldset" mb={3} borderColor="transparent">
        
        <Rating name="read-only" value={el.rating} readOnly />
      </Box>
       <Grid>
       
         <Typography
         component="span"
         variant="body2"
         className={classes.inline}
         style={{color:'grey'}}>
      
            {new Date(el.date).toLocaleString()}
         </Typography>
       
       </Grid>
        </Grid>
       
      <ListItemText
      className='comment'
          primary={el.meal_name}
          secondary={
            <React.Fragment>
               <Typography style={{color:"brown"}}>
       שם: {el.user_name} 
        </Typography>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary">
            
              </Typography>
              {el.content}
           
            </React.Fragment>
          }
        />
       
        <ListItemAvatar>
           
          <Avatar alt="Remy Sharp" src="" />
        </ListItemAvatar>
        
     
      </ListItem>

   <Divider variant="inset" component="li" />
    </>
      )
    }) 
 
    :<h3> אין ביקורות לבשלן...</h3>}  
    </List>
  
        
    )
}
