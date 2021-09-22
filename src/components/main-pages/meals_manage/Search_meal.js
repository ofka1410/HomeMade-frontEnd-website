import React,{useState} from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Search_meal({items,setItems,allItems}) {
    const [oldValue,setOldValue]=useState(items)
    const filtered = (e)=>{
        
        if(e){
            let found= items.filter(el=>el.name.includes(e))
            if(found){
                setItems(found)
            }
            else{
            setItems(allItems)
            }
           
           
        }
        else{
            setItems(allItems)
            console.log(items)
        }
        
    }

    return (
        <div className='search_warper'>
          <input className='search' type='text' placeholder="חפש לפי שם של מנה:" onChange={(e)=>{filtered(e.target.value)}}/>  
        </div>
    )
}
