import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';

class SharkAttack extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
    killStudent: PropTypes.func,
  }

  killStudentEvent = (e) => {
    const { killStudent } = this.props;
    e.preventDefault();
    killStudent();
  }

  render() {
    return (
      <button className='btn btn-danger' onClick={this.killStudentEvent} id="attackButton">Shark Attack</button>
    );
  }
}

export default SharkAttack;
