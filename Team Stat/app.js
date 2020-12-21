const team = {
    _players: [
        {
            firstName: 'Pete',
            lastName: 'Wheeler',
            age: 23
        },
        {
            firstName: 'Russ',
            lastName: 'Bran',
            age: 22
        },
        {
            firstName: 'Alexis',
            lastName: 'Dav',
            age: 23
        }
    ],
    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Captain',
            teamPoints: 42,
            opponentPoints: 37
        }
    ],

    // getters for _games

    get games() {
        return this._games;
    },
    // getters for _players

    get players() {
        return this._players;
    },

    // method for add players

    addPlayers(firstName, lastName, age) {
        let player = {
            firstName: fisrstName,
            lastName: lastName,
            age: age
        };

        this.player.push(player);
    }


};