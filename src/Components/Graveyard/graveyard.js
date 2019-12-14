import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';
import studentsData from '../../helpers/data/studentsData';
// import Student from '../Student/student';
import './graveyard.scss';
// import Student from '../Student/student';

class Graveyard extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    // const { students } = this.props;
    const deadStudentArr = studentsData.dearlyBeloved();
    // const studentCards = students.map((student) => <Student key={student.id} student={student} />);

    return (
      <div className="graveyard col-5">
        <h2>Graveyard</h2>
        <div className="row">
          {deadStudentArr}
        </div>
      </div>
    );
  }
}

export default Graveyard;
