import React, {Component} from 'react'
import PropTypes from 'prop-types'


function ListContacts (props){
    return (
        <div className = 'list-contacts'>
            <div className = 'search-contacts-top'>
            <input className = 'search-contacts'
            type='text'
            placeholder = 'search contacts'
            />
            </div>
            <ol className = 'contact-list'>
                {props.contacts.map((contact) => (
                    <li key={contact.id} className='contact-list-item'>
                        <div className='contact-avatar' style={{
                            backgroundImage:`url(${contact.avatarURL})`
                        }}/>
                        <div className='contact-details'>
                            <p>{contact.name}</p>
                            <p>{contact.email}</p>
                        </div>
                        <button onClick = {() => props.onDeleteContact(contact)}className='contact-remove'></button>
                    </li>
                ))}
            </ol>
        </div>
    )
}

ListContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired 
}
 export default ListContacts