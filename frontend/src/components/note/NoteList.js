import React, { Component } from 'react'
import Note from './Note';

export default class NoteList extends Component {
    render() {
        const { Notes } = this.props;
        return (
            <div>
                <div className="container mt-4">
                    <div className="row">
                        <React.Fragment>
                            {Notes.map((note) => (
                                <div className="col" key={note.id}>
                                    <Note
                                        key={note.id}
                                        id={note.id}
                                        title={note.title}
                                        description={note.description}
                                        created={note.created_at}
                                    />
                                </div>
                            ))}
                        </React.Fragment>
                    </div>
                </div>
            </div>
        )
    }
}
