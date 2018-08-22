import React, {Component} from 'react';
import './RecentClass.css';



class Recent extends Component{
    constructor(props){
        super(props);
    }

    render()
    {
        //styling the table for the home page
        const bq = {
            borderLeft: 'none'
        };
        const headerStylin = {
            fontFamily: 'cursive'
        };
        return(
            <div className="classes">
                <blockquote className="blockquote text-center" style={bq}>
                    <h2 style={headerStylin}>{this.props.year}</h2>
                    <footer>
                            <p>Marshal: {this.props.marshal}</p>
                            <p>Pledges: {this.props.pledgeGroup}</p>
                            <p>Pledge Class: {this.props.pledgeClass}</p>
                    </footer>
                </blockquote>
            </div>
        );
    }
}

export default Recent;