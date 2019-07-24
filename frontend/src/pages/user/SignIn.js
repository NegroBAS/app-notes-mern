import React, { Component } from 'react'
import SignInForm from '../../components/user/SignInForm'
import { login } from '../../components/user/UserFunctions';

export default class SignIn extends Component {

    state = {
        form: {
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
        let res = await login(this.state.form);
        if (res === 'Logged') {
            this.props.history.push('/app');
        } else {
            this.setState({
                error: res
            })
        }
    }

    render() {
        return (
            <div>
                <SignInForm
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    state={this.state}
                />
            </div>
        )
    }
}
