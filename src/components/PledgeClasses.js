import React,{Component} from'react';
//import * as envAction from '../actions/envAction';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './PledgeClasses.css';
import ClassInfo from './ClassInfo';

class PledgeClasses extends Component{
    constructor(props){
        super(props);
        this.formatCells = this.formatCells.bind(this);
        this.getInfo = this.getInfo.bind(this);
        this.state = {
            selected: '',
            id: ''
        };
    }

    componentDidUpdate()
    {
        console.log(this.state.selected);
    }
    getInfo(row){
        this.setState({selected: row});

    }

    formatCells(cell, row){
        return (
          <p onClick={() => this.getInfo(row)}>{cell}</p>
        );
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

        const products1 = [];

        const data = [
            {
                marshal: 'Emily Dawson',
                pc: 'Zeta Gamma',
                pledges: [
                    {
                        name: 'Stephanie',
                        roll: '286',
                        description: 'Choo choo'
                    },
                    {
                        name: 'Brandon',
                        roll: '288',
                        description: 'GOES HARD IN THE MF PAINT'
                    },
                    {
                        name: 'Javi',
                        roll: '283',
                        description: 'spooky'
                    },
                    {
                        name: 'Angel',
                        roll: '289',
                        description: 'who is this guy'
                    },
                    {
                        name: 'Ben',
                        roll: '285',
                        description: 'daddy'
                    }]
            }
        ];


        function addProducts(quantity) {
            const startId = products1.length;
            for (let i = 0; i < quantity; i++) {
                const id = startId + i;
                products1.push({
                    marshal: data[i].marshal,
                    pledgeClass: data[i].pc,
                    pledges: data[i].pledges
                });
            }
        }

        addProducts(data.length);

        return(

          <div className="classTable">
              {!this.state.selected &&
              <BootstrapTable search={true} data={products1} hover={true} pagination>
                  <TableHeaderColumn dataField="pledgeClass" isKey={true} dataFormat={this.formatCells}
                                     dataAlign="center" dataSort={false}>Pledge Class</TableHeaderColumn>
              </BootstrapTable>
                  ||
              <ClassInfo pledgeInfo={this.state.selected}/>
              }
          </div>
        );
    }
}

export default PledgeClasses;