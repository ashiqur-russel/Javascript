const Menu = {
    _course: {
        appetizers: [],
        mains: [],
        desserts: []
    },


    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },

    get appetizers() {

    },
    get mains() {

    },
    get desserts() {

    },

    set appetizers(appetizersIn) {

    },
    set mains(mainsIn) {

    },
    set desserts(dessertsIn) {

    },

    addDishToCourse(courseName, dishName, dishPrice) {

        const courses = {
            courseName
        }

        this._courses[courseName].push(courses);


        const dish = {


            dishName
        }


        this._courses[dishName].push(dish);




        const price = {
            dishPrice
        }

        this._courses[dishPrice].push(price);
    },

    getRandomDishFromCourse: function (courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
    },

    generateRandomMeal: function () {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const mains = getRandomDishFromCourse('mains');
        const desserts = getRandomDishFromCourse('desserts');

        const totalPrice = appetizer.price + mains.price + desserts.price;


        return `Your meal is ${appetizer.name}, ${main.name}, ... The price is ${totalPrice}.`;
        menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);

    }

};




