import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';
import Student from '../Student/student';
import studentsData from '../../helpers/data/studentsData';
import './graveyard.scss';


class Graveyard extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const deadStudents = studentsData.dearlyBeloved().map((student) => <Student key={student.id} student={student} />);

    return (
      <div className="graveyard col-5">
        <h2>Graveyard</h2>
        <div className="row">
          {console.log(deadStudents)
          }
        </div>
      </div>
    );
  }
}

export default Graveyard;
