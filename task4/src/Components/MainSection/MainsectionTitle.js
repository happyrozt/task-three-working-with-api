import React, { useState, useEffect } from 'react';
import './mainsectionstyle.css';
import { dropDownOption,  selectedFilteredData } from '../ApiRequest/ApiService';
import GenderDropDown from '../SingleSeclectDropDwon/GenderDropDown';
import SingleSelectDropDown from '../SingleSeclectDropDwon/SingleSelectDropDown';
const gender =["Male","Female","unknown"]
const status =["Alive","Dead","unknown"]
export default function MainsectionTitle({ setData }) {
    
    // const [dropDownOptions, setDropDownOptions] = useState({
    //     gender: [],
    //     status: []
    // });
    const [selectedFilters, setSelectedFilters] = useState({
        gender: '',
        status: ''
    });

    const handleClick = async (selectedParameter) => {
        // let options = await dropDownOption(selectedParameter);
        // setDropDownOptions(prevOptions => ({
        //     ...prevOptions,
        //     [selectedParameter]: options
        // }));
    };

    const handleFilterChange = async (filterType, value) => {
        setSelectedFilters(prevFilters => ({
            ...prevFilters,
            [filterType]: value
        }));
    };

    useEffect(() => {
        const fetchData = async () => {
            const filteredData = await  selectedFilteredData(selectedFilters.gender, selectedFilters.status);
            setData(filteredData);
        };

        fetchData();
    }, [selectedFilters, setData]);

    return (
        <div className='mainContainerDiv'>
            <div className='title'>
                <h1>The Rick and Morty API </h1>
            </div>
            <div className='filterContainer'>
                <div onClick={() => handleClick("status")}>
                    <SingleSelectDropDown options={status} title={'Status'} setData={(value) => handleFilterChange('status', value)} />
                </div>
                <div onClick={() => handleClick("gender")}>
                    <SingleSelectDropDown options={gender} title={'Gender'} setData={(value) => handleFilterChange('gender', value)} />
                </div>
            </div>
        </div>
    );
}
