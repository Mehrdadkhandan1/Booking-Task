import React from 'react'
import style from './whereInput.module.css'
import { LuBedSingle } from "react-icons/lu";
import PickerInput from '../pickerInput/PickerInput';
import { SlLocationPin } from "react-icons/sl";

const data = [
    'berlin',
    'tehran',
    'shiraz',
    'berlin',
    'tehran',
    'shiraz'
]
const WhereInput = () => {
    return (
        <div className='parent-inputs-search'>
            <div className={`${style.whereInput} input-search`}>
                <span className={style.iconInput}> <LuBedSingle /> </span>
                <input type="text" placeholder='Where are you going ?' />
            </div>
            {/* <PickerInput>
                <ul className={style.listCity}>
                    {data.map((item) => {
                        return (
                            <li className='d-flex align-center'>
                                <span className='d0'>
                                    <SlLocationPin />
                                </span>
                                <span>
                                    {item}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </PickerInput> */}
        </div>
    )
}

export default WhereInput
