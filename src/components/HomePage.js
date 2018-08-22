import './RecentClass.css';
import React, {Component} from 'react';
import Recent from './RecentClass';

/*
    Homepage component which includes everything first loading in except the header.
    We are going to run render everything through the homepage.
    I.E. we are going to use reducers and action handlers to update current page we want.
    Then based on currentPage we will display certain components.
 */
class homePage extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const fix = {
            marginBottom: '0px'
        };
        const zgP = ['Steph, ', 'Brandon, ', 'Javi, ', 'Ben, ', 'Eli, ', 'Brent, ', 'Angel, ', 'Cole, ', 'Kevin, ', 'Jose'];
        return(
            <div className="body">
                <h2 className="title">Recent Classes</h2>

                <div className="testing">
                    <table className="table table-hover" style={fix}>
                        <tbody>
                        <tr>
                            <th scope="row"><Recent year="Spring 2018" marshal="Jackson Holly" /></th>
                        </tr>
                        <tr>
                            <th scope="row"><Recent year="Fall 2017" marshal="Jacob Funk"/></th>
                        </tr>
                        <tr>
                            <th scope="row"><Recent year="Spring 2017" marshal="Emily Dawson" pledgeClass="Zeta Gamma"
                                pledgeGroup={zgP}/></th>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default homePage;