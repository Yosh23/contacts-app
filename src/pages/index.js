import React from 'react'
import Contacts from '../components/Contacts'

export const Home = () => (
    <>
        <Contacts />
    </>
)

export const Contact = (props) => (
    <>
    {props.id}
    </>
)

export const NotFound = () => (
    <>
        <h1>404. Not Found</h1>
    </>
)
