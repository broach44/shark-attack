import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';

import './sharkTank.scss';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    // const { students } = this.props;
    return (
      <div className="sharkTank">
        <h2>Shark Tank</h2>
      </div>
    );
  }
}

export default SharkTank;
