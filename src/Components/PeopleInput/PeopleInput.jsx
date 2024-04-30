import React from 'react'
import style from './peopleInput.module.css'
import { FiUser } from "react-icons/fi";


const PeopleInput = () => {
    return (
        <div className='parent-inputs-search'>
            <div className={`${style.whereInput} input-search`}>
                <span className={style.iconInput}> <FiUser /> </span>
                <input type="text" placeholder='2 adults · 0 children · 1 room' />
            </div>
        </div>
    )
}

export default PeopleInput
