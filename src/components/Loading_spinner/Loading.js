import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
export default function Loading({loader}) {
    return (
        <>
        {loader == true?
        <div className='loader_warper'>
        <CircularProgress style={{width:'100px',height:'100px',color:'#e6531d',zIndex:"1000"}} />
        </div>
        :<div style={{display:'none'}}></div>}
        
        </>
    )
    
}
