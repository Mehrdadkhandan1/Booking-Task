import React from 'react'
import style from './searchBox.module.css'
import WhereInput from '../WhereInput/WhereInput'
import DateInput from '../dateInput/DateInput'
import PeopleInput from '../PeopleInput/PeopleInput'
import SubmitBtn from '../submitBtn/SubmitBtn'
const SearchBox = () => {
    return (
        <div className={`${style.searchBox}`}>
            <form className={`${style.formSearch} d-flex align-center `}>
                <WhereInput />
                <DateInput />
                <PeopleInput />
                <SubmitBtn />
            </form>
        </div>
    )
}

export default SearchBox
