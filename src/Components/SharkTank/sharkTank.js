import React from 'react';
import PropTypes from 'prop-types';

import Student from '../Student/student';
import studentShape from '../../helpers/propz/studentShape';

import './sharkTank.scss';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { students } = this.props;

    const studentCards = students.map((student) => <Student key={student.id} student={student} />);
    return (
      <div className="sharkTank">
        <h2>Shark Tank</h2>
        <div className="row mx-auto">
          {studentCards}
        </div>
      </div>
    );
  }
}

export default SharkTank;
