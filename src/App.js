import React from 'react'
import styled from 'styled-components'
import {Router} from '@reach/router'
import {Home, Contact, NotFound} from './pages'
import CreateContact from './components/Contacts/CreateContact.js'
import {Nav} from './components/Nav'

const Header = styled.header`
  background: #e6e6e6;
  padding: 16px;
` 

const Main = styled.main`
  padding:16px;
`

export default () => (
  <>
    <Header />
    <Nav />
    <Main>
        <Router>
          <Home path="/" />
          <Contact path="/:id" />
          <CreateContact path="/create-contact"/>
          <NotFound default />
        </Router>
    </Main>
  </>
)