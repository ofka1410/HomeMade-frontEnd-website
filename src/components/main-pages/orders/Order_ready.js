import React from 'react'
import {Button} from '@material-ui/core';
import {domain} from '../../../connection/Config'
export default function Order_ready({el,token,setPreview_orders,setNewOrder,setLoader,newOrder,preview_orders}) {


    const readyOrder= async(id)=>{
        setLoader(true)
        const res2 = await fetch(`${domain}/orders/ready`,
        {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    id:id.id,
                    token:token
                }
                ) 
        }
        ) 
        const data = await res2.json()
        if(data.status= "succes no error possibly changed"){
            let new_newOrder= newOrder.filter(el=>el.id!==id.id)
            setNewOrder(new_newOrder)
            setPreview_orders([...preview_orders,id])
        }
        setLoader(false)
        }

    return (
<Button className='bt-ready' onClick={()=>{readyOrder(el)}} variant='outlined' size="small">ההזמנה נמסרה</Button>
    )
}
