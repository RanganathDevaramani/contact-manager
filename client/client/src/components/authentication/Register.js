import React from 'react' 
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class UserRegister extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            username: '', 
            email: '', 
            password: '', 
            notice: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }  


    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            username: this.state.username, 
            email: this.state.email, 
            password: this.state.password
        }

        // todo client side validation

        axios.post('http://localhost:3005/users/register', formData)
            .then(() => {
                this.setState(() => ({
                    username: '', email: '', password: '', notice: 'successfully registered, taking you to login screen'
                }))
                setTimeout(() => {
                    this.props.history.push('/users/login')
                }, 2000)
            })
            .catch(err => console.log(err))
    }
     
    handleChange(e) {
        e.persist()
        this.setState(() => ({
            [e.target.name] : e.target.value
        })) 
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h2 color='dark'>Register with us</h2>
                { this.state.notice && <p>{this.state.notice}</p>}
                <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <label>
                            username 
                            <Input type="text" value={this.state.username} onChange={this.handleChange} name="username" placeholder="abc"/>
                        </label> <br/>
                    </FormGroup>
                    
                    <FormGroup>
                        <label>
                            email
                            <Input type="text" value={this.state.email} onChange={this.handleChange} name="email" placeholder="abc@gmail.com"/>
                        </label> <br />
                    </FormGroup>
                    
                    <FormGroup>
                        <label>
                            password
                            <Input type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="****" />
                        </label> <br />
                    </FormGroup>
                    

                    <Input type="submit"/>
                </form>
            </div>
        )
    }
}

export default UserRegister