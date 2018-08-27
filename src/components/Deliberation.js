import React,{Component} from'react';
import {connect} from "react-redux";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class Deliberation extends Component{
    constructor(props){
        super(props);
        this.state = {
          index: 0
        };
    }

    nextPerson(e) {
      this.setState({ index: this.state.index + 1 }, () => {console.log("Number updated")});
      e.preventDefault();
    }

    render() {
        return (
          <form onSubmit={this.nextPerson.bind(this)}>
            <div>
              <h2>Rushee No. {this.state.index}</h2>
              <input type="submit" value="Next" />
            </div>
          </form>
        );
    }
}

export default Deliberation;
