import React, { useState } from 'react'
import MainsectionTitle from './MainsectionTitle'
import './mainsectionstyle.css'
import MainSectionContent from './MainSectionContent'



export default function MainSectionContainer() {
 const[type,setType]= useState('')
 const [data, setData] = useState([]);
    return (
        <div className='mainSectionContainer'>
            
                <MainsectionTitle setType={setType}  setData={setData}/>
                <MainSectionContent type={type} data={data} setData={setData} /> 
        </div>
    )
}
