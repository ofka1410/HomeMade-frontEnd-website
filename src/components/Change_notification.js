import React,{useState} from 'react'
import { makeStyles,Grid,TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog_confirm from './Dialog_confirm';
const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }));
  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
export default function Change_notification({token,setRingtone}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const[dialog_triger,setDialog_triger]=useState(false)
    const[choosen_one,setChoosen_one]=useState('')
  const [ringtones_arr,setRingtones_arr]=useState([{
      ringtone: "https://res.cloudinary.com/df2pklfox/video/upload/v1628576232/jb5wdfnw6b44yjndwatl.mp3",
      name:'juntos'
  },
  {
    ringtone: "https://res.cloudinary.com/df2pklfox/video/upload/v1628576222/xgclaev3ynyzqgtajxin.ogg",
    name:'drums'
},
{
    ringtone:   "https://res.cloudinary.com/df2pklfox/video/upload/v1628576213/omsyayqol0d8ng1qae0a.ogg",
    name:'peace of cake'
},
{
    ringtone: "https://res.cloudinary.com/df2pklfox/video/upload/v1628576203/bexkewf3gb9auklxj9z0.ogg",
    name:'me-too'
},
{
    ringtone:  "https://res.cloudinary.com/df2pklfox/video/upload/v1628576196/evzv2tjkwsamvbpxgbii.ogg",
    name:'when'
},
{
    ringtone:"https://res.cloudinary.com/df2pklfox/video/upload/v1628576177/ansc10ma6mu7gr6tn0qx.ogg",
    name:'deduction'
},
{
    ringtone:"https://res.cloudinary.com/df2pklfox/video/upload/v1628584617/vacaition/xqnbuoyhlkznktxfb9ru.mp3",
    name:'time-is-now'
},
{
    ringtone:"https://res.cloudinary.com/df2pklfox/video/upload/v1628584663/vacaition/we9h9evlctnnwb5txmtz.ogg",
    name:'beyond-doubt'
},
{
    ringtone:"https://res.cloudinary.com/df2pklfox/video/upload/v1628584691/vacaition/jxf9c2ysnqsrfvb6ytlv.ogg",
    name:'accomplished'
},
{
    ringtone:"https://res.cloudinary.com/df2pklfox/video/upload/v1628576196/evzv2tjkwsamvbpxgbii.ogg",
    name:'slow-spring-board'
},
  ])
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handle_triger = (el) => {
        setChoosen_one(el.ringtone)
        setDialog_triger(true);
      };
    return (
      <div>
          {dialog_triger?
            <Dialog_confirm
            setRingtone={setRingtone}
            token={token}
            dialog_triger={dialog_triger}
            setDialog_triger={setDialog_triger}
            choosen_one={choosen_one}
            />
         :<></> }
        
        <Button className='note_bt' variant="outlined" color="primary" onClick={handleClickOpen}>
          החלף צליל התראה
        </Button>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                בחירת צליל התראה
              </Typography>
           
            </Toolbar>
          </AppBar>
          <List>
         
              {ringtones_arr.map(el=>{
               return(
                   <>
                <ListItem style={{display:'flex',justifyContent:"space-between"}} button>
                <Grid style={{display:'flex'}}>
                  <Grid>
           <video className='iframe' src={el.ringtone} controls></video>
            </Grid>  
            <Grid style={{paddingLeft:'15px'}}>
            <p>{el.name}</p>
            </Grid>
              
                </Grid>
                <Grid>
                <Checkbox
            onChange={()=>{handle_triger(el)}}
            name="checkedB"
            color="primary"
          />
                </Grid>
          
            </ListItem>
            <Divider />
            </>
               )   
              })}
          </List>
        </Dialog>
      </div>
    );
}
