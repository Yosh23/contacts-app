import React from 'react'

export default class extends React.Component {
    state = {
        name: ''
    }

    handleChange = (event) =>{
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
            <form>
                <label>Name:</label>
                <input type='text' 
                       name='name'
                       placeholder='Your Name Goes Here' 
                       value={this.state.name} 
                       onChange={this.handleChange} />
            </form>
            {/* <p>Is This What You Typed?</p> */}
            <p>{this.state.name}</p>
          </>
        )
    }
}