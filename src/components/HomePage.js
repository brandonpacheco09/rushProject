import './RecentClass.css';
import React, {Component} from 'react';
import Recent from './RecentClass';
import {connect} from 'react-redux';
import * as envAction from '../actions/envAction';

/*
    Homepage component which includes everything first loading in except the header.
    We are going to run render everything through the homepage.
    I.E. we are going to use reducers and action handlers to update current page we want.
    Then based on currentPage we will display certain components.

    NVM CHANGE OF PLANS. We're just gonna use the basic route system, so we can use path '/pledgeClasses' to
    traverse through the components. 
 */
class homePage extends Component{

    constructor(props){
        super(props);
        this.props.dispatch(envAction.envAction('HOME_PAGE'));
    }


    componentDidUpdate(){
        console.log(this.props.env);
    }

    render(){
        const fix = {
            marginBottom: '0px'
        };
        const zgP = ['Steph, ', 'Brandon, ', 'Javi, ', 'Ben, ', 'Eli, ', 'Brent, ', 'Angel, ', 'Cole, ', 'Kevin, ', 'Jose'];
        return(
            <div className="body">
                <h2 className="title">Recent Classes</h2>
                <div className="testing" id="border">
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

function mapStateToProps(state){
    return{
        env: state.env
    };
}

export default connect(mapStateToProps)(homePage);
//export default homePage;