import React from 'react';
import studentsData from '../helpers/data/studentsData';

import SharkTank from '../Components/SharkTank/sharkTank';
import Graveyard from '../Components/Graveyard/graveyard';
import SharkAttack from '../Components/SharkAttack/SharkAttack';
import shark from './assets/images/hungry-shark.png';
import './App.scss';


class App extends React.Component {
  state = {
    students: [],
  }

  componentDidMount() {
    const students = studentsData.getStudents();
    this.setState({ students });
  }

  disableAttack = (studentArr) => {
    if (studentArr.length === 0) {
      document.getElementById('attackButton').setAttribute('disabled', true);
      document.getElementById('shark-space').setAttribute('class', '');
    }
  }

  killStudent = () => {
    const { students } = this.state;
    const liveStudents = studentsData.livingStudents();
    if (liveStudents.length >= 1) {
      const selectedStudentIndex = Math.floor(Math.random() * liveStudents.length);
      studentsData.followTheLight(liveStudents[selectedStudentIndex].id);
      this.setState({ students });
      this.disableAttack(studentsData.livingStudents());
    }
  };

  render() {
    const sharkImg = shark;
    return (
    <div className="App">
      <h1>Shark Attack</h1>
      <SharkAttack students={this.students} killStudent={this.killStudent} />
      <div className="hide" id="shark-space">
          <h1 id="hungry-text">I'm Still Hungry!!!</h1>
          <img src={sharkImg} alt="shark" /></div>
      <div className="row justify-content-around">
      <SharkTank students={this.state.students} />
      <Graveyard students={this.state.students} />
      </div>
    </div>
    );
  }
}

export default App;
