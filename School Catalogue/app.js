class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._levle = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }

    get levle() {
        return this._levle;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }
    set numberOfStudents(noStudent) {
        if (typeof noStudent === 'String') {
            console.log('Invalid input: numberOfStudents must be set to a Number.')
        }
        this._numberOfStudents = noStudent;

    }

    quickFacts() {
        console.log(`${this._name} educates ${this._number} students at the ${this._level} school level.`)
    }

    static pickSubstituteTeacher(substituteTeachers) {
        const randNo = Math.floor
            (Math.random() * substituteTeachers.length);
        return substituteTeachers[randNo];

    }
}