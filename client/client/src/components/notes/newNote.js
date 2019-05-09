import React from 'react' 
import axios from '../../config/axios'
import NoteForm from './notesForm'

class NoteNew extends React.Component {
    constructor(){
        super() 
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(formData) {
        axios.post('/notes', formData)
            .then(() => this.props.history.push('/notes'))
            .catch(err => console.log(err))
    }

    render(){
        return (
            <div>
                <h2> Add Note </h2>
                <NoteForm handleSubmit={this.handleSubmit} /> 
            </div>
        )
    }
}

export default NoteNew