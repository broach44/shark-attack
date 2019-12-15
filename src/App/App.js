import React from 'react';

import studentsData from '../helpers/data/studentsData';

import SharkTank from '../Components/SharkTank/sharkTank';
import Graveyard from '../Components/Graveyard/graveyard';

import './App.scss';

class App extends React.Component {
  state = {
    students: [],
  }

  componentDidMount() {
    const students = studentsData.getStudents();
    this.setState({ students });
  }


  render() {
    // console.log('in the app', studentsData.dearlyBeloved());

    return (
    <div className="App">
      <h1>Shark Attack</h1>
      <button className='btn btn-danger'>HELP ME</button>
      <div className="row justify-content-around">
      <SharkTank students={this.state.students} />
      <Graveyard students={this.state.students} />
      </div>
    </div>
    );
  }
}

export default App;
