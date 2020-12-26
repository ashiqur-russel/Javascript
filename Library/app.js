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

    getAverageRating() {
        let ratingAvg = this.ratings.reduce(acc)
    }

    addRating() { }


}