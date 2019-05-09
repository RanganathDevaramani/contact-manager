import React from 'react' 

class NoteForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            title: '', 
            body: '', 
            tags: '' 
        }
        
        this.handleSubmit = this.handleSubmit.bind(this) 
    }

    // es6 arrow function
    handleTitleChange = (e) => {
        const title = e.target.value 
        // console.log(this) 
        this.setState(() => ({ title }))
    }

    // es6 function - bind in constructor
    handleBodyChange = (e) => {
        const body = e.target.value 
        // console.log(this)
        this.setState(() => ({ body }))
    }

    handleTagsChange = (e) => {
        const tags = e.target.value 
        this.setState(() => ({ tags }))
    }

    
    componentWillReceiveProps(nextProps) {
        const { title, body, tags } = nextProps.contact
        this.setState(() => ({
            title, 
            body,
            tags
        }))
    }

    handleSubmit(e) {
        e.preventDefault() 
        const formData = {
            title: this.state.title, 
            body: this.state.body, 
            tags: this.state.tags 
        }
        this.props.handleSubmit(formData)

        // clear form 

        this.setState(() => ({ 
            title: '', body: '', tags: ''
        }))
      
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title 
                        <input type="text" value={this.state.title} onChange={this.handleTitleChange} /> 
                    </label> <br/> 

                    <label>
                        Body
                        <input type="text" value={this.state.body} onChange={this.handleBodyChange} />
                    </label> <br /> 

                    <label>
                        Tags
                        <input type="text" value={this.state.email} onChange={this.handleTagsChange} />
                    </label> <br /> 

                    <input type="submit" /> 
                </form> 
            </div>
        )
    }
}

export default NoteForm