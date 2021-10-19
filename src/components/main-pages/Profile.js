import React,{useEffect,useState} from 'react'
import {Grid,Container,TextField,Button} from '@material-ui/core';
import {domain} from '../../connection/Config'
import '../../css/profile.css'
import Change_notification from '../Change_notification';
import Divider from '@material-ui/core/Divider';
export default function Profile({cooker,email,setEmail,address,setAddress,
    phone_number,setPhone_number,setLoader,setStory,story,token,setRingtone,setCooker_working,cooker_working}) {
    const [index,setIndex]=useState(0)

    useEffect(async() => {
        console.log(cooker)
if(Object.keys(cooker).length !==0){
    try{
        const res= await fetch(`${domain}/cookers-admin/${token}`)
         const data = await res.json()
           setEmail(data.cooker.Email)
            setAddress(data.cooker.address)
             setPhone_number(data.cooker.phone_number)
             setCooker_working(data.cooker.working_hours)
             console.log(data.cooker.working_hours)
              setStory(data.story)
             
              if(data.cooker.ringtone){
                setRingtone(data.cooker.ringtone)
              }
              else{
                setRingtone("https://res.cloudinary.com/df2pklfox/video/upload/v1627976717/demoImage/fwuhfq2ihqfy869kawuk.ogg")
              }
              
             
         }
             catch(err){
             console.log(err)
           }
}
else{
    return;
}
    },[])
     


const update_cooker_info = async(e)=>{
    e.preventDefault()
    setLoader(true)
    try{
        const res2 = await fetch(`${domain}/cookers-admin`,
        {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
    
                    address:address,
                    phone_number:phone_number,
                    email:email,
                    id:token,
                    story:story,
                    cooker_working:cooker_working 
                }
                )
        }
        ) 
    }
    catch(err){
        console.log(err)
    }
   
    setLoader(false)
}
   


    return (
        <Container style={{minHeight:'85vh'}}>
            {cooker?
             <Grid  className='container'style={{display:'flex',flexDirection:'column',justifyContent:'center',marginBottom:'20px'}}>
                 <Grid className='notification-warper'>
                     <Change_notification
                      token={token}
                      setRingtone={setRingtone}
                      /> 
                 </Grid>
                 <Grid style={{margin:"auto",marginBottom:"20px"}}>
                 <h1 className='profile_header'>{cooker.vendor}</h1>
                 </Grid>
                 <form onSubmit={update_cooker_info}>
               <Grid>
                   <Grid>
                       <Grid>
                           <h5 className='title-hours'> :שעות פעילות</h5>
                          
                       </Grid>
                      
                   <Grid>
                       <select className='select' onChange={(e)=>{setIndex(e.target.value)}}>
                           <option value={0}>ראשון</option>
                           <option value={1}>שני</option>
                           <option value={2}>שלישי</option>
                           <option value={3}>רביעי</option>
                           <option value={4}>חמישי</option>
                           <option value={5}>שישי</option>
                       </select>
                   </Grid>
              
                    {cooker_working.length? 
                    <Grid style={{display:'flex',justifyContent:'center',marginTop:'15px',marginBottom:'15px'}}>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <label  className="label">:עד שעה</label>
                    <input onChange={(e)=>{setCooker_working([...cooker_working,cooker_working[index].to=e.target.value])}}
                     className='action-time'  value={cooker_working[index].to} type='time'/>
                   
                    </div>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                <label className="label"> :משעה</label>
                <input onChange={(e)=>{setCooker_working([...cooker_working,cooker_working[index].from=e.target.value])}} 
                className='action-time' value={cooker_working[index].from} type='time'/>

                </div>
                
                </Grid> :<div> Proccesing workin hours...</div>}
                
                  
                   </Grid>
                  
                <Grid>
              <TextField
              type='email' 
              variant='outlined' 
              onChange={(e)=>{setEmail(e.target.value)}} 
              className='text_field' value={email} 
              label='Email:'
              required
              />
                </Grid>
                <Grid>
                <TextField 
                variant='outlined'
                required
                 onChange={(e)=>{setAddress(e.target.value)}} 
                 className='text_field' value={address} 
                 label='Address:'/>
                    </Grid>
                    <Grid>
                    <TextField
                   
                     variant='outlined'
                      onChange={(e)=>{setPhone_number(e.target.value)}}
                       className='text_field'
                        value={phone_number} 
                        label='Phone_Number:'
                        required/>
                    </Grid>
                    <Grid>
                   <textarea   onChange={(e)=>{setStory(e.target.value)}} className='story_field' value={story}/>
                    </Grid>
                    <Grid>
                   <Button type='submit' className='buttons' variant='outlined'>שמור שינויים</Button>
                    </Grid>
                    
            </Grid>
            </form>
            </Grid>
            :<h1 className='profile_header'>פרופיל בשלן לא קיים במערכת...</h1>}
         
        </Container>
    )
}
