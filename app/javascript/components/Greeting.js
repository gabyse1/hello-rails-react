import React from "react"
import { connect } from 'react-redux';
import { createStructureSelector } from 'reselect';

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';

const getGreetings = () => {
  return { type: GET_GREETINGS_REQUEST }
};

class Greeting extends React.Component {
  render () {
    return (
      <h1>{this.props.greeting}</h1>
    );
  }
}

const structuredSelector = createStructureSelector({
  greetings: state => state.greetings,
});

const mapDispatchToProps = { getGreetings };

export default connect(structuredSelector, mapDispatchToProps)(Greeting);
