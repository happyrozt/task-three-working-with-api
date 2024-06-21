import React, { useEffect, useState } from 'react';
import { fetchData } from '../ApiRequest/ApiService';
import Character from '../Characters/Character';
import Loader from '../Loader/Loader';
import './mainsectionstyle.css'

export default function MainSectionContent({data, setData}) {

    return (
        <div className='cardDiv'>
            {data.length > 0  ? (<Character characterData={data} />) : (<Loader />)}
        </div>

    );
}
