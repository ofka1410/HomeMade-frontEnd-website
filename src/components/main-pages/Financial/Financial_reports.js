import React,{useState,useEffect} from 'react'
import '../../../css/financial.css'
import {Grid,Container} from '@material-ui/core';
import Chart_big from './Chart_big'
import Pie_chart from './Pie_chart';
import {domain} from '../../../connection/Config'
import { Button } from '@material-ui/core';
import '../../../css/main.css'
import Bt_money from './Bt_money';

export default function Financial_reports({setLoader,token,setCash_withrawal,cash_withrawal,email,tokenID,cooker}) {
    const [selected_month,setSelected_month]=useState('')
    const [total_profit,setTotal_profit]=useState(0)
    const [month_profit,setMonth_profit]=useState(0)
    const[number_orders_month,setNumber_orders_month]=useState(0)
    const[number_orders,setNumber_orders]=useState(0)
    const [refresh,setRefresh]=useState('')
    const [bigChart_data,setBigChart_data]=useState([])
    const [balance,setBalance]=useState(0)
    const [today,setToday]=useState(new Date())
    useEffect(() => {
        setLoader(true)
       
            const reports= async()=>{
                try{
            const res2 = await fetch(`${domain}/report`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        id:token,
                        month:selected_month||today.toLocaleString('en-GB', { month: 'long'})
                    }
                    ) 
            }
            )
            const data= await res2.json()
            setTotal_profit(data.total_profit)
            setMonth_profit(data.month_profit)
            setNumber_orders_month(data.counter_meals_month)
            setNumber_orders(data.counter_allMeals)
            let b=total_profit
            setCash_withrawal(b-cash_withrawal)
          
           setBalance(b)
        }
            catch(err){
                console.log(err)
            }
        }
        const profits= async()=>{
            try{
                const res= await fetch(`${domain}/report/${token}`)
                const data2 = await res.json()
                setBigChart_data(data2.all_profits)
            }
        catch(err){
            console.log(err)
        }
        }
        reports()    
        profits()
        
         setLoader(false)
    }, [refresh])

    const changed_month= async(e)=>{
        setSelected_month(e)
        setRefresh(e)
    }
    return (
        <Container style={{minHeight:'85vh'}} className='container'>
      <Grid className='first_line_finance'>
          <Grid>
              <select className='select_month' onChange={(e)=>{changed_month(e.target.value)}}>
             
                  <option value={today.toLocaleString('default', { month: 'long' })}>החודש</option>
                  <option value='Febuary'>פבואר</option>
                  <option value='March'>מרץ</option>
                  <option value='April'>אפריל</option>
                  <option value='May'>מאי</option>
                  <option value='June'>יוני</option>
                  <option value='July'>יולי</option>
                  <option value='August'>אוגוסט</option>
                  <option value='September'>ספטמבר</option>
                  <option value='October'>אוקטובר</option>
                  <option value='Novenber'>נובמבר</option>
                  <option value='December'>דצמבר</option>
                  
              </select>
          </Grid>
          <Grid>
<h3>מכירות</h3>
      </Grid>
      </Grid>
    
      <Grid>
<Grid className='first_chart'>
    <Grid className='small-chart-warper' xl={6} md={6} lg={6}>
      <Pie_chart
      number_orders_month={number_orders_month}
      number_orders={number_orders}
      />
    </Grid>
    <Grid xl={6} md={6} lg={6}>
    <Grid className='profit-warper'>
       <h4> <span className='amount_money'>{total_profit}</span>:רווח כללי</h4>
      </Grid>
      <Grid className='profit-warper'>
      <h4><span className='amount_money'>{month_profit}</span>:רווח חודשי</h4> 
     </Grid>
     <Grid className='profit-warper'>
      <h4><span className='amount_money'>{parseInt(total_profit)-parseInt(cash_withrawal)}₪</span>:יתרה</h4> 
     </Grid>
    </Grid>
</Grid>
<Grid style={{marginTop:'10px',marginBottom:'20px'}}>
   <Bt_money 
    tokenID={tokenID}
    email={email}
   token={token}
   total_profit={parseInt(total_profit)-parseInt(cash_withrawal)}
   setCash_withrawal={setCash_withrawal}
   cooker={cooker}
     />
</Grid>
<Grid style={{marginBottom:'30px'}}>
    <Chart_big bigChart_data={bigChart_data}/>
</Grid>
      </Grid>
        </Container>
    )
}
