import React, {Component} from 'react';
import './ClassInfo.css';

class ClassInfo extends Component{
    constructor(props){
        super(props);
        this.renderRows = this.renderRows.bind(this);
    }

    renderRows(props){
        return(
            <tr>
                <td>{props.roll}</td>
                <td>{props.name}</td>
                <td></td>
                <td>{props.description}</td>
            </tr>
        );
    }

    render(){
        return(
          <div>
              <h3>{this.props.pledgeInfo.pledgeClass}</h3>
              <table className="table table-bordered">
                  <thead className="tablehead">
                  <tr className="d-flex">
                      <th className="col-sm-2">Roll Number</th>
                      <th className="col-sm-2">Name</th>
                      <th className="col-sm-4">Images</th>
                      <th className="col-sm-4">Description</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.props.pledgeInfo.pledges.map(this.renderRows)}
                  </tbody>
              </table>
          </div>
        );
    }
}

export default ClassInfo;