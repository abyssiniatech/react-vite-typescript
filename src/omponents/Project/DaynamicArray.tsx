type Student = {
  name: string;
  age: number;
  email: string;
};

const Students: Student[] = [
  { name: "Surafel", age: 25, email: "sura@gmail.com" },
  { name: "Abel", age: 26, email: "abel@gmail.com" },
  { name: "Nati", age: 12, email: "nati@gmail.com" },
  { name: "Aster", age: 25, email: "aster@gmail.com" },
  { name: "Daniel", age: 23, email: "daniel@gmail.com" },
];

const DaynamicArray = () => {
  return (
    <div>
      {Students.map((student, index) => (
        <div key={index}>
          <h2>Name: {student.name}</h2>
          <p>Age: {student.age}</p>
          <p>Email: {student.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default DaynamicArray;
