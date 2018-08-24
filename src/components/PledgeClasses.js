import React,{Component} from'react';
import {connect} from "react-redux";
//import * as envAction from '../actions/envAction';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './PledgeClasses.css';

class PledgeClasses extends Component{
    constructor(props){
        super(props);

    }



    render(){
        var products = [{
            id: 1,
            name: "Zeta Gamma",
            price: 100
        },{
            id: 2,
            name: "Eta Gamma",
            price: 100
        }];

        const styleT = {
            margin: '0px'
        }
        const products1 = [];

        function addProducts(quantity) {
            const startId = products1.length;
            for (let i = 0; i < quantity; i++) {
                const id = startId + i;
                products1.push({
                    id: id,
                    name: 'Item name ' + id,
                    price: 2100 + i
                });
            }
        }

        addProducts(70);

        return(
          <div className="classTable">
            <BootstrapTable search={true} data={products1} hover={true} pagination>
                <TableHeaderColumn dataField="name" isKey={true} dataAlign="center" dataSort={true}>Pledge Class</TableHeaderColumn>
            </BootstrapTable>
          </div>
        );
    }
}

export default PledgeClasses;