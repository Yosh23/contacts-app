import React, { useEffect, useState } from 'react'
import { buildUrl } from '../../utilities'

const url = buildUrl()

export default () => {
    const [contacts, setContacts] = useState([])
    

    const getContacts = async () => fetch(url).then(res => res.json())

    useEffect(() => {
        getContacts().then(results => setContacts(results))
    }, [])

    return (
        <>
            {contacts.map((contact, index) => (
                <div key={index}><a href={`${contact._id}`}>{contact.name}</a></div>
            ))}
        </>    
    )
}