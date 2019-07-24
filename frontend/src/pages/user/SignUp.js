import React, { Component } from 'react'
import SignUpForm from '../../components/user/SignUpForm';
import { register } from '../../components/user/UserFunctions';

export default class SignUp extends Component {
    state = {
        form: {
            fullname: '',
            username: '',
            email: '',
            password: ''
        },
        error: null
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        let res = await register(this.state.form);
        console.log(res);
        if (res.status === 400) {
            this.setState({
                error: res.message
            })
        }
        if (res.status === 201) {
            this.props.history.push('/');
        }
    }
    render() {
        return (
            <div>
                <SignUpForm 
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    state={this.state}
                />
            </div>
        )
    }
}
