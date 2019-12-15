import React from 'react';
import PropTypes from 'prop-types';
import studentsData from '../../helpers/data/studentsData';
import studentShape from '../../helpers/propz/studentShape';

class SharkAttack extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  killStudent = (e) => {
    // const { students } = this.propTypes;
    e.preventDefault();
    const liveStudents = studentsData.livingStudents();
    console.log(liveStudents);
    const selectedStudentIndex = Math.floor(Math.random() * liveStudents.length);
    console.log(selectedStudentIndex);
    const selectedStudentId = liveStudents[selectedStudentIndex].id;
    console.log(selectedStudentId);
    studentsData.followTheLight(selectedStudentId);
  }

  render() {
    return (
      <button className='btn btn-danger' onClick={this.killStudent}>Shark Attack</button>
    );
  }
}

export default SharkAttack;
