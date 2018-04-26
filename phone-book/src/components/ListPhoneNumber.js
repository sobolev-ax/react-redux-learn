import React from 'react'

const ListPhoneNumber = ({contacts, deleteNumber}) =>
    <ul>
        {(contacts.length === 0) ?
            <li>no contacts...</li> :
            contacts.map((contact) =>
                <li className="list-phone-number" key={contact.id}>
                    <span><button onClick={() => deleteNumber(contact['id'])}>X</button></span>
                    <span className="list-phone-number-color"
                          style={{backgroundColor: contact.color}}></span>
                    <span>{contact.phone}</span>
                    <span>{contact.name}</span>
                </li>
            )
        }
    </ul>

export default ListPhoneNumber;
