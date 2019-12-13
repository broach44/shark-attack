import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { students } = this.props;
    console.log(students);
    return (
      <div className="sharkTank">
        <h2>Shark Tank</h2>
      </div>
    );
  }
}

export default SharkTank;
