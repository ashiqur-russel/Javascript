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
        if (noStudent.isNan()) {
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

class PrimarySchool extends School {
    constructor(name, numberOfStudent, pickupPolicy) {
        super(name, 'primary', numberOfStudent);
        this._pickupPolicy = pickupPolicy;

    }

    get pickupPolicy() {
        this._pickupPolicy = pickupPolicy;
    }

}

class HighSchool extends School {
    constructor(name, numberOfStudent, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = _sportsTeams;

    }

    get _sportsTeams() {
        this._sportsTeams = sportsTeams;
    }

}
//instances of primary school
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();

PrimarySchool.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);