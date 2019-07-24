import React, { Component } from 'react'
import Note from './Note';

export default class NoteForm extends Component {
    render() {
        const { onSubmit, onChange, state } = this.props
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <Note
                                title={state.title}
                                description={state.description}
                            />
                        </div>
                        <div className="col">
                            <form className="mt-2" onSubmit={onSubmit}>
                                <h4>New Note</h4>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        className="form-control"
                                        name="title"
                                        onChange={onChange}
                                        value={state.title}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Description"
                                        className="form-control"
                                        name="description"
                                        onChange={onChange}
                                        value={state.description}
                                    />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-sm btn-outline-primary" type="submit">
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
