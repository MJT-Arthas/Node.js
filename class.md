class Person1 {
  name = 'dell';
  getName() {
    return this.name;
  }
}

const person1 = new Person();

console.log(person.getName());

class Teacher extends Person1 {
  getTeacherName() {
    return 'mjt';
  }
}

const teacher = new Teacher();
console.log(teacher.getName());
console.log(teacher.getTeacherName());
