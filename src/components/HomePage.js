import React, {Component} from 'react';
import Recent from './RecentClass';
import './RecentClass.css';

class homePage extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="body">
                <h2 className="title">Recent Classes</h2>
                <table className="table table-hover">
                    <tbody>
                        <tr>
                            <th scope="row"><Recent year="Spring 2018" marshal="Jackson Holly" /></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default homePage;