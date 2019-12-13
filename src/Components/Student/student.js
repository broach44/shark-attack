import React from 'react';

import studentShape from '../../helpers/propz/studentShape';

import './student.scss';

class Student extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;

    return (
      <div className="card col-2 m-2">
        <img src={student.studentImg} className="card-img-top" alt="student" />
        <div className="card-body">
          <h5 className="card-title">{student.firstName} {student.lastName}</h5>
        </div>
      </div>
    );
  }
}

export default Student;