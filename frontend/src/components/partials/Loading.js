import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <div className="container my-5 p-5">
                <div className="row my-5">
                    <div 
                        className="spinner-border text-primary mx-auto my-5" 
                        role="status"
                        style={{
                            width:'100px',
                            height:'100px',
                            fontSize:'50px'
                        }}
                    >
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        )
    }
}
