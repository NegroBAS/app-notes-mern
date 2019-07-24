import React, { Component } from 'react'
import Navigation from '../../components/partials/Navigation';
import Error from '../../components/partials/Error';
import Loading from '../../components/partials/Loading';
import NoteList from '../../components/note/NoteList';

export default class Notes extends Component {
    state = {
        data: [],
        loading: true,
        error: null
    }
    async componentDidMount() {
        if (localStorage.getItem('usertoken')) {
            let config = {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('usertoken')
                }
            }
            let res = await fetch('http://localhost:8000/api/note', config);
            let json = await res.json();
            if (json.status === 401) {
                localStorage.removeItem('usertoken');
                this.props.history.push('/');
            }
            this.setState({
                data: json,
                loading: false
            })
        } else {
            this.setState({
                error: 'Unauthorized',
                loading: false
            })
        }
    }
    Logout = () => {
        localStorage.removeItem('usertoken');
    }

    render() {
        if (this.state.loading) {
            return (
                <Loading />
            )
        }
        if (this.state.error) {
            return (
                <Error
                    title={this.state.error}
                    error="You need a session by App"
                />
            )
        }
        return (
            <div>
                <Navigation 
                    logout={this.Logout}
                />
                <NoteList 
                    Notes={this.state.data}
                />
            </div>
        )
    }
}
