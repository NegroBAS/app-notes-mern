import React, { Component } from 'react'
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';

export default class Note extends Component {

    DeleteNote = async (noteId) => {
        let config = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('usertoken')
            }
        }
        await fetch(`http://localhost:8000/api/note/${noteId}`, config);
        this.props.history.push('/app');
    }

    render() {
        return (
            <div
                className="card text-center mx-2 my-2"
                style={{
                    width: '300px',
                    display: 'inline-block'
                }}
            >
                <div className="card-header d-flex justify-content-between">
                    {this.props.title}
                    <Link
                        className="btn btn-sm btn-outline-success"
                        to={"/edit/" + this.props.id}
                    >
                        Edit
                    </Link>

                </div>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.description}</p>
                </div>
                <div className="card-footer text-muted">
                    {format(this.props.created)}
                    <button
                        className="btn btn-sm btn-outline-danger btn-block mt-2"
                        onClick={()=>this.DeleteNote(this.props.id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}
