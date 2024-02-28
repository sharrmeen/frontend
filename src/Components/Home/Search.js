import React,{useState} from 'react'
import{DatePicker,Space} from "antd";


const Search = () => {
    const {RangePicker} = DatePicker;
    const [keyword,setKeyword]=useState({});
    const [value,setValue]=useState([]);

    function returnDates(date,dateString){
        setValue([date[0],date[1]])
        updateKeword("dateIn",dateString[0]);
        updateKeword("dateOut",dateString[1]);
    
    }
// function to update a specific field in the state object
    const updateKeword=(field,value)=>{
        setKeyword((prevKeyword)=>({
            ...prevKeyword,
            [field]:value,
        }));
    };

  return( 
  <>
  
  <div className='searchBar'>
    
    {/* input for searching destinations */}
    <input
    className='search'
    id='search_destination'
    placeholder="Search Destinations"
    type="text"  
    value={keyword.city}
    onChange={(e)=>updateKeword("city",e.target.value)} 
    />


    {/* Date Range Picker */}
    <Space direction='vertical' size={12} className='search'>
        <RangePicker
         value={value}
         format="YYYY-MM-DD"
         picker='date'
         className='date_picker'
         disabledDate={(current)=>{
            return current && current.isBefore(Date.now(),"day");
         }}

         onChange={returnDates}
        />
    </Space>

    {/* input field for adding guests */}

        <input
            className='search'
            id="addguest"
            placeholder='Add Guest'
            type='number'
            value={keyword.guests}
            onChange={(e)=>updateKeword("guest",e.target.value)}
        />

        <span class="material-symbols-outlined searchicon">
        search
        </span>


  </div>
  
    
  </>
);

}

export default Search