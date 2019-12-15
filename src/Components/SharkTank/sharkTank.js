import React from 'react';
import PropTypes from 'prop-types';

import Student from '../Student/student';
import studentShape from '../../helpers/propz/studentShape';

import livingStudents from '../../helpers/data/studentsData';

import './sharkTank.scss';

class SharkTank extends React.Component {
  static propTypes = {
    liveStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const liveStudents = livingStudents.livingStudents();
    const studentCards = liveStudents.map((student) => <Student key={student.id} student={student} />);
    return (
      <div className="sharkTank col-5">
        <h2>Shark Tank</h2>
        <div className="row mx-auto">
          {studentCards}
        </div>
      </div>
    );
  }
}

export default SharkTank;
