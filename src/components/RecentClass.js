import React, {Component} from 'react';
import './RecentClass.css';

class Recent extends Component{
    constructor(props){
        super(props);
    }

    render()
    {
        return(
            <div className="classes">
                <blockquote className="blockquote text-center">
                    <h3>{this.props.year}</h3>
                    <footer>Marshal: {this.props.marshal}</footer>
                </blockquote>
            </div>
        );
    }
}

export default Recent;