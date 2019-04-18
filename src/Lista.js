import React, { Component } from 'react';
import Card from './Card';

class Lista extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="lista">
                {
                    
                    this.props.jobs &&
                        this.props.jobs.map((job, index) => {
                            return (
                                <Card job={job} key={index} />
                            )
                        })
                }
            </div>
        )
    }
}

export default Lista;