import React,{Component} from'react';
import {connect} from "react-redux";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

/* Constants */
const PREV_BTN_NAME = "< Previous";
const NEXT_BTN_NAME = "Next >";

class Deliberation extends Component{
    /* Constructor */
    constructor(props) {
        super(props);
        this.state = {
          personIndex: 0,

          /* TEMPORARY DATA TO BE REPLACED BY DATA FROM db.js */
          people: [
            "Bro",
            "Bro-ham",
            "Brofessor",
            "Brotato Chip",
            "Chairman of the Broad",
            "Google Brome",
            "Brozilla FireFox",
            "Bronana",
            "Honeynut Cheeribro"
          ]
        };
    }

    /* Event Handlers */
    /* Prevent Form from submitting */
    preventSubmit(e) {
      e.preventDefault();
    }

    /* Increment the person counter by 1 (go to the next person) */
    nextPerson() {
      this.setState({ personIndex: this.state.personIndex + 1 }, () => {
        console.log("Number next'd: " + this.state.personIndex)
      });
    }

    /* Decrement the person counter by 1 (go to the previous person) */
    previousPerson() {
      this.setState({ personIndex: this.state.personIndex - 1 }, () => {
        console.log("Number previous'd: " + this.state.personIndex)
      });
    }

    /* Dynamic HTML */
    /* Create a submit button with a given value and functionality */
    generateButton(name, action) {
      return <input type="submit" value={name} onClick={action.bind(this)} />
    }

    /* Generates a previous person button iff the person index is greater than 0 */
    createPreviousButton() {
      /* Return value (defaulted to no HTML) */
      let returnValue = null;

      /* Generate previous person button by condition */
      if (this.state.personIndex > 0)
        returnValue = this.generateButton(PREV_BTN_NAME, this.previousPerson);

      /* Return result */
      return returnValue;
    }

    /* Generates a next person button iff th person index is less than the number of people minus 1 */
    /* (because the arrays are 0-indexed)                                                           */
    createNextButton() {
      /* Return value (defaulted to no HTML) */
      let returnValue = null;

      /* Generate next person button by condition */
      if (this.state.personIndex < this.state.people.length - 1)
        returnValue = this.generateButton(NEXT_BTN_NAME, this.nextPerson);

      /* Return result */
      return returnValue;
    }

    /* Main render function */
    render() {
        return (
          <form onSubmit={ this.preventSubmit.bind(this) }>
            <div>
              <h2>Rushee No. { this.state.personIndex }</h2>
              <h3>Name: { this.state.people[this.state.personIndex] }</h3>
              { this.createPreviousButton() /* Generate a Back button on condition */ }
              { this.createNextButton()     /* Generate a Next button on condition */ }
            </div>
          </form>
        );
    }
}

/* Export class for use outside file */
export default Deliberation;
