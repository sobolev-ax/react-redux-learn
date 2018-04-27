import React from 'react'
import AddPhoneNumber from './AddPhoneNumber'
import ListPhoneNumber from './ListPhoneNumber'
import '../styles/PhoneBook.css'

const PhoneBook = ({contacts, addNumber, deleteNumber, ratingNumber}) =>
    <div>
        <h1>Phone Book</h1>
        <AddPhoneNumber addNumber={addNumber}/>
        <ListPhoneNumber
            ratingNumber={ratingNumber}
            deleteNumber={deleteNumber}
            contacts={contacts} />
    </div>

export default PhoneBook;
