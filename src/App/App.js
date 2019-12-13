import React from 'react';

import studentsData from '../helpers/data/studentsData';

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
    return (
    <div className="App">
      <h1>Shark Attack</h1>
      <button className='btn btn-danger'>HELP ME</button>
    </div>
    );
  }
}

export default App;
