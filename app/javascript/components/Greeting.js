import React from "react"
import { connect } from 'react-redux';
import { createStructureSelector } from 'reselect';

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';
const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';

const getGreetings = () => {
  return dispatch => {
    dispatch({ type: GET_GREETINGS_REQUEST });
    return fetch('api/greetings')
    .then(response => response.json())
    .then(data => dispatch(getGreetingsSuccess(data)))
    .catch(error => console.log(error));
  };
};

const getGreetingsSuccess = (data) => {
  return {
    type: GET_GREETINGS_SUCCESS,
    payload: data,
  }
};

class Greeting extends React.Component {
  render () {
    const { greetings } = this.props
    const greetingsItem = greetings.map((greeting) => {
      return <h1>{greeting.message}</h1>
    });

    return (
      <h1>{greetingsItem}</h1>
    );
  }
}

const structuredSelector = createStructureSelector({
  greetings: state => state.greetings,
});

const mapDispatchToProps = { getGreetings };

export {
  getGreetingsSuccess,
};

export default connect(structuredSelector, mapDispatchToProps)(Greeting);
