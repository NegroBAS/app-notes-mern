import React, { Component } from 'react'
import Navigation from '../../components/partials/Navigation';
import NoteForm from '../../components/note/NoteForm';
import { get_note, create, update_note } from '../../components/note/NoteFunctions';

export default class NewNote extends Component {
    state = {
        title: '',
        description: '',
        editing: false
    }

    async componentDidMount() {
        if (this.props.match.params.id) {
            const res = await get_note(this.props.match.params.id);
            this.setState({
                title: res[0].title,
                description: res[0].description,
                editing: true
            });
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        if (this.state.editing) {
            const updatedNote = {
                title: this.state.title,
                description: this.state.description
            };
            await update_note(this.props.match.params.id, updatedNote);
            this.props.history.push('/app');
        } else {
            const newNote = {
                title: this.state.title,
                description: this.state.description
            };
            await create(newNote);
            this.props.history.push('/app');
        }

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <Navigation />
                <NoteForm
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    state={this.state}
                />
            </div>
        )
    }
}
