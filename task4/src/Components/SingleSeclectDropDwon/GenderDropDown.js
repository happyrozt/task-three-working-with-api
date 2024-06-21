import React, { useState } from 'react';
import './style.css';

export default function GenderDropDown({ options, title, setData }) {
    const [show, setShow] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOpen = () => {
        setShow(!show);
    };

    const handleClick = (option, e) => {
        e.stopPropagation();  
        setSelectedOption(option);
        setData(option); 
        setShow(false);  
    };

    return (
        <div className='dropDownContainer'>
            <div className='dropDown' onClick={handleOpen}>
            {selectedOption || title}
            </div>
            {show && (
                <div className='dropDownListContainer'>
                    <div className='dropDownContent'>
                        {options.map((option, index) => (
                            <div key={index} className='dropDownContentRow'onClick={(e) => handleClick(option, e)}>{option}
                        
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
