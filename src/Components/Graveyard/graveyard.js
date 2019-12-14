import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';

import './graveyard.scss';

class Graveyard extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    // const { students } = this.props;
    return (
      <div className="graveyard col-5">
        <h2>Graveyard</h2>
      </div>
    );
  }
}

export default Graveyard;
