import React from 'react'
import { LuCalendarDays } from "react-icons/lu";

import style from './dateInput.module.css'
import PickerInput from '../pickerInput/PickerInput';
import DateRangePicker from '../datePicker/datePicker';
const DateInput = () => {
    return (
        <div className='parent-inputs-search'>
            <div className={`${style.whereInput} input-search`}>
                <span className={style.iconInput}> <LuCalendarDays /> </span>
                <input type="text" placeholder='Check-in date — Check-out date' />
            </div>
            <PickerInput>
                    <DateRangePicker />
            </PickerInput>
        </div>
    )

}

export default DateInput
