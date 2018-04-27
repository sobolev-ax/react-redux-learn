import React from 'react'
import RatingPhoneNumber from './RatingPhoneNumber'

const ListPhoneNumber = ({contacts, deleteNumber, ratingNumber}) =>
    <ul>
        {(contacts.length === 0) ?
            <li>no contacts...</li> :
            contacts.map((contact) =>
                <li className="list-phone-number" key={contact.id}>
                    <span><button onClick={() => deleteNumber(contact['id'])}>X</button></span>
                    <span className="list-phone-number-color"
                          style={{backgroundColor: contact.color}}></span>
                    <RatingPhoneNumber 
                        id={contact.id}
                        ratingNumber={ratingNumber}
                        rating={contact.rating}/>
                    <span>{contact.phone}</span>
                    <span>{contact.name}</span>
                </li>
            )
        }
    </ul>

export default ListPhoneNumber;
