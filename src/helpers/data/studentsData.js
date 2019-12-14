const students = [
  {
    id: 'student1',
    firstName: 'Alesha',
    lastName: 'Reed',
    studentImg: 'https://p7.hiclipart.com/preview/262/552/52/mermaid-cartoon-drawing-illustration-a-mermaid-with-curly-hair.jpg',
    isDead: false,
  },
  {
    id: 'student2',
    firstName: 'Ashley',
    lastName: 'Claiborne',
    studentImg: 'https://p7.hiclipart.com/preview/262/552/52/mermaid-cartoon-drawing-illustration-a-mermaid-with-curly-hair.jpg',
    isDead: false,
  },
  {
    id: 'student3',
    firstName: 'Charity',
    lastName: 'Bunyon',
    studentImg: 'https://p7.hiclipart.com/preview/262/552/52/mermaid-cartoon-drawing-illustration-a-mermaid-with-curly-hair.jpg',
    isDead: false,
  },
  {
    id: 'student4',
    firstName: 'Connor',
    lastName: 'Sullivan',
    studentImg: 'https://i-love-png.com/images/74-747346_peter-mermaid-peter-family-guy-png.png',
    isDead: false,
  },
  {
    id: 'student5',
    firstName: 'Crystal',
    lastName: 'Broach',
    studentImg: 'https://p7.hiclipart.com/preview/262/552/52/mermaid-cartoon-drawing-illustration-a-mermaid-with-curly-hair.jpg',
    isDead: false,
  },
  {
    id: 'student6',
    firstName: 'Denise',
    lastName: 'Baker',
    studentImg: 'https://p7.hiclipart.com/preview/262/552/52/mermaid-cartoon-drawing-illustration-a-mermaid-with-curly-hair.jpg',
    isDead: false,
  },
  {
    id: 'student7',
    firstName: 'Emilee',
    lastName: 'Mitchell',
    studentImg: 'https://p7.hiclipart.com/preview/262/552/52/mermaid-cartoon-drawing-illustration-a-mermaid-with-curly-hair.jpg',
    isDead: false,
  },
  {
    id: 'student8',
    firstName: 'Evan',
    lastName: 'Grabenstein',
    studentImg: 'https://i-love-png.com/images/74-747346_peter-mermaid-peter-family-guy-png.png',
    isDead: false,
  },
  {
    id: 'student9',
    firstName: 'Gabriel',
    lastName: 'Seals',
    studentImg: 'https://i-love-png.com/images/74-747346_peter-mermaid-peter-family-guy-png.png',
    isDead: false,
  },
  {
    id: 'student10',
    firstName: 'Ivan',
    lastName: 'Phelps',
    studentImg: 'https://i-love-png.com/images/74-747346_peter-mermaid-peter-family-guy-png.png',
    isDead: false,
  },
  {
    id: 'student11',
    firstName: 'Jacob',
    lastName: 'Best-Wittenberg',
    studentImg: 'https://i-love-png.com/images/74-747346_peter-mermaid-peter-family-guy-png.png',
    isDead: false,
  },
  {
    id: 'student12',
    firstName: 'Jamie',
    lastName: 'Phillips',
    studentImg: 'https://i-love-png.com/images/74-747346_peter-mermaid-peter-family-guy-png.png',
    isDead: false,
  },
  {
    id: 'student13',
    firstName: 'Jasmine',
    lastName: 'Williams',
    studentImg: 'https://p7.hiclipart.com/preview/262/552/52/mermaid-cartoon-drawing-illustration-a-mermaid-with-curly-hair.jpg',
    isDead: false,
  },
  {
    id: 'student14',
    firstName: 'John',
    lastName: 'Key',
    studentImg: 'https://i-love-png.com/images/74-747346_peter-mermaid-peter-family-guy-png.png',
    isDead: false,
  },
  {
    id: 'student15',
    firstName: 'John',
    lastName: 'Thielman',
    studentImg: 'https://i-love-png.com/images/74-747346_peter-mermaid-peter-family-guy-png.png',
    isDead: false,
  },
  {
    id: 'student16',
    firstName: 'John',
    lastName: 'Johnson',
    studentImg: 'https://i-love-png.com/images/74-747346_peter-mermaid-peter-family-guy-png.png',
    isDead: false,
  },
  {
    id: 'student17',
    firstName: 'Kelsey',
    lastName: 'Creel',
    studentImg: 'https://p7.hiclipart.com/preview/262/552/52/mermaid-cartoon-drawing-illustration-a-mermaid-with-curly-hair.jpg',
    isDead: false,
  },
  {
    id: 'student18',
    firstName: 'Laura',
    lastName: 'Collins',
    studentImg: 'https://p7.hiclipart.com/preview/262/552/52/mermaid-cartoon-drawing-illustration-a-mermaid-with-curly-hair.jpg',
    isDead: false,
  },
  {
    id: 'student19',
    firstName: 'Maggie',
    lastName: 'Greene',
    studentImg: 'https://p7.hiclipart.com/preview/262/552/52/mermaid-cartoon-drawing-illustration-a-mermaid-with-curly-hair.jpg',
    isDead: false,
  },
  {
    id: 'student20',
    firstName: 'Maria',
    lastName: 'Brock',
    studentImg: 'https://p7.hiclipart.com/preview/262/552/52/mermaid-cartoon-drawing-illustration-a-mermaid-with-curly-hair.jpg',
    isDead: false,
  },
  {
    id: 'student21',
    firstName: 'Monica',
    lastName: 'Djunaidi',
    studentImg: 'https://p7.hiclipart.com/preview/262/552/52/mermaid-cartoon-drawing-illustration-a-mermaid-with-curly-hair.jpg',
    isDead: false,
  },
  {
    id: 'student22',
    firstName: 'Randy',
    lastName: 'Tate',
    studentImg: 'https://i-love-png.com/images/74-747346_peter-mermaid-peter-family-guy-png.png',
    isDead: false,
  },
  {
    id: 'student23',
    firstName: 'Raymond',
    lastName: 'Arceneaux',
    studentImg: 'https://i-love-png.com/images/74-747346_peter-mermaid-peter-family-guy-png.png',
    isDead: true,
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

export default { getStudents, dearlyBeloved };
