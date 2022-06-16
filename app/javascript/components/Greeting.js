import React from "react"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';

const getGreetings = () => {
  return dispatch => {
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

const getColor = () => {
  const colors = ['crimson', 'blue', 'darkgreen', 'indigo', 'teal'];
  const colorId = Math.floor(Math.random() * 5);
  return colors[colorId];
};

class Greeting extends React.Component {
  componentWillMount() {
    this.props.getGreetings()
  }

  render () {
    const { greetings } = this.props
    const greetingsItem = greetings.map((greeting) => greeting.message);

    return (
      <h1 className={getColor()}>{greetingsItem}</h1>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greetings: state => state.greetings,
});

const mapDispatchToProps = { getGreetings };

export default connect(structuredSelector, mapDispatchToProps)(Greeting);
