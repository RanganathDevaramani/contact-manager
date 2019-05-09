import React from 'react' 
import { Link } from 'react-router-dom'
import axios from '../../config/axios'

class NotesList extends React.Component {
    constructor(props){
        super(props) 
        this.state = {
            notes: []
        }
    }

    componentDidMount() {
        axios.get('/notes')
            .then(response => this.setState(() => ({ notes: response.data })))
    }
    render() {
        return (
            <div>
                {
                    this.state.notes.length === 0 ? (<p> No Notes found. Add your first note</p>) : (
                        <div> 
                            <h2>Listing notes - {this.state.notes.length} </h2>
                            <ul>
                                {
                                    this.state.notes.map(note => {
                                        return (
                                            <li key={note._id}> <Link to={`/notes/${note._id}`}>{note.name} </Link> </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    ) 
                }

                <Link to="/notes/new">Add Note</Link>

            </div>
        )
    }
}

export default NotesList