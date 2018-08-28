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
            {
              name: "Bro",
              major: "C0mpUt3R s(13Nc3",
              expectedGradutation: "Spring 2019"
            },

            {
              name: "Bro-ham",
              major: "Mech Engnineering (not Mechanical)",
              expectedGradutation: "Fall 2020"
            },

            {
              name: "Brofessor",
              major: "Hypothesis Science/Engineering",
              expectedGradutation: "Fall 2019"
            },

            {
              name: "Brotato Chip",
              major: "EEEEEEEEEEEE",
              expectedGradutation: "Fall 3018"
            },

            {
              name: "Chairman of the Broad",
              major: "Chimicil Inginiiring",
              expectedGradutation: "Fall 2018"
            },

            {
              name: "Google Brome",
              major: "Biyemee",
              expectedGradutation: "Spring 2017"
            },

            {
              name: "Brozilla FireFox",
              major: "Air-In-Space (Basically Mechanical) Engineering",
              expectedGradutation: "Spring 2020"
            },

            {
              name: "Bronana",
              major: "Lame Computer Systems",
              expectedGradutation: "Fall 2022"
            },

            {
              name: "Honeynut Cheeribro",
              major: "Communications",
              expectedGradutation: "Fall 2022"
            }
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
              <h3>Name: { this.state.people[this.state.personIndex].name }</h3>
              <h3>Major: {this.state.people[this.state.personIndex].major }</h3>
              <h3>Expected Graduation Year: { this.state.people[this.state.personIndex].expectedGradutation }</h3>
              { this.createPreviousButton() /* Generate a Back button on condition */ }
              { this.createNextButton()     /* Generate a Next button on condition */ }
            </div>
          </form>
        );
    }
}

/* Export class for use outside file */
export default Deliberation;
