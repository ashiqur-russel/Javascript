class Media {
    constructor(title) {
        this._title = title;
        this._isCheckout = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckout() {
        return this._isCheckout;
    }
    get ratings() {
        return this._ratings;
    }

    set isCheckout(check) {
        this._isCheckout = check;
    }

    toggleCheckOutStatus() {
        this.isCheckout = !this.isChekout;
    }

    etAverageRating() {
        let ratingAvg = this.ratings.reduce(accumulator, ratings => accumulator + ratings);
        return ratingAvg / this.ratings.length;
    }

    addRating(rate) {
        this.ratings.push(rate);
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }

}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }

}

