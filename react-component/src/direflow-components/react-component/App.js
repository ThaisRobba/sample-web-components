import React from 'react';
import PropTypes from 'prop-types';

const App = (props) => {
  console.log('props', props)
  return <div>Hello, World! I'm {props.name}</div>;
};

App.defaultProps = {
  name: ''
}

App.propTypes = {
  name: PropTypes.string.isRequired,
};

export default App;
