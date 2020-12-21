const menu = {
    _course: {
        appetizers: [],
        mains: [],
        desserts: []
    },

    get appetizers() {

        return this.appetizers;

    },
    get mains() {
        return this.mains;

    },
    get desserts() {
        return this.desserts;

    },

    set appetizers(appetizersIn) {
        this.appetizers = appetizersIn;

    },
    set mains(mainsIn) {
        this.mains = mainsIn;

    },
    set desserts(dessertsIn) {
        this.desserts = dessertsIn;

    },

    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };
    },

    addDishToCourse(courseName, dishName, dishPrice) {

        const dish = {
            name: dishName,
            price: dishPrice

        };
        return this._courses[courseName].push(dish);


    },

    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);

        return dishes[randomIndex];
    },

    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const mains = getRandomDishFromCourse('mains');
        const desserts = getRandomDishFromCourse('desserts');

        const totalPrice = appetizer.price + mains.price + desserts.price;


        return `Your meal is ${appetizer.name}, ${main.name}, ... The price is ${totalPrice}.`;

    },

};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Muffin Fresh Chicken', 2.5);

menu.addDishToCourse('main', 'Royal Ts', 8);

menu.addDishToCourse('main', 'Siganture BBQ', 10.5);

menu.addDishToCourse('desserts', 'cokkie', 2.25);

menu.addDishToCourse('desserts', 'cake', 2.5);

let meal = menu.generateRandomMeal();
console.log(meal);




