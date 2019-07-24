import React, { Component } from 'react'

export default class FatalError extends Component {
    render() {
        return (
            <div className="container my-5">
                <div className="card">
                    <div className="card-header">{this.props.title}</div>
                    <div className="card-body">
                        <p>{this.props.error}</p>
                    </div>
                </div>
            </div>
        )
    }
}
