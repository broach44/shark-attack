import React from 'react';

import studentShape from '../../helpers/propz/studentShape';

import './student.scss';
import fishbone from './assets/images/fishbone.svg';

class Student extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;

    const checkPulse = (x) => {
      if (x.isDead) {
        return (
          <div className="card-header">
            <h2 className="card-title">RIP</h2>
            <img src={fishbone} alt="fishbone-icon" id="fishbone" />
          </div>
        );
      }
      return (<img src={student.studentImg} className="card-img-top" alt="student" />);
    };

    return (
      <div className="card col-3 m-2">
        {checkPulse(student)}
        <div className="card-body">
          <h5 className="card-text">{student.firstName} {student.lastName}</h5>
        </div>
      </div>
    );
  }
}

export default Student;
