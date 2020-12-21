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
            firstName: firstName,
            lastName: lastName,
            age: age
        };

        this.players.push(player);
    },

    // add game method to add some info about oppenent name and point

    addGame(oppName, teamPoint, oppPoint) {
        const game = {
            opponent: oppName,
            points: teamPoint,
            oppoPoint: oppPoint,
        }

        this.games.push(game);
    }



};

// add player 

team.addPlayers('Steph', 'Cury', 28);
team.addPlayers('Sarah', 'Conor', 23);

team.addPlayers('Bruce', 'Jem', 26);

console.log(team.players);

// add opponent name and point details for testing

team.addGame("Russia", 34, 28);
team.addGame("Crotia", 34, 32);
team.addGame("Germany", 34, 35);

console.log(team.games);
