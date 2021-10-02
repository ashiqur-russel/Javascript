
// Object in javascript

let student = {
    first:'Rafen',
    last:'Ali',
    age:25,
    height: 170,

    studentInfo:function(){
        return this.first + '\n' +this.last;
    }
};

console.log(student.first);
console.log(student.first);
student.first = 'Rob';
console.log(student.first);
student.age++;
console.log(student.age);

console.log(student.studentInfo())