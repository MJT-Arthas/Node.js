//public 允许在类的内外部被调用
//private 允许在类的内部被调用
//protected 允许在类的内部和继承的子类被调用

// class Person {
//   protected name: string = '123';
// }

// class Teacher extends Person {
//   name = this.name;
//   say() {
//     console.log(this.name);
//   }
// }
// const teacher = new Teacher();
// teacher.name = '111';
// console.log(teacher.name);

// class Person {
//   // 传统写法
//   // public name: string;
//   // constructor(name: string) {
//   //   this.name = name;
//   //简化写法
//   constructor(public name: string) {}
// }

// const person = new Person('dell');
// console.log(person.name);

// class Person {
//   constructor(public name: string) {}
// }

// class Teacher extends Person {
//   constructor(public age: number) {
//     super('dell');
//   }
// }
// const teacher = new Teacher(28);
// console.log(teacher.name + teacher.age);

// class Person {
//   constructor(private _name: string) {}
//   get name() {
//     return this._name;
//   }
//   set name (name:string){
//     this._name=name
//   }
// }
// const person = new Person('dell');
// console.log(person.name);
// person.name='dell_lee'

//单例模式
// class Demo {
//   private static instance: Demo;
//   private constructor() {}

//   static getInstance() {
//     if (!this.instance) {
//       this.instance = new Demo();
//     }
//     return this.instance
//   }
// }
// const demo1 = Demo.getInstance();
// const demo2 = Demo.getInstance();

// class Person {
//   private static instance;
//   private constructor(public name: string) {}
//   static getInstance = () =>
//     Person.instance || (Person.instance = new Person('dell lee'));
//   //  {
//   // if (!this.instance) {
//   //   this.instance = new Person('dell lee');
//   // }
//   //   return Person.instance || (Person.instance = new Person('dell lee'));
//   // };
// }

// let person1 = Person.getInstance();
// let person2 = Person.getInstance();
// console.log(person1 === person2);

// function Teacher() {
//   this.instance;
// }

// Teacher.getInstance = () => this.instance || (this.instance = new Teacher());
// // if (!this.instance) {
// //   this.instance = new Teacher();
// // }

// let teacher1 = Teacher.getInstance();
// let teacher2 = Teacher.getInstance();
// console.log(teacher1 === teacher2);

// class Person {
//   public readonly _name: string;
//   constructor(public name: string) {
//     this._name = name;
//   }
// }
// const person = new Person('dell');
// console.log(person.name);

abstract class Geom {
  getType() {
    return 'Gemo';
  }
  abstract getArea(): number;
}

class Circle extends Geom {
  getArea() {
    return 123;
  }
}
