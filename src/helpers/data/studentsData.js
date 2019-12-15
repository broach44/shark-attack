const students = [
  {
    id: 'student1',
    firstName: 'Alesha',
    lastName: 'Reed',
    studentImg: 'http://www.pngonly.com/wp-content/uploads/2017/06/Mermaid-Free-PNG.png',
    isDead: false,
  },
  {
    id: 'student2',
    firstName: 'Ashley',
    lastName: 'Claiborne',
    studentImg: 'http://www.pngonly.com/wp-content/uploads/2017/06/Mermaid-Free-PNG.png',
    isDead: false,
  },
  {
    id: 'student3',
    firstName: 'Charity',
    lastName: 'Bunyon',
    studentImg: 'http://www.pngonly.com/wp-content/uploads/2017/06/Mermaid-Free-PNG.png',
    isDead: false,
  },
  {
    id: 'student4',
    firstName: 'Connor',
    lastName: 'Sullivan',
    studentImg: 'https://familyguyaddicts.files.wordpress.com/2014/04/petermermaid-animation-012idlepic4x.png',
    isDead: false,
  },
  {
    id: 'student5',
    firstName: 'Crystal',
    lastName: 'Broach',
    studentImg: 'http://www.pngonly.com/wp-content/uploads/2017/06/Mermaid-Free-PNG.png',
    isDead: false,
  },
  {
    id: 'student6',
    firstName: 'Denise',
    lastName: 'Baker',
    studentImg: 'http://www.pngonly.com/wp-content/uploads/2017/06/Mermaid-Free-PNG.png',
    isDead: false,
  },
  {
    id: 'student7',
    firstName: 'Emilee',
    lastName: 'Mitchell',
    studentImg: 'http://www.pngonly.com/wp-content/uploads/2017/06/Mermaid-Free-PNG.png',
    isDead: false,
  },
  {
    id: 'student8',
    firstName: 'Evan',
    lastName: 'Grabenstein',
    studentImg: 'https://familyguyaddicts.files.wordpress.com/2014/04/petermermaid-animation-012idlepic4x.png',
    isDead: false,
  },
  {
    id: 'student9',
    firstName: 'Gabriel',
    lastName: 'Seals',
    studentImg: 'https://familyguyaddicts.files.wordpress.com/2014/04/petermermaid-animation-012idlepic4x.png',
    isDead: false,
  },
  {
    id: 'student10',
    firstName: 'Ivan',
    lastName: 'Phelps',
    studentImg: 'https://familyguyaddicts.files.wordpress.com/2014/04/petermermaid-animation-012idlepic4x.png',
    isDead: false,
  },
  {
    id: 'student11',
    firstName: 'Jacob',
    lastName: 'Best-Wittenberg',
    studentImg: 'https://familyguyaddicts.files.wordpress.com/2014/04/petermermaid-animation-012idlepic4x.png',
    isDead: false,
  },
  {
    id: 'student12',
    firstName: 'Jamie',
    lastName: 'Phillips',
    studentImg: 'https://familyguyaddicts.files.wordpress.com/2014/04/petermermaid-animation-012idlepic4x.png',
    isDead: false,
  },
  {
    id: 'student13',
    firstName: 'Jasmine',
    lastName: 'Williams',
    studentImg: 'http://www.pngonly.com/wp-content/uploads/2017/06/Mermaid-Free-PNG.png',
    isDead: false,
  },
  {
    id: 'student14',
    firstName: 'John',
    lastName: 'Key',
    studentImg: 'https://familyguyaddicts.files.wordpress.com/2014/04/petermermaid-animation-012idlepic4x.png',
    isDead: false,
  },
  {
    id: 'student15',
    firstName: 'John',
    lastName: 'Thielman',
    studentImg: 'https://familyguyaddicts.files.wordpress.com/2014/04/petermermaid-animation-012idlepic4x.png',
    isDead: false,
  },
  {
    id: 'student16',
    firstName: 'John',
    lastName: 'Johnson',
    studentImg: 'https://familyguyaddicts.files.wordpress.com/2014/04/petermermaid-animation-012idlepic4x.png',
    isDead: false,
  },
  {
    id: 'student17',
    firstName: 'Kelsey',
    lastName: 'Creel',
    studentImg: 'http://www.pngonly.com/wp-content/uploads/2017/06/Mermaid-Free-PNG.png',
    isDead: false,
  },
  {
    id: 'student18',
    firstName: 'Laura',
    lastName: 'Collins',
    studentImg: 'http://www.pngonly.com/wp-content/uploads/2017/06/Mermaid-Free-PNG.png',
    isDead: false,
  },
  {
    id: 'student19',
    firstName: 'Maggie',
    lastName: 'Greene',
    studentImg: 'http://www.pngonly.com/wp-content/uploads/2017/06/Mermaid-Free-PNG.png',
    isDead: false,
  },
  {
    id: 'student20',
    firstName: 'Maria',
    lastName: 'Brock',
    studentImg: 'http://www.pngonly.com/wp-content/uploads/2017/06/Mermaid-Free-PNG.png',
    isDead: false,
  },
  {
    id: 'student21',
    firstName: 'Monica',
    lastName: 'Djunaidi',
    studentImg: 'http://www.pngonly.com/wp-content/uploads/2017/06/Mermaid-Free-PNG.png',
    isDead: false,
  },
  {
    id: 'student22',
    firstName: 'Randy',
    lastName: 'Tate',
    studentImg: 'https://familyguyaddicts.files.wordpress.com/2014/04/petermermaid-animation-012idlepic4x.png',
    isDead: false,
  },
  {
    id: 'student23',
    firstName: 'Raymond',
    lastName: 'Arceneaux',
    studentImg: 'https://familyguyaddicts.files.wordpress.com/2014/04/petermermaid-animation-012idlepic4x.png',
    isDead: false,
  },
];

const getStudents = () => students;

const dearlyBeloved = () => {
  const deadStudents = [];
  students.forEach((student) => {
    if (student.isDead === true) {
      deadStudents.push(student);
    }
  });
  return deadStudents;
};

const livingStudents = () => {
  const liveStudents = [];
  students.forEach((student) => {
    if (student.isDead === false) {
      liveStudents.push(student);
    }
  });
  return liveStudents;
};

const followTheLight = (studentId) => {
  const selectedStudent = livingStudents().find((student) => student.id === studentId);
  selectedStudent.isDead = true;
};

export default {
  getStudents,
  dearlyBeloved,
  livingStudents,
  followTheLight,
};
