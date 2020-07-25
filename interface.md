interface Person {
  // readonly name: string;
  name: string;
  age?: number;
  [propName: string]: any;
  say(): string;
}

interface Teacher extends Person {
  teach(): string;
}

const getPersonName = (person: Person): void => {
  console.log(person.name);
};

const setPersonName = (person: Person, name: string): void => {
  person.name = name;
};

const person = {
  name: 'dell',
  // age: 18,
  sex: 'male',
  say() {
    console.log('123');
    return '123';
  },
};
getPersonName(person);
setPersonName(person, 'lee');

class User implements Person {
  name = 'dell';
  say() {
    return 'hello';
  }
}
