import React from 'react'
import { buildUrl } from '../../utilities'

const url = buildUrl()

export default class extends React.Component {
    state = {
        name : ''
        }

    handleSubmit = async (event) => {
        event.preventDefault()
        await fetch(url,{
            method: "POST",
            body: JSON.stringify(this.state)
        })
        .then(res => console.log(res.json()))

    }

    handleChange = (event) => {
        return (
            this.setState({
            [event.target.name] : event.target.value
            })
        )
    }
    render () {
        return (
          <>  
            <h1>Create Contact</h1>
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input type='text' 
                       name='name'
                       placeholder='Your Name Goes Here' 
                       value={this.state.name} 
                       onChange={this.handleChange} />
                <br/>
                <input type="submit" value="Create Contact!" />
            </form>
            {/* <p>Is This What You Typed?</p> */}
            <p>{this.state.name}</p>
          </>
        )
    }
}