import React, { Component } from 'react'
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

export default class SignInForm extends Component {
    render() {
        const { onChange, onSubmit, state } = this.props;
        return (
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <div className="card text-center">
                            <div className="card-header">
                                <h3>SignIn</h3>
                            </div>
                            <img src={Logo} alt="Logo Fazt" className="card-img-top mx-auto m-2 rounded-circle w-50" />
                            <div className="card-body">
                                <p className="text-danger">{state.error}</p>
                                <form onSubmit={onSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            className="form-control"
                                            autoFocus
                                            onChange={onChange}
                                            value={state.form.email}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            className="form-control"
                                            onChange={onChange}
                                            value={state.form.password}
                                        />
                                    </div>
                                    <button className="btn btn-outline-primary btn-block" type="submit">
                                        Sign in
                                    </button>
                                </form>
                            </div>
                        </div>
                        <Link to="/signup" className="">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
