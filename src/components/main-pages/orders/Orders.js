import React,{useEffect,useState} from 'react'
import {Grid,Avatar,Badge,Container} from '@material-ui/core';
import {domain} from '../../../connection/Config'
import Old_orders from './Old_orders'
import { makeStyles } from '@material-ui/core/styles';
import NewOrder from './NewOrder';
import Orders_popup from './Orders_popup';
import '../../../css/orders.css'



export default function Orders({setLoader,
  setNewOrder,newOrder,token,popupTriger,
  setPopupTriger,setId_order,id_order,preview_orders,setPreview_orders,setRefresh}) {
 
    return (
      <Container style={{minHeight:'85vh'}} className='page_orders_warper'>
        {popupTriger.length>0?
      <Orders_popup
      setRefresh={setRefresh}
      setId_order={setId_order}
      id_order={id_order}
      setPopupTriger={setPopupTriger}
      newOrder={newOrder}
      token={token}
      setLoader={setLoader}
      setNewOrder={setNewOrder}
      />
        :<></>}
        <Grid className='main_warper'>
          <Grid  xl={4} md={4} lg={4}>
            <Grid className="header_warper">
              <h3>הזמנות שבוצעו</h3>
            </Grid>
            <Grid style={{height:'100vh',overflowY:'auto'}}>
{preview_orders && preview_orders.length>0?
  preview_orders.map(el=>{
    return(
      <Grid className='page_orders_warper' style={{marginTop:'12px'}}>
    <Old_orders
    el={el}
    />
        </Grid>
    )

  })

:<h4>...אין הזמנות קודמות </h4>}
</Grid>
          </Grid>
          <Grid  xl={8} md={8} lg={8}>
            <Grid className="header_warper">
            <h3>הזמנות חדשות</h3>
            </Grid>
            <Grid className='newOrder-warper'>
            {newOrder.length?
              newOrder.map(el=>{
                return(
                <Grid style={{marginBottom:'15px'}}>
            <NewOrder
            el={el}
            token={token}
            setNewOrder={setNewOrder}
            newOrder={newOrder}
            preview_orders={preview_orders}
            setPreview_orders={setPreview_orders}
            setLoader={setLoader}
            />
               </Grid>
                )
              })
              
            :<h3>אין הזמנות חדשות כרגע</h3>}
            </Grid>
            </Grid>
        </Grid>
      </Container>
    )
}
